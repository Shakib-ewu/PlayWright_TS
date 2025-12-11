import {Page, expect} from '@playwright/test';
export class ATCPage{
    readonly page:Page  
    constructor(page:Page)
    {      
        this.page = page;       
    }   
    async goToURL(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }   
    async addToCart(){
        await this.page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();
	    await this.page.locator("//a[@class='btn btn-success btn-lg']").click();

        this.page.on('dialog', async dialog => {
                expect(dialog.message()).toContain('Product added');
                await dialog.accept();
            });  

            await this.page.locator("#cartur").click();
            await this.page.locator(".btn.btn-success").click();
            await this.page.waitForTimeout(2000);
            await this.page.locator("//input[@id='name']").fill('Pavan Ol');
            await this.page.locator("//input[@id='country']").fill('India');
            await this.page.locator("//input[@id='city']").fill('Hyderabad');
            await this.page.locator("//input[@id='card']").fill('1234 5678 9876 5432');
            await this.page.locator("//input[@id='month']").fill('August');
            await this.page.locator("//input[@id='year']").fill('2025');
            await this.page.locator("//button[normalize-space()='Purchase']").click();
            const confirmationMessage=await this.page.locator('.sweet-alert > h2').textContent();
            expect(confirmationMessage).toBe('Thank you for your purchase!');

           
    }
}

