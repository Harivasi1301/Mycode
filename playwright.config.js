import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'Chromium stable',
      use:
      {
        browserName: 'chromium',
      },
    },
    // {
    //    name: 'Microsoft Edge',
    //    use: {
    //     channel: 'msedge',
    //     headless: false,
    //     viewport: null,
    //     launchOptions: {
    //       args: ['--start-maximized'],
    //     },
    //   },
    // },
  ],
});
