import {test,expect} from '@playwright/test';

test('List Items Demo',async({page})=>{
    await page.goto('https://seabags.com/');
    await expect(page.getByRole('listitem')).toHaveCount(66);
           
})
