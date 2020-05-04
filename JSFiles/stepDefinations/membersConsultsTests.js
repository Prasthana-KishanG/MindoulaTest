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
const MMRController_1 = require("../Util/MMRController");
const membersCaseNotes_1 = require("../pageObjects/membersCaseNotes");
const E2EMember_1 = require("../pageObjects/E2EMember");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
let consults = new membersConsults_1.membersConsults();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let casenotes = new membersCaseNotes_1.membersCaseNotes();
let pm = new ParamManager_1.ParamManager();
let E2EMem = new E2EMember_1.E2EMember();
const moment = require("moment");
cucumber_1.Then('click on Add Consult', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(3000);
        base.WaitforElementClickable(consults.m_consult_add);
        yield consults.m_consult_add.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        //findElement(jsonData(objects,"m_consult_add")).click();
        // 	addScreenshot();
    });
});
cucumber_1.Then('click on Add Diagnosis in Conults page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(consults.m_consult_add_diagnosis);
        yield consults.m_consult_add_diagnosis.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // findElement(jsonData(objects,"m_consult_add_diagnosis")).click();
        // addScreenshot();
    });
});
// Then('Enter Data in Diagnosis', async function (dataTable) {
// 	pm.dataTableH(dataTable);
// 	await consults.m_diagnoses_code.click();
// 	await consults.m_diagnoses_code.sendKeys(pm.getParamH("Code"));
// 	var m_dianoses_code_dropdown = consults.m_dianoses_code_dropdown_str.replace("$replaceToken$",pm.getParamH("Code"));
// 	base.WaitforElementPresence(element(by.xpath(m_dianoses_code_dropdown)));
// 	await element(by.xpath(m_dianoses_code_dropdown)).click();
// 	//base.setDropdownField(E2EMem.m_diagnoses_code,E2EMem.m_dianoses_code_dropdown_str,pm.getParamH("Code"));
// 	base.setDropdownField(consults.m_dianoses_sourcetype,consults.m_dianoses_sourcetype_dropdown,pm.getParamH("source_type"));
// 	base.setDropdownField(consults.m_dianoses_type,consults.m_dianoses_type_dropdown,pm.getParamH("diagnosis_type"));
// 	await consults.m_ov_save.click();
// 	//base.WaitforElementPresence(await element(By.tagName("section-title")));
// 	await browser.getTitle().then(async function(text) {
// 		expect(text).to.equal("mMR");
// 		browser.sleep(5000);
// 	  });
// 	  const screenshot = await browser.takeScreenshot();
// 	  this.attach(screenshot, "image/png");
//   });
cucumber_1.Then('click on Add Measurement Plan', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //base.WaitforElementPresence(consults.m_consult_add_measure);
        //base.moveCursorToAnElement(consults.m_consult_add_measure);
        //base.WaitforElementClickable(consults.m_consult_add_measure);
        protractor_1.browser.actions().mouseMove(consults.m_consult_add_measure).perform();
        yield consults.m_consult_add_measure.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data in Measurement Plan page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.setDropdownField(consults.m_measure_assessment, consults.m_measure_assessment_dropdown, pm.getParamV("ASSESSMENT"));
        base.setTextArea_Keys(consults.m_measure_notes, pm.getParamV("NOTES"));
        yield consults.m_measure_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data in Consult page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.setTextArea_Keys(consults.m_consult_medication_notes, pm.getParamV("TREATMENT_SUGGESTIONS"));
        //await consults.m_consult_medication_notes.sendKeys(protractor.Key.ESCAPE);
        yield consults.m_consult_medication_notes.sendKeys(protractor_1.protractor.Key.TAB);
        protractor_1.browser.sleep(3000);
        var notesPresent = "NO";
        if (consults.m_measure_notes.length > 0) {
            notesPresent = "YES";
        }
        base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('take action for the consult', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        if (pm.getParamH("Button_to_click") == ("Publish")) {
            protractor_1.browser.sleep(3000);
            //await browser.actions().mouseMove(consults.m_publish_btn).perform();
            base.WaitforElementClickable(consults.m_publish_btn);
            yield consults.m_publish_btn.click();
            protractor_1.browser.sleep(5000);
            yield protractor_1.browser.getTitle().then(function (text) {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        }
        else if (pm.getParamH("Button_to_click") == ("Discard")) {
            yield consults.m_discard_btn.click();
            protractor_1.browser.sleep(3000);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify data in Consults Page3', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        let date = new Date();
        var cdate = moment(date).format("MM/DD/YYYY");
        //var m_consult_detais_diagnosis=element(by.xpath(consults.m_consult_detais_diagnosis_str)).getText();
        pm.dataTableV(dataTable);
        base.compareValues('CONSULT_TYPE', yield consults.m_consult_details_consult_type.getText(), pm.getParamV("CONSULT_TYPE"));
        base.compareValues_referrals('DATE_CREATED', yield consults.m_consult_details_date_created.getText(), cdate);
        //console.log('Dates...>',await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
        base.compareValues_referrals('DATE_SUBMITTED', yield consults.m_consult_details_date_submitted.getText(), cdate);
        base.compareValues('CONSULT_STATUS', yield consults.m_consult_details_status.getText(), pm.getParamV("CONSULT_STATUS"));
        //console.log('11111..toFixed.>' ,JSON.stringify(await consults.m_consult_detais_diagnosis.getText()))
        base.compareValues('DIAGNOSIS_TYPE', pm.getParamV("DIAGNOSIS_TYPE").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_detais_diagnosis.getText())), pm.getParamV("DIAGNOSIS_TYPE"));
        base.compareValues('DIAGNOSIS_CODE', pm.getParamV("DIAGNOSIS_CODE").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_details_diagnosis_code.getText())), pm.getParamV("DIAGNOSIS_CODE"));
        base.compareValues('DIAGNOSIS_STATUS', pm.getParamV("DIAGNOSIS_STATUS").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_details_diagnosis_status.getText())), pm.getParamV("DIAGNOSIS_STATUS"));
        base.compareValues('MPLAN_NAME', pm.getParamV("MPLAN_NAME").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_details_mp_name.getText())), pm.getParamV("MPLAN_NAME"));
        base.compareValues('MPLAN_DESC', pm.getParamV("MPLAN_DESC").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_details_mp_desc.getText())), pm.getParamV("MPLAN_DESC"));
        base.compareValues('TREATMENT_SUGGESTIONS', yield consults.m_consult_details_med_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
        var notesPresent = "NO";
        if (consults.m_consult_details_cons_notes.length > 0) {
            notesPresent = "YES";
        }
        base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
        const val = base.getValue();
        //console.log('vall----> ', val);
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('verify data in Consults Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        let date = new Date();
        var cdate = moment(date).format("MM/DD/YYYY");
        //var m_consult_detais_diagnosis=element(by.xpath(consults.m_consult_detais_diagnosis_str)).getText();
        pm.dataTableV(dataTable);
        base.compareValues('CONSULT_TYPE', yield consults.m_consult_details_consult_type.getText(), pm.getParamV("CONSULT_TYPE"));
        base.compareValues_referrals('DATE_CREATED', yield consults.m_consult_details_date_created.getText(), cdate);
        //console.log('Dates...>',await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
        base.compareValues_referrals('DATE_SUBMITTED', yield consults.m_consult_details_date_submitted.getText(), cdate);
        base.compareValues('CONSULT_STATUS', yield consults.m_consult_details_status.getText(), pm.getParamV("CONSULT_STATUS"));
        //console.log('11111..toFixed.>' ,JSON.stringify(await consults.m_consult_detais_diagnosis.getText()))
        base.compareValues('DIAGNOSIS_TYPE', pm.getParamV("DIAGNOSIS_TYPE").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_detais_diagnosis_str.replace("$replaceToken$", pm.getParamV("DIAGNOSIS_TYPE")))).getText())), pm.getParamV("DIAGNOSIS_TYPE"));
        base.compareValues('DIAGNOSIS_CODE', pm.getParamV("DIAGNOSIS_CODE").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_diagnosis_code_str.replace("$replaceToken$", pm.getParamV("DIAGNOSIS_CODE")))).getText())), pm.getParamV("DIAGNOSIS_CODE"));
        base.compareValues('DIAGNOSIS_STATUS', pm.getParamV("DIAGNOSIS_STATUS").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_diagnosis_status_str.replace("$replaceToken$", pm.getParamV("DIAGNOSIS_STATUS")))).getText())), pm.getParamV("DIAGNOSIS_STATUS"));
        base.compareValues('MPLAN_NAME', pm.getParamV("MPLAN_NAME").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_mp_name_str.replace("$replaceToken$", pm.getParamV("MPLAN_NAME")))).getText())), pm.getParamV("MPLAN_NAME"));
        base.compareValues('MPLAN_DESC', pm.getParamV("MPLAN_DESC").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_mp_desc_str.replace("$replaceToken$", pm.getParamV("MPLAN_DESC")))).getText())), pm.getParamV("MPLAN_DESC"));
        base.compareValues('TREATMENT_SUGGESTIONS', yield consults.m_consult_details_med_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
        var notesPresent = "NO";
        if (consults.m_consult_details_cons_notes.length > 0) {
            notesPresent = "YES";
        }
        base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
        const val = base.getValue();
        //console.log('vall----> ', val);
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('verify data in Existing Consults Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        let date = new Date();
        var cdate = moment(date).format("MM/DD/YYYY");
        //var m_consult_detais_diagnosis=element(by.xpath(consults.m_consult_detais_diagnosis_str)).getText();
        pm.dataTableV(dataTable);
        base.compareValues('CONSULT_TYPE', yield consults.m_consult_details_consult_type.getText(), pm.getParamV("CONSULT_TYPE"));
        base.compareValues_referrals('DATE_CREATED', yield consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
        //console.log('Dates...>',await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
        base.compareValues_referrals('DATE_SUBMITTED', yield consults.m_consult_details_date_submitted.getText(), pm.getParamV("DATE_SUBMITTED"));
        base.compareValues('CONSULT_STATUS', yield consults.m_consult_details_status.getText(), pm.getParamV("CONSULT_STATUS"));
        //console.log('11111..toFixed.>' ,JSON.stringify(await consults.m_consult_detais_diagnosis.getText()))
        base.compareValues('DIAGNOSIS_TYPE', pm.getParamV("DIAGNOSIS_TYPE").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_detais_diagnosis_str.replace("$replaceToken$", pm.getParamV("DIAGNOSIS_TYPE")))).getText())), pm.getParamV("DIAGNOSIS_TYPE"));
        base.compareValues('DIAGNOSIS_CODE', pm.getParamV("DIAGNOSIS_CODE").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_diagnosis_code_str.replace("$replaceToken$", pm.getParamV("DIAGNOSIS_CODE")))).getText())), pm.getParamV("DIAGNOSIS_CODE"));
        base.compareValues('DIAGNOSIS_STATUS', pm.getParamV("DIAGNOSIS_STATUS").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_diagnosis_status_str.replace("$replaceToken$", pm.getParamV("DIAGNOSIS_STATUS")))).getText())), pm.getParamV("DIAGNOSIS_STATUS"));
        base.compareValues('MPLAN_NAME1', pm.getParamV("MPLAN_NAME1").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_details_mp_name.getText())), pm.getParamV("MPLAN_NAME1"));
        base.compareValues('MPLAN_DESC1', pm.getParamV("MPLAN_DESC1").trim() == "" ? "" : JSON.parse(JSON.stringify(yield consults.m_consult_details_mp_desc.getText())), pm.getParamV("MPLAN_DESC1"));
        base.compareValues('MPLAN_NAME2', pm.getParamV("MPLAN_NAME2").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_mp_name2.replace("$replaceToken$", pm.getParamV("MPLAN_NAME2")))).getText())), pm.getParamV("MPLAN_NAME2"));
        base.compareValues('MPLAN_DESC2', pm.getParamV("MPLAN_DESC2").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_mp_desc2.replace("$replaceToken$", pm.getParamV("MPLAN_DESC2")))).getText())), pm.getParamV("MPLAN_DESC2"));
        base.compareValues('MPLAN_NAME3', pm.getParamV("MPLAN_NAME3").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_mp_name2.replace("$replaceToken$", pm.getParamV("MPLAN_NAME3")))).getText())), pm.getParamV("MPLAN_NAME3"));
        base.compareValues('MPLAN_DESC3', pm.getParamV("MPLAN_DESC3").trim() == "" ? "" : JSON.parse(JSON.stringify(yield protractor_1.element(protractor_1.by.xpath(consults.m_consult_details_mp_desc2.replace("$replaceToken$", pm.getParamV("MPLAN_DESC3")))).getText())), pm.getParamV("MPLAN_DESC3"));
        base.compareValues('TREATMENT_SUGGESTIONS', yield consults.m_consult_details_med_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
        var notesPresent = "NO";
        if (consults.m_consult_details_cons_notes.length > 0) {
            notesPresent = "YES";
        }
        base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
        const val = base.getValue();
        //console.log('vall----> ', val);
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on view details in consults list page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(3000);
        let date = new Date();
        var cdate = moment(date).format("MM/DD/YYYY");
        pm.dataTableV(dataTable);
        var m_consult_list_row = consults.m_consult_list_row_str.replace("$replaceToken$", pm.getParamV("CONSULT_CREATED_DATE"));
        //console.log('Xpath...>', await element(by.xpath(m_consult_list_row)));
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(m_consult_list_row))).perform();
        //base.moveCursorToAnElement(consults.m_consult_list_row);
        var m_consult_list_row_edit = consults.m_consult_list_row_edit_str.replace("$replaceToken$", pm.getParamV("CONSULT_CREATED_DATE"));
        //console.log('Xpath...>', await element(by.xpath(m_consult_list_row_edit)));
        //browser.actions().mouseMove(await element(by.xpath(m_consult_list_row))).perform();
        yield protractor_1.element(protractor_1.by.xpath(m_consult_list_row_edit)).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            base.UrlContains("detail");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('wait for a minute', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await consults.m_consult_medication_notes.click();
        protractor_1.browser.sleep(9000);
        protractor_1.browser.navigate().back();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Tasks Tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.actions().mouseMove(consults.m_publish_btn).perform();
        //await element(by.xpath(consults.membHeader)).click()
        yield protractor_1.element(protractor_1.by.xpath("//div[@role='tab'][contains(.,'Tasks')]")).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Edit the top consult in the list', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        //var m_consult_list_row = consults.m_consult_list_row_str.replace("$replaceToken$",pm.getParamV("CONSULT_CREATED_DATE"));
        //console.log('Xpath...>', await element(by.xpath(m_consult_list_row)));
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(consults.consult_first))).perform();
        //base.moveCursorToAnElement(consults.m_consult_list_row);
        var m_consult_list_row_edit = consults.m_consult_row_edit.replace("$replaceToken$", pm.getParamV("Status"));
        //console.log('Xpath...>', await element(by.xpath(m_consult_list_row_edit)));
        //browser.actions().mouseMove(await element(by.xpath(m_consult_list_row))).perform();
        yield protractor_1.element(protractor_1.by.xpath(m_consult_list_row_edit)).click();
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //base.UrlContains("detail");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Data in the Notes', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues('TREATMENT_SUGGESTIONS', yield consults.m_consult_draft_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
        protractor_1.browser.navigate().refresh();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyc0NvbnN1bHRzVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbWVtYmVyc0NvbnN1bHRzVGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBOEQ7QUFDOUQsdUNBQW9DO0FBQ3BDLG9FQUFpRTtBQUNqRSx5REFBc0Q7QUFDdEQsc0VBQW1FO0FBQ25FLHdEQUFxRDtBQUNyRCxnREFBd0I7QUFDeEIsdURBQW9EO0FBRXBELElBQUksUUFBUSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDN0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBR2pDLGVBQUksQ0FBQyxzQkFBc0IsRUFBRTs7UUFFNUIsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLHNC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QUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxRQUFRLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hNLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxRQUFRLENBQUMsZ0NBQWdDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzlNLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxRQUFRLENBQUMsa0NBQWtDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3ROLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMs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