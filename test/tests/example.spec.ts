import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test('Navigate to homepage', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await expect(homePage.pageTitle).toBeVisible();
});