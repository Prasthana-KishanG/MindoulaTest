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
const E2EMember_1 = require("../pageObjects/E2EMember");
const ParamManager_1 = require("../Util/ParamManager");
const MMRController_1 = require("../Util/MMRController");
const chai_1 = __importDefault(require("chai"));
var path = require('path');
let E2EMem = new E2EMember_1.E2EMember();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let pm = new ParamManager_1.ParamManager();
let mmrc = new MMRController_1.MMRController();
var pg = require("pg");
cucumber_1.Then('click on Add External Provider', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(E2EMem.m_ep_Add);
        yield E2EMem.m_ep_Add.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in External Provider Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.setInputField(E2EMem.m_ep_name, pm.getParamH("Name"));
        yield E2EMem.m_ep_pref.click();
        var m_ep_pref_dropdown = E2EMem.m_ep_pref_dropdown_str.replace("$pref$", pm.getParamH("Preference"));
        //browser.sleep(2000);
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_ep_pref_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_ep_pref_dropdown)).click();
        yield E2EMem.m_ep_role.click();
        var m_ep_role_dropdown = E2EMem.m_ep_role_dropdown_str.replace("$role$", pm.getParamH("Role"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_ep_role_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_ep_role_dropdown)).click();
        base.setInputField(E2EMem.m_ep_phone, pm.getParamH("Phone"));
        base.setInputField(E2EMem.m_ep_email, pm.getParamH("Email"));
        yield E2EMem.m_ep_address.sendKeys(pm.getParamH("Address"));
        //await element(By.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).click();
        yield E2EMem.m_ep_address.sendKeys(protractor_1.protractor.Key.TAB);
        base.setInputField(E2EMem.m_ep_notes, pm.getParamH("Notes"));
        yield E2EMem.m_ep_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Tasks', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(E2EMem.m_task_Add);
        yield E2EMem.m_task_Add.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Tasks Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_task_type.click();
        var m_task_type_dropdown = E2EMem.m_task_type_dropdown_str.replace("$type$", pm.getParamH("Type"));
        protractor_1.browser.sleep(3000);
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_type_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_task_type_dropdown)).click();
        yield E2EMem.m_task_careextender.click();
        protractor_1.browser.sleep(3000);
        var m_task_careextender_dropdown = E2EMem.m_task_careextender_dropdown_str.replace("$careextender$", pm.getParamH("CareExtender"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_careextender_dropdown)));
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath(m_task_careextender_dropdown)).click();
        base.setInputField(E2EMem.m_task_description, pm.getParamH("Description"));
        base.setDateField(E2EMem.m_task_goaldate, pm.getParamH("goalDate"));
        yield E2EMem.m_task_save.click();
        base.UrlContains("tasks");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(8000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Referral', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(E2EMem.m_referral_add);
        yield E2EMem.m_referral_add.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Referral Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.setDropdownField(E2EMem.m_referral_type, E2EMem.m_referral_ref_type_dropdown, pm.getParamH("Type"));
        if (pm.getParamH("providerInNetwork").trim() != (""))
            base.setCheckboxField(E2EMem.m_referral_isProvInNetwork, pm.getParamH("providerInNetwork"));
        base.WaitforElementPresence(E2EMem.m_referral_ref_type);
        if (pm.getParamH("providerType").trim() != (""))
            base.setDropdownField(E2EMem.m_referral_ref_type, E2EMem.m_referral_ref_type_dropdown, pm.getParamH("providerType"));
        if (pm.getParamH("specialtyType").trim() != (""))
            base.setInputField(E2EMem.m_referral_specialty_type, pm.getParamH("specialtyType"));
        base.setInputField(E2EMem.m_referral_name, pm.getParamH("Name"));
        base.setDateField(E2EMem.m_referral_date, pm.getParamH("ReferralDate"));
        base.setInputField(E2EMem.m_referral_contact, pm.getParamH("ContactInfo"));
        base.setInputField(E2EMem.m_referral_direct_name, pm.getParamH("DirectName"));
        base.setInputField(E2EMem.m_referral_direct_contact, pm.getParamH("DirectContactInfo"));
        base.setDateField(E2EMem.m_referral_appointment_date, pm.getParamH("AppointmentDate"));
        base.setDropdownField(E2EMem.m_referral_stauts_type, E2EMem.m_referral_status_type_dropdown, pm.getParamH("status"));
        base.setCheckboxField(E2EMem.m_referral_reasonableTime, pm.getParamH("reasonableTime"));
        base.setCheckboxField(E2EMem.m_referral_reminder, pm.getParamH("reminder"));
        base.setCheckboxField(E2EMem.m_referral_assistance, pm.getParamH("assitance"));
        yield E2EMem.m_referral_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Referrals Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues_referrals("REFERRAL_TYPE", yield E2EMem.m_referral_list_type.getText(), pm.getParamV("REFERRAL_TYPE"));
        base.compareValues_referrals("REFERRAL_DETAILS", yield E2EMem.m_referral_list_details.getText(), pm.getParamV("REFERRAL_DETAILS"));
        base.compareValues_referrals("REFERRAL_NAME", yield E2EMem.m_referral_list_name.getText(), pm.getParamV("REFERRAL_NAME"));
        base.compareValues_referrals("APPOINTMENT_DATE", yield E2EMem.m_referral_list_appointment_date.getText(), pm.getParamV("APPOINTMENT_DATE"));
        base.compareValues_referrals("REFERRAL_DATE", yield E2EMem.m_referral_list_referral_date.getText(), pm.getParamV("REFERRAL_DATE"));
        base.compareValues_referrals("STATUS", yield E2EMem.m_referral_list_status.getText(), pm.getParamV("STATUS"));
        base.compareValues_referrals("REMINDER", yield E2EMem.m_referral_list_reminder.getText(), pm.getParamV("REMINDER"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Change Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield E2EMem.mp_change_status.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Status Container', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var mp_status_container = E2EMem.mp_status_container_str.replace("$replaceToken$", pm.getParamV("STATUS_NAME"));
        yield protractor_1.element(protractor_1.by.xpath(mp_status_container)).click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('enter data in update status pop up', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        if (pm.getParamV("REASON") !== (""))
            base.setDropdownField(E2EMem.ml_lane_update_reason, E2EMem.ml_lane_update_reason_dropdown, pm.getParamV("REASON"));
        base.setTextArea_Keys(E2EMem.ml_lane_update_notes, pm.getParamV("NOTES"));
        yield E2EMem.ml_lane_update_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Benefits', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_benefit_add.click();
    });
});
cucumber_1.Then('Enter Data in Benefits Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_benefit_type.click();
        var m_benefittype_dropdown = E2EMem.m_benefittype_dropdown_str.replace("$benefittype$", pm.getParamH("Benefit_Type"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_benefittype_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_benefittype_dropdown)).click();
        base.setInputField(E2EMem.m_benefit_idNum, pm.getParamH("ID_Num"));
        base.setInputField(E2EMem.m_benefit_amount, pm.getParamH("Amount"));
        yield E2EMem.m_benefit_expiration_date.click();
        yield E2EMem.m_benefit_expiration_date.sendKeys(pm.getParamH("Expiration_date"));
        yield E2EMem.m_benefit_expiration_date.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield E2EMem.m_benefit_hav_orig_copy.click();
        var m_benefit_hav_orig_copy_dropdown = E2EMem.m_benefit_hav_orig_copy_dropdown_str.replace("$hav_orig_copy$", pm.getParamH("Have_orig_copy"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_benefit_hav_orig_copy_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_benefit_hav_orig_copy_dropdown)).click();
        yield E2EMem.m_benefit_status.click();
        var m_benefit_status_dropdown = E2EMem.m_benefit_status_dropdown_str.replace("$status$", pm.getParamH("Status"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_benefit_status_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_benefit_status_dropdown)).click();
        base.setInputField(E2EMem.m_benefit_notes, pm.getParamH("Notes"));
        yield E2EMem.m_benefit_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //base.WaitforElementPresence(E2EMem.m_open_document_section);
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Expand Document Section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_open_document_section.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Document in Benefits page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_add_document.click();
        //base.WaitforElementPresence(E2EMem.m_doc_file_upload);
        //browser.sleep(3000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data in Benefits Document Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_doc_file_upload.sendKeys(pm.getParamH("file_path"));
        //await E2EMem.m_doc_file_upload.click();
        console.log('file path ...>', pm.getParamH("file_path"));
        // element(by.name("datafile")).then(async function(el: ElementFinder){
        // 	browser.executeScript("arguments[0].scrollIntoView(true);",el);
        // 	el.sendKeys(pm.getParamH("file_path"));
        // 	browser.sleep(2000);
        yield E2EMem.m_doc_file_name.clear();
        base.setInputField(E2EMem.m_doc_file_name, pm.getParamH("name"));
        yield E2EMem.m_doc_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Benefits Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues_referrals("DOC_TYPE", yield E2EMem.m_benefits_list_type.getText(), pm.getParamV("DOC_TYPE"));
        base.compareValues_referrals("ID_NUMBER", yield E2EMem.m_benefits_list_id.getText(), pm.getParamV("ID_NUMBER"));
        base.compareValues_referrals("AMOUNT", yield E2EMem.m_benefits_list_amount.getText(), pm.getParamV("AMOUNT"));
        base.compareValues_referrals("STATUS", yield E2EMem.m_benefits_list_status.getText(), pm.getParamV("STATUS"));
        base.compareValues_referrals("EXPIRATION_DATE", yield E2EMem.m_benefits_list_expiration.getText(), pm.getParamV("EXPIRATION_DATE"));
        base.compareValues_referrals("ORIGINAL_COPY", yield E2EMem.m_benefits_list_copy.getText(), pm.getParamV("ORIGINAL_COPY"));
        base.compareValues_referrals("NOTES", yield E2EMem.m_benefits_list_notes.getText(), pm.getParamV("NOTES"));
        base.compareValues_referrals("DOCUMENTS", yield E2EMem.m_benefits_list_documents.getText(), pm.getParamV("DOCUMENTS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Care Gaps', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementPresence(E2EMem.m_cg_Add);
        yield E2EMem.m_cg_Add.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // findElement(jsonData(objects,"m_cg_Add")).click();
        // 	addScreenshot();
    });
});
cucumber_1.Then('Enter Data in CareGaps Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        //base.WaitforElementPresence(E2EMem.m_cg_caregaptype);
        yield E2EMem.m_cg_caregaptype.click();
        var m_cg_caregaptypedropdown = E2EMem.m_cg_caregaptypedropdown_str.replace("$caregaptype$", pm.getParamH("Type"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_cg_caregaptypedropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_cg_caregaptypedropdown)).click();
        yield E2EMem.m_cg_identifiedon.click();
        yield E2EMem.m_cg_identifiedon.sendKeys(pm.getParamH("Identifid_On"));
        yield E2EMem.m_cg_identifiedon.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield E2EMem.m_cg_exp_res_date.click();
        yield E2EMem.m_cg_exp_res_date.sendKeys(pm.getParamH("Expected_Resolution"));
        yield E2EMem.m_cg_exp_res_date.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield E2EMem.m_cg_exp_res_date.sendKeys(protractor_1.protractor.Key.TAB);
        base.setInputField(E2EMem.m_cg_desc, pm.getParamH("Description"));
        //await E2EMem.m_cg_desc.sendKeys(protractor.Key.TAB);
        //browser.sleep(3000);
        yield E2EMem.m_cg_save.click();
        //await element(by.xpath("/p-toastitem/div/div")).click();
        protractor_1.browser.sleep(15000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("care_gaps");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Expand in Care Gaps Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var m_cg_list = E2EMem.m_cg_list_str.replace("$rowToFind$", pm.getParamH("rowToFind"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_cg_list)));
        base.moveCursorToAnElement(m_cg_list);
        yield E2EMem.m_cg_list_expand.click();
        protractor_1.browser.sleep(2000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Actions Taken', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_ak_status.click();
        base.scrollVerticalBy();
        var m_ak_status_dropdown = E2EMem.m_ak_status_dropdown_str.replace("$status$", pm.getParamH("Status"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_ak_status_dropdown)));
        //base.moveCursorToAnElement(m_ak_status_dropdown);
        //base.scrollIntoView(element(by.xpath(m_ak_status_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_ak_status_dropdown)).click();
        yield E2EMem.m_ak_actiondate.click();
        yield E2EMem.m_ak_actiondate.sendKeys(pm.getParamH("Action_Date"));
        yield E2EMem.m_ak_actiondate.sendKeys(protractor_1.protractor.Key.ESCAPE);
        base.setInputField(E2EMem.m_ak_action_taken, pm.getParamH("Action_Taken"));
        yield E2EMem.m_ak_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //base.UrlContains("care_gaps")
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Actions Taken Section', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues_referrals("ACTION_DATE", yield E2EMem.m_action_list_date.getText(), pm.getParamV("ACTION_DATE"));
        base.compareValues_referrals("ACTION_TAKEN", yield E2EMem.m_action_list_action_taken.getText(), pm.getParamV("ACTION_TAKEN"));
        base.compareValues_referrals("STATUS_CHANGED_TO", yield E2EMem.m_action_list_status_changed_to.getText(), pm.getParamV("STATUS_CHANGED_TO"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Contact', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_add_contact.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Family Contact Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.setInputField(E2EMem.m_fc_first_name, pm.getParamH("fname"));
        base.setInputField(E2EMem.m_fc_last_name, pm.getParamH("lname"));
        base.setInputField(E2EMem.m_address, pm.getParamH("address"));
        //element(by.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).click();
        //await E2EMem.m_fc_packitem.click();
        base.setInputField(E2EMem.m_fc_mobile, pm.getParamH("mobile"));
        base.setInputField(E2EMem.m_fc_email, pm.getParamH("email"));
        base.setInputField(E2EMem.m_fc_home_phone, pm.getParamH("home_phone"));
        base.setInputField(E2EMem.m_fc_office_phone, pm.getParamH("office_phone"));
        base.setInputField(E2EMem.m_fc_relationship, pm.getParamH("relationship"));
        base.setDropdownField(E2EMem.m_fc_housing_status, E2EMem.m_fc_housing_status_dropdwon, pm.getParamH("housing_status"));
        yield E2EMem.m_ak_save.click();
        protractor_1.browser.sleep(8000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //base.UrlContains("care_gaps")
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Release Agreement', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_add_release_agreement.click();
        protractor_1.browser.sleep(4000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data on Release Agreement', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_rel_file_upload.sendKeys(pm.getParamH("file_path"));
        //browser.sleep(2000);
        base.setDateField(E2EMem.m_rel_from_date, pm.getParamH("from_date"));
        yield E2EMem.m_rel_from_date.sendKeys(protractor_1.protractor.Key.TAB);
        protractor_1.element.all(protractor_1.by.className("mat-checkbox-label")).each(function (eles, index) {
            eles.getText().then(function (text) {
                console.log(text);
                var contacts = pm.getParamH("contacts_csv").split(",");
                console.log('contacts --> ', contacts);
                for (let i = 0; i < contacts.length; i++) {
                    if (contacts[i] == text) {
                        var m_rel_contacts = E2EMem.m_rel_contacts_str.replace("$replaceToken$", text);
                        console.log('m_rel_contacts...>', m_rel_contacts);
                        protractor_1.browser.sleep(2000);
                        base.setCheckboxField(protractor_1.element(protractor_1.by.xpath(m_rel_contacts)), "Yes");
                        //browser.sleep(4000);
                    }
                }
            });
        });
        protractor_1.browser.sleep(3000);
        //await element(by.xpath(E2EMem.m_rel_add1)).click();
        yield E2EMem.m_rel_add.click();
        protractor_1.browser.sleep(5000);
        // browser.navigate().refresh();
        // browser.sleep(5000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("contacts");
            protractor_1.browser.sleep(4000);
        });
        //   if(await element(by.id(E2EMem.m_release_agreement_list_applies_to_str)).getText()!="Yes")
        //   {
        // 	await E2EMem.m_add_release_agreement.click();
        // 	browser.sleep(4000);
        // 	await E2EMem.m_rel_file_upload.sendKeys(pm.getParamH("file_path"));
        // 	base.setDateField(E2EMem.m_rel_from_date, pm.getParamH("from_date"));
        // 	await E2EMem.m_rel_from_date.sendKeys(protractor.Key.TAB);
        // 	element.all(by.className("mat-checkbox-label")).each(function(eles, index) {
        // 		eles.getText().then(function(text) {
        // 			console.log(text);
        // 			var contacts = pm.getParamH("contacts_csv").split(",");
        // 			console.log('contacts --> ', contacts);
        // 			for( let i=0;i<contacts.length;i++) {
        // 					 if(contacts[i]==text){
        // 					var m_rel_contacts = E2EMem.m_rel_contacts_str.replace("$replaceToken$",text);
        // 					console.log('m_rel_contacts...>',m_rel_contacts);
        // 					browser.sleep(2000);
        // 					base.setCheckboxField(element(by.xpath(m_rel_contacts)) ,"Yes");
        // 					//browser.sleep(4000);
        // 				}
        // 			}
        // 		});
        // });
        // browser.sleep(2000);
        // 	await E2EMem.m_rel_add.click();
        // 	browser.sleep(3000);
        // 	await browser.getTitle().then(function(text) {
        // 		expect(text).to.equal("mMR");
        // 		base.UrlContains("contacts")
        // 	   browser.sleep(4000);
        // 		});
        //   }
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Contacts page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("CONTACT NAME", yield E2EMem.m_fc_list_name.getText(), pm.getParamV("NAME"));
        base.compareValues("CONTACT ADDRESS", yield E2EMem.m_fc_list_address.getText(), pm.getParamV("ADDRESS"));
        base.compareValues("CONTACT PHONE", yield E2EMem.m_fc_list_phone.getText(), pm.getParamV("PHONE"));
        base.compareValues("CONTACT EMAIL", yield E2EMem.m_fc_list_email.getText(), pm.getParamV("EMAIL"));
        base.compareValues("CONTACT RELATIONSHIP", yield E2EMem.m_fc_list_relation.getText(), pm.getParamV("RELATIONSHIP"));
        // base.compareValues("CONTACT RELEASE", await E2EMem.m_fc_list_release.getText(), pm.getParamV("RELEASE"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('verify data in Release Agreements page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("DOCUMENT NAME", yield E2EMem.m_release_agreement_list_doc_name.getText(), pm.getParamV("DOCUMENT_NAME"));
        base.compareValues("VALID FROM", yield E2EMem.m_release_agreement_list_valid_from.getText(), pm.getParamV("VALID_FROM"));
        base.compareValues("VALID TO", yield E2EMem.m_release_agreement_list_valid_to.getText(), pm.getParamV("VALID_TO"));
        base.compareValues("APPLIES TO", yield E2EMem.m_release_agreement_list_applies_to.getText(), pm.getParamV("APPLIES_TO"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Hospital Visit', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_hv_add_hosp_visit.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Add Hospital Visit Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_hv_stay.click();
        var m_hv_stay_dropdown = E2EMem.m_hv_stay_dropdown_str.replace("$stay$", pm.getParamH("Stay"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_hv_stay_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_hv_stay_dropdown)).click();
        base.setInputField(E2EMem.m_hv_name, pm.getParamH("HospitalName"));
        base.setInputField(E2EMem.m_hv_unit, pm.getParamH("HospitalUnit"));
        base.setInputField(E2EMem.m_hv_reason, pm.getParamH("Reason"));
        yield E2EMem.m_hv_start_date.click();
        yield E2EMem.m_hv_start_date.sendKeys(pm.getParamH("startDate"));
        yield E2EMem.m_hv_start_date.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield E2EMem.m_hv_end_date.click();
        yield E2EMem.m_hv_end_date.sendKeys(pm.getParamH("endDate"));
        yield E2EMem.m_hv_end_date.sendKeys(protractor_1.protractor.Key.ESCAPE);
        yield E2EMem.m_ak_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("hospital_visits");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Hospital Visits', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("HOSPITAL_STAY", yield E2EMem.m_hv_list_stay.getText(), pm.getParamV("HOSPITAL_STAY"));
        base.compareValues("HOSPITAL NAME", yield E2EMem.m_hv_list_name.getText(), pm.getParamV("HOSPITAL_NAME"));
        base.compareValues("HOSPITAL UNIT", yield E2EMem.m_hv_list_unit.getText(), pm.getParamV("HOSPITAL_UNIT"));
        base.compareValues("HOSPITAL START DATE", yield E2EMem.m_hv_list_start.getText(), pm.getParamV("HOSPITAL_START_DATE"));
        base.compareValues("HOSPITAL END DATE", yield E2EMem.m_hv_list_end.getText(), pm.getParamV("HOSPITAL_END_DATE"));
        base.compareValues("HOSPITAL REASON", yield E2EMem.m_hv_list_reason.getText(), pm.getParamV("HOSPITAL_REASON"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Office Visit', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_ov_add_office_visit.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Add Office Visit Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_ov_visit_date.click();
        yield E2EMem.m_ov_visit_date.sendKeys(pm.getParamH("visitDate"));
        yield E2EMem.m_ov_visit_date.sendKeys(protractor_1.protractor.Key.ESCAPE);
        base.setInputField(E2EMem.m_ov_name, pm.getParamH("DoctorName"));
        base.setInputField(E2EMem.m_ov_speciality, pm.getParamH("Speciality"));
        base.setInputField(E2EMem.m_ov_reason, pm.getParamH("Reason"));
        yield E2EMem.m_ov_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("hospital_visits");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Office Visits', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("VISIT DATE", yield E2EMem.m_ov_list_visit_date.getText(), pm.getParamV("VISIT_DATE"));
        base.compareValues("DOCTOR NAME", yield E2EMem.m_ov_list_doctor_name.getText(), pm.getParamV("DOCTOR_NAME"));
        base.compareValues("SPECIALTY", yield E2EMem.m_ov_list_specialty.getText(), pm.getParamV("SPECIALTY"));
        base.compareValues("REASON", yield E2EMem.m_ov_list_reason.getText(), pm.getParamV("REASON"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Document', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(2000);
        yield E2EMem.m_add_document_btn.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data on add document page card view', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_doc_file_add.click();
        protractor_1.browser.sleep(2000);
        yield E2EMem.m_doc_file_upload.sendKeys(pm.getParamH("file_path"));
        yield E2EMem.m_doc_file_name_val.clear();
        base.setInputField(E2EMem.m_doc_file_name_val, pm.getParamH("name"));
        yield E2EMem.m_ov_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("documents");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Documents page card view', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("DOCUMENT NAME", yield E2EMem.m_doc_file_name_value.getText(), pm.getParamV("NAME"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Change to List view', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_doc_listview.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data on add document page List view', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        //await E2EMem.m_doc_file_add.click();
        yield E2EMem.m_doc_file_upload.sendKeys(pm.getParamH("file_path"));
        yield E2EMem.m_doc_file_name_val.clear();
        base.setInputField(E2EMem.m_doc_file_name_val, pm.getParamH("name"));
        yield E2EMem.m_ov_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("documents");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Documents page List view', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var m_doc_list_name_val = yield (protractor_1.element(protractor_1.by.xpath(E2EMem.m_doc_list_name_val_str.replace("$replaceToken$", pm.getParamV("NAME")))));
        base.compareValues("DOCUMENT NAME", yield m_doc_list_name_val.getText(), pm.getParamV("NAME"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Goal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_add_goal.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data on goals page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.setInputField(E2EMem.m_goal_name, pm.getParamV("NAME"));
        base.setInputField(E2EMem.m_goal_resources, pm.getParamV("IDENTIFIED_RESOURCES"));
        base.setDateField(E2EMem.m_goal_identified_date, pm.getParamV("IDENTIFIED_DATE"));
        base.setDateField(E2EMem.m_goal_achieved_date, pm.getParamV("ACHIEVED_DATE"));
        base.setInputField(E2EMem.m_goal_comments, pm.getParamV("COMMENTS"));
        yield E2EMem.m_ov_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("goals");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Goals page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("GOAL NAME", yield E2EMem.m_goal_list_name.getText(), pm.getParamV("NAME"));
        base.compareValues("AVAILABLE RESOURCES", yield E2EMem.m_goal_list_resources.getText(), pm.getParamV("RESOURCES"));
        base.compareValues("IDENTIFIED ON", yield E2EMem.m_goal_list_identified_date.getText(), pm.getParamV("IDENTIFIED_ON"));
        base.compareValues("GOAL STATUS", yield E2EMem.m_goal_list_achieved.getText(), pm.getParamV("STATUS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Add Diagnoses', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_diagnoses_add.click();
        base.WaitforElementPresence(yield protractor_1.element(protractor_1.By.tagName("mmr-member-diagnosis-dialog")));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // findElement(jsonData(objects,"m_diagnoses_add")).click();
        // addScreenshot();
    });
});
cucumber_1.Then('Enter Data in Diagnosis Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_diagnoses_code.click();
        yield E2EMem.m_diagnoses_code.sendKeys(pm.getParamH("Code"));
        var m_dianoses_code_dropdown = E2EMem.m_dianoses_code_dropdown_str.replace("$replaceToken$", pm.getParamH("Code"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_dianoses_code_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_dianoses_code_dropdown)).click();
        //base.setDropdownField(E2EMem.m_diagnoses_code,E2EMem.m_dianoses_code_dropdown_str,pm.getParamH("Code"));
        base.setDropdownField(E2EMem.m_dianoses_sourcetype, E2EMem.m_dianoses_sourcetype_dropdown, pm.getParamH("source_type"));
        base.setDropdownField(E2EMem.m_dianoses_type, E2EMem.m_dianoses_type_dropdown, pm.getParamH("diagnosis_type"));
        yield E2EMem.m_ov_save.click();
        //base.WaitforElementPresence(await element(By.tagName("section-title")));
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
cucumber_1.Then('verify data in Diagnosis Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(4000);
        pm.dataTableV(dataTable);
        base.compareValues("DIAGNOSIS", yield E2EMem.m_diagnoses_list_dianosis.getText(), pm.getParamV("DIAGNOSIS"));
        base.compareValues("ICD_CODE", yield E2EMem.m_diagnoses_list_code.getText(), pm.getParamV("ICD_CODE"));
        base.compareValues("DIAGNOSIS_NUM_OF_TIMES", yield E2EMem.m_diagnoses_list_times.getText(), pm.getParamV("NUM_OF_TIMES"));
        base.compareValues("DIAGNOSIS_SOURCE_TYPE", yield E2EMem.m_diagnoses_list_source.getText(), pm.getParamV("SOURCE_TYPE"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Edit Icon in Member Header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.m_demo_edit.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // sleep(4);
        // 	findElement(jsonData(objects,"m_demo_edit")).click();
        // 	addScreenshot();
    });
});
cucumber_1.Then('Enter Data in Demographics Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_demo_middlename.clear();
        base.setInputField(E2EMem.m_demo_middlename, pm.getParamH("mname"));
        yield E2EMem.m_demo_dob.clear();
        base.setDateField(E2EMem.m_demo_dob, pm.getParamH("dob"));
        //await E2EMem.m_demo_gender.clear();
        //   await E2EMem.m_demo_gender.click();
        //   var m_demo_gender_dropdown = E2EMem.m_demo_gender_dropdown_str.replace("$replaceToken$",pm.getParamH("gender"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_gender_dropdown)));
        // await element(by.xpath(m_demo_gender_dropdown)).click();
        base.setDropdownField(E2EMem.m_demo_gender, E2EMem.m_demo_gender_dropdown_str, pm.getParamH("gender"));
        //await E2EMem.m_demo_marital.clear();
        // await E2EMem.m_demo_marital.click();
        // var m_demo_gender_dropdown = E2EMem.m_demo_gender_dropdown.replace("$replaceToken$",pm.getParamH("marital_status"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_gender_dropdown)));
        // await element(by.xpath(m_demo_gender_dropdown)).click();
        base.setDropdownField(E2EMem.m_demo_marital, E2EMem.m_demo_marital_dropdown_str, pm.getParamH("marital_status"));
        yield E2EMem.m_demo_address.clear();
        yield E2EMem.m_demo_address.sendKeys(pm.getParamH("address"));
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.By.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).click();
        base.setInputField(E2EMem.m_demo_home, pm.getParamH("home_phone"));
        yield E2EMem.m_demo_office.clear();
        base.setInputField(E2EMem.m_demo_office, pm.getParamH("office_phone"));
        base.setInputField(E2EMem.m_demo_othername, pm.getParamH("other_name"));
        base.setInputField(E2EMem.m_demo_preferredname, pm.getParamH("preferred_name"));
        //browser.actions().sendKeys(protractor.Key.END).perform();
        yield E2EMem.m_demo_mailaddress.sendKeys(pm.getParamH("mail_address"));
        //browser.sleep(2000);
        //await E2EMem.m_demo_race.clear();
        //   await E2EMem.m_demo_race.click();
        // var m_demo_race_dropdown = E2EMem.m_demo_race_dropdown.replace("$replaceToken$",pm.getParamH("race"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_race_dropdown)));
        // await element(by.xpath(m_demo_race_dropdown)).click();
        base.setDropdownField(E2EMem.m_demo_race, E2EMem.m_demo_race_dropdown_str, pm.getParamH("race"));
        //await E2EMem.m_demo_ethnicity.clear();
        yield E2EMem.m_demo_ethnicity.click();
        var m_demo_ethnicity_dropdown = E2EMem.m_demo_ethnicity_dropdown_str.replace("$replaceToken$", pm.getParamH("ethnicity"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_ethnicity_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_ethnicity_dropdown)).click();
        //base.setDropdownField1(E2EMem.m_demo_ethnicity,E2EMem.m_demo_ethnicity_dropdown_str,pm.getParamH("ethnicity"));
        protractor_1.browser.sleep(2000);
        //await E2EMem.m_demo_religion.clear();
        yield E2EMem.m_demo_religion.click();
        var m_demo_religion_dropdown = E2EMem.m_demo_religion_dropdown_str.replace("$replaceToken$", pm.getParamH("religion"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_religion_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_religion_dropdown)).click();
        //base.setDropdownField1(E2EMem.m_demo_religion,E2EMem.m_demo_religion_dropdown_str,pm.getParamH("religion"));
        protractor_1.browser.sleep(2000);
        //await E2EMem.m_demo_lang.clear();
        yield E2EMem.m_demo_lang.click();
        var m_demo_lang_dropdown = E2EMem.m_demo_lang_dropdown_str.replace("$replaceToken$", pm.getParamH("p_lang"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_lang_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_lang_dropdown)).click();
        //base.setDropdownField(E2EMem.m_demo_lang,E2EMem.m_demo_lang_dropdown_str,pm.getParamH("p_lang"));
        protractor_1.browser.sleep(2000);
        //await E2EMem.m_demo_eng_read.clear();
        yield E2EMem.m_demo_eng_read.click();
        var m_demo_eng_read_dropdown = E2EMem.m_demo_eng_read_dropdown_str.replace("$replaceToken$", pm.getParamH("eng_read"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_eng_read_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_eng_read_dropdown)).click();
        //base.setDropdownField(E2EMem.m_demo_eng_read,E2EMem.m_demo_eng_read_dropdown_str,pm.getParamH("eng_read"));
        protractor_1.browser.sleep(2000);
        //await E2EMem.m_demo_eng_write.clear();
        yield E2EMem.m_demo_eng_write.click();
        var m_demo_eng_write_dropdown = E2EMem.m_demo_eng_write_dropdown_str.replace("$replaceToken$", pm.getParamH("eng_write"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_eng_write_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_eng_write_dropdown)).click();
        //base.setDropdownField(E2EMem.m_demo_eng_write,E2EMem.m_demo_eng_write_dropdown_str,pm.getParamH("eng_write"));
        protractor_1.browser.sleep(2000);
        // await E2EMem.m_demo_eng_speak.clear();
        yield E2EMem.m_demo_eng_speak.click();
        var m_demo_eng_speak_dropdown = E2EMem.m_demo_eng_speak_dropdown_str.replace("$replaceToken$", pm.getParamH("eng_speak"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_eng_speak_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_eng_speak_dropdown)).click();
        //base.setDropdownField(E2EMem.m_demo_eng_speak,E2EMem.m_demo_eng_speak_dropdown_str,pm.getParamH("eng_speak"));
        protractor_1.browser.sleep(2000);
        //await E2EMem.m_demo_housing.clear();
        yield E2EMem.m_demo_housing.click();
        var m_demo_housing_dropdown = E2EMem.m_demo_housing_dropdown_str.replace("$replaceToken$", pm.getParamH("housing_stat"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_housing_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_housing_dropdown)).click();
        //base.setDropdownField(E2EMem.m_demo_housing,E2EMem.m_demo_housing_dropdown_str,pm.getParamH("housing_stat"));
        protractor_1.browser.sleep(2000);
        //await E2EMem.m_demo_minor.clear();
        yield E2EMem.m_demo_minor.click();
        var m_demo_minor_dropdown = E2EMem.m_demo_minor_dropdown_str.replace("$replaceToken$", pm.getParamH("minor"));
        // base.WaitforElementPresence(element(by.xpath(m_demo_minor_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_demo_minor_dropdown)).click();
        //   base.scrollVerticalBy();
        // base.setDropdownField(E2EMem.m_demo_minor,E2EMem.m_demo_minor_dropdown_str,pm.getParamH("minor"));
        protractor_1.browser.sleep(2000);
        //base.scrollVerticalBy();
        //base.setTextArea_Keys(E2EMem.m_demo_description, pm.getParamH("description"));
        //base.scrollVerticalBy();
        //   base.setCheckboxField(E2EMem.m_demo_contact_work_cb,pm.getParamH("Yes"));
        //   base.setCheckboxField(E2EMem.m_demo_contact_home_cb,pm.getParamH("Yes"));
        //   base.setCheckboxField(E2EMem.m_demo_contact_email_cb,pm.getParamH("Yes"));
        //   base.setCheckboxField(E2EMem.m_demo_contact_phone_cb,pm.getParamH("Yes"));
        //   base.setCheckboxField(E2EMem.m_demo_contact_mail_cb,pm.getParamH("Yes"));
        //   base.setCheckboxField(E2EMem.m_demo_contact_message_cb,pm.getParamH("Yes"));
        //   base.setInputField(E2EMem.m_demo_contact_work, pm.getParamH("contact_work"));
        //   base.setInputField(E2EMem.m_demo_contact_home, pm.getParamH("contact_home"));
        //   base.setInputField(E2EMem.m_demo_contact_phone, pm.getParamH("contact_phone"));
        //   base.setInputField(E2EMem.m_demo_contact_email, pm.getParamH("contact_email"));
        //   base.setInputField(E2EMem.m_demo_contact_mail, pm.getParamH("contact_mail"));
        //   base.setInputField(E2EMem.m_demo_contact_message, pm.getParamH("contact_message"));
        yield E2EMem.m_demo_submit.click();
        //browser.actions().sendKeys(protractor.Key.HOME).perform();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // pm.runParamManager(arg1);
        // 	setInputField(findElement(jsonData(objects,"m_demo_middlename")), pm.getParam("mname"));
        // 	findElement(jsonData(objects,"m_demo_dob")).clear();
        // 	setDateField(findElement(jsonData(objects,"m_demo_dob")), pm.getParam("dob"));
        // 	sleep(1);
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_gender")), jsonData(objects,"m_demo_gender_dropdown"), pm.getParam("gender"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_marital")), jsonData(objects,"m_demo_marital_dropdown"), pm.getParam("marital_status"));
        // 	findElement(jsonData(objects,"m_demo_address")).clear();
        // 	findElement(jsonData(objects,"m_demo_address")).sendKeys(pm.getParam("address"));
        // 	sleep(2);
        // 	driver.findElements(By.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).get(0).click();
        // 	setInputField(findElement(jsonData(objects,"m_demo_home")), pm.getParam("home_phone"));
        // 	findElement(jsonData(objects,"m_demo_office")).clear();
        // 	setInputField(findElement(jsonData(objects,"m_demo_office")), pm.getParam("office_phone"));
        // 	setInputField(findElement(jsonData(objects,"m_demo_othername")), pm.getParam("other_name"));
        // 	setInputField(findElement(jsonData(objects,"m_demo_preferredname")), pm.getParam("preferred_name"));
        // 	scrollHorizontalBy();
        // 	findElement(jsonData(objects,"m_demo_mailaddress")).sendKeys(pm.getParam("mail_address"));
        // 	driver.findElements(By.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).get(0).click();
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_race")), jsonData(objects,"m_demo_race_dropdown"), pm.getParam("race"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_ethnicity")), jsonData(objects,"m_demo_ethnicity_dropdown"), pm.getParam("ethnicity"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_religion")), jsonData(objects,"m_demo_religion_dropdown"), pm.getParam("religion"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_lang")), jsonData(objects,"m_demo_lang_dropdown"), pm.getParam("p_lang"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_eng_read")), jsonData(objects,"m_demo_eng_read_dropdown"), pm.getParam("eng_read"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_eng_write")), jsonData(objects,"m_demo_eng_write_dropdown"), pm.getParam("eng_write"));
        // 	sleep(1);
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_eng_speak")), jsonData(objects,"m_demo_eng_speak_dropdown"), pm.getParam("eng_speak"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_housing")), jsonData(objects,"m_demo_housing_dropdown"), pm.getParam("housing_stat"));
        // 	setDropdownField(findElement(jsonData(objects,"m_demo_minor")), jsonData(objects,"m_demo_minor_dropdown"), pm.getParam("minor"));
        // 	setRadioField(jsonData(objects,"m_demo_discretion"), pm.getParam("discretion"));
        // 	sleep(1);
        // 	setTextArea(findElement(jsonData(objects,"m_demo_description")), pm.getParam("description"));
        // 	setCheckboxField(findElement(jsonData(objects,"m_demo_contact_work_cb")), "Yes");
        // 	setCheckboxField(findElement(jsonData(objects,"m_demo_contact_home_cb")), "Yes");
        // 	setCheckboxField(findElement(jsonData(objects,"m_demo_contact_email_cb")), "Yes");
        // 	setCheckboxField(findElement(jsonData(objects,"m_demo_contact_phone_cb")), "Yes");
        // 	setCheckboxField(findElement(jsonData(objects,"m_demo_contact_mail_cb")), "Yes");
        // 	setCheckboxField(findElement(jsonData(objects,"m_demo_contact_message_cb")), "Yes");
        // 	setInputField(findElement(jsonData(objects,"m_demo_contact_work")), pm.getParam("contact_work"));
        // 	sleep(1);
        // 	setInputField(findElement(jsonData(objects,"m_demo_contact_home")), pm.getParam("contact_home"));
        // 	sleep(1);
        // 	setInputField(findElement(jsonData(objects,"m_demo_contact_phone")), pm.getParam("contact_phone"));
        // 	sleep(1);
        // 	setInputField(findElement(jsonData(objects,"m_demo_contact_email")), pm.getParam("contact_email"));
        // 	sleep(1);
        // 	setInputField(findElement(jsonData(objects,"m_demo_contact_mail")), pm.getParam("contact_mail"));
        // 	sleep(1);
        // 	setInputField(findElement(jsonData(objects,"m_demo_contact_message")), pm.getParam("contact_message"));
        // 	addScreenshot();
        // 	findElement(jsonData(objects,"m_demo_submit")).click();
        // 	addScreenshot();
        // 	sleep(2);
        // 	movePageUp();
        // 	movePageUp();
    });
});
cucumber_1.Then('click on pagination list', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var ml_pagination_item = E2EMem.ml_pagination_item_str.replace("$pgNum$", pm.getParamV("PAGE_NUMBER"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(ml_pagination_item)));
        yield protractor_1.element(protractor_1.by.xpath(ml_pagination_item)).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // pm.runVerticalParamManager(arg1);
        // 	sleep(5);
        // 	movePageDown();
        // 	findElement(jsonData(objects,"ml_pagination_item").replace("$pgNum$", pm.getVParam("PAGE_NUMBER"))).click();
        // 	addScreenshot();
    });
});
cucumber_1.Then('click on first member in the list', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield E2EMem.ml_first_member.click();
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
cucumber_1.Then('verify active page in the list', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("DIAGNOSIS", yield E2EMem.ml_pagination_active_item.getText(), pm.getParamV("PAGE_NUMBER"));
    });
});
cucumber_1.Then('search for member in the list', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        protractor_1.browser.sleep(3000);
        var membName = pm.getParamH("name");
        if (membName.trim() == ("")) {
            membName = mmrc.getCurrentUser();
        }
        yield E2EMem.ml_search.clear();
        yield E2EMem.ml_search.sendKeys(membName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRTJFX01lbWJlclRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL0UyRV9NZW1iZXJUZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWIsdUNBQWdDO0FBQ2hDLDJDQUFpRjtBQUNqRix1Q0FBb0M7QUFDcEMsd0RBQXFEO0FBQ3JELHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFFdEQsZ0RBQXdCO0FBQ3hCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3RCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDL0IsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR3ZCLGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRTs7UUFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENB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