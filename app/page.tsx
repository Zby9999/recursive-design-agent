"use client";

import {
  DownloadIcon as PhosphorDownloadIcon,
  FolderSimpleIcon
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { AgentConnectorCard } from "../components/setup/AgentConnectorCard";
import {
  activeIconGradients,
  IconGradients
} from "../components/setup/IconGradients";
import { CompleteCheckIcon, IconBox } from "../components/setup/IconBox";
import { SetupActionButton } from "../components/setup/SetupActionButton";
import { SetupStepButton } from "../components/setup/SetupStepButton";

type BridgeState = "loading" | "connected" | "disconnected";

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

const bridgeUrl =
  process.env.NEXT_PUBLIC_BRIDGE_URL?.replace(/\/$/, "") ||
  "http://localhost:4317";

export default function Home() {
  const [bridgeState, setBridgeState] = useState<BridgeState>("loading");
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [heartbeat, setHeartbeat] = useState<HeartbeatEvent | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function checkHealth() {
      setBridgeState("loading");
      try {
        const response = await fetch(`${bridgeUrl}/health`, {
          cache: "no-store"
        });
        if (!response.ok) {
          throw new Error(`Bridge health failed: ${response.status}`);
        }
        const data = (await response.json()) as HealthResponse;
        if (!cancelled) {
          setHealth(data);
          setBridgeState(data.ok ? "connected" : "disconnected");
        }
      } catch {
        if (!cancelled) {
          setHealth(null);
          setBridgeState("disconnected");
        }
      }
    }

    checkHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const events = new EventSource(`${bridgeUrl}/events`);

    events.addEventListener("heartbeat", (message) => {
      setHeartbeat(JSON.parse((message as MessageEvent).data));
      setBridgeState("connected");
    });

    events.onerror = () => {
      setBridgeState("disconnected");
    };

    return () => events.close();
  }, []);

  const helper = useMemo(() => {
    if (bridgeState === "connected") {
      return "Local bridge connected";
    }
    if (bridgeState === "loading") {
      return "Checking local bridge connection";
    }
    return "Local bridge disconnected";
  }, [bridgeState]);

  const folderReady = bridgeState === "connected";

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
              bridgeState === "connected" ? (
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
            label={bridgeState === "loading" ? "Connecting..." : "Local Bridge Setup"}
            labelComplete={bridgeState === "connected"}
            stepNumber={bridgeState === "connected" ? undefined : 1}
            stepNumberActive
            stepNumberTone="pink"
            helper={renderBridgeHelper(bridgeState, helper, heartbeat)}
            helperTone={
              bridgeState === "connected"
                ? "success"
                : bridgeState === "disconnected"
                  ? "error"
                  : "default"
            }
            helperTestId="bridge-helper"
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

      <span hidden data-testid="bridge-service">
        {health?.service || ""}
      </span>
    </main>
  );
}

function renderBridgeHelper(
  state: BridgeState,
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
