import { DemoAppFingerPrintPage } from "../page/DemoAppFingerPrintPage";
import { DemoAppConstData } from "../utils/DemoAppConstData";

describe("Finger Print Suite", async () => {
  const fingerPrintPage = new DemoAppFingerPrintPage();

  beforeEach("Open App and Navigate to Finger Print Page", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await fingerPrintPage.redirectToFingerPrintModule();
  });

    afterEach("Terminate the App", async () => {
        await driver.terminateApp(DemoAppConstData.AndroidPkg);
    })


    it('Visibility Check Elements', async () => {
    await fingerPrintPage.validateElementsFingerPrintModule()
  })

  it('Click the Observing Buttons', async () => {
    await fingerPrintPage.toggleSwitch()
  })
});
