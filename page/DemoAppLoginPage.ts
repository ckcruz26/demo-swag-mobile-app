import { $ } from '@wdio/globals';

const locators = {
    usernameField: "//android.widget.EditText[@content-desc='Username input field']",
    passwordField: "//android.widget.EditText[@content-desc='Password input field']",
    loginButton  : "//android.view.ViewGroup[@content-desc='Login button']"
}

export class DemoAppLoginPage {

    async loginCredentials(username: string, password: string) {
        await $(locators.usernameField).setValue(username);
        await $(locators.passwordField).setValue(password);
        await $(locators.loginButton).click();
    }
}
