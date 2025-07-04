const { expect } = require('@playwright/test');

class NxtLogin {
  constructor(page) 
  {
    this.page = page;
  }

  async Url_Launch() 
  {
    await this.page.goto('https://dev-webapp.nxtoption.in/webapp/auth/login');
    await expect(this.page).toHaveURL('https://dev-webapp.nxtoption.in/webapp/auth/login');


    const logo = this.page.locator('img.app-logo');
    await expect(logo).toBeVisible();
    await this.page.screenshot({ path: 'D:/pr-screenshots/fullpage.png', fullPage: true });
  }

  async Loginne() 
  {
    await this.page.locator('[data-cy="login-email"]').fill('hrvsnth@gmail.com');
    await this.page.locator('[data-cy="login-password"]').fill('Haran@123');
  }

  async TradeJini() 
  {
    const [tradeJiniTab] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click('[data-cy="tradejini"]', { force: true }),
    ]);
    await tradeJiniTab.waitForLoadState();

    await tradeJiniTab.locator('[data-cy="login-userid"]').fill('IOU085');
    await tradeJiniTab.locator('[data-cy="login-password"]').fill('Jun@123');
    await tradeJiniTab.click('[data-cy="login-submit-btn"]');

    await tradeJiniTab.locator('[data-cy="validate-otp"]').fill('2000');

    await Promise.all([
      tradeJiniTab.waitForEvent('close'),
      tradeJiniTab.click('[data-cy="validate-submit-btn"]'),
    ]);

    
  }

  async NxtDash() 
  {
    await this.page.getByText('Skip Tour').click();
    await this.page.getByRole('button', { name: 'I Understand' }).click();
    //await new Promise(() => {}); //--> Hold the Page
  }
}

module.exports = NxtLogin;
