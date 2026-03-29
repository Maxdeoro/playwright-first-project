import { test, expect } from '../../fixtures/fixtures';

test('Check header', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check categories bar', async ({mainPage}) => {
    await mainPage.categoriesTabsLocatorHasCorrectAriaSnapshot();
});

test('Academy tab visibility', async ({mainPage}) => {
    await mainPage.academyTabIsVisible();
});

test('Tools tab visibility', async ({mainPage}) => {
    await mainPage.toolsTabIsVisible();
});

test('MyWatchlist tab visibility', async ({mainPage}) => {
    await mainPage.myWatchlistTabIsVisible();
});

test('Academy tab menu visible on hover', async ({mainPage}) => {
    await mainPage.academyMenuIsVisible();
});

test('Tools menu visibility on hover', async ({mainPage}) => {
    await mainPage.toolsMenuIsVisible();
});

test('Open my portfolio page test', async ({mainPage}) => {
    await mainPage.openPortfolioPage();
});