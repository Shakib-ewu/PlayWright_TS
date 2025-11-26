import { test ,expect} from '@playwright/test';


test('Datepicker Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const month= "August";
    const year= "2026";
    const date= "15";
    await page.locator('#datepicker').click();

    while (true) {
        const mon= await page.locator('.ui-datepicker-month').textContent();
        const yr= await page.locator('.ui-datepicker-year').textContent();
        if ( yr===year && mon===month) {
            break;
        }   
        
            await page.locator('//span[contains(text(),"Next")]').click();

    }
    await page.locator(`//a[text()="${date}"]`).click();
});