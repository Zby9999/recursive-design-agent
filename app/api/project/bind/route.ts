// POST /api/project/bind
//
// Binds Ikran to a local project folder. Validates the path, creates the
// project-local `.ikran/` metadata (config, SQLite, JSONL events), records the
// initial semantic events, and updates the Runtime-global active project
// pointer.

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authorize } from "../../../../lib/runtime/session";
import { bindProjectFolder } from "../../../../lib/runtime/project";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const auth = authorize(request);
  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, error: auth.reason },
      { status: auth.status }
    );
  }

  let body: { path?: string };
  try {
    body = (await request.json()) as { path?: string };
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  if (!body.path || typeof body.path !== "string") {
    return NextResponse.json(
      { ok: false, error: "missing_path" },
      { status: 400 }
    );
  }

  const result = await bindProjectFolder(body.path);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.reason },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    project: result.config,
    events: result.events
  });
}
