import { test, expect } from '@playwright/test';

test('Get By Label Locator', async ({ page }) => {
  await page.goto('https://seabags.com/');
  const input = page.getByLabel('Email Address');
  await expect(input).toBeVisible();

  await page.waitForTimeout(1000);
});
