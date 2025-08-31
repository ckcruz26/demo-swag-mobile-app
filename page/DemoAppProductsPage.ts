

const locators = { 
    addToCartButtonFromProduct : '',
    proudctNumOneLocator : '(//android.view.ViewGroup[@content-desc="store item"])[1]',
}

export class DemoAppProductsPage {
  async swipeProductsDown() {
    const { width, height } = await driver.getWindowRect();

    const startX = Math.floor(width / 2);
    const startY = Math.floor(height * 0.8); // bottom
    const endY = Math.floor(height * 0.3); // top

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 200 },
          { type: "pointerMove", duration: 1000, x: startX, y: endY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await driver.releaseActions();
  }

  async addToCartProducts(){
     await $(locators.proudctNumOneLocator).click()
  }
}
