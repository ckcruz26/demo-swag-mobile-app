import { DemoAppBasePage } from "./DemoAppBasePage";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.GeoLocationUtils;

export class DemoAppGeoLocationPage extends DemoAppBasePage {
  async redirectToGeoLocationModule() {
    await this.clickHamburgerMenu();
    await this.redirectToGeoLocationPage();
  }

  async visibilityCheckAllElements() {
    const geoLocationLocators = [
      locators.geoLocationHeaderTxt,
      locators.geoLocationParagraphTxt,
      locators.geoLocationStatementOne,
      locators.geoLocationStatementTwo,
      locators.geoLocationLatitudeLongtitudeGroup,
      locators.startObservingBttn,
      locators.stopObservingBttn,
    ];

    for (const geoLocator of geoLocationLocators) {
      await expect($(geoLocator)).toBeDisplayed();
    }
  }

  async clickObservingButtons() {
    await $(locators.startObservingBttn).click();
    await $(locators.stopObservingBttn).click();
  }
}
