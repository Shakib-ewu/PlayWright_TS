import { test, expect } from '@playwright/test';

test('Get By Alt Text Locator', async ({ page }) => {
  await page.goto('https://seabags.com/');
  // getByAltText('Sea Bags') resolves to multiple elements, so use .first()
  const input = page.getByAltText('Sea Bags').first();
  await expect(input).toBeVisible();
  await input.click();
  await page.waitForTimeout(1000);
});
