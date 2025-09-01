import { DemoAppLoginPage } from "../page/DemoAppLoginPage";

describe("Login Suite", () => {
  const loginPage = new DemoAppLoginPage();

  beforeEach("START OF EXECUTION", async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
    await loginPage.redirectToLoginModule();
  });

  afterEach("END OF EXECUTION", async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
  });

  it("Login with Valid Credentials", async () => {
    await loginPage.loginCredentials("bod@example.com", "10203040");
  });

  it("Login with Locked Account", async () => {
    await loginPage.loginCredentials("alice@example.com", "10203040");
    await loginPage.getErrorMsg("Sorry this user has been is locked out");
  });
});
