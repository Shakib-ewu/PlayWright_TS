import { Page } from "@playwright/test";

 export class LoginPage{
     readonly page:Page
     
    constructor(page:Page)
    {
      
        this.page = page;
       
    }
    async goToURL(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }
    
    async login(){
	await this.page.locator('#login2').click();
	await this.page.locator('#loginusername').fill('pavanol');
	await this.page.locator('#loginpassword').fill('test@123');
	await this.page.locator("//button[normalize-space()='Log in']").click();
}
 }