import { test, expect } from '@playwright/test';

test('Get By Text Locator', async ({ page }) => {   
    await page.goto('https://seabags.com/');
    const button = page.getByText(' We repurpose sail cloth to reduce landfill waste, promote a more sustainable future and delight customers with durable, made in the USA products.')
    await expect(button).toBeVisible();
});
