//const { expect } = require('@playwright/test');

const { expect } = require('@playwright/test');

class Ui_Loginpage
{
  
  constructor(page) 
 {
    this.page = page;
  }
    async Theme()
    {
    const theme = await this.page.getAttribute('body', 'data-nxt-theme');

    if (theme === 'light') 
    {
    console.log('✅ Light theme is active');
    } 
    else if (theme === 'dark') 
    {
    console.log('✅ Dark theme is active');
    } 
    else 
    {
    console.log('Unknown theme:', theme);
    }     
 }
 async BrokerSection()
 {
    //await expect(this.page.locator('.brokers-section')).toBeVisible();
    const loc = this.page.locator('.brokers-section');
    const isvisible = await loc.isVisible();

    if(isvisible)
    {
         console.log('✅ The brokers section is visible');
    }
   else
    {
        console.log('✅ The brokers section is not visible');
    }

 }
async BrokerList()
{
    const Broker = this.page.locator('[data-cy="5paisa"]');
    const visi = await Broker.isVisible();

    if(visi)
    {
      console.log("The Broker list is visible")
      await this.page.getByRole('button', { name: '5Paisa' }).isVisible();
      await this.page.getByRole('button', { name: 'IIFL' }).isVisible();
      await this.page.getByRole('button', { name: 'Flattrade' }).isVisible();
      await this.page.getByRole('button', { name: 'Aixs Direct' }).isVisible();
      await this.page.getByRole('button', { name: 'ProStocks' }).isVisible();
      await this.page.getByRole('button', { name: 'Nirmal Bang' }).isVisible();
      await this.page.getByRole('button', { name: 'Finvasia' }).isVisible();
      await this.page.getByRole('button', { name: 'Nuvama' }).isVisible();
      await this.page.getByRole('button', { name: 'Upstox' }).isVisible();
      await this.page.getByRole('button', { name: 'm.Stock' }).isVisible();
    }
}
}
module.exports = Ui_Loginpage;