
import {test, expect} from '@playwright/test';

test('Multiple Windows Handling', async ({ page }) => {
    // 1. Open the initial page
    await page.goto('https://demoqa.com/browser-windows');  
    // 2. Click the button that opens a new window
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), // Waits for the new window to open     
        page.locator('xpath=//button[@id="windowButton"]').click() // Clicks the button to open new window
    ]);     
    // 3. Wait for the new page to load
    await newPage.waitForLoadState();
    // 4. Verify the content of the new window
    const heading = newPage.locator('xpath=//h1[@id="sampleHeading"]');
    await expect(heading).toHaveText('This is a sample page'); 
});
