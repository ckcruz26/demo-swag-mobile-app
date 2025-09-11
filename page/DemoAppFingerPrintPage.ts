import { expect } from "@wdio/globals";
import { DemoAppBasePage } from "../page/DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.FingerPrintUtils;

export class DemoAppFingerPrintPage extends DemoAppBasePage {
  async redirectToFingerPrintModule() {
    await this.clickHamburgerMenu();
    await this.redirectToFingerPrintPage();
  }

  async validateElementsFingerPrintModule() {
    await expect($(locators.fingerPrintHeader)).toBeDisplayed();
    await expect($(locators.fingerPrintToggleLabel)).toBeDisplayed();
    await expect($(locators.fingerPrintToggleSwitch)).toBeDisplayed();
    await expect($(locators.fingerPrintLabelOne)).toBeDisplayed();
    await expect($(locators.fingerPrintLabelTwo)).toBeDisplayed();
  }

  async toggleSwitch() {
    let i = 0;
    while (i < 4) {
      await $(locators.fingerPrintToggleSwitch).click();
      i++;
    }
  }
}
