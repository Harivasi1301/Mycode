const { expect } = require('@playwright/test');

class sym_Selection
{
     /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page)
    {
        this.page = page;
    }
    async search_container()
    {
      await this.page.getByText('Strategy', { exact: true }).click();
      await this.page.getByText('Strategy Builder', { exact: true }).click();
      await this.page.locator('[data-cy="strategy-search-display"]').click();

      const searchBox = this.page.getByRole('textbox', { name: 'NIFTY, SBIN' });
      await searchBox.fill('TCS');
      await searchBox.press('Enter');

      await this.page.getByText('TCS').click();

       const checkvisible = await searchBox.isVisible;
       if(checkvisible.isVisible)
       {
        console.log('✅ The brokers section is visible');
       
       }
       else
       {
        console.log('✅ The brokers section is not visible');
        await this.page.getByRole('button', { name: 'Build your Strategy' }).click();
       }

       await this.page.locator('tr:nth-child(21) > [id="\\ options-in-the-money"] > .buy-sell-container > .buy-sell-wrapper > .buy-icon').click();
       await this.page.locator('[data-cy="portable_options-confirm-button"]').click();
       await new Promise(() => {}); //--> Hold the Page
    }
}

module.exports = sym_Selection;
