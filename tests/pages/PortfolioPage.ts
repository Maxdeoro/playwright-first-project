import { expect, Locator, Page } from 'playwright/test';
import { BasePage } from './BasePage';

export class PortfolioPage extends BasePage {
    private readonly userAccountButtonsLocator: Locator;
    private readonly signInButtonLocator: Locator;
    private readonly  signUpButtonLocator: Locator;
    private readonly signInPopupWindowLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.userAccountButtonsLocator = this.page.locator('#userAccount');
        this.signInButtonLocator = this.page.locator('#userAccount').getByRole('link', {name: 'Sign In'});
        this.signUpButtonLocator = this.page.locator('#userAccount').getByRole('link', {name: 'Free Sign Up'});
        this.signInPopupWindowLocator = this.page.locator('div.genPopup.signingPopup.loginPopupStatic[data-ignore-close="1"]');
    };

    async open() {
        await this.page.goto('https://www.investing.com/portfolio');
        await this.page.waitForLoadState('load');
    };

    async userAccountButtonsIsVisible() {
        await expect(this.userAccountButtonsLocator).toBeVisible();
    };

    async signInPopupWindowIsVisible() {
        // await this.signInButtonLocator.click();
        await expect(this.signInPopupWindowLocator).toBeVisible({timeout: 60000});
    };
};