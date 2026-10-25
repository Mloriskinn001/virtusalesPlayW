import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test.describe('Navigate to resources from the homepage', () => {
  test('Navigate to Resources', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(homePage.pageTitle).toBeVisible();
    await homePage.resourcesLink();
});
});