"use client";

import { useSquircle } from "./useSquircle";

export function SetupActionButton({
  label,
  disabled = false
}: {
  label: string;
  disabled?: boolean;
}) {
  const ref = useSquircle<HTMLButtonElement>(12);

  return (
    <button className="action" disabled={disabled} type="button" ref={ref}>
      <span>{label}</span>
    </button>
  );
}
