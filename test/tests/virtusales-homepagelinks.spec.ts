import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
});

test('Homepage links are visible', async ({ page }) => {
  const homePage = new HomePage(page);

  await expect(homePage.solutions).toBeVisible();
  await expect(homePage.features).toBeVisible();
  await expect(homePage.aboutUs).toBeVisible();
  await expect(homePage.resources).toBeVisible();
});
