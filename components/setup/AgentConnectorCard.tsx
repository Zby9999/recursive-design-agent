"use client";

import { RobotIcon as PhosphorRobotIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { AgentIcon } from "./AgentIcon";
import { activeIconGradients } from "./IconGradients";
import { IconBox } from "./IconBox";
import { useSquircle } from "./useSquircle";

export function AgentConnectorCard({ active = false }: { active?: boolean }) {
  const rowRef = useSquircle<HTMLDivElement>(16);

  return (
    <div className="step" aria-disabled={active ? undefined : "true"}>
      <div className="step-row agent-row" ref={rowRef}>
        <div className="step-head">
          <IconBox tone={active ? "purple" : "gray"}>
            <PhosphorRobotIcon
              color={active ? activeIconGradients.robot : "white"}
              size={14}
              weight="fill"
            />
          </IconBox>
          <div className="step-fill">
            <p className="step-label">Connect Your Agent</p>
            <span className="number">3</span>
          </div>
        </div>
        <div className="agent-options" aria-label="Agent choices">
          <AgentChoice iconSrc="/icons/codex.svg" iconClassName="agent-icon--codex">
            Codex
          </AgentChoice>
          <AgentChoice iconSrc="/icons/cursor.svg">Cursor</AgentChoice>
          <AgentChoice iconSrc="/icons/claude.svg">Claude Code</AgentChoice>
        </div>
      </div>
      <p className="helper">
        Bring your <strong>agent</strong> in and let them do their work
      </p>
    </div>
  );
}

function AgentChoice({
  children,
  iconSrc,
  iconClassName = ""
}: {
  children: ReactNode;
  iconSrc: string;
  iconClassName?: string;
}) {
  return (
    <button className="agent-option" disabled type="button">
      <AgentIcon src={iconSrc} className={iconClassName} />
      <span>{children}</span>
    </button>
  );
}
