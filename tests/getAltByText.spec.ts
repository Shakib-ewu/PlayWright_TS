import { test, expect } from '@playwright/test';

test('Click Sea Bags header logo', async ({ page }) => {
  test.setTimeout(60000); // optional buffer
  await page.goto('https://seabags.com/', { waitUntil: 'domcontentloaded' });

  // Wait for the header logo to appear
  const logo = page.locator('header img[alt="Sea Bags"]');
  await expect(logo).toBeVisible({ timeout: 15000 });

  await logo.click();
});
