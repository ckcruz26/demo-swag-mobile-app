import { $ } from "@wdio/globals";
import { DemoAppBasePage } from "./DemoAppBasePage"; // correct this path
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils"; // 1. Imported your XPath utility file

// 2. Assigned the XPaths to a constant for easy access within the class
const locators = DemoAppXpathUtilsJson.LoginPageXpaths;

export class DemoAppLoginPage extends DemoAppBasePage {
  async redirectToLoginModule() {
    await this.clickHamburgerMenu();
    await this.redirectToLoginMenu();
  }

  async loginCredentials(username: string, password: string) {
    await $(locators.usernameField).setValue(username);
    await $(locators.passwordField).setValue(password);
    await $(locators.loginButton).click();
  }

  async getErrorMsg(errorMsg: string) {
    await expect($(locators.errorMsgLocator)).toBeDisplayed();
    await expect($(locators.errorMsgLocator)).toHaveText(errorMsg);
  }
}
