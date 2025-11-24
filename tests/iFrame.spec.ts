import { test, expect } from '@playwright/test';
import { link } from 'fs/promises';

test('iFrame handling', async ({ page }) => {
	// 1. Open the page and wait for it to load
	await page.goto('https://commitquality.com/practice-iframe', { waitUntil: 'load' });

	const framelocator = page.frameLocator("iframe[title='Products']");
   await framelocator.getByPlaceholder('Filter by product name').fill('test@example.com');
	
});