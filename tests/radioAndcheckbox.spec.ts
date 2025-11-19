import {test,expect}    from '@playwright/test';
test('Radio and Checkbox Tests', async ({page}) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('xpath=//label[@for="yesRadio"]').click();
     await page.locator('xpath=//label[@for="impressiveRadio"]').click();
     await page.waitForTimeout(1000); 
    await expect(page.locator('xpath=//label[@for="yesRadio"]')).toBeVisible();
    await expect(page.locator('xpath=//label[@for="impressiveRadio"]')).toBeVisible();

});