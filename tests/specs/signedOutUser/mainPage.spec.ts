import { test, expect } from '../../fixtures/fixtures';

test('Check header', async ({mainPage}) => {
    await mainPage.headerHasCorrectAriaSnapshot();
});

test('Check categories bar', async ({mainPage}) => {
    await mainPage.categoriesTabsLocatorHasCorrectAriaSnapshot();
});