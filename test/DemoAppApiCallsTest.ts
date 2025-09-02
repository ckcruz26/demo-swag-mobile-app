import { DemoAppApiCallsPage } from "../page/DemoAppApiCallsPage";
import { DemoAppConstData } from "../utils/DemoAppConstData";

describe("API Calls Suite", () => {
  const apiCallsPage = new DemoAppApiCallsPage();

  beforeEach("Open App and Navigate to API Calls Page", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await apiCallsPage.redirectToApiCallModule();
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it("Redirects successfully to API Calls Page", async () => {
    await apiCallsPage.getApiCallHeader();
  });

  it("Verifies visibility of key components", async () => {
    await apiCallsPage.visibilityCheckComponents();
  });

  it("Clicks the available API menus", async () => {
    await apiCallsPage.clickApiMenus();
  });

  it.only("Scroll Api Calls", async () => {
    await driver.pause(3000);
    await apiCallsPage.swipeDownApiCalls();
  });
});
