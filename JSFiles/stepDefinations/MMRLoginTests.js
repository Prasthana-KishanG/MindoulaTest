"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const MMRLoginPage_1 = require("../pageObjects/MMRLoginPage");
const chai_1 = __importDefault(require("chai"));
const Memberspage_1 = require("../pageObjects/Memberspage");
const Base_1 = require("../Util/Base");
let login = new MMRLoginPage_1.MMRLoginPage();
var expect = chai_1.default.expect;
let mpage = new Memberspage_1.Memberspage();
let base = new Base_1.Base();
cucumber_1.Given("Launch Website", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("Login to the website", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.usernameEditbox.sendKeys(protractor_1.browser.params.mmrlogin.email);
        yield login.passwordEditbox.sendKeys(protractor_1.browser.params.mmrlogin.pwd);
        yield login.loginBtn.click();
        protractor_1.browser.sleep(4000);
        base.UrlContains("member");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Change to Darkmode On', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.UserBtn.click();
        protractor_1.browser.sleep(2000);
        yield login.darkmode_btn.click();
        protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTU1STG9naW5UZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9NTVJMb2dpblRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxRTtBQUNyRSw4REFBMkQ7QUFDM0QsZ0RBQXdCO0FBQ3hCLDREQUF5RDtBQUV6RCx1Q0FBb0M7QUFFcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBRXRCLGdCQUFLLENBQUMsZ0JBQWdCLEVBQUU7O1FBQ3RCLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0JBQXNCLEVBQUU7O1FBQzNCLE1BQU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUJBQXVCLEVBQUU7O1FBQzVCLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9