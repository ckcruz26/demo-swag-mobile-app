import { DemoAppBasePage } from "../page/DemoAppBasePage";
import { DemoAppConstData } from "../utils/DemoAppConstData";
import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";

const locators = DemoAppXpathUtilsJson.AndroidButtonsXpath;

describe("Reset State", () => {
  beforeEach("Open Reset State", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await demoReset.clickHamburgerMenu();
    await demoReset.clickResetStateMenu();
  });

  afterEach("Close App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  const demoReset = new DemoAppBasePage();
  it("Click the Reset State", async () => {
    await $(locators.resetAppBttn).click();
  });

  it("Cancel the Reset State", async () => {
    await $(locators.cancelBttn).click();
  });
});
