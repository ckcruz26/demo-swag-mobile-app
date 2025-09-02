import { DemoAppApiCallsPage } from "../page/DemoAppApiCallsPage";

describe("API Calls Suite", () => {
  const apiCallsPage = new DemoAppApiCallsPage();

  beforeEach("Open App and Navigate to API Calls Page", async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
    await apiCallsPage.redirectToApiCallModule(); 
  });

  afterEach("Terminate the App", async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
  });

  it("Redirects successfully to API Calls Page", async () => {
    await apiCallsPage.getApiCallHeader()
  });

  it("Verifies visibility of key components", async () => {
    await apiCallsPage.visibilityCheckComponents();
  });

  it("Clicks the available API menus", async () => {
    await apiCallsPage.clickApiMenus();
  });

  it.only('Scroll Api Calls', async () => {
    await driver.pause(5000)
    await apiCallsPage.swipeDownApiCalls()
  })
});
