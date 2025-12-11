import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ATCPage } from '../pages/atc';

test('Login Test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToURL();
    await loginPage.login();


    const atcPage = new ATCPage(page);
    await atcPage.addToCart();
});
