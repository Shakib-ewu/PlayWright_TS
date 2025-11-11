import { test, expect } from '@playwright/test';

test('Get By Text - Swag Labs', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Correct locator
  const logo = page.getByText('Swag Labs', { exact: true });
  await expect(logo).toBeVisible();

  await page.waitForTimeout(1000);
});
