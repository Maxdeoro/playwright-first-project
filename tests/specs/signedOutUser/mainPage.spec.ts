import { test, expect } from 'playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Check main page opens', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
});