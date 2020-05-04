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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Base_1 = require("../Util/Base");
const Memberspage_1 = require("../pageObjects/Memberspage");
const verifyFilters_1 = require("../pageObjects/verifyFilters");
const MMRController_1 = require("../Util/MMRController");
const ParamManager_1 = require("../Util/ParamManager");
const chai_1 = __importStar(require("chai"));
const MMRLoginPage_1 = require("../pageObjects/MMRLoginPage");
let login = new MMRLoginPage_1.MMRLoginPage();
let mpage = new Memberspage_1.Memberspage();
let vfilters = new verifyFilters_1.verifyFilters();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let pm = new ParamManager_1.ParamManager();
var tasksBeforeCount = "";
var tasksAfterCount = "";
var caseNotesBeforeCount = "";
var caseNotesAfterCount = "";
var consultsBeforeCount = "";
var consultsAfterCount = "";
var Count_1 = "", Count_2 = "", Count_3 = "", Count_4 = "", Count_5 = "";
var MemberCountBefore = "", MemberCountAfter = "", MemberCount1 = "", MemberCount2 = "", MemberCount3 = "", MemberCount4 = "", MemberCount5 = "", MemberCount6 = "", MemberCount7 = "", MemberCount8 = "", MemberCount9 = "", MemberCount10 = "", MemberCount11 = "", MemberCount12 = "", MemberCount13 = "", MemberCount14 = "", MemberCount15 = "";
var CaseNotesCount1 = "", CaseNotesCount2 = "", CaseNotesCount3 = "", CaseNotesCount4 = "", CaseNotesCount5 = "";
var ConsultsCount1 = "", ConsultsCount2 = "", ConsultsCount3 = "", ConsultsCount4 = "", ConsultsCount5 = "";
var Report_MemberCount_Before = "", Report_MemberCount_After = "", ReportMemberCount1 = "", ReportMemberCount2 = "", ReportMemberCount3 = "", ReportMemberCount4 = "", ReportMemberCount5 = "", ReportMemberCount6 = "", ReportMemberCount7 = "", ReportMemberCount8 = "";
var Report_CCPCount_Before = "", Report_CCPCount_After = "", CCPReportCount1 = "", CCPReportCount2 = "", CCPReportCount3 = "", CCPReportCount4 = "";
cucumber_1.Then('user clicks on left nav item', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var menuItemXpath = "//div[@id='nav_menu_icon_$replaceToken$']";
        menuItemXpath = menuItemXpath.replace("$replaceToken$", pm.getParamH("name").toLowerCase());
        yield protractor_1.element(protractor_1.by.xpath(menuItemXpath)).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('user click on left nav item', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var menuItemXpath = "//div[@id='nav_menu_icon_people']";
        //menuItemXpath = menuItemXpath.replace("$replaceToken$", pm.getParamH("name").toLowerCase());
        yield protractor_1.element(protractor_1.by.xpath(menuItemXpath)).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check tasks count before', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksBeforeCount1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        tasksBeforeCount = (yield protractor_1.element(protractor_1.by.xpath(tasksBeforeCount1)).getText()).replace("(", "").replace(")", "").trim();
        console.log('tasksBeforeCount...>', tasksBeforeCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vfilters.add_filter.click();
        protractor_1.browser.sleep(4000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on available filters', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var available_filter_option = vfilters.available_filter_option_str.replace("$replaceToken$", pm.getParamV("FITLER_NAME"));
        yield protractor_1.element(protractor_1.by.xpath(available_filter_option)).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('expand parent program', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var expand_parent_program = vfilters.expand_parent_program_str.replace("$replaceToken$", pm.getParamV("PARENT_NAME"));
        yield protractor_1.element(protractor_1.by.xpath(expand_parent_program)).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('select child program', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var child_program = vfilters.child_program_str.replace("$replaceToken$", pm.getParamV("CHILD_PROGRAM"));
        yield protractor_1.element(protractor_1.by.xpath(child_program)).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Apply filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vfilters.apply_filter.click();
        protractor_1.browser.sleep(8000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check tasks count after', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksAfterCount1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        tasksAfterCount = (yield protractor_1.element(protractor_1.by.xpath(tasksAfterCount1)).getText()).replace("(", "").replace(")", "").trim();
        console.log('tasksAfterCount...>', tasksAfterCount);
        if (tasksBeforeCount == tasksAfterCount) {
            console.log(pm.getParamV("COLUMN_NAME") + 'values doesnt change after applying filters');
            console.log('tasksBeforeCount1' + tasksBeforeCount);
            console.log('tasksAfterCount1' + tasksAfterCount);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        expect(tasksAfterCount, 'tasksAfterCount').not.equal(tasksBeforeCount);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check case notes count before', function () {
    return __awaiter(this, void 0, void 0, function* () {
        caseNotesBeforeCount = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('caseNotesBeforeCount...>', caseNotesBeforeCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check case notes count after', function () {
    return __awaiter(this, void 0, void 0, function* () {
        caseNotesAfterCount = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('caseNotesAfterCount...>', caseNotesAfterCount);
        if (caseNotesBeforeCount == caseNotesAfterCount) {
            console.log("Case Notes values doesn't change after applying filters");
            console.log('caseNotesBeforeCount' + caseNotesBeforeCount);
            console.log('caseNotesAfterCount' + caseNotesAfterCount);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        expect(caseNotesAfterCount, 'caseNotesAfterCount').not.equal(caseNotesBeforeCount);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check consults count before', function () {
    return __awaiter(this, void 0, void 0, function* () {
        consultsBeforeCount = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('consultsBeforeCount...>', consultsBeforeCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check consults count after', function () {
    return __awaiter(this, void 0, void 0, function* () {
        consultsAfterCount = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('consultsAfterCount...>', consultsAfterCount);
        if (consultsBeforeCount == consultsAfterCount) {
            console.log("consults values doesn't change after applying filters");
            console.log('consultsBeforeCount' + consultsBeforeCount);
            console.log('consultsAfterCount' + consultsAfterCount);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        expect(consultsAfterCount, 'consultsAfterCount').not.equal(consultsBeforeCount);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To Count1', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksAfterCount1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        Count_1 = (yield protractor_1.element(protractor_1.by.xpath(tasksAfterCount1)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Count_1...>', Count_1);
        if (tasksBeforeCount == Count_1) {
            console.log(pm.getParamV("COLUMN_NAME") + 'values doesnt change after applying filters');
            console.log('tasksBeforeCount1' + tasksBeforeCount);
            console.log('tasksAfterCount1' + Count_1);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        //expect(tasksAfterCount,'tasksAfterCount').not.equal(tasksBeforeCount);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Edit Filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //console.log('coutnt outside function....>' + Count_1);
        yield vfilters.edit_filter.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Case Extender', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.task_assignto.sendKeys(pm.getParamV("CARE_EXTENDER"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")))).click();
        //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To Count2', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksAfterCount2 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        Count_2 = (yield protractor_1.element(protractor_1.by.xpath(tasksAfterCount2)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Count_2...>', Count_2);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        //expect(tasksAfterCount,'tasksAfterCount').not.equal(tasksBeforeCount);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count_1>Count2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_1...>', Count_1);
        console.log('Verify Count_2...>', Count_2);
        chai_1.assert.operator(+Count_1, '>', +Count_2, 'Count_1 is not greaterThan Count_2');
        console.log('Verify Count_1 after assert...>', Count_1);
        console.log('Verify Count_2 after assert...>', Count_2);
        // expect(Count_1).greaterThan[Symbol](Count_2);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Task Type', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.task_tasktype.sendKeys(pm.getParamV("TASK_TYPE"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.task_tasktype_dropdown.replace("$replaceToken$", pm.getParamV("TASK_TYPE")))).click();
        //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To Count3', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksAfterCount3 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        Count_3 = (yield protractor_1.element(protractor_1.by.xpath(tasksAfterCount3)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Count_3...>', Count_3);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count_1>Count3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_1...>', Count_1);
        console.log('Verify Count_3...>', Count_3);
        chai_1.assert.operator(+Count_1, '>', +Count_3, 'Count_1 is not greaterThan Count_3');
        console.log('Verify Count_1 after assert...>', Count_1);
        console.log('Verify Count_3 after assert...>', Count_3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count2 >=Count3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_2...>', Count_2);
        console.log('Verify Count_3...>', Count_3);
        chai_1.assert.operator(+Count_1, '>=', +Count_3, 'Count_1 is not greaterThan Count_3');
        console.log('Verify Count_2 after assert...>', Count_2);
        console.log('Verify Count_3 after assert...>', Count_3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Task Status', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.task_taskstatus.sendKeys(pm.getParamV("TASK_STATUS"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.task_taskstatus_dropdown.replace("$replaceToken$", pm.getParamV("TASK_STATUS")))).click();
        //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To Count4', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksAfterCount4 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        Count_4 = (yield protractor_1.element(protractor_1.by.xpath(tasksAfterCount4)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Count_4...>', Count_4);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count_1>Count4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_1...>', Count_1);
        console.log('Verify Count_4...>', Count_4);
        chai_1.assert.operator(+Count_1, '>', +Count_4, 'Count_1 is not greaterThan Count_4');
        console.log('Verify Count_1 after assert...>', Count_1);
        console.log('Verify Count_4 after assert...>', Count_4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count2>Count4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_2...>', Count_2);
        console.log('Verify Count_4...>', Count_4);
        chai_1.assert.operator(+Count_2, '>', +Count_4, 'Count_2 is not greaterThan Count_4');
        console.log('Verify Count_2 after assert...>', Count_2);
        console.log('Verify Count_4 after assert...>', Count_4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Veify Count3>Count4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_3...>', Count_3);
        console.log('Verify Count_4...>', Count_4);
        chai_1.assert.operator(+Count_3, '>=', +Count_4, 'Count_3 is not greaterThan Count_4');
        console.log('Verify Count_1 after assert...>', Count_1);
        console.log('Verify Count_2 after assert...>', Count_2);
        console.log('Verify Count_3 after assert...>', Count_3);
        console.log('Verify Count_4 after assert...>', Count_4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To Count5', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var tasksAfterCount5 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        Count_5 = (yield protractor_1.element(protractor_1.by.xpath(tasksAfterCount5)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Count_5...>', Count_5);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count_1>Count5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_1...>', Count_1);
        console.log('Verify Count_5...>', Count_5);
        chai_1.assert.operator(+Count_1, '>', +Count_5, 'Count_1 is not greaterThan Count_5');
        console.log('Verify Count_1 after assert...>', Count_1);
        console.log('Verify Count_5 after assert...>', Count_5);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count2>Count5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_2...>', Count_2);
        console.log('Verify Count_5...>', Count_5);
        chai_1.assert.operator(+Count_2, '>', +Count_5, 'Count_2 is not greaterThan Count_5');
        console.log('Verify Count_2 after assert...>', Count_2);
        console.log('Verify Count_5 after assert...>', Count_5);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Veify Count3>=Count5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_3...>', Count_3);
        console.log('Verify Count_5...>', Count_5);
        chai_1.assert.operator(+Count_3, '>=', +Count_5, 'Count_3 is not greaterThan Count_5');
        console.log('Verify Count_3 after assert...>', Count_3);
        console.log('Verify Count_5 after assert...>', Count_5);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Count5>=Count4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify Count_5...>', Count_5);
        console.log('Verify Count_4...>', Count_4);
        chai_1.assert.operator(+Count_5, '>=', +Count_4, 'Count_5 is not greaterThan Count_4');
        console.log('Verify Count_5 after assert...>', Count_5);
        console.log('Verify Count_4 after assert...>', Count_4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check Member count before', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //   var header:string="//span[contains(@class,'number-badge ng-star-inserted')]";
        //   var value= await element(by.xpath(header)).getText();
        //   var MemberCountBefore=value.replace( /\D+/g, '');
        // //     var Number1=value.match(/\d/).toString();
        // //    let Num = parseInt(value,1,);
        //   console.log('Members Count...>',MemberCountBefore);
        // var MemberCountBefore1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
        MemberCountBefore = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCountBefore...>', MemberCountBefore);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount1', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount1 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount1...>', MemberCount1);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check Member count After', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCountAfter = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCountAfter...>', MemberCountAfter);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount2 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount2...>', MemberCount2);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount1>MemberCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount1...>', MemberCount1);
        console.log('Verify MemberCount2...>', MemberCount2);
        chai_1.assert.operator(+MemberCount1, '>', +MemberCount2, 'MemberCount1 is not greaterThan MemberCount2');
        console.log('Verify MemberCount1 after assert...>', MemberCount1);
        console.log('Verify MemberCount2  after assert...>', MemberCount2);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select child practice', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.task_assignto.sendKeys(pm.getParamV("CHILD_PRACTICE"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CHILD_PRACTICE")))).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select child practice1', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.task_assignto.sendKeys(pm.getParamV("CHILD_PRACTICE"));
        protractor_1.browser.sleep(2000);
        //await element(by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CHILD_PRACTICE")))).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(6000);
        MemberCount3 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount3...>', MemberCount3);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount1>MemberCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount1...>', MemberCount1);
        console.log('Verify MemberCount3...>', MemberCount3);
        chai_1.assert.operator(+MemberCount1, '>', +MemberCount3, 'MemberCount1 is not greaterThan MemberCount3');
        console.log('Verify MemberCount1 after assert...>', MemberCount1);
        console.log('Verify MemberCount3  after assert...>', MemberCount3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount2>=MemberCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount2...>', MemberCount2);
        console.log('Verify MemberCount3...>', MemberCount3);
        chai_1.assert.operator(+MemberCount2, '>=', +MemberCount3, 'MemberCount2 is not greaterThan MemberCount3');
        console.log('Verify MemberCount2 after assert...>', MemberCount2);
        console.log('Verify MemberCount3  after assert...>', MemberCount3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount4 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount4...>', MemberCount4);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount3=MemberCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount3...>', MemberCount3);
        console.log('Verify MemberCount4...>', MemberCount4);
        chai_1.assert.operator(+MemberCount3, '==', +MemberCount4, 'MemberCount3 is not equal to MemberCount4');
        console.log('Verify MemberCount3  after assert...>', MemberCount3);
        console.log('Verify MemberCount4 after assert...>', MemberCount4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount5 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount5...>', MemberCount5);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount5<=MemberCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount5...>', MemberCount5);
        console.log('Verify MemberCount4...>', MemberCount4);
        chai_1.assert.operator(+MemberCount5, '<=', +MemberCount4, 'MemberCount5 is not leassthan or equal to MemberCount4');
        console.log('Verify MemberCount5  after assert...>', MemberCount5);
        console.log('Verify MemberCount4 after assert...>', MemberCount4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount6', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount6 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount6...>', MemberCount6);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount6<=MemberCount5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount6...>', MemberCount6);
        console.log('Verify MemberCount5...>', MemberCount5);
        chai_1.assert.operator(+MemberCount6, '<=', +MemberCount5, 'MemberCount6 is not leassthan or equal to MemberCount5');
        console.log('Verify MemberCount6  after assert...>', MemberCount6);
        console.log('Verify MemberCount5 after assert...>', MemberCount5);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount7', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount7 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount6...>', MemberCount7);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount7<=MemberCount6', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount7...>', MemberCount7);
        console.log('Verify MemberCount6...>', MemberCount6);
        chai_1.assert.operator(+MemberCount7, '<=', +MemberCount6, 'MemberCount7 is not leassthan or equal to MemberCount6');
        console.log('Verify MemberCount7  after assert...>', MemberCount7);
        console.log('Verify MemberCount6 after assert...>', MemberCount6);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select role Care Extender', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.role_careextender.sendKeys(pm.getParamV("CARE_EXTENDER"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.role_careextender_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")))).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount8', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount8 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount8...>', MemberCount8);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount8<=MemberCount7', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount8...>', MemberCount8);
        console.log('Verify MemberCount7...>', MemberCount7);
        chai_1.assert.operator(+MemberCount8, '<=', +MemberCount7, 'MemberCount8 is not leassthan or equal to MemberCount7');
        console.log('Verify MemberCount8  after assert...>', MemberCount8);
        console.log('Verify MemberCount7 after assert...>', MemberCount7);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount9', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount9 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount9...>', MemberCount9);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount9<=MemberCount8', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount9...>', MemberCount9);
        console.log('Verify MemberCount8...>', MemberCount8);
        chai_1.assert.operator(+MemberCount9, '<=', +MemberCount8, 'MemberCount9 is not leassthan or equal to MemberCount8');
        console.log('Verify MemberCount9  after assert...>', MemberCount9);
        console.log('Verify MemberCount8 after assert...>', MemberCount8);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select checkbox in Member Criteria Filter', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.mc_chkbox.replace("$replaceToken$", pm.getParamV("MEMBER_CRITERIA")))).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount10', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount10 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount10...>', MemberCount10);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount10<=MemberCount9', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount10...>', MemberCount10);
        console.log('Verify MemberCount9...>', MemberCount9);
        chai_1.assert.operator(+MemberCount10, '<=', +MemberCount8, 'MemberCount10 is not leassthan or equal to MemberCount9');
        console.log('Verify MemberCount10  after assert...>', MemberCount10);
        console.log('Verify MemberCount9 after assert...>', MemberCount9);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount11', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount11 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount11...>', MemberCount11);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount11<=MemberCount10', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount11...>', MemberCount11);
        console.log('Verify MemberCount10...>', MemberCount10);
        chai_1.assert.operator(+MemberCount11, '<=', +MemberCount10, 'MemberCount11 is not leassthan or equal to MemberCount10');
        console.log('Verify MemberCount11  after assert...>', MemberCount11);
        console.log('Verify MemberCount10 after assert...>', MemberCount10);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount12', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount12 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount12...>', MemberCount12);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount12<=MemberCount11', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount12...>', MemberCount12);
        console.log('Verify MemberCount11...>', MemberCount11);
        chai_1.assert.operator(+MemberCount12, '<=', +MemberCount11, 'MemberCount12 is not leassthan or equal to MemberCount11');
        console.log('Verify MemberCount12  after assert...>', MemberCount12);
        console.log('Verify MemberCount11 after assert...>', MemberCount11);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount13', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount13 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount13...>', MemberCount13);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount13<=MemberCount12', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount13...>', MemberCount13);
        console.log('Verify MemberCount12...>', MemberCount12);
        chai_1.assert.operator(+MemberCount13, '<=', +MemberCount12, 'MemberCount13 is not leassthan or equal to MemberCount12');
        console.log('Verify MemberCount13  after assert...>', MemberCount13);
        console.log('Verify MemberCount12 after assert...>', MemberCount12);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount14', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount14 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount14...>', MemberCount14);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount14<=MemberCount13', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount14...>', MemberCount14);
        console.log('Verify MemberCount13...>', MemberCount13);
        chai_1.assert.operator(+MemberCount14, '<=', +MemberCount13, 'MemberCount14 is not leassthan or equal to MemberCount13');
        console.log('Verify MemberCount14  after assert...>', MemberCount14);
        console.log('Verify MemberCount13 after assert...>', MemberCount13);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount14<=MemberCount12', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount14...>', MemberCount14);
        console.log('Verify MemberCount12...>', MemberCount12);
        chai_1.assert.operator(+MemberCount14, '<=', +MemberCount12, 'MemberCount14 is not leassthan or equal to MemberCount12');
        console.log('Verify MemberCount14  after assert...>', MemberCount14);
        console.log('Verify MemberCount12 after assert...>', MemberCount12);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To MemberCount15', function () {
    return __awaiter(this, void 0, void 0, function* () {
        MemberCount15 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('MemberCount15...>', MemberCount15);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts MemberCount15<=MemberCount14', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify MemberCount15...>', MemberCount15);
        console.log('Verify MemberCount14...>', MemberCount14);
        chai_1.assert.operator(+MemberCount15, '<=', +MemberCount14, 'MemberCount15 is not leassthan or equal to MemberCount14');
        console.log('Verify MemberCount15  after assert...>', MemberCount15);
        console.log('Verify MemberCount14 after assert...>', MemberCount14);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('input the From and To Values in the Out Reach Score Filter', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.setInputField(vfilters.outreach_from, pm.getParamV("FROM"));
        base.setInputField(vfilters.outreach_to, pm.getParamV("TO"));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select the values in Engagement Filters', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.eng_txtbox.replace("$replaceToken$", pm.getParamV("TYPE")))).click();
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.eng_dropdown.replace("$replaceToken$", pm.getParamV("RESULT")))).click();
        //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('enter the values in count Engagement Filters', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.setInputField(vfilters.count_input, pm.getParamV("COUNT"));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CaseNotesCount1', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CaseNotesCount1 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('CaseNotesCount1...>', CaseNotesCount1);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CaseNotesCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CaseNotesCount2 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('CaseNotesCount2...>', CaseNotesCount2);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the CaseNotesCount1>CaseNotesCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify CaseNotesCount2...>', CaseNotesCount2);
        console.log('Verify CaseNotesCount1...>', CaseNotesCount1);
        chai_1.assert.operator(+CaseNotesCount1, '>', +CaseNotesCount2, 'CaseNotesCount1 is not greaterthan to CaseNotesCount2');
        console.log('Verify CaseNotesCount2  after assert...>', CaseNotesCount2);
        console.log('Verify CaseNotesCount1 after assert...>', CaseNotesCount1);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CaseNotesCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CaseNotesCount3 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('CaseNotesCount3...>', CaseNotesCount3);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the CaseNotesCount3<=CaseNotesCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify CaseNotesCount3...>', CaseNotesCount3);
        console.log('Verify CaseNotesCount2...>', CaseNotesCount2);
        chai_1.assert.operator(+CaseNotesCount3, '<=', +CaseNotesCount2, 'CaseNotesCount2 is not greaterthan to CaseNotesCount3');
        console.log('Verify CaseNotesCount3  after assert...>', CaseNotesCount3);
        console.log('Verify CaseNotesCount2 after assert...>', CaseNotesCount2);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CaseNotesCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CaseNotesCount4 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('CaseNotesCount4...>', CaseNotesCount4);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the CaseNotesCount4<=CaseNotesCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify CaseNotesCount4...>', CaseNotesCount4);
        console.log('Verify CaseNotesCount3...>', CaseNotesCount3);
        chai_1.assert.operator(+CaseNotesCount4, '<=', +CaseNotesCount3, 'CaseNotesCount3 is not greaterthan to CaseNotesCount4');
        console.log('Verify CaseNotesCount4  after assert...>', CaseNotesCount4);
        console.log('Verify CaseNotesCount3 after assert...>', CaseNotesCount3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Service Date', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vfilters.selectdates_input.click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Custom Range', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vfilters.customrange_btn.click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Date Range', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        yield vfilters.previous_btn_from.click();
        yield vfilters.previous_btn_from.click();
        yield vfilters.previous_btn_from.click();
        protractor_1.browser.sleep(2000);
        yield vfilters.from_date.click();
        protractor_1.browser.sleep(2000);
        yield vfilters.previous_btn_to.click();
        protractor_1.browser.sleep(2000);
        yield vfilters.to_date.click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Apply on Date menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vfilters.apply_date.click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CaseNotesCount5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CaseNotesCount5 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
        console.log('CaseNotesCount5...>', CaseNotesCount5);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the CaseNotesCount5<=CaseNotesCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify CaseNotesCount5...>', CaseNotesCount5);
        console.log('Verify CaseNotesCount4...>', CaseNotesCount4);
        chai_1.assert.operator(+CaseNotesCount5, '<=', +CaseNotesCount4, 'CaseNotesCount4 is not greaterthan to CaseNotesCount5');
        console.log('Verify CaseNotesCount5  after assert...>', CaseNotesCount5);
        console.log('Verify CaseNotesCount4 after assert...>', CaseNotesCount4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ConsultsCount1', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ConsultsCount1 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('ConsultsCount1...>', ConsultsCount1);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ConsultsCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ConsultsCount2 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('ConsultsCount2...>', ConsultsCount2);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Consults ConsultsCount2<ConsultsCount1', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ConsultsCount2...>', ConsultsCount2);
        console.log('Verify ConsultsCount1...>', ConsultsCount1);
        chai_1.assert.operator(+ConsultsCount2, '<', +ConsultsCount1, 'ConsultsCount1 is not greaterthan to ConsultsCount2');
        console.log('Verify ConsultsCount2  after assert...>', ConsultsCount2);
        console.log('Verify ConsultsCount1 after assert...>', ConsultsCount1);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ConsultsCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ConsultsCount3 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('ConsultsCount3...>', ConsultsCount3);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Consults ConsultsCount3<=ConsultsCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ConsultsCount3...>', ConsultsCount3);
        console.log('Verify ConsultsCount2...>', ConsultsCount2);
        chai_1.assert.operator(+ConsultsCount3, '<=', +ConsultsCount2, 'ConsultsCount2 is not greaterthan to ConsultsCount3');
        console.log('Verify ConsultsCount3  after assert...>', ConsultsCount3);
        console.log('Verify ConsultsCount2 after assert...>', ConsultsCount2);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ConsultsCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ConsultsCount4 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('ConsultsCount4...>', ConsultsCount4);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Consults ConsultsCount4<=ConsultsCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ConsultsCount4...>', ConsultsCount4);
        console.log('Verify ConsultsCount3...>', ConsultsCount3);
        chai_1.assert.operator(+ConsultsCount4, '<=', +ConsultsCount3, 'ConsultsCount3 is not greaterthan to ConsultsCount4');
        console.log('Verify ConsultsCount4  after assert...>', ConsultsCount4);
        console.log('Verify ConsultsCount3 after assert...>', ConsultsCount3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ConsultsCount5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ConsultsCount3 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
        console.log('ConsultsCount5...>', ConsultsCount5);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Consults ConsultsCount5<=ConsultsCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ConsultsCount5...>', ConsultsCount5);
        console.log('Verify ConsultsCount4...>', ConsultsCount4);
        chai_1.assert.operator(+ConsultsCount5, '<=', +ConsultsCount4, 'ConsultsCount4 is not greaterthan to ConsultsCount5');
        console.log('Verify ConsultsCount5  after assert...>', ConsultsCount5);
        console.log('Verify ConsultsCount4 after assert...>', ConsultsCount4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Reports', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.cm_reports_txt.replace("$replaceToken$", pm.getParamV("REPORT")))).click();
        protractor_1.browser.sleep(5000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Members in March-2020', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.cm_member_title.replace("$replaceToken$", pm.getParamV("TITLE")))).click();
        protractor_1.browser.sleep(5000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Check Member Count Before in Reports page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        Report_MemberCount_Before = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('Report_MemberCount_Before...>', Report_MemberCount_Before);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check Reports Member count After', function () {
    return __awaiter(this, void 0, void 0, function* () {
        Report_MemberCount_After = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('Report_MemberCount_After...>', Report_MemberCount_After);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount1', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount1 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount1...>', ReportMemberCount1);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount2 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount2...>', ReportMemberCount2);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount1>=ReportMemberCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount1...>', ReportMemberCount1);
        console.log('Verify ReportMemberCount2...>', ReportMemberCount2);
        chai_1.assert.operator(+ReportMemberCount1, '>=', +ReportMemberCount2, 'ReportMemberCount1 is not greaterthan to ReportMemberCount2');
        console.log('Verify ReportMemberCount1  after assert...>', ReportMemberCount1);
        console.log('Verify ReportMemberCount2 after assert...>', ReportMemberCount2);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount3 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount3...>', ReportMemberCount3);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount2>=ReportMemberCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount2...>', ReportMemberCount2);
        console.log('Verify ReportMemberCount3...>', ReportMemberCount3);
        chai_1.assert.operator(+ReportMemberCount2, '>=', +ReportMemberCount3, 'ReportMemberCount2 is not greaterthan to ReportMemberCount3');
        console.log('Verify ReportMemberCount2  after assert...>', ReportMemberCount2);
        console.log('Verify ReportMemberCount3 after assert...>', ReportMemberCount3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Check box in Time Spent for Filter members', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.timespent_selection_chbk.replace("$selection$", pm.getParamV("SELECTION")).replace("$label$", pm.getParamV("LABEL")).replace("$checkBox$", pm.getParamV("CHECKBOX_NAME")))).click();
        protractor_1.browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Type value in the Text Box', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.filtermember_txtbox.replace("$replaceToken$", pm.getParamV("SELECTION")))).click();
        yield protractor_1.element(protractor_1.by.xpath(vfilters.filtermember_txtbox.replace("$replaceToken$", pm.getParamV("SELECTION")))).sendKeys(pm.getParamV("TEXTBOX"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount4 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount4...>', ReportMemberCount4);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount3>=ReportMemberCount4', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount3...>', ReportMemberCount3);
        console.log('Verify ReportMemberCount4...>', ReportMemberCount4);
        chai_1.assert.operator(+ReportMemberCount3, '>=', +ReportMemberCount4, 'ReportMemberCount3 is not greaterthan to ReportMemberCount4');
        console.log('Verify ReportMemberCount3  after assert...>', ReportMemberCount3);
        console.log('Verify ReportMemberCount4 after assert...>', ReportMemberCount4);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount5 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount5...>', ReportMemberCount5);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount4>=ReportMemberCount5', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount4...>', ReportMemberCount4);
        console.log('Verify ReportMemberCount5...>', ReportMemberCount5);
        chai_1.assert.operator(+ReportMemberCount4, '>=', +ReportMemberCount5, 'ReportMemberCount4 is not greaterthan to ReportMemberCount5');
        console.log('Verify ReportMemberCount4  after assert...>', ReportMemberCount4);
        console.log('Verify ReportMemberCount5 after assert...>', ReportMemberCount5);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select Check box in Other Billing Criteria', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.excludemaxtime_chkbox.replace("$label$", pm.getParamV("LABEL")))).click();
        protractor_1.browser.sleep(2000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount6', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount6 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount6...>', ReportMemberCount6);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount5>=ReportMemberCount6', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount5...>', ReportMemberCount5);
        console.log('Verify ReportMemberCount6...>', ReportMemberCount6);
        chai_1.assert.operator(+ReportMemberCount5, '>=', +ReportMemberCount5, 'ReportMemberCount5 is not greaterthan to ReportMemberCount5');
        console.log('Verify ReportMemberCount5  after assert...>', ReportMemberCount5);
        console.log('Verify ReportMemberCount6 after assert...>', ReportMemberCount6);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
// Then('Select Yes in Assessment Completed', function (dataTable) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });
cucumber_1.Then('Store the Count value To ReportMemberCount7', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount7 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount7...>', ReportMemberCount7);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount6>=ReportMemberCount7', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount6...>', ReportMemberCount6);
        console.log('Verify ReportMemberCount7...>', ReportMemberCount7);
        chai_1.assert.operator(+ReportMemberCount6, '>=', +ReportMemberCount7, 'ReportMemberCount6 is not greaterthan to ReportMemberCount7');
        console.log('Verify ReportMemberCount6  after assert...>', ReportMemberCount6);
        console.log('Verify ReportMemberCount7 after assert...>', ReportMemberCount7);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To ReportMemberCount8', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ReportMemberCount8 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
        console.log('ReportMemberCount8...>', ReportMemberCount8);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts ReportMemberCount7>=ReportMemberCount8', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify ReportMemberCount7...>', ReportMemberCount7);
        console.log('Verify ReportMemberCount8...>', ReportMemberCount8);
        chai_1.assert.operator(+ReportMemberCount7, '>=', +ReportMemberCount8, 'ReportMemberCount7 is not greaterthan to ReportMemberCount8');
        console.log('Verify ReportMemberCount7  after assert...>', ReportMemberCount7);
        console.log('Verify ReportMemberCount8 after assert...>', ReportMemberCount8);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Select value in Assessment Completed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield vfilters.select_status_input.click();
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("SELECT_STATUS")))).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check CCP Order Status Reports count before', function () {
    return __awaiter(this, void 0, void 0, function* () {
        Report_CCPCount_Before = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Report_CCPCount_Before...>', Report_CCPCount_Before);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CCPReportCount1', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CCPReportCount1 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('CCPReportCount1...>', CCPReportCount1);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('check CCP Order Status count After', function () {
    return __awaiter(this, void 0, void 0, function* () {
        Report_CCPCount_After = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Report_CCPCount_After...>', Report_CCPCount_After);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CCPReportCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CCPReportCount2 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('CCPReportCount2...>', CCPReportCount2);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts CCPReportCount1>CCPReportCount2', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify CCPReportCount1...>', CCPReportCount1);
        console.log('Verify CCPReportCount2...>', CCPReportCount2);
        chai_1.assert.operator(+CCPReportCount1, '>', +CCPReportCount2, 'CCPReportCount1 is not greaterthan to CCPReportCount2');
        console.log('Verify CCPReportCount1  after assert...>', CCPReportCount1);
        console.log('Verify CCPReportCount2 after assert...>', CCPReportCount2);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Store the Count value To CCPReportCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        CCPReportCount3 = (yield protractor_1.element(protractor_1.by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
        console.log('CCPReportCount3...>', CCPReportCount3);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Counts CCPReportCount1>CCPReportCount3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Verify CCPReportCount1...>', CCPReportCount1);
        console.log('Verify CCPReportCount3...>', CCPReportCount3);
        chai_1.assert.operator(+CCPReportCount1, '>', +CCPReportCount3, 'CCPReportCount1 is not greaterthan to CCPReportCount3');
        console.log('Verify CCPReportCount1  after assert...>', CCPReportCount1);
        console.log('Verify CCPReportCount3 after assert...>', CCPReportCount3);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on member View', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(vfilters.ml_view_button.replace("$replaceToken$", pm.getParamV("VIEW_ICON")))).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5RmlsdGVyc1Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL3ZlcmlmeUZpbHRlcnNUZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBa0Q7QUFDbEQsdUNBQW9DO0FBQ3BDLDREQUF5RDtBQUN6RCxnRUFBNkQ7QUFDN0QseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCw2Q0FBb0M7QUFDcEMsOERBQTJEO0FBQzNELElBQUksS0FBSyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLGdCQUFnQixHQUFDLEVBQUUsQ0FBQztBQUN4QixJQUFJLGVBQWUsR0FBQyxFQUFFLENBQUM7QUFDdkIsSUFBSSxvQkFBb0IsR0FBQyxFQUFFLENBQUM7QUFDNUIsSUFBSSxtQkFBbUIsR0FBQyxFQUFFLENBQUM7QUFDM0IsSUFBSSxtQkFBbUIsR0FBQyxFQUFFLENBQUM7QUFDM0IsSUFBSSxrQkFBa0IsR0FBQyxFQUFFLENBQUM7QUFDMUIsSUFBSSxPQUFPLEdBQUMsRUFBRSxFQUFDLE9BQU8sR0FBQyxFQUFFLEVBQUMsT0FBTyxHQUFDLEVBQUUsRUFBQyxPQUFPLEdBQUMsRUFBRSxFQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7QUFDM0QsSUFBSSxp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