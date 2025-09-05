import { expect } from "@wdio/globals";
import { DemoAppBasePage } from "../page/DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.WebViewUtils;

export class DemoAppWebViewPage extends DemoAppBasePage {
  async redirectToWebViewPageModule() {
    await this.clickHamburgerMenu();
    await this.redirectToWebViewPage();
  }

  async checkVisibilityElements() {
    const locatorArr = [
      locators.webviewHeader,
      locators.urlTxtHeader,
      locators.urlTxtField,
      locators.instructTxt,
      locators.goToSiteBttn,
    ];

    for (const element of locatorArr) {
      await expect($(element)).toBeDisplayed();
    }
  }

  async inputValidLinkAndRedirectToWeb(urlLink : string){
     await $(locators.urlTxtField).setValue(urlLink);
     await expect($(locators.urlTxtField)).toHaveText(urlLink);
     await $(locators.goToSiteBttn).click()
  }

  async getErrMsg(errMsg : string) {
    await expect(($(locators.errMsg))).toBeDisplayed()
    await expect($(locators.errMsg)).toHaveText(errMsg)
  }
}
