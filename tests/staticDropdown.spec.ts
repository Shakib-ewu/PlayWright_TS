import {test,expect} from '@playwright/test';

test('Static dropdown',async({page})=>{
    await page.goto('https://www.salesforce.com/au/form/signup/sales/');
    await page.locator('//*[@name="UserTitle"]').selectOption({ value: "IT_Manager_AP" });
    await page.locator('//*[@name="UserTitle"]').selectOption({ label: "Developer / Software Engineer" });
    await page.waitForTimeout(2000);
})

test('Static dropdown - 2',async({page})=>{
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PCEG');
    const dropdown=page.locator('//select[@id="Contact_CountryCode"]');
    await dropdown.selectOption({value: "GA"});
    for(let i=0;i<15;i++){
        const option=dropdown.locator('option').nth(i);
        const text=await option.textContent();
        console.log(text);

        if(text==='Algeria'){
            console.log('Option found at index '+i);
            break;
        }
    }
})