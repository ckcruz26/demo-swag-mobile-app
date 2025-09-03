import { DemoAppBasePage } from "./DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";
import { $, expect } from "@wdio/globals";

const locators = DemoAppXpathUtilsJson.SauceVideoUtils;

export class DemoAppSauceBotVideoPage extends DemoAppBasePage {
  async redirectToSauceModule() {
    await this.clickHamburgerMenu();
    await this.redirectToSauceVideoPage();
  }

  async visibilityCheckElements() {
    const arrLocator = [
      locators.containerHeader,
      locators.sauceBotScreen,
      locators.rewindButton,
      locators.stopButton,
      locators.forwardButton,
      locators.unmuteButton,
    ];

    for (const saucebotVid of arrLocator) {
      await expect($(saucebotVid)).toBeDisplayed()
    }
  }

  async forwardRewindVideo () {
    await driver.pause(2000)
    await $(locators.forwardButton).click()
    await driver.pause(2000)
    await $(locators.rewindButton).click()
  }

  async stopPlayVideo () {
     await $(locators.stopButton).click()
     await $(locators.playButton).click()
  }

  async muteUnmuteVideo(){
    await $(locators.unmuteButton).click()
    await $(locators.muteButton).click()
  }
}


