import {test,expect} from '@playwright/test';

/*test('Static dropdown', async ({ page }) => {
    await page.goto('https://www.salesforce.com/au/form/signup/sales/');
    const dropdown = page.locator('//select[@name="UserTitle"]');
   await dropdown.waitFor({ state: 'visible', timeout: 20000 });
    await dropdown.selectOption({ value: "IT_Manager_AP" });
    await dropdown.selectOption({ label: "Developer / Software Engineer" });
    await page.waitForTimeout(2000);
});*/


test('Static dropdown - 2',async({page})=>{
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PCEG');
    const dropdown=page.locator('//select[@id="Contact_CountryCode"]');
    await dropdown.selectOption({value: "GA"});
    

})