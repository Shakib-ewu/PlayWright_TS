import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://seabags.com/');
  await expect(page).toHaveTitle('Sea Bags');
});  

test('homepage has shop link', async ({ page }) => {
  await page.goto('https://seabags.com/');
  let url = page.url();
  expect(url).toBe('https://seabags.com/');
});