import { test, expect } from '@playwright/test';

test('XPath Locator Examples', async ({ page }) => {
    await page.goto('https://seabags.com/');
    
    // Example 1: Basic XPath to find logo by image alt text
    const logo = page.locator('xpath=//img[@alt="Sea Bags"]').first();
    await expect(logo).toBeVisible();
    //await page.locator('xpath=//img[@alt="Octopus Large Tote with Clasp"]').first().click({ force: true });

    
});