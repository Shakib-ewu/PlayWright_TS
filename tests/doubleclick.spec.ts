import {test,expect}    from '@playwright/test';
test('Double Click Test', async ({page}) => {
    await page.goto('https://demoqa.com/buttons');
    const button= page.locator('#doubleClickBtn');
    await button.dblclick();
    const message= page.locator('#doubleClickMessage');
    await expect(message).toBeVisible();
    await expect(message).toHaveText('You have done a double click');
});