import http from "node:http";

const PORT = Number(process.env.MAP_BRIDGE_PORT || 4317);
const SERVICE = "map-local-bridge";

let heartbeatSequence = 0;

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);

  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, {
      ok: true,
      status: "connected",
      service: SERVICE,
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/events") {
    streamEvents(request, response);
    return;
  }

  sendJson(
    response,
    {
      ok: false,
      error: "not_found"
    },
    404
  );
});

server.listen(PORT, () => {
  console.log(`${SERVICE} listening on http://localhost:${PORT}`);
});

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(response, payload, status = 200) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function streamEvents(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no"
  });

  const sendHeartbeat = () => {
    heartbeatSequence += 1;
    const payload = {
      type: "heartbeat",
      service: SERVICE,
      status: "connected",
      sequence: heartbeatSequence,
      timestamp: new Date().toISOString()
    };

    response.write("event: heartbeat\n");
    response.write(`data: ${JSON.stringify(payload)}\n\n`);
  };

  sendHeartbeat();
  const interval = setInterval(sendHeartbeat, 1500);

  request.on("close", () => {
    clearInterval(interval);
    response.end();
  });
}
