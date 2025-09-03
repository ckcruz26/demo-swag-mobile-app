import { DemoAppConstData } from "../utils/DemoAppConstData";
import { DemoAppDrawingPage } from "../page/DemoAppDrawingPage";

describe("Sauce Drawing Suite", () => {
  const drawingPage = new DemoAppDrawingPage();
  beforeEach("Open App and Navigate to Geo Location Page", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await drawingPage.redirectToDrawingModule();
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it('Visiblit the all elements', async () => {
    await drawingPage.visibilityCheckElements()
  })

  it("Draw and Clear", async () => {
    await drawingPage.drawingThenClear();
  });

  it('Draw and Save', async () => {
    await drawingPage.drawingThenSave()
  })
});
