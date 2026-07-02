import { expect, test } from "@playwright/test";

test("connects the MAP web app to the local bridge health and heartbeat paths", async ({
  page
}) => {
  await page.goto("/");

  await expect(page.getByText("Project set up...")).toBeVisible();
  await expect(page.getByText("Select a Folder")).toBeVisible();
  await expect(page.getByText("Connect Your Agent")).toBeVisible();

  await expect(page.getByTestId("bridge-helper")).toContainText(
    "Local bridge connected"
  );
  await expect(page.getByTestId("bridge-service")).toHaveText(
    "map-local-bridge"
  );
  await expect(page.getByTestId("heartbeat-status")).toContainText("heartbeat");
  await expect(page.getByTestId("heartbeat-status")).not.toContainText("waiting");
});
