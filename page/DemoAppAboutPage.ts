import { DemoAppBasePage } from "./DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.AboutPageXpaths;

export class DemoAppAboutPage extends DemoAppBasePage {
  async openAboutPage() {
    await this.clickHamburgerMenu();
    await this.redirectToAboutMenu();
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
