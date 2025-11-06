import { test, expect } from '@playwright/test';  

test('Get By Placeholder Locator', async ({ page }) => {
  await page.goto('https://seabags.com/');
  const input = page.getByPlaceholder('Email');
  await expect(input).toBeVisible();
  await input.fill('test@example.com');
});
         