import { test, expect } from 'playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Check main page opens', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
});

test('Check header', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check categories bar', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.categoriesTabsLocatorHasCorrectAriaSnapshot();
});