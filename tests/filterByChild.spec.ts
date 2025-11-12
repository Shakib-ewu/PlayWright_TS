import { test, expect } from '@playwright/test';

test('Filter Child - Swag Labs', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Filter to find the product item containing "Sauce Labs Backpack", then click its "Add to cart" button
  await page.locator('.inventory_item').filter({ has: page.getByRole('link', { name: 'Sauce Labs Backpack' }) }).getByRole('button', { name: 'Add to cart' }).click();
});
