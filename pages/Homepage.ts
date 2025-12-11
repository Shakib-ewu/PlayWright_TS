import { Page } from "@playwright/test";
export class Homepage{
    readonly page:Page  
    constructor(page:Page)
    {      
        this.page = page;       
    }
    async goToURL(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }
}