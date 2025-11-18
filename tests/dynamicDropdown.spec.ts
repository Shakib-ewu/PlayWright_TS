import {test, expect} from '@playwright/test';
import { it } from 'node:test';

test('Dynamic dropdown',async({page})=>{
    await page.goto('https://www.wikipedia.org/');
    const searchInput=page.locator('//*[@id="searchInput"]');
    await searchInput.fill('Playwright');
    await page.waitForTimeout(2000);
    const suggestionList=page.locator('//*[@class="suggestion-title"]');
    const count=await suggestionList.count();
    for(let i=0;i<count;i++){
        const text=await suggestionList.nth(i).textContent();
        if(text?.trim()==='Playwright'){
            await suggestionList.nth(i).click();
            break;
        }
    }
});