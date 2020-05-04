"use strict";

import { Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { Base } from "../Util/Base";
import { membersConsults } from "../pageObjects/membersConsults";
import { MMRController } from "../Util/MMRController";
import { membersCaseNotes } from "../pageObjects/membersCaseNotes";
import { E2EMember } from "../pageObjects/E2EMember";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";

let consults = new membersConsults();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let casenotes = new membersCaseNotes();
let pm = new ParamManager();
let E2EMem = new E2EMember();
const moment = require("moment");


Then('click on Add Consult', async function () {

	//browser.sleep(3000);
	base.WaitforElementClickable(consults.m_consult_add);
	await consults.m_consult_add.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  //browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
    //findElement(jsonData(objects,"m_consult_add")).click();
	// 	addScreenshot();
});

Then('click on Add Diagnosis in Conults page', async function () {
	base.WaitforElementClickable(consults.m_consult_add_diagnosis);
	await consults.m_consult_add_diagnosis.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  // findElement(jsonData(objects,"m_consult_add_diagnosis")).click();
  // addScreenshot();
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

Then('click on Add Measurement Plan', async function () {
	//base.WaitforElementPresence(consults.m_consult_add_measure);
	//base.moveCursorToAnElement(consults.m_consult_add_measure);
	//base.WaitforElementClickable(consults.m_consult_add_measure);
	browser.actions().mouseMove(consults.m_consult_add_measure).perform();
	await consults.m_consult_add_measure.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
 
});

Then('Enter data in Measurement Plan page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.setDropdownField(consults.m_measure_assessment, consults.m_measure_assessment_dropdown, pm.getParamV("ASSESSMENT"));
	base.setTextArea_Keys(consults.m_measure_notes,pm.getParamV("NOTES"));
	await consults.m_measure_save.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  //browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

});

Then('Enter data in Consult page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.setTextArea_Keys(consults.m_consult_medication_notes,pm.getParamV("TREATMENT_SUGGESTIONS"));
	//await consults.m_consult_medication_notes.sendKeys(protractor.Key.ESCAPE);
	await consults.m_consult_medication_notes.sendKeys(protractor.Key.TAB);
	browser.sleep(3000);
	var notesPresent = "NO";
	if(consults.m_measure_notes.length>0){
		notesPresent = "YES";
	}
	base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
	const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

	
});

Then('take action for the consult', async function (dataTable) {

	pm.dataTableH(dataTable);

	if (pm.getParamH("Button_to_click") == ("Publish")) {
		browser.sleep(3000);
		//await browser.actions().mouseMove(consults.m_publish_btn).perform();
		base.WaitforElementClickable(consults.m_publish_btn);
		await consults.m_publish_btn.click();
		
		browser.sleep(5000);
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(3000);
			});
	  }
	  else if (pm.getParamH("Button_to_click") == ("Discard")) {
		await consults.m_discard_btn.click();
		browser.sleep(3000);
	  }
	  await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
		});
		const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
  
});


Then('verify data in Consults Page3', async function (dataTable) {
	let date: Date = new Date();
    var cdate = moment(date).format("MM/DD/YYYY");
	//var m_consult_detais_diagnosis=element(by.xpath(consults.m_consult_detais_diagnosis_str)).getText();
	pm.dataTableV(dataTable);
	base.compareValues('CONSULT_TYPE', await consults.m_consult_details_consult_type.getText(), pm.getParamV("CONSULT_TYPE"));
	base.compareValues_referrals('DATE_CREATED', await consults.m_consult_details_date_created.getText(), cdate);
	//console.log('Dates...>',await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
	base.compareValues_referrals('DATE_SUBMITTED', await consults.m_consult_details_date_submitted.getText(), cdate);
	base.compareValues('CONSULT_STATUS', await consults.m_consult_details_status.getText(), pm.getParamV("CONSULT_STATUS"));
	//console.log('11111..toFixed.>' ,JSON.stringify(await consults.m_consult_detais_diagnosis.getText()))
	base.compareValues('DIAGNOSIS_TYPE', pm.getParamV("DIAGNOSIS_TYPE").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_detais_diagnosis.getText())), pm.getParamV("DIAGNOSIS_TYPE"));
	base.compareValues('DIAGNOSIS_CODE', pm.getParamV("DIAGNOSIS_CODE").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_details_diagnosis_code.getText())), pm.getParamV("DIAGNOSIS_CODE"));
	base.compareValues('DIAGNOSIS_STATUS', pm.getParamV("DIAGNOSIS_STATUS").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_details_diagnosis_status.getText())), pm.getParamV("DIAGNOSIS_STATUS"));
	base.compareValues('MPLAN_NAME', pm.getParamV("MPLAN_NAME").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_details_mp_name.getText())), pm.getParamV("MPLAN_NAME"));
	base.compareValues('MPLAN_DESC', pm.getParamV("MPLAN_DESC").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_details_mp_desc.getText())), pm.getParamV("MPLAN_DESC"));
	base.compareValues('TREATMENT_SUGGESTIONS', await consults.m_consult_details_med_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
	var notesPresent = "NO";
	if(consults.m_consult_details_cons_notes.length>0){
		notesPresent = "YES";
	}
	base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
	const val = base.getValue();
	//console.log('vall----> ', val);
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

});

