import { test, expect } from '../../fixtures/fixtures';

test('Check userAccount buttons visibility', async ({portfolioPage}) => {
    await portfolioPage.userAccountButtonsIsVisible();
});

test('Check popup signin window is visible', async ({portfolioPage}) => {
    // test.setTimeout(120_000);
    await portfolioPage.signInPopupWindowIsVisible();
});

