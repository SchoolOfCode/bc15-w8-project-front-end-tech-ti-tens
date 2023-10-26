import { test, expect } from "@playwright/test";

//test:
//test skeleton
//navigate to page
//checked that page has title.
//click next.
//user clicks true or false.
//user clicks next.
// playwright to recognise different questions to have different answers.

test("practice test", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/public/index.html");

  await expect(page).toHaveTitle(/Tech Ti-tens Revision tool/);

  const nextB = page.getByRole("button", { name: "Next" });
  await expect(nextB).toContainText("Next");
  await nextB.click();
});
