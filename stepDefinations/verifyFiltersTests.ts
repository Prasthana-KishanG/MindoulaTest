"use strict";

import { Then } from "cucumber";
import { browser, element, by } from "protractor";
import { Base } from "../Util/Base";
import { Memberspage } from "../pageObjects/Memberspage";
import { verifyFilters } from "../pageObjects/verifyFilters";
import { MMRController } from "../Util/MMRController";
import { ParamManager } from "../Util/ParamManager";
import chai, { assert } from "chai";
import { MMRLoginPage } from "../pageObjects/MMRLoginPage";
let login = new MMRLoginPage();
let mpage = new Memberspage();
let vfilters = new verifyFilters();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let pm = new ParamManager();
var tasksBeforeCount="";
var tasksAfterCount="";
var caseNotesBeforeCount="";
var caseNotesAfterCount="";
var consultsBeforeCount="";
var consultsAfterCount="";
var Count_1="",Count_2="",Count_3="",Count_4="",Count_5="";
var MemberCountBefore="",MemberCountAfter="",MemberCount1="",MemberCount2="",MemberCount3="",MemberCount4="",
    MemberCount5="",MemberCount6="",MemberCount7="",MemberCount8="",MemberCount9="",MemberCount10="",MemberCount11="",
    MemberCount12="",MemberCount13="",MemberCount14="",MemberCount15="";
var CaseNotesCount1="",CaseNotesCount2="",CaseNotesCount3="",CaseNotesCount4="",CaseNotesCount5="";
var ConsultsCount1="",ConsultsCount2="",ConsultsCount3="",ConsultsCount4="",ConsultsCount5="";
var Report_MemberCount_Before="",Report_MemberCount_After="",ReportMemberCount1="",ReportMemberCount2="",ReportMemberCount3="",ReportMemberCount4="",
    ReportMemberCount5="",ReportMemberCount6="",ReportMemberCount7="",ReportMemberCount8="";
var Report_CCPCount_Before="",Report_CCPCount_After="",CCPReportCount1="",CCPReportCount2="",CCPReportCount3="",CCPReportCount4="";


Then('user clicks on left nav item', async function (dataTable) {
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

Then('user click on left nav item', async function (dataTable) {
  pm.dataTableH(dataTable);
  var menuItemXpath = "//div[@id='nav_menu_icon_people']";
  //menuItemXpath = menuItemXpath.replace("$replaceToken$", pm.getParamH("name").toLowerCase());
  await element(by.xpath(menuItemXpath)).click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  

});

Then('check tasks count before', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksBeforeCount1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
   tasksBeforeCount= (await element(by.xpath(tasksBeforeCount1)).getText()).replace("(", "").replace(")", "").trim();
  console.log('tasksBeforeCount...>',tasksBeforeCount);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});


Then('click on Add Filter', async function () {
  await vfilters.add_filter.click();
	browser.sleep(4000);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");

});

Then('click on available filters', async function (dataTable) {
  pm.dataTableV(dataTable);
  var available_filter_option = vfilters.available_filter_option_str.replace("$replaceToken$", pm.getParamV("FITLER_NAME"));
  await element(by.xpath(available_filter_option)).click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
});
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
 });


Then('expand parent program', async function (dataTable) {
  pm.dataTableV(dataTable);
  var expand_parent_program = vfilters.expand_parent_program_str.replace("$replaceToken$", pm.getParamV("PARENT_NAME"));
  await element(by.xpath(expand_parent_program)).click();
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
});
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
 
});


Then('select child program', async function (dataTable) {
  pm.dataTableV(dataTable);
  var child_program = vfilters.child_program_str.replace("$replaceToken$", pm.getParamV("CHILD_PROGRAM"));
  await element(by.xpath(child_program)).click();
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
 
});


Then('click on Apply filters', async function () {
  await vfilters.apply_filter.click();
  browser.sleep(8000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
    browser.sleep(2000);
    });
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
 
});


Then('check tasks count after', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksAfterCount1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
  tasksAfterCount= (await element(by.xpath(tasksAfterCount1)).getText()).replace("(", "").replace(")", "").trim();
  console.log('tasksAfterCount...>',tasksAfterCount);
  if(tasksBeforeCount==tasksAfterCount) {
    console.log(pm.getParamV("COLUMN_NAME") + 'values doesnt change after applying filters');
    console.log('tasksBeforeCount1' + tasksBeforeCount);
    console.log('tasksAfterCount1' + tasksAfterCount);
     	}
      
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  expect(tasksAfterCount,'tasksAfterCount').not.equal(tasksBeforeCount);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  

});


Then('check case notes count before', async function () {
 
  caseNotesBeforeCount= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('caseNotesBeforeCount...>',caseNotesBeforeCount);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  

});

