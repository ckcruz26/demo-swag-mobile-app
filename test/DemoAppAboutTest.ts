import { DemoAppAboutPage } from "../page/DemoAppAboutPage";
import { DemoAppConstData } from "../utils/DemoAppConstData";

describe("About Page Suite", () => {
  const aboutPage = new DemoAppAboutPage();

  beforeEach("Start App", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
  });

  afterEach("Close App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it("should redirect to About Page", async () => {
    await aboutPage.openAboutPage();
  });

  it("should display all About Page components", async () => {
    await aboutPage.openAboutPage();
    await aboutPage.visibleCheckOfAboutComponents();
  });
});
