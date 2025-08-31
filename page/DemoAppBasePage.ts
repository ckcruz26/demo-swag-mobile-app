import { $ } from '@wdio/globals';
const locators = {
    globalHamburger : '//android.view.ViewGroup[@content-desc="open menu"]',
    loginMenu : '//android.view.ViewGroup[@content-desc="menu item log in"]',
    aboutMenu : '//android.view.ViewGroup[@content-desc="menu item about"]',

}

export class DemoAppBasePage{

    async clickHamburgerMenu(){
        await $(locators.globalHamburger).click()
    }

    async redirectToLoginMenu(){
        await $(locators.loginMenu).click();
    }

    async redirectToAboutMenu(){
        await $(locators.aboutMenu).click();
    }
}