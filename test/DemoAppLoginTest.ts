import { DemoAppLoginPage } from "../page/DemoAppLoginPage";
import {DemoAppConstData} from "../utils/DemoAppConstData"

describe("Login Suite", () => {
  const loginPage = new DemoAppLoginPage();

  beforeEach("Start App & Navigate to Login", async () => {
    await driver.activateApp(DemoAppConstData.AndroidPkg);
    await loginPage.redirectToLoginModule();
  });

  afterEach("Close App", async () => {
    await driver.terminateApp(DemoAppConstData.AndroidPkg);
  });

  it("should login successfully with valid credentials", async () => {
    await loginPage.loginCredentials(DemoAppConstData.ValidEmail, DemoAppConstData.ValidPassword);
    await loginPage.logoutSession()
  });

  it("should show error for locked out account", async () => {
    await loginPage.loginCredentials(DemoAppConstData.LockedEmail, DemoAppConstData.ValidPassword);
    await loginPage.getErrorMsg(DemoAppConstData.ErrorTxtMsg);
  });
});
