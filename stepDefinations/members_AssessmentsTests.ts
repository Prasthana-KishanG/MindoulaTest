"use strict";

import { browser, element, by, By } from "protractor";
import { Base } from "../Util/Base";
import { Memberspage } from "../pageObjects/Memberspage";
import { ParamManager } from "../Util/ParamManager";
import chai from "chai";

import { Then } from "cucumber";


let mpage = new Memberspage();
let base = new Base();
let pm = new ParamManager();
var expect = chai.expect;

Then('click on Assessments Tab', async function (dataTable) {
  var a = dataTable.hashes();

  if (a[0].TabName == "Documents") {
    element(by.xpath(mpage.doctab)).click()
  }
  else {

    var m_tab = mpage.tab.replace("$tabname$", a[0].TabName);
    element(by.xpath(m_tab)).click();
  }

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('click on Starts Assessment', async function (dataTable) {
  pm.dataTableH(dataTable);
  if (pm.getParamH("Name") == "HRSN") {
    base.WaitforElementPresence(element(By.xpath(mpage.hrsnele)));
    browser.actions().mouseMove(element(By.xpath(mpage.hrsnele))).perform();
    element(By.xpath(mpage.hrsnele)).click();
    browser.sleep(8000);
  }

  if (pm.getParamH("Name") == "CCP Intake") {
    base.WaitforElementPresence(element(By.xpath(mpage.CCPIntake)));
    browser.actions().mouseMove(element(By.xpath(mpage.CCPIntake))).perform();
    element(By.xpath(mpage.CCPIntake)).click();
    browser.sleep(8000);
  }

  if (pm.getParamH("Name") == "IVRP Intake") {
    base.WaitforElementPresence(element(By.xpath(mpage.IVRPIntake)));
    browser.actions().mouseMove(element(By.xpath(mpage.IVRPIntake))).perform();
    element(By.xpath(mpage.IVRPIntake)).click();
    browser.sleep(6000);
  }

  if (pm.getParamH("Name") == "CCP Intake (V2)") {
    base.WaitforElementPresence(element(By.xpath(mpage.CCPIntakeV2)));
    browser.actions().mouseMove(element(By.xpath(mpage.CCPIntakeV2))).perform();
    element(By.xpath(mpage.CCPIntakeV2)).click();
    browser.sleep(8000);
  }

  if (pm.getParamH("Name") == "IVRP Intake (V2)") {
    base.WaitforElementPresence(element(By.xpath(mpage.IVRPV2)));
    browser.actions().mouseMove(element(By.xpath(mpage.IVRPV2))).perform();
    element(By.xpath(mpage.IVRPV2)).click();
    browser.sleep(8000);
  }

  
  if (pm.getParamH("Name") == "IVRP Intake (V3)") {
    base.WaitforElementPresence(element(By.xpath(mpage.IVRPV3)));
    browser.actions().mouseMove(element(By.xpath(mpage.IVRPV3))).perform();
    element(By.xpath(mpage.IVRPV3)).click();
    browser.sleep(8000);
  }

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('click on Start Assessment', async function (dataTable) {
  pm.dataTableH(dataTable);
  if (pm.getParamH("Name") == "HRSN") {
    base.WaitforElementPresence(element(By.xpath(mpage.hrsnele)));
    browser.actions().mouseMove(element(By.xpath(mpage.hrsnele))).perform();
    element(By.xpath(mpage.hrsnele)).click();
  }

  if (pm.getParamH("Name") == "CCP Intake") {

    browser.actions().mouseMove(element(By.xpath(mpage.CCPIntake))).perform();
    base.WaitforElementPresence(element(By.xpath(mpage.CCPIntake)));
    element(By.xpath(mpage.CCPIntake)).click();
  }

  else {
    var m_start_assessment = mpage.mstart_str.replace("$replaceToken$", pm.getParamH("Name"));
    base.WaitforElementPresence(element(by.xpath(m_start_assessment)));
    base.moveCursorToAnElement(m_start_assessment);
    
    await element(by.xpath(m_start_assessment)).click();
    //browser.sleep(5000);
    //browser.navigate().refresh();
    browser.sleep(4000);
    base.WaitforElementPresence(element(By.tagName("assessment-title")));
    await browser.getTitle().then(function (text) {
      expect(text).to.equal("mMR");
      browser.sleep(3000);
    })
  }
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});



Then('Enter Data in M3 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  const arr = pm.getPMap();
  for (const key of Object.keys(arr)) {
    await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));

     await browser.getTitle().then(function (text) {
      expect(text).to.equal("mMR");
    })
  }
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

// Then('Enter Data in M3 Assessment', async function (dataTable) {
//   pm.dataTableV(dataTable);
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I feel sad, down in the dumps or unhappy"), pm.getParamV("I feel sad, down in the dumps or unhappy"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Nothing seems to give me much pleasure"), pm.getParamV("Nothing seems to give me much pleasure"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have had thoughts of suicide"), pm.getParamV("I have had thoughts of suicide"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have difficulty sleeping"), pm.getParamV("I have difficulty sleeping"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have been sleeping too much"), pm.getParamV("I have been sleeping too much"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have lost some appetite"), pm.getParamV("I have lost some appetite"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have been eating more"), pm.getParamV("I have been eating more"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I feel tense, anxious"), pm.getParamV("I feel tense, anxious"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I feel worried or fearful"), pm.getParamV("I feel worried or fearful"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have attacks of anxiety or panic"), pm.getParamV("I have attacks of anxiety or panic"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I worry about dying or losing control"), pm.getParamV("I worry about dying or losing control"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I am nervous or shaky in social situations"), pm.getParamV("I am nervous or shaky in social situations"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have nightmares or flashbacks"), pm.getParamV("I have nightmares or flashbacks"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I am jumpy or feel startled easily"), pm.getParamV("I am jumpy or feel startled easily"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I avoid places that strongly remind me of a bad experience"), pm.getParamV("I avoid places that strongly remind me of a bad experience"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I feel dull, numb, or detached"), pm.getParamV("I feel dull, numb, or detached"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "get certain thoughts out of my mind"), pm.getParamV("get certain thoughts out of my mind"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I feel I must repeat certain acts or rituals"), pm.getParamV("I feel I must repeat certain acts or rituals"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I feel the need to check and recheck things"), pm.getParamV("I feel the need to check and recheck things"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Had more energy than usual?"), pm.getParamV("Had more energy than usual?"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Felt unusually irritable or angry?"), pm.getParamV("Felt unusually irritable or angry?"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Felt unusually excited, revved up or high?"), pm.getParamV("Felt unusually excited, revved up or high?"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Needed less sleep than usual?"), pm.getParamV("Needed less sleep than usual?"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Interferes with work or school"), pm.getParamV("Interferes with work or school"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Affects my relationships with friends or family"), pm.getParamV("Affects my relationships with friends or family"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has led to my using alcohol to get by"), pm.getParamV("Has led to my using alcohol to get by"));
//   await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has led to my using drugs"), pm.getParamV("Has led to my using drugs"));
  
//   await browser.getTitle().then(function (text) {
//     expect(text).to.equal("mMR");
//   })
//   const screenshot = await browser.takeScreenshot();
//   this.attach(screenshot, "image/png");
//   return true;
// });

Then('Verify M3 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('M3 - Risk-Check', await mpage.assess_risk.getText(), pm.getParamV("RISK"));
  base.compareValues('M3 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('M3 - M3_IMPAIRMENT_SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "IMPAIRMENT"))).getText(), pm.getParamV("M3_IMPAIRMENT_SCORE"));
  base.compareValues('M3 - ANXIETY_SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "ANXIETY"))).getText(), pm.getParamV("ANXIETY_SCORE"));
  base.compareValues('M3 - SELF-HARM SYMPTOM SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "SELF-HARM"))).getText(), pm.getParamV("SELF_HARM_SCORE"));
  base.compareValues('M3 - BIPOLAR RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "BIPOLAR"))).getText(), pm.getParamV("BIPOLAR_SCORE"));
  base.compareValues('M3 - DEPRESSION RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "DEPRESSION"))).getText(), pm.getParamV("DEPRESSION_SCORE"));
  base.compareValues('M3 - SELF_HARM_ALERT', base.verifySelfHarmAlert(base.getSize(mpage.m_m3_selfharmalert)), pm.getParamV("SELF_HARM_ALERT"));
  base.compareValues('M3 - PTSD RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "PTSD"))).getText(), pm.getParamV("PTSD_SCORE"));
  //base.compareValues('M3 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasks(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
 base.compareValues('M3 - FOLLOW UP TASKS', await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS")); 
 
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify M3 Responses1', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('M3 - Risk-Check', await mpage.assess_risk.getText(), pm.getParamV("RISK"));
  base.compareValues('M3 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('M3 - M3_IMPAIRMENT_SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "IMPAIRMENT"))).getText(), pm.getParamV("M3_IMPAIRMENT_SCORE"));
  base.compareValues('M3 - ANXIETY_SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "ANXIETY"))).getText(), pm.getParamV("ANXIETY_SCORE"));
  base.compareValues('M3 - SELF-HARM SYMPTOM SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "SELF-HARM"))).getText(), pm.getParamV("SELF_HARM_SCORE"));
  base.compareValues('M3 - BIPOLAR RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "BIPOLAR"))).getText(), pm.getParamV("BIPOLAR_SCORE"));
  base.compareValues('M3 - DEPRESSION RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "DEPRESSION"))).getText(), pm.getParamV("DEPRESSION_SCORE"));
  base.compareValues('M3 - SELF_HARM_ALERT', base.verifySelfHarmAlert1(element(by.xpath(mpage.m_m3_selfharmalert1))), pm.getParamV("SELF_HARM_ALERT"));
  base.compareValues('M3 - PTSD RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "PTSD"))).getText(), pm.getParamV("PTSD_SCORE"));
  //base.compareValues('M3 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasks(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
 //base.compareValues('M3 - FOLLOW UP TASKS', await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS")); 
 
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify M3 Responses2', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('M3 - Risk-Check', await mpage.assess_risk.getText(), pm.getParamV("RISK"));
  base.compareValues('M3 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('M3 - M3_IMPAIRMENT_SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "IMPAIRMENT"))).getText(), pm.getParamV("M3_IMPAIRMENT_SCORE"));
  base.compareValues('M3 - ANXIETY_SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "ANXIETY"))).getText(), pm.getParamV("ANXIETY_SCORE"));
  base.compareValues('M3 - SELF-HARM SYMPTOM SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "SELF-HARM"))).getText(), pm.getParamV("SELF_HARM_SCORE"));
  base.compareValues('M3 - BIPOLAR RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "BIPOLAR"))).getText(), pm.getParamV("BIPOLAR_SCORE"));
  base.compareValues('M3 - DEPRESSION RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "DEPRESSION"))).getText(), pm.getParamV("DEPRESSION_SCORE"));
  base.compareValues('M3 - SELF_HARM_ALERT', base.verifySelfHarmAlert1(element(by.xpath(mpage.m_m3_selfharmalert1))), pm.getParamV("SELF_HARM_ALERT"));
  base.compareValues('M3 - PTSD RISK SCORE', await element(by.xpath(mpage.m_m3_score_type.replace("$replaceToken$", "PTSD"))).getText(), pm.getParamV("PTSD_SCORE"));
  //base.compareValues('M3 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasks(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('M3 - FOLLOW UP TASKS', await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS")); 
 
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});


Then('Verify Followup Tasks in Home page', async function (dataTable) {
  pm.dataTableV(dataTable);
  
  base.compareValues('Home Page - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTaskHome(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('take action on assessment', async function (dataTable) {
 
  pm.dataTableH(dataTable);
  if (pm.getParamH("Button_to_click") == ("Submit")) {
    await mpage.m_submit_btn.click();
    browser.sleep(8000);
    //base.UrlContains("results");
    base.WaitforElementPresence(mpage.m_m3_followup);
     } 
  else if (pm.getParamH("Button_to_click") == ("Discard")) {
    await mpage.m_discard_btn.click();
    await mpage.m_discard_yes.click();
  } 
  else if (pm.getParamH("Button_to_click") == ("Save")) {
    browser.sleep(5000);
    await mpage.m_save_btn.click();
    browser.sleep(7000);
    await browser.getTitle().then(function (text) {
      expect(text).to.equal("mMR");
      })
      const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  }
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('take actions on assessment', async function (dataTable) {
   pm.dataTableH(dataTable);
  if (pm.getParamH("Button_to_click") == ("Submit")) {
    await mpage.m_submit_btn.click();
    browser.sleep(10000);
    //base.UrlContains("results");
    //base.WaitforElementPresence(mpage.m_m3_followup);
    } 
  else if (pm.getParamH("Button_to_click") == ("Discard")) {
    await mpage.m_discard_btn.click();
    await mpage.m_discard_yes.click();
  } 
  else if (pm.getParamH("Button_to_click") == ("Save")) {
    await mpage.m_save_btn.click();
    await browser.getTitle().then(function (text) {
      expect(text).to.equal("mMR");

    })
  }
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('take action in results page', async function (dataTable) {
  browser.sleep(4000);
  pm.dataTableH(dataTable);
  if (pm.getParamH("BUTTON_TO_CLICK") == ("Edit")) {
    await mpage.m_edit_btn.click();
    browser.sleep(4000);
    await browser.getTitle().then(function (text) {
      expect(text).to.equal("mMR");
    })
  }
  
});

Then('click on Members Tab', async function (dataTable) {
   pm.dataTableH(dataTable);
  var m_tab = mpage.assessmentsTab.replace("$tabname$", pm.getParamH("TabName"));
  if (pm.getParamH("TabName") == "Documents") {
    element(by.xpath(mpage.doctab)).click()
  }
  // if (pm.getParamH("TabName") == "Care Team") {
  //   //var m_tab = mpage.assessmentsTab.replace("$tabname$", pm.getParamH("TabName"));
  //   base.WaitforElementPresence(element(by.xpath(m_tab)));
  //  await element(by.xpath(m_tab)).click();
  //  //browser.sleep(6000);
  //  base.UrlContains("care-team");
  //   await browser.getTitle().then(function (text) {
  //     expect(text).to.equal("mMR");

  //   })
  // }
  // if (pm.getParamH("TabName") == "Tasks") {
  //   //var m_tab = mpage.assessmentsTab.replace("$tabname$", pm.getParamH("TabName"));
  //   base.WaitforElementPresence(element(by.xpath(m_tab)));
  //  await element(by.xpath(m_tab)).click();
  //  base.UrlContains("tasks");
  //   await browser.getTitle().then(function (text) {
  //     expect(text).to.equal("mMR");

  //   })
  // }
  else {
   var m_tab = mpage.assessmentsTab.replace("$tabname$", pm.getParamH("TabName"));
    base.WaitforElementPresence(element(by.xpath(m_tab)));
   await element(by.xpath(m_tab)).click();
   browser.sleep(7000);
   //base.UrlContains("assessments");
    await browser.getTitle().then(function (text) {
      expect(text).to.equal("mMR");

    })
  }
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});
Then('Enter Data in MADRS Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing despondency"), pm.getParamV("Representing despondency"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing reports of depressed mood"), pm.getParamV("Representing reports of depressed mood"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing reports of depressed mood"), pm.getParamV("Representing reports of depressed mood"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing feelings of ill-defined discomfort"), pm.getParamV("Representing feelings of ill-defined discomfort"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing the experience of reduced duration or depth of sleep"), pm.getParamV("Representing the experience of reduced duration or depth of sleep"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing the feeling of loss of appetite compared with when well"), pm.getParamV("Representing the feeling of loss of appetite compared with when well"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing difficulties in collecting one"), pm.getParamV("Representing difficulties in collecting one"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing a difficulty getting started or slowness"), pm.getParamV("Representing a difficulty getting started or slowness"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing the subjective experience of reduced interest in the surroundings"), pm.getParamV("Representing the subjective experience of reduced interest in the surroundings"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing thoughts of guilt"), pm.getParamV("Representing thoughts of guilt"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Representing the feeling that life is not worth living"), pm.getParamV("Representing the feeling that life is not worth living"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Verify MADRS Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('MADRS - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('MADRS - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('MADRS - IMPAIRMENT_SCORE', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('MADRS - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasks(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('MADRS - FOLLOW UP TASKS', await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in Trauma Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you feel safe at home?"), pm.getParamV("Do you feel safe at home?"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "kicked or otherwise physically hurt by someone"), pm.getParamV("kicked or otherwise physically hurt by someone"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been physically attacked"), pm.getParamV("Have you ever been physically attacked"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been physically attacked"), pm.getParamV("Have you ever been physically attacked"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Were you ever present when another person was killed"), pm.getParamV("Were you ever present when another person was killed"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been forced to have sex or do something sexual against your will?"), pm.getParamV("Have you ever been forced to have sex or do something sexual against your will?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been in any other situation that was extremely frightening"), pm.getParamV("Have you ever been in any other situation that was extremely frightening"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  })
  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));

  //     await browser.getTitle().then(function (text) {
  //     expect(text).to.equal("mMR");
  //   })
  // }
  // await browser.getTitle().then(function (text) {
  //   expect(text).to.equal("mMR");

  // })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Enter Data in Trauma Assessment Member Platform', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you feel safe at home?"), pm.getParamV("Do you feel safe at home?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "kicked or otherwise physically hurt by someone"), pm.getParamV("kicked or otherwise physically hurt by someone"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been forced to have sex or do something sexual against your will?"), pm.getParamV("Have you ever been forced to have sex or do something sexual against your will?"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been physically attacked, like being hit, kicked or beaten up?"), pm.getParamV("Have you ever been physically attacked, like being hit, kicked or beaten up?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever been in any other situation that was extremely frightening"), pm.getParamV("Have you ever been in any other situation that was extremely frightening"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Were you ever present when another person was killed, seriously injured, or sexually or physically assaulted?"), pm.getParamV("Were you ever present when another person was killed, seriously injured, or sexually or physically assaulted?"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  })
  
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify Trauma Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('Trauma - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('Trauma - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('Trauma - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('Trauma - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksTrauma(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('Trauma - FOLLOW UP TASKS', await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('start assessment from results page', async (dataTable) => {
  pm.dataTableH(dataTable);
  if (pm.getParamH("Name") == "HRSN") {
    base.scrollVerticalBy();
    element(mpage.HRSN_start).click();
  }
  if (pm.getParamH("Name") == "HRSNS") {
    base.scrollVerticalBy();
    element(mpage.HRSNS_start).click();
  }
  if (pm.getParamH("Name") == "CCP Intake") {
    base.scrollVerticalBy();
    element(mpage.CCPIntake_start).click();
  }
  if (pm.getParamH("Name") == "CCP Intake (V2)") {
    base.scrollVerticalBy();
    element(mpage.CCPIntakeV2_start).click();
  }
  if (pm.getParamH("Name") == "PHQ9") {
    base.scrollVerticalBy();
    element(mpage.PHQ9_start).click();
  }

  else {
    base.scrollVerticalBy();
    var m_start_assessment = mpage.mstart_str.replace("$replaceToken$", pm.getParamH("Name"));
    base.moveCursorToAnElement(m_start_assessment);
    await element(by.xpath(m_start_assessment)).click();
    //browser.sleep(7000);
    await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

    })
  }
});

Then('Enter Data in PHQ9 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling down, depressed, or hopeless"), pm.getParamV("Feeling down, depressed, or hopeless"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Little interest or pleasure in doing things?"), pm.getParamV("Little interest or pleasure in doing things?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble falling or staying asleep, or sleeping too much"), pm.getParamV("Trouble falling or staying asleep, or sleeping too much"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble falling or staying asleep, or sleeping too much"), pm.getParamV("Trouble falling or staying asleep, or sleeping too much"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling tired or having little energy"), pm.getParamV("Feeling tired or having little energy"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Poor appetite or overeating"), pm.getParamV("Poor appetite or overeating"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling bad about yourself or that you are a failure"), pm.getParamV("Feeling bad about yourself or that you are a failure"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble concentrating on things, such as reading the newspaper"), pm.getParamV("Trouble concentrating on things, such as reading the newspaper"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Moving or speaking so slowly that other people could have noticed"), pm.getParamV("Moving or speaking so slowly that other people could have noticed"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Thoughts that you would be better off dead"), pm.getParamV("Thoughts that you would be better off dead"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If you checked off any problems, how difficult have these problems made it for you to do your work"), pm.getParamV("If you checked off any problems, how difficult have these problems made it for you to do your work"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  })

  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));
  //   await browser.getTitle().then(function (text) {
  //     expect(text).to.equal("mMR");
  //   })
  // }
  // await browser.getTitle().then(function (text) {
  //   expect(text).to.equal("mMR");
  //})
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify PHQ9 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('PHQ9 - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('PHQ9 - Risk-Check', await mpage.assess_risk.getText(), pm.getParamV("RISK"));
  base.compareValues('PHQ9 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('PHQ9 - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  base.compareValues('PHQ9 - SELF_HARM_ALERT', base.verifySelfHarmAlert(base.getSize(mpage.m_m3_selfharmalert)), pm.getParamV("SELF_HARM_ALERT"));
  //base.compareValues('PHQ9 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksPHQ(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('PHQ9 - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
    const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in CCI Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "technology?"), pm.getParamV("technology?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Hx"), pm.getParamV("Hx"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Speech"), pm.getParamV("Speech"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Affect"), pm.getParamV("Affect"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Mood"), pm.getParamV("Mood"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Orientation"), pm.getParamV("Orientation"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Memory"), pm.getParamV("Memory"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Attention"), pm.getParamV("Attention"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Hallucination"), pm.getParamV("Hallucination"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Thoughts"), pm.getParamV("Thoughts"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Suicidality"), pm.getParamV("Suicidality"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Homicidality"), pm.getParamV("Homicidality"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Behavior"), pm.getParamV("Behavior"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Insight"), pm.getParamV("Insight"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Judgement"), pm.getParamV("Judgement"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Impulse control"), pm.getParamV("Impulse control"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Pregnant/Breastfeeding"), pm.getParamV("Pregnant/Breastfeeding"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Current Use"), pm.getParamV("Current Use"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Hx of Mental Illness"), pm.getParamV("Hx of Mental Illness"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Hx of Substance Abuse"), pm.getParamV("Hx of Substance Abuse"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Hx of Suicide"), pm.getParamV("Hx of Suicide"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Hx of Violent"), pm.getParamV("Hx of Violent"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Trauma"), pm.getParamV("Trauma"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Sleep"), pm.getParamV("Sleep"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Exercise"), pm.getParamV("Exercise"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Interested in treatment"), pm.getParamV("Interested in treatment"));
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Enter Data in HRSN Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Think about the place you live"), pm.getParamV("Think about the place you live"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "What is your living situation today?"), pm.getParamV("What is your living situation today?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the past 12 months, has lack of reliable transportation kept you from medical appointments"), pm.getParamV("In the past 12 months, has lack of reliable transportation kept you from medical appointments"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you worried that your food would run out before you got money to buy more"), pm.getParamV("you worried that your food would run out before you got money to buy more"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "have money to get more"), pm.getParamV("have money to get more"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the past 12 months has the electric, gas, oil, or water company threatened to shut off services"), pm.getParamV("In the past 12 months has the electric, gas, oil, or water company threatened to shut off services"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, physically hurt you?"), pm.getParamV("How often does anyone, including family and friends, physically hurt you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, insult or talk down to you?"), pm.getParamV("How often does anyone, including family and friends, insult or talk down to you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, threaten you with harm?"), pm.getParamV("How often does anyone, including family and friends, threaten you with harm?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, scream or curse at you?"), pm.getParamV("How often does anyone, including family and friends, scream or curse at you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How hard is it for you to pay for the very basics like food, housing, medical care, and heating?"), pm.getParamV("How hard is it for you to pay for the very basics like food, housing, medical care, and heating?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you want help finding or keeping work or a job?"), pm.getParamV("Do you want help finding or keeping work or a job?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If for any reason you need help with day-to-day activities such as bathing, preparing meals, shopping, managing finances, etc"), pm.getParamV("If for any reason you need help with day-to-day activities such as bathing, preparing meals, shopping, managing finances, etc"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often do you feel lonely or isolated from those around you?"), pm.getParamV("How often do you feel lonely or isolated from those around you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you speak a language other than English at home?"), pm.getParamV("Do you speak a language other than English at home?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you want help with school or training?"), pm.getParamV("Do you want help with school or training?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the last 30 days, other than the activities you did for work, on average"), pm.getParamV("In the last 30 days, other than the activities you did for work, on average"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "On average, how many minutes did you usually spend exercising at this level on one of those days?"), pm.getParamV("On average, how many minutes did you usually spend exercising at this level on one of those days?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many times in the past 12 months have you had 5 or more drinks in a day"), pm.getParamV("How many times in the past 12 months have you had 5 or more drinks in a day"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many times in the past 12 months have you used tobacco products"), pm.getParamV("How many times in the past 12 months have you used tobacco products"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many times in the past year have you used prescription drugs for non-medical reasons?"), pm.getParamV("How many times in the past year have you used prescription drugs for non-medical reasons?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many times in the past year have you used illegal drugs?"), pm.getParamV("How many times in the past year have you used illegal drugs?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Over the past 2 weeks, how often have you been bothered by any of the following problems?Little interest or pleasure in doing things?"), pm.getParamV("Over the past 2 weeks, how often have you been bothered by any of the following problems?Little interest or pleasure in doing things?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Over the past 2 weeks, how often have you been bothered by any of the following problems?Feeling down, depressed, or hopeless?"), pm.getParamV("Over the past 2 weeks, how often have you been bothered by any of the following problems?Feeling down, depressed, or hopeless?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Stress means a situation in which a person feels tense, restless, nervous, or anxious"), pm.getParamV("Stress means a situation in which a person feels tense, restless, nervous, or anxious"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Because of a physical, mental, or emotional condition, do you have serious difficulty concentrating"), pm.getParamV("Because of a physical, mental, or emotional condition, do you have serious difficulty concentrating"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Because of a physical, mental, or emotional condition, do you have difficulty doing errands alone"), pm.getParamV("Because of a physical, mental, or emotional condition, do you have difficulty doing errands alone"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify HRSN Responses', async function (dataTable) {
  pm.dataTableV(dataTable);

  base.compareValues('HRSN - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('HRSN - DISABILITIES SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "DISABILITIES SCREEN"))).getText(), pm.getParamV("DISABILITIES SCREEN"));
  base.compareValues('HRSN - DISABILITIES SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "DISABILITIES SUM"))).getText(), pm.getParamV("DISABILITIES SUM"));
  base.compareValues('HRSN - STRESS SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "STRESS SCREEN"))).getText(), pm.getParamV("STRESS SCREEN"));
  base.compareValues('HRSN - STRESS SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "STRESS SUM"))).getText(), pm.getParamV("STRESS SUM"));
  base.compareValues('HRSN - MENTALHEALTH SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "MENTAL HEALTH SCREEN"))).getText(), pm.getParamV("MENTALHEALTH SCREEN"));
  base.compareValues('HRSN - MENTALHEALTH SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "MENTAL HEALTH SUM"))).getText(), pm.getParamV("MENTALHEALTH SUM"));
  base.compareValues('HRSN - SUBSTANCE SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SUBSTANCE SCREEN"))).getText(),pm.getParamV("SUBSTANCE SCREEN"));
  base.compareValues('HRSN - SUBSTANCE SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SUBSTANCE SUM"))).getText(), pm.getParamV("SUBSTANCE SUM"));
  base.compareValues('HRSN - ACTIVITY SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "ACTIVITY SCREEN"))).getText(),pm.getParamV("ACTIVITY SCREEN"));
  base.compareValues('HRSN - ACTIVITY SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "ACTIVITY SUM"))).getText(), pm.getParamV("ACTIVITY SUM"));
  base.compareValues('HRSN - EDUCATION SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "EDUCATION SCREEN"))).getText(), pm.getParamV("EDUCATION SCREEN"));
  base.compareValues('HRSN - EDUCATION SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "EDUCATION SUM"))).getText(), pm.getParamV("EDUCATION SUM"));
  base.compareValues('HRSN - SUPPORT SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SUPPORT SCREEN"))).getText(), pm.getParamV("SUPPORT SCREEN"));
  base.compareValues('HRSN - SUPPORT SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SUPPORT SUM"))).getText(), pm.getParamV("SUPPORT SUM"));
  base.compareValues('HRSN - EMPLOYMENT SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "EMPLOYMENT SCREEN"))).getText(),pm.getParamV("EMPLOYMENT SCREEN"));
  base.compareValues('HRSN - EMPLOYMENT SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "EMPLOYMENT SUM"))).getText(), pm.getParamV("EMPLOYMENT SUM"));
  base.compareValues('HRSN - FINANCIAL SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "FINANCIAL SCREEN"))).getText(), pm.getParamV("FINANCIAL SCREEN"));
  base.compareValues('HRSN - FINANCIAL SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "FINANCIAL SUM"))).getText(), pm.getParamV("FINANCIAL SUM"));
  base.compareValues('HRSN - SAFETY  SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SAFETY  SCREEN"))).getText(), pm.getParamV("SAFETY SCREEN"));
  base.compareValues('HRSN - SAFETY  SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SAFETY  SUM"))).getText(), pm.getParamV("SAFETY SUM"));
  base.compareValues('HRSN - UTILITIES SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "UTILITIES SCREEN"))).getText(), pm.getParamV("UTILITIES SCREEN"));
  base.compareValues('HRSN - UTILITIES SUM',  await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "UTILITIES SUM"))).getText(), pm.getParamV("UTILITIES SUM"));
  base.compareValues('HRSN - TRANSPORT SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "TRANSPORT SCREEN"))).getText(), pm.getParamV("TRANSPORT SCREEN"));
  base.compareValues('HRSN - TRANSPORT SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "TRANSPORT SUM"))).getText(), pm.getParamV("TRANSPORT SUM"));
  base.compareValues('HRSN - FOOD  SCREEN', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "FOOD  SCREEN"))).getText(), pm.getParamV("FOOD SCREEN"));
  base.compareValues('HRSN - FOOD SUM', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "FOOD  SUM"))).getText(), pm.getParamV("FOOD SUM"));
  base.compareValues('HRSN - LIVING SCREEN',  await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "LIVING SCREEN"))).getText(), pm.getParamV("LIVING SCREEN"));
  base.compareValues('HRSN - LIVING SUM',  await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "LIVING SUM"))).getText(), pm.getParamV("LIVING SUM"));
  //base.compareValues('HRSN - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksHRSN(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('HRSN - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));

  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in HRSNS Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "What is your living situation today?"), pm.getParamV("What is your living situation today?"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Think about the place you live"), pm.getParamV("Think about the place you live"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you worried that your food would run out before you got money to buy more"), pm.getParamV("you worried that your food would run out before you got money to buy more"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "have money to get more"), pm.getParamV("have money to get more"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the past 12 months, has lack of reliable transportation kept you from medical appointments"), pm.getParamV("In the past 12 months, has lack of reliable transportation kept you from medical appointments"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the past 12 months has the electric, gas, oil, or water company threatened to shutoff services"), pm.getParamV("In the past 12 months has the electric, gas, oil, or water company threatened to shutoff services"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, physically hurt you?"), pm.getParamV("How often does anyone, including family and friends, physically hurt you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, insult or talk down to you?"), pm.getParamV("How often does anyone, including family and friends, insult or talk down to you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, threaten you with harm?"), pm.getParamV("How often does anyone, including family and friends, threaten you with harm?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often does anyone, including family and friends, scream or curse at you?"), pm.getParamV("How often does anyone, including family and friends, scream or curse at you?"));
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;
});

Then('Verify HRSNS Responses', async function (dataTable) {
  pm.dataTableV(dataTable);

  base.compareValues('HRSNS - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('HRSNS - SAFETY', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "SAFETY"))).getText(), pm.getParamV("SAFETY"));
  base.compareValues('HRSNS - UTILITIES', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "UTILITIES"))).getText(), pm.getParamV("UTILITIES"));
  base.compareValues('HRSNS - TRANSPORTATION', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "TRANSPORTATION"))).getText(), pm.getParamV("TRANSPORT"));
  base.compareValues('HRSNS - FOOD', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "FOOD"))).getText(), pm.getParamV("FOOD"));
  base.compareValues('HRSNS - LIVING SITUATION', await element(by.xpath(mpage.m_hrsn_score_type.replace("$replaceToken$", "LIVING SITUATION"))).getText(), pm.getParamV("LIVING"));
  //base.compareValues('HRSNS - FOLLOW_UP_TASKS', base.verifyAssessmentsFollowupTasksHRSNS(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('HRSNS - FOLLOW_UP_TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in IVRP Intake Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "How well has the member adopted the technology?"), pm.getParamV("How well has the member adopted the technology?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "What is the highest level of education you"), pm.getParamV("What is the highest level of education you"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "What type of violence situation"), pm.getParamV("What type of violence situation"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Is the member a"), pm.getParamV("Is the member a"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Do you experience any of these stressors in your life?"), pm.getParamV("Do you experience any of these stressors in your life?"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Do you or anyone in your family have a restraining order?"), pm.getParamV("Do you or anyone in your family have a restraining order?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Is there an indication of violence"), pm.getParamV("Is there an indication of violence"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Why?"), pm.getParamV("Why?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "If further investigation"), pm.getParamV("If further investigation"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Low Risk Factors"), pm.getParamV("Low Risk Factors"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Moderate Risk Factors"), pm.getParamV("Moderate Risk Factors"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "High Risk Factors"), pm.getParamV("High Risk Factors"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Needs Supervisor Review"), pm.getParamV("Needs Supervisor Review"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "have you experienced physical harm"), pm.getParamV("have you experienced physical harm"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "have you experienced emotional abuse"), pm.getParamV("have you experienced emotional abuse"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "incarceration history?"), pm.getParamV("incarceration history?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If incarcerated in the last 1 year or currently incarcerated"), pm.getParamV("If incarcerated in the last 1 year or currently incarcerated"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Other Notes about this Member?"), pm.getParamV("Other Notes about this Member?"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;
});

Then('Verify IVRP Intake Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('IVRP - How well has the member adopted the technology?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "How well has the member adopted the technology?"))).getText(), pm.getParamV("How well has the member adopted the technology?"));
  //base.compareValues('IVRP - What is the highest level of education you', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What is the highest level of education you"))).getText(), pm.getParamV("What is the highest level of education you"));
  base.compareValues('IVRP - What type of violence situation', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What type of violence situation"))).getText(), pm.getParamV("What type of violence situation"));
  base.compareValues('IVRP - Is the member a',     await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Is the member a"))).getText(), pm.getParamV("Is the member a"));
  base.compareValues('IVRP - Do you experience any of these stressors in your life?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you experience any of these stressors in your life?"))).getText(), pm.getParamV("Do you experience any of these stressors in your life?"));
  base.compareValues('IVRP - Do you or anyone in your family have a restraining order?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you or anyone in your family have a restraining order?"))).getText(), pm.getParamV("Do you or anyone in your family have a restraining order?"));
  base.compareValues('IVRP - Is there an indication of violence', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Is there an indication of violence"))).getText(), pm.getParamV("Is there an indication of violence"));
  base.compareValues('IVRP - Why?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Why?"))).getText(), pm.getParamV("Why?"));
  base.compareValues('IVRP - If further investigation',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If further investigation"))).getText(), pm.getParamV("If further investigation"));
  base.compareValues('IVRP - Low Risk Factors',   await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Low Risk Factors"))).getText(), pm.getParamV("Low Risk Factors"));
  base.compareValues('IVRP - Moderate Risk Factors', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Moderate Risk Factors"))).getText(), pm.getParamV("Moderate Risk Factors"));
  base.compareValues('IVRP - High Risk Factors', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "High Risk Factors"))).getText(), pm.getParamV("High Risk Factors"));
  base.compareValues('IVRP - Needs Supervisor Review', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Needs Supervisor Review"))).getText(), pm.getParamV("Needs Supervisor Review"));
  base.compareValues('IVRP - have you experienced physical harm', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "have you experienced physical harm"))).getText(), pm.getParamV("have you experienced physical harm"));
  base.compareValues('IVRP - have you experienced emotional abuse', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "have you experienced emotional abuse"))).getText(), pm.getParamV("have you experienced emotional abuse"));
  base.compareValues('IVRP - incarceration history?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "incarceration history?"))).getText(), pm.getParamV("incarceration history?"));
  base.compareValues('IVRP - If incarcerated in the last 1 year or currently incarcerated', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If incarcerated in the last 1 year or currently incarcerated"))).getText(), pm.getParamV("If incarcerated in the last 1 year or currently incarcerated"));
   base.compareValues('IVRP - Other Notes about this Member?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Other Notes about this Member?"))).getText(), pm.getParamV("Other Notes about this Member?"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in Single Question Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  const arr = pm.getPMap();
  for (const key of Object.keys(arr)) {
    await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));

  }
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify Single Question Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('Single Question - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('Single Question - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('Single Question - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('Single Question - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksHRSNS(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('Single Question - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in GAD7 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling nervous"), pm.getParamV("Feeling nervous"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Not being able to stop or control worrying?"), pm.getParamV("Not being able to stop or control worrying?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Worrying too much about different things?"), pm.getParamV("Worrying too much about different things?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Worrying too much about different things?"), pm.getParamV("Worrying too much about different things?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble relaxing?"), pm.getParamV("Trouble relaxing?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Being so restless"), pm.getParamV("Being so restless"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Becoming easily annoyed or irritable?"), pm.getParamV("Becoming easily annoyed or irritable?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling afraid as if something awful might happen?"), pm.getParamV("Feeling afraid as if something awful might happen?"));


  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;

  // pm.dataTableV(dataTable);
  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));
  // }
  // await browser.getTitle().then(function (text) {
  //   expect(text).to.equal("mMR");

  // })
  // const screenshot = await browser.takeScreenshot();
  // this.attach(screenshot, "image/png");
  // return true;
});

Then('Verify GAD7 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('GAD7 - Risk-Check', await mpage.assess_risk.getText(), pm.getParamV("RISK"));
  base.compareValues('GAD7 - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('GAD7 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('GAD7 - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('GAD7 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksGAD7(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('GAD7 - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in PCL5 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Repeated, disturbing and unwanted memories of the stressful experience?"), pm.getParamV("Repeated, disturbing and unwanted memories of the stressful experience?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Repeated, disturbing dreams of the stressful experience?"), pm.getParamV("Repeated, disturbing dreams of the stressful experience?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Suddenly feeling or acting as if the stressful experience were actually happening again"), pm.getParamV("Suddenly feeling or acting as if the stressful experience were actually happening again"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Suddenly feeling or acting as if the stressful experience were actually happening again"), pm.getParamV("Suddenly feeling or acting as if the stressful experience were actually happening again"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling very upset when something reminded you of the stressful experience?"), pm.getParamV("Feeling very upset when something reminded you of the stressful experience?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Having strong physical reactions when something reminded you of the stressful experience"), pm.getParamV("Having strong physical reactions when something reminded you of the stressful experience"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "thoughts or feelings related to the stressful experience?"), pm.getParamV("thoughts or feelings related to the stressful experience?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Avoiding external reminders of the stressful experience"), pm.getParamV("Avoiding external reminders of the stressful experience"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble remembering important parts of the stressful experience?"), pm.getParamV("Trouble remembering important parts of the stressful experience?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Having strong negative beliefs about yourself"), pm.getParamV("Having strong negative beliefs about yourself"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Blaming yourself or someone else for the stressful experience or what happened after it?"), pm.getParamV("Blaming yourself or someone else for the stressful experience or what happened after it?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Having strong negative feelings such as fear"), pm.getParamV("Having strong negative feelings such as fear"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Loss of interest in activities that you used to enjoy?"), pm.getParamV("Loss of interest in activities that you used to enjoy?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling distant or cut off from other people?"), pm.getParamV("Feeling distant or cut off from other people?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble experiencing positive feelings"), pm.getParamV("Trouble experiencing positive feelings"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Irritable behavior"), pm.getParamV("Irritable behavior"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Taking too many risks or doing things that could cause you harm?"), pm.getParamV("Taking too many risks or doing things that could cause you harm?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "or watchful or on guard?"), pm.getParamV("or watchful or on guard?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Feeling jumpy or easily startled?"), pm.getParamV("Feeling jumpy or easily startled?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Having difficulty concentrating?"), pm.getParamV("Having difficulty concentrating?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Trouble falling or staying asleep?"), pm.getParamV("Trouble falling or staying asleep?"));

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify PCL5 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('PCL5 - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('PCL5 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('PCL5 - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('PCL5 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksPCL5(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('PCL5 - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Enter Data in MDQ Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you shouted at people or started fights or arguments?"), pm.getParamV("you shouted at people or started fights or arguments?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "...you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?"), pm.getParamV("...you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "...you felt much more self-confident than usual?"), pm.getParamV("...you felt much more self-confident than usual?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "...you felt much more self-confident than usual?"), pm.getParamV("...you felt much more self-confident than usual?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you got much less sleep than usual and found"), pm.getParamV("you got much less sleep than usual and found"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you were much more talkative or spoke much faster than usual?"), pm.getParamV("you were much more talkative or spoke much faster than usual?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you were much more talkative or spoke much faster than usual?"), pm.getParamV("you were much more talkative or spoke much faster than usual?"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "thoughts raced through your head"), pm.getParamV("thoughts raced through your head"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you were so easily distracted by things around you"), pm.getParamV("you were so easily distracted by things around you"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you had much more energy than usual?"), pm.getParamV("you had much more energy than usual?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you were much more active or did many more things than usual?"), pm.getParamV("you were much more active or did many more things than usual?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you were much more social or outgoing than usual"), pm.getParamV("you were much more social or outgoing than usual"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you were much more interested in sex than usual?"), pm.getParamV("you were much more interested in sex than usual?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "you did things that were unusual for you or that other people might have thought were excessive"), pm.getParamV("you did things that were unusual for you or that other people might have thought were excessive"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "spending money got you or your family into trouble?"), pm.getParamV("spending money got you or your family into trouble?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If you checked YES to more than one of the above"), pm.getParamV("If you checked YES to more than one of the above"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How much of a problem did any of these cause you"), pm.getParamV("How much of a problem did any of these cause you"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have any of your blood relatives"), pm.getParamV("Have any of your blood relatives"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has a health professional"), pm.getParamV("Has a health professional"));
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify MDQ Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('MDQ - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('MDQ - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('MDQ - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('MDQ - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksMDQ(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('MDQ - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in Columbia Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the past month, Have you wished you were dead or wished you could go to sleep and not wake up?"), pm.getParamV("In the past month, Have you wished you were dead or wished you could go to sleep and not wake up?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "anything to end your life?"), pm.getParamV("anything to end your life?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "anything to end your life?"), pm.getParamV("anything to end your life?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Was this within the past 3 months?"), pm.getParamV("Was this within the past 3 months?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you had any actual thoughts of killing yourself?"), pm.getParamV("Have you had any actual thoughts of killing yourself?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you had any actual thoughts of killing yourself?"), pm.getParamV("Have you had any actual thoughts of killing yourself?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you been thinking about how you might do this?"), pm.getParamV("Have you been thinking about how you might do this?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you had these thoughts and had some intention of acting on them?"), pm.getParamV("Have you had these thoughts and had some intention of acting on them?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you started to work out or worked out the details of how to kill yourself?"), pm.getParamV("Have you started to work out or worked out the details of how to kill yourself?"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;


  // pm.dataTableV(dataTable);
  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));
  // }
  // await browser.getTitle().then(function (text) {
  //   expect(text).to.equal("mMR");

  // })
  // const screenshot = await browser.takeScreenshot();
  // this.attach(screenshot, "image/png");
  // return true;
});
Then('Verify Columbia Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('Columbia - Have you wished you were dead or wished you could go to sleep and not wake up?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "In the past month, Have you wished you were dead or wished you could go to sleep and not wake up?"))).getText(), pm.getParamV("In the past month, Have you wished you were dead or wished you could go to sleep and not wake up?"));
  base.compareValues('Columbia - anything to end your life?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "anything to end your life?"))).getText(), pm.getParamV("anything to end your life?"));
  base.compareValues('Columbia - Was this within the past 3 months?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "Was this within the past 3 months?"))).getText(), pm.getParamV("Was this within the past 3 months?"));
  base.compareValues('Columbia - Have you had any actual thoughts of killing yourself?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "Have you had any actual thoughts of killing yourself?"))).getText(), pm.getParamV("Have you had any actual thoughts of killing yourself?"));
  base.compareValues('Columbia - Have you been thinking about how you might do this?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "Have you been thinking about how you might do this?"))).getText(), pm.getParamV("Have you been thinking about how you might do this?"));
  base.compareValues('Columbia - Have you had these thoughts and had some intention of acting on them?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "Have you had these thoughts and had some intention of acting on them?"))).getText(), pm.getParamV("Have you had these thoughts and had some intention of acting on them?"));
  base.compareValues('Columbia - Have you started to work out or worked out the details of how to kill yourself?', await element(by.xpath(mpage.m_columbia_responses.replace("$replaceToken$", "Have you started to work out or worked out the details of how to kill yourself?"))).getText(), pm.getParamV("Have you started to work out or worked out the details of how to kill yourself?"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in Psychosis Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you ever hear things"), pm.getParamV("Do you ever hear things"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you ever receive special messages"), pm.getParamV("Do you ever receive special messages"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you ever feel like people are spying on your or out to hurt you?"), pm.getParamV("Do you ever feel like people are spying on your or out to hurt you?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you ever feel like people are spying on your or out to hurt you?"), pm.getParamV("Do you ever feel like people are spying on your or out to hurt you?"));

  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));
  // }
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify Psychosis Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('Psychosis - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('Psychosis - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('Psychosis - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('Psychosis - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksPsychosis(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('Psychosis - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in AUDIT10 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often do you have a drink containing alcohol?"), pm.getParamV("How often do you have a drink containing alcohol?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many drinks containing alcohol do you have on a typical day when you are drinking?"), pm.getParamV("How many drinks containing alcohol do you have on a typical day when you are drinking?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many drinks containing alcohol do you have on a typical day when you are drinking?"), pm.getParamV("How many drinks containing alcohol do you have on a typical day when you are drinking?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often do you have six or more drinks on one occasion?"), pm.getParamV("How often do you have six or more drinks on one occasion?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often during the last year have you found that you were not able to stop drinking"), pm.getParamV("How often during the last year have you found that you were not able to stop drinking"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often during the last year have you found that you were not able to stop drinking"), pm.getParamV("How often during the last year have you found that you were not able to stop drinking"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often during the last year have you failed to do what was normally expected from you"), pm.getParamV("How often during the last year have you failed to do what was normally expected from you"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often during the last year have you needed a first drink in the morning"), pm.getParamV("How often during the last year have you needed a first drink in the morning"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often during the last year have you had a feeling of guilt"), pm.getParamV("How often during the last year have you had a feeling of guilt"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How often during the last year have you been unable to remember what happened the night before"), pm.getParamV("How often during the last year have you been unable to remember what happened the night before"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you or someone else been injured as a result of your drinking?"), pm.getParamV("Have you or someone else been injured as a result of your drinking?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has a relative or friend or a doctor or another health worker been concerned about your drinking"), pm.getParamV("Has a relative or friend or a doctor or another health worker been concerned about your drinking"));
  
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

  // pm.dataTableV(dataTable);
  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));
  // }
  // await browser.getTitle().then(function (text) {
  //   expect(text).to.equal("mMR");

  // })
  // const screenshot = await browser.takeScreenshot();
  // this.attach(screenshot, "image/png");
  // return true;
});

Then('Verify AUDIT10 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('AUDIT10 - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('AUDIT10 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('AUDIT10 - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('AUDIT10 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksAUDIT10(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('AUDIT10 - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in DAST10 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you used drugs other than those required for medical reasons?"), pm.getParamV("Have you used drugs other than those required for medical reasons?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you abuse more than one drug at a time?"), pm.getParamV("Do you abuse more than one drug at a time?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Are you always able to stop using drugs when you want to?"), pm.getParamV("Are you always able to stop using drugs when you want to?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Are you always able to stop using drugs when you want to?"), pm.getParamV("Are you always able to stop using drugs when you want to?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "flashbacks"), pm.getParamV("flashbacks"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you ever feel bad or guilty about your drug use?"), pm.getParamV("Do you ever feel bad or guilty about your drug use?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "ever complain about your involvement with drugs?"), pm.getParamV("ever complain about your involvement with drugs?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you neglected your family because of your use of drugs?"), pm.getParamV("Have you neglected your family because of your use of drugs?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you engaged in illegal activities in order to obtain drugs?"), pm.getParamV("Have you engaged in illegal activities in order to obtain drugs?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you ever experienced withdrawal symptoms"), pm.getParamV("Have you ever experienced withdrawal symptoms"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you had medical problems as a result of your drug use"), pm.getParamV("Have you had medical problems as a result of your drug use"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify DAST10 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('DAST10 - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('DAST10 - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('DAST10 - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('DAST10 - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksDAST10(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('DAST10 - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
   const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in NIDA Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "more drinks a day"), pm.getParamV("more drinks a day"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Tobacco Products"), pm.getParamV("Tobacco Products"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Prescription drugs for non-medical reasons"), pm.getParamV("Prescription drugs for non-medical reasons"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Prescription drugs for non-medical reasons"), pm.getParamV("Prescription drugs for non-medical reasons"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Illegal Drugs"), pm.getParamV("Illegal Drugs"));


  // const arr = pm.getPMap();
  // for (const key of Object.keys(arr)) {
  //   await base.setChips_singleSelect(mpage.assess_single.replace('$paramName$', key), pm.getParamV(key));
  // }
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify NIDA Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  //base.compareValues('NIDA - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksNIDA(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('NIDA - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Enter Data in MiniMental Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "season"), pm.getParamV("season"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Where are we"), pm.getParamV("hospital"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Then ask the patient all 3 after you have said them"), pm.getParamV("Then ask the patient all 3 after you have said them"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Repeat them until he/she learns all 3. Count trials and record below."), pm.getParamV("Repeat them until he/she learns all 3. Count trials and record below."));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Serial 7"), pm.getParamV("Serial 7"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Ask for the 3 objects repeated above"), pm.getParamV("Ask for the 3 objects repeated above"));
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Enter Data in MiniMental Assessment1', async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "season"), pm.getParamV("season"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Where are we"), pm.getParamV("hospital"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Then ask the patient all 3 after you have said them"), pm.getParamV("Then ask the patient all 3 after you have said them"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Repeat them until he/she learns all 3. Count trials and record below."), pm.getParamV("Repeat them until he/she learns all 3. Count trials and record below."));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Serial 7"), pm.getParamV("Serial 7"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Ask for the 3 objects repeated above"), pm.getParamV("Ask for the 3 objects repeated above"));
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('Verify MiniMental Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('MiniMental - TITLE', await mpage.assess_title.getText(), pm.getParamV("TITLE"));
  base.compareValues('MiniMental - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('MiniMental - TOTAL_DESC', await mpage.assess_total_desc.getText(), pm.getParamV("TOTAL_DESC"));
  //base.compareValues('MiniMental - FOLLOW UP TASKS', base.verifyAssessmentsFollowupTasksNIDA(mpage.m_m3_followup.getText()), pm.getParamV("FOLLOW_UP_TASKS"));
  base.compareValues('MiniMental - FOLLOW UP TASKS',await base.verifyAssessmentsFollowupTask(), pm.getParamV("FOLLOW_UP_TASKS"));
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then("Enter Data in CCI_V2 Assessment", async function (dataTable) {
  pm.dataTableV(dataTable);
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Psychosocial history"), pm.getParamV("Psychosocial history"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Living situation"), pm.getParamV("Living situation"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Highest level of Education"), pm.getParamV("Highest level of Education"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Employment Status"), pm.getParamV("Employment Status"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Military Hx"), pm.getParamV("Military Hx"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Legal Hx"), pm.getParamV("Legal Hx"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Current Behavioral health"), pm.getParamV("Current Behavioral health"));
  await base.setChips_multiSelect(mpage.nida_single.replace("$paramName$", "Alcohol, (5 for men, 4 for women) or more drinks a day"), pm.getParamV("Alcohol, (5 for men, 4 for women) or more drinks a day"));
  await base.setChips_multiSelect(mpage.nida_single.replace("$paramName$", "Tobacco Products"), pm.getParamV("Tobacco Products"));
  await base.setChips_multiSelect(mpage.nida_single.replace("$paramName$", "Prescription drugs for non-medical reasons"), pm.getParamV("Prescription drugs for non-medical reasons"));
  await base.setChips_multiSelect(mpage.nida_single.replace("$paramName$", "Illegal Drugs"), pm.getParamV("Illegal Drugs"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Current stressors"), pm.getParamV("Current stressors"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Strengths/Supports/Hobbies"), pm.getParamV("Strengths/Supports/Hobbies"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Current Suicidality"), pm.getParamV("Current Suicidality"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Current Homicidality"), pm.getParamV("Current Homicidality"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Sleep"), pm.getParamV("Sleep"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Exercise"), pm.getParamV("Exercise"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Previous behavioral Health dx"), pm.getParamV("Previous behavioral Health dx"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "medications/dates/effectiveness"), pm.getParamV("medications/dates/effectiveness"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "non-medication treatment/dates/effectiveness"), pm.getParamV("non-medication treatment/dates/effectiveness"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Trauma"), pm.getParamV("Trauma"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Suicide Attempts and Self-harm history"), pm.getParamV("Suicide Attempts and Self-harm history"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Family hx of behavioral health conditions"), pm.getParamV("Family hx of behavioral health conditions"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Family hx of Substance Use Disorder"), pm.getParamV("Family hx of Substance Use Disorder"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Family hx of Suicide attempts"), pm.getParamV("Family hx of Suicide attempts"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Family Hx of Violent Behavior"), pm.getParamV("Family Hx of Violent Behavior"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Current medical problems"), pm.getParamV("Current medical problems"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Allergies"), pm.getParamV("Allergies"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Pregnant/Breastfeeding"), pm.getParamV("Pregnant/Breastfeeding"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Psychotropic Medications"), pm.getParamV("Psychotropic Medications"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Other Medications"), pm.getParamV("Other Medications"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Level of medication adherence"), pm.getParamV("Level of medication adherence"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Patients goals"), pm.getParamV("Patients goals"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Interested in treatment"), pm.getParamV("Interested in treatment"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Speech"), pm.getParamV("Speech"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Affect"), pm.getParamV("Affect"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Mood"), pm.getParamV("Mood"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Orientation"), pm.getParamV("Orientation"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Memory"), pm.getParamV("Memory"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Attention"), pm.getParamV("Attention"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Hallucination"), pm.getParamV("Hallucination"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Thoughts"), pm.getParamV("Thoughts"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Behavior"), pm.getParamV("Behavior"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Insight"), pm.getParamV("Insight"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Judgement"), pm.getParamV("Judgement"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Impulse control"), pm.getParamV("Impulse control"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Diagnostic impressions"), pm.getParamV("Diagnostic impressions"));
  if (pm.getParamV("AutoFill") == 'Yes') {
    await base.clickAutofill(mpage.Autofill);
  }
  browser.sleep(3000);
  //await mpage.m_submit_btn.click();
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then("Enter Data in EPDS Assessment", async function (dataTable) {
  pm.dataTableV(dataTable);
 
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have been able to laugh and see the funny side of things"), pm.getParamV("I have been able to laugh and see the funny side of things"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have looked forward with enjoyment to things"), pm.getParamV("I have looked forward with enjoyment to things"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have blamed myself unnecessarily when things went wrong"), pm.getParamV("I have blamed myself unnecessarily when things went wrong"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have blamed myself unnecessarily when things went wrong"), pm.getParamV("I have blamed myself unnecessarily when things went wrong"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have been anxious or worried for no good reason"), pm.getParamV("I have been anxious or worried for no good reason"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have felt scared or panicky for no very good reason"), pm.getParamV("I have felt scared or panicky for no very good reason"));
  await base.setChips_singleSelect(mpage.assess_single.replace("$paramName$", "Things have been getting on top of me"), pm.getParamV("Things have been getting on top of me"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have been so unhappy that I have had difficulty sleeping"), pm.getParamV("I have been so unhappy that I have had difficulty sleeping"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have felt sad or miserable"), pm.getParamV("I have felt sad or miserable"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "I have been so unhappy that I have been crying"), pm.getParamV("I have been so unhappy that I have been crying"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "The thought of harming myself has occurred to me"), pm.getParamV("The thought of harming myself has occurred to me"));

  
  browser.sleep(3000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('Verify EPDS Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('EPDS - TOTAL_SCORE', await mpage.assess_total.getText(), pm.getParamV("TOTAL_SCORE"));
  base.compareValues('EPDS - SELF-HARM SYMPTOM SCORE', await element(by.xpath(mpage.m_m3_score_type1.replace("$replaceToken$", "Self Harm"))).getText(), pm.getParamV("SELF_HARM_SCORE"));
  base.compareValues('EPDS - SELF_HARM_ALERT', base.verifySelfHarmAlert(base.getSize(mpage.m_m3_selfharmalert)), pm.getParamV("SELF_HARM_ALERT"));
 
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});

Then('click on assessment score', async function (dataTable) {
  pm.dataTableH(dataTable);
  var m_assessment_score = mpage.m_assessment_score_str.replace("$replaceToken$", pm.getParamH("Name"));
    base.WaitforElementPresence(element(by.xpath(m_assessment_score)));
    await element(by.xpath(m_assessment_score)).click();
    base.UrlContains("status=taken");
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('user clicks on left nav item in Member Platform', async function (dataTable) {
  pm.dataTableH(dataTable);
  var menuItemXpath = "//div[@id='nav_menu_icon_$replaceToken$']";
  menuItemXpath = menuItemXpath.replace("$replaceToken$", pm.getParamH("name").toLowerCase());
  await element(by.xpath(menuItemXpath)).click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
});

Then('user clicks on Dashboard in Member Platform Home Page', async function (dataTable) {
  pm.dataTableH(dataTable);
  var menuItemXpath = "//div[@class='menuitem-text'][contains(@id,'dashboard')][contains(.,'$replaceToken$')]";
  menuItemXpath = menuItemXpath.replace("$replaceToken$", pm.getParamH("name"));
  await element(by.xpath(menuItemXpath)).click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  
});

Then('Close Self Harm Pop Up', async function () {
  browser.sleep(4000);
if( mpage.m_m3_selfharmalert_close.isDisplayed) {
  await mpage.m_m3_selfharmalert_close.click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
}
  
  // sleep(5);
  // if(getSize(jsonData(objects,"m_m3_selfharmalert_close"))>0) {
  //   findElement(jsonData(objects,"m_m3_selfharmalert_close")).click();
  // }
});


Then('Enter Data in COVID-19 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has there been any changes with your job"), pm.getParamV("Has there been any changes with your job"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has your income reduced because of COVID-19"), pm.getParamV("Has your income reduced because of COVID-19"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has your income reduced because of COVID-19"), pm.getParamV("Has your income reduced because of COVID-19"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Are you quarantined"), pm.getParamV("Are you quarantined"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Are you quarantined"), pm.getParamV("Are you quarantined"));

  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "What are your restrictions"), pm.getParamV("What are your restrictions"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Are you adhering to them"), pm.getParamV("Are you adhering to them"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "If not, what is difficult for you"), pm.getParamV("If not, what is difficult for you"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you understand why there are restrictions?"), pm.getParamV("Do you understand why there are restrictions?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "If this extends beyond current restrictions, do you have a plan"), pm.getParamV("If this extends beyond current restrictions, do you have a plan"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "What are the next steps for you"), pm.getParamV("What are the next steps for you"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Has COVID-19 had any effect on your anxiety"), pm.getParamV("Has COVID-19 had any effect on your anxiety"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Select the changes that happened because of COVID-19."), pm.getParamV("Select the changes that happened because of COVID-19."));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How is your support system during this time"), pm.getParamV("How is your support system during this time"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If you are quarantined, do you have ways to cope with isolation?"), pm.getParamV("If you are quarantined, do you have ways to cope with isolation?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath"), pm.getParamV("Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you spent time with or have anyone visiting in your household who has recently returned from another country"), pm.getParamV("Have you spent time with or have anyone visiting in your household who has recently returned from another country"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If they have had these symptoms or have them now, have you seen a doctor"), pm.getParamV("If they have had these symptoms or have them now, have you seen a doctor"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "If they have had these symptoms or have them now, have you been tested"), pm.getParamV("If they have had these symptoms or have them now, have you been tested"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Any other notes related to COVID-19"), pm.getParamV("Any other notes related to COVID-19"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;
});



Then('Verify COVID-19 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('COVID-19 - Has there been any changes with your job', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Has there been any changes with your job"))).getText(), pm.getParamV("Has there been any changes with your job"));
  base.compareValues('COVID-19 - Are you quarantined', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Are you quarantined"))).getText(), pm.getParamV("Are you quarantined"));
  base.compareValues('COVID-19 - Has your income reduced because of COVID-19',     await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Has your income reduced because of COVID-19"))).getText(), pm.getParamV("Has your income reduced because of COVID-19"));
  base.compareValues('COVID-19 - What are your restrictions', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What are your restrictions"))).getText(), pm.getParamV("What are your restrictions"));
  base.compareValues('COVID-19 - Are you adhering to them', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Are you adhering to them"))).getText(), pm.getParamV("Are you adhering to them"));
  base.compareValues('COVID-19 - If not, what is difficult for you', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If not, what is difficult for you"))).getText(), pm.getParamV("If not, what is difficult for you"));
  base.compareValues('COVID-19 - Do you understand why there are restrictions?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you understand why there are restrictions?"))).getText(), pm.getParamV("Do you understand why there are restrictions?"));
  base.compareValues('COVID-19 - If this extends beyond current restrictions, do you have a plan',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If this extends beyond current restrictions, do you have a plan"))).getText(), pm.getParamV("If this extends beyond current restrictions, do you have a plan"));
  base.compareValues('COVID-19 - What are the next steps for you',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What are the next steps for you"))).getText(), pm.getParamV("What are the next steps for you"));
  base.compareValues('COVID-19 - Has COVID-19 had any effect on your anxiety',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Has COVID-19 had any effect on your anxiety"))).getText(), pm.getParamV("Has COVID-19 had any effect on your anxiety"));
  base.compareValues('COVID-19 - Select the changes that happened because of COVID-19.',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Select the changes that happened because of COVID-19."))).getText(), pm.getParamV("Select the changes that happened because of COVID-19."));
  base.compareValues('COVID-19 - How is your support system during this time',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "How is your support system during this time"))).getText(), pm.getParamV("How is your support system during this time"));
  base.compareValues('COVID-19 - If you are quarantined, do you have ways to cope with isolation?',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If you are quarantined, do you have ways to cope with isolation?"))).getText(), pm.getParamV("If you are quarantined, do you have ways to cope with isolation?"));
  base.compareValues('COVID-19 - Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath"))).getText(), pm.getParamV("Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath"));
  base.compareValues('COVID-19 - Have you spent time with or have anyone visiting in your household who has recently returned from another country',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Have you spent time with or have anyone visiting in your household who has recently returned from another country"))).getText(), pm.getParamV("Have you spent time with or have anyone visiting in your household who has recently returned from another country"));
  base.compareValues('COVID-19 - If they have had these symptoms or have them now, have you seen a doctor',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If they have had these symptoms or have them now, have you seen a doctor"))).getText(), pm.getParamV("If they have had these symptoms or have them now, have you seen a doctor"));
  base.compareValues('COVID-19 - If they have had these symptoms or have them now, have you been tested',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If they have had these symptoms or have them now, have you been tested"))).getText(), pm.getParamV("If they have had these symptoms or have them now, have you been tested"));
  base.compareValues('COVID-19 - Any other notes related to COVID-19',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Any other notes related to COVID-19"))).getText(), pm.getParamV("Any other notes related to COVID-19"));
  
   const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});



Then('Enter Data in P3 Intake Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);
   base.setDateField(mpage.m_select_date, pm.getParamV("When is your due date?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "How are you feeling about this pregnancy?"), pm.getParamV("How are you feeling about this pregnancy?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Does anyone smoke inside your home?"), pm.getParamV("Does anyone smoke inside your home?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Does anyone smoke inside your home?"), pm.getParamV("Does anyone smoke inside your home?"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "What does your household use for drinking water?"), pm.getParamV("What does your household use for drinking water?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Does the refrigerator in your home work?"), pm.getParamV("Does the refrigerator in your home work?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Does the stove in your home work?"), pm.getParamV("Does the stove in your home work?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the past month, have there been days when you did not have enough food or money to buy food?"), pm.getParamV("In the past month, have there been days when you did not have enough food or money to buy food?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "When your new baby sleeps alone, is his or her crib or bed in the same room where you sleep?"), pm.getParamV("When your new baby sleeps alone, is his or her crib or bed in the same room where you sleep?"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Listed below are some things about how babies sleep. How did your new baby usually sleep in the past 2 weeks?"), pm.getParamV("Listed below are some things about how babies sleep. How did your new baby usually sleep in the past 2 weeks?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you seen your doctor since you became pregnant?"), pm.getParamV("Have you seen your doctor since you became pregnant?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Is this your first pregnancy?"), pm.getParamV("Is this your first pregnancy?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many babies are you having with this pregnancy?"), pm.getParamV("How many babies are you having with this pregnancy?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "How many other times have you been pregnant?"), pm.getParamV("How many other times have you been pregnant?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "How many children do you have?"), pm.getParamV("How many children do you have?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Number of babies born early?"), pm.getParamV("Number of babies born early?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Number of miscarriages?"), pm.getParamV("Number of miscarriages?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "List your health problems here, indicate None if none exists"), pm.getParamV("List your health problems here, indicate None if none exists"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "List any medications you are currently taking, indicate None if none exists"), pm.getParamV("List any medications you are currently taking, indicate None if none exists"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Have you recently stopped any medications?"), pm.getParamV("Have you recently stopped any medications?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Have you recently started any medications?"), pm.getParamV("Have you recently started any medications?"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Which of these do you have?"), pm.getParamV("Which of these do you have?"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Which of these do you take?"), pm.getParamV("Which of these do you take?"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "During the 3 months before you got pregnant with your new baby, did you have any of the following health conditions?"), pm.getParamV("During the 3 months before you got pregnant with your new baby, did you have any of the following health conditions?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "How many weeks or months pregnant were you when you had your first visit for prenatal care?"), pm.getParamV("How many weeks or months pregnant were you when you had your first visit for prenatal care?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How do you feel about your weight change since you became pregnant?"), pm.getParamV("How do you feel about your weight change since you became pregnant?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you follow any kind of special diet?"), pm.getParamV("Do you follow any kind of special diet?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you eat fruit every day?"), pm.getParamV("Do you eat fruit every day?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you eat vegetables every day?"), pm.getParamV("Do you eat vegetables every day?"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Which of these do you drink everyday?"), pm.getParamV("Which of these do you drink everyday?"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Check any of the following items you eat"), pm.getParamV("Check any of the following items you eat"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How does the amount of exercise you get now compare with before you were pregnant?"), pm.getParamV("How does the amount of exercise you get now compare with before you were pregnant?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Do you watch more than 2 hours of TV everyday?"), pm.getParamV("Do you watch more than 2 hours of TV everyday?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you thought about how you will feed your baby?"), pm.getParamV("Have you thought about how you will feed your baby?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you smoked any cigarettes in the past 2 years?"), pm.getParamV("Have you smoked any cigarettes in the past 2 years?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day? A pack has 20 cigarettes."), pm.getParamV("In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day? A pack has 20 cigarettes."));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day? A pack has 20 cigarettes."), pm.getParamV("In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day? A pack has 20 cigarettes."));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "How many cigarettes do you smoke on an average day now? A pack has 20 cigarettes."), pm.getParamV("How many cigarettes do you smoke on an average day now? A pack has 20 cigarettes."));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Have you had any alcoholic drinks in the past 2 years? A drink is 1 glass of wine, wine cooler, can or bottle of beer, shot of liquor, or mixed drink."), pm.getParamV("Have you had any alcoholic drinks in the past 2 years? A drink is 1 glass of wine, wine cooler, can or bottle of beer, shot of liquor, or mixed drink."));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "During the 3 months before you got pregnant, how many alcoholic drinks did you have in an average week?"), pm.getParamV("During the 3 months before you got pregnant, how many alcoholic drinks did you have in an average week?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "What concerns do you have about your health during this pregnancy?"), pm.getParamV("What concerns do you have about your health during this pregnancy?"));

});


Then('Enter Data in IVRP Intake2 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "How well has the member adopted the technology?"), pm.getParamV("How well has the member adopted the technology?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "What is the highest level of education you"), pm.getParamV("What is the highest level of education you"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "What type of violence situation"), pm.getParamV("What type of violence situation"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Is the member a"), pm.getParamV("Is the member a"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Do you experience any of these stressors in your life?"), pm.getParamV("Do you experience any of these stressors in your life?"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Do you or anyone in your family have a restraining order?"), pm.getParamV("Do you or anyone in your family have a restraining order?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Is there an indication of violence"), pm.getParamV("Is there an indication of violence"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Why?"), pm.getParamV("Why?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "If further investigation"), pm.getParamV("If further investigation"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Other Notes about this Member?"), pm.getParamV("Other Notes about this Member?"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;
});



Then('Verify IVRP Intake2 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('IVRP Intake V2- How well has the member adopted the technology?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "How well has the member adopted the technology?"))).getText(), pm.getParamV("How well has the member adopted the technology?"));
  // base.compareValues('IVRP Intake V2 - What is the highest level of education you', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What is the highest level of education you"))).getText(), pm.getParamV("What is the highest level of education you"));
  base.compareValues('IVRP Intake V2 - What type of violence situation', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What type of violence situation"))).getText(), pm.getParamV("What type of violence situation"));
  base.compareValues('IVRP Intake V2 - Is the member a',     await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Is the member a"))).getText(), pm.getParamV("Is the member a"));
  base.compareValues('IVRP Intake V2 - Do you experience any of these stressors in your life?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you experience any of these stressors in your life?"))).getText(), pm.getParamV("Do you experience any of these stressors in your life?"));
  base.compareValues('IVRP Intake V2 - Do you or anyone in your family have a restraining order?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you or anyone in your family have a restraining order?"))).getText(), pm.getParamV("Do you or anyone in your family have a restraining order?"));
  base.compareValues('IVRP Intake V2 - Is there an indication of violence', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Is there an indication of violence"))).getText(), pm.getParamV("Is there an indication of violence"));
  base.compareValues('IVRP Intake V2 - Why?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Why?"))).getText(), pm.getParamV("Why?"));
  base.compareValues('IVRP Intake V2 - If further investigation',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If further investigation"))).getText(), pm.getParamV("If further investigation"));
  base.compareValues('IVRP Intake V2- Other Notes about this Member?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Other Notes about this Member?"))).getText(), pm.getParamV("Other Notes about this Member?"));

  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});


Then('Enter Data in IVRP Intake3 Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "How well has the member adopted the technology?"), pm.getParamV("How well has the member adopted the technology?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "What is the highest level of education you"), pm.getParamV("What is the highest level of education you"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "What type of violence situation"), pm.getParamV("What type of violence situation"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Is the member a"), pm.getParamV("Is the member a"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Do you experience any of these stressors in your life?"), pm.getParamV("Do you experience any of these stressors in your life?"));
  await base.setChips_multiSelect(mpage.assess_multi.replace("$paramName$", "Do you or anyone in your family have a restraining order?"), pm.getParamV("Do you or anyone in your family have a restraining order?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Is there an indication of violence"), pm.getParamV("Is there an indication of violence"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Why?"), pm.getParamV("Why?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "If further investigation"), pm.getParamV("If further investigation"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Other Notes about this Member?"), pm.getParamV("Other Notes about this Member?"));
  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Are you pregnant?"), pm.getParamV("Are you pregnant?"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "If yes, How far along are you in pregnancy?"), pm.getParamV("If yes, How far along are you in pregnancy?"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;
});



Then('Verify IVRP Intake3 Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('IVRP Intake V3- How well has the member adopted the technology?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "How well has the member adopted the technology?"))).getText(), pm.getParamV("How well has the member adopted the technology?"));
  // base.compareValues('IVRP Intake V2 - What is the highest level of education you', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What is the highest level of education you"))).getText(), pm.getParamV("What is the highest level of education you"));
  base.compareValues('IVRP Intake V3 - What type of violence situation', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "What type of violence situation"))).getText(), pm.getParamV("What type of violence situation"));
  base.compareValues('IVRP Intake V3 - Is the member a',     await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Is the member a"))).getText(), pm.getParamV("Is the member a"));
  base.compareValues('IVRP Intake V3 - Do you experience any of these stressors in your life?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you experience any of these stressors in your life?"))).getText(), pm.getParamV("Do you experience any of these stressors in your life?"));
  base.compareValues('IVRP Intake V3 - Do you or anyone in your family have a restraining order?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Do you or anyone in your family have a restraining order?"))).getText(), pm.getParamV("Do you or anyone in your family have a restraining order?"));
  base.compareValues('IVRP Intake V3 - Is there an indication of violence', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Is there an indication of violence"))).getText(), pm.getParamV("Is there an indication of violence"));
  base.compareValues('IVRP Intake V3 - Why?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Why?"))).getText(), pm.getParamV("Why?"));
  base.compareValues('IVRP Intake V3 - If further investigation',  await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If further investigation"))).getText(), pm.getParamV("If further investigation"));
  base.compareValues('IVRP V3 - Other Notes about this Member?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Other Notes about this Member?"))).getText(), pm.getParamV("Other Notes about this Member?"));
  base.compareValues('IVRP Intake V3- Are you pregnant?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Are you pregnant?"))).getText(), pm.getParamV("Are you pregnant?"));
  base.compareValues('IVRP Intake V3- If yes, How far along are you in pregnancy?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "If yes, How far along are you in pregnancy?"))).getText(), pm.getParamV("If yes, How far along are you in pregnancy?"));

  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});


Then('Enter Data in Safety Assessment Assessment', async function (dataTable) {
  pm.dataTableV(dataTable);

  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Low Risk Factors (Concern)"), pm.getParamV("Low Risk Factors (Concern)"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "Moderate Risk Factors (Triggers a safety plan)"), pm.getParamV("Moderate Risk Factors (Triggers a safety plan)"));
  await base.setChips_multiSelect(mpage.assess_multinew.replace("$paramName$", "High Risk Factors (Require conversation w/Supervisor before proceeding further)"), pm.getParamV("High Risk Factors (Require conversation w/Supervisor before proceeding further)"));

  await base.setChips_multiSelect(mpage.assess_single.replace("$paramName$", "Needs Supervisor Review"), pm.getParamV("Needs Supervisor Review"));
  await base.setTextArea(mpage.assess_textarea.replace("$paramName$", "Other Notes about this Member?"), pm.getParamV("Other Notes about this Member?"));

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");

  })
  return true;
});




Then('Verify Safety Assessment Responses', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.compareValues('Safety Assessment - Low Risk Factors (Concern)', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Low Risk Factors (Concern)"))).getText(), pm.getParamV("Low Risk Factors (Concern)"));
  base.compareValues('Safety Assessment - Moderate Risk Factors (Triggers a safety plan)', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Moderate Risk Factors (Triggers a safety plan)"))).getText(), pm.getParamV("Moderate Risk Factors (Triggers a safety plan)"));
  base.compareValues('Safety Assessment - High Risk Factors (Require conversation w/Supervisor before proceeding further)', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "High Risk Factors (Require conversation w/Supervisor before proceeding further)"))).getText(), pm.getParamV("High Risk Factors (Require conversation w/Supervisor before proceeding further)"));
  base.compareValues('Safety Assessment - Needs Supervisor Review', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Needs Supervisor Review"))).getText(), pm.getParamV("Needs Supervisor Review"));
  base.compareValues('Safety Assessment - Other Notes about this Member?', await element(by.xpath(mpage.m_ivrp_responses.replace("$replaceToken$", "Other Notes about this Member?"))).getText(), pm.getParamV("Other Notes about this Member?"));
 
   const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;
});


