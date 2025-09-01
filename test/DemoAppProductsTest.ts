import { DemoAppProductsPage } from "../page/DemoAppProductsPage";

describe("Products Suite", () => {
  const productsPage = new DemoAppProductsPage();

  beforeEach("Opening the App", async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
  });

  it("Swipe Products Down", async () => {
    await productsPage.swipeProductsDown();
  });

  it("Add to Cart Product", async () => {
    await productsPage.addToCartProducts();
  });

  describe("Cart Tests", () => {
    let runCartSetup = false;

    before(async () => {
      if (!runCartSetup) {
        runCartSetup = true;
        await driver.activateApp("com.saucelabs.mydemoapp.rn");
        await productsPage.loginToCheckOut("bob@example.com", "10203040");
        console.log("Cart setup executed!");
      }
    });

    it("Open the Cart", async () => {
      await productsPage.openTheCart();
    });

    it("Checkout the Items in Cart", async () => {
      await productsPage.proceedToCheckOut();
    });
  });
});
