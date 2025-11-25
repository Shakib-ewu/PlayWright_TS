import { test, expect } from '@playwright/test';

test('Alerts handling', async ({ page }) => {

  await page.goto('https://demoqa.com/alerts');


  // Handling simple alert
  page.once('dialog', async (dialog) => {
    await dialog.accept();
  });
  await page.locator('#alertButton').click();
  await page.waitForTimeout(1000);


  // Handling confirm alert
  page.once('dialog', async (dialog) => {
    await dialog.dismiss();
  });
  await page.locator('#confirmButton').click();
  await page.waitForTimeout(1000);


  // Handling prompt alert
  page.once('dialog', async (dialog) => {
    console.log(dialog.message());
    
    await dialog.accept("Test Prompt Alert");
  });
  await page.locator('#promtButton').click();
  await page.waitForTimeout(1000);

});
