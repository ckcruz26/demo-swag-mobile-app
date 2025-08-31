import { DemoAppProductsPage } from "../page/DemoAppProductsPage";

describe("mocha", () => {

  const productsPage = new DemoAppProductsPage();
  beforeEach("START OF EXECUTION", async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });

       afterEach('END OF EXECUTION', async () => {
        await driver.terminateApp('com.saucelabs.mydemoapp.rn')
     })

  it.only("Swipe Products Down", async () => {

        productsPage.swipeProductsDown();

  });
});
