const { test } = require('@playwright/test');
const NxtLogin = require('../NxtOption/LoginScreen/Login');
const Ui_Loginpage = require('../NxtOption/LoginScreen/Ui_Loginpage');
const NativeScreeen = require('../NxtOption/StrategyWatch/Nativescreen');
const sym_Selection = require('../NxtOption/StrategyBuilder/Sym-selection');


/** @type {NxtLogin} */
let LP;

/** @type {Ui_Loginpage} */
let Th;

/** @type {NativeScreeen} */
let Sw;

/** @type {sym_Selection} */
let SB;

test.beforeEach(async ({ page }) => 
{
  // Initialize with current page instance
  LP = new NxtLogin(page);
  Th = new Ui_Loginpage(page);
  Sw = new NativeScreeen(page)
  SB = new sym_Selection(page)

  // Perform login setup
  await LP.Url_Launch();
  await LP.Loginne();
  await LP.TradeJini();
  await LP.NxtDash();
});

test.skip('Dashboard intro tour', async ({ page }) =>
{
  await LP.NxtDash();
});

test.skip('Theme validation', async ({ page }) => 
{
  await Th.Theme();
  await Th.BrokerSection();
});

test.skip('Broker List validation', async ({ page }) => 
{
  await Th.BrokerList();
});
test.skip('Strategy Watch', async ({page}) =>
{
  await Sw.UI_Watch();
})
test('Strategy Builder', async({page}) =>
{
 // const SB = new sym_Selection(page);
  await SB.search_container();
})