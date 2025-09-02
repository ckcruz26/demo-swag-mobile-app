import { DemoAppProductsPage } from "../page/DemoAppProductsPage";
import { DemoAppConstData } from "../utils/DemoAppConstData";

describe("Products Suite", () => {
  const productsPage = new DemoAppProductsPage();

  beforeEach("Opening the App", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
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
        await driver.activateApp(DemoAppConstData.AndroidPkg);
        await productsPage.loginToCheckOut(
          DemoAppConstData.ValidEmail,
          DemoAppConstData.ValidPassword
        );
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
