import { DemoAppBasePage } from "./DemoAppBasePage"; 
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.AboutPageXpaths;

export class DemoAppAboutPage {
  basePage = new DemoAppBasePage();

  async openAboutPage() {
    await this.basePage.clickHamburgerMenu();
    await this.basePage.redirectToAboutMenu();
  }

  async visibleCheckOfAboutComponents() {
    const elements = [
      locators.aboutHeader,
      locators.imageOne,
      locators.imageTwo,
      locators.imageThree,
      locators.sauceWebsiteLink,
    ];

    for (const locator of elements) {
      await expect($(locator)).toBeDisplayed();
    }

    await $(locators.sauceWebsiteLink).click();
  }
}
