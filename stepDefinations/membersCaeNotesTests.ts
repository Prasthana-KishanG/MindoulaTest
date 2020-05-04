"use strict";

import { Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { Base } from "../Util/Base";
import { Memberspage } from "../pageObjects/Memberspage";
import { MMRController } from "../Util/MMRController";
import { membersCaseNotes } from "../pageObjects/membersCaseNotes";
import { E2EMember } from "../pageObjects/E2EMember";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";

let mpage = new Memberspage();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let casenotes = new membersCaseNotes();
let pm = new ParamManager();
let E2EMem = new E2EMember();
Then("click on Add Case Notes", async function() {
  //  browser.sleep(2000);
  //  browser.actions().mouseMove(element(by.xpath("//*[@id='cn_list_view_btn']"))).perform();
  //  browser.sleep(2000);
  //  element(by.xpath("//*[@id='cn_list_view_btn']")).click();
  //  browser.sleep(3000);

  browser.sleep(3000);
  base.WaitforElementClickable(casenotes.m_casenotes_add);
  await casenotes.m_casenotes_add.click();
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(8000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
});

Then("Enter Data in Case Notes Page", async function(dataTable) {
  pm.dataTableV(dataTable);
  // base.setDateField(casenotes.m_casenotes_engdate, pm.getParamV("ENGAGEMENT_DATE"));
  await base.setChips_multiSelect(
    casenotes.m_casenotes_timerange,
    pm.getParamV("TIME_RANGE")
  );
  await base.setChips(
    casenotes.m_casenotes_eng_methods,
    pm.getParamV("ENGAGEMENT_METHODS"),
    casenotes.m_casenotes_eng_methods_input
  );
  //browser.sleep(6000);
  await base.setChips(
    casenotes.m_casenotes_interventions,
    pm.getParamV("INTERVENTIONS"),
    casenotes.m_casenotes_interventions_input
  );
  await base.setChips_multiSelect(
    casenotes.m_casenotes_diversion,
    pm.getParamV("DIVERSION")
  );
  await base.setChips_multiSelect(
    casenotes.m_casenotes_eng_status,
    pm.getParamV("ENGAGEMENT_STATUS")
  );
  await base.setChips_multiSelect(
    casenotes.m_casenotes_eng_fail_reason,
    pm.getParamV("FAIL_REASONS")
  );
  await base.setChips_multiSelect(
    casenotes.m_casenotes_individuals,
    pm.getParamV("INDIVIDUALS")
  );
  await base.setChips_multiSelect(
    casenotes.m_casenotes_interactions,
    pm.getParamV("INTERACTION")
  );
  await base.setChips_multiSelect(
    casenotes.m_casenotes_inperson,
    pm.getParamV("INPERSON")
  );

  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(6000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("navigate to Actions Taken tab", async function() {
  //browser.sleep(3000);
  browser.actions().mouseMove(element(by.xpath(casenotes.assessmentTab))).perform();
  browser.sleep(4000);
  await casenotes.m_actionstaken.click();

  browser.getTitle().then(text => {
    expect(text).to.equal("mMR");
    browser.sleep(4000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("Enter data in Actions taken page", async function(dataTable) {
  pm.dataTableH(dataTable);
  await base.setChips_multiSelect(casenotes.m_at_issues_addressed,pm.getParamH("IssuesAddressed")
  );
  //browser.actions().mouseMove(element(by.xpath(casenotes.m_at_caregap1))).perform();
  //base.WaitforElementClickable(element(by.xpath(casenotes.m_at_caregap)));
  //browser.sleep(3000);
  
  await base.setRadioField(casenotes.m_at_referrals, pm.getParamH("Referrals"));
  await base.setRadioField(casenotes.m_at_caregap, pm.getParamH("Care Gap"));

  browser.getTitle().then(text => {
    expect(text).to.equal("mMR");
    browser.sleep(3000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

// Then("click on Add Care Gaps", async function(dataTable) {

//   await casenotes.m_cg_Add.click();
//   await browser.getTitle().then(function(text) {
//     expect(text).to.equal("mMR");
//     browser.sleep(3000);
//   });
//   const screenshot = await browser.takeScreenshot();
//   this.attach(screenshot, "image/png");
//   // findElement(jsonData(objects,"m_cg_Add")).click();
//   // addScreenshot();
// });

Then('Enter Data in CareGaps', async function (dataTable) {
	pm.dataTableH(dataTable);
	//base.WaitforElementPresence(E2EMem.m_cg_caregaptype);
	await casenotes.m_cg_caregaptype.click();
	var m_cg_caregaptypedropdown = casenotes.m_cg_caregaptypedropdown_str.replace("$caregaptype$",pm.getParamH("Type"));
	base.WaitforElementPresence(element(by.xpath(m_cg_caregaptypedropdown)));
	await element(by.xpath(m_cg_caregaptypedropdown)).click();
	await casenotes.m_cg_identifiedon.click();
	await casenotes.m_cg_identifiedon.sendKeys(pm.getParamH("Identifid_On"));
	await casenotes.m_cg_identifiedon.sendKeys(protractor.Key.ESCAPE);

	await casenotes.m_cg_exp_res_date.click();
	await casenotes.m_cg_exp_res_date.sendKeys(pm.getParamH("Expected_Resolution"));
	await casenotes.m_cg_exp_res_date.sendKeys(protractor.Key.ESCAPE);
	await casenotes.m_cg_exp_res_date.sendKeys(protractor.Key.TAB);
	base.setInputField(casenotes.m_cg_desc, pm.getParamH("Description"));
	//await E2EMem.m_cg_desc.sendKeys(protractor.Key.TAB);
	browser.sleep(2000);
	await casenotes.m_cg_save.click();
	//await element(by.xpath("/p-toastitem/div/div")).click();
	browser.sleep(15000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		base.UrlContains("case_notes")
		
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
		
  });

// Then("click on Add Referral", async function(dataTable) {
//   // findElement(jsonData(objects,"m_referral_add")).click();
//   // addScreenshot();
// });

Then('Enter Data in Referral', async function (dataTable) {
	
	
	pm.dataTableH(dataTable);
	base.setDropdownField(casenotes.m_referral_type,casenotes.m_referral_ref_type_dropdown,pm.getParamH("Type"));
	if(pm.getParamH("providerInNetwork").trim()!=(""))
	base.setCheckboxField(casenotes.m_referral_isProvInNetwork, pm.getParamH("providerInNetwork"));
	base.WaitforElementPresence(casenotes.m_referral_ref_type);
	if(pm.getParamH("providerType").trim()!=(""))
	base.setDropdownField(casenotes.m_referral_ref_type,casenotes.m_referral_ref_type_dropdown,pm.getParamH("providerType"));
	if(pm.getParamH("specialtyType").trim()!=(""))
	base.setInputField(casenotes.m_referral_specialty_type, pm.getParamH("specialtyType"));
	base.setInputField(casenotes.m_referral_name, pm.getParamH("Name"));
	base.setDateField(casenotes.m_referral_date, pm.getParamH("ReferralDate"));
	base.setInputField(casenotes.m_referral_contact, pm.getParamH("ContactInfo"));
	base.setInputField(casenotes.m_referral_direct_name, pm.getParamH("DirectName"));
	base.setInputField(casenotes.m_referral_direct_contact, pm.getParamH("DirectContactInfo"));
	base.setDateField(casenotes.m_referral_appointment_date, pm.getParamH("AppointmentDate"));
	base.setDropdownField(casenotes.m_referral_status_type,casenotes.m_referral_status_type_dropdown,pm.getParamH("status"));
	base.setCheckboxField(casenotes.m_referral_reasonableTime,pm.getParamH("reasonableTime"));
	base.setCheckboxField(casenotes.m_referral_reminder,pm.getParamH("reminder"));
	base.setCheckboxField(casenotes.m_referral_assistance,pm.getParamH("assitance"));
  await casenotes.m_referral_save.click();
  browser.sleep(15000);
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
		
  });

Then("navigate to Next Steps tab", async function() {
  browser.actions().mouseMove(element(by.xpath(casenotes.assessmentTab))).perform();
  browser.sleep(8000);
  await casenotes.m_nextsteps.click();

  browser.getTitle().then(text => {
    expect(text).to.equal("mMR");
    browser.sleep(4000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
});
Then("navigate to Engagement Details tab", async function() {
  browser.actions().mouseMove(element(by.xpath(casenotes.assessmentTab))).perform();
  browser.sleep(2000);
  await casenotes.m_engdetails.click();

  browser.getTitle().then(text => {
    expect(text).to.equal("mMR");
    browser.sleep(3000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
});

Then("Enter Data in Next Steps page", async function(dataTable) {
  var appointment = [];
  pm.dataTableH(dataTable);
//   for (const str of pm.getParamH("follow_up_plan").split(",")){
//   var m_ns_follow_plan = casenotes.m_ns_follow_plan_str.replace("$replaceToken$", str);
// 	base.WaitforElementPresence(element(by.xpath(m_ns_follow_plan)));
//     base.moveCursorToAnElement(m_ns_follow_plan);
//     browser.sleep(8000);
//     await element(by.xpath(m_ns_follow_plan)).click();
//     //browser.sleep(3000);
//   }

//     if(pm.getParamH("follow_appointment").trim()!==("")){
//       browser.sleep(8000);
//     await casenotes.m_ns_add_appointment.click();
//     browser.sleep(8000);
//     appointment = pm.getParamH("follow_appointment").split(",");
//     base.setDropdownField(casenotes.m_ns_app_careextender,casenotes.m_ns_app_careextender_dropdown,appointment[0]);
//     base.setDateField(casenotes.m_ns_app_goal_date, appointment[1]);
//     base.setInputField(casenotes.m_ns_app_desc, appointment[2]);
//     await casenotes.m_ns_app_save.click();
//     await browser.getTitle().then(function(text) {
//       expect(text).to.equal("mMR");
//       browser.sleep(3000);
//       }); 
// }
    await base.setRadioField(casenotes.m_ns_app_tasks, pm.getParamH("Tasks"));
    await casenotes.m_ns_app_notes.sendKeys(pm.getParamH("Notes"));
  	await casenotes.m_ns_app_notes.sendKeys(protractor.Key.TAB);
    browser.actions().mouseMove(element(by.xpath(casenotes.assessmentTab))).perform();
    await browser.getTitle().then(function(text) {
      expect(text).to.equal("mMR");
      browser.sleep(3000);
      });
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot, "image/png");
 
});


Then('Enter Data in Tasks', async function (dataTable) {
	pm.dataTableH(dataTable);
	await casenotes.m_task_type.click();
	var m_task_type_dropdown = casenotes.m_task_type_dropdown_str.replace("$type$",pm.getParamH("Type"));
	base.WaitforElementPresence(element(by.xpath(m_task_type_dropdown)));
	await element(by.xpath(m_task_type_dropdown)).click();
	await casenotes.m_task_careextender.click();
	var m_task_careextender_dropdown = casenotes.m_task_careextender_dropdown_str.replace("$careextender$",pm.getParamH("CareExtender"));
	base.WaitforElementPresence(element(by.xpath(m_task_careextender_dropdown)));
	await element(by.xpath(m_task_careextender_dropdown)).click();
	base.setInputField(casenotes.m_task_description, pm.getParamH("Description"));
	base.setDateField(casenotes.m_task_goaldate, pm.getParamH("goalDate"));
	await casenotes.m_task_save.click();
	//base.UrlContains("tasks");
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
			
});

Then("take action on case notes", async function(dataTable) {

  pm.dataTableH(dataTable);
  if (pm.getParamH("Button_to_click") == ("Publish")) {
    browser.sleep(4000);
    await casenotes.m_publish_btn.click();
    browser.sleep(6000);
  }
  else if (pm.getParamH("Button_to_click") == ("Discard")) {
    await casenotes.m_discard_btn.click();
    browser.sleep(4000);
  }
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    //browser.sleep(3000);
    });
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  
});

Then("verify data in Notes", async function(dataTable) {

  pm.dataTableV(dataTable);
  //expect(await casenotes.m_cn_nextsteps_notes.getText(),'NOTES').to.contains(pm.getParamV("NOTES"));
  //expect(await casenotes.m_cn_nextsteps_notes.getText(),'NOTES').to.contain("Notes here...");
  // base.compareValues("NOTES", await casenotes.m_cn_nextsteps_notes.getText(), pm.getParamV("NOTES"));

  //       const val = base.getValue();
  // expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});




Then("verify data in case notes response page", async function(dataTable) {

  pm.dataTableV(dataTable);
  base.compareValues("TOTAL_TIME", await casenotes.m_cn_resp_total_time.getText(), pm.getParamV("TOTAL_TIME"));
  base.compareValues("TIME_RANGE", await casenotes.m_cn_resp_time_range.getText(), pm.getParamV("TIME_RANGE"));
  base.compareValues("AUTHOR", await casenotes.m_cn_resp_author.getText(), pm.getParamV("AUTHOR"));
  const engMethodVal = await base.getTextElements(casenotes.m_cn_resp_eng_method);
  console.log('engMethodVal -> ', engMethodVal);
  
    var interventionVal = await base.getTextElementsInterventionVal(casenotes.m_cn_resp_interventions);
    console.log('interventionVal -> ', interventionVal);
   
        base.compareValues("ENGAGEMENT_METHODS", engMethodVal, pm.getParamV("ENGAGEMENT_METHODS"));
        base.compareValues("INTERVENTIONS", interventionVal , pm.getParamV("INTERVENTIONS"));
        base.compareValues('DIVERSION_TRACKING', await element(by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Diversion Tracking"))).getText(), pm.getParamV("DIVERSION_TRACKING"));
        base.compareValues('ENGAGEMENT_STATUS', await element(by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Engagement Status"))).getText(), pm.getParamV("ENGAGEMENT_STATUS"));
        base.compareValues('FAIL_REASONS', await element(by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Fail Reasons"))).getText(), pm.getParamV("FAIL_REASONS"));
        base.compareValues('INDIVIDUALS', await element(by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "Individuals present during the engagement"))).getText(), pm.getParamV("INDIVIDUALS"));
        base.compareValues('INTERACTION', await element(by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "How was the member during interaction?"))).getText(), pm.getParamV("INTERACTION"));
        base.compareValues('INPERSON', await element(by.xpath(casenotes.m_cn_resp_chip_text.replace("$replaceToken$", "If the person was in person"))).getText(), pm.getParamV("INPERSON"));
       
       var issuesAddressedVal = await base.getTextElementsIssuesAddressedVal(casenotes.m_cn_resp_issues_addressed);
       console.log('issuesAddressedVal -> ', issuesAddressedVal);
      
        base.compareValues("ISSUES_ADDRESSED", issuesAddressedVal , pm.getParamV("ISSUES_ADDRESSED"));

       var followupVal = await base.getTextElementsFollowupVal(casenotes.m_cn_resp_follow_up_plans);
       console.log('followupVal -> ', followupVal);
     
       // base.compareValues("FOLLOWUP_PLANS", followupVal , pm.getParamV("FOLLOWUP_PLANS"));
        base.compareValues("NOTES", await casenotes.m_cn_resp_notes.getText(), pm.getParamV("NOTES"));

        const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});


Then('verify data in cheatsheet page', async function (dataTable) {
  pm.dataTableV(dataTable);
  var LastEngagement=await casenotes.cheatsheets_phone.getText()+','+await casenotes.cheatsheets_inperson.getText()+','+await casenotes.cheatsheets_appointmentschd.getText()+','+await casenotes.cheatsheets_attemptcontc.getText()+','+await casenotes.cheatsheets_casereviewconsult.getText();
  var ObservationsLastEngagement=await casenotes.cheatsheets_anxious.getText()+','+await casenotes.cheatsheets_swearing.getText();
  // console.log('LastEngagement -> ', LastEngagement);
  // console.log('ObservationsLastEngagement -> ', ObservationsLastEngagement);
  base.compareValues("Last Engagement", LastEngagement , pm.getParamV("LAST_ENGAGEMENT"));
  base.compareValues("Observations from Last Engagement", ObservationsLastEngagement, pm.getParamV("OBSERVATIONS_FROM_LAST_ENGAGEMENT"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});