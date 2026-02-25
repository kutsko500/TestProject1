import { test, expect } from '@playwright/test';

test('search for playwright', async ({ page }) => {
  // 1. Go to Google
  await page.goto('https://www.google.com');

  // 2. Type "Playwright" into the search bar (and press Enter)
  await page.locator('textarea[name="q"]').fill('Playwright');
  await page.keyboard.press('Enter');

  // 3. Verify the title contains Playwright
  await expect(page).toHaveTitle(/Playwright/);
});
