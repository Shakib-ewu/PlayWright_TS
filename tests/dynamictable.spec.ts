import { test, expect, Locator } from '@playwright/test';

test('Read Dynamic Table', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');

  const rows = page.locator('.table-striped tbody tr');
  const count = await rows.count();

  for (let i = 0; i < count; i++) {
    const rowText = await rows.nth(i).innerText();
    console.log(rowText);
  }
});
