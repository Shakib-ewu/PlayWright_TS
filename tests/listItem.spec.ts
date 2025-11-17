import {test,expect} from '@playwright/test';

test('List Items Demo',async({page})=>{
    await page.goto('https://seabags.com/');
    await expect(page.getByRole('listitem')).toHaveCount(66);
           
})

test('List Items with Specific Text',async({page})=>{
    await page.goto('https://seabags.com/');
   const rows= page.getByRole('listitem');
   const count=await rows.count();
   for(let i=0; i<count ;i++){
    console.log( await rows.nth(i).innerText());
   }
})
