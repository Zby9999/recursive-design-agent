#!/usr/bin/env node
// Ikran launcher.
//
// Starts the local Ikran Runtime (the Next.js server) bound to 127.0.0.1,
// waits for it to serve the Browser UI, and opens a browser tab to the local
// origin. This is the `npx ikran` entrypoint (PRD user stories 76 + 77): a
// single local process that hosts the UI and the `/api/*` Runtime API on the
// same origin.
//
// Usage:
//   ikran                  # dev server, auto-open browser
//   ikran --prod           # `next start` (requires `npm run build` first)
//   ikran --port 4567      # custom port
//   ikran --no-open        # start without opening a browser (CI / smoke)
//   ikran --dev            # explicitly use the dev server (default)

import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { setTimeout as sleep } from "node:timers/promises";
import os from "node:os";

const require = createRequire(import.meta.url);

const argv = process.argv.slice(2);
const hasFlag = (name) => argv.includes(name);
const option = (name, fallback) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : fallback;
};

const mode = hasFlag("--prod") ? "start" : "dev";
const port = Number(option("--port", process.env.IKRAN_PORT || "3000"));
const host = option("--host", process.env.IKRAN_HOST || "127.0.0.1");
const autoOpen = !hasFlag("--no-open");
const localHosts = new Set(["127.0.0.1", "localhost"]);

if (!localHosts.has(host)) {
  console.error(
    `[ikran] Refusing to bind to "${host}". Ikran only supports localhost or 127.0.0.1.`
  );
  process.exit(1);
}

let nextBin;
try {
  nextBin = require.resolve("next/dist/bin/next");
} catch {
  console.error(
    "[ikran] Could not locate the Next.js CLI. Run `npm install` first."
  );
  process.exit(1);
}

const origin = `http://${host}:${port}`;

const child = spawn(process.execPath, [nextBin, mode, "-H", host, "-p", String(port)], {
  env: { ...process.env, IKRAN_HOST: host, IKRAN_PORT: String(port) },
  stdio: "inherit"
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});

async function waitForReady(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status > 0 && res.status < 500) {
        return true;
      }
    } catch {
      // not ready yet
    }
    await sleep(500);
  }
  return false;
}

waitForReady(`${origin}/`, 60_000).then((ok) => {
  if (!ok) {
    console.error(`[ikran] Runtime did not become ready at ${origin}`);
    return;
  }
  console.log(`[ikran] Runtime ready at ${origin}`);
  if (autoOpen) {
    openBrowser(origin);
  }
});

function openBrowser(url) {
  const platform = os.platform();
  let command;
  if (platform === "darwin") {
    command = ["open", url];
  } else if (platform === "win32") {
    command = ["cmd", "/c", "start", "", url];
  } else {
    command = ["xdg-open", url];
  }
  try {
    spawn(command[0], command.slice(1), {
      detached: true,
      stdio: "ignore"
    }).unref();
  } catch {
    // Best-effort. The user can open the URL manually.
  }
}
