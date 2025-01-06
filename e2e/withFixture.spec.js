import { expect } from "@playwright/test";
import { test } from "./fixture.js";

test("test with extended browser fixture", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(
    page.getByText(
      "Playwright enables reliable end-to-end testing for modern web apps."
    )
  ).toBeVisible();
});
