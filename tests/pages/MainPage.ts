import { expect, Locator, Page } from 'playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    readonly headerLocator: Locator;
    readonly categoriesTabsLocator: Locator;
    readonly academyTabLocator: Locator;
    readonly toolsTabLocator: Locator;
    readonly myWatchlistTabLocator: Locator;
    readonly academyMenuLocator: Locator;
    readonly toolsMenuLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.headerLocator = this.page.locator('[data-test="logo-icon-link"]');
        this.categoriesTabsLocator = this.page.getByRole('navigation').filter({hasText:'MarketsIndicesIndices'});
        this.academyTabLocator = this.page.getByRole('link', {name: 'Academy'});
        this.toolsTabLocator = this.page.locator('[data-test="main-menu-navigation-bar"]').getByRole('link', {name: 'Tools'});
        this.myWatchlistTabLocator = this.page.getByRole('link', {name: 'My Watchlist'});
        this.academyMenuLocator = this.page.locator('div').filter({hasText: 'Education HubMaster'}).nth(5);
        this.toolsMenuLocator = this.page.locator('div').filter({hasText: 'CalendarsEconomic'}).nth(5);
    };

    async open() {
        await this.page.goto('https://www.investing.com/');
        await this.page.waitForLoadState('load');
    };

    async headerHasCorrectAriaSnapshot() {
        await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaSnapshot.yml'});
    };

    async categoriesTabsLocatorHasCorrectAriaSnapshot() {
        await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesTabsAriaSnapshot.yml'});
    };

    async academyTabIsVisible() {
        await expect(this.academyTabLocator).toBeVisible();
    };

    async toolsTabIsVisible() {
        await expect(this.toolsTabLocator).toBeVisible();
    };

    async myWatchlistTabIsVisible() {
        await expect(this.myWatchlistTabLocator).toBeVisible();
    };

    async myWatchlistMenuIsVisible() {
        await expect(this.myWatchlistTabLocator).toBeVisible();
    };

    async academyMenuIsVisible() {
        await this.academyTabLocator.hover();
        await expect(this.academyMenuLocator).toBeVisible();
    };

    async toolsMenuIsVisible() {
        await this.toolsTabLocator.hover();
        await expect(this.toolsMenuLocator).toBeVisible();
    };
};
