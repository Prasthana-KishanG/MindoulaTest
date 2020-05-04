"use strict";

import { Then } from "cucumber";
import { browser, element, by } from "protractor";
import { Base } from "../Util/Base";
import { Memberspage } from "../pageObjects/Memberspage";
import { verifyFilters } from "../pageObjects/verifyFilters";
import { members_AddFiltersPracticeProviderCheck } from "../pageObjects/members_AddFiltersPracticeProviderCheck";
import { MMRController } from "../Util/MMRController";
import { ParamManager } from "../Util/ParamManager";
import chai from "chai";

let mpage = new Memberspage();
let vfilters = new verifyFilters();
let AddFiltersPracticeProvider = new members_AddFiltersPracticeProviderCheck();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let pm = new ParamManager();
var membBeforeCount="";

Then('check member count before', async function () {

  membBeforeCount= (await element(by.xpath(AddFiltersPracticeProvider.ml_count)).getText()).replace("(", "").replace(")", "").trim();
  console.log('membBeforeCount...>',membBeforeCount);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 

});


Then('enter data in practice filter', async function (dataTable) {
  pm.dataTableV(dataTable);
  await AddFiltersPracticeProvider.select_practice.sendKeys(pm.getParamV("PRACTICE_NAME"));
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
 
});


Then('verify data in practice filter', async function (dataTable) {
  pm.dataTableV(dataTable);
  //var practice_dropdown =element(by.xpath(AddFiltersPracticeProvider.practice_dropdown_str.replace("$replaceToken$",pm.getParamV("PRACTICE_NAME")))).getText();
  var practice_dropdown = await (element(by.xpath(AddFiltersPracticeProvider.dropdown_null_str)).getText());
  console.log('practice_dropdown...>',practice_dropdown);
  var practExist="NO";
	if(practice_dropdown==pm.getParamV("PRACTICE_NAME")){
		practExist = "YES";
  }
  expect(practExist,"PRACTICE CHECK " + pm.getParamV("PRACTICE_NAME")).to.equal(pm.getParamV("PRACTICE_CHECK"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

  // base.compareValues("PRACTICE CHECK " + pm.getParamV("PRACTICE_NAME") , practExist , pm.getParamV("PRACTICE_CHECK"));
  // const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;
  
	
});

Then('enter data in provider filter', async function (dataTable) {
  pm.dataTableV(dataTable);
  await AddFiltersPracticeProvider.select_provider.sendKeys(pm.getParamV("PROVIDER_NAME"));
  browser.sleep(6000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 

});


Then('verify data in provider filter', async function (dataTable) {
  pm.dataTableV(dataTable);
  //var provider_dropdown = element(by.xpath(AddFiltersPracticeProvider.provider_dropdown_str.replace("$replaceToken$",pm.getParamV("PROVIDER_NAME")))).getText();
  var provider_dropdown =await( element(by.xpath(AddFiltersPracticeProvider.dropdown_null_str)).getText());
  var providerExist="NO";
	if(provider_dropdown==pm.getParamV("PROVIDER_NAME")){
		providerExist = "YES";
  }
  expect(providerExist,"Provider CHECK " + pm.getParamV("PROVIDER_NAME")).to.equal(pm.getParamV("PROVIDER_CHECK"));
	const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
  // base.compareValues("PRACTICE CHECK " + pm.getParamV("PROVIDER_NAME") , providerExist , pm.getParamV("PROVIDER_CHECK"));
  // const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;

});

Then('verify data in provider filter2', async function (dataTable) {
  pm.dataTableV(dataTable);
  //var provider_dropdown = element(by.xpath(AddFiltersPracticeProvider.provider_dropdown_str.replace("$replaceToken$",pm.getParamV("PROVIDER_NAME")))).getText();
  var provider_dropdown =await( element(by.xpath("//span[@class='ng-option-label ng-star-inserted'][contains(.,'Larson Provider')]")).getText());
  var providerExist="NO";
	if(provider_dropdown==pm.getParamV("PROVIDER_NAME")){
		providerExist = "YES";
  }
  expect(providerExist,"Provider CHECK " + pm.getParamV("PROVIDER_NAME")).to.equal(pm.getParamV("PROVIDER_CHECK"));
	const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
  // base.compareValues("PRACTICE CHECK " + pm.getParamV("PROVIDER_NAME") , providerExist , pm.getParamV("PROVIDER_CHECK"));
  // const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;

});


