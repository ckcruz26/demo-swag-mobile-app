// utils/XpathUtils.ts

export const DemoAppXpathUtilsJson = {
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
  },
  ProductPageXpaths: {
    // Added a colon here
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
  },
};
