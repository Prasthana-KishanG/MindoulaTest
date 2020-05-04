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
const membersConsults_1 = require("../pageObjects/membersConsults");
const membersTags_1 = require("../pageObjects/membersTags");
const MMRController_1 = require("../Util/MMRController");
const membersCaseNotes_1 = require("../pageObjects/membersCaseNotes");
const E2EMember_1 = require("../pageObjects/E2EMember");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
let consults = new membersConsults_1.membersConsults();
let tags = new membersTags_1.membersTags();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let casenotes = new membersCaseNotes_1.membersCaseNotes();
let pm = new ParamManager_1.ParamManager();
let E2EMem = new E2EMember_1.E2EMember();
const moment = require("moment");
cucumber_1.Then('click on Add Tag', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(tags.m_tag_add);
        yield tags.m_tag_add.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Search Tag', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(tags.m_tag_search);
        yield tags.m_tag_search.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('select Tag', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield tags.m_tag_searchinput.sendKeys(pm.getParamH("Search Tag"));
        protractor_1.browser.sleep(3000);
        var m_tag_selectoption = tags.m_tag_selectoption_str.replace("$replaceToken$", pm.getParamH("Search Tag"));
        yield protractor_1.element(protractor_1.by.xpath(m_tag_selectoption)).click();
        //browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Start Date', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield tags.m_tag_startdate.click();
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        //await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        yield tags.m_tag_selectdate.click();
        //base.setDateFields(tags.m_tag_startdate, pm.getParamV("Start_Date"));
        // await tags.m_tag_startdate.sendKeys("03/02/2020");
        // await tags.m_tag_startdate.sendKeys(protractor.Key.TAB);
        // await tags.m_tag_startdate.click();
        // var d = new Date();
        // d.setFullYear(2020, 10, 3);
        //browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Start Date1', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield tags.m_tag_startdate.click();
        protractor_1.browser.sleep(2000);
        //await element(by.xpath("//mat-datepicker-toggle[contains(@class,'mat-datepicker-toggle ng-tns-c92-86')]")).click();
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        yield tags.m_tag_selectpredate.click();
        protractor_1.browser.sleep(2000);
        //base.setDateFields(tags.m_tag_startdate, pm.getParamV("Start_Date"));
        // await tags.m_tag_startdate.sendKeys("03/02/2020");
        // await tags.m_tag_startdate.sendKeys(protractor.Key.TAB);
        // await tags.m_tag_startdate.click();
        // var d = new Date();
        // d.setFullYear(2020, 10, 3);
        //browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click Add Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield tags.m_tag_addbtn.click();
        protractor_1.browser.sleep(5000);
        //browser.actions().mouseMove(await tags.m_tag_add).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Member Tags Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("Behavioral_Health", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Behavioral_Health").substring(0, 15)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Behavioral_Health").substring(0, 15)).replace("$replaceToken2$", pm.getParamV("Behavioral_Health").substring(16, 26)))).getText()), pm.getParamV("Behavioral_Health"));
        base.compareValues("Medical", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Medical").substring(0, 11)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Medical").substring(0, 11)).replace("$replaceToken2$", pm.getParamV("Medical").substring(12, 22)))).getText()), pm.getParamV("Medical"));
        base.compareValues("Observations", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Observations").substring(0, 19)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Observations").substring(0, 19)).replace("$replaceToken2$", pm.getParamV("Observations").substring(20, 30)))).getText()), pm.getParamV("Observations"));
        base.compareValues("Others", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Others").substring(0, 13)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Others").substring(0, 13)).replace("$replaceToken2$", pm.getParamV("Others").substring(14, 24)))).getText()), pm.getParamV("Others"));
        //base.compareValues("Behavioral_Health11111", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
        //console.log('Behavioral_Health...>',await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
        //console.log("Behavioral_Health1111123", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Edit icon on the Member Tag', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("TAG_NAME"))))).perform();
        yield protractor_1.element(protractor_1.by.xpath(tags.m_tag_edit_btn.replace("$replaceToken$", pm.getParamV("MEMBER_TAG")))).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Change the Date', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        yield tags.m_tag_startdate.click();
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        //await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
        yield tags.m_tag_selectnextdate.click();
        //base.setDateFields(tags.m_tag_startdate, pm.getParamV("Start_Date"));
        //browser.sleep(2000);
        protractor_1.browser.actions().mouseMove(tags.m_tag_save_btn).perform();
        yield tags.m_tag_save_btn.click();
        protractor_1.browser.sleep(2000);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.END).perform();
        //browser.sleep(22000);
        //await tags.m_tag_toast_close.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data after edit in Member Tags Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("Behavioral_Health", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Behavioral_Health").substring(0, 15)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Behavioral_Health").substring(0, 15)).replace("$replaceToken2$", pm.getParamV("Behavioral_Health").substring(16, 26)))).getText()), pm.getParamV("Behavioral_Health"));
        base.compareValues("Medical", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Medical").substring(0, 11)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Medical").substring(0, 11)).replace("$replaceToken2$", pm.getParamV("Medical").substring(12, 22)))).getText()), pm.getParamV("Medical"));
        //base.compareValues("Observations",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Observations").substring(0,19)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Observations").substring(0,19)).replace("$replaceToken2$",pm.getParamV("Observations").substring(20,30)))).getText(), pm.getParamV("Observations"));
        //base.compareValues("Others",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Others").substring(0,13)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Others").substring(0,13)).replace("$replaceToken2$",pm.getParamV("Others").substring(14,24)))).getText(), pm.getParamV("Others"));
        //console.log('Behavioral_Health...>',await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
        //console.log("Behavioral_Health1111123", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Delete icon on the Member Tag', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("TAG_NAME"))))).perform();
        yield protractor_1.element(protractor_1.by.xpath(tags.m_tag_delete_btn.replace("$replaceToken$", pm.getParamV("MEMBER_TAG")))).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Yes on the PopUp Dialogue', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //pm.dataTableV(dataTable);
        yield tags.m_tag_yes_btn.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data after delete in Member Tags Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("Behavioral_Health", yield tags.m_tag_bh_text.getText(), pm.getParamV("Behavioral_Health"));
        base.compareValues("Medical", yield tags.m_tag_medical_text.getText(), pm.getParamV("Medical"));
        base.compareValues("Observations", yield tags.m_tag_obs_text.getText(), pm.getParamV("Observations"));
        base.compareValues("Others", yield tags.m_tag_others_text.getText(), pm.getParamV("Others"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on AddTag in Members QuickAction Icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //base.WaitforElementClickable(tags.m_tag_add);
        yield tags.m_tag_addicon.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Member Tags Page QuickAction', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("Behavioral_Health", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Behavioral_Health").substring(0, 15)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Behavioral_Health").substring(0, 15)).replace("$replaceToken2$", pm.getParamV("Behavioral_Health").substring(16, 26)))).getText()), pm.getParamV("Behavioral_Health"));
        base.compareValues("Medical", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Medical").substring(0, 11)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Medical").substring(0, 11)).replace("$replaceToken2$", pm.getParamV("Medical").substring(12, 22)))).getText()), pm.getParamV("Medical"));
        base.compareValues("Observations", (yield protractor_1.element(protractor_1.by.xpath(tags.tagname.replace("$replaceToken$", pm.getParamV("Observations").substring(0, 19)))).getText()) + " " + (yield protractor_1.element(protractor_1.by.xpath(tags.startdate.replace("$replaceToken1$", pm.getParamV("Observations").substring(0, 19)).replace("$replaceToken2$", pm.getParamV("Observations").substring(20, 30)))).getText()), pm.getParamV("Observations"));
        //base.compareValues("Others",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Others").substring(0,13)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Others").substring(0,13)).replace("$replaceToken2$",pm.getParamV("Others").substring(14,24)))).getText(), pm.getParamV("Others"));
        //base.compareValues("Behavioral_Health11111", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
        //console.log('Behavioral_Health...>',await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
        //console.log("Behavioral_Health1111123", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyc1RhZ3NUZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9tZW1iZXJzVGFnc1Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFYix1Q0FBZ0M7QUFDaEMsMkNBQThEO0FBQzlELHVDQUFvQztBQUNwQyxvRUFBaUU7QUFDakUsNERBQXlEO0FBQ3pELHlEQUFzRDtBQUN0RCxzRUFBbUU7QUFDbkUsd0RBQXFEO0FBQ3JELGdEQUF3QjtBQUN4Qix1REFBb0Q7QUFFcEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN0QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQy9CLElBQUksU0FBUyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUN2QyxJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM3QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsZUFBSSxDQUFDLGtCQUFrQixFQUFFOztRQUN4QixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFD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QyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBQyxHQUFHLElBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUEsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN4WixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBQyxDQUFBLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBQyxHQUFHLElBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0VyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBQyxDQUFBLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBQyxHQUFHLElBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMvWCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBQyxDQUFBLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBQyxHQUFHLElBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENB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