import { DemoAppAboutPage } from "../page/DemoAppAboutPage";

describe("About Page Suite", () => {
  const aboutPage = new DemoAppAboutPage();
  const appPackage = "com.saucelabs.mydemoapp.rn";

  beforeEach("Start App", async () => {
    await driver.activateApp(appPackage);
  });

  afterEach("Close App", async () => {
    await driver.terminateApp(appPackage);
  });

  it("should redirect to About Page", async () => {
    await aboutPage.openAboutPage();
  });

  it("should display all About Page components", async () => {
    await aboutPage.openAboutPage();
    await aboutPage.visibleCheckOfAboutComponents();
  });
});
