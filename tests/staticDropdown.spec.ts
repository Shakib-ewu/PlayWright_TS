import { test, expect } from '@playwright/test';

/*test('Static dropdown', async ({ page }) => {
	await page.goto('https://www.salesforce.com/au/form/signup/sales/');
    await page.locator('//select[@name=\'UserTitle\']').selectOption({ label: "Developer / Software Engineer" });
    await page.waitForTimeout(2000);

});*/


test('Static dropdown - 2',async({page})=>{
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PCEG');
    const dropdown=page.locator('//select[@id="Contact_CountryCode"]');
    await dropdown.selectOption({value: "GA"});
    

})