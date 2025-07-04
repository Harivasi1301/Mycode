import { test, expect } from '@playwright/test';

test('Launch & click Tradejini', async ({ page }) =>
{

  await page.goto('https://dev-webapp.nxtoption.in/webapp/app/strategy/builder');

  //Logo Validation::

  const logo = page.locator('img.app-logo');
  await expect(logo).toBeVisible();

  await page.screenshot({ path: 'D:/pr-screenshots/fullpage.png', fullPage: true });

  await page.locator('[data-cy="login-email"]').fill('hrvsnth@gmail.com');
  await page.locator('[data-cy="login-password"]').fill('Haran@123');

  const [tradeJiniTab] = await Promise.all
  ([

    page.waitForEvent('popup'),
    page.click('[data-cy="tradejini"]', { force: true }),

  ]);

  await tradeJiniTab.waitForLoadState();
  await tradeJiniTab.locator('[data-cy="login-userid"]').fill('IOU085');
  await tradeJiniTab.locator('[data-cy="login-password"]').fill('Jun@123');
  await tradeJiniTab.click('[data-cy="login-submit-btn"]');

  await tradeJiniTab.locator('[data-cy="validate-otp"]').fill('2000');

  // Wait for popup to close after OTP submit instead of navigation
  await Promise.all
  ([

    tradeJiniTab.waitForEvent('close'),
    tradeJiniTab.click('[data-cy="validate-submit-btn"]'),

  ]);

  // Continue with the parent page if needed

  await page.getByText('Skip Tour').click();
  await page.getByRole('button', { name: 'I Understand' }).click();

  //await new Promise(() => {});

});
