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
const NewMember_1 = require("../pageObjects/NewMember");
const ParamManager_1 = require("../Util/ParamManager");
const MMRController_1 = require("../Util/MMRController");
const chai_1 = __importDefault(require("chai"));
let NewMem = new NewMember_1.NewMember();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let pm = new ParamManager_1.ParamManager();
let mmrc = new MMRController_1.MMRController();
var pg = require("pg");
// var client = new pg.Client({
//   user: "mmr_staging@mmr-staging-pgsql",
//   password: "j9Hc(lg9U^Z4!MPj",
//   database: "mmr_api_staging",
//   port: 5432,
//   host: "mmr-staging-pgsql.postgres.database.azure.com",
//   ssl: true
// });
cucumber_1.Then("click on Add Member", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield NewMem.ml_addMember.click();
        //base.UrlContains("add");
        base.WaitforElementPresence(yield protractor_1.element(protractor_1.By.tagName("page-heading")));
    });
});
cucumber_1.Then("Enter data in Add Member Page", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield NewMem.am_fname.sendKeys(pm.getParamH("fname"));
        yield NewMem.am_mname.sendKeys(pm.getParamH("mname"));
        base.client.connect();
        var rs = yield base.client.query("SELECT * from members where last_name LIKE 'MEMB%' order by id desc");
        console.log("rs...>", rs.rows);
        var lastName = rs.rows[0]["last_name"].replace(/" "/g, "");
        let idVal = parseInt(lastName.substring(4));
        idVal = idVal + 1;
        lastName = "MEMB" + idVal;
        yield NewMem.am_lname.sendKeys(lastName);
        var emailPrepared = "MMR." + lastName + "@mind.com";
        yield NewMem.am_email.sendKeys(emailPrepared);
        rs = yield base.client.query("select max(mobile_number) as mobile_number from members where mobile_number like '2257%'");
        console.log("rsssssssssss...>", rs);
        let mobilePrepared = parseInt(rs.rows[0]["mobile_number"]) + 1;
        yield NewMem.am_mobile.sendKeys(mobilePrepared);
        base.setDateField(NewMem.am_bob, pm.getParamH("dob"));
        yield protractor_1.element(protractor_1.by.xpath(NewMem.gender)).click();
        var am_gender_dropdown = NewMem.am_gender_dropdown_str.replace("$gender$", pm.getParamH("gender"));
        yield protractor_1.element(protractor_1.by.xpath(am_gender_dropdown)).click();
        yield protractor_1.element(protractor_1.by.xpath(NewMem.marital_status)).click();
        var am_marital_status_dropdown = NewMem.am_marital_status_dropdown_str.replace("$marital_status$", pm.getParamH("marital_status"));
        yield protractor_1.element(protractor_1.by.xpath(am_marital_status_dropdown)).click();
        yield NewMem.am_address.click();
        yield NewMem.am_address.sendKeys(pm.getParamH("address"));
        protractor_1.browser.sleep(2000);
        yield NewMem.m_nm_selectaddress.click();
        protractor_1.browser.sleep(2000);
        yield NewMem.am_hphone.sendKeys(pm.getParamH("home_phone"));
        yield NewMem.am_ophone.sendKeys(pm.getParamH("office_phone"));
        mmrc.setCurrentUser(pm.getParamH("fname") + " " + lastName);
        yield NewMem.am_submit.click();
        protractor_1.browser.sleep(8000);
        //await NewMem.m_nm_useaddress.click();
        //await element(by.xpath("//mat-radio-button[@id='mat-radio-4']//div[@class='mat-radio-outer-circle']")).click();
        // await element(by.xpath("//button[@color='primary'][contains(.,'Use Address')]")).click();
        base.UrlContains("cheatsheet");
        //console.log("save button clicked");
        //console.log("getuser...>", mmrc.getCurrentUser);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        //browser.sleep(10000);
    });
});
cucumber_1.Then('Click on Add Program in Member\'s ID Bar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //browser.sleep(3000);
        yield NewMem.m_addProgram.click();
        //browser.sleep(3000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        yield protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Cancel')]")).click();
        protractor_1.browser.sleep(3000);
        yield NewMem.m_addProgram.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // base.WaitforalertIsPresent()
    });
});
//   Then('Click on Add Program in Member\'s ID Bar', async function () {
// 	await element(by.xpath("//*[@id='sidenav-content']/mmr-member-container/div/mmr-member-detail/div/div[1]/div[1]/mmr-programs-widget/div/div[2]")).click();
// 	await browser.getTitle().then(function(text) {
// 		expect(text).to.equal("mMR");
// 		//browser.sleep(10000);
// 	  });
// 	// base.WaitforalertIsPresent()
//   });
cucumber_1.Then('Navigate to Provider Look Up', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (mmrc.getProvLookUp() == "NO") {
            return;
        }
        // if(browser.params.mmrlogin.setCurrentUser=="NO") {
        // 	return;
        // }
        base.setRadioField(NewMem.ap_radio_add_type, "Provider");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(10000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data in Add Program Provider Look Up Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mmrc.getProvLookUp() == "NO") {
            return;
        }
        // if(browser.params.mmrlogin.setCurrentUser=="NO") {
        // 	return;
        // }
        pm.dataTableH(dataTable);
        base.setDropdownFieldSearch(NewMem.ap_provider, NewMem.ap_provider_dropdown, pm.getParamH("provider"));
        base.setDateField(NewMem.ap_identified_on, pm.getParamH("identified_on"));
        if (mmrc.getCurrentUser().trim() != ("")) {
            base.setInputField(NewMem.ap_medica_ID, mmrc.getCurrentUser().replace(/" "/g, ""));
            base.setInputField(NewMem.ap_EMR_ID, "EID" + mmrc.getCurrentUser().replace(/" "/g, ""));
            base.setInputField(NewMem.ap_alternate_identifier, "AID" + mmrc.getCurrentUser().replace(/" "/g, ""));
        }
        else {
            base.setInputField(NewMem.ap_medica_ID, pm.getParamH("medicaid"));
            base.setInputField(NewMem.ap_EMR_ID, "EID" + pm.getParamH("medicaid"));
            base.setInputField(NewMem.ap_alternate_identifier, "AID" + pm.getParamH("medicaid"));
            //console.log('ap_alternate_identifier...>' ,"AID"+pm.getParamH("medicaid"));
        }
        base.setDropdownField(NewMem.ap_status, NewMem.ap_status_dropdown, pm.getParamH("status"));
        base.setInputField(NewMem.ap_ins_note, pm.getParamH("insurance_note"));
        yield NewMem.ap_save.click();
        base.UrlContains("cheatsheet");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Navigate to Program Look Up', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (mmrc.getProvLookUp() == "YES") {
            return;
        }
        // if(browser.params.mmrlogin.setCurrentUser=="YES") {
        // 	return;
        // }
        base.setRadioField(NewMem.ap_radio_add_type, "Program");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter data in Add Program page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mmrc.getProvLookUp() == "YES") {
            return;
        }
        // if(browser.params.mmrlogin.setCurrentUser=="YES") {
        // 	return;
        // }
        pm.dataTableH(dataTable);
        base.setDropdownFieldSearch(NewMem.ap_program, NewMem.ap_program_dropdown, pm.getParamH("program"));
        base.setDropdownFieldSearch(NewMem.ap_practice, NewMem.ap_practice_dropdown, pm.getParamH("practice"));
        base.setDropdownFieldSearch(NewMem.ap_provider, NewMem.ap_provider_dropdown, pm.getParamH("provider"));
        base.setDateField(NewMem.ap_identified_on, pm.getParamH("identified_on"));
        if (mmrc.getCurrentUser().trim() != ("")) {
            base.setInputField(NewMem.ap_medica_ID, mmrc.getCurrentUser().replace(/" "/g, ""));
            base.setInputField(NewMem.ap_EMR_ID, "EID" + mmrc.getCurrentUser().replace(/" "/g, ""));
            base.setInputField(NewMem.ap_alternate_identifier, "AID" + mmrc.getCurrentUser().replace(/" "/g, ""));
        }
        else {
            base.setInputField(NewMem.ap_medica_ID, pm.getParamH("medicaid"));
            base.setInputField(NewMem.ap_EMR_ID, "EID" + pm.getParamH("medicaid"));
            base.setInputField(NewMem.ap_alternate_identifier, "AID" + pm.getParamH("medicaid"));
            //console.log('ap_alternate_identifier...>' ,"AID"+pm.getParamH("medicaid"));
        }
        base.setDropdownField(NewMem.ap_status, NewMem.ap_status_dropdown, pm.getParamH("status"));
        base.setInputField(NewMem.ap_ins_note, pm.getParamH("insurance_note"));
        yield NewMem.ap_save.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //base.UrlContains("care-team");
            //browser.sleep(10000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Add Care Team', function () {
    return __awaiter(this, void 0, void 0, function* () {
        base.WaitforElementClickable(NewMem.m_ct_Add);
        yield NewMem.m_ct_Add.click();
        // await browser.getTitle().then(function(text) {
        // 	expect(text).to.equal("mMR");
        //   });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Data in Care Team Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield NewMem.m_ct_role.click();
        var m_ct_role_dropdown = NewMem.m_ct_role_dropdown_str.replace("$role$", pm.getParamH("Role"));
        //browser.sleep(2000);
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_ct_role_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_ct_role_dropdown)).click();
        yield NewMem.m_ct_member.click();
        var m_ct_member_dropdown = NewMem.m_ct_member_dropdown_str.replace("$member$", pm.getParamH("MemberName"));
        //browser.sleep(2000);
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_ct_member_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_ct_member_dropdown)).click();
        //browser.sleep(2000);
        //base.setDateField(NewMem.m_ct_to_date, pm.getParamH("toDate"));
        yield NewMem.m_ct_primary.click();
        yield NewMem.m_ct_save.click();
        //base.WaitforElementClickable(NewMem.m_ct_Add);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(15000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVuV2l0aE5ld01lbWJlclRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL1J1bldpdGhOZXdNZW1iZXJUZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWIsdUNBQWdDO0FBQ2hDLDJDQUFzRDtBQUN0RCx1Q0FBb0M7QUFDcEMsd0RBQXFEO0FBQ3JELHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFFdEQsZ0RBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzdCLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsK0JBQStCO0FBQy9CLDJDQUEyQztBQUMzQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLGdCQUFnQjtBQUNoQiwyREFBMkQ7QUFDM0QsY0FBYztBQUNkLE1BQU07QUFFTixlQUFJLENBQUMscUJBQXFCLEVBQUU7O1FBQzFCLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFLFVBQWUsU0FBUzs7UUFDNUQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztR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