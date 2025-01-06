import { test, expect } from "@playwright/test";

test("test with no custom fixtures", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(
    page.getByText(
      "Playwright enables reliable end-to-end testing for modern web apps."
    )
  ).toBeVisible();
});
