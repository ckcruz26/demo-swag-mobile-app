import { $ } from "@wdio/globals";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils"; // 1. Imported your XPath utility file

const locators = DemoAppXpathUtilsJson.BasePageXpaths;

export class DemoAppBasePage {
  async clickHamburgerMenu() {
    await $(locators.globalHamburger).click();
  }

  async redirectToLoginMenu() {
    await $(locators.loginMenu).click();
  }

  async redirectToAboutMenu() {
    await $(locators.aboutMenu).click();
  }

  async redirecToApiCallsPage() {
    await $(locators.apiCallMenu).click();
  }

  async redirectToLogout() {
    await $(locators.logoutMenu).click();
  }

  async redirectToSauceVideoPage() {
    await $(locators.sauceVideoMenu).click();
  }

  async redirectToDrawingPage() {
    await $(locators.drawingMenu).click()
  }

  async redirectToGeoLocationPage() {
    await $(locators.geoLocationMenu).click()
  }
}
