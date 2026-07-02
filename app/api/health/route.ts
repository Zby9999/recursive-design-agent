// GET /api/health — Runtime readiness, same-origin + session authorized.
//
// The Browser UI calls this from the same origin to show ready / loading /
// error states. The Ikran launcher polls the document URL (not this endpoint)
// for readiness, because this endpoint requires a valid session token.

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SERVICE } from "../../../lib/runtime/config";
import { authorize } from "../../../lib/runtime/session";

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

  return NextResponse.json(
    {
      ok: true,
      status: "ready",
      service: SERVICE,
      timestamp: new Date().toISOString()
    },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}