Then('verify data in Consults Page', async function (dataTable) {
	let date: Date = new Date();
    var cdate = moment(date).format("MM/DD/YYYY");
	//var m_consult_detais_diagnosis=element(by.xpath(consults.m_consult_detais_diagnosis_str)).getText();
	pm.dataTableV(dataTable);
	base.compareValues('CONSULT_TYPE', await consults.m_consult_details_consult_type.getText(), pm.getParamV("CONSULT_TYPE"));
	base.compareValues_referrals('DATE_CREATED', await consults.m_consult_details_date_created.getText(), cdate);
	//console.log('Dates...>',await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
	base.compareValues_referrals('DATE_SUBMITTED', await consults.m_consult_details_date_submitted.getText(), cdate);
	base.compareValues('CONSULT_STATUS', await consults.m_consult_details_status.getText(), pm.getParamV("CONSULT_STATUS"));
	//console.log('11111..toFixed.>' ,JSON.stringify(await consults.m_consult_detais_diagnosis.getText()))
	base.compareValues('DIAGNOSIS_TYPE', pm.getParamV("DIAGNOSIS_TYPE").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_detais_diagnosis_str.replace("$replaceToken$",pm.getParamV("DIAGNOSIS_TYPE")))).getText())), pm.getParamV("DIAGNOSIS_TYPE"));
	base.compareValues('DIAGNOSIS_CODE', pm.getParamV("DIAGNOSIS_CODE").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_diagnosis_code_str.replace("$replaceToken$",pm.getParamV("DIAGNOSIS_CODE")))).getText())), pm.getParamV("DIAGNOSIS_CODE"));
	base.compareValues('DIAGNOSIS_STATUS', pm.getParamV("DIAGNOSIS_STATUS").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_diagnosis_status_str.replace("$replaceToken$",pm.getParamV("DIAGNOSIS_STATUS")))).getText())), pm.getParamV("DIAGNOSIS_STATUS"));
	base.compareValues('MPLAN_NAME', pm.getParamV("MPLAN_NAME").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_mp_name_str.replace("$replaceToken$",pm.getParamV("MPLAN_NAME")))).getText())), pm.getParamV("MPLAN_NAME"));
	base.compareValues('MPLAN_DESC', pm.getParamV("MPLAN_DESC").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_mp_desc_str.replace("$replaceToken$",pm.getParamV("MPLAN_DESC")))).getText())), pm.getParamV("MPLAN_DESC"));
	base.compareValues('TREATMENT_SUGGESTIONS', await consults.m_consult_details_med_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
	var notesPresent = "NO";
	if(consults.m_consult_details_cons_notes.length>0){
		notesPresent = "YES";
	}
	base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
	const val = base.getValue();
	//console.log('vall----> ', val);
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

});



