/**
 * Centralized collection of XPath locators for the Demo App.
 *
 * This utility serves as a single source of truth for element selectors
 * used across Page Object Models (POM). By keeping all XPath values here,
 * it ensures better maintainability and readability of the test framework.
 *
 * Structure:
 * - ApiCall: Locators for API call menu and headers.
 * - AboutPageXpaths: Locators for the About page elements (header, website link, images).
 * - BasePageXpaths: Locators for global navigation and menu items.
 * - ProductPageXpaths:
 *    - product: Buttons and product interaction elements (add to cart, quantity).
 *    - cart: Cart badge and checkout button.
 *    - colors: Color selection buttons for products.
 *    - checkout: Checkout form input fields and navigation.
 *    - payment: Payment form input fields and order actions.
 * - LoginPageXpaths: Locators for login form fields, buttons, and error messages.
 *
 * Usage:
 * ```ts
 * import { DemoAppXpathUtilsJson } from "../utils/XpathUtils";
 *
 * // Example: accessing login button locator
 * const loginBtn = await $(DemoAppXpathUtilsJson.LoginPageXpaths.loginButton);
 * await loginBtn.click();
 * ```
 */

export const DemoAppXpathUtilsJson = {
  ApiCall : {
    ApiCallHeaderTxt : '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
    EuDcMenu : '//android.view.ViewGroup[@content-desc="api calls screen"]/android.view.ViewGroup[2]',
    UsDcMenu : '//android.view.ViewGroup[@content-desc="api calls screen"]/android.view.ViewGroup[3]',
    Menu401 : '//android.view.ViewGroup[@content-desc="api calls screen"]/android.view.ViewGroup[4]',
    Menu404 : '//android.view.ViewGroup[@content-desc="api calls screen"]/android.view.ViewGroup[5]'
  },
  AboutPageXpaths: {
    aboutHeader : '//android.view.ViewGroup[@content-desc="container header"]',
    sauceWebsiteLink : '//android.view.ViewGroup[@content-desc="about screen"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView',
    imageOne : '//android.view.ViewGroup[@content-desc="about screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[1]',
    imageTwo  : '//android.view.ViewGroup[@content-desc="about screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[2]',
    imageThree : '//android.view.ViewGroup[@content-desc="about screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[3]'
    
  },
  BasePageXpaths: {
    globalHamburger: '//android.view.ViewGroup[@content-desc="open menu"]',
    loginMenu: '//android.view.ViewGroup[@content-desc="menu item log in"]',
    aboutMenu: '//android.view.ViewGroup[@content-desc="menu item about"]',
    apiCallMenu : '//android.view.ViewGroup[@content-desc="menu item api calls"]',
    logoutMenu : '//android.view.ViewGroup[@content-desc="menu item log out"]',
    sauceVideoMenu : '//android.view.ViewGroup[@content-desc="menu item sauce bot video"]',
    geoLocationMenu : '//android.view.ViewGroup[@content-desc="menu item geo location"]',
    drawingMenu : '//android.view.ViewGroup[@content-desc="menu item drawing"]',
    resetStateMenu : '//android.view.ViewGroup[@content-desc="menu item reset app"]',
    webViewMenu : '//android.view.ViewGroup[@content-desc="menu item webview"]',
    fingerPrintMenu : '//android.view.ViewGroup[@content-desc="menu item biometrics"]'
  },
  ProductPageXpaths: {
    product: {
      addToCartButton:
        '//android.view.ViewGroup[@content-desc="Add To Cart button"]',
      firstProduct: '(//android.view.ViewGroup[@content-desc="store item"])[1]',
      quantityAdd:
        '//android.view.ViewGroup[@content-desc="counter plus button"]',
      quantityMinus:
        '//android.view.ViewGroup[@content-desc="counter minus button"]',
    },
    cart: {
      cartBadge: '//android.view.ViewGroup[@content-desc="cart badge"]',
      proceedToCheckout:
        '//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]',
    },
    colors: {
      black: '//android.view.ViewGroup[@content-desc="black circle"]',
      blue: '//android.view.ViewGroup[@content-desc="blue circle"]',
      gray: '//android.view.ViewGroup[@content-desc="gray circle"]',
      red: '//android.view.ViewGroup[@content-desc="red circle"]',
    },
    checkout: {
      fullName:
        '//android.widget.EditText[@content-desc="Full Name* input field"]',
      addressLine:
        '//android.widget.EditText[@content-desc="Address Line 1* input field"]',
      city: '//android.widget.EditText[@content-desc="City* input field"]',
      stateRegion:
        '//android.widget.EditText[@content-desc="State/Region input field"]',
      zipCode:
        '//android.widget.EditText[@content-desc="Zip Code* input field"]',
      country:
        '//android.widget.EditText[@content-desc="Country* input field"]',
      toPayment: '//android.view.ViewGroup[@content-desc="To Payment button"]',
    },
    payment: {
      fullName:
        '//android.widget.EditText[@content-desc="Full Name* input field"]',
      cardNo:
        '//android.widget.EditText[@content-desc="Card Number* input field"]',
      expDate:
        '//android.widget.EditText[@content-desc="Expiration Date* input field"]',
      secCode:
        '//android.widget.EditText[@content-desc="Security Code* input field"]',
      reviewOrder:
        '//android.view.ViewGroup[@content-desc="Review Order button"]',
      placeOrder:
        '//android.view.ViewGroup[@content-desc="Place Order button"]',
    },
  },
  LoginPageXpaths: {
    usernameField:
      "//android.widget.EditText[@content-desc='Username input field']",
    passwordField:
      "//android.widget.EditText[@content-desc='Password input field']",
    loginButton: "//android.view.ViewGroup[@content-desc='Login button']",

    errorMsgLocator:
      "//android.view.ViewGroup[@content-desc='generic-error-message']",
    errMsgUsername: "~Username-error-message",

    productMain : {
      productHeader : '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
    }
  },
  AndroidButtonsXpath : {
    resetAppBttn : '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]',               
    logoutBttn : '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]',
    cancelBttn : '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[1]'
  },
  GeoLocationUtils : {
     startObservingBttn : '//android.view.ViewGroup[@content-desc="Start Observing button"]',
     stopObservingBttn : '//android.view.ViewGroup[@content-desc="Stop Observing button"]',
     geoLocationHeaderTxt : '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
     geoLocationParagraphTxt : '//android.view.ViewGroup[@content-desc="geo location screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]',
     geoLocationStatementOne : '//android.view.ViewGroup[@content-desc="geo location screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]',
     geoLocationStatementTwo : '//android.view.ViewGroup[@content-desc="geo location screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[3]',
     geoLocationLatitudeLongtitudeGroup : '//android.view.ViewGroup[@content-desc="geo location screen"]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]'
  },
  SauceVideoUtils : {
    containerHeader : '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
    sauceBotScreen : '//android.view.ViewGroup[@content-desc="SauceBot screen"]/android.view.ViewGroup[2]',
    stopButton : '//android.view.ViewGroup[@content-desc="video icon stop"]',
    playButton : '//android.view.ViewGroup[@content-desc="video icon play"]',
    rewindButton : '//android.view.ViewGroup[@content-desc="video icon backward"]',
    forwardButton : '//android.view.ViewGroup[@content-desc="video icon forward"]',
    muteButton : '//android.view.ViewGroup[@content-desc="video icon volume-mute"]',
    unmuteButton : '//android.view.ViewGroup[@content-desc="video icon volume-up"]'
  },
  DrawingUtils : {
    drawingHeader : '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
    drawingScreen : '//android.view.ViewGroup[@content-desc="drawing screen"]/android.view.ViewGroup[2]/android.view.ViewGroup/android.webkit.WebView',
    clearButton : '//android.view.ViewGroup[@content-desc="Clear button"]',
    saveButton : '//android.view.ViewGroup[@content-desc="Save button"]'
  },
  WebViewUtils : {
    webviewHeader : '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
    urlTxtHeader : '//android.view.ViewGroup[@content-desc="webview selection screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]',
    urlTxtField : '//android.widget.EditText[@content-desc="URL input field"]',
    instructTxt : '//android.view.ViewGroup[@content-desc="webview selection screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]',
    goToSiteBttn : '//android.view.ViewGroup[@content-desc="Go To Site button"]',
    errMsg : '//android.view.ViewGroup[@content-desc="URL-error-message"]/android.widget.TextView'
  },
  FingerPrintUtils : {
    fingerPrintHeader : '//android.widget.TextView[@text="FingerPrint"]',
    fingerPrintToggleLabel : '//android.widget.TextView[@text="Allow login with FingerPrint"]',
    fingerPrintToggleSwitch : '//android.widget.Switch[@content-desc="biometrics switch"]',
    fingerPrintLabelOne : '//android.widget.TextView[@text="If your devices supports FingerPrint you can enable it here. This will help you to easily log in."]',
    fingerPrintLabelTwo : '//android.widget.TextView[@text="Normally this screen would be behind a secure login, but for demo purposes this screen has been put in the menu by default."]'

  }
};
