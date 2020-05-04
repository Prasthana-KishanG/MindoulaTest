"use strict";

import { Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { Base } from "../Util/Base";
import { membersConsults } from "../pageObjects/membersConsults";
import { membersTags } from "../pageObjects/membersTags";
import { MMRController } from "../Util/MMRController";
import { membersCaseNotes } from "../pageObjects/membersCaseNotes";
import { E2EMember } from "../pageObjects/E2EMember";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";

let consults = new membersConsults();
let tags = new membersTags();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let casenotes = new membersCaseNotes();
let pm = new ParamManager();
let E2EMem = new E2EMember();
const moment = require("moment");

Then('click on Add Tag', async function () {
	base.WaitforElementClickable(tags.m_tag_add);
	await tags.m_tag_add.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


  Then('click on Search Tag', async function () {
	base.WaitforElementClickable(tags.m_tag_search);
	await tags.m_tag_search.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


  Then('select Tag', async function (dataTable) {
	pm.dataTableH(dataTable);
	await tags.m_tag_searchinput.sendKeys(pm.getParamH("Search Tag"));
	browser.sleep(3000);
	var m_tag_selectoption = tags.m_tag_selectoption_str.replace("$replaceToken$",pm.getParamH("Search Tag"));
			await element(by.xpath(m_tag_selectoption)).click();
			//browser.sleep(2000);
			await browser.getTitle().then(function(text) {
				expect(text).to.equal("mMR");
				browser.sleep(3000);
			  });
			  const screenshot = await browser.takeScreenshot();
			  this.attach(screenshot, "image/png");
  });


  Then('Select Start Date', async function (dataTable) {
	pm.dataTableV(dataTable);
	await tags.m_tag_startdate.click();
	await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
	//await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
	await tags.m_tag_selectdate.click();

	//base.setDateFields(tags.m_tag_startdate, pm.getParamV("Start_Date"));

	// await tags.m_tag_startdate.sendKeys("03/02/2020");
	// await tags.m_tag_startdate.sendKeys(protractor.Key.TAB);
	// await tags.m_tag_startdate.click();
	// var d = new Date();
    // d.setFullYear(2020, 10, 3);
	
	
	//browser.sleep(2000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(2000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Select Start Date1', async function (dataTable) {
	pm.dataTableV(dataTable);
	await tags.m_tag_startdate.click();
	browser.sleep(2000);
	//await element(by.xpath("//mat-datepicker-toggle[contains(@class,'mat-datepicker-toggle ng-tns-c92-86')]")).click();
	await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
	await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
	await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();

	await tags.m_tag_selectpredate.click();
	browser.sleep(2000);
	//base.setDateFields(tags.m_tag_startdate, pm.getParamV("Start_Date"));

	// await tags.m_tag_startdate.sendKeys("03/02/2020");
	// await tags.m_tag_startdate.sendKeys(protractor.Key.TAB);
	// await tags.m_tag_startdate.click();
	// var d = new Date();
    // d.setFullYear(2020, 10, 3);
	
	
	//browser.sleep(2000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(2000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Click Add Button', async function () {
	await tags.m_tag_addbtn.click();
	browser.sleep(5000);
	//browser.actions().mouseMove(await tags.m_tag_add).perform();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(5000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });
 

  Then('verify data in Member Tags Page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("Behavioral_Health",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
	base.compareValues("Medical",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Medical").substring(0,11)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Medical").substring(0,11)).replace("$replaceToken2$",pm.getParamV("Medical").substring(12,22)))).getText(), pm.getParamV("Medical"));
	base.compareValues("Observations",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Observations").substring(0,19)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Observations").substring(0,19)).replace("$replaceToken2$",pm.getParamV("Observations").substring(20,30)))).getText(), pm.getParamV("Observations"));
	base.compareValues("Others",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Others").substring(0,13)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Others").substring(0,13)).replace("$replaceToken2$",pm.getParamV("Others").substring(14,24)))).getText(), pm.getParamV("Others"));
	//base.compareValues("Behavioral_Health11111", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
	//console.log('Behavioral_Health...>',await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
	//console.log("Behavioral_Health1111123", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });

  Then('Click on Edit icon on the Member Tag', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("TAG_NAME"))))).perform();
	await element(by.xpath(tags.m_tag_edit_btn.replace("$replaceToken$",pm.getParamV("MEMBER_TAG")))).click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(4000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
});


  Then('Change the Date', async function (dataTable) {
	await tags.m_tag_startdate.click();
	await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
	await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();
	//await element(by.xpath("//button[contains(@class,'mat-focus-indicator mat-calendar-previous-button mat-icon-button mat-button-base')]")).click();

	await tags.m_tag_selectnextdate.click();

	//base.setDateFields(tags.m_tag_startdate, pm.getParamV("Start_Date"));
	//browser.sleep(2000);
	browser.actions().mouseMove(tags.m_tag_save_btn).perform();
	await tags.m_tag_save_btn.click();
	browser.sleep(2000);
	browser.actions().sendKeys(protractor.Key.END).perform();
	//browser.sleep(22000);
	//await tags.m_tag_toast_close.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('verify data after edit in Member Tags Page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("Behavioral_Health",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
	base.compareValues("Medical",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Medical").substring(0,11)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Medical").substring(0,11)).replace("$replaceToken2$",pm.getParamV("Medical").substring(12,22)))).getText(), pm.getParamV("Medical"));
	//base.compareValues("Observations",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Observations").substring(0,19)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Observations").substring(0,19)).replace("$replaceToken2$",pm.getParamV("Observations").substring(20,30)))).getText(), pm.getParamV("Observations"));
	//base.compareValues("Others",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Others").substring(0,13)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Others").substring(0,13)).replace("$replaceToken2$",pm.getParamV("Others").substring(14,24)))).getText(), pm.getParamV("Others"));
	//console.log('Behavioral_Health...>',await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
	//console.log("Behavioral_Health1111123", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });

  
  Then('Click on Delete icon on the Member Tag', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("TAG_NAME"))))).perform();
	await element(by.xpath(tags.m_tag_delete_btn.replace("$replaceToken$",pm.getParamV("MEMBER_TAG")))).click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(4000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Click on Yes on the PopUp Dialogue', async function () {
	//pm.dataTableV(dataTable);
	await tags.m_tag_yes_btn.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(4000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('verify data after delete in Member Tags Page', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("Behavioral_Health",await tags.m_tag_bh_text.getText(), pm.getParamV("Behavioral_Health"));
	base.compareValues("Medical",await tags.m_tag_medical_text.getText(), pm.getParamV("Medical"));
	base.compareValues("Observations",await tags.m_tag_obs_text.getText(), pm.getParamV("Observations"));
	base.compareValues("Others",await tags.m_tag_others_text.getText(), pm.getParamV("Others"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('click on AddTag in Members QuickAction Icon', async function () {
	//base.WaitforElementClickable(tags.m_tag_add);
	await tags.m_tag_addicon.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  //browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('verify data in Member Tags Page QuickAction', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("Behavioral_Health",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
	base.compareValues("Medical",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Medical").substring(0,11)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Medical").substring(0,11)).replace("$replaceToken2$",pm.getParamV("Medical").substring(12,22)))).getText(), pm.getParamV("Medical"));
	base.compareValues("Observations",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Observations").substring(0,19)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Observations").substring(0,19)).replace("$replaceToken2$",pm.getParamV("Observations").substring(20,30)))).getText(), pm.getParamV("Observations"));
	//base.compareValues("Others",await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Others").substring(0,13)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Others").substring(0,13)).replace("$replaceToken2$",pm.getParamV("Others").substring(14,24)))).getText(), pm.getParamV("Others"));
	//base.compareValues("Behavioral_Health11111", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
	//console.log('Behavioral_Health...>',await element(by.xpath(tags.tagname.replace("$replaceToken$",pm.getParamV("Behavioral_Health").substring(0,15)))).getText()+" "+await element(by.xpath(tags.startdate.replace("$replaceToken1$",pm.getParamV("Behavioral_Health").substring(0,15)).replace("$replaceToken2$",pm.getParamV("Behavioral_Health").substring(16,26)))).getText(), pm.getParamV("Behavioral_Health"));
	//console.log("Behavioral_Health1111123", (await element(by.xpath(tags.tagandstartdate)).getText()).replace("\n"," "), pm.getParamV("Behavioral_Health"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });



