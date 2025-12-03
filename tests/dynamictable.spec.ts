import { test, expect } from '@playwright/test';
import { cp } from 'fs';

test('Read Dynamic Table', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');

  //step 1: Extract CPU load for Chrome from the table

  const rows = page.locator('.table-striped tbody tr');
  const count = await rows.count();
  let cpuLoad="";

  for (let i = 0; i < count; i++) {

    const rowText = await rows.nth(i).innerText();

    if (rowText.includes("Chrome")) {
      cpuLoad = await rows.nth(i).locator('td:has-text("%")').innerText();
      console.log("Chrome CPU:", cpuLoad);
      break;

      
    }
  }

  //step 2

 const finalresult = await page.locator('#chrome-cpu').innerText();

if (finalresult.includes(cpuLoad)) {
  console.log("Test Passed: CPU load matches with Chrome data.");
}
else {
  console.log("Test Failed: CPU load does not match with Chrome data.");
}

expect(finalresult).toContain(cpuLoad);
await page.waitForTimeout(2000);



})
