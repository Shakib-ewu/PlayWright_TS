import { test, expect } from '@playwright/test';

test('Get By Role Locator', async ({ page }) => {
    await page.goto('https://seabags.com/');
    const button = page.getByRole('button', { name: 'SHOP CHEBEAGUE TRAVEL COLLECTION' });
    await expect(button).toBeVisible();
    await button.click();
});

test('Get By Role Locator for Link', async ({ page }) => {
    await page.goto('https://seabags.com/');
    const link = page.getByRole('button', { name: 'SHOP ALL' }).first();
  await expect(link).toBeVisible();
  await link.click();
});