Then('check case notes count after', async function () {
  caseNotesAfterCount= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('caseNotesAfterCount...>',caseNotesAfterCount);
  if(caseNotesBeforeCount==caseNotesAfterCount) {
    console.log("Case Notes values doesn't change after applying filters");
    console.log('caseNotesBeforeCount' + caseNotesBeforeCount);
    console.log('caseNotesAfterCount' + caseNotesAfterCount);
     	}
      
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  expect(caseNotesAfterCount,'caseNotesAfterCount').not.equal(caseNotesBeforeCount);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('check consults count before', async function () {
  consultsBeforeCount= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('consultsBeforeCount...>',consultsBeforeCount);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('check consults count after', async function () {
  consultsAfterCount= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('consultsAfterCount...>',consultsAfterCount);
  if(consultsBeforeCount==consultsAfterCount) {
    console.log("consults values doesn't change after applying filters");
    console.log('consultsBeforeCount' + consultsBeforeCount);
    console.log('consultsAfterCount' + consultsAfterCount);
     	}
      
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  expect(consultsAfterCount,'consultsAfterCount').not.equal(consultsBeforeCount);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To Count1', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksAfterCount1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
  Count_1= (await element(by.xpath(tasksAfterCount1)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Count_1...>',Count_1);
  if(tasksBeforeCount==Count_1) {
    console.log(pm.getParamV("COLUMN_NAME") + 'values doesnt change after applying filters');
    console.log('tasksBeforeCount1' + tasksBeforeCount);
    console.log('tasksAfterCount1' + Count_1);
     	}
      
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  //expect(tasksAfterCount,'tasksAfterCount').not.equal(tasksBeforeCount);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Click on Edit Filters', async function () {
  //console.log('coutnt outside function....>' + Count_1);
  await vfilters.edit_filter.click();
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Select Case Extender', async function (dataTable) {
  pm.dataTableV(dataTable);
 await vfilters.task_assignto.sendKeys(pm.getParamV("CARE_EXTENDER"));
 browser.sleep(2000);
 await element(by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")))).click();
 //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));

  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To Count2', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksAfterCount2 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
  Count_2= (await element(by.xpath(tasksAfterCount2)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Count_2...>',Count_2);
  
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  //expect(tasksAfterCount,'tasksAfterCount').not.equal(tasksBeforeCount);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify Count_1>Count2', async function () {
  console.log('Verify Count_1...>',Count_1);
  console.log('Verify Count_2...>',Count_2);
  assert.operator(+Count_1, '>', +Count_2, 'Count_1 is not greaterThan Count_2');
  console.log('Verify Count_1 after assert...>',Count_1);
  console.log('Verify Count_2 after assert...>',Count_2);
 // expect(Count_1).greaterThan[Symbol](Count_2);

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('Select Task Type', async function (dataTable) {
  pm.dataTableV(dataTable);
 await vfilters.task_tasktype.sendKeys(pm.getParamV("TASK_TYPE"));
 browser.sleep(2000);
 await element(by.xpath(vfilters.task_tasktype_dropdown.replace("$replaceToken$", pm.getParamV("TASK_TYPE")))).click();
 //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));

  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To Count3', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksAfterCount3 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
  Count_3= (await element(by.xpath(tasksAfterCount3)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Count_3...>',Count_3);
  
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify Count_1>Count3', async function () {
  console.log('Verify Count_1...>',Count_1);
  console.log('Verify Count_3...>',Count_3);
  assert.operator(+Count_1, '>', +Count_3, 'Count_1 is not greaterThan Count_3');
  console.log('Verify Count_1 after assert...>',Count_1);
  console.log('Verify Count_3 after assert...>',Count_3);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify Count2 >=Count3', async function () {
  console.log('Verify Count_2...>',Count_2);
  console.log('Verify Count_3...>',Count_3);
  assert.operator(+Count_1, '>=', +Count_3, 'Count_1 is not greaterThan Count_3');
  console.log('Verify Count_2 after assert...>',Count_2);
  console.log('Verify Count_3 after assert...>',Count_3);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Select Task Status', async function (dataTable) {
  pm.dataTableV(dataTable);
 await vfilters.task_taskstatus.sendKeys(pm.getParamV("TASK_STATUS"));
 browser.sleep(2000);
 await element(by.xpath(vfilters.task_taskstatus_dropdown.replace("$replaceToken$", pm.getParamV("TASK_STATUS")))).click();
 //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));

  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To Count4', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksAfterCount4 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
  Count_4= (await element(by.xpath(tasksAfterCount4)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Count_4...>',Count_4);
  
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify Count_1>Count4', async function () {
  console.log('Verify Count_1...>',Count_1);
  console.log('Verify Count_4...>',Count_4);
  assert.operator(+Count_1, '>', +Count_4, 'Count_1 is not greaterThan Count_4');
  console.log('Verify Count_1 after assert...>',Count_1);
  console.log('Verify Count_4 after assert...>',Count_4);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify Count2>Count4', async function () {
  console.log('Verify Count_2...>',Count_2);
  console.log('Verify Count_4...>',Count_4);
  assert.operator(+Count_2, '>', +Count_4, 'Count_2 is not greaterThan Count_4');
  console.log('Verify Count_2 after assert...>',Count_2);
  console.log('Verify Count_4 after assert...>',Count_4);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Veify Count3>Count4', async function () {
  console.log('Verify Count_3...>',Count_3);
  console.log('Verify Count_4...>',Count_4);
  assert.operator(+Count_3, '>=', +Count_4, 'Count_3 is not greaterThan Count_4');
  console.log('Verify Count_1 after assert...>',Count_1);
  console.log('Verify Count_2 after assert...>',Count_2);
  console.log('Verify Count_3 after assert...>',Count_3);
  console.log('Verify Count_4 after assert...>',Count_4);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To Count5', async function (dataTable) {
  pm.dataTableV(dataTable);
  var tasksAfterCount5 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
  Count_5= (await element(by.xpath(tasksAfterCount5)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Count_5...>',Count_5);
  
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify Count_1>Count5', async function () {
  console.log('Verify Count_1...>',Count_1);
  console.log('Verify Count_5...>',Count_5);
  assert.operator(+Count_1, '>', +Count_5, 'Count_1 is not greaterThan Count_5');
  console.log('Verify Count_1 after assert...>',Count_1);
  console.log('Verify Count_5 after assert...>',Count_5);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify Count2>Count5', async function () {
  console.log('Verify Count_2...>',Count_2);
  console.log('Verify Count_5...>',Count_5);
  assert.operator(+Count_2, '>', +Count_5, 'Count_2 is not greaterThan Count_5');
  console.log('Verify Count_2 after assert...>',Count_2);
  console.log('Verify Count_5 after assert...>',Count_5);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Veify Count3>=Count5', async function () {
  console.log('Verify Count_3...>',Count_3);
  console.log('Verify Count_5...>',Count_5);
  assert.operator(+Count_3, '>=', +Count_5, 'Count_3 is not greaterThan Count_5');
  console.log('Verify Count_3 after assert...>',Count_3);
  console.log('Verify Count_5 after assert...>',Count_5);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify Count5>=Count4', async function () {
  console.log('Verify Count_5...>',Count_5);
  console.log('Verify Count_4...>',Count_4);
  assert.operator(+Count_5, '>=', +Count_4, 'Count_5 is not greaterThan Count_4');
  console.log('Verify Count_5 after assert...>',Count_5);
  console.log('Verify Count_4 after assert...>',Count_4);

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('check Member count before', async function () {
  
//   var header:string="//span[contains(@class,'number-badge ng-star-inserted')]";
//   var value= await element(by.xpath(header)).getText();
//   var MemberCountBefore=value.replace( /\D+/g, '');
// //     var Number1=value.match(/\d/).toString();
// //    let Num = parseInt(value,1,);
//   console.log('Members Count...>',MemberCountBefore);
  // var MemberCountBefore1 = vfilters.task_lane_title.replace("$replaceToken$", pm.getParamV("COLUMN_NAME"));
   MemberCountBefore= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCountBefore...>',MemberCountBefore);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To MemberCount1', async function () {
  MemberCount1= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount1...>',MemberCount1);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('check Member count After', async function () {
  MemberCountAfter= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCountAfter...>',MemberCountAfter);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To MemberCount2', async function () {
  MemberCount2= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount2...>',MemberCount2);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount1>MemberCount2', async function () {
  console.log('Verify MemberCount1...>',MemberCount1);
  console.log('Verify MemberCount2...>',MemberCount2);
  assert.operator(+MemberCount1, '>', +MemberCount2, 'MemberCount1 is not greaterThan MemberCount2');

  console.log('Verify MemberCount1 after assert...>',MemberCount1);
  console.log('Verify MemberCount2  after assert...>',MemberCount2);

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Select child practice', async function (dataTable) {
  pm.dataTableV(dataTable);
  await vfilters.task_assignto.sendKeys(pm.getParamV("CHILD_PRACTICE"));
  browser.sleep(2000);
  await element(by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CHILD_PRACTICE")))).click();
 
   browser.sleep(4000);
   await browser.getTitle().then(function (text) {
   expect(text).to.equal("mMR");
   });
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png"); 
});

Then('Select child practice1', async function (dataTable) {
  pm.dataTableV(dataTable);
  await vfilters.task_assignto.sendKeys(pm.getParamV("CHILD_PRACTICE"));
  browser.sleep(2000);
  //await element(by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CHILD_PRACTICE")))).click();
 
   browser.sleep(4000);
   await browser.getTitle().then(function (text) {
   expect(text).to.equal("mMR");
   });
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To MemberCount3', async function () {
  browser.sleep(6000);
  MemberCount3= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount3...>',MemberCount3);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount1>MemberCount3', async function () {
  console.log('Verify MemberCount1...>',MemberCount1);
  console.log('Verify MemberCount3...>',MemberCount3);
  assert.operator(+MemberCount1, '>', +MemberCount3, 'MemberCount1 is not greaterThan MemberCount3');
  console.log('Verify MemberCount1 after assert...>',MemberCount1);
  console.log('Verify MemberCount3  after assert...>',MemberCount3);

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify the Counts MemberCount2>=MemberCount3', async function () {
  console.log('Verify MemberCount2...>',MemberCount2);
  console.log('Verify MemberCount3...>',MemberCount3);
  assert.operator(+MemberCount2, '>=', +MemberCount3, 'MemberCount2 is not greaterThan MemberCount3');
  console.log('Verify MemberCount2 after assert...>',MemberCount2);
  console.log('Verify MemberCount3  after assert...>',MemberCount3);

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Store the Count value To MemberCount4', async function () {
  MemberCount4= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount4...>',MemberCount4);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify the Counts MemberCount3=MemberCount4', async function () {
  console.log('Verify MemberCount3...>',MemberCount3);
  console.log('Verify MemberCount4...>',MemberCount4);

  assert.operator(+MemberCount3, '==', +MemberCount4, 'MemberCount3 is not equal to MemberCount4');
  console.log('Verify MemberCount3  after assert...>',MemberCount3);
  console.log('Verify MemberCount4 after assert...>',MemberCount4);


  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount5', async function () {
  MemberCount5= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount5...>',MemberCount5);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify the Counts MemberCount5<=MemberCount4', async function () {
  console.log('Verify MemberCount5...>',MemberCount5);
  console.log('Verify MemberCount4...>',MemberCount4);

  assert.operator(+MemberCount5, '<=', +MemberCount4, 'MemberCount5 is not leassthan or equal to MemberCount4');
  console.log('Verify MemberCount5  after assert...>',MemberCount5);
  console.log('Verify MemberCount4 after assert...>',MemberCount4);


  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Store the Count value To MemberCount6', async function () {
  MemberCount6= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount6...>',MemberCount6);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Verify the Counts MemberCount6<=MemberCount5', async function () {
  console.log('Verify MemberCount6...>',MemberCount6);
  console.log('Verify MemberCount5...>',MemberCount5);

  assert.operator(+MemberCount6, '<=', +MemberCount5, 'MemberCount6 is not leassthan or equal to MemberCount5');
  console.log('Verify MemberCount6  after assert...>',MemberCount6);
  console.log('Verify MemberCount5 after assert...>',MemberCount5);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount7', async function () {
  MemberCount7= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount6...>',MemberCount7);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount7<=MemberCount6', async function () {
  console.log('Verify MemberCount7...>',MemberCount7);
  console.log('Verify MemberCount6...>',MemberCount6);

  assert.operator(+MemberCount7, '<=', +MemberCount6, 'MemberCount7 is not leassthan or equal to MemberCount6');
  console.log('Verify MemberCount7  after assert...>',MemberCount7);
  console.log('Verify MemberCount6 after assert...>',MemberCount6);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Select role Care Extender', async function (dataTable) {
  pm.dataTableV(dataTable);
  await vfilters.role_careextender.sendKeys(pm.getParamV("CARE_EXTENDER"));
  browser.sleep(2000);
  await element(by.xpath(vfilters.role_careextender_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")))).click();
 
   browser.sleep(4000);
   await browser.getTitle().then(function (text) {
   expect(text).to.equal("mMR");
   });
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To MemberCount8', async function () {
  MemberCount8= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount8...>',MemberCount8);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount8<=MemberCount7', async function () {
  console.log('Verify MemberCount8...>',MemberCount8);
  console.log('Verify MemberCount7...>',MemberCount7);

  assert.operator(+MemberCount8, '<=', +MemberCount7, 'MemberCount8 is not leassthan or equal to MemberCount7');
  console.log('Verify MemberCount8  after assert...>',MemberCount8);
  console.log('Verify MemberCount7 after assert...>',MemberCount7);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount9', async function () {
  MemberCount9= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount9...>',MemberCount9);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount9<=MemberCount8', async function () {
  console.log('Verify MemberCount9...>',MemberCount9);
  console.log('Verify MemberCount8...>',MemberCount8);

  assert.operator(+MemberCount9, '<=', +MemberCount8, 'MemberCount9 is not leassthan or equal to MemberCount8');
  console.log('Verify MemberCount9  after assert...>',MemberCount9);
  console.log('Verify MemberCount8 after assert...>',MemberCount8);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Select checkbox in Member Criteria Filter', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.mc_chkbox.replace("$replaceToken$", pm.getParamV("MEMBER_CRITERIA")))).click();
 
   browser.sleep(4000);
   await browser.getTitle().then(function (text) {
   expect(text).to.equal("mMR");
   });
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png"); 
});


Then('Store the Count value To MemberCount10', async function () {
  MemberCount10= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount10...>',MemberCount10);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount10<=MemberCount9', async function () {
  console.log('Verify MemberCount10...>',MemberCount10);
  console.log('Verify MemberCount9...>',MemberCount9);

  assert.operator(+MemberCount10, '<=', +MemberCount8, 'MemberCount10 is not leassthan or equal to MemberCount9');
  console.log('Verify MemberCount10  after assert...>',MemberCount10);
  console.log('Verify MemberCount9 after assert...>',MemberCount9);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount11', async function () {
  MemberCount11= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount11...>',MemberCount11);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount11<=MemberCount10', async function () {
  console.log('Verify MemberCount11...>',MemberCount11);
  console.log('Verify MemberCount10...>',MemberCount10);

  assert.operator(+MemberCount11, '<=', +MemberCount10, 'MemberCount11 is not leassthan or equal to MemberCount10');
  console.log('Verify MemberCount11  after assert...>',MemberCount11);
  console.log('Verify MemberCount10 after assert...>',MemberCount10);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});



Then('Store the Count value To MemberCount12', async function () {
  MemberCount12= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount12...>',MemberCount12);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount12<=MemberCount11', async function () {
  console.log('Verify MemberCount12...>',MemberCount12);
  console.log('Verify MemberCount11...>',MemberCount11);

  assert.operator(+MemberCount12, '<=', +MemberCount11, 'MemberCount12 is not leassthan or equal to MemberCount11');
  console.log('Verify MemberCount12  after assert...>',MemberCount12);
  console.log('Verify MemberCount11 after assert...>',MemberCount11);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount13', async function () {
  MemberCount13= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount13...>',MemberCount13);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount13<=MemberCount12', async function () {
  console.log('Verify MemberCount13...>',MemberCount13);
  console.log('Verify MemberCount12...>',MemberCount12);

  assert.operator(+MemberCount13, '<=', +MemberCount12, 'MemberCount13 is not leassthan or equal to MemberCount12');
  console.log('Verify MemberCount13  after assert...>',MemberCount13);
  console.log('Verify MemberCount12 after assert...>',MemberCount12);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount14', async function () {
  MemberCount14= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount14...>',MemberCount14);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount14<=MemberCount13', async function () {
  console.log('Verify MemberCount14...>',MemberCount14);
  console.log('Verify MemberCount13...>',MemberCount13);

  assert.operator(+MemberCount14, '<=', +MemberCount13, 'MemberCount14 is not leassthan or equal to MemberCount13');
  console.log('Verify MemberCount14  after assert...>',MemberCount14);
  console.log('Verify MemberCount13 after assert...>',MemberCount13);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount14<=MemberCount12', async function () {
  console.log('Verify MemberCount14...>',MemberCount14);
  console.log('Verify MemberCount12...>',MemberCount12);

  assert.operator(+MemberCount14, '<=', +MemberCount12, 'MemberCount14 is not leassthan or equal to MemberCount12');
  console.log('Verify MemberCount14  after assert...>',MemberCount14);
  console.log('Verify MemberCount12 after assert...>',MemberCount12);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To MemberCount15', async function () {
  MemberCount15= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('MemberCount15...>',MemberCount15);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Verify the Counts MemberCount15<=MemberCount14', async function () {
  console.log('Verify MemberCount15...>',MemberCount15);
  console.log('Verify MemberCount14...>',MemberCount14);

  assert.operator(+MemberCount15, '<=', +MemberCount14, 'MemberCount15 is not leassthan or equal to MemberCount14');
  console.log('Verify MemberCount15  after assert...>',MemberCount15);
  console.log('Verify MemberCount14 after assert...>',MemberCount14);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('input the From and To Values in the Out Reach Score Filter', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.setInputField(vfilters.outreach_from, pm.getParamV("FROM"));
  base.setInputField(vfilters.outreach_to,pm.getParamV("TO"));
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(3000);
    });
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
});

Then('Select the values in Engagement Filters', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.eng_txtbox.replace("$replaceToken$", pm.getParamV("TYPE")))).click();
  browser.sleep(2000);
 await element(by.xpath(vfilters.eng_dropdown.replace("$replaceToken$", pm.getParamV("RESULT")))).click();
 //base.setDropdownField(vfilters.task_assignto, vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("CARE_EXTENDER")), pm.getParamV("CARE_EXTENDER"));

  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('enter the values in count Engagement Filters', async function (dataTable) {
  pm.dataTableV(dataTable);
  base.setInputField(vfilters.count_input, pm.getParamV("COUNT"));
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(3000);
    });
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
});


Then('Store the Count value To CaseNotesCount1', async function () {
  CaseNotesCount1= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('CaseNotesCount1...>',CaseNotesCount1);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To CaseNotesCount2', async function () {
  CaseNotesCount2= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('CaseNotesCount2...>',CaseNotesCount2);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify the CaseNotesCount1>CaseNotesCount2', async function () {
  console.log('Verify CaseNotesCount2...>',CaseNotesCount2);
  console.log('Verify CaseNotesCount1...>',CaseNotesCount1);

  assert.operator(+CaseNotesCount1, '>', +CaseNotesCount2, 'CaseNotesCount1 is not greaterthan to CaseNotesCount2');
  console.log('Verify CaseNotesCount2  after assert...>',CaseNotesCount2);
  console.log('Verify CaseNotesCount1 after assert...>',CaseNotesCount1);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To CaseNotesCount3', async function () {
  CaseNotesCount3= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('CaseNotesCount3...>',CaseNotesCount3);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify the CaseNotesCount3<=CaseNotesCount2', async function () {
  console.log('Verify CaseNotesCount3...>',CaseNotesCount3);
  console.log('Verify CaseNotesCount2...>',CaseNotesCount2);

  assert.operator(+CaseNotesCount3, '<=', +CaseNotesCount2, 'CaseNotesCount2 is not greaterthan to CaseNotesCount3');
  console.log('Verify CaseNotesCount3  after assert...>',CaseNotesCount3);
  console.log('Verify CaseNotesCount2 after assert...>',CaseNotesCount2);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To CaseNotesCount4', async function () {
  CaseNotesCount4= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('CaseNotesCount4...>',CaseNotesCount4);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify the CaseNotesCount4<=CaseNotesCount3', async function () {
  console.log('Verify CaseNotesCount4...>',CaseNotesCount4);
  console.log('Verify CaseNotesCount3...>',CaseNotesCount3);

  assert.operator(+CaseNotesCount4, '<=', +CaseNotesCount3, 'CaseNotesCount3 is not greaterthan to CaseNotesCount4');
  console.log('Verify CaseNotesCount4  after assert...>',CaseNotesCount4);
  console.log('Verify CaseNotesCount3 after assert...>',CaseNotesCount3);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Select Service Date', async function () {
  await vfilters.selectdates_input.click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Click on Custom Range', async function () {
  await vfilters.customrange_btn.click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Select Date Range', async function (dataTable) {
  await vfilters.previous_btn_from.click();
  await vfilters.previous_btn_from.click();
  await vfilters.previous_btn_from.click();
  browser.sleep(2000);
  await vfilters.from_date.click();
  browser.sleep(2000);
  await vfilters.previous_btn_to.click();
  browser.sleep(2000);
  await vfilters.to_date.click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Click on Apply on Date menu', async function () {
  await vfilters.apply_date.click();
  browser.sleep(4000);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To CaseNotesCount5', async function () {
  CaseNotesCount5= (await element(by.xpath(vfilters.case_notes_title)).getText()).replace("(", "").replace(")", "").replace("Case Notes ", "").trim();
  console.log('CaseNotesCount5...>',CaseNotesCount5);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify the CaseNotesCount5<=CaseNotesCount4', async function () {
  console.log('Verify CaseNotesCount5...>',CaseNotesCount5);
  console.log('Verify CaseNotesCount4...>',CaseNotesCount4);

  assert.operator(+CaseNotesCount5, '<=', +CaseNotesCount4, 'CaseNotesCount4 is not greaterthan to CaseNotesCount5');
  console.log('Verify CaseNotesCount5  after assert...>',CaseNotesCount5);
  console.log('Verify CaseNotesCount4 after assert...>',CaseNotesCount4);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Store the Count value To ConsultsCount1', async function () {
  ConsultsCount1= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('ConsultsCount1...>',ConsultsCount1);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('Store the Count value To ConsultsCount2', async function () {
  ConsultsCount2= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('ConsultsCount2...>',ConsultsCount2);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('Verify the Consults ConsultsCount2<ConsultsCount1', async function () {
  console.log('Verify ConsultsCount2...>',ConsultsCount2);
  console.log('Verify ConsultsCount1...>',ConsultsCount1);

  assert.operator(+ConsultsCount2, '<', +ConsultsCount1, 'ConsultsCount1 is not greaterthan to ConsultsCount2');
  console.log('Verify ConsultsCount2  after assert...>',ConsultsCount2);
  console.log('Verify ConsultsCount1 after assert...>',ConsultsCount1);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To ConsultsCount3', async function () {
  ConsultsCount3= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('ConsultsCount3...>',ConsultsCount3);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('Verify the Consults ConsultsCount3<=ConsultsCount2', async function () {
  console.log('Verify ConsultsCount3...>',ConsultsCount3);
  console.log('Verify ConsultsCount2...>',ConsultsCount2);

  assert.operator(+ConsultsCount3, '<=', +ConsultsCount2, 'ConsultsCount2 is not greaterthan to ConsultsCount3');
  console.log('Verify ConsultsCount3  after assert...>',ConsultsCount3);
  console.log('Verify ConsultsCount2 after assert...>',ConsultsCount2);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To ConsultsCount4', async function () {
  ConsultsCount4= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('ConsultsCount4...>',ConsultsCount4);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('Verify the Consults ConsultsCount4<=ConsultsCount3', async function () {
  console.log('Verify ConsultsCount4...>',ConsultsCount4);
  console.log('Verify ConsultsCount3...>',ConsultsCount3);

  assert.operator(+ConsultsCount4, '<=', +ConsultsCount3, 'ConsultsCount3 is not greaterthan to ConsultsCount4');
  console.log('Verify ConsultsCount4  after assert...>',ConsultsCount4);
  console.log('Verify ConsultsCount3 after assert...>',ConsultsCount3);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To ConsultsCount5', async function () {
  ConsultsCount3= (await element(by.xpath(vfilters.consults_title)).getText()).replace("(", "").replace(")", "").replace("Consults ", "").trim();
  console.log('ConsultsCount5...>',ConsultsCount5);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");  
});

Then('Verify the Consults ConsultsCount5<=ConsultsCount4', async function () {
  console.log('Verify ConsultsCount5...>',ConsultsCount5);
  console.log('Verify ConsultsCount4...>',ConsultsCount4);

  assert.operator(+ConsultsCount5, '<=', +ConsultsCount4, 'ConsultsCount4 is not greaterthan to ConsultsCount5');
  console.log('Verify ConsultsCount5  after assert...>',ConsultsCount5);
  console.log('Verify ConsultsCount4 after assert...>',ConsultsCount4);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Click on Reports', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.cm_reports_txt.replace("$replaceToken$", pm.getParamV("REPORT")))).click();
  browser.sleep(5000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Click on Members in March-2020', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.cm_member_title.replace("$replaceToken$", pm.getParamV("TITLE")))).click();
  browser.sleep(5000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Check Member Count Before in Reports page', async function () {
  Report_MemberCount_Before= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('Report_MemberCount_Before...>',Report_MemberCount_Before);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('check Reports Member count After', async function () {
  Report_MemberCount_After= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('Report_MemberCount_After...>',Report_MemberCount_After);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To ReportMemberCount1', async function () {
  ReportMemberCount1= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount1...>',ReportMemberCount1);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To ReportMemberCount2', async function () {
  ReportMemberCount2= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount2...>',ReportMemberCount2);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount1>=ReportMemberCount2', async function () {
  console.log('Verify ReportMemberCount1...>',ReportMemberCount1);
  console.log('Verify ReportMemberCount2...>',ReportMemberCount2);

  assert.operator(+ReportMemberCount1, '>=', +ReportMemberCount2, 'ReportMemberCount1 is not greaterthan to ReportMemberCount2');
  console.log('Verify ReportMemberCount1  after assert...>',ReportMemberCount1);
  console.log('Verify ReportMemberCount2 after assert...>',ReportMemberCount2);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To ReportMemberCount3', async function () {
  ReportMemberCount3= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount3...>',ReportMemberCount3);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount2>=ReportMemberCount3', async function () {
  console.log('Verify ReportMemberCount2...>',ReportMemberCount2);
  console.log('Verify ReportMemberCount3...>',ReportMemberCount3);

  assert.operator(+ReportMemberCount2, '>=', +ReportMemberCount3, 'ReportMemberCount2 is not greaterthan to ReportMemberCount3');
  console.log('Verify ReportMemberCount2  after assert...>',ReportMemberCount2);
  console.log('Verify ReportMemberCount3 after assert...>',ReportMemberCount3);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Select Check box in Time Spent for Filter members', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.timespent_selection_chbk.replace("$selection$", pm.getParamV("SELECTION")).replace("$label$", pm.getParamV("LABEL")).replace("$checkBox$", pm.getParamV("CHECKBOX_NAME")))).click();
  browser.sleep(2000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Type value in the Text Box', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.filtermember_txtbox.replace("$replaceToken$", pm.getParamV("SELECTION")))).click();

  await element(by.xpath(vfilters.filtermember_txtbox.replace("$replaceToken$", pm.getParamV("SELECTION")))).sendKeys(pm.getParamV("TEXTBOX"));
  browser.sleep(2000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To ReportMemberCount4', async function () {
  ReportMemberCount4= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount4...>',ReportMemberCount4);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount3>=ReportMemberCount4', async function () {
  console.log('Verify ReportMemberCount3...>',ReportMemberCount3);
  console.log('Verify ReportMemberCount4...>',ReportMemberCount4);

  assert.operator(+ReportMemberCount3, '>=', +ReportMemberCount4, 'ReportMemberCount3 is not greaterthan to ReportMemberCount4');
  console.log('Verify ReportMemberCount3  after assert...>',ReportMemberCount3);
  console.log('Verify ReportMemberCount4 after assert...>',ReportMemberCount4);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To ReportMemberCount5', async function () {
  ReportMemberCount5= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount5...>',ReportMemberCount5);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount4>=ReportMemberCount5', async function () {
  console.log('Verify ReportMemberCount4...>',ReportMemberCount4);
  console.log('Verify ReportMemberCount5...>',ReportMemberCount5);

  assert.operator(+ReportMemberCount4, '>=', +ReportMemberCount5, 'ReportMemberCount4 is not greaterthan to ReportMemberCount5');
  console.log('Verify ReportMemberCount4  after assert...>',ReportMemberCount4);
  console.log('Verify ReportMemberCount5 after assert...>',ReportMemberCount5);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Select Check box in Other Billing Criteria', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.excludemaxtime_chkbox.replace("$label$", pm.getParamV("LABEL")))).click();
  browser.sleep(2000);
  await browser.getTitle().then(function (text) {
  expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Store the Count value To ReportMemberCount6', async function () {
  ReportMemberCount6= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount6...>',ReportMemberCount6);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount5>=ReportMemberCount6', async function () {
  console.log('Verify ReportMemberCount5...>',ReportMemberCount5);
  console.log('Verify ReportMemberCount6...>',ReportMemberCount6);

  assert.operator(+ReportMemberCount5, '>=', +ReportMemberCount5, 'ReportMemberCount5 is not greaterthan to ReportMemberCount5');
  console.log('Verify ReportMemberCount5  after assert...>',ReportMemberCount5);
  console.log('Verify ReportMemberCount6 after assert...>',ReportMemberCount6);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

// Then('Select Yes in Assessment Completed', function (dataTable) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });


Then('Store the Count value To ReportMemberCount7', async function () {
  ReportMemberCount7= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount7...>',ReportMemberCount7);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount6>=ReportMemberCount7', async function () {
  console.log('Verify ReportMemberCount6...>',ReportMemberCount6);
  console.log('Verify ReportMemberCount7...>',ReportMemberCount7);

  assert.operator(+ReportMemberCount6, '>=', +ReportMemberCount7, 'ReportMemberCount6 is not greaterthan to ReportMemberCount7');
  console.log('Verify ReportMemberCount6  after assert...>',ReportMemberCount6);
  console.log('Verify ReportMemberCount7 after assert...>',ReportMemberCount7);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To ReportMemberCount8', async function () {
  ReportMemberCount8= (await element(by.xpath(vfilters.member_lane_reports)).getText()).replace("(", "").replace(")", "").replace("Members ", "").trim();
  console.log('ReportMemberCount8...>',ReportMemberCount8);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Verify the Counts ReportMemberCount7>=ReportMemberCount8', async function () {
  console.log('Verify ReportMemberCount7...>',ReportMemberCount7);
  console.log('Verify ReportMemberCount8...>',ReportMemberCount8);

  assert.operator(+ReportMemberCount7, '>=', +ReportMemberCount8, 'ReportMemberCount7 is not greaterthan to ReportMemberCount8');
  console.log('Verify ReportMemberCount7  after assert...>',ReportMemberCount7);
  console.log('Verify ReportMemberCount8 after assert...>',ReportMemberCount8);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Select value in Assessment Completed', async function (dataTable) {
  pm.dataTableV(dataTable);
  await vfilters.select_status_input.click();
  browser.sleep(2000);
  await element(by.xpath(vfilters.task_assignto_dropdown.replace("$replaceToken$", pm.getParamV("SELECT_STATUS")))).click();
 
   browser.sleep(4000);
   await browser.getTitle().then(function (text) {
   expect(text).to.equal("mMR");
   });
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png"); 
});


Then('check CCP Order Status Reports count before', async function () {
  Report_CCPCount_Before= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Report_CCPCount_Before...>',Report_CCPCount_Before);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Store the Count value To CCPReportCount1', async function () {
  CCPReportCount1= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('CCPReportCount1...>',CCPReportCount1);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('check CCP Order Status count After', async function () {
  Report_CCPCount_After= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Report_CCPCount_After...>',Report_CCPCount_After);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});


Then('Store the Count value To CCPReportCount2', async function () {
  CCPReportCount2= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('CCPReportCount2...>',CCPReportCount2);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify the Counts CCPReportCount1>CCPReportCount2', async function () {
  console.log('Verify CCPReportCount1...>',CCPReportCount1);
  console.log('Verify CCPReportCount2...>',CCPReportCount2);

  assert.operator(+CCPReportCount1, '>', +CCPReportCount2, 'CCPReportCount1 is not greaterthan to CCPReportCount2');
  console.log('Verify CCPReportCount1  after assert...>',CCPReportCount1);
  console.log('Verify CCPReportCount2 after assert...>',CCPReportCount2);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});


Then('Store the Count value To CCPReportCount3', async function () {
  CCPReportCount3= (await element(by.xpath(vfilters.member_lane_val)).getText()).replace("(", "").replace(")", "").trim();
  console.log('CCPReportCount3...>',CCPReportCount3);
  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png"); 
});

Then('Verify the Counts CCPReportCount1>CCPReportCount3', async function () {
  console.log('Verify CCPReportCount1...>',CCPReportCount1);
  console.log('Verify CCPReportCount3...>',CCPReportCount3);

  assert.operator(+CCPReportCount1, '>', +CCPReportCount3, 'CCPReportCount1 is not greaterthan to CCPReportCount3');
  console.log('Verify CCPReportCount1  after assert...>',CCPReportCount1);
  console.log('Verify CCPReportCount3 after assert...>',CCPReportCount3);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Click on member View', async function (dataTable) {
  pm.dataTableV(dataTable);
  await element(by.xpath(vfilters.ml_view_button.replace("$replaceToken$", pm.getParamV("VIEW_ICON")))).click();
  browser.sleep(4000);
   await browser.getTitle().then(function (text) {
   expect(text).to.equal("mMR");
   });
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot, "image/png"); 
});



