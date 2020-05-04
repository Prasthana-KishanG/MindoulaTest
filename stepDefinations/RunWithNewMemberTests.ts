"use strict";

import { Then } from "cucumber";
import { browser, element, by, By } from "protractor";
import { Base } from "../Util/Base";
import { NewMember } from "../pageObjects/NewMember";
import { ParamManager } from "../Util/ParamManager";
import { MMRController } from "../Util/MMRController";

import chai from "chai";

let NewMem = new NewMember();
let base = new Base();
var expect = chai.expect;
let pm = new ParamManager();
let mmrc = new MMRController();
var pg = require("pg");
// var client = new pg.Client({
//   user: "mmr_staging@mmr-staging-pgsql",
//   password: "j9Hc(lg9U^Z4!MPj",
//   database: "mmr_api_staging",
//   port: 5432,
//   host: "mmr-staging-pgsql.postgres.database.azure.com",
//   ssl: true
// });

Then("click on Add Member", async function() {
  await NewMem.ml_addMember.click();
  //base.UrlContains("add");
  base.WaitforElementPresence(await element(By.tagName("page-heading")));
});

Then("Enter data in Add Member Page", async function(dataTable) {
  pm.dataTableH(dataTable);
  await NewMem.am_fname.sendKeys(pm.getParamH("fname"));
  await NewMem.am_mname.sendKeys(pm.getParamH("mname"));
  base.client.connect();
  var rs = await base.client.query("SELECT * from members where last_name LIKE 'MEMB%' order by id desc");
  console.log("rs...>", rs.rows);

  var lastName = rs.rows[0]["last_name"].replace(/" "/g, "");
  let idVal = parseInt(lastName.substring(4));
  idVal = idVal + 1;
  lastName = "MEMB" + idVal;
  await NewMem.am_lname.sendKeys(lastName);

  var emailPrepared = "MMR." + lastName + "@mind.com";
  await NewMem.am_email.sendKeys(emailPrepared);
  rs = await base.client.query("select max(mobile_number) as mobile_number from members where mobile_number like '2257%'");
  console.log("rsssssssssss...>", rs);
  let mobilePrepared = parseInt(rs.rows[0]["mobile_number"]) + 1;
  await NewMem.am_mobile.sendKeys(mobilePrepared);
  base.setDateField(NewMem.am_bob, pm.getParamH("dob"));
  await element(by.xpath(NewMem.gender)).click();
  var am_gender_dropdown = NewMem.am_gender_dropdown_str.replace("$gender$",pm.getParamH("gender"));
  await element(by.xpath(am_gender_dropdown)).click();
  await element(by.xpath(NewMem.marital_status)).click();
  var am_marital_status_dropdown = NewMem.am_marital_status_dropdown_str.replace("$marital_status$",pm.getParamH("marital_status"));
  await element(by.xpath(am_marital_status_dropdown)).click();
  await NewMem.am_address.click();
  await NewMem.am_address.sendKeys(pm.getParamH("address"));
  browser.sleep(2000);
  await NewMem.m_nm_selectaddress.click();
  browser.sleep(2000);
  await NewMem.am_hphone.sendKeys(pm.getParamH("home_phone"));
  await NewMem.am_ophone.sendKeys(pm.getParamH("office_phone"));

  mmrc.setCurrentUser(pm.getParamH("fname") + " " + lastName);
  await NewMem.am_submit.click();
  browser.sleep(8000);
  //await NewMem.m_nm_useaddress.click();
  //await element(by.xpath("//mat-radio-button[@id='mat-radio-4']//div[@class='mat-radio-outer-circle']")).click();
 // await element(by.xpath("//button[@color='primary'][contains(.,'Use Address')]")).click();
  base.UrlContains("cheatsheet");
  //console.log("save button clicked");
  //console.log("getuser...>", mmrc.getCurrentUser);
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(3000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  //browser.sleep(10000);
});

Then('Click on Add Program in Member\'s ID Bar', async function () {
	//browser.sleep(3000);
	await NewMem.m_addProgram.click();
	//browser.sleep(3000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(5000);
	  });
	  await element(by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Cancel')]")).click();
	  browser.sleep(3000);
	  await NewMem.m_addProgram.click();
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	// base.WaitforalertIsPresent()
  });

//   Then('Click on Add Program in Member\'s ID Bar', async function () {
// 	await element(by.xpath("//*[@id='sidenav-content']/mmr-member-container/div/mmr-member-detail/div/div[1]/div[1]/mmr-programs-widget/div/div[2]")).click();
// 	await browser.getTitle().then(function(text) {
// 		expect(text).to.equal("mMR");
// 		//browser.sleep(10000);
// 	  });
// 	// base.WaitforalertIsPresent()
	
