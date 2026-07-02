// POST /api/project/select-folder
//
// Opens the system-native folder picker from the Runtime side and returns the
// selected absolute path. If no native dialog is available on this platform,
// the response signals that the UI should fall back to manual path input.

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authorize } from "../../../../lib/runtime/session";
import { selectFolder } from "../../../../lib/runtime/folder-picker";
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

  const selected = await selectFolder();
  if (!selected.ok) {
    if (selected.reason === "cancelled") {
      return NextResponse.json({
        ok: false,
        error: "native_picker_cancelled"
      });
    }

    return NextResponse.json(
      {
        ok: false,
        error: "native_picker_unavailable",
        detail: selected.detail,
        message:
          "Native folder picker is not available on this platform. Use manual path input instead."
      },
      { status: 503 }
    );
  }

  const bindResult = await bindProjectFolder(selected.path);
  if (!bindResult.ok) {
    return NextResponse.json(
      { ok: false, error: bindResult.reason, path: selected.path },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    path: selected.path,
    project: bindResult.config,
    events: bindResult.events
  });
}
