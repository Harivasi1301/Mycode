const { expect } = require('@playwright/test');

class NativeScreeen
{
    constructor(page)
    {
        this.page = page;
    }
 async UI_Watch()
  {
    await this.page.click('[data-cy="nifty-straddle-btn"]');
   // await this.page.getByRole('button', { name: 'I Short' }).click();
    //await page.getByRole('heading', { name: 'Order Pad w' }).click();
  }  
}

module.exports = NativeScreeen;