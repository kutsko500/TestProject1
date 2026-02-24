import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // 1. Tell the "Remote" what buttons it has
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly url1: string = 'https://the-internet.herokuapp.com/login';

  constructor(page: Page) {
    this.page = page;
    // 2. Map the "Buttons" to the website's code (Locators)
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }

  // 3. Define the "Actions" (Methods)
  async visit() {
    await this.page.goto(this.url1);
  }

  async loginUser(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
