import { $ } from "@wdio/globals";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.BasePageXpaths;

export class DemoAppBasePage {
  async clickMenu(menu: keyof typeof locators) {
    await $(locators[menu]).click();
  }

  // convenience methods (optional, para readable pa rin sa tests)
  async clickHamburgerMenu() {
    await this.clickMenu("globalHamburger");
  }

  async redirectToLoginMenu() {
    await this.clickMenu("loginMenu");
  }

  async redirectToAboutMenu() {
    await this.clickMenu("aboutMenu");
  }

  async redirectToApiCallsPage() {
    await this.clickMenu("apiCallMenu");
  }

  async redirectToLogout() {
    await this.clickMenu("logoutMenu");
  }

  async redirectToSauceVideoPage() {
    await this.clickMenu("sauceVideoMenu");
  }

  async redirectToDrawingPage() {
    await this.clickMenu("drawingMenu");
  }

  async redirectToGeoLocationPage() {
    await this.clickMenu("geoLocationMenu");
  }

  async clickResetStateMenu() {
    await this.clickMenu("resetStateMenu");
  }

  async redirectToWebViewPage () {
    await this.clickMenu('webViewMenu')
  }

  async redirectToFingerPrintPage () {
    await this.clickMenu('fingerPrintMenu')
  }
}
