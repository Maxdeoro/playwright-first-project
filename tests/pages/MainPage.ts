import { expect, Locator, Page } from 'playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    readonly headerLocator: Locator;
    readonly categoriesTabsLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.headerLocator = this.page.locator('[data-test="logo-icon-link"]');
        // this.categoriesTabsLocator = this.page.locator('[data-test="main-menu-navigation-bar"]');
        this.categoriesTabsLocator = this.page.getByRole('navigation').filter({hasText:'MarketsIndicesIndices'});
    };

    async open() {
        await this.page.goto('https://www.investing.com/');
    };

    async headerHasCorrectAriaSnapshot() {
        await expect(this.headerLocator).toMatchAriaSnapshot();
    };

    async categoriesTabsLocatorHasCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot();
    };
};