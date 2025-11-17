import {test,expect} from '@playwright/test';

test('Static dropdown',async({page})=>{
    await page.goto('https://www.salesforce.com/au/form/signup/sales/');
    await page.locator('//*[@name="UserTitle"]').selectOption({ value: "IT_Manager_AP" });
    await page.locator('//*[@name="UserTitle"]').selectOption({ label: "Developer / Software Engineer" });
    await page.waitForTimeout(2000);
})