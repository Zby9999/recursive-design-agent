"use client";

import { RobotIcon as PhosphorRobotIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { AgentIcon } from "./AgentIcon";
import { activeIconGradients } from "./IconGradients";
import { IconBox } from "./IconBox";
import { useSquircle } from "./useSquircle";

export type AgentId = "codex" | "cursor" | "claude";

export function AgentConnectorCard({
  active = false,
  selectedAgent,
  onSelectAgent
}: {
  active?: boolean;
  selectedAgent?: AgentId | null;
  onSelectAgent?: (agent: AgentId) => void;
}) {
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
            <span className={`number ${active ? "number--purple" : ""}`}>3</span>
          </div>
        </div>
        <div className="agent-options" aria-label="Agent choices">
          <AgentChoice
            active={active}
            agent="codex"
            iconSrc="/icons/codex.svg"
            iconClassName="agent-icon--codex"
            selected={selectedAgent === "codex"}
            onSelect={onSelectAgent}
          >
            Codex
          </AgentChoice>
          <AgentChoice
            active={active}
            agent="cursor"
            iconSrc="/icons/cursor.svg"
            selected={selectedAgent === "cursor"}
            onSelect={onSelectAgent}
          >
            Cursor
          </AgentChoice>
          <AgentChoice
            active={active}
            agent="claude"
            iconSrc="/icons/claude.svg"
            selected={selectedAgent === "claude"}
            onSelect={onSelectAgent}
          >
            Claude Code
          </AgentChoice>
        </div>
      </div>
      <p className="helper">
        Bring your <strong>agent</strong> in and let them do their work
      </p>
    </div>
  );
}

function AgentChoice({
  active,
  agent,
  children,
  iconSrc,
  iconClassName = "",
  selected = false,
  onSelect
}: {
  active: boolean;
  agent: AgentId;
  children: ReactNode;
  iconSrc: string;
  iconClassName?: string;
  selected?: boolean;
  onSelect?: (agent: AgentId) => void;
}) {
  return (
    <button
      className={`agent-option ${active ? "agent-option--active" : ""} ${selected ? "agent-option--selected" : ""}`}
      aria-pressed={selected || undefined}
      disabled={!active}
      onClick={() => onSelect?.(agent)}
      type="button"
    >
      <AgentIcon src={iconSrc} className={iconClassName} />
      <span>{children}</span>
    </button>
  );
}
