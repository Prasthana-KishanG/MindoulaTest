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
const verifyFilters_1 = require("../pageObjects/verifyFilters");
const members_AddFiltersPracticeProviderCheck_1 = require("../pageObjects/members_AddFiltersPracticeProviderCheck");
const MMRController_1 = require("../Util/MMRController");
const ParamManager_1 = require("../Util/ParamManager");
const chai_1 = __importDefault(require("chai"));
let mpage = new Memberspage_1.Memberspage();
let vfilters = new verifyFilters_1.verifyFilters();
let AddFiltersPracticeProvider = new members_AddFiltersPracticeProviderCheck_1.members_AddFiltersPracticeProviderCheck();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let pm = new ParamManager_1.ParamManager();
var membBeforeCount = "";
cucumber_1.Then('check member count before', function () {
    return __awaiter(this, void 0, void 0, function* () {
        membBeforeCount = (yield protractor_1.element(protractor_1.by.xpath(AddFiltersPracticeProvider.ml_count)).getText()).replace("(", "").replace(")", "").trim();
        console.log('membBeforeCount...>', membBeforeCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('enter data in practice filter', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield AddFiltersPracticeProvider.select_practice.sendKeys(pm.getParamV("PRACTICE_NAME"));
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in practice filter', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        //var practice_dropdown =element(by.xpath(AddFiltersPracticeProvider.practice_dropdown_str.replace("$replaceToken$",pm.getParamV("PRACTICE_NAME")))).getText();
        var practice_dropdown = yield (protractor_1.element(protractor_1.by.xpath(AddFiltersPracticeProvider.dropdown_null_str)).getText());
        console.log('practice_dropdown...>', practice_dropdown);
        var practExist = "NO";
        if (practice_dropdown == pm.getParamV("PRACTICE_NAME")) {
            practExist = "YES";
        }
        expect(practExist, "PRACTICE CHECK " + pm.getParamV("PRACTICE_NAME")).to.equal(pm.getParamV("PRACTICE_CHECK"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // base.compareValues("PRACTICE CHECK " + pm.getParamV("PRACTICE_NAME") , practExist , pm.getParamV("PRACTICE_CHECK"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
cucumber_1.Then('enter data in provider filter', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield AddFiltersPracticeProvider.select_provider.sendKeys(pm.getParamV("PROVIDER_NAME"));
        protractor_1.browser.sleep(6000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in provider filter', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        //var provider_dropdown = element(by.xpath(AddFiltersPracticeProvider.provider_dropdown_str.replace("$replaceToken$",pm.getParamV("PROVIDER_NAME")))).getText();
        var provider_dropdown = yield (protractor_1.element(protractor_1.by.xpath(AddFiltersPracticeProvider.dropdown_null_str)).getText());
        var providerExist = "NO";
        if (provider_dropdown == pm.getParamV("PROVIDER_NAME")) {
            providerExist = "YES";
        }
        expect(providerExist, "Provider CHECK " + pm.getParamV("PROVIDER_NAME")).to.equal(pm.getParamV("PROVIDER_CHECK"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // base.compareValues("PRACTICE CHECK " + pm.getParamV("PROVIDER_NAME") , providerExist , pm.getParamV("PROVIDER_CHECK"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
cucumber_1.Then('verify data in provider filter2', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        //var provider_dropdown = element(by.xpath(AddFiltersPracticeProvider.provider_dropdown_str.replace("$replaceToken$",pm.getParamV("PROVIDER_NAME")))).getText();
        var provider_dropdown = yield (protractor_1.element(protractor_1.by.xpath("//span[@class='ng-option-label ng-star-inserted'][contains(.,'Larson Provider')]")).getText());
        var providerExist = "NO";
        if (provider_dropdown == pm.getParamV("PROVIDER_NAME")) {
            providerExist = "YES";
        }
        expect(providerExist, "Provider CHECK " + pm.getParamV("PROVIDER_NAME")).to.equal(pm.getParamV("PROVIDER_CHECK"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // base.compareValues("PRACTICE CHECK " + pm.getParamV("PROVIDER_NAME") , providerExist , pm.getParamV("PROVIDER_CHECK"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyc19BZGRGaWx0ZXJzUHJhY3RpY2VQcm92aWRlckNoZWNrVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbWVtYmVyc19BZGRGaWx0ZXJzUHJhY3RpY2VQcm92aWRlckNoZWNrVGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBa0Q7QUFDbEQsdUNBQW9DO0FBQ3BDLDREQUF5RDtBQUN6RCxnRUFBNkQ7QUFDN0Qsb0hBQWlIO0FBQ2pILHlEQUFzRDtBQUN0RCx1REFBb0Q7QUFDcEQsZ0RBQXdCO0FBRXhCLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ25DLElBQUksMEJBQTBCLEdBQUcsSUFBSSxpRkFBdUMsRUFBRSxDQUFDO0FBQy9FLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLGVBQWUsR0FBQyxFQUFFLENBQUM7QUFFdkIsZUFBSSxDQUFDLDJCQUEyQixFQUFFOztRQUVoQyxlQUFlLEdBQUUsQ0FBQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25JLE9BQU8sQ0FB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