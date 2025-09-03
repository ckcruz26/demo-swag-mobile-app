import { faker } from "@faker-js/faker";
import { DemoAppLoginPage } from "./DemoAppLoginPage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils"; // 1. Imported your XPath utility file

// 2. Assigned the XPaths to a constant for easy access within the class
const locators = DemoAppXpathUtilsJson.ProductPageXpaths;

export class DemoAppProductsPage extends DemoAppLoginPage {
  /** --- Utility Functions --- */
  private async waitAndClick(selector: string) {
    const el = await $(selector);
    await expect(el).toBeDisplayed();
    await expect(el).toBeEnabled();
    await el.click();
  }

  private async waitAndType(selector: string, value: string) {
    const el = await $(selector);
    await expect(el).toBeDisplayed();
    await expect(el).toBeEnabled();
    await el.setValue(value);
  }
  
  async loginToCheckOut(email: string, password: string) {
    await this.redirectToLoginModule();
    await this.loginCredentials(email, password);
  }

  async swipeProductsDown() {
    const { width, height } = await driver.getWindowSize();
    const startX = Math.floor(width / 2);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.3);

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 200 },
          { type: "pointerMove", duration: 1000, x: startX, y: endY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await driver.releaseActions();
    await driver.pause(2000);
  }

  async addToCartProducts() {
    await this.waitAndClick(locators.product.firstProduct);

    // Adjust quantity
    for (let i = 0; i < 3; i++) {
      await this.waitAndClick(locators.product.quantityAdd);
    }
    await this.waitAndClick(locators.product.quantityMinus);

    // Select product colors
    for (const locator of Object.values(locators.colors)) {
      await this.waitAndClick(locator);
    }

    await this.waitAndClick(locators.product.addToCartButton);
  }

  async openTheCart() {
    await this.waitAndClick(locators.cart.cartBadge);
  }

  async proceedToCheckOut() {
    await this.openTheCart();
    await this.waitAndClick(locators.cart.proceedToCheckout);

    await this.fillUpCheckOutDetailsAndSubmit(
      faker.person.fullName(),
      faker.location.streetAddress(),
      faker.location.city(),
      faker.location.state(),
      faker.location.zipCode(),
      faker.location.country()
    );
  }

  async fillUpCheckOutDetailsAndSubmit(
    fullName: string,
    addressLineOne: string,
    city: string,
    stateRegion: string,
    zipCode: string,
    country: string
  ) {
    await this.waitAndType(locators.checkout.fullName, fullName);
    await this.waitAndType(locators.checkout.addressLine, addressLineOne);
    await this.waitAndType(locators.checkout.city, city);
    await this.waitAndType(locators.checkout.stateRegion, stateRegion);
    await this.waitAndType(locators.checkout.zipCode, zipCode);
    await this.waitAndType(locators.checkout.country, country);

    await this.waitAndClick(locators.checkout.toPayment);

    await this.reviewOrderCheckOut(
      fullName,
      faker.finance.creditCardNumber({ issuer: "visa" }),
      "10/30",
      faker.finance.creditCardCVV()
    );
  }

  async reviewOrderCheckOut(fullName: string, cardNo: string, expDate: string, secCode: string) {
    await this.waitAndType(locators.payment.fullName, fullName);
    await this.waitAndType(locators.payment.cardNo, cardNo);
    await this.waitAndType(locators.payment.expDate, expDate);
    await this.waitAndType(locators.payment.secCode, secCode);

    await this.waitAndClick(locators.payment.reviewOrder);
    await this.scrollAndPlaceOrder();
  }

  async scrollAndPlaceOrder() {
    await this.waitAndClick(locators.payment.placeOrder);
    await driver.pause(2000);
  }
}