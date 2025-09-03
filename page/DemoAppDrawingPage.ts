import { DemoAppXpathUtilsJson } from "../utils/DemoAppXpathUtils";
import { DemoAppBasePage } from "./DemoAppBasePage";

const locators = DemoAppXpathUtilsJson.DrawingUtils;

export class DemoAppDrawingPage extends DemoAppBasePage {
  async redirectToDrawingModule() {
    await this.clickHamburgerMenu();
    await this.redirectToDrawingPage();
  }

  async visibilityCheckElements() {
    const arrLocators = [
      locators.drawingHeader,
      locators.drawingScreen,
      locators.clearButton,
      locators.saveButton,
    ];

    for (const draw of arrLocators) {
      await expect($(draw)).toBeDisplayed();
    }
  }

  async drawDiamond() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 500, y: 600 }, // start (top)
          { type: "pointerDown", button: 0 },

          { type: "pointerMove", duration: 300, x: 300, y: 800 }, // left
          { type: "pointerMove", duration: 300, x: 500, y: 1000 }, // bottom
          { type: "pointerMove", duration: 300, x: 700, y: 800 }, // right
          { type: "pointerMove", duration: 300, x: 500, y: 600 }, // back to top

          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async drawingThenClear() {
    await this.drawDiamond();
    await $(locators.clearButton).click();
    await driver.pause(2000)
  }

  async drawingThenSave() {
    await this.drawDiamond();
    await $(locators.saveButton).click();
    await driver.pause(2000)
  }
}
