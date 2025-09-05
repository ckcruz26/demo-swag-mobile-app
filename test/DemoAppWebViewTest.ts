import { DemoAppConstData } from "../utils/DemoAppConstData";
import { DemoAppWebViewPage } from "../page/DemoAppWebViewPage";

describe("Web View State", () => {
  const webView = new DemoAppWebViewPage();
  const webSiteVal = "https://www.google.com"
  const invalidUrl = "sadasada"

  beforeEach("Open Web View", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await webView.redirectToWebViewPageModule();
  });

  afterEach("Close App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it("Element Visibility Check", async () => {
    await webView.checkVisibilityElements();
  });

  it('Input Valid Link', async () => {
    await webView.inputValidLinkAndRedirectToWeb(webSiteVal)
  })

  it('Input Invalid Link', async () => {
    await webView.inputValidLinkAndRedirectToWeb(invalidUrl)
    await webView.getErrMsg('Please provide a correct https url.')
  })
});