//   });

  Then('Navigate to Provider Look Up', async function () {
	if(mmrc.getProvLookUp()=="NO") {
		return;
	}
	// if(browser.params.mmrlogin.setCurrentUser=="NO") {
	// 	return;
	// }
	base.setRadioField(NewMem.ap_radio_add_type, "Provider");
	await browser.getTitle().then( function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(10000);
		
	  });
	  const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
  });

  Then('Enter data in Add Program Provider Look Up Page', async function (dataTable) {
	if(mmrc.getProvLookUp()=="NO") {
		return;
	}
	// if(browser.params.mmrlogin.setCurrentUser=="NO") {
	// 	return;
	// }
	pm.dataTableH(dataTable);
	base.setDropdownFieldSearch(NewMem.ap_provider, NewMem.ap_provider_dropdown, pm.getParamH("provider"));
	base.setDateField(NewMem.ap_identified_on, pm.getParamH("identified_on"));
	if(mmrc.getCurrentUser().trim()!=("")) {
		base.setInputField(NewMem.ap_medica_ID, mmrc.getCurrentUser().replace(/" "/g, ""));
		base.setInputField(NewMem.ap_EMR_ID, "EID"+mmrc.getCurrentUser().replace(/" "/g, ""));
		base.setInputField(NewMem.ap_alternate_identifier, "AID"+mmrc.getCurrentUser().replace(/" "/g, ""));
	}else {
		base.setInputField(NewMem.ap_medica_ID, pm.getParamH("medicaid"));
		base.setInputField(NewMem.ap_EMR_ID, "EID"+pm.getParamH("medicaid"));
		base.setInputField(NewMem.ap_alternate_identifier, "AID"+pm.getParamH("medicaid"));
		//console.log('ap_alternate_identifier...>' ,"AID"+pm.getParamH("medicaid"));
		 }
		 base.setDropdownField(NewMem.ap_status,NewMem.ap_status_dropdown,pm.getParamH("status"));
		 base.setInputField(NewMem.ap_ins_note, pm.getParamH("insurance_note"));
		 await NewMem.ap_save.click();
		 base.UrlContains("cheatsheet");
		 await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(3000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
  });

  Then('Navigate to Program Look Up', async function () {
	if(mmrc.getProvLookUp()=="YES") {
		return;
	}
	// if(browser.params.mmrlogin.setCurrentUser=="YES") {
	// 	return;
	// }
	base.setRadioField(NewMem.ap_radio_add_type, "Program");
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(5000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('Enter data in Add Program page', async function (dataTable) {
	if(mmrc.getProvLookUp()=="YES") {
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
	if(mmrc.getCurrentUser().trim()!=("")) {
		base.setInputField(NewMem.ap_medica_ID, mmrc.getCurrentUser().replace(/" "/g, ""));
		base.setInputField(NewMem.ap_EMR_ID, "EID"+mmrc.getCurrentUser().replace(/" "/g, ""));
		base.setInputField(NewMem.ap_alternate_identifier, "AID"+mmrc.getCurrentUser().replace(/" "/g, ""));
	}else {
		base.setInputField(NewMem.ap_medica_ID, pm.getParamH("medicaid"));
		base.setInputField(NewMem.ap_EMR_ID, "EID"+pm.getParamH("medicaid"));
		base.setInputField(NewMem.ap_alternate_identifier, "AID"+pm.getParamH("medicaid"));
		//console.log('ap_alternate_identifier...>' ,"AID"+pm.getParamH("medicaid"));
		 }
		 base.setDropdownField(NewMem.ap_status,NewMem.ap_status_dropdown,pm.getParamH("status"));
		 base.setInputField(NewMem.ap_ins_note, pm.getParamH("insurance_note"));
		 await NewMem.ap_save.click();
		 
		 await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			//base.UrlContains("care-team");
			//browser.sleep(10000);
		  });
		  const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
  });

  Then('click on Add Care Team', async function () {
	
	base.WaitforElementClickable(NewMem.m_ct_Add);
	await NewMem.m_ct_Add.click();
	// await browser.getTitle().then(function(text) {
	// 	expect(text).to.equal("mMR");
	//   });
	const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
  });

  Then('Enter Data in Care Team Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	await NewMem.m_ct_role.click();
	var m_ct_role_dropdown = NewMem.m_ct_role_dropdown_str.replace("$role$",pm.getParamH("Role"));
	//browser.sleep(2000);
	base.WaitforElementPresence(element(by.xpath(m_ct_role_dropdown)));
	await element(by.xpath(m_ct_role_dropdown)).click();
	await NewMem.m_ct_member.click();
	var m_ct_member_dropdown = NewMem.m_ct_member_dropdown_str.replace("$member$",pm.getParamH("MemberName"));
	//browser.sleep(2000);
	base.WaitforElementPresence(element(by.xpath(m_ct_member_dropdown)));
	await element(by.xpath(m_ct_member_dropdown)).click();
	//browser.sleep(2000);
	//base.setDateField(NewMem.m_ct_to_date, pm.getParamH("toDate"));
	await NewMem.m_ct_primary.click();
	await NewMem.m_ct_save.click();
	//base.WaitforElementClickable(NewMem.m_ct_Add);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(15000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });