
import { DemoAppBasePage } from "./DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";
import { expect } from "@wdio/globals";

const aboutLocators = DemoAppXpathUtilsJson.AboutPageXpaths;

export class DemoAppAboutPage extends DemoAppBasePage {
  async redirecToAboutModule() {
    await this.clickHamburgerMenu();
    await this.redirectToAboutMenu();
  }

  async validateTheAboutPageElements() {

  }
  async clickLinkToWebsite() {

    await expect($(aboutLocators.sauceWebsiteLink)).toBeDisplayed();

  }
}
