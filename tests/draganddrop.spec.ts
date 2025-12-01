import {test,expect} from '@playwright/test';

test('Drag and Drop Test', async ({page}) => {  
    await page.goto('https://demoqa.com/droppable');
   const source= page.locator('#draggable');
   const target= page.locator('(//p[contains(.,\'Drop here\')])[1]');
    await source.dragTo(target);
});

test('Drag and Drop Test - 2', async ({page}) => {  
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    const frame= page.frameLocator('(//iframe[@class="demo-frame"])[1]');
   const source= frame.locator('xpath=//img[@alt="The peaks of High Tatras"]');
   const target= frame.locator('xpath=//div[@id="trash"]');
   await source.dragTo(target);
   await page.waitForTimeout(2000);
});