"use strict";

import { Then } from "cucumber";
import { browser, element, by, By, protractor, ElementFinder } from "protractor";
import { Base } from "../Util/Base";
import { E2EMember } from "../pageObjects/E2EMember";
import { ParamManager } from "../Util/ParamManager";
import { MMRController } from "../Util/MMRController";

import chai from "chai";
var path = require('path');
let E2EMem = new E2EMember();
let base = new Base();
var expect = chai.expect;
let pm = new ParamManager();
let mmrc = new MMRController();
var pg = require("pg");


Then('click on Add External Provider', async function () {
	base.WaitforElementClickable(E2EMem.m_ep_Add);
	await E2EMem.m_ep_Add.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('Enter Data in External Provider Page', async function (dataTable) {

	pm.dataTableH(dataTable);
	base.setInputField(E2EMem.m_ep_name, pm.getParamH("Name"));

	await E2EMem.m_ep_pref.click();
	var m_ep_pref_dropdown = E2EMem.m_ep_pref_dropdown_str.replace("$pref$",pm.getParamH("Preference"));
	//browser.sleep(2000);
	base.WaitforElementPresence(element(by.xpath(m_ep_pref_dropdown)));
	await element(by.xpath(m_ep_pref_dropdown)).click();
	await E2EMem.m_ep_role.click();
	var m_ep_role_dropdown = E2EMem.m_ep_role_dropdown_str.replace("$role$",pm.getParamH("Role"));
	base.WaitforElementPresence(element(by.xpath(m_ep_role_dropdown)));
	await element(by.xpath(m_ep_role_dropdown)).click();
	base.setInputField(E2EMem.m_ep_phone, pm.getParamH("Phone"));
	base.setInputField(E2EMem.m_ep_email, pm.getParamH("Email"));
	await E2EMem.m_ep_address.sendKeys(pm.getParamH("Address"));
	//await element(By.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).click();
	await E2EMem.m_ep_address.sendKeys(protractor.Key.TAB);
	base.setInputField(E2EMem.m_ep_notes, pm.getParamH("Notes"));
	await E2EMem.m_ep_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

Then('click on Add Tasks', async function () {
	base.WaitforElementClickable(E2EMem.m_task_Add);
	await E2EMem.m_task_Add.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
});
	
Then('Enter Data in Tasks Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_task_type.click();
	var m_task_type_dropdown = E2EMem.m_task_type_dropdown_str.replace("$type$",pm.getParamH("Type"));
	browser.sleep(3000);
	base.WaitforElementPresence(element(by.xpath(m_task_type_dropdown)));
	await element(by.xpath(m_task_type_dropdown)).click();
	await E2EMem.m_task_careextender.click();
	browser.sleep(3000);
	var m_task_careextender_dropdown = E2EMem.m_task_careextender_dropdown_str.replace("$careextender$",pm.getParamH("CareExtender"));
	base.WaitforElementPresence(element(by.xpath(m_task_careextender_dropdown)));
	browser.sleep(3000);
	await element(by.xpath(m_task_careextender_dropdown)).click();
	base.setInputField(E2EMem.m_task_description, pm.getParamH("Description"));
	base.setDateField(E2EMem.m_task_goaldate, pm.getParamH("goalDate"));
	await E2EMem.m_task_save.click();
	base.UrlContains("tasks");
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(8000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
			
});

Then('click on Add Referral', async function () {
	base.WaitforElementClickable(E2EMem.m_referral_add);
	await E2EMem.m_referral_add.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('Enter Data in Referral Page', async function (dataTable) {
	
	
	pm.dataTableH(dataTable);
	base.setDropdownField(E2EMem.m_referral_type,E2EMem.m_referral_ref_type_dropdown,pm.getParamH("Type"));
	if(pm.getParamH("providerInNetwork").trim()!=(""))
	base.setCheckboxField(E2EMem.m_referral_isProvInNetwork, pm.getParamH("providerInNetwork"));
	base.WaitforElementPresence(E2EMem.m_referral_ref_type);
	if(pm.getParamH("providerType").trim()!=(""))
	base.setDropdownField(E2EMem.m_referral_ref_type,E2EMem.m_referral_ref_type_dropdown,pm.getParamH("providerType"));
	if(pm.getParamH("specialtyType").trim()!=(""))
	base.setInputField(E2EMem.m_referral_specialty_type, pm.getParamH("specialtyType"));
	base.setInputField(E2EMem.m_referral_name, pm.getParamH("Name"));
	base.setDateField(E2EMem.m_referral_date, pm.getParamH("ReferralDate"));
	base.setInputField(E2EMem.m_referral_contact, pm.getParamH("ContactInfo"));
	base.setInputField(E2EMem.m_referral_direct_name, pm.getParamH("DirectName"));
	base.setInputField(E2EMem.m_referral_direct_contact, pm.getParamH("DirectContactInfo"));
	base.setDateField(E2EMem.m_referral_appointment_date, pm.getParamH("AppointmentDate"));
	base.setDropdownField(E2EMem.m_referral_stauts_type,E2EMem.m_referral_status_type_dropdown,pm.getParamH("status"));
	base.setCheckboxField(E2EMem.m_referral_reasonableTime,pm.getParamH("reasonableTime"));
	base.setCheckboxField(E2EMem.m_referral_reminder,pm.getParamH("reminder"));
	base.setCheckboxField(E2EMem.m_referral_assistance,pm.getParamH("assitance"));
	await E2EMem.m_referral_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
		
  });

  Then('verify data in Referrals Page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues_referrals("REFERRAL_TYPE", await E2EMem.m_referral_list_type.getText(), pm.getParamV("REFERRAL_TYPE"));
	base.compareValues_referrals("REFERRAL_DETAILS", await E2EMem.m_referral_list_details.getText(), pm.getParamV("REFERRAL_DETAILS"));
	base.compareValues_referrals("REFERRAL_NAME", await E2EMem.m_referral_list_name.getText(), pm.getParamV("REFERRAL_NAME"));
	base.compareValues_referrals("APPOINTMENT_DATE", await E2EMem.m_referral_list_appointment_date.getText(), pm.getParamV("APPOINTMENT_DATE"));
	base.compareValues_referrals("REFERRAL_DATE", await E2EMem.m_referral_list_referral_date.getText(), pm.getParamV("REFERRAL_DATE"));
	base.compareValues_referrals("STATUS", await E2EMem.m_referral_list_status.getText(), pm.getParamV("STATUS"));
	base.compareValues_referrals("REMINDER", await E2EMem.m_referral_list_reminder.getText(), pm.getParamV("REMINDER"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	
  });

  Then('Click on Change Status', async function () {
	browser.sleep(3000);
	await E2EMem.mp_change_status.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('Click on Status Container', async function (dataTable) {

	pm.dataTableV(dataTable);
	var mp_status_container = E2EMem.mp_status_container_str.replace("$replaceToken$",pm.getParamV("STATUS_NAME"));
   await element(by.xpath(mp_status_container)).click();
   const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	
  });


  Then('enter data in update status pop up', async function (dataTable) {

	pm.dataTableV(dataTable);
	if(pm.getParamV("REASON")!==(""))
	base.setDropdownField(E2EMem.ml_lane_update_reason,E2EMem.ml_lane_update_reason_dropdown,pm.getParamV("REASON"));
	base.setTextArea_Keys(E2EMem.ml_lane_update_notes,pm.getParamV("NOTES"));
	await E2EMem.ml_lane_update_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('click on Add Benefits', async function () {
	await E2EMem.m_benefit_add.click();

  });

  Then('Enter Data in Benefits Page', async function (dataTable) {

	pm.dataTableH(dataTable);
	await E2EMem.m_benefit_type.click();
	var m_benefittype_dropdown = E2EMem.m_benefittype_dropdown_str.replace("$benefittype$",pm.getParamH("Benefit_Type"));
	base.WaitforElementPresence(element(by.xpath(m_benefittype_dropdown)));
	await element(by.xpath(m_benefittype_dropdown)).click();
	base.setInputField(E2EMem.m_benefit_idNum, pm.getParamH("ID_Num"));
	base.setInputField(E2EMem.m_benefit_amount, pm.getParamH("Amount"));
	await E2EMem.m_benefit_expiration_date.click();
	await E2EMem.m_benefit_expiration_date.sendKeys(pm.getParamH("Expiration_date"));
	await E2EMem.m_benefit_expiration_date.sendKeys(protractor.Key.ESCAPE);
	await E2EMem.m_benefit_hav_orig_copy.click();
	var m_benefit_hav_orig_copy_dropdown = E2EMem.m_benefit_hav_orig_copy_dropdown_str.replace("$hav_orig_copy$",pm.getParamH("Have_orig_copy"));
	base.WaitforElementPresence(element(by.xpath(m_benefit_hav_orig_copy_dropdown)));
	await element(by.xpath(m_benefit_hav_orig_copy_dropdown)).click();
	await E2EMem.m_benefit_status.click();
	var m_benefit_status_dropdown = E2EMem.m_benefit_status_dropdown_str.replace("$status$",pm.getParamH("Status"));
	base.WaitforElementPresence(element(by.xpath(m_benefit_status_dropdown)));
	await element(by.xpath(m_benefit_status_dropdown)).click();
	base.setInputField(E2EMem.m_benefit_notes, pm.getParamH("Notes"));
	await E2EMem.m_benefit_save.click();
	
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//base.WaitforElementPresence(E2EMem.m_open_document_section);
		browser.sleep(5000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	
  });

  Then('Expand Document Section', async function () {
	await E2EMem.m_open_document_section.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

  });

  Then('click on Add Document in Benefits page', async function () {
	await E2EMem.m_add_document.click();
	//base.WaitforElementPresence(E2EMem.m_doc_file_upload);
		//browser.sleep(3000);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	
  });

  Then('Enter data in Benefits Document Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_doc_file_upload.sendKeys(pm.getParamH("file_path"));
	//await E2EMem.m_doc_file_upload.click();
	console.log('file path ...>' ,pm.getParamH("file_path") );
	// element(by.name("datafile")).then(async function(el: ElementFinder){
	// 	browser.executeScript("arguments[0].scrollIntoView(true);",el);
	// 	el.sendKeys(pm.getParamH("file_path"));
	// 	browser.sleep(2000);
	 	await E2EMem.m_doc_file_name.clear();
	 	base.setInputField(E2EMem.m_doc_file_name, pm.getParamH("name"));
	 	await E2EMem.m_doc_save.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(6000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	});

	

  Then('verify data in Benefits Page', async function (dataTable) {


	pm.dataTableV(dataTable);
	base.compareValues_referrals("DOC_TYPE", await E2EMem.m_benefits_list_type.getText(), pm.getParamV("DOC_TYPE"));
	base.compareValues_referrals("ID_NUMBER", await E2EMem.m_benefits_list_id.getText(), pm.getParamV("ID_NUMBER"));
	base.compareValues_referrals("AMOUNT", await E2EMem.m_benefits_list_amount.getText(), pm.getParamV("AMOUNT"));
	base.compareValues_referrals("STATUS", await E2EMem.m_benefits_list_status.getText(), pm.getParamV("STATUS"));
	base.compareValues_referrals("EXPIRATION_DATE", await E2EMem.m_benefits_list_expiration.getText(), pm.getParamV("EXPIRATION_DATE"));
	base.compareValues_referrals("ORIGINAL_COPY", await E2EMem.m_benefits_list_copy.getText(), pm.getParamV("ORIGINAL_COPY"));
	base.compareValues_referrals("NOTES", await E2EMem.m_benefits_list_notes.getText(), pm.getParamV("NOTES"));
	base.compareValues_referrals("DOCUMENTS", await E2EMem.m_benefits_list_documents.getText(), pm.getParamV("DOCUMENTS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	
  });

  Then('click on Add Care Gaps', async function () {
base.WaitforElementPresence(E2EMem.m_cg_Add);
	await E2EMem.m_cg_Add.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(2000);
	  });
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	// findElement(jsonData(objects,"m_cg_Add")).click();
	// 	addScreenshot();
  });

  Then('Enter Data in CareGaps Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	//base.WaitforElementPresence(E2EMem.m_cg_caregaptype);
	await E2EMem.m_cg_caregaptype.click();
	var m_cg_caregaptypedropdown = E2EMem.m_cg_caregaptypedropdown_str.replace("$caregaptype$",pm.getParamH("Type"));
	base.WaitforElementPresence(element(by.xpath(m_cg_caregaptypedropdown)));
	await element(by.xpath(m_cg_caregaptypedropdown)).click();
	await E2EMem.m_cg_identifiedon.click();
	await E2EMem.m_cg_identifiedon.sendKeys(pm.getParamH("Identifid_On"));
	await E2EMem.m_cg_identifiedon.sendKeys(protractor.Key.ESCAPE);

	await E2EMem.m_cg_exp_res_date.click();
	await E2EMem.m_cg_exp_res_date.sendKeys(pm.getParamH("Expected_Resolution"));
	await E2EMem.m_cg_exp_res_date.sendKeys(protractor.Key.ESCAPE);
	await E2EMem.m_cg_exp_res_date.sendKeys(protractor.Key.TAB);
	base.setInputField(E2EMem.m_cg_desc, pm.getParamH("Description"));
	//await E2EMem.m_cg_desc.sendKeys(protractor.Key.TAB);
	//browser.sleep(3000);
	await E2EMem.m_cg_save.click();
	//await element(by.xpath("/p-toastitem/div/div")).click();
	browser.sleep(15000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("care_gaps")
		
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
		
  });

  Then('Click on Expand in Care Gaps Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	var m_cg_list = E2EMem.m_cg_list_str.replace("$rowToFind$", pm.getParamH("rowToFind"));
	base.WaitforElementPresence(element(by.xpath(m_cg_list)));
    base.moveCursorToAnElement(m_cg_list);
	await E2EMem.m_cg_list_expand.click();
	browser.sleep(2000);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	
  });

  Then('Enter Data in Actions Taken', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_ak_status.click();
	base.scrollVerticalBy();
	var m_ak_status_dropdown = E2EMem.m_ak_status_dropdown_str.replace("$status$",pm.getParamH("Status"));
	base.WaitforElementPresence(element(by.xpath(m_ak_status_dropdown)));
	
	//base.moveCursorToAnElement(m_ak_status_dropdown);
	//base.scrollIntoView(element(by.xpath(m_ak_status_dropdown)));
	await element(by.xpath(m_ak_status_dropdown)).click();
	await E2EMem.m_ak_actiondate.click();
	await E2EMem.m_ak_actiondate.sendKeys(pm.getParamH("Action_Date"));
	await E2EMem.m_ak_actiondate.sendKeys(protractor.Key.ESCAPE);
	base.setInputField(E2EMem.m_ak_action_taken, pm.getParamH("Action_Taken"));
	await E2EMem.m_ak_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//base.UrlContains("care_gaps")
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	
  });

  Then('verify data in Actions Taken Section', async function (dataTable) {

	pm.dataTableV(dataTable);
	base.compareValues_referrals("ACTION_DATE", await E2EMem.m_action_list_date.getText(), pm.getParamV("ACTION_DATE"));
	base.compareValues_referrals("ACTION_TAKEN", await E2EMem.m_action_list_action_taken.getText(), pm.getParamV("ACTION_TAKEN"));
	base.compareValues_referrals("STATUS_CHANGED_TO", await E2EMem.m_action_list_status_changed_to.getText(), pm.getParamV("STATUS_CHANGED_TO"));
		
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	
	
  });

  Then('click on Add Contact', async function () {
	await E2EMem.m_add_contact.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('Enter Data in Family Contact Page', async function (dataTable) {
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
	await E2EMem.m_ak_save.click();
	browser.sleep(8000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//base.UrlContains("care_gaps")
		browser.sleep(4000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
 });

  Then('click on Add Release Agreement', async function () {
	await E2EMem.m_add_release_agreement.click();
	browser.sleep(4000);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	
  });

  Then('Enter data on Release Agreement', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_rel_file_upload.sendKeys(pm.getParamH("file_path"));
	//browser.sleep(2000);
	
	base.setDateField(E2EMem.m_rel_from_date, pm.getParamH("from_date"));
	await E2EMem.m_rel_from_date.sendKeys(protractor.Key.TAB);
	element.all(by.className("mat-checkbox-label")).each(function(eles, index) {
		eles.getText().then(function(text) {
			console.log(text);
			var contacts = pm.getParamH("contacts_csv").split(",");
			console.log('contacts --> ', contacts);
			for( let i=0;i<contacts.length;i++) {
		     		if(contacts[i]==text){
					var m_rel_contacts = E2EMem.m_rel_contacts_str.replace("$replaceToken$",text);
					console.log('m_rel_contacts...>',m_rel_contacts);
					browser.sleep(2000);
					base.setCheckboxField(element(by.xpath(m_rel_contacts)) ,"Yes");
					//browser.sleep(4000);
				}
			}
		});
});
	browser.sleep(3000);
	//await element(by.xpath(E2EMem.m_rel_add1)).click();
	await E2EMem.m_rel_add.click();
	browser.sleep(5000);
	// browser.navigate().refresh();
	// browser.sleep(5000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("contacts")
	   browser.sleep(4000);
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
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('verify data in Contacts page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("CONTACT NAME", await E2EMem.m_fc_list_name.getText(), pm.getParamV("NAME"));
	base.compareValues("CONTACT ADDRESS", await E2EMem.m_fc_list_address.getText(), pm.getParamV("ADDRESS"));
	base.compareValues("CONTACT PHONE", await E2EMem.m_fc_list_phone.getText(), pm.getParamV("PHONE"));
	base.compareValues("CONTACT EMAIL", await E2EMem.m_fc_list_email.getText(), pm.getParamV("EMAIL"));
	base.compareValues("CONTACT RELATIONSHIP", await E2EMem.m_fc_list_relation.getText(), pm.getParamV("RELATIONSHIP"));
	// base.compareValues("CONTACT RELEASE", await E2EMem.m_fc_list_release.getText(), pm.getParamV("RELEASE"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('verify data in Release Agreements page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("DOCUMENT NAME", await E2EMem.m_release_agreement_list_doc_name.getText(), pm.getParamV("DOCUMENT_NAME"));
	base.compareValues("VALID FROM", await E2EMem.m_release_agreement_list_valid_from.getText(), pm.getParamV("VALID_FROM"));
	base.compareValues("VALID TO", await E2EMem.m_release_agreement_list_valid_to.getText(), pm.getParamV("VALID_TO"));
	base.compareValues("APPLIES TO", await E2EMem.m_release_agreement_list_applies_to.getText(), pm.getParamV("APPLIES_TO"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('click on Add Hospital Visit', async function () {
	await E2EMem.m_hv_add_hosp_visit.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

  });

  Then('Enter Data in Add Hospital Visit Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_hv_stay.click();
	var m_hv_stay_dropdown = E2EMem.m_hv_stay_dropdown_str.replace("$stay$",pm.getParamH("Stay"));
	base.WaitforElementPresence(element(by.xpath(m_hv_stay_dropdown)));
	await element(by.xpath(m_hv_stay_dropdown)).click();
	base.setInputField(E2EMem.m_hv_name, pm.getParamH("HospitalName"));
	base.setInputField(E2EMem.m_hv_unit, pm.getParamH("HospitalUnit"));
	base.setInputField(E2EMem.m_hv_reason, pm.getParamH("Reason"));
	await E2EMem.m_hv_start_date.click();
	await E2EMem.m_hv_start_date.sendKeys(pm.getParamH("startDate"));
	await E2EMem.m_hv_start_date.sendKeys(protractor.Key.ESCAPE);
	await E2EMem.m_hv_end_date.click();
	await E2EMem.m_hv_end_date.sendKeys(pm.getParamH("endDate"));
	await E2EMem.m_hv_end_date.sendKeys(protractor.Key.ESCAPE);
	await E2EMem.m_ak_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("hospital_visits")
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('verify data in Hospital Visits', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("HOSPITAL_STAY", await E2EMem.m_hv_list_stay.getText(), pm.getParamV("HOSPITAL_STAY"));
	base.compareValues("HOSPITAL NAME", await E2EMem.m_hv_list_name.getText(), pm.getParamV("HOSPITAL_NAME"));
	base.compareValues("HOSPITAL UNIT", await E2EMem.m_hv_list_unit.getText(), pm.getParamV("HOSPITAL_UNIT"));
	base.compareValues("HOSPITAL START DATE", await E2EMem.m_hv_list_start.getText(), pm.getParamV("HOSPITAL_START_DATE"));
	base.compareValues("HOSPITAL END DATE", await E2EMem.m_hv_list_end.getText(), pm.getParamV("HOSPITAL_END_DATE"));
	base.compareValues("HOSPITAL REASON", await E2EMem.m_hv_list_reason.getText(), pm.getParamV("HOSPITAL_REASON"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('click on Add Office Visit', async function () {
	await E2EMem.m_ov_add_office_visit.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('Enter Data in Add Office Visit Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_ov_visit_date.click();
	await E2EMem.m_ov_visit_date.sendKeys(pm.getParamH("visitDate"));
	await E2EMem.m_ov_visit_date.sendKeys(protractor.Key.ESCAPE);
	base.setInputField(E2EMem.m_ov_name, pm.getParamH("DoctorName"));
	base.setInputField(E2EMem.m_ov_speciality, pm.getParamH("Speciality"));
	base.setInputField(E2EMem.m_ov_reason, pm.getParamH("Reason"));
	await E2EMem.m_ov_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("hospital_visits")
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('verify data in Office Visits', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("VISIT DATE", await E2EMem.m_ov_list_visit_date.getText(), pm.getParamV("VISIT_DATE"));
	base.compareValues("DOCTOR NAME", await E2EMem.m_ov_list_doctor_name.getText(), pm.getParamV("DOCTOR_NAME"));
	base.compareValues("SPECIALTY", await E2EMem.m_ov_list_specialty.getText(), pm.getParamV("SPECIALTY"));
	base.compareValues("REASON", await E2EMem.m_ov_list_reason.getText(), pm.getParamV("REASON"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('click on Add Document', async function () {
	browser.sleep(2000);
	await E2EMem.m_add_document_btn.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('Enter data on add document page card view', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_doc_file_add.click();
	browser.sleep(2000);
	await E2EMem.m_doc_file_upload.sendKeys(pm.getParamH("file_path"));
	await E2EMem.m_doc_file_name_val.clear();
	base.setInputField(E2EMem.m_doc_file_name_val, pm.getParamH("name"));
	await E2EMem.m_ov_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("documents")
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");

  });

  Then('verify data in Documents page card view', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("DOCUMENT NAME", await E2EMem.m_doc_file_name_value.getText(), pm.getParamV("NAME"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('Change to List view', async function () {
	await E2EMem.m_doc_listview.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

  });

  Then('Enter data on add document page List view', async function (dataTable) {
	pm.dataTableH(dataTable);
	//await E2EMem.m_doc_file_add.click();
	await E2EMem.m_doc_file_upload.sendKeys(pm.getParamH("file_path"));
	await E2EMem.m_doc_file_name_val.clear();
	base.setInputField(E2EMem.m_doc_file_name_val, pm.getParamH("name"));
	await E2EMem.m_ov_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("documents")
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");

  });

  Then('verify data in Documents page List view', async function (dataTable) {
	pm.dataTableV(dataTable);
	var m_doc_list_name_val =await (element(by.xpath(E2EMem.m_doc_list_name_val_str.replace("$replaceToken$",pm.getParamV("NAME")))));
	
	base.compareValues("DOCUMENT NAME", await m_doc_list_name_val.getText(), pm.getParamV("NAME"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('click on Add Goal', async function () {
	await E2EMem.m_add_goal.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  
  Then('Enter data on goals page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.setInputField(E2EMem.m_goal_name, pm.getParamV("NAME"));
	base.setInputField(E2EMem.m_goal_resources, pm.getParamV("IDENTIFIED_RESOURCES"));
	base.setDateField(E2EMem.m_goal_identified_date, pm.getParamV("IDENTIFIED_DATE"));
	base.setDateField(E2EMem.m_goal_achieved_date, pm.getParamV("ACHIEVED_DATE"));
	base.setInputField(E2EMem.m_goal_comments, pm.getParamV("COMMENTS"));
	await E2EMem.m_ov_save.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("goals")
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('verify data in Goals page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("GOAL NAME", await E2EMem.m_goal_list_name.getText(), pm.getParamV("NAME"));
	base.compareValues("AVAILABLE RESOURCES", await E2EMem.m_goal_list_resources.getText(), pm.getParamV("RESOURCES"));
	base.compareValues("IDENTIFIED ON", await E2EMem.m_goal_list_identified_date.getText(), pm.getParamV("IDENTIFIED_ON"));
	base.compareValues("GOAL STATUS", await E2EMem.m_goal_list_achieved.getText(), pm.getParamV("STATUS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('click on Add Diagnoses', async function () {
	await E2EMem.m_diagnoses_add.click();
	base.WaitforElementPresence(await element(By.tagName("mmr-member-diagnosis-dialog")));
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

	// findElement(jsonData(objects,"m_diagnoses_add")).click();
	// addScreenshot();
  });

  Then('Enter Data in Diagnosis Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_diagnoses_code.click();
	await E2EMem.m_diagnoses_code.sendKeys(pm.getParamH("Code"));
	var m_dianoses_code_dropdown = E2EMem.m_dianoses_code_dropdown_str.replace("$replaceToken$",pm.getParamH("Code"));
	base.WaitforElementPresence(element(by.xpath(m_dianoses_code_dropdown)));
	await element(by.xpath(m_dianoses_code_dropdown)).click();
	//base.setDropdownField(E2EMem.m_diagnoses_code,E2EMem.m_dianoses_code_dropdown_str,pm.getParamH("Code"));
	base.setDropdownField(E2EMem.m_dianoses_sourcetype,E2EMem.m_dianoses_sourcetype_dropdown,pm.getParamH("source_type"));
	base.setDropdownField(E2EMem.m_dianoses_type,E2EMem.m_dianoses_type_dropdown,pm.getParamH("diagnosis_type"));
	await E2EMem.m_ov_save.click();
	//base.WaitforElementPresence(await element(By.tagName("section-title")));
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(5000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('verify data in Diagnosis Page', async function (dataTable) {
	browser.sleep(4000);
	pm.dataTableV(dataTable);
	base.compareValues("DIAGNOSIS", await E2EMem.m_diagnoses_list_dianosis.getText(), pm.getParamV("DIAGNOSIS"));
	base.compareValues("ICD_CODE", await E2EMem.m_diagnoses_list_code.getText(), pm.getParamV("ICD_CODE"));
	base.compareValues("DIAGNOSIS_NUM_OF_TIMES", await E2EMem.m_diagnoses_list_times.getText(), pm.getParamV("NUM_OF_TIMES"));
	base.compareValues("DIAGNOSIS_SOURCE_TYPE", await E2EMem.m_diagnoses_list_source.getText(), pm.getParamV("SOURCE_TYPE"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('Click on Edit Icon in Member Header', async function () {
	await E2EMem.m_demo_edit.click();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

	// sleep(4);
	// 	findElement(jsonData(objects,"m_demo_edit")).click();
	// 	addScreenshot();
  });

  Then('Enter Data in Demographics Page', async function (dataTable) {
	  pm.dataTableH(dataTable);
	  await E2EMem.m_demo_middlename.clear();
	  base.setInputField(E2EMem.m_demo_middlename, pm.getParamH("mname"));
	  await E2EMem.m_demo_dob.clear();
	  base.setDateField(E2EMem.m_demo_dob, pm.getParamH("dob"));

	  //await E2EMem.m_demo_gender.clear();
	//   await E2EMem.m_demo_gender.click();
	//   var m_demo_gender_dropdown = E2EMem.m_demo_gender_dropdown_str.replace("$replaceToken$",pm.getParamH("gender"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_gender_dropdown)));
	// await element(by.xpath(m_demo_gender_dropdown)).click();

	base.setDropdownField(E2EMem.m_demo_gender,E2EMem.m_demo_gender_dropdown_str,pm.getParamH("gender"));
	//await E2EMem.m_demo_marital.clear();
	// await E2EMem.m_demo_marital.click();
	// var m_demo_gender_dropdown = E2EMem.m_demo_gender_dropdown.replace("$replaceToken$",pm.getParamH("marital_status"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_gender_dropdown)));
	// await element(by.xpath(m_demo_gender_dropdown)).click();
   
	base.setDropdownField(E2EMem.m_demo_marital,E2EMem.m_demo_marital_dropdown_str,pm.getParamH("marital_status"));

	  await E2EMem.m_demo_address.clear();
	  await E2EMem.m_demo_address.sendKeys(pm.getParamH("address"));
	  browser.sleep(2000);
	  await element(By.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]")).click();
	  base.setInputField(E2EMem.m_demo_home, pm.getParamH("home_phone"));
	  await E2EMem.m_demo_office.clear();
	  base.setInputField(E2EMem.m_demo_office, pm.getParamH("office_phone"));
	  base.setInputField(E2EMem.m_demo_othername, pm.getParamH("other_name"));
	  base.setInputField(E2EMem.m_demo_preferredname, pm.getParamH("preferred_name"));
	  //browser.actions().sendKeys(protractor.Key.END).perform();
	  await E2EMem.m_demo_mailaddress.sendKeys(pm.getParamH("mail_address"));
	  //browser.sleep(2000);

	  //await E2EMem.m_demo_race.clear();
	//   await E2EMem.m_demo_race.click();
	// var m_demo_race_dropdown = E2EMem.m_demo_race_dropdown.replace("$replaceToken$",pm.getParamH("race"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_race_dropdown)));
	// await element(by.xpath(m_demo_race_dropdown)).click();

	  base.setDropdownField(E2EMem.m_demo_race,E2EMem.m_demo_race_dropdown_str,pm.getParamH("race"));
	 //await E2EMem.m_demo_ethnicity.clear();
	   await E2EMem.m_demo_ethnicity.click();
	 var m_demo_ethnicity_dropdown = E2EMem.m_demo_ethnicity_dropdown_str.replace("$replaceToken$",pm.getParamH("ethnicity"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_ethnicity_dropdown)));
	 await element(by.xpath(m_demo_ethnicity_dropdown)).click();
	  
	//base.setDropdownField1(E2EMem.m_demo_ethnicity,E2EMem.m_demo_ethnicity_dropdown_str,pm.getParamH("ethnicity"));
	browser.sleep(2000);
	//await E2EMem.m_demo_religion.clear();
	  await E2EMem.m_demo_religion.click();
	 var m_demo_religion_dropdown = E2EMem.m_demo_religion_dropdown_str.replace("$replaceToken$",pm.getParamH("religion"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_religion_dropdown)));
	 await element(by.xpath(m_demo_religion_dropdown)).click();
	
	  //base.setDropdownField1(E2EMem.m_demo_religion,E2EMem.m_demo_religion_dropdown_str,pm.getParamH("religion"));
	  browser.sleep(2000);
	  //await E2EMem.m_demo_lang.clear();
	   await E2EMem.m_demo_lang.click();
	 var m_demo_lang_dropdown = E2EMem.m_demo_lang_dropdown_str.replace("$replaceToken$",pm.getParamH("p_lang"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_lang_dropdown)));
	 await element(by.xpath(m_demo_lang_dropdown)).click();
	  //base.setDropdownField(E2EMem.m_demo_lang,E2EMem.m_demo_lang_dropdown_str,pm.getParamH("p_lang"));
	  browser.sleep(2000);
	  //await E2EMem.m_demo_eng_read.clear();
	   await E2EMem.m_demo_eng_read.click();
	 var m_demo_eng_read_dropdown = E2EMem.m_demo_eng_read_dropdown_str.replace("$replaceToken$",pm.getParamH("eng_read"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_eng_read_dropdown)));
	 await element(by.xpath(m_demo_eng_read_dropdown)).click();
	  //base.setDropdownField(E2EMem.m_demo_eng_read,E2EMem.m_demo_eng_read_dropdown_str,pm.getParamH("eng_read"));
	  browser.sleep(2000);
	  //await E2EMem.m_demo_eng_write.clear();
	   await E2EMem.m_demo_eng_write.click();
	 var m_demo_eng_write_dropdown = E2EMem.m_demo_eng_write_dropdown_str.replace("$replaceToken$",pm.getParamH("eng_write"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_eng_write_dropdown)));
	 await element(by.xpath(m_demo_eng_write_dropdown)).click();
	  //base.setDropdownField(E2EMem.m_demo_eng_write,E2EMem.m_demo_eng_write_dropdown_str,pm.getParamH("eng_write"));
	  browser.sleep(2000);
	 // await E2EMem.m_demo_eng_speak.clear();
	   await E2EMem.m_demo_eng_speak.click();
	 var m_demo_eng_speak_dropdown = E2EMem.m_demo_eng_speak_dropdown_str.replace("$replaceToken$",pm.getParamH("eng_speak"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_eng_speak_dropdown)));
	 await element(by.xpath(m_demo_eng_speak_dropdown)).click();
	  //base.setDropdownField(E2EMem.m_demo_eng_speak,E2EMem.m_demo_eng_speak_dropdown_str,pm.getParamH("eng_speak"));
	  browser.sleep(2000);
	  //await E2EMem.m_demo_housing.clear();
	   await E2EMem.m_demo_housing.click();
	 var m_demo_housing_dropdown = E2EMem.m_demo_housing_dropdown_str.replace("$replaceToken$",pm.getParamH("housing_stat"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_housing_dropdown)));
	 await element(by.xpath(m_demo_housing_dropdown)).click();
	  //base.setDropdownField(E2EMem.m_demo_housing,E2EMem.m_demo_housing_dropdown_str,pm.getParamH("housing_stat"));
	  browser.sleep(2000);
	  //await E2EMem.m_demo_minor.clear();
	   await E2EMem.m_demo_minor.click();
	 var m_demo_minor_dropdown = E2EMem.m_demo_minor_dropdown_str.replace("$replaceToken$",pm.getParamH("minor"));
	// base.WaitforElementPresence(element(by.xpath(m_demo_minor_dropdown)));
	 await element(by.xpath(m_demo_minor_dropdown)).click();
	//   base.scrollVerticalBy();
	 // base.setDropdownField(E2EMem.m_demo_minor,E2EMem.m_demo_minor_dropdown_str,pm.getParamH("minor"));
	 browser.sleep(2000);
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
	  await E2EMem.m_demo_submit.click();
	  //browser.actions().sendKeys(protractor.Key.HOME).perform();
	  await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
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


  Then('click on pagination list', async function (dataTable) {
	pm.dataTableV(dataTable);
	var ml_pagination_item = E2EMem.ml_pagination_item_str.replace("$pgNum$",pm.getParamV("PAGE_NUMBER"));
	 base.WaitforElementPresence(element(by.xpath(ml_pagination_item)));
	 await element(by.xpath(ml_pagination_item)).click();
	 await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	// pm.runVerticalParamManager(arg1);
	// 	sleep(5);
	// 	movePageDown();
	// 	findElement(jsonData(objects,"ml_pagination_item").replace("$pgNum$", pm.getVParam("PAGE_NUMBER"))).click();
	// 	addScreenshot();
  });

  Then('click on first member in the list', async function () {
	await E2EMem.ml_first_member.click();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");

  });

  Then('verify active page in the list', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("DIAGNOSIS", await E2EMem.ml_pagination_active_item.getText(), pm.getParamV("PAGE_NUMBER"));
	
  });

  Then('search for member in the list', async function (dataTable) {
	pm.dataTableH(dataTable);
	browser.sleep(3000);
	 var membName = pm.getParamH("name");
	 if(membName.trim()==("")) {
		 		membName = mmrc.getCurrentUser();
			 }
			 await E2EMem.ml_search.clear();	 
			 await E2EMem.ml_search.sendKeys(membName);	 
			 await browser.getTitle().then(async function(text) {
				expect(text).to.equal("mMR");
				browser.sleep(3000);
			  });
			  const screenshot = await browser.takeScreenshot();
			  this.attach(screenshot, "image/png");
	
  });

