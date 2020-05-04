"use strict";

import { Then } from "cucumber";
import { browser, element, by } from "protractor";
import { Base } from "../Util/Base";
import { MMRController } from "../Util/MMRController";
import { memberlane_StatusChanges } from "../pageObjects/memberlane_StatusChanges";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";

let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let pm = new ParamManager();
let memberlanestatus = new memberlane_StatusChanges();


Then('click on member view', async function (dataTable) {
	pm.dataTableV(dataTable);
	await element(by.xpath(memberlanestatus.ml_membView.replace("$replaceToken$",pm.getParamV("VIEW")))).click();
   browser.sleep(3000);
   await browser.getTitle().then(function(text) {
	expect(text).to.equal("mMR");
	//browser.sleep(3000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");

  });


  
  Then('change member status', async function (dataTable) {
	pm.dataTableV(dataTable);
	var membStr =await (element(by.xpath(memberlanestatus.ml_memberCardLane.replace("$name$",mmrc.getCurrentUser()).replace(" A ", " ").replace("$replaceToken$",pm.getParamV("from_status")).replace(" ","  "))));
	var targetStr =await (element(by.xpath(memberlanestatus.ml_targetLane.replace("$replaceToken$",pm.getParamV("to_status")))));
	base.dragAndDrop(membStr,targetStr);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	
  });

  Then('verify presence of member card', async function (dataTable) {
	pm.dataTableV(dataTable);
	var membStr =  element(by.xpath(memberlanestatus.ml_memberCardLane.replace("$name$",mmrc.getCurrentUser()).replace(" A ", " ").replace("$replaceToken$",pm.getParamV("LANE_TO_VERIFY")).replace(" ","  ")));
	var presence="NO";
	if(!membStr.isPresent){
		presence = "YES";
	}

	if(presence!=pm.getParamV("PRESENCE")) {
	browser.sleep(2000);
	if(membStr.isPresent){
		presence = "YES";
	}
}
	expect(presence,"Presence for Status " + pm.getParamV("LANE_TO_VERIFY")).to.equal(pm.getParamV("PRESENCE"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	// base.compareValues("Presence for Status " + pm.getParamV("LANE_TO_VERIFY"), presence , pm.getParamV("PRESENCE"));
	// const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;
	
  });







