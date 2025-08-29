import { DemoAppLoginPage } from '../page/DemoAppLoginPage';

describe ("mocha", () => {

     const loginPage = new DemoAppLoginPage();


    it('Login with Valid Credentials', async () => {
        await loginPage.loginCredentials('','')
    })
})