import { DemoAppSauceBotVideoPage } from "../page/DemoAppSauceBotVideoPage";
import { DemoAppConstData } from "../utils/DemoAppConstData";

describe("Sauce Video Suite", () => {
  const sauceVideoPage = new DemoAppSauceBotVideoPage();

  beforeEach("Open App and Navigate to Geo Location Page", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await sauceVideoPage.redirectToSauceModule();
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it('Visibility Check Elements', async () => {
    await sauceVideoPage.visibilityCheckElements()
  })

  it('Forward and Rewind Video', async () => {
    await sauceVideoPage.forwardRewindVideo()
  })

  it('Stop and Play Video', async () => {
    await sauceVideoPage.stopPlayVideo()
  })

  it('Mute and Unmute Video', async () => {
    await sauceVideoPage.muteUnmuteVideo()
  })
});
