import { DemoAppLoginPage } from "../page/DemoAppLoginPage";

describe("Login Suite", () => {
  const loginPage = new DemoAppLoginPage();
  const appPackage = "com.saucelabs.mydemoapp.rn";

  beforeEach("Start App & Navigate to Login", async () => {
    await driver.activateApp(appPackage);
    await loginPage.redirectToLoginModule();
  });

  afterEach("Close App", async () => {
    await driver.terminateApp(appPackage);
  });

  it("should login successfully with valid credentials", async () => {
    await loginPage.loginCredentials("bod@example.com", "10203040");
  });

  it("should show error for locked out account", async () => {
    await loginPage.loginCredentials("alice@example.com", "10203040");
    await loginPage.getErrorMsg("Sorry this user has been is locked out");
  });
});
