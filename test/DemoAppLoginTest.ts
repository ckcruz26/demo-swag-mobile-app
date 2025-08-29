import { DemoAppLoginPage } from '../page/DemoAppLoginPage';

describe ("mocha", () => {

     const loginPage = new DemoAppLoginPage();

     beforeEach('START OF EXECUTION', async () => {
        await driver.activateApp('com.saucelabs.mydemoapp.android');
        await loginPage.redirectToLoginModule();
     })

     afterEach('END OF EXECUTION', async () => {
        await driver.terminateApp('com.saucelabs.mydemoapp.android')
     })

    it('Login with Valid Credentials', async () => {
        await loginPage.loginCredentials('bod@example.com','10203040')
    })

    it('Login with Locked Account', async () => {
        await loginPage.loginCredentials('alice@example.com','10203040')
        await loginPage.getErrorMsg("Sorry your account is locked")
    })

    it('Skip Required Fields', async () => {
        await loginPage.loginCredentials('','')
        await loginPage.getErrorMsg("Username is required")
    })
})