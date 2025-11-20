import { test, expect } from '@playwright/test';

test('Check all checkboxes on testautomationpractice blog', async ({ page }) => {
	// 1. Open the page
	await page.goto('https://testautomationpractice.blogspot.com/');

	// 2. Find all checkbox inputs
	const checkboxes = page.locator('xpath=//input[@type="checkbox"]');
	const count = await checkboxes.count();

	// 3. Loop over each checkbox: check it and assert it's checked
	for (let i = 0; i < count; i++) {
		const cb = checkboxes.nth(i);
		await cb.check();               // select the checkbox
		await expect(cb).toBeChecked(); // assert it's checked
	}
});