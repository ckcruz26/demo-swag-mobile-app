import { $ } from '@wdio/globals';
import { DemoAppBasePage } from './DemoAppBasePage'; // correct this path


const locators = {
    usernameField: "id:com.saucelabs.mydemoapp.android:id/nameET",
    passwordField: "id:com.saucelabs.mydemoapp.android:id/passwordET",
    loginButton  : "id:com.saucelabs.mydemoapp.android:id/loginBtn",

    errorMsgLocator : "id:com.saucelabs.mydemoapp.android:id/passwordErrorTV"

}

export class DemoAppLoginPage extends DemoAppBasePage {

    async redirectToLoginModule(){
        await this.clickHamburgerMenu()
        await this.redirectToLoginMenu()
    }

    async loginCredentials(username: string, password: string) {
        await $(locators.usernameField).setValue(username);
        await $(locators.passwordField).setValue(password);
        await $(locators.loginButton).click();
    }

    async getErrorMsg(errorMsg : string){
        await expect($(locators.errorMsgLocator)).toBeDisplayed();
        await expect($(locators.errorMsgLocator)).toHaveText(errorMsg)
    }
}
