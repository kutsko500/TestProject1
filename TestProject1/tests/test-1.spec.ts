import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.yahoo.com/');
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByLabel('More', { exact: true }).getByRole('link', { name: 'News', exact: true }).click();
  await page.goto('https://www.fedex.com/global/choose-location.html');
  await page.getByText('United States | English |').first().click();
  await page.getByRole('button', { name: 'Get rates or start a shipment' }).click();
  await page.getByRole('textbox', { name: 'From address, type in the' }).click();
  await page.getByRole('textbox', { name: 'From address, type in the' }).click();
  await page.getByRole('textbox', { name: 'From address, type in the' }).fill('chicago');
  await page.getByText('Chicago Improv, Schaumburg,').click();
  await page.getByRole('textbox', { name: 'To address, type in the full' }).click();
  await page.getByRole('textbox', { name: 'To address, type in the full' }).fill('chicago ');
  await page.getByText('Chicago O\'Hare International').click();
  await expect(page.locator('#fdx-magr-package-type')).toContainText('Tell us more about your shipment');
  await expect(page.getByRole('heading', { name: 'FedEx is using cookies' })).toBeVisible();
  await page.getByRole('button', { name: 'REJECT OPTIONAL COOKIES' }).click();
});