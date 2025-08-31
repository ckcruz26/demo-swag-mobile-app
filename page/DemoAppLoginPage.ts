import { $ } from "@wdio/globals";
import { DemoAppBasePage } from "./DemoAppBasePage"; // correct this path

const locators = {
  usernameField:
    "//android.widget.EditText[@content-desc='Username input field']",
  passwordField:
    "//android.widget.EditText[@content-desc='Password input field']",
  loginButton: "//android.view.ViewGroup[@content-desc='Login button']",

  errorMsgLocator:
    "//android.view.ViewGroup[@content-desc='generic-error-message']",
  errMsgUsername: "~Username-error-message",
};

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
