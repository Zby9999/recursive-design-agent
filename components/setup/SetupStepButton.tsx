"use client";

import type { ReactNode } from "react";
import { useSquircle } from "./useSquircle";

type HelperTone = "default" | "success" | "error";
type StepNumberTone = "gray" | "pink" | "blue";

export function SetupStepButton({
  icon,
  label,
  helper,
  stepNumber,
  stepNumberActive = false,
  stepNumberTone = "gray",
  labelComplete = false,
  helperTone = "default",
  helperTestId,
  disabled = false
}: {
  icon: ReactNode;
  label: string;
  helper: ReactNode;
  stepNumber?: number;
  stepNumberActive?: boolean;
  stepNumberTone?: StepNumberTone;
  labelComplete?: boolean;
  helperTone?: HelperTone;
  helperTestId?: string;
  disabled?: boolean;
}) {
  const rowRef = useSquircle<HTMLDivElement>(12);

  return (
    <div className="step" aria-disabled={disabled || undefined}>
      <div className="step-row" ref={rowRef}>
        {icon}
        <div className="step-fill">
          <p className={`step-label ${labelComplete ? "complete" : ""}`}>
            {label}
          </p>
          {stepNumber !== undefined && (
            <span
              className={`number ${stepNumberActive ? "active" : ""} ${
                stepNumberTone === "blue" ? "number--blue" : ""
              }`}
            >
              {stepNumber}
            </span>
          )}
        </div>
      </div>
      <p
        className={`helper ${helperTone === "default" ? "" : helperTone}`}
        data-testid={helperTestId}
      >
        {helper}
      </p>
    </div>
  );
}
