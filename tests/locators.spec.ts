import { test, expect, Locator } from '@playwright/test';

test('Sea Bags Logo Locator', async ({ page }) => {
  await page.goto('https://seabags.com/', { waitUntil: 'domcontentloaded' });

  const logo: Locator = page.locator('header img[alt="Sea Bags"]');
  await expect(logo).toBeVisible({ timeout: 10000 });

  await expect(page.getByText('Featured Products')).toBeVisible({ timeout: 10000 });
});
