import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login Test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToURL();
    await loginPage.login();
});
