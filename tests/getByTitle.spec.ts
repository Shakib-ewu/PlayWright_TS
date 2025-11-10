import {test, expect} from '@playwright/test';  

test('Get By Title Locator', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/');
  const input = page.getByTitle('Cricket Schedule');
  await expect(input).toBeVisible();
  await input.click();
  await page.waitForTimeout(1000);
});