Then('verify data in Existing Consults Page', async function (dataTable) {
	let date: Date = new Date();
    var cdate = moment(date).format("MM/DD/YYYY");
	//var m_consult_detais_diagnosis=element(by.xpath(consults.m_consult_detais_diagnosis_str)).getText();
	pm.dataTableV(dataTable);
	base.compareValues('CONSULT_TYPE', await consults.m_consult_details_consult_type.getText(), pm.getParamV("CONSULT_TYPE"));
	base.compareValues_referrals('DATE_CREATED', await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
	//console.log('Dates...>',await consults.m_consult_details_date_created.getText(), pm.getParamV("DATE_CREATED"));
	base.compareValues_referrals('DATE_SUBMITTED', await consults.m_consult_details_date_submitted.getText(), pm.getParamV("DATE_SUBMITTED"));
	base.compareValues('CONSULT_STATUS', await consults.m_consult_details_status.getText(), pm.getParamV("CONSULT_STATUS"));
	//console.log('11111..toFixed.>' ,JSON.stringify(await consults.m_consult_detais_diagnosis.getText()))
	base.compareValues('DIAGNOSIS_TYPE', pm.getParamV("DIAGNOSIS_TYPE").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_detais_diagnosis_str.replace("$replaceToken$",pm.getParamV("DIAGNOSIS_TYPE")))).getText())), pm.getParamV("DIAGNOSIS_TYPE"));
	base.compareValues('DIAGNOSIS_CODE', pm.getParamV("DIAGNOSIS_CODE").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_diagnosis_code_str.replace("$replaceToken$",pm.getParamV("DIAGNOSIS_CODE")))).getText())), pm.getParamV("DIAGNOSIS_CODE"));
	base.compareValues('DIAGNOSIS_STATUS', pm.getParamV("DIAGNOSIS_STATUS").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_diagnosis_status_str.replace("$replaceToken$",pm.getParamV("DIAGNOSIS_STATUS")))).getText())), pm.getParamV("DIAGNOSIS_STATUS"));
	base.compareValues('MPLAN_NAME1', pm.getParamV("MPLAN_NAME1").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_details_mp_name.getText())), pm.getParamV("MPLAN_NAME1"));
	base.compareValues('MPLAN_DESC1', pm.getParamV("MPLAN_DESC1").trim()== "" ? "" : JSON.parse(JSON.stringify(await consults.m_consult_details_mp_desc.getText())), pm.getParamV("MPLAN_DESC1"));
	base.compareValues('MPLAN_NAME2', pm.getParamV("MPLAN_NAME2").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_mp_name2.replace("$replaceToken$",pm.getParamV("MPLAN_NAME2")))).getText())), pm.getParamV("MPLAN_NAME2"));
	base.compareValues('MPLAN_DESC2', pm.getParamV("MPLAN_DESC2").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_mp_desc2.replace("$replaceToken$",pm.getParamV("MPLAN_DESC2")))).getText())), pm.getParamV("MPLAN_DESC2"));
	base.compareValues('MPLAN_NAME3', pm.getParamV("MPLAN_NAME3").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_mp_name2.replace("$replaceToken$",pm.getParamV("MPLAN_NAME3")))).getText())), pm.getParamV("MPLAN_NAME3"));
	base.compareValues('MPLAN_DESC3', pm.getParamV("MPLAN_DESC3").trim()== "" ? "" : JSON.parse(JSON.stringify(await element(by.xpath(consults.m_consult_details_mp_desc2.replace("$replaceToken$",pm.getParamV("MPLAN_DESC3")))).getText())), pm.getParamV("MPLAN_DESC3"));
	
	
	
	base.compareValues('TREATMENT_SUGGESTIONS', await consults.m_consult_details_med_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
	var notesPresent = "NO";
	if(consults.m_consult_details_cons_notes.length>0){
		notesPresent = "YES";
	}
	base.compareValues("NOTES_PRESENT", notesPresent, pm.getParamV("CONSULT_NOTES"));
	const val = base.getValue();
	//console.log('vall----> ', val);
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

});

Then('click on view details in consults list page', async function (dataTable) {
	//browser.sleep(3000);
	let date: Date = new Date();
    var cdate = moment(date).format("MM/DD/YYYY");
	pm.dataTableV(dataTable);
	var m_consult_list_row = consults.m_consult_list_row_str.replace("$replaceToken$",pm.getParamV("CONSULT_CREATED_DATE"));
	//console.log('Xpath...>', await element(by.xpath(m_consult_list_row)));
	browser.actions().mouseMove(await element(by.xpath(m_consult_list_row))).perform();
	//base.moveCursorToAnElement(consults.m_consult_list_row);

	var m_consult_list_row_edit = consults.m_consult_list_row_edit_str.replace("$replaceToken$",pm.getParamV("CONSULT_CREATED_DATE"));
	//console.log('Xpath...>', await element(by.xpath(m_consult_list_row_edit)));
	//browser.actions().mouseMove(await element(by.xpath(m_consult_list_row))).perform();
	await element(by.xpath(m_consult_list_row_edit)).click();
	browser.sleep(4000);
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  base.UrlContains("detail");
	  //browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  
});


Then('wait for a minute', async function () {
	//await consults.m_consult_medication_notes.click();
	browser.sleep(9000);
	browser.navigate().back();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('Click on Tasks Tab', async function () {
	//browser.actions().mouseMove(consults.m_publish_btn).perform();
	//await element(by.xpath(consults.membHeader)).click()
	await element(by.xpath("//div[@role='tab'][contains(.,'Tasks')]")).click();
   
	browser.sleep(4000);
	 await browser.getTitle().then(function (text) {
	   expect(text).to.equal("mMR");
 	 })
    const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png");
 });

 Then('Edit the top consult in the list', async function (dataTable) {
	pm.dataTableV(dataTable);
	//var m_consult_list_row = consults.m_consult_list_row_str.replace("$replaceToken$",pm.getParamV("CONSULT_CREATED_DATE"));
	//console.log('Xpath...>', await element(by.xpath(m_consult_list_row)));
	browser.actions().mouseMove(await element(by.xpath(consults.consult_first))).perform();
	//base.moveCursorToAnElement(consults.m_consult_list_row);

	var m_consult_list_row_edit = consults.m_consult_row_edit.replace("$replaceToken$",pm.getParamV("Status"));
	//console.log('Xpath...>', await element(by.xpath(m_consult_list_row_edit)));
	//browser.actions().mouseMove(await element(by.xpath(m_consult_list_row))).perform();
	await element(by.xpath(m_consult_list_row_edit)).click();
	browser.sleep(4000);
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  //base.UrlContains("detail");
	  //browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


  Then('Verify the Data in the Notes', async function (dataTable) {
	
	pm.dataTableV(dataTable);
	base.compareValues('TREATMENT_SUGGESTIONS', await consults.m_consult_draft_notes.getText(), pm.getParamV("TREATMENT_SUGGESTIONS"));
	browser.navigate().refresh();
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });