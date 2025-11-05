import { test, expect, Locator } from '@playwright/test';
  

test('Sea Bags Logo Locator', async ({ page }) => {
  await page.goto('https://seabags.com/');
  const Logo: Locator = page.getByAltText('Sea Bags').first();
  await expect(Logo).toBeVisible();
  await expect (page.getByText("Featured Products")).toBeVisible();
});