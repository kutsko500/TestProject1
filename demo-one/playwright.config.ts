import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * 1. THE SECRET VAULT: This tells Playwright to look for a file named '.env'
 * on your computer to grab your username and password.
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI to stay stable. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  use: {
    /* Base URL: This makes your 'visit' methods much shorter! */
    baseURL: 'https://the-internet.herokuapp.com',

    /* Trace: Like a DVR, it records the test so you can watch it later. */
    trace: 'on-first-retry',

    /* The "Slow Motion" setting you added - great for watching locally! */
    launchOptions: {
      slowMo: 1500, 
    },

    /* This helps bypass some basic bot-blockers. */
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  },

  /* Configure projects: We only have Chromium (Chrome) active for speed. */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
    /* Firefox and Webkit are commented out (hidden) below */
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
