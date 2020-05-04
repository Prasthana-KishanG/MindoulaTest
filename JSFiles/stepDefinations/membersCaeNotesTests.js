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
const membersCaseNotes_1 = require("../pageObjects/membersCaseNotes");
const E2EMember_1 = require("../pageObjects/E2EMember");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
let mpage = new Memberspage_1.Memberspage();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let casenotes = new membersCaseNotes_1.membersCaseNotes();
let pm = new ParamManager_1.ParamManager();
let E2EMem = new E2EMember_1.E2EMember();
cucumber_1.Then("click on Add Case Notes", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  browser.sleep(2000);
        //  browser.actions().mouseMove(element(by.xpath("//*[@id='cn_list_view_btn']"))).perform();
        //  browser.sleep(2000);
        //  element(by.xpath("//*[@id='cn_list_view_btn']")).click();
        //  browser.sleep(3000);
        protractor_1.browser.sleep(3000);
        base.WaitforElementClickable(casenotes.m_casenotes_add);
        yield casenotes.m_casenotes_add.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(8000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("Enter Data in Case Notes Page", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        // base.setDateField(casenotes.m_casenotes_engdate, pm.getParamV("ENGAGEMENT_DATE"));
        yield base.setChips_multiSelect(casenotes.m_casenotes_timerange, pm.getParamV("TIME_RANGE"));
        yield base.setChips(casenotes.m_casenotes_eng_methods, pm.getParamV("ENGAGEMENT_METHODS"), casenotes.m_casenotes_eng_methods_input);
        //browser.sleep(6000);
        yield base.setChips(casenotes.m_casenotes_interventions, pm.getParamV("INTERVENTIONS"), casenotes.m_casenotes_interventions_input);
        yield base.setChips_multiSelect(casenotes.m_casenotes_diversion, pm.getParamV("DIVERSION"));
        yield base.setChips_multiSelect(casenotes.m_casenotes_eng_status, pm.getParamV("ENGAGEMENT_STATUS"));
        yield base.setChips_multiSelect(casenotes.m_casenotes_eng_fail_reason, pm.getParamV("FAIL_REASONS"));
        yield base.setChips_multiSelect(casenotes.m_casenotes_individuals, pm.getParamV("INDIVIDUALS"));
        yield base.setChips_multiSelect(casenotes.m_casenotes_interactions, pm.getParamV("INTERACTION"));
        yield base.setChips_multiSelect(casenotes.m_casenotes_inperson, pm.getParamV("INPERSON"));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("navigate to Actions Taken tab", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(3000);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath(casenotes.assessmentTab))).perform();
        protractor_1.browser.sleep(4000);
        yield casenotes.m_actionstaken.click();
        protractor_1.browser.getTitle().then(text => {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("Enter data in Actions taken page", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield base.setChips_multiSelect(casenotes.m_at_issues_addressed, pm.getParamH("IssuesAddressed"));
        //browser.actions().mouseMove(element(by.xpath(casenotes.m_at_caregap1))).perform();
        //base.WaitforElementClickable(element(by.xpath(casenotes.m_at_caregap)));
        //browser.sleep(3000);
        yield base.setRadioField(casenotes.m_at_referrals, pm.getParamH("Referrals"));
        yield base.setRadioField(casenotes.m_at_caregap, pm.getParamH("Care Gap"));
        protractor_1.browser.getTitle().then(text => {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
// Then("click on Add Care Gaps", async function(dataTable) {
//   await casenotes.m_cg_Add.click();
//   await browser.getTitle().then(function(text) {
//     expect(text).to.equal("mMR");
//     browser.sleep(3000);
//   });
//   const screenshot = await browser.takeScreenshot();
//   this.attach(screenshot, "image/png");
//   // findElement(jsonData(objects,"m_cg_Add")).click();
//   // addScreenshot();
// });
cucumber_1.Then('Enter Data in CareGaps', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        //base.WaitforElementPresence(E2EMem.m_cg_caregaptype);
        yield casenotes.m_cg_caregaptype.click();
        var m_cg_caregaptypedropdown = casenotes.m_cg_caregaptypedropdown_str.replace("$caregaptype$", pm.getParamH("Type"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_cg_caregaptypedropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_cg_caregaptypedropdown)).click();
        yield casenotes.m_cg_identifiedon.click();
        yield casenotes.m_cg_identifiedon.sendKeys(pm.getParamH("Identifid_On"));
        yield casenotes.m_cg_identifiedon.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield casenotes.m_cg_exp_res_date.click();
        yield casenotes.m_cg_exp_res_date.sendKeys(pm.getParamH("Expected_Resolution"));
        yield casenotes.m_cg_exp_res_date.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield casenotes.m_cg_exp_res_date.sendKeys(protractor_1.protractor.Key.TAB);
        base.setInputField(casenotes.m_cg_desc, pm.getParamH("Description"));
        //await E2EMem.m_cg_desc.sendKeys(protractor.Key.TAB);
        protractor_1.browser.sleep(2000);
        yield casenotes.m_cg_save.click();
        //await element(by.xpath("/p-toastitem/div/div")).click();
        protractor_1.browser.sleep(15000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("case_notes");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
// Then("click on Add Referral", async function(dataTable) {
//   // findElement(jsonData(objects,"m_referral_add")).click();
//   // addScreenshot();
// });
cucumber_1.Then('Enter Data in Referral', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.setDropdownField(casenotes.m_referral_type, casenotes.m_referral_ref_type_dropdown, pm.getParamH("Type"));
        if (pm.getParamH("providerInNetwork").trim() != (""))
            base.setCheckboxField(casenotes.m_referral_isProvInNetwork, pm.getParamH("providerInNetwork"));
        base.WaitforElementPresence(casenotes.m_referral_ref_type);
        if (pm.getParamH("providerType").trim() != (""))
            base.setDropdownField(casenotes.m_referral_ref_type, casenotes.m_referral_ref_type_dropdown, pm.getParamH("providerType"));
        if (pm.getParamH("specialtyType").trim() != (""))
            base.setInputField(casenotes.m_referral_specialty_type, pm.getParamH("specialtyType"));
        base.setInputField(casenotes.m_referral_name, pm.getParamH("Name"));
        base.setDateField(casenotes.m_referral_date, pm.getParamH("ReferralDate"));
        base.setInputField(casenotes.m_referral_contact, pm.getParamH("ContactInfo"));
        base.setInputField(casenotes.m_referral_direct_name, pm.getParamH("DirectName"));
        base.setInputField(casenotes.m_referral_direct_contact, pm.getParamH("DirectContactInfo"));
        base.setDateField(casenotes.m_referral_appointment_date, pm.getParamH("AppointmentDate"));
        base.setDropdownField(casenotes.m_referral_status_type, casenotes.m_referral_status_type_dropdown, pm.getParamH("status"));
        base.setCheckboxField(casenotes.m_referral_reasonableTime, pm.getParamH("reasonableTime"));
        base.setCheckboxField(casenotes.m_referral_reminder, pm.getParamH("reminder"));
        base.setCheckboxField(casenotes.m_referral_assistance, pm.getParamH("assitance"));
        yield casenotes.m_referral_save.click();
        protractor_1.browser.sleep(15000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("navigate to Next Steps tab", function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath(casenotes.assessmentTab))).perform();
        protractor_1.browser.sleep(8000);
        yield casenotes.m_nextsteps.click();
        protractor_1.browser.getTitle().then(text => {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("navigate to Engagement Details tab", function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath(casenotes.assessmentTab))).perform();
        protractor_1.browser.sleep(2000);
        yield casenotes.m_engdetails.click();
        protractor_1.browser.getTitle().then(text => {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("Enter Data in Next Steps page", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var appointment = [];
        pm.dataTableH(dataTable);
        //   for (const str of pm.getParamH("follow_up_plan").split(",")){
        //   var m_ns_follow_plan = casenotes.m_ns_follow_plan_str.replace("$replaceToken$", str);
        // 	base.WaitforElementPresence(element(by.xpath(m_ns_follow_plan)));
        //     base.moveCursorToAnElement(m_ns_follow_plan);
        //     browser.sleep(8000);
        //     await element(by.xpath(m_ns_follow_plan)).click();
        //     //browser.sleep(3000);
        //   }
        //     if(pm.getParamH("follow_appointment").trim()!==("")){
        //       browser.sleep(8000);
        //     await casenotes.m_ns_add_appointment.click();
        //     browser.sleep(8000);
        //     appointment = pm.getParamH("follow_appointment").split(",");
        //     base.setDropdownField(casenotes.m_ns_app_careextender,casenotes.m_ns_app_careextender_dropdown,appointment[0]);
        //     base.setDateField(casenotes.m_ns_app_goal_date, appointment[1]);
        //     base.setInputField(casenotes.m_ns_app_desc, appointment[2]);
        //     await casenotes.m_ns_app_save.click();
        //     await browser.getTitle().then(function(text) {
        //       expect(text).to.equal("mMR");
        //       browser.sleep(3000);
        //       }); 
        // }
        yield base.setRadioField(casenotes.m_ns_app_tasks, pm.getParamH("Tasks"));
        yield casenotes.m_ns_app_notes.sendKeys(pm.getParamH("Notes"));
        yield casenotes.m_ns_app_notes.sendKeys(protractor_1.protractor.Key.TAB);
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath(casenotes.assessmentTab))).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Tasks', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield casenotes.m_task_type.click();
        var m_task_type_dropdown = casenotes.m_task_type_dropdown_str.replace("$type$", pm.getParamH("Type"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_type_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_task_type_dropdown)).click();
        yield casenotes.m_task_careextender.click();
        var m_task_careextender_dropdown = casenotes.m_task_careextender_dropdown_str.replace("$careextender$", pm.getParamH("CareExtender"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_careextender_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_task_careextender_dropdown)).click();
        base.setInputField(casenotes.m_task_description, pm.getParamH("Description"));
        base.setDateField(casenotes.m_task_goaldate, pm.getParamH("goalDate"));
        yield casenotes.m_task_save.click();
        //base.UrlContains("tasks");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("take action on case notes", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        if (pm.getParamH("Button_to_click") == ("Publish")) {
            protractor_1.browser.sleep(4000);
            yield casenotes.m_publish_btn.click();
            protractor_1.browser.sleep(6000);
        }
        else if (pm.getParamH("Button_to_click") == ("Discard")) {
            yield casenotes.m_discard_btn.click();
            protractor_1.browser.sleep(4000);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("verify data in Notes", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        //expect(await casenotes.m_cn_nextsteps_notes.getText(),'NOTES').to.contains(pm.getParamV("NOTES"));
        //expect(await casenotes.m_cn_nextsteps_notes.getText(),'NOTES').to.contain("Notes here...");
        // base.compareValues("NOTES", await casenotes.m_cn_nextsteps_notes.getText(), pm.getParamV("NOTES"));
        //       const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then("verify data in case notes response page", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("TOTAL_TIME", yield casenotes.m_cn_resp_total_time.getText(), pm.getParamV("TOTAL_TIME"));
        base.compareValues("TIME_RANGE", yield casenotes.m_cn_resp_time_range.getText(), pm.getParamV("TIME_RANGE"));
        base.compareValues("AUTHOR", yield casenotes.m_cn_resp_author.getText(), pm.getParamV("AUTHOR"));
        const engMethodVal = yield base.getTextElements(casenotes.m_cn_resp_eng_method);
        console.log('engMethodVal -> ', engMethodVal);
        var interventionVal = yield base.getTextElementsInterventionVal(casenotes.m_cn_resp_interventions);
        console.log('interventionVal -> ', interventionVal);
        base.compareValues("ENGAGEMENT_METHODS", engMethodVal, pm.getParamV("ENGAGEMENT_METHODS"));
        base.compareValues("INTERVENTIONS", interventionVal, pm.getParamV("INTERVENTIONS"));
        base.compareValues('DIVERSION_TRACKING', yield protractor_1.element(protractor_1.by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Diversion Tracking"))).getText(), pm.getParamV("DIVERSION_TRACKING"));
        base.compareValues('ENGAGEMENT_STATUS', yield protractor_1.element(protractor_1.by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Engagement Status"))).getText(), pm.getParamV("ENGAGEMENT_STATUS"));
        base.compareValues('FAIL_REASONS', yield protractor_1.element(protractor_1.by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Fail Reasons"))).getText(), pm.getParamV("FAIL_REASONS"));
        base.compareValues('INDIVIDUALS', yield protractor_1.element(protractor_1.by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Individuals present during the engagement"))).getText(), pm.getParamV("INDIVIDUALS"));
        base.compareValues('INTERACTION', yield protractor_1.element(protractor_1.by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "How was the member during interaction?"))).getText(), pm.getParamV("INTERACTION"));
        base.compareValues('INPERSON', yield protractor_1.element(protractor_1.by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "If the person was in person"))).getText(), pm.getParamV("INPERSON"));
        var issuesAddressedVal = yield base.getTextElementsIssuesAddressedVal(casenotes.m_cn_resp_issues_addressed);
        console.log('issuesAddressedVal -> ', issuesAddressedVal);
        base.compareValues("ISSUES_ADDRESSED", issuesAddressedVal, pm.getParamV("ISSUES_ADDRESSED"));
        var followupVal = yield base.getTextElementsFollowupVal(casenotes.m_cn_resp_follow_up_plans);
        console.log('followupVal -> ', followupVal);
        // base.compareValues("FOLLOWUP_PLANS", followupVal , pm.getParamV("FOLLOWUP_PLANS"));
        base.compareValues("NOTES", yield casenotes.m_cn_resp_notes.getText(), pm.getParamV("NOTES"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('verify data in cheatsheet page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var LastEngagement = (yield casenotes.cheatsheets_phone.getText()) + ',' + (yield casenotes.cheatsheets_inperson.getText()) + ',' + (yield casenotes.cheatsheets_appointmentschd.getText()) + ',' + (yield casenotes.cheatsheets_attemptcontc.getText()) + ',' + (yield casenotes.cheatsheets_casereviewconsult.getText());
        var ObservationsLastEngagement = (yield casenotes.cheatsheets_anxious.getText()) + ',' + (yield casenotes.cheatsheets_swearing.getText());
        // console.log('LastEngagement -> ', LastEngagement);
        // console.log('ObservationsLastEngagement -> ', ObservationsLastEngagement);
        base.compareValues("Last Engagement", LastEngagement, pm.getParamV("LAST_ENGAGEMENT"));
        base.compareValues("Observations from Last Engagement", ObservationsLastEngagement, pm.getParamV("OBSERVATIONS_FROM_LAST_ENGAGEMENT"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyc0NhZU5vdGVzVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbWVtYmVyc0NhZU5vdGVzVGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBOEQ7QUFDOUQsdUNBQW9DO0FBQ3BDLDREQUF5RDtBQUN6RCx5REFBc0Q7QUFDdEQsc0VBQW1FO0FBQ25FLHdEQUFxRDtBQUNyRCxnREFBd0I7QUFDeEIsdURBQW9EO0FBRXBELElBQUksS0FBSyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDN0IsZUFBSSxDQUFDLHlCQUF5QixFQUFFOztRQUM5Qix3QkFBd0I7UUFDeEIsNEZBQTRGO1FBQzVGLHdCQUF3QjtRQUN4Qiw2REFBNkQ7UUFDN0Qsd0JBQXdCO1FBRXhCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEQsTUFBTSxTQUFTLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMs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