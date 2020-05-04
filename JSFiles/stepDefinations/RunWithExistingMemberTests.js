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
const Base_1 = require("../Util/Base");
const Memberspage_1 = require("../pageObjects/Memberspage");
const MMRController_1 = require("../Util/MMRController");
const MMRLoginPage_1 = require("../pageObjects/MMRLoginPage");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
let pm = new ParamManager_1.ParamManager();
let mpage = new Memberspage_1.Memberspage();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let login = new MMRLoginPage_1.MMRLoginPage();
cucumber_1.Then("open left navigation menu", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(5000);
        //if (!element(by.tagName("mat-sidenav")).isDisplayed) {
        yield mpage.menuIcon.click();
        //browser.sleep(3000);
        //}
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("open left navigation from menu", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(5000);
        if (!protractor_1.element(protractor_1.by.tagName("mat-sidenav")).isDisplayed) {
            yield mpage.menuIcon.click();
            protractor_1.browser.sleep(3000);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("opens left navigation menu", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(5000);
        if (!protractor_1.element(protractor_1.by.tagName("mat-sidenav")).isDisplayed) {
            yield mpage.menuIcon.click();
            protractor_1.browser.sleep(4000);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("user clicks on Members", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield mpage.menuItemXpath.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("close left navigation menu", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (mpage.sideNavigation.isDisplayed) {
            yield mpage.menuIcon.click();
            protractor_1.browser.sleep(3000);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("click on a Member in the list", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var a = dataTable.hashes();
        //await mpage.ml_search.sendKeys(a[0].name);
        //await mpage.ml_search.sendKeys(browser.params.mmrlogin.setCurrentUser);
        yield mpage.ml_search.sendKeys(mmrc.getCurrentUser());
        protractor_1.browser.sleep(2000);
        //console.log('getCurrentUser--->',mmrc.getCurrentUser())
        var str = "//td[contains(@id,'memberlist_table_row_name_')]//div//a[text()='$name$']";
        var ml_memberName = str.replace("$name$", mmrc.getCurrentUser());
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(ml_memberName)));
        yield protractor_1.element(protractor_1.by.xpath(ml_memberName)).click();
        base.UrlContains("details");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('save member details', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        if (pm.getParamV("INPUT") == ("MEMBER1")) {
            var email1 = yield mpage.email_header.getText();
            //console.log('email1...>',email1)
            mmrc.setMember1Email(email1);
            //console.log('email1...>',email1)
        }
        if (pm.getParamV("INPUT") == ("MEMBER2")) {
            var email1 = yield mpage.email_header.getText();
            //console.log('email1...>',email1)
            mmrc.setMember2Email(email1);
            //console.log('email1...>',email1)
        }
    });
});
cucumber_1.Then('Reset Password', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.client.connect();
        var email = mmrc.getMember1Email();
        console.log('email...>', email);
        let query = `select confirmation_token  from users where email='${email}'`;
        console.log('query...>', query);
        var rs = yield base.client.query(query);
        //var rs = await base.client.query(`select confirmation_token from users where email= ${email}`);
        //var rs = await base.client.query("select confirmation_token from" + users +" where email="+email );
        console.log("rs...>", rs.rows);
        var Tokenid = rs.rows[0]["confirmation_token"];
        console.log("Tokenid...>", Tokenid);
        var oldurl = "http://mmr-staging.mindoula.com/user-confirmation?confirmation_token=$token$";
        var newUrl = oldurl.replace('$token$', Tokenid);
        console.log("newUrl...>", newUrl);
        yield protractor_1.browser.get(newUrl);
        protractor_1.browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(2000);
            });
        });
        mmrc.setCurrentPassword("Test@123");
        yield mpage.resetPwd.sendKeys("Test@123");
        yield mpage.confirmResetPwd.sendKeys("Test@123");
        yield mpage.resetBtn.click();
        protractor_1.browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(2000);
                //mmr.memb361@mind.com
            });
        });
    });
});
// Then('Reset Password', async function () {
//   base.client.connect();
//   var email = mmrc.getMember1Email();
//   console.log('email...>',email)
//   let query="select confirmation_token  from users where email='mmr.memb17@mind.com'";
//   console.log('query...>',query);
//   var rs = await base.client.query(query);
//   //var rs = await base.client.query(`select confirmation_token from users where email= ${email}`);
//   //var rs = await base.client.query("select confirmation_token from" + users +" where email="+email );
//   console.log("rs...>", rs.rows);
//   var Tokenid = rs.rows[0]["confirmation_token"];
//   console.log("Tokenid...>", Tokenid);
//   var oldurl="http://mmr-staging.mindoula.com/user-confirmation?confirmation_token=$token$";
//   var newUrl=oldurl.replace('$token$',Tokenid);
//   console.log("newUrl...>", newUrl);
//   await browser.get(newUrl);
//   browser.sleep(2000);
//   await browser.getTitle().then(async function(text) {
//     expect(text).to.equal("mMR");
//     browser.sleep(2000);
//   });
//     await mpage.resetPwd.sendKeys("Test@123");
//     await mpage.confirmResetPwd.sendKeys("Test@123");
//     await mpage.resetBtn.click();
//     browser.sleep(2000);
//     await browser.getTitle().then(async function(text) {
//       expect(text).to.equal("mMR");
//       browser.sleep(20000);
//   //mmr.memb361@mind.com
// });
// });
cucumber_1.Then("Member Login", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.signIn_btn.click();
        protractor_1.browser.sleep(4000);
        yield login.usernameEditbox.sendKeys(mmrc.getMember1Email());
        yield login.passwordEditbox.sendKeys(mmrc.getCurrentPassword());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVuV2l0aEV4aXN0aW5nTWVtYmVyVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvUnVuV2l0aEV4aXN0aW5nTWVtYmVyVGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBa0Q7QUFDbEQsdUNBQW9DO0FBQ3BDLDREQUF5RDtBQUN6RCx5REFBc0Q7QUFDdEQsOERBQTJEO0FBQzNELGdEQUF3QjtBQUN4Qix1REFBb0Q7QUFFcEQsSUFBSSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN0QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQy9CLElBQUksS0FBSyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBRS9CLGVBQUksQ0FBQywyQkFBMkIsRUFBRTs7UUFDaEMsc0JBQXNCO1FBQ3RCLHdEQUF3RDtRQUN0RCxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0Isc0JBQXNCO1FBQ3hCLEdBQUc7UUFDSCxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENB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