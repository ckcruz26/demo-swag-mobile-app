import { $ } from "@wdio/globals";
import { DemoAppBasePage } from "./DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.LoginPageXpaths;

export class DemoAppLoginPage extends DemoAppBasePage {
  async redirectToLoginModule(){
    await this.clickHamburgerMenu();
    await this.redirectToLoginMenu();
  }

  async loginCredentials(username: string, password: string){
    await $(locators.usernameField).setValue(username);
    await $(locators.passwordField).setValue(password);
    await $(locators.loginButton).click();
  }

  async getErrorMsg(expectedMsg: string){
    const errorElement = await $(locators.errorMsgLocator);
    await expect(errorElement).toBeDisplayed();
    await expect(errorElement).toHaveText(expectedMsg);
  }
}
