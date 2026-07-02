"use client";

// Project setup card — the designer's existing (Figma-owned) web design.
//
// Visually identical to the previous `app/page.tsx` screen. The only change
// versus that design is the data source: it calls the same-origin Ikran
// Runtime (`/api/health`, `/api/events`) with the startup session token
// injected by the server page, instead of a separate bridge. Copy and
// identifiers use "Runtime" to align with the current architecture.
//
// Do not alter layout, copy, icons, or styling here without a Figma source.

import {
  DownloadIcon as PhosphorDownloadIcon,
  FolderSimpleIcon
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { AgentConnectorCard } from "./AgentConnectorCard";
import { activeIconGradients, IconGradients } from "./IconGradients";
import { CompleteCheckIcon, IconBox } from "./IconBox";
import { SetupActionButton } from "./SetupActionButton";
import { SetupStepButton } from "./SetupStepButton";

type Bootstrap = { session: string; service: string };

type RuntimeState = "loading" | "connected" | "disconnected";

type HealthResponse = {
  ok: boolean;
  status: string;
  service: string;
  timestamp: string;
};

type HeartbeatEvent = {
  type: "heartbeat";
  service: string;
  status: string;
  sequence: number;
  timestamp: string;
};

export function ProjectSetupCard({ bootstrap }: { bootstrap: Bootstrap }) {
  const [runtimeState, setRuntimeState] = useState<RuntimeState>("loading");
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [heartbeat, setHeartbeat] = useState<HeartbeatEvent | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function checkHealth() {
      setRuntimeState("loading");
      try {
        const response = await fetch("/api/health", {
          cache: "no-store",
          headers: { "x-ikran-session": bootstrap.session }
        });
        if (!response.ok) {
          throw new Error(`Runtime health failed: ${response.status}`);
        }
        const data = (await response.json()) as HealthResponse;
        if (!cancelled) {
          setHealth(data);
          setRuntimeState(data.ok ? "connected" : "disconnected");
        }
      } catch {
        if (!cancelled) {
          setHealth(null);
          setRuntimeState("disconnected");
        }
      }
    }

    checkHealth();

    return () => {
      cancelled = true;
    };
  }, [bootstrap.session]);

  useEffect(() => {
    const events = new EventSource(
      `/api/events?session=${encodeURIComponent(bootstrap.session)}`
    );

    events.addEventListener("heartbeat", (message) => {
      setHeartbeat(JSON.parse((message as MessageEvent).data));
      setRuntimeState("connected");
    });

    events.onerror = () => {
      setRuntimeState("disconnected");
    };

    return () => events.close();
  }, [bootstrap.session]);

  const helper = useMemo(() => {
    if (runtimeState === "connected") {
      return "Local runtime connected";
    }
    if (runtimeState === "loading") {
      return "Checking local runtime connection";
    }
    return "Local runtime disconnected";
  }, [runtimeState]);

  const folderReady = runtimeState === "connected";

  return (
    <main className="page">
      <IconGradients />
      <section className="setup" aria-label="Project setup">
        <div className="copy">
          <p>Project set up...</p>
          <p className="muted">A few steps before we begin</p>
        </div>

        <div className="steps">
          <SetupStepButton
            icon={
              runtimeState === "connected" ? (
                <CompleteCheckIcon />
              ) : (
                <IconBox tone="pink">
                  <PhosphorDownloadIcon
                    color={activeIconGradients.download}
                    size={14}
                    weight="fill"
                  />
                </IconBox>
              )
            }
            label={runtimeState === "loading" ? "Connecting..." : "Local Runtime"}
            labelComplete={runtimeState === "connected"}
            stepNumber={runtimeState === "connected" ? undefined : 1}
            stepNumberActive
            stepNumberTone="pink"
            helper={renderRuntimeHelper(runtimeState, helper, heartbeat)}
            helperTone={
              runtimeState === "connected"
                ? "success"
                : runtimeState === "disconnected"
                  ? "error"
                  : "default"
            }
            helperTestId="runtime-helper"
          />
          <SetupStepButton
            icon={
              <IconBox tone={folderReady ? "blue" : "gray"}>
                <FolderSimpleIcon
                  color={folderReady ? activeIconGradients.folder : "white"}
                  size={14}
                  weight="fill"
                />
              </IconBox>
            }
            label="Select a Folder"
            stepNumber={2}
            stepNumberTone={folderReady ? "blue" : "gray"}
            helper={
              <>
                Choose a local folder for <strong>files storage</strong> of this
                project
              </>
            }
            disabled={!folderReady}
          />
          <AgentConnectorCard />
        </div>

        <SetupActionButton label="Start Building" disabled />
      </section>

      <span hidden data-testid="runtime-service">
        {health?.service || ""}
      </span>
    </main>
  );
}

function renderRuntimeHelper(
  state: RuntimeState,
  helper: string,
  heartbeat: HeartbeatEvent | null
) {
  if (state === "connected") {
    return (
      <>
        {helper}
        <span className="heartbeat" data-testid="heartbeat-status">
          {" "}
          · heartbeat{" "}
          {heartbeat ? new Date(heartbeat.timestamp).toLocaleTimeString() : "waiting"}
        </span>
      </>
    );
  }

  if (state === "disconnected") {
    return helper;
  }

  return (
    <>
      Install a local runtime for agent - webapp <strong>connection</strong>
    </>
  );
}