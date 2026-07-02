// GET /api/project
//
// Returns the currently active bound project, if any. This lets the Browser UI
// recover its state after a refresh without re-binding a folder.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authorize } from "../../../lib/runtime/session";
import { getActiveProjectState } from "../../../lib/runtime/project";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const auth = authorize(request);
  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, error: auth.reason },
      { status: auth.status }
    );
  }

  const state = getActiveProjectState();
  if (!state.ok) {
    return NextResponse.json(
      { ok: false, error: state.reason },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ok: true,
    project: state.project
  });
}
