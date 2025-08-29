import { $ } from '@wdio/globals';
const locators = {
    globalHamburger : "id:com.saucelabs.mydemoapp.android:id/menuIV",
    loginMenu : "//android.widget.TextView[@content-desc='Login Menu Item']"

}

export class DemoAppBasePage{

    async clickHamburgerMenu(){
        await $(locators.globalHamburger).click()
    }

    async redirectToLoginMenu(){
        await $(locators.loginMenu).click();
    }
}