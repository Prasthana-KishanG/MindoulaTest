"use strict";

import { Then } from "cucumber";
import { browser, element, by, By, protractor, ElementFinder } from "protractor";
import { Base } from "../Util/Base";
import { E2EMember } from "../pageObjects/E2EMember";
import { memberTasks } from "../pageObjects/memberTasks";
import { ParamManager } from "../Util/ParamManager";
import { MMRController } from "../Util/MMRController";

import chai from "chai";
var path = require('path');
let E2EMem = new E2EMember();
let membtask = new memberTasks();
let base = new Base();
var expect = chai.expect;
let pm = new ParamManager();
let mmrc = new MMRController();
var pg = require("pg");



	
Then('Enter Data in Tasks Page1', async function (dataTable) {
	pm.dataTableH(dataTable);
	await E2EMem.m_task_type.click();
	browser.sleep(2000);
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
	await membtask.m_task_assessmenttype.click();
	browser.sleep(2000);
	var m_task_assessmenttypedrp = membtask.m_task_assessmenttypedrp_str.replace("$assessmenttype$",pm.getParamH("Assessment_Type"));
	browser.sleep(3000);
	base.WaitforElementPresence(element(by.xpath(m_task_assessmenttypedrp)));
	await element(by.xpath(m_task_assessmenttypedrp)).click();

	base.setInputField(E2EMem.m_task_description, pm.getParamH("Description"));
	base.setDateField(E2EMem.m_task_goaldate, pm.getParamH("goalDate"));
	await E2EMem.m_task_save.click();
	base.UrlContains("tasks");
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(20000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
			
});

Then('Verify Created Tasks', async function (dataTable) {
	pm.dataTableV(dataTable);
  base.compareValues('Reminder', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Reminder"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Reminder"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Reminder"))).getText(), pm.getParamV("Upcoming_Task1"));
  base.compareValues('Case Note Follow Up', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Case Note Follow Up"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Case Note Follow Up"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Case Note Follow Up"))).getText(), pm.getParamV("Upcoming_Task2"));
  base.compareValues('Documentation', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Documentation"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Documentation"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Documentation"))).getText(), pm.getParamV("Upcoming_Task3"));
  base.compareValues('Case Note Follow Up', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Case Note Follow Up"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Case Note Follow Up"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Case Note Follow Up"))).getText(), pm.getParamV("Upcoming_Task4"));
  base.compareValues('Intake Case Review', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Intake Case Review"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Intake Case Review"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Intake Case Review"))).getText(), pm.getParamV("Upcoming_Task5"));
  base.compareValues('Intake Consult', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Intake Consult"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Intake Consult"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Intake Consult"))).getText(), pm.getParamV("Upcoming_Task6"));
  base.compareValues('Scheduling', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Scheduling"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Scheduling"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Scheduling"))).getText(), pm.getParamV("Upcoming_Task7"));
  base.compareValues('Other', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Other"))).getText()+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Other"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Other"))).getText(), pm.getParamV("Upcoming_Task8"));
  base.compareValues('Assessment', await element(by.xpath(membtask.task_type.replace("$assessmenttype$", "Assessment"))).getText()+','+await element(by.xpath(membtask.task_goal.replace("$assessmenttype$", "Assessment"))).getText()+await element(by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Assessment"))).getText(), pm.getParamV("Upcoming_Task9"));

  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
  });

  Then('click on Completed in Upcoming Tasks', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(membtask.task_type.replace("$assessmenttype$", pm.getParamV("Upcoming_Task"))))).perform();
	browser.sleep(3000);
	await element(by.xpath(membtask.task_action_completed.replace("$assessmenttype$",pm.getParamV("Upcoming_Task")))).click();
	browser.sleep(35000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");  
});

  Then('Verify Completed Tasks', async function (dataTable) {
	pm.dataTableV(dataTable);
	var task_type =  element(by.xpath(membtask.task_action_status.replace("$replaceToken$",pm.getParamV("Type"))));
	var presence="NO";
	if(task_type.isPresent){
		presence = "YES";
	}
	expect(presence,"Presence for Status " + pm.getParamV("Type")).to.equal(pm.getParamV("PRESENCE"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });