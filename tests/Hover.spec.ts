import {test, expect} from '@playwright/test';

test('Hover Test', async ({page}) => {  
    await page.goto('https://craftcellars.ca/');
  await page.locator('#pc-main-close-button').click();
await page.waitForTimeout(1000);
   const scotch=page.locator('//a[normalize-space()=\'Scotch\']');
    await scotch.hover();
    await page.waitForTimeout(2000);

    
});

test.only('Hover Test - 2', async ({page}) => {  
    await page.goto('https://www.flipkart.com/');
    await page.locator("a[title='Login'] span ").hover();  
    await page.waitForTimeout(1000);
   
});