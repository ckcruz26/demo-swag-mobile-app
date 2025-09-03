import { DemoAppGeoLocationPage } from "../page/DemoAppGeoLocationPage";
import { DemoAppConstData } from "../utils/DemoAppConstData";

describe("Geo Location Suite", () => {
  const geoLocationPage = new DemoAppGeoLocationPage();

  beforeEach("Open App and Navigate to Geo Location Page", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await geoLocationPage.redirectToGeoLocationModule();
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it('Visibility Check Elements', async () => {
    await geoLocationPage.visibilityCheckAllElements()
  })

  it('Click the Observing Buttons', async () => {
    await geoLocationPage.clickObservingButtons()
  })
});
