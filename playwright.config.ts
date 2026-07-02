import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 10_000
  },
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry"
  },
  webServer: [
    {
      command: "npm run dev:bridge",
      url: "http://localhost:4317/health",
      reuseExistingServer: !process.env.CI,
      stdout: "pipe",
      stderr: "pipe"
    },
    {
      command: "npm run dev:web",
      url: "http://localhost:3000",
      reuseExistingServer: !process.env.CI,
      stdout: "pipe",
      stderr: "pipe"
    }
  ],
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
