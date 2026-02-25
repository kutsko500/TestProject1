import { test, expect } from '@playwright/test';
// 1. IMPORT: This tells this file where your "Remote Control" is hiding
import { LoginPage } from '../pages/LoginPage'; 
import testData from '../data/testData.json'
test('should log in to the secure area', async ({ page }) => {
  // 2. THE HANDSHAKE: We "pick up" the remote and give it the browser tab (page)
  const loginPage = new LoginPage(page);

  // 3. THE ACTIONS: Instead of typing URLs and IDs, we just call our "Skills"
  await loginPage.visit(); 
  await loginPage.loginUser(testData.user1.username, testData.user1.password);

  // 4. THE JUDGE: We check if the "Mission" was successful
  // We check if the URL now says "secure"
  await expect(page).toHaveURL(/secure/);
  
  // We check if the green success message appeared
  const successMessage = page.locator('#flash');
  await expect(successMessage).toContainText('You logged into a secure area!');
});
