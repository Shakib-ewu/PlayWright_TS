import {test,expect} from '@playwright/test';
test('Dynamic Table Test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const rows = page.locator('#taskTable tbody tr');
    const count = await rows.count();
    let diskSpace="";
   
    for (let i = 0; i < count; i++) {
      const rowText = await rows.nth(i).innerText();
  
      if(rowText.includes("Firefox")){
     diskSpace= await rows.nth(i).locator('td:has-text("MB/s")').innerText();
        console.log("Disk Space for Chrome:", diskSpace);
    }
}

const finalresult = await page.locator(".firefox-disk").innerText();
console.log("Chrome Disk:", diskSpace);
console.log("Firefox Disk:", finalresult);
if (finalresult.includes(diskSpace)) {
  console.log("Test Passed: Disk space matches with Chrome data.");
}   
else {
  console.log("Test Failed: Disk space does not match with Chrome data.");
}


    });
       

