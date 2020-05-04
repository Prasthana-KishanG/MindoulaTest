"use strict";

import { Then } from "cucumber";
import { browser, element, by, By, protractor, ElementFinder } from "protractor";
import { Base } from "../Util/Base";
import { E2EMember } from "../pageObjects/E2EMember";
import { memberTasks } from "../pageObjects/memberTasks";
import { ParamManager } from "../Util/ParamManager";
import { MMRController } from "../Util/MMRController";
import { memberGoals } from "../pageObjects/memberGoals";

import chai from "chai";
import { memberCheatsheets } from "../pageObjects/memberCheatsheets";
var path = require('path');
let E2EMem = new E2EMember();
let membcsheet = new memberCheatsheets();
let membgoals = new memberGoals();
let base = new Base();
var expect = chai.expect;
let pm = new ParamManager();
let mmrc = new MMRController();
var pg = require("pg");



Then('click on Edit in Physical Description', async function (dataTable) {
  pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(membcsheet.m_cs_cheatsheettype.replace("$type$",pm.getParamV("TYPE"))))).perform();
  browser.sleep(2000);
  await element(by.xpath(membcsheet.m_cs_cheatsheet_edit.replace("$type$",pm.getParamV("TYPE")))).click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(4000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
});


