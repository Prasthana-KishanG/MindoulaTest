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
const CaseManagerUI_1 = require("../pageObjects/CaseManagerUI");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
const E2EMember_1 = require("../pageObjects/E2EMember");
let E2EMem = new E2EMember_1.E2EMember();
let consults = new membersConsults_1.membersConsults();
let tags = new membersTags_1.membersTags();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let casenotes = new membersCaseNotes_1.membersCaseNotes();
let pm = new ParamManager_1.ParamManager();
let caseMui = new CaseManagerUI_1.CaseManagerUI();
const moment = require("moment");
var m_tasks_Coulumn1Count = "";
var m_tasks_Coulumn2Count = "";
var m_tasks_Coulumn3Count = "";
cucumber_1.Then('Verify Tasks Button  and Tasks Text in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.m_task_text.getText(), "Text of Tasks ").to.equal(pm.getParamH("Text"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Tasks in the Left Navigation', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.m_task_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('veify the tasks page open in the left navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.m_task_header_text.getText(), "Heading of Tasks page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Text Tasks in the Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.m_task_header_text.getText(), "Heading of Tasks page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Columns and get the counts', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Column1', yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.m_tasklane_title.replace("$replaceToken$", pm.getParamH("Coloumn1")))).getText()).substring(0, 14), pm.getParamH("Coloumn1"));
        base.compareValues('Column2', yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.m_tasklane_title.replace("$replaceToken$", pm.getParamH("Coloumn2")))).getText()).substring(0, 15), pm.getParamH("Coloumn2"));
        base.compareValues('Column3', yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.m_tasklane_title.replace("$replaceToken$", pm.getParamH("Coloumn3")))).getText()).substring(0, 7), pm.getParamH("Coloumn3"));
        var Coulumn1Count = caseMui.task_lane_count.replace("$replaceToken$", pm.getParamH("Coloumn1"));
        m_tasks_Coulumn1Count = (yield protractor_1.element(protractor_1.by.xpath(Coulumn1Count)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Coloumn1_Count...>', m_tasks_Coulumn1Count);
        var Coulumn2Count = caseMui.task_lane_count.replace("$replaceToken$", pm.getParamH("Coloumn2"));
        m_tasks_Coulumn2Count = (yield protractor_1.element(protractor_1.by.xpath(Coulumn2Count)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Coloumn2_Count...>', m_tasks_Coulumn2Count);
        var Coulumn3Count = caseMui.task_lane_count.replace("$replaceToken$", pm.getParamH("Coloumn3"));
        m_tasks_Coulumn3Count = (yield protractor_1.element(protractor_1.by.xpath(Coulumn3Count)).getText()).replace("(", "").replace(")", "").trim();
        console.log('Coloumn3_Count...>', m_tasks_Coulumn3Count);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Slected listview None AddFilter button in the Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues("FILTER_LABEL", yield caseMui.m_filter_label.getText(), pm.getParamH("FILTER_LABEL"));
        base.compareValues("NONE_BUTTON", yield caseMui.m_none_btn.getText(), pm.getParamH("NONE_BUTTON"));
        base.compareValues("ADD_FILTER_BUTTON", yield caseMui.m_addfilter_btn.getText(), pm.getParamH("ADD_FILTER_BUTTON"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Veify Members Icon and Members Text in the Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.m_members_text.getText(), "Text of Members ").to.equal(pm.getParamH("Text"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Members Text and Get the Members Count', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Text', yield caseMui.m_members_title.getText(), pm.getParamH("Text"));
        var header = "//span[contains(@class,'number-badge ng-star-inserted')]";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var MembersCount = value.replace(/\D+/g, '');
        //     var Number1=value.match(/\d/).toString();
        //    let Num = parseInt(value,1,);
        console.log('Members Count...>', MembersCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//   Then('Take Screen Shot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
cucumber_1.Then('Type 9849275538 in the Member Search Text Box', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield caseMui.ml_search.sendKeys(pm.getParamH("SEARCH"));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Veify the Member List Retrieved with the Mobile number 9849275538', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Member MOBILE_NUMBER', yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_select_member_num.replace("$membname$", pm.getParamH("MEMBER_NAME")).replace("$membnumber$", pm.getParamH("MOBILE_NUMBER")))).getText(), pm.getParamH("MOBILE_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Type 9849275537 in the Member Search Text Box', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield caseMui.ml_search.sendKeys(pm.getParamH("SEARCH"));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(8000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Veify the Member List Retrieved with the Mobile number 9849275537', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Member MOBILE_NUMBER', yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_select_member_num.replace("$membname$", pm.getParamH("MEMBER_NAME")).replace("$membnumber$", pm.getParamH("MOBILE_NUMBER")))).getText(), pm.getParamH("MOBILE_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Pick the Top Member Recieved', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_select_member.replace("$replaceToken$", pm.getParamH("MEMBER_NAME"))));
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Name and Mobile number', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Member Name', yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_select_member.replace("$replaceToken$", pm.getParamH("MEMBER_NAME")))).getText(), pm.getParamH("MEMBER_NAME"));
        base.compareValues('Member MOBILE_NUMBER', yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_select_member_num.replace("$membname$", pm.getParamH("MEMBER_NAME")).replace("$membnumber$", pm.getParamH("MOBILE_NUMBER")))).getText(), pm.getParamH("MOBILE_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then("user clicks on Members in left side navigation", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.menuItemXpath.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var LISTVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LISTVIEW_ICON")))).getAttribute("mattooltip");
        console.log('LISTVIEW_ICON...>', LISTVIEW_ICON);
        var LISTVIEW_ICON_EXIST = "NO";
        if (LISTVIEW_ICON == pm.getParamV("LISTVIEW_ICON")) {
            LISTVIEW_ICON_EXIST = "YES";
        }
        var LANESTATUSVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LANESTATUSVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('LANESTATUSVIEW_ICON...>', LANESTATUSVIEW_ICON);
        var LANESTATUSVIEW_ICON_EXIST = "NO";
        if (LANESTATUSVIEW_ICON == pm.getParamV("LANESTATUSVIEW_ICON")) {
            LANESTATUSVIEW_ICON_EXIST = "YES";
        }
        var OUTREACHVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("OUTREACHVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('OUTREACHVIEW_ICON...>', OUTREACHVIEW_ICON);
        var OUTREACHVIEW_ICON_EXIST = "NO";
        if (OUTREACHVIEW_ICON == pm.getParamV("OUTREACHVIEW_ICON")) {
            OUTREACHVIEW_ICON_EXIST = "YES";
        }
        var REGISTRYVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("REGISTRYVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('REGISTRYVIEW_ICON...>', REGISTRYVIEW_ICON);
        var REGISTRYVIEW_ICON_EXIST = "NO";
        if (REGISTRYVIEW_ICON == pm.getParamV("REGISTRYVIEW_ICON")) {
            REGISTRYVIEW_ICON_EXIST = "YES";
        }
        var MAPVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("MAPVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('MAPVIEW_ICON...>', MAPVIEW_ICON);
        var MAPVIEW_ICON_EXIST = "NO";
        if (MAPVIEW_ICON == pm.getParamV("MAPVIEW_ICON")) {
            MAPVIEW_ICON_EXIST = "YES";
        }
        var ADDMEMBER_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_add_memb_button.replace("$replaceToken$", pm.getParamV("ADDMEMBER_ICON")))).getText();
        console.log('ADDMEMBER_ICON...>', ADDMEMBER_ICON);
        var ADDMEMBER_ICON_EXIST = "NO";
        if (ADDMEMBER_ICON == pm.getParamV("ADDMEMBER_ICON")) {
            ADDMEMBER_ICON_EXIST = "YES";
        }
        base.compareValues('LISTVIEW_ICON', LISTVIEW_ICON_EXIST, pm.getParamV("LISTVIEW_ICON_EXIST"));
        base.compareValues('LANESTATUSVIEW_ICON', LANESTATUSVIEW_ICON_EXIST, pm.getParamV("LANESTATUSVIEW_ICON_EXIST"));
        base.compareValues('OUTREACHVIEW_ICON', OUTREACHVIEW_ICON_EXIST, pm.getParamV("OUTREACHVIEW_ICON_EXIST"));
        base.compareValues('REGISTRYVIEW_ICON', REGISTRYVIEW_ICON_EXIST, pm.getParamV("REGISTRYVIEW_ICON_EXIST"));
        base.compareValues('MAPVIEW_ICON', MAPVIEW_ICON_EXIST, pm.getParamV("MAPVIEW_ICON_EXIST"));
        base.compareValues('ADDMEMBER_ICON', ADDMEMBER_ICON_EXIST, pm.getParamV("ADDMEMBER_ICON_EXIST"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists1', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var LISTVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LISTVIEW_ICON")))).getAttribute("mattooltip");
        console.log('LISTVIEW_ICON...>', LISTVIEW_ICON);
        var LISTVIEW_ICON_EXIST = "NO";
        if (LISTVIEW_ICON == pm.getParamV("LISTVIEW_ICON")) {
            LISTVIEW_ICON_EXIST = "YES";
        }
        var LANESTATUSVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LANESTATUSVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('LANESTATUSVIEW_ICON...>', LANESTATUSVIEW_ICON);
        var LANESTATUSVIEW_ICON_EXIST = "NO";
        if (LANESTATUSVIEW_ICON == pm.getParamV("LANESTATUSVIEW_ICON")) {
            LANESTATUSVIEW_ICON_EXIST = "YES";
        }
        var OUTREACHVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("OUTREACHVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('OUTREACHVIEW_ICON...>', OUTREACHVIEW_ICON);
        var OUTREACHVIEW_ICON_EXIST = "NO";
        if (OUTREACHVIEW_ICON == pm.getParamV("OUTREACHVIEW_ICON")) {
            OUTREACHVIEW_ICON_EXIST = "YES";
        }
        var REGISTRYVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("REGISTRYVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('REGISTRYVIEW_ICON...>', REGISTRYVIEW_ICON);
        var REGISTRYVIEW_ICON_EXIST = "NO";
        if (REGISTRYVIEW_ICON == pm.getParamV("REGISTRYVIEW_ICON")) {
            REGISTRYVIEW_ICON_EXIST = "YES";
        }
        var MAPVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("MAPVIEW_ICON")))).getAttribute("mattooltip");
        ;
        console.log('MAPVIEW_ICON...>', MAPVIEW_ICON);
        var MAPVIEW_ICON_EXIST = "NO";
        if (MAPVIEW_ICON == pm.getParamV("MAPVIEW_ICON")) {
            MAPVIEW_ICON_EXIST = "YES";
        }
        base.compareValues('LISTVIEW_ICON', LISTVIEW_ICON_EXIST, pm.getParamV("LISTVIEW_ICON_EXIST"));
        base.compareValues('LANESTATUSVIEW_ICON', LANESTATUSVIEW_ICON_EXIST, pm.getParamV("LANESTATUSVIEW_ICON_EXIST"));
        base.compareValues('OUTREACHVIEW_ICON', OUTREACHVIEW_ICON_EXIST, pm.getParamV("OUTREACHVIEW_ICON_EXIST"));
        base.compareValues('REGISTRYVIEW_ICON', REGISTRYVIEW_ICON_EXIST, pm.getParamV("REGISTRYVIEW_ICON_EXIST"));
        base.compareValues('MAPVIEW_ICON', MAPVIEW_ICON_EXIST, pm.getParamV("MAPVIEW_ICON_EXIST"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
// Then('verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists', async function (dataTable) {
//   	pm.dataTableH(dataTable);
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LISTVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LANESTATUSVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("OUTREACHVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("REGISTRYVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("MAPVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_add_memb_button.replace("$replaceToken$", pm.getParamH("ADDMEMBER_ICON")))).isDisplayed());
// 	const screenshot = await browser.takeScreenshot();
// 	this.attach(screenshot, "image/png");
// 	return true;
// });
cucumber_1.Then('Mousehover to List view icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_list_view))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the List View Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var LISTVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LISTVIEW_ICON")))).getAttribute("mattooltip");
        expect(LISTVIEW_ICON, "LISTVIEW_ICON").to.equal(pm.getParamH("LISTVIEW_ICON"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // var listviewtext=await element(by.xpath("//div[@class='view-buttons__btn selected']")).getAttribute("mattooltip");
        // console.log('listviewtext...>',listviewtext);
    });
});
cucumber_1.Then('Take action on View', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("VIEW")))).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Mousehover to Lane Status View icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_lanestatus_view))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Lane Status View Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var LANESTATUSVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LANESTATUSVIEW_ICON")))).getAttribute("mattooltip");
        expect(LANESTATUSVIEW_ICON, "LANESTATUSVIEW_ICON").to.equal(pm.getParamH("LANESTATUSVIEW_ICON"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Mousehover to Outreach View icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_outreach_view))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Outreach View Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var OUTREACHVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("OUTREACHVIEW_ICON")))).getAttribute("mattooltip");
        expect(OUTREACHVIEW_ICON, "OUTREACHVIEW_ICON").to.equal(pm.getParamH("OUTREACHVIEW_ICON"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//   Then('Take ScreenShot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
cucumber_1.Then('Mousehover to Registry View icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_registry_view))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Registry View Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var REGISTRYVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("REGISTRYVIEW_ICON")))).getAttribute("mattooltip");
        expect(REGISTRYVIEW_ICON, "REGISTRYVIEW_ICON").to.equal(pm.getParamH("REGISTRYVIEW_ICON"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//   Then('Click on Registry View', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
//   Then('Take ScreenShot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
cucumber_1.Then('Mousehover to Map View icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_map_view))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Map View Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var MAPVIEW_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("MAPVIEW_ICON")))).getAttribute("mattooltip");
        expect(MAPVIEW_ICON, "MAPVIEW_ICON").to.equal(pm.getParamH("MAPVIEW_ICON"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//   Then('Click on Map View', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
//   Then('Take ScreenShot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
//   Then('Click on the Members in the Left Navigation', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
cucumber_1.Then('Search Member last name in the Search bar', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        protractor_1.browser.sleep(3000);
        var membName = pm.getParamH("Name");
        //  if(membName.trim()==("")) {
        // 			 membName = mmrc.getCurrentUser();
        // 		 }
        yield E2EMem.ml_search.clear();
        yield E2EMem.ml_search.sendKeys(membName);
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(5000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Text in the Header Column1', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        // base.compareValues('Text1',await caseMui.cm_emrid_label.getText()+","+await caseMui.cm_dob_label.getText()+","+await caseMui.cm_provider_label.getText(), pm.getParamV("Text1"));
        // browser.actions().mouseMove(await caseMui.cm_emrid_label).perform();
        // base.compareValues('Text2',  (await caseMui.cm_practice_label.getText()+","+await caseMui.cm_medicaid_label.getText()), pm.getParamV("Text2"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
        expect((yield caseMui.cm_emrid_label.getText()) + "," + (yield caseMui.cm_dob_label.getText()) + "," + (yield caseMui.cm_provider_label.getText()), "Text1").to.equal(pm.getParamV("Text1"));
        protractor_1.browser.actions().mouseMove(yield caseMui.cm_emrid_label).perform();
        expect((yield caseMui.cm_practice_label.getText()) + "," + (yield caseMui.cm_medicaid_label.getText()), "Text2").to.equal(pm.getParamV("Text2"));
        // pm.dataTableV(dataTable);
        // base.compareValues('Text1',await caseMui.cm_emrid_label.getText()+ await caseMui.cm_emrid_val.getText()+","+await caseMui.cm_dob_label.getText()+await caseMui.cm_dob_val.getText()+","+await caseMui.cm_provider_label.getText()+await caseMui.cm_provider_val.getText(), pm.getParamV("Text1"));
        // browser.actions().mouseMove(await caseMui.cm_emrid_label).perform();
        // base.compareValues('Text2',  (await caseMui.cm_provider_phone_label.getText()+"-"+","+await caseMui.cm_practice_label.getText()+await caseMui.cm_practice_val.getText()+","+await caseMui.cm_medicaid_label.getText()+await caseMui.cm_medicaid_val.getText()), pm.getParamV("Text2"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
cucumber_1.Then('Verify the Text in the Header Column2', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield caseMui.cm_primary_label).perform();
        expect((yield caseMui.cm_primary_label.getText()) + "," + (yield caseMui.cm_home_label.getText()) + "," + (yield caseMui.cm_work_label.getText()), "Text1").to.equal(pm.getParamV("Text1"));
        //expect(await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText() ,"Text2" ).to.equal(pm.getParamV("Text2"));
        // base.compareValues('Text1',(await caseMui.cm_primary_label.getText()+","+await caseMui.cm_home_label.getText()+","+await caseMui.cm_work_label.getText()), pm.getParamV("Text1"));
        // base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
        // pm.dataTableV(dataTable);
        // browser.actions().mouseMove(await caseMui.cm_cont_details).perform();
        // base.compareValues('Text1',await caseMui.cm_primary_label.getText()+ await caseMui.cm_primary_ph_val.getText()+","+await caseMui.cm_home_label.getText()+await caseMui.cm_home_ph_val.getText()+","+await caseMui.cm_work_label.getText()+await caseMui.cm_work_ph_val.getText(), pm.getParamV("Text1"));
        // base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
cucumber_1.Then('Verify the Text in the Header Column2 email adderess', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield caseMui.cm_primary_label).perform();
        //expect(await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText() ,"Text2" ).to.equal(pm.getParamV("Text2"));
        // base.compareValues('Text1',(await caseMui.cm_primary_label.getText()+","+await caseMui.cm_home_label.getText()+","+await caseMui.cm_work_label.getText()), pm.getParamV("Text1"));
        base.compareValues('Text2', ((yield caseMui.cm_email_val.getText()) + "," + (yield caseMui.cm_address_val.getText())), pm.getParamV("Text2"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
        // pm.dataTableV(dataTable);
        // browser.actions().mouseMove(await caseMui.cm_cont_details).perform();
        // base.compareValues('Text1',await caseMui.cm_primary_label.getText()+ await caseMui.cm_primary_ph_val.getText()+","+await caseMui.cm_home_label.getText()+await caseMui.cm_home_ph_val.getText()+","+await caseMui.cm_work_label.getText()+await caseMui.cm_work_ph_val.getText(), pm.getParamV("Text1"));
        // base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
cucumber_1.Then('Mousehover on the Header Column3', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(caseMui.cm_header_col3).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify the Text in the Header Column3', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues('Text1', (yield caseMui.cm_bt_val.getText()) + "," + (yield caseMui.cm_bhcensus1_val.getText()) + "," + (yield caseMui.cm_bhcensus2_val.getText()) + "," + (yield caseMui.cm_bhcensus3_val.getText()), pm.getParamV("TEXT"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//   Then('Take Screen Shot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });
cucumber_1.Then('Mousehover on Edit Iocn', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(caseMui.cm_quick_edit_icon).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Edit Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        expect(yield (caseMui.cm_quick_edit_icon).getAttribute("mattooltip"), "Edit icon text").to.equal(pm.getParamV("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Mousehover on chat Iocn', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(caseMui.cm_quick_chat_icon).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the chat Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        expect(yield (caseMui.cm_quick_chat_icon).getAttribute("icon"), "Chat icon text").to.equal(pm.getParamV("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Mousehover on Add Case Note Iocn', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(caseMui.cm_quick_casenote_icon).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Add Case Note Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        expect(yield (caseMui.cm_quick_casenote_icon).getAttribute("icon"), "Add case note icon text").to.equal(pm.getParamV("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Mousehover on Add Tag Iocn', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(caseMui.cm_quick_tag_icon).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the Add Tag Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        expect(yield (caseMui.cm_quick_tag_icon).getAttribute("mattooltip"), "Add tag icon text").to.equal(pm.getParamV("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Casenotes Icon and Case Notes Text in the Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield caseMui.cm_casenotes_text.getText()).trim(), "Text of Case Notes ").to.equal(pm.getParamH("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on the Case Notes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_casenotes_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Case notes page Opened.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_casenotes_header_text)).getText()).substring(0, 10), "Heading of Case notes page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the CaseNotes Text and Get the Casenotes count', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Case Notes Text', yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.m_casenotes_title.replace("$replaceToken$", pm.getParamH("TEXT")))).getText()).substring(0, 10), pm.getParamH("TEXT"));
        var value = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_casenotes_header_text)).getText();
        var CaseNotesCount = value.replace(/\D+/g, '');
        //     var Number1=value.match(/\d/).toString();
        //    let Num = parseInt(value,1,);
        console.log('CaseNotesCount...>', CaseNotesCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Consults Icon and Consults Text in the Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.cm_consults_icon.isDisplayed(), 'Consults icon not displayed');
        expect(yield (yield caseMui.cm_consults_text.getText()).trim(), "Text of Consults ").to.equal(pm.getParamH("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on the Consults', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_consults_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Consults page Opened.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_consults_header_text)).getText()).substring(0, 8), "Heading of Consults page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Consults Text and Get the Consults count', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Consults Text', yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.m_consults_title.replace("$replaceToken$", pm.getParamH("TEXT")))).getText()).substring(0, 8), pm.getParamH("TEXT"));
        var value = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_consults_header_text)).getText();
        var ConsultsCount = value.replace(/\D+/g, '');
        //     var Number1=value.match(/\d/).toString();
        //    let Num = parseInt(value,1,);
        console.log('ConsultsCount...>', ConsultsCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Veify Assessment Button Assessment Text Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.cm_assessments_icon.isDisplayed(), 'Assessments icon not displayed');
        expect(yield (yield caseMui.cm_assessments_text.getText()).trim(), "Text of Assessments ").to.equal(pm.getParamH("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Veify Assessment Button Assessment Text not Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var ASSESSMENTS_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_assessments_icon_str.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent()) {
            ASSESSMENTS_ICON_EXIST = "YES";
        }
        base.compareValues('ASSESSMENTS_ICON', ASSESSMENTS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on the Assessments', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_assessments_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Assessments page Opened.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_assessments_header_text)).getText()), "Heading of Assessments page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Assements Text and Get the Assessments count', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.compareValues('Assessments Text', yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_assessments_header_text)).getText()), pm.getParamH("TEXT"));
        var value = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_assessments_count)).getText();
        var AssessmentsCount = value.replace(/\D+/g, '');
        //     var Number1=value.match(/\d/).toString();
        //    let Num = parseInt(value,1,);
        console.log('AssessmentsCount...>', AssessmentsCount);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Veify Report Button Report Text Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.cm_reports_icon.isDisplayed(), 'Reports icon not displayed');
        expect(yield (yield caseMui.cm_reports_text.getText()).trim(), "Text of Reports").to.equal(pm.getParamH("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Veify Report Button Report Text Not Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var REPORTS_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent()) {
            REPORTS_ICON_EXIST = "YES";
        }
        base.compareValues('REPORTS_ICON', REPORTS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
        // pm.dataTableH(dataTable);
        // expect(await caseMui.cm_reports_icon.not.isDisplayed(),'Reports icon displayed');
        // //expect( await (await caseMui.cm_reports_text.getText()).trim() ,"Text of Reports" ).to.equal(pm.getParamH("TEXT"));
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
cucumber_1.Then('Click on the Reports', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_reports_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Reports page Opened.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_reports_header_text)).getText()), "Heading of Reports page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Reports Text in the Header', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_reports_header_text)).getText()), "Heading of Reports page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Report Text and Report Images Exists in the Reports Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var IMAGE_NAME = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_reports_image.replace("$replaceToken$", pm.getParamV("REPORT")))).getAttribute("src");
        console.log(pm.getParamV("REPORT") + 'IMAGE_NAME...>', IMAGE_NAME);
        var IMAGE_NAME_EXIST = "NO";
        if (IMAGE_NAME == pm.getParamV("IMAGE_NAME")) {
            IMAGE_NAME_EXIST = "YES";
        }
        base.compareValues('IMAGE_NAME' + pm.getParamV("REPORT"), IMAGE_NAME_EXIST, pm.getParamV("REPORT_IMAGE_EXISTS"));
        base.compareValues('Report Text' + pm.getParamV("REPORT"), yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_reports_txt.replace("$replaceToken$", pm.getParamV("REPORT")))).getText(), pm.getParamV("REPORT"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Engagment request icon Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var ENG_REQ_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
        console.log('ENG_REQ_ICON...>', ENG_REQ_ICON);
        var ENG_REQ_ICON_EXIST = "NO";
        if (ENG_REQ_ICON == pm.getParamV("ICON")) {
            ENG_REQ_ICON_EXIST = "YES";
        }
        base.compareValues('ENG_REQ_ICON', ENG_REQ_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Engagment request icon not Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var ENG_REQ_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent()) {
            ENG_REQ_ICON_EXIST = "YES";
        }
        base.compareValues('ENG_REQ_ICON', ENG_REQ_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Get Text by mousehover to the icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        expect(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("TEXT")))).getAttribute("mattooltip"), "Engagement request icon text").to.equal(pm.getParamV("TEXT"));
        console.log('ENG_REQ_ICON tEXT...>', yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("TEXT")))).getAttribute("mattooltip"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify ActivityFeedIcon Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var ACTIVITY_FEED_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
        console.log('ACTIVITY_FEED_ICON...>', ACTIVITY_FEED_ICON);
        var ACTIVITY_FEED_ICON_EXIST = "NO";
        if (ACTIVITY_FEED_ICON == pm.getParamV("ICON")) {
            ACTIVITY_FEED_ICON_EXIST = "YES";
        }
        base.compareValues('ENG_REQ_ICON', ACTIVITY_FEED_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Activity Feed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamV("ICON")))).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Text in the Menu', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("TEXT1", yield caseMui.cm_activity_text.getText(), pm.getParamV("TEXT1"));
        // base.compareValues("TEXT2",await caseMui.cm_activity_notify.getText(), pm.getParamV("TEXT2"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//    Then('Click on Activity Feed', function () {
// 	 // Write code here that turns the phrase above into concrete actions
// 	 return 'pending';
//    });
cucumber_1.Then('Mousehover ActivityfeedIcon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamV("ICON"))))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text for Activityfeed icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"), "Activity feed icon text").to.equal(pm.getParamH("TEXT"));
        console.log('Activityfeed icon tEXT...>', yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Chat Icon not Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var CHAT_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent()) {
            CHAT_ICON_EXIST = "YES";
        }
        base.compareValues('CHAT_ICON', CHAT_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Chat Icon Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var CHAT_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
        console.log('CHAT_ICON...>', CHAT_ICON);
        var CHAT_ICON_EXIST = "NO";
        if (CHAT_ICON == pm.getParamV("ICON")) {
            CHAT_ICON_EXIST = "YES";
        }
        base.compareValues('CHAT_ICON', CHAT_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Chat Icon Exists in quick Actions', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var CHAT_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield caseMui.cm_quick_chat_icon.isPresent()) {
            CHAT_ICON_EXIST = "YES";
        }
        base.compareValues('CHAT_ICON', CHAT_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Mousehover on Chat Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamV("ICON"))))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from Chat icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"), "Chat icon text").to.equal(pm.getParamH("TEXT"));
        console.log('Chat icon tEXT...>', yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify The MMR Help Icon Exists', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var SUPPORT_HELP_ICON = yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
        console.log('SUPPORT_HELP_ICON...>', SUPPORT_HELP_ICON);
        var SUPPORT_HELP_ICON_EXIST = "NO";
        if (SUPPORT_HELP_ICON == pm.getParamV("ICON")) {
            SUPPORT_HELP_ICON_EXIST = "YES";
        }
        base.compareValues('SUPPORT HELP ICON', SUPPORT_HELP_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Mouse hover to the MMR Help Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamV("ICON"))))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Get Text from the help Icon', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"), "Support Help icon text").to.equal(pm.getParamH("TEXT"));
        console.log('Support Help icon tEXT...>', yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Casemanager Icon at down arrow', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_down_arrow.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Casemanager Icon up arrow', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_up_arrow.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Text in the Pop Up', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("MMR_CASEMANAGER", yield caseMui.mmr_cm_txt.getText(), pm.getParamV("MMR_CASEMANAGER"));
        // base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
        base.compareValues("SAFEMODE_TOGGLE", yield caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
        // base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
        base.compareValues("CHANGE_LOG", yield caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
        base.compareValues("LOGOUT", yield caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
        base.compareValues("VERSION_NUMBER", yield caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
        // base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Text in the engagement manager Pop Up', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("MMR_CASEMANAGER", yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_eng_txt.replace("$replaceToken$", pm.getParamV("MMR_CASEMANAGER")))).getText(), pm.getParamV("MMR_CASEMANAGER"));
        // base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
        base.compareValues("SAFEMODE_TOGGLE", yield caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
        // base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
        base.compareValues("CHANGE_LOG", yield caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
        base.compareValues("LOGOUT", yield caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
        base.compareValues("VERSION_NUMBER", yield caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
        // base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Text in the Consultant manager Pop Up', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("MMR_CONSULTANT", yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_eng_txt.replace("$replaceToken$", pm.getParamV("MMR_CONSULTANT")))).getText(), pm.getParamV("MMR_CONSULTANT"));
        // base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
        //base.compareValues("SAFEMODE_TOGGLE",await caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
        // base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
        base.compareValues("CHANGE_LOG", yield caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
        base.compareValues("LOGOUT", yield caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
        base.compareValues("VERSION_NUMBER", yield caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
        // base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Safe mode not exists in Consultant manager Pop Up', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var SAFE_MODE_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield caseMui.mmr_cm_safemodeoff_Toggle.isPresent()) {
            SAFE_MODE_EXIST = "YES";
        }
        base.compareValues('SAF_MODE_EXIST', SAFE_MODE_EXIST, pm.getParamV("SAFE_MODE_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Text in the Program manager Pop Up', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("PROGRAM_MANAGER", yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_eng_txt.replace("$replaceToken$", pm.getParamV("PROGRAM_MANAGER")))).getText(), pm.getParamV("PROGRAM_MANAGER"));
        // base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
        base.compareValues("SAFEMODE_TOGGLE", yield caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
        // base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
        base.compareValues("CHANGE_LOG", yield caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
        base.compareValues("LOGOUT", yield caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
        base.compareValues("VERSION_NUMBER", yield caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
        // base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Veify Care Extender Button Care Extender Text Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield caseMui.cm_careextender_icon.isDisplayed(), 'Care Extender icon not displayed');
        expect(yield (yield caseMui.cm_careextender_text.getText()).trim(), "Text of Care Extender ").to.equal(pm.getParamH("TEXT"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on the Care Extender', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_careextender_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Care Extender in the Care Extender List Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(caseMui.ml_first_member.replace("$replaceToken$", pm.getParamH("Name")))).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(5000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Care Extender Data Displayed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("FIRST_NAME", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("FIRST_NAME")))).getText()), pm.getParamV("FIRST_NAME"));
        base.compareValues("LAST_NAME", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("LAST_NAME")))).getText()), pm.getParamV("LAST_NAME"));
        base.compareValues("EMAIL", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("EMAIL")))).getText()), pm.getParamV("EMAIL"));
        base.compareValues("MOBILE", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("MOBILE")))).getText()), pm.getParamV("MOBILE"));
        base.compareValues("ADDRESS", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("ADDRESS")))).getText()), pm.getParamV("ADDRESS"));
        base.compareValues("ROLE1", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE1")))).getText()).replace(",", ""), pm.getParamV("ROLE1"));
        base.compareValues("ROLE2", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE2")))).getText()).replace(",", ""), pm.getParamV("ROLE2"));
        base.compareValues("ROLE3", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE3")))).getText()).replace(",", ""), pm.getParamV("ROLE3"));
        base.compareValues("ROLE4", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE4")))).getText()).replace(",", ""), pm.getParamV("ROLE4"));
        base.compareValues("ROLE5", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE5")))).getText()).replace(",", ""), pm.getParamV("ROLE5"));
        base.compareValues("ROLE6", yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE6")))).getText()).replace(",", ""), pm.getParamV("ROLE6"));
        base.compareValues("EMRS", yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("EMRS")))).getText(), pm.getParamV("EMRS"));
        base.compareValues("STATE_LICENSES", yield protractor_1.element(protractor_1.by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("STATE_LICENSES")))).getText(), pm.getParamV("STATE_LICENSES"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Veify Analytics Button Analytics Text Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var ANALYTICS_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_analytics_icon_str.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent()) {
            ANALYTICS_ICON_EXIST = "YES";
        }
        base.compareValues('ANALYTICS_ICON_EXIST', ANALYTICS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on the Analytics', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_analytics_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Analytics page Opened.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_analytics_header_text)).getText()), "Heading of Analytics page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Analytics Text in the Header', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_analytics_header_text)).getText()), "Heading of Analytics page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Veify Programs Button Programs Text Exists in Left Navigation', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var PROGRAMS_ICON_EXIST = "NO";
        pm.dataTableV(dataTable);
        if (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_programs_icon_str.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent()) {
            PROGRAMS_ICON_EXIST = "YES";
        }
        base.compareValues('PROGRAMS_ICON_EXIST', PROGRAMS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on the Programs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield caseMui.cm_programs_text.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Programs page Opened.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_programs_header_text)).getText()), "Heading of Programs page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Programs Text in the Header', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        expect(yield (yield protractor_1.element(protractor_1.by.xpath(caseMui.cm_programs_header_text)).getText()), "Heading of Programs page").to.equal(pm.getParamH("HEADER_NAME"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzZU1hbmFnZXJVSVRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL0Nhc2VNYW5hZ2VyVUlUZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWIsdUNBQWdDO0FBQ2hDLDJDQUE4RDtBQUM5RCx1Q0FBb0M7QUFDcEMsb0VBQWlFO0FBQ2pFLDREQUF5RDtBQUN6RCx5REFBc0Q7QUFDdEQsc0VBQW1FO0FBQ25FLGdFQUE2RDtBQUM3RCxnREFBd0I7QUFDeEIsdURBQW9EO0FBQ3BELHdEQUFxRDtBQUVyRCxJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3RCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQ3ZDLElBQUksRUFBRSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFJLHFCQUFxQixHQUFDLEVBQUUsQ0FBQztBQUM3QixJQUFJLHFCQUFxQixHQUFDLEVBQUUsQ0FBQztBQUM3QixJQUFJLHFCQUFxQixHQUFDLEVBQUUsQ0FBQztBQUU3QixlQUFJLENBQUMsd0RBQXdELEVBQUUsVUFBZ0IsU0FBUzs7UUFDdkYsRUFBRSxDQUFDLFVBQVUsQ0FBQyxT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