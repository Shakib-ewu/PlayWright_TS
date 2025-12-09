import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('https://www.demoblaze.com/index.html');
	await page.locator('#login2').click();
	await page.locator('#loginusername').fill('pavanol');
	await page.locator('#loginpassword').fill('test@123');
	await page.locator("//button[normalize-space()='Log in']").click();
	await page.waitForTimeout(1000);
});

test.afterEach(async ({ page }) => {
	await page.locator('#logout2').click();
});

test('@sanity Hooks demo', async ({ page }) => {
	const products = await page.locator('.hrefch').all();
	await expect(products).toHaveLength(9);
});

test('@regression Add to cart', async ({ page }) => {
	// set up dialog handler BEFORE clicking
	page.on('dialog', async dialog => {
		expect(dialog.message()).toContain('Product added');
		await dialog.accept();
	});

	await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();
	await page.locator("//a[@class='btn btn-success btn-lg']").click();
	await page.waitForTimeout(2000);
});