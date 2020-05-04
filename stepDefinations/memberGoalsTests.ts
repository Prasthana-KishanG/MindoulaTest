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
var path = require('path');
let E2EMem = new E2EMember();
let membtask = new memberTasks();
let membgoals = new memberGoals();
let base = new Base();
var expect = chai.expect;
let pm = new ParamManager();
let mmrc = new MMRController();
var pg = require("pg");



Then('Verify data on goals page', async function (dataTable) {
	pm.dataTableV(dataTable);
  base.compareValues('NAME', await element(by.xpath(membgoals.m_goal_name.replace("$goalname$", pm.getParamV("NAME")))).getText(), pm.getParamV("NAME"));
  base.compareValues('IDENTIFIED_DATE', await element(by.xpath(membgoals.m_goal_identifiedon.replace("$identifiedon$", pm.getParamV("IDENTIFIED_DATE")))).getText(), pm.getParamV("IDENTIFIED_DATE"));
  base.compareValues('STATUS', await element(by.xpath(membgoals.m_goal_status.replace("$status$", pm.getParamV("STATUS")))).getText(), pm.getParamV("STATUS"));
  
  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
  });


