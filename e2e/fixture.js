import { test as baseTest } from "@playwright/test";

/** The Playwright test function but with the browser object extended. */
export const test = baseTest.extend({
  async browser({ browser }, use) {
    await use({
      ...browser,
      async newContext(...args) {
        const context = await browser.newContext(...args);
        // Do stuff on the context before returning it
        return context;
      },
      async newPage(...args) {
        const page = await browser.newPage(...args);
        // Do stuff on the page context before returning the page
        return page;
      },
    });
  },
});
