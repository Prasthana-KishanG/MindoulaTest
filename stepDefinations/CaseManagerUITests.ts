"use strict";

import { Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { Base } from "../Util/Base";
import { membersConsults } from "../pageObjects/membersConsults";
import { membersTags } from "../pageObjects/membersTags";
import { MMRController } from "../Util/MMRController";
import { membersCaseNotes } from "../pageObjects/membersCaseNotes";
import { CaseManagerUI } from "../pageObjects/CaseManagerUI";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";
import { E2EMember } from "../pageObjects/E2EMember";

let E2EMem = new E2EMember();
let consults = new membersConsults();
let tags = new membersTags();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let casenotes = new membersCaseNotes();
let pm = new ParamManager();
let caseMui = new CaseManagerUI();
const moment = require("moment");
var m_tasks_Coulumn1Count="";
var m_tasks_Coulumn2Count="";
var m_tasks_Coulumn3Count="";

Then('Verify Tasks Button  and Tasks Text in Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await caseMui.m_task_text.getText() ,"Text of Tasks " ).to.equal(pm.getParamH("Text"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Click on Tasks in the Left Navigation', async function () {
	await caseMui.m_task_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('veify the tasks page open in the left navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await caseMui.m_task_header_text.getText() ,"Heading of Tasks page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Verify the Text Tasks in the Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await caseMui.m_task_header_text.getText() ,"Heading of Tasks page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Verify the Columns and get the counts', async function (dataTable) {
	pm.dataTableH(dataTable);

 base.compareValues('Column1', await (await element(by.xpath(caseMui.m_tasklane_title.replace("$replaceToken$", pm.getParamH("Coloumn1")))).getText()).substring(0,14), pm.getParamH("Coloumn1"));
 base.compareValues('Column2', await (await element(by.xpath(caseMui.m_tasklane_title.replace("$replaceToken$", pm.getParamH("Coloumn2")))).getText()).substring(0,15), pm.getParamH("Coloumn2"));
 base.compareValues('Column3', await (await element(by.xpath(caseMui.m_tasklane_title.replace("$replaceToken$", pm.getParamH("Coloumn3")))).getText()).substring(0,7), pm.getParamH("Coloumn3"));


 var Coulumn1Count = caseMui.task_lane_count.replace("$replaceToken$", pm.getParamH("Coloumn1"));
  m_tasks_Coulumn1Count= (await element(by.xpath(Coulumn1Count)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Coloumn1_Count...>',m_tasks_Coulumn1Count);

  var Coulumn2Count = caseMui.task_lane_count.replace("$replaceToken$", pm.getParamH("Coloumn2"));
  m_tasks_Coulumn2Count= (await element(by.xpath(Coulumn2Count)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Coloumn2_Count...>',m_tasks_Coulumn2Count);

  var Coulumn3Count = caseMui.task_lane_count.replace("$replaceToken$", pm.getParamH("Coloumn3"));
  m_tasks_Coulumn3Count= (await element(by.xpath(Coulumn3Count)).getText()).replace("(", "").replace(")", "").trim();
  console.log('Coloumn3_Count...>',m_tasks_Coulumn3Count);

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  });


  Then('Verify the Slected listview None AddFilter button in the Page', async function (dataTable) {
	pm.dataTableH(dataTable);
	base.compareValues("FILTER_LABEL",await caseMui.m_filter_label.getText(), pm.getParamH("FILTER_LABEL"));
	base.compareValues("NONE_BUTTON",await caseMui.m_none_btn.getText(), pm.getParamH("NONE_BUTTON"));
	base.compareValues("ADD_FILTER_BUTTON",await caseMui.m_addfilter_btn.getText(), pm.getParamH("ADD_FILTER_BUTTON"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Veify Members Icon and Members Text in the Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await caseMui.m_members_text.getText() ,"Text of Members " ).to.equal(pm.getParamH("Text"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Verify Members Text and Get the Members Count', async function (dataTable) {
	pm.dataTableH(dataTable);

  base.compareValues('Text', await caseMui.m_members_title.getText(), pm.getParamH("Text"));
  var header:string="//span[contains(@class,'number-badge ng-star-inserted')]";
  var value= await element(by.xpath(header)).getText();
  var MembersCount=value.replace( /\D+/g, '');
//     var Number1=value.match(/\d/).toString();
//    let Num = parseInt(value,1,);
  console.log('Members Count...>',MembersCount);

    await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });

  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  });

//   Then('Take Screen Shot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });

  Then('Type 9849275538 in the Member Search Text Box', async function (dataTable) {
	pm.dataTableH(dataTable);
	await caseMui.ml_search.sendKeys(pm.getParamH("SEARCH"));
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(5000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Veify the Member List Retrieved with the Mobile number 9849275538', async function (dataTable) {

	pm.dataTableH(dataTable);
	base.compareValues('Member MOBILE_NUMBER',  await element(by.xpath(caseMui.ml_select_member_num.replace("$membname$", pm.getParamH("MEMBER_NAME")).replace("$membnumber$", pm.getParamH("MOBILE_NUMBER")))).getText(), pm.getParamH("MOBILE_NUMBER"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
});

Then('Type 9849275537 in the Member Search Text Box', async function (dataTable) {
	pm.dataTableH(dataTable);
	await caseMui.ml_search.sendKeys(pm.getParamH("SEARCH"));
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(8000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Veify the Member List Retrieved with the Mobile number 9849275537', async function (dataTable) {

	pm.dataTableH(dataTable);
	base.compareValues('Member MOBILE_NUMBER',  await element(by.xpath(caseMui.ml_select_member_num.replace("$membname$", pm.getParamH("MEMBER_NAME")).replace("$membnumber$", pm.getParamH("MOBILE_NUMBER")))).getText(), pm.getParamH("MOBILE_NUMBER"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
});


  Then('Pick the Top Member Recieved', async function (dataTable) {
	pm.dataTableH(dataTable);
		await element(by.xpath(caseMui.ml_select_member.replace("$replaceToken$", pm.getParamH("MEMBER_NAME"))));
		await browser.getTitle().then(async function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(3000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
  });


  Then('Verify the Name and Mobile number', async function (dataTable) {
	pm.dataTableH(dataTable);
	base.compareValues('Member Name',  await element(by.xpath(caseMui.ml_select_member.replace("$replaceToken$", pm.getParamH("MEMBER_NAME")))).getText(), pm.getParamH("MEMBER_NAME"));
	base.compareValues('Member MOBILE_NUMBER',  await element(by.xpath(caseMui.ml_select_member_num.replace("$membname$", pm.getParamH("MEMBER_NAME")).replace("$membnumber$", pm.getParamH("MOBILE_NUMBER")))).getText(), pm.getParamH("MOBILE_NUMBER"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then("user clicks on Members in left side navigation", async function() {
	await caseMui.menuItemXpath.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  browser.sleep(5000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then('verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists', async function (dataTable) {
	pm.dataTableV(dataTable);
  var LISTVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LISTVIEW_ICON")))).getAttribute("mattooltip");
  console.log('LISTVIEW_ICON...>',LISTVIEW_ICON);
  var LISTVIEW_ICON_EXIST="NO";
	if(LISTVIEW_ICON==pm.getParamV("LISTVIEW_ICON")){
		LISTVIEW_ICON_EXIST = "YES";
  }

  var LANESTATUSVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LANESTATUSVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('LANESTATUSVIEW_ICON...>',LANESTATUSVIEW_ICON);
  var LANESTATUSVIEW_ICON_EXIST="NO";
	if(LANESTATUSVIEW_ICON==pm.getParamV("LANESTATUSVIEW_ICON")){
		LANESTATUSVIEW_ICON_EXIST = "YES";
  }

  var OUTREACHVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("OUTREACHVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('OUTREACHVIEW_ICON...>',OUTREACHVIEW_ICON);
  var OUTREACHVIEW_ICON_EXIST="NO";
	if(OUTREACHVIEW_ICON==pm.getParamV("OUTREACHVIEW_ICON")){
		OUTREACHVIEW_ICON_EXIST = "YES";
  }

  var REGISTRYVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("REGISTRYVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('REGISTRYVIEW_ICON...>',REGISTRYVIEW_ICON);
  var REGISTRYVIEW_ICON_EXIST="NO";
	if(REGISTRYVIEW_ICON==pm.getParamV("REGISTRYVIEW_ICON")){
		REGISTRYVIEW_ICON_EXIST = "YES";
  }

  var MAPVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("MAPVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('MAPVIEW_ICON...>',MAPVIEW_ICON);
  var MAPVIEW_ICON_EXIST="NO";
	if(MAPVIEW_ICON==pm.getParamV("MAPVIEW_ICON")){
		MAPVIEW_ICON_EXIST = "YES";
  }

  var ADDMEMBER_ICON = await element(by.xpath(caseMui.ml_add_memb_button.replace("$replaceToken$", pm.getParamV("ADDMEMBER_ICON")))).getText();
  console.log('ADDMEMBER_ICON...>',ADDMEMBER_ICON);
  var ADDMEMBER_ICON_EXIST="NO";
	if(ADDMEMBER_ICON==pm.getParamV("ADDMEMBER_ICON")){
		ADDMEMBER_ICON_EXIST = "YES";
  }
  
  base.compareValues('LISTVIEW_ICON',  LISTVIEW_ICON_EXIST, pm.getParamV("LISTVIEW_ICON_EXIST"));
  base.compareValues('LANESTATUSVIEW_ICON',  LANESTATUSVIEW_ICON_EXIST, pm.getParamV("LANESTATUSVIEW_ICON_EXIST"));
  base.compareValues('OUTREACHVIEW_ICON',  OUTREACHVIEW_ICON_EXIST, pm.getParamV("OUTREACHVIEW_ICON_EXIST"));
  base.compareValues('REGISTRYVIEW_ICON',  REGISTRYVIEW_ICON_EXIST, pm.getParamV("REGISTRYVIEW_ICON_EXIST"));
  base.compareValues('MAPVIEW_ICON',  MAPVIEW_ICON_EXIST, pm.getParamV("MAPVIEW_ICON_EXIST"));
  base.compareValues('ADDMEMBER_ICON',  ADDMEMBER_ICON_EXIST, pm.getParamV("ADDMEMBER_ICON_EXIST"));
  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

Then('verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists1', async function (dataTable) {
	pm.dataTableV(dataTable);
  var LISTVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LISTVIEW_ICON")))).getAttribute("mattooltip");
  console.log('LISTVIEW_ICON...>',LISTVIEW_ICON);
  var LISTVIEW_ICON_EXIST="NO";
	if(LISTVIEW_ICON==pm.getParamV("LISTVIEW_ICON")){
		LISTVIEW_ICON_EXIST = "YES";
  }

  var LANESTATUSVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("LANESTATUSVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('LANESTATUSVIEW_ICON...>',LANESTATUSVIEW_ICON);
  var LANESTATUSVIEW_ICON_EXIST="NO";
	if(LANESTATUSVIEW_ICON==pm.getParamV("LANESTATUSVIEW_ICON")){
		LANESTATUSVIEW_ICON_EXIST = "YES";
  }

  var OUTREACHVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("OUTREACHVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('OUTREACHVIEW_ICON...>',OUTREACHVIEW_ICON);
  var OUTREACHVIEW_ICON_EXIST="NO";
	if(OUTREACHVIEW_ICON==pm.getParamV("OUTREACHVIEW_ICON")){
		OUTREACHVIEW_ICON_EXIST = "YES";
  }

  var REGISTRYVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("REGISTRYVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('REGISTRYVIEW_ICON...>',REGISTRYVIEW_ICON);
  var REGISTRYVIEW_ICON_EXIST="NO";
	if(REGISTRYVIEW_ICON==pm.getParamV("REGISTRYVIEW_ICON")){
		REGISTRYVIEW_ICON_EXIST = "YES";
  }

  var MAPVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamV("MAPVIEW_ICON")))).getAttribute("mattooltip");;
  console.log('MAPVIEW_ICON...>',MAPVIEW_ICON);
  var MAPVIEW_ICON_EXIST="NO";
	if(MAPVIEW_ICON==pm.getParamV("MAPVIEW_ICON")){
		MAPVIEW_ICON_EXIST = "YES";
  }
  
  base.compareValues('LISTVIEW_ICON',  LISTVIEW_ICON_EXIST, pm.getParamV("LISTVIEW_ICON_EXIST"));
  base.compareValues('LANESTATUSVIEW_ICON',  LANESTATUSVIEW_ICON_EXIST, pm.getParamV("LANESTATUSVIEW_ICON_EXIST"));
  base.compareValues('OUTREACHVIEW_ICON',  OUTREACHVIEW_ICON_EXIST, pm.getParamV("OUTREACHVIEW_ICON_EXIST"));
  base.compareValues('REGISTRYVIEW_ICON',  REGISTRYVIEW_ICON_EXIST, pm.getParamV("REGISTRYVIEW_ICON_EXIST"));
  base.compareValues('MAPVIEW_ICON',  MAPVIEW_ICON_EXIST, pm.getParamV("MAPVIEW_ICON_EXIST"));
  
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  return true;

});

// Then('verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists', async function (dataTable) {
//   	pm.dataTableH(dataTable);
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LISTVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LANESTATUSVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("OUTREACHVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("REGISTRYVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("MAPVIEW_ICON")))).isDisplayed());
// 	expect(await element(by.xpath(caseMui.ml_add_memb_button.replace("$replaceToken$", pm.getParamH("ADDMEMBER_ICON")))).isDisplayed());
// 	const screenshot = await browser.takeScreenshot();
// 	this.attach(screenshot, "image/png");
// 	return true;
// });


  Then('Mousehover to List view icon', async function () {
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_list_view))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	
  });


  Then('Get Text from the List View Icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	var LISTVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LISTVIEW_ICON")))).getAttribute("mattooltip");
	expect(LISTVIEW_ICON ,"LISTVIEW_ICON" ).to.equal(pm.getParamH("LISTVIEW_ICON"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	
	// var listviewtext=await element(by.xpath("//div[@class='view-buttons__btn selected']")).getAttribute("mattooltip");
	// console.log('listviewtext...>',listviewtext);
  });


  Then('Take action on View', async function (dataTable) {
	pm.dataTableH(dataTable);
	await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("VIEW")))).click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(4000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });



  Then('Mousehover to Lane Status View icon', async function () {
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_lanestatus_view))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Lane Status View Icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	var LANESTATUSVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("LANESTATUSVIEW_ICON")))).getAttribute("mattooltip");
	expect(LANESTATUSVIEW_ICON ,"LANESTATUSVIEW_ICON" ).to.equal(pm.getParamH("LANESTATUSVIEW_ICON"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });





  Then('Mousehover to Outreach View icon', async function () {
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_outreach_view))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Outreach View Icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	var OUTREACHVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("OUTREACHVIEW_ICON")))).getAttribute("mattooltip");
	expect(OUTREACHVIEW_ICON ,"OUTREACHVIEW_ICON" ).to.equal(pm.getParamH("OUTREACHVIEW_ICON"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


//   Then('Take ScreenShot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });

  Then('Mousehover to Registry View icon', async function () {
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_registry_view))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Registry View Icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	var REGISTRYVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("REGISTRYVIEW_ICON")))).getAttribute("mattooltip");
	expect(REGISTRYVIEW_ICON ,"REGISTRYVIEW_ICON" ).to.equal(pm.getParamH("REGISTRYVIEW_ICON"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


//   Then('Click on Registry View', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });


//   Then('Take ScreenShot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });

  Then('Mousehover to Map View icon', async function () {
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_map_view))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Map View Icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	var MAPVIEW_ICON = await element(by.xpath(caseMui.ml_view_button.replace("$replaceToken$", pm.getParamH("MAPVIEW_ICON")))).getAttribute("mattooltip");
	expect(MAPVIEW_ICON ,"MAPVIEW_ICON" ).to.equal(pm.getParamH("MAPVIEW_ICON"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


//   Then('Click on Map View', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });


//   Then('Take ScreenShot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });


//   Then('Click on the Members in the Left Navigation', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });


  Then('Search Member last name in the Search bar', async function (dataTable) {
	pm.dataTableH(dataTable);
		browser.sleep(3000);
		 var membName = pm.getParamH("Name");
		//  if(membName.trim()==("")) {
		// 			 membName = mmrc.getCurrentUser();
		// 		 }
				 await E2EMem.ml_search.clear();	 
				 await E2EMem.ml_search.sendKeys(membName);	 
				 await browser.getTitle().then(async function(text) {
					expect(text).to.equal("mMR");
					browser.sleep(5000);
				  });
				  const screenshot = await browser.takeScreenshot();
				  this.attach(screenshot, "image/png");
  });



  Then('Verify the Text in the Header Column1', async function (dataTable) {
	pm.dataTableV(dataTable);

	// base.compareValues('Text1',await caseMui.cm_emrid_label.getText()+","+await caseMui.cm_dob_label.getText()+","+await caseMui.cm_provider_label.getText(), pm.getParamV("Text1"));
	// browser.actions().mouseMove(await caseMui.cm_emrid_label).perform();
	// base.compareValues('Text2',  (await caseMui.cm_practice_label.getText()+","+await caseMui.cm_medicaid_label.getText()), pm.getParamV("Text2"));

	// const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;


	expect(await caseMui.cm_emrid_label.getText()+","+await caseMui.cm_dob_label.getText()+","+await caseMui.cm_provider_label.getText() ,"Text1" ).to.equal(pm.getParamV("Text1"));
	browser.actions().mouseMove(await caseMui.cm_emrid_label).perform();
	expect(await caseMui.cm_practice_label.getText()+","+await caseMui.cm_medicaid_label.getText() ,"Text2" ).to.equal(pm.getParamV("Text2"));

	
	// pm.dataTableV(dataTable);
	// base.compareValues('Text1',await caseMui.cm_emrid_label.getText()+ await caseMui.cm_emrid_val.getText()+","+await caseMui.cm_dob_label.getText()+await caseMui.cm_dob_val.getText()+","+await caseMui.cm_provider_label.getText()+await caseMui.cm_provider_val.getText(), pm.getParamV("Text1"));
	// browser.actions().mouseMove(await caseMui.cm_emrid_label).perform();
	// base.compareValues('Text2',  (await caseMui.cm_provider_phone_label.getText()+"-"+","+await caseMui.cm_practice_label.getText()+await caseMui.cm_practice_val.getText()+","+await caseMui.cm_medicaid_label.getText()+await caseMui.cm_medicaid_val.getText()), pm.getParamV("Text2"));

	// const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;
  });


  Then('Verify the Text in the Header Column2', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await caseMui.cm_primary_label).perform();
	expect(await caseMui.cm_primary_label.getText()+","+await caseMui.cm_home_label.getText()+","+await caseMui.cm_work_label.getText() ,"Text1" ).to.equal(pm.getParamV("Text1"));
	//expect(await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText() ,"Text2" ).to.equal(pm.getParamV("Text2"));



	// base.compareValues('Text1',(await caseMui.cm_primary_label.getText()+","+await caseMui.cm_home_label.getText()+","+await caseMui.cm_work_label.getText()), pm.getParamV("Text1"));
	// base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));

	// const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;

	// pm.dataTableV(dataTable);
	// browser.actions().mouseMove(await caseMui.cm_cont_details).perform();

	// base.compareValues('Text1',await caseMui.cm_primary_label.getText()+ await caseMui.cm_primary_ph_val.getText()+","+await caseMui.cm_home_label.getText()+await caseMui.cm_home_ph_val.getText()+","+await caseMui.cm_work_label.getText()+await caseMui.cm_work_ph_val.getText(), pm.getParamV("Text1"));
	// base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));

	// const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;
  });

  

  Then('Verify the Text in the Header Column2 email adderess', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await caseMui.cm_primary_label).perform();
	//expect(await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText() ,"Text2" ).to.equal(pm.getParamV("Text2"));



	// base.compareValues('Text1',(await caseMui.cm_primary_label.getText()+","+await caseMui.cm_home_label.getText()+","+await caseMui.cm_work_label.getText()), pm.getParamV("Text1"));
	 base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));

	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

	// pm.dataTableV(dataTable);
	// browser.actions().mouseMove(await caseMui.cm_cont_details).perform();

	// base.compareValues('Text1',await caseMui.cm_primary_label.getText()+ await caseMui.cm_primary_ph_val.getText()+","+await caseMui.cm_home_label.getText()+await caseMui.cm_home_ph_val.getText()+","+await caseMui.cm_work_label.getText()+await caseMui.cm_work_ph_val.getText(), pm.getParamV("Text1"));
	// base.compareValues('Text2',  (await caseMui.cm_email_val.getText()+","+await caseMui.cm_address_val.getText()), pm.getParamV("Text2"));

	// const val = base.getValue();
	// expect(val ? JSON.stringify(val) : null).to.equal(null);
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;
  });


  Then('Mousehover on the Header Column3', async function () {
	browser.actions().mouseMove(caseMui.cm_header_col3).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('verify the Text in the Header Column3', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues('Text1',await caseMui.cm_bt_val.getText()+","+ await caseMui.cm_bhcensus1_val.getText()+","+ await caseMui.cm_bhcensus2_val.getText()+","+ await caseMui.cm_bhcensus3_val.getText(),pm.getParamV("TEXT"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


//   Then('Take Screen Shot', function () {
// 	// Write code here that turns the phrase above into concrete actions
// 	return 'pending';
//   });


  Then('Mousehover on Edit Iocn', async function () {
	browser.actions().mouseMove(caseMui.cm_quick_edit_icon).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Edit Icon', async function (dataTable) {
	pm.dataTableV(dataTable);
	expect( await (caseMui.cm_quick_edit_icon).getAttribute("mattooltip") ,"Edit icon text" ).to.equal(pm.getParamV("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });


  Then('Mousehover on chat Iocn',async function () {
	browser.actions().mouseMove(caseMui.cm_quick_chat_icon).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the chat Icon',async function (dataTable) {
	pm.dataTableV(dataTable);
	expect( await (caseMui.cm_quick_chat_icon).getAttribute("icon") ,"Chat icon text" ).to.equal(pm.getParamV("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Mousehover on Add Case Note Iocn',async function () {
	browser.actions().mouseMove(caseMui.cm_quick_casenote_icon).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Add Case Note Icon',async function (dataTable) {
	pm.dataTableV(dataTable);
	expect( await (caseMui.cm_quick_casenote_icon).getAttribute("icon") ,"Add case note icon text" ).to.equal(pm.getParamV("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Mousehover on Add Tag Iocn',async function () {
	browser.actions().mouseMove(caseMui.cm_quick_tag_icon).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Get Text from the Add Tag Icon', async function (dataTable) {
	pm.dataTableV(dataTable);
	expect( await (caseMui.cm_quick_tag_icon).getAttribute("mattooltip") ,"Add tag icon text" ).to.equal(pm.getParamV("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });



  Then('Verify the Casenotes Icon and Case Notes Text in the Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await (await caseMui.cm_casenotes_text.getText()).trim() ,"Text of Case Notes " ).to.equal(pm.getParamH("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Click on the Case Notes', async function () {
	await caseMui.cm_casenotes_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Verify the Case notes page Opened.', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_casenotes_header_text)).getText()).substring(0,10) ,"Heading of Case notes page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Verify the CaseNotes Text and Get the Casenotes count', async function (dataTable) {
	pm.dataTableH(dataTable);

 base.compareValues('Case Notes Text', await (await element(by.xpath(caseMui.m_casenotes_title.replace("$replaceToken$", pm.getParamH("TEXT")))).getText()).substring(0,10), pm.getParamH("TEXT"));
 
 var value= await element(by.xpath(caseMui.cm_casenotes_header_text)).getText();
 var CaseNotesCount=value.replace( /\D+/g, '');
//     var Number1=value.match(/\d/).toString();
//    let Num = parseInt(value,1,);
 console.log('CaseNotesCount...>',CaseNotesCount);

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  });


  Then('Verify the Consults Icon and Consults Text in the Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await caseMui.cm_consults_icon.isDisplayed(),'Consults icon not displayed');
	expect( await (await caseMui.cm_consults_text.getText()).trim() ,"Text of Consults " ).to.equal(pm.getParamH("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Click on the Consults', async function () {
	await caseMui.cm_consults_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Verify the Consults page Opened.', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_consults_header_text)).getText()).substring(0,8) ,"Heading of Consults page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Verify the Consults Text and Get the Consults count', async function (dataTable) {
	pm.dataTableH(dataTable);

 base.compareValues('Consults Text', await (await element(by.xpath(caseMui.m_consults_title.replace("$replaceToken$", pm.getParamH("TEXT")))).getText()).substring(0,8), pm.getParamH("TEXT"));
 
 var value= await element(by.xpath(caseMui.cm_consults_header_text)).getText();
 var ConsultsCount=value.replace( /\D+/g, '');
//     var Number1=value.match(/\d/).toString();
//    let Num = parseInt(value,1,);
 console.log('ConsultsCount...>',ConsultsCount);

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  });



  Then('Veify Assessment Button Assessment Text Exists in Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await caseMui.cm_assessments_icon.isDisplayed(),'Assessments icon not displayed');
	expect( await (await caseMui.cm_assessments_text.getText()).trim() ,"Text of Assessments " ).to.equal(pm.getParamH("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  
  Then('Veify Assessment Button Assessment Text not Exists in Left Navigation', async function (dataTable) {
	
	var ASSESSMENTS_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await element(by.xpath(caseMui.cm_assessments_icon_str.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent())
	{
		ASSESSMENTS_ICON_EXIST="YES";
	}
	  
	base.compareValues('ASSESSMENTS_ICON',  ASSESSMENTS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	
  });


  Then('Click on the Assessments', async function () {
	await caseMui.cm_assessments_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });


  Then('Verify the Assessments page Opened.', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_assessments_header_text)).getText()),"Heading of Assessments page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Verify the Assements Text and Get the Assessments count', async function (dataTable) {
	pm.dataTableH(dataTable);

 base.compareValues('Assessments Text', await (await element(by.xpath(caseMui.cm_assessments_header_text)).getText()), pm.getParamH("TEXT"));
 
 var value= await element(by.xpath(caseMui.cm_assessments_count)).getText();
 var AssessmentsCount=value.replace( /\D+/g, '');
//     var Number1=value.match(/\d/).toString();
//    let Num = parseInt(value,1,);
 console.log('AssessmentsCount...>',AssessmentsCount);

  await browser.getTitle().then(function (text) {
    expect(text).to.equal("mMR");
  });
  const val = base.getValue();
  expect(val ? JSON.stringify(val) : null).to.equal(null);
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  });



   Then('Veify Report Button Report Text Exists in Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await caseMui.cm_reports_icon.isDisplayed(),'Reports icon not displayed');
	expect( await (await caseMui.cm_reports_text.getText()).trim() ,"Text of Reports" ).to.equal(pm.getParamH("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   

   Then('Veify Report Button Report Text Not Exists in Left Navigation', async function (dataTable) {
	var REPORTS_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await element(by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent())
	{
		 REPORTS_ICON_EXIST="YES";
	}
	 
	base.compareValues('REPORTS_ICON',  REPORTS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	// pm.dataTableH(dataTable);
	// expect(await caseMui.cm_reports_icon.not.isDisplayed(),'Reports icon displayed');
	// //expect( await (await caseMui.cm_reports_text.getText()).trim() ,"Text of Reports" ).to.equal(pm.getParamH("TEXT"));
	// const screenshot = await browser.takeScreenshot();
	// this.attach(screenshot, "image/png");
	// return true;
   });

   Then('Click on the Reports', async function () {
	await caseMui.cm_reports_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });

   Then('Verify the Reports page Opened.', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_reports_header_text)).getText()),"Heading of Reports page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Verify the Reports Text in the Header', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_reports_header_text)).getText()),"Heading of Reports page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   Then('Verify the Report Text and Report Images Exists in the Reports Page', async function (dataTable) {
	pm.dataTableV(dataTable);
	var IMAGE_NAME = await element(by.xpath(caseMui.cm_reports_image.replace("$replaceToken$", pm.getParamV("REPORT")))).getAttribute("src");
	console.log(pm.getParamV("REPORT")+'IMAGE_NAME...>',IMAGE_NAME);
	var IMAGE_NAME_EXIST="NO";
	  if(IMAGE_NAME==pm.getParamV("IMAGE_NAME")){
		IMAGE_NAME_EXIST = "YES";
	}
  
	
	base.compareValues('IMAGE_NAME'+pm.getParamV("REPORT"),  IMAGE_NAME_EXIST, pm.getParamV("REPORT_IMAGE_EXISTS"));
	base.compareValues('Report Text'+pm.getParamV("REPORT"),  await element(by.xpath(caseMui.cm_reports_txt.replace("$replaceToken$", pm.getParamV("REPORT")))).getText(), pm.getParamV("REPORT"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });



   Then('Verify Engagment request icon Exists', async function (dataTable) {
	pm.dataTableV(dataTable);
	var ENG_REQ_ICON = await element(by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
	console.log('ENG_REQ_ICON...>',ENG_REQ_ICON);
	var ENG_REQ_ICON_EXIST="NO";
	  if(ENG_REQ_ICON==pm.getParamV("ICON")){
		ENG_REQ_ICON_EXIST = "YES";
	}
  
	base.compareValues('ENG_REQ_ICON',  ENG_REQ_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   Then('Verify Engagment request icon not Exists', async function (dataTable) {

	var ENG_REQ_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await element(by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent())
	{
		ENG_REQ_ICON_EXIST="YES";
	}
	  
	base.compareValues('ENG_REQ_ICON',  ENG_REQ_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

   });


   Then('Get Text by mousehover to the icon', async function (dataTable) {
	pm.dataTableV(dataTable);
	expect( await element(by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("TEXT")))).getAttribute("mattooltip") ,"Engagement request icon text" ).to.equal(pm.getParamV("TEXT"));
	console.log('ENG_REQ_ICON tEXT...>',await element(by.xpath(caseMui.cm_eng_req_icon.replace("$replaceToken$", pm.getParamV("TEXT")))).getAttribute("mattooltip"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });



   Then('Verify ActivityFeedIcon Exists', async function (dataTable) {
	pm.dataTableV(dataTable);
	var ACTIVITY_FEED_ICON = await element(by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
	console.log('ACTIVITY_FEED_ICON...>',ACTIVITY_FEED_ICON);
	var ACTIVITY_FEED_ICON_EXIST="NO";
	  if(ACTIVITY_FEED_ICON==pm.getParamV("ICON")){
		ACTIVITY_FEED_ICON_EXIST = "YES";
	}
  
	base.compareValues('ENG_REQ_ICON',  ACTIVITY_FEED_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Click on Activity Feed', async function (dataTable) {
	pm.dataTableV(dataTable);
	await element(by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamV("ICON")))).click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });


   Then('Verify Text in the Menu', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("TEXT1",await caseMui.cm_activity_text.getText(), pm.getParamV("TEXT1"));
	// base.compareValues("TEXT2",await caseMui.cm_activity_notify.getText(), pm.getParamV("TEXT2"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


//    Then('Click on Activity Feed', function () {
// 	 // Write code here that turns the phrase above into concrete actions
// 	 return 'pending';
//    });


   Then('Mousehover ActivityfeedIcon', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamV("ICON"))))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });


   Then('Get Text for Activityfeed icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await element(by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip") ,"Activity feed icon text" ).to.equal(pm.getParamH("TEXT"));
	console.log('Activityfeed icon tEXT...>',await element(by.xpath(caseMui.cm_activity_feed_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Verify Chat Icon not Exists', async function (dataTable) {
	var CHAT_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await element(by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent())
	{
		CHAT_ICON_EXIST="YES";
	}
 
	base.compareValues('CHAT_ICON',  CHAT_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

   });

   
   Then('Verify Chat Icon Exists', async function (dataTable) {
	pm.dataTableV(dataTable);
	var CHAT_ICON = await element(by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
	console.log('CHAT_ICON...>',CHAT_ICON);
	var CHAT_ICON_EXIST="NO";
	  if(CHAT_ICON==pm.getParamV("ICON")){
		CHAT_ICON_EXIST = "YES";
	}
  
	base.compareValues('CHAT_ICON',  CHAT_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   Then('Verify Chat Icon Exists in quick Actions', async function (dataTable) {
	var CHAT_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await caseMui.cm_quick_chat_icon.isPresent())
	{
		CHAT_ICON_EXIST="YES";
	}
 
	base.compareValues('CHAT_ICON',  CHAT_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

   });


   Then('Mousehover on Chat Icon', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamV("ICON"))))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });


   Then('Get Text from Chat icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await element(by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip") ,"Chat icon text" ).to.equal(pm.getParamH("TEXT"));
	console.log('Chat icon tEXT...>',await element(by.xpath(caseMui.cm_chat_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   Then('Verify The MMR Help Icon Exists', async function (dataTable) {
	pm.dataTableV(dataTable);
	var SUPPORT_HELP_ICON = await element(by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamV("ICON")))).getAttribute("mattooltip");
	console.log('SUPPORT_HELP_ICON...>',SUPPORT_HELP_ICON);
	var SUPPORT_HELP_ICON_EXIST="NO";
	  if(SUPPORT_HELP_ICON==pm.getParamV("ICON")){
		SUPPORT_HELP_ICON_EXIST = "YES";
	}
  
	base.compareValues('SUPPORT HELP ICON',  SUPPORT_HELP_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Mouse hover to the MMR Help Icon', async function (dataTable) {
	pm.dataTableV(dataTable);
	browser.actions().mouseMove(await element(by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamV("ICON"))))).perform();
	await browser.getTitle().then(async function(text) {
		expect(text).to.equal("mMR");
		//browser.sleep(3000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });


   Then('Get Text from the help Icon', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect( await element(by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip") ,"Support Help icon text" ).to.equal(pm.getParamH("TEXT"));
	console.log('Support Help icon tEXT...>',await element(by.xpath(caseMui.cm_support_help_icon.replace("$replaceToken$", pm.getParamH("TEXT")))).getAttribute("mattooltip"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Click on Casemanager Icon at down arrow', async function () {
	
	await caseMui.cm_down_arrow.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });


   
   Then('Click on Casemanager Icon up arrow', async function () {
	
	await caseMui.cm_up_arrow.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });


   Then('Verify the Text in the Pop Up', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("MMR_CASEMANAGER",await caseMui.mmr_cm_txt.getText(), pm.getParamV("MMR_CASEMANAGER"));
	// base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
	base.compareValues("SAFEMODE_TOGGLE",await caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
	// base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
	base.compareValues("CHANGE_LOG",await caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
	base.compareValues("LOGOUT",await caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
	base.compareValues("VERSION_NUMBER",await caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
	// base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));

	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   
   Then('Verify the Text in the engagement manager Pop Up', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("MMR_CASEMANAGER",await element(by.xpath(caseMui.mmr_eng_txt.replace("$replaceToken$", pm.getParamV("MMR_CASEMANAGER")))).getText(), pm.getParamV("MMR_CASEMANAGER"));
	// base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
	base.compareValues("SAFEMODE_TOGGLE",await caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
	// base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
	base.compareValues("CHANGE_LOG",await caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
	base.compareValues("LOGOUT",await caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
	base.compareValues("VERSION_NUMBER",await caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
	// base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));

	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   
   
   Then('Verify the Text in the Consultant manager Pop Up', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("MMR_CONSULTANT",await element(by.xpath(caseMui.mmr_eng_txt.replace("$replaceToken$", pm.getParamV("MMR_CONSULTANT")))).getText(), pm.getParamV("MMR_CONSULTANT"));
	// base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
	//base.compareValues("SAFEMODE_TOGGLE",await caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
	// base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
	base.compareValues("CHANGE_LOG",await caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
	base.compareValues("LOGOUT",await caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
	base.compareValues("VERSION_NUMBER",await caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
	// base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));

	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   
   Then('Verify Safe mode not exists in Consultant manager Pop Up', async function (dataTable) {
	var SAFE_MODE_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await caseMui.mmr_cm_safemodeoff_Toggle.isPresent())
	{
		SAFE_MODE_EXIST="YES";
	}
 
	base.compareValues('SAF_MODE_EXIST',  SAFE_MODE_EXIST, pm.getParamV("SAFE_MODE_EXISTS"));
	
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

   });


   Then('Verify the Text in the Program manager Pop Up', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("PROGRAM_MANAGER",await element(by.xpath(caseMui.mmr_eng_txt.replace("$replaceToken$", pm.getParamV("PROGRAM_MANAGER")))).getText(), pm.getParamV("PROGRAM_MANAGER"));
	// base.compareValues("SAFEMODE_OFF",await caseMui.mmr_cm_safemodeoff_silder.getText(), pm.getParamV("SAFEMODE_OFF"));
	base.compareValues("SAFEMODE_TOGGLE",await caseMui.mmr_cm_safemodeoff_Toggle.getAttribute("mattooltip"), pm.getParamV("SAFEMODE_TOGGLE"));
	// base.compareValues("DARKMODE_ON",await caseMui.mmr_cm_darkmodeon_silder.getText(), pm.getParamV("DARKMODE_ON"));
	base.compareValues("CHANGE_LOG",await caseMui.mmr_cm_changlog_txt.getText(), pm.getParamV("CHANGE_LOG"));
	base.compareValues("LOGOUT",await caseMui.mmr_cm_logout_btn.getText(), pm.getParamV("LOGOUT"));
	base.compareValues("VERSION_NUMBER",await caseMui.mmr_cm_version_num.getText(), pm.getParamV("VERSION_NUMBER"));
	// base.compareValues("BUILD_NUMBER",await caseMui.mmr_cm_build_num.getText(), pm.getParamV("BUILD_NUMBER"));

	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   


  Then('Veify Care Extender Button Care Extender Text Exists in Left Navigation', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await caseMui.cm_careextender_icon.isDisplayed(),'Care Extender icon not displayed');
	expect( await (await caseMui.cm_careextender_text.getText()).trim() ,"Text of Care Extender " ).to.equal(pm.getParamH("TEXT"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });


  Then('Click on the Care Extender', async function () {
	await caseMui.cm_careextender_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('Click on Care Extender in the Care Extender List Page', async function (dataTable) {
	pm.dataTableH(dataTable);
		await element(by.xpath(caseMui.ml_first_member.replace("$replaceToken$", pm.getParamH("Name")))).click();
		await browser.getTitle().then(async function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(5000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
  });

  Then('Verify the Care Extender Data Displayed', async function (dataTable) {

	pm.dataTableV(dataTable);
	base.compareValues("FIRST_NAME",await (await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("FIRST_NAME")))).getText()), pm.getParamV("FIRST_NAME"));
	base.compareValues("LAST_NAME",await (await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("LAST_NAME")))).getText()), pm.getParamV("LAST_NAME"));
	base.compareValues("EMAIL",await (await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("EMAIL")))).getText()), pm.getParamV("EMAIL"));
	base.compareValues("MOBILE",await (await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("MOBILE")))).getText()), pm.getParamV("MOBILE"));
	base.compareValues("ADDRESS",await (await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("ADDRESS")))).getText()), pm.getParamV("ADDRESS"));
	base.compareValues("ROLE1",await (await element(by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE1")))).getText()).replace(",",""), pm.getParamV("ROLE1"));
	base.compareValues("ROLE2",await  (await element(by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE2")))).getText()).replace(",",""), pm.getParamV("ROLE2"));
	base.compareValues("ROLE3",await (await element(by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE3")))).getText()).replace(",",""), pm.getParamV("ROLE3"));
	base.compareValues("ROLE4",await (await element(by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE4")))).getText()).replace(",",""), pm.getParamV("ROLE4"));
	base.compareValues("ROLE5",await (await element(by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE5")))).getText()).replace(",",""), pm.getParamV("ROLE5"));
	base.compareValues("ROLE6",await (await element(by.xpath(caseMui.mmr_careext_role.replace("$replaceToken$", pm.getParamV("ROLE6")))).getText()).replace(",",""), pm.getParamV("ROLE6"));

	
	base.compareValues("EMRS",await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("EMRS")))).getText(), pm.getParamV("EMRS"));
	base.compareValues("STATE_LICENSES",await element(by.xpath(caseMui.mmr_careext_data.replace("$replaceToken$", pm.getParamV("STATE_LICENSES")))).getText(), pm.getParamV("STATE_LICENSES"));

	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	
  });


  Then('Veify Analytics Button Analytics Text Exists in Left Navigation', async function (dataTable) {
	
	var ANALYTICS_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await element(by.xpath(caseMui.cm_analytics_icon_str.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent())
	{
		ANALYTICS_ICON_EXIST="YES";
	}
	  
	base.compareValues('ANALYTICS_ICON_EXIST',  ANALYTICS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   Then('Click on the Analytics', async function () {
	await caseMui.cm_analytics_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });

   Then('Verify the Analytics page Opened.', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_analytics_header_text)).getText()),"Heading of Analytics page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Verify the Analytics Text in the Header', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_analytics_header_text)).getText()),"Heading of Analytics page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   
  Then('Veify Programs Button Programs Text Exists in Left Navigation', async function (dataTable) {
	
	var PROGRAMS_ICON_EXIST="NO";
	pm.dataTableV(dataTable);
	if(await element(by.xpath(caseMui.cm_programs_icon_str.replace("$replaceToken$", pm.getParamV("ICON")))).isPresent())
	{
		PROGRAMS_ICON_EXIST="YES";
	}
	  
	base.compareValues('PROGRAMS_ICON_EXIST',  PROGRAMS_ICON_EXIST, pm.getParamV("ICON_EXISTS"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });

   Then('Click on the Programs', async function () {
	await caseMui.cm_programs_text.click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(6000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
   });

   Then('Verify the Programs page Opened.', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_programs_header_text)).getText()),"Heading of Programs page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });


   Then('Verify the Programs Text in the Header', async function (dataTable) {
	pm.dataTableH(dataTable);
	expect(await (await element(by.xpath(caseMui.cm_programs_header_text)).getText()),"Heading of Programs page" ).to.equal(pm.getParamH("HEADER_NAME"));
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
   });




