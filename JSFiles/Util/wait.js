"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const EC = protractor_1.browser.ExpectedConditions;
/*
This class assists in waiting for non-angular page screen elements
 */
class wait {
    waitForPresent(ele) {
        return protractor_1.browser.wait(EC.presenceOf(ele));
    }
    waitForDisplay(ele) {
        return protractor_1.browser.wait(ele.isDisplayed);
    }
    waitForElement(ele) {
        this.waitForPresent(ele);
        this.waitForDisplay(ele);
    }
    implicitwait(value) {
        protractor_1.browser.manage().timeouts().implicitlyWait(value);
    }
}
exports.wait = wait;
exports.default = wait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWwvd2FpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUVyQyxNQUFNLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBQ3RDOztHQUVHO0FBQ0gsTUFBYSxJQUFJO0lBQ2hCLGNBQWMsQ0FBQyxHQUFRO1FBQ3RCLE9BQU8sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxjQUFjLENBQUMsR0FBUTtRQUN0QixPQUFPLG9CQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsY0FBYyxDQUFDLEdBQVE7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxZQUFZLENBQUMsS0FBVTtRQUN0QixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBRUQ7QUFmRCxvQkFlQztBQUVELGtCQUFlLElBQUksQ0FBQyJ9