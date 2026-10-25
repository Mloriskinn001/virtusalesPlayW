import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly solutions: Locator;
    readonly features: Locator;
    readonly aboutUs: Locator;
    readonly resources: Locator;


    constructor(page: Page) {
        this.page = page;
        const siteNavigation = page.getByRole('navigation', { name: 'Site' });
        this.pageTitle = page.getByRole('heading', { level: 1, name: 'Empowering your publishing journey' });
        this.solutions = siteNavigation.getByRole('link', { name: 'Solutions', exact: true });
        this.features = siteNavigation.getByRole('link', { name: 'Features', exact: true });
        this.aboutUs = siteNavigation.getByRole('link', { name: 'About Us', exact: true });
        this.resources = siteNavigation.getByRole('link', { name: 'Resources', exact: true });
    }

    async navigate() {
        await this.page.goto('https://www.virtusales.com/');
    }

    async solutionsLink() {
        await this.solutions.click();
    }

    async featuresLink() {
        await this.features.click();
    }

    async aboutUsLink() {
        await this.aboutUs.click();
    }

    async resourcesLink() {
        await this.resources.click();
    }
}