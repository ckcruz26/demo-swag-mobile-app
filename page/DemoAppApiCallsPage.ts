import { DemoAppBasePage } from "./DemoAppBasePage"; // ✅ import base page
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";
import { expect } from "@wdio/globals";

const locators = DemoAppXpathUtilsJson.ApiCall;

export class DemoAppApiCallsPage extends DemoAppBasePage {
  // ✅ extend base page

  async redirectToApiCallModule() {
    await this.clickHamburgerMenu(); // inherited from BasePage
    await this.redirecToApiCallsPage(); // inherited from BasePage
  }

  async getApiCallHeader() {
    await expect($(locators.ApiCallHeaderTxt)).toBeDisplayed();
  }

  async visibilityCheckComponents() {
    const arrLocatorElements = [
      locators.ApiCallHeaderTxt,
      locators.EuDcMenu,
      locators.UsDcMenu,
      locators.Menu401,
      locators.Menu404,
    ];

    for (const locator of arrLocatorElements) {
      await expect($(locator)).toBeDisplayed(); 
    }
  }

  async clickApiMenus() {
    const arrLocatorElements = [
      locators.EuDcMenu,
      locators.UsDcMenu,
      locators.Menu401,
      locators.Menu404,
    ];

    for (const locator of arrLocatorElements) {
      await expect($(locator)).toBeDisplayed(); 
      await $(locator).click();
    }

    await driver.pause(2000);
  }

  async swipeDownApiCalls() {
    const { width, height } = await driver.getWindowSize();
    const startX = Math.floor(width / 2);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.3);

    for (let i = 0; i < 4; i++) {
      await driver.performActions([
        {
          type: "pointer",
          id: "finger1",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMove", duration: 0, x: startX, y: startY },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: 200 },
            { type: "pointerMove", duration: 6000, x: startX, y: endY },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
    }

    await driver.releaseActions();
    await driver.pause(2000);
  }
}
