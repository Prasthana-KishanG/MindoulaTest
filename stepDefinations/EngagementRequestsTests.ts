"use strict";

import { Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { Base } from "../Util/Base";
import { membersConsults } from "../pageObjects/membersConsults";
import { MMRController } from "../Util/MMRController";
import { membersCaseNotes } from "../pageObjects/membersCaseNotes";
import { E2EMember } from "../pageObjects/E2EMember";
import { EngagementRequests } from "../pageObjects/EngagementRequests";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";
import { MMRLoginPage } from "../pageObjects/MMRLoginPage";

let consults = new membersConsults();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let casenotes = new membersCaseNotes();
let pm = new ParamManager();
let E2EMem = new E2EMember();
let EngReq = new EngagementRequests();
const moment = require("moment");
let login = new MMRLoginPage();
let path = require("path");


Then("Login to the website with Member", async function(dataTable) {
	pm.dataTableH(dataTable);
	await login.usernameEditbox.sendKeys(pm.getParamH("username"));
	await login.passwordEditbox.sendKeys(pm.getParamH("password"));
	await login.loginBtn.click();
	browser.sleep(4000);
	base.UrlContains("member");
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

  Then("Login to the website for scheduling call in primary case manager.", async function() {
	//pm.dataTableH(dataTable);
	//await login.usernameEditbox.sendKeys(pm.getParamH("username"));
	//await login.passwordEditbox.sendKeys(pm.getParamH("password"));
	await login.usernameEditbox.sendKeys(browser.params.mmrlogin2.email);
	await login.passwordEditbox.sendKeys(browser.params.mmrlogin2.pwd);
	await login.loginBtn.click();
	browser.sleep(8000);
	base.UrlContains("member");
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });


  Then('Login to the website with Case Manager', async function () {
	//pm.dataTableH(dataTable);
	// await login.usernameEditbox.sendKeys(pm.getParamH("username"));
	// await login.passwordEditbox.sendKeys(pm.getParamH("password"));
	await login.usernameEditbox.sendKeys(browser.params.mmrloginCaseM.email);
	await login.passwordEditbox.sendKeys(browser.params.mmrloginCaseM.pwd);
	await login.loginBtn.click();
	browser.sleep(6000);
	base.UrlContains("member");
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
  });

Then('Take Action From Member Home Page', async function (dataTable) {
	
	pm.dataTableH(dataTable);

	if (pm.getParamH("Button_Container") == ("Check In")) {
		base.WaitforElementClickable(EngReq.eng_checkin_btn);
		await EngReq.eng_checkin_btn.click();
		browser.sleep(15000);
		}

		if (pm.getParamH("Button_Container") == ("Chat")) {
			base.WaitforElementClickable(EngReq.eng_chatmem_btn);
			await EngReq.eng_chatmem_btn.click();
			browser.sleep(8000);
			}

			if (pm.getParamH("Button_Container") == ("Schedule Call")) {
				base.WaitforElementClickable(EngReq.eng_chatmem_btn);
				await EngReq.eng_schcallmem_btn.click();
				browser.sleep(8000);
				}
	
	  await browser.getTitle().then( function(text) {
		expect(text).to.equal("mMR");
		
		});
		const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
  });

  Then('Click on the Care_Extender_name in the Chat Inbox', async function (dataTable) {
	pm.dataTableH(dataTable);
	var eng_careextender_sel = EngReq.eng_careextender_sel_str.replace("$replaceToken$",pm.getParamH("Care_Extender_Name"));
	await element(by.xpath(eng_careextender_sel)).click();
	await browser.getTitle().then(function(text) {
		expect(text).to.equal("mMR");
		browser.sleep(5000);
	  });
	  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('Verify Checkin is Opened in Primary Case manager Chat window', async function (dataTable) {
	pm.dataTableH(dataTable);
	//var eng_chat_wintext = EngReq.eng_chat_wintext_str.replace("$replaceToken$",pm.getParamH("Primary_Case_Manager"));
	//base.WaitforElementPresence(element(by.xpath(eng_chat_wintext)));
	//console.log('Text1111...>',await element(by.xpath(eng_chat_wintext)).getText());
	base.compareValues("Primary_Case_Manager", await element(by.xpath(EngReq.eng_chat_wintext_str.replace("$replaceToken$", pm.getParamH("Primary_Case_Manager")))).getText(), pm.getParamH("Primary_Case_Manager"));
		
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });

  Then('Select Checkin window.', async function () {
	 if (!EngReq.eng_dialog__header.Displayed) {
		base.WaitforElementClickable(EngReq.eng_checkin_header_btn);
		//browser.sleep(5000);
		await EngReq.eng_checkin_header_btn.click();
		
		//base.WaitforElementClickable(element(by.xpath(EngReq.eng_checkin_options_str)));
		//browser.sleep(10000);
		const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	  }
  });



  Then('Select Checkin Options by click on it.', async function (dataTable) {
	pm.dataTableH(dataTable);
	var eng_checkin_options = EngReq.eng_checkin_options_str.replace("$replaceToken$",pm.getParamH("Checkin Option"));
	//base.WaitforElementPresence(element(by.xpath(eng_checkin_options)));
	//browser.actions().mouseMove(await element(by.xpath(eng_checkin_options))).perform();
	base.WaitforElementClickable(element(by.xpath(eng_checkin_options)));
	await element(by.xpath(eng_checkin_options)).click();
	//base.WaitforElementClickable(EngReq.eng_checkin_answers1);
	browser.sleep(1000);
	const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
  });

  Then('Click on Checkin message', async function () {
	//pm.dataTableV(dataTable);
	await EngReq.eng_checkin_answers1.click();
	browser.sleep(180000);
	base.WaitforElementfortwominuts(EngReq.eng_mindy_reply_msg)
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });

   Then('Verify the Sent text in the chat window', async function (dataTable) {
	pm.dataTableV(dataTable);
	base.compareValues("CheckIn Message1", await element(by.xpath(EngReq.eng_checkin_answers.replace("$replaceToken$", pm.getParamV("CheckIn Message1")))).getText(), pm.getParamV("CheckIn Message1"));
	base.compareValues("CheckIn Message2", await element(by.xpath(EngReq.eng_checkin_answers.replace("$replaceToken$", pm.getParamV("CheckIn Message2")))).getText(), pm.getParamV("CheckIn Message2"));
	base.compareValues("CheckIn Message3", await element(by.xpath(EngReq.eng_checkin_answers.replace("$replaceToken$", pm.getParamV("CheckIn Message3")))).getText(), pm.getParamV("CheckIn Message3"));
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;

  });

  Then('Wait for 2 minutes', async function () {
	//pm.dataTableV(dataTable);
	//browser.sleep(5000);
	//await EngReq.eng_checkin_answers1.click();

	browser.sleep(180000);
	base.WaitforElementfortwominuts(EngReq.eng_mindy_reply_msg)
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
  });

  Then('Verify Auto Reply message recieved', async function (dataTable) {
	pm.dataTableH(dataTable);
	let last = element.all(by.xpath(EngReq.eng_mindy_msg.replace("$replaceToken$", pm.getParamH("Auto_Reply_message")))).last();
	const text = await last.getText();
	//console.log('text...>',text);
    expect(text,'Auto_Reply_message').to.equal(pm.getParamH("Auto_Reply_message"));
		// base.compareValues("Auto_Reply_message", text, pm.getParamH("Auto_Reply_message"));
		// const val = base.getValue();
		// expect(val ? JSON.stringify(val) : null).to.equal(null);
		// const screenshot = await browser.takeScreenshot();
		// this.attach(screenshot, "image/png");
		// return true;
		const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	  });

	  Then('Click on mindy Help icon in the auto reply message recieved.', async function () {
		let last = element.all(by.xpath(EngReq.eng_mindy_help)).last();
	    // const text = await last.getText();
	    // console.log('mindy Help icon text...>',text);
		await last.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(4000);
		  });
		  const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	  });

	  Then('Verify Mindy help Message Text', async function (dataTable) {
		element.all(by.xpath(EngReq.eng_mindy_help_msg)).each(async (eles, i) => {
          const text = await eles.getText();
		  //console.log("text help...>", text.substring(10),i);
		  pm.dataTableH(dataTable);
		expect( text.substring(10),'Mindy_Help_Message').to.equal(pm.getParamH("Help_Message"));
		})
		const screenshot = await browser.takeScreenshot();
	  this.attach(screenshot, "image/png");
	  });

	  Then('Close Help window', async function () {
		await EngReq.eng_mindy_help_close.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			//browser.sleep(4000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	  });

	  Then('Click on Schedule Call icon in chat window', async function () {
		// if (!EngReq.eng___chat_header.Displayed) {
		// 	base.WaitforElementClickable(element(by.xpath("//div[contains(@class,'checkout member-header-btn')]")));
		// 	//browser.sleep(5000);
		// 	await element(by.xpath("//div[contains(@class,'checkout member-header-btn')]")).click();
		// 	browser.sleep(2000);
		// }

		// 	if (EngReq.eng_dialog__header.Displayed) {
		// 		base.WaitforElementClickable(element(by.xpath("//mmr-icons[contains(@mattooltip,'Close')]")));
		// 		//browser.sleep(5000);
		// 		await element(by.xpath("//mmr-icons[contains(@mattooltip,'Close')]")).click();
		// 		browser.sleep(2000);
		// 	}
			
		// 	await element(by.xpath("//div[contains(@class,'checkout member-header-btn')]")).click();
		// 	await element(by.xpath("//mmr-icons[contains(@mattooltip,'Close')]")).click();
		await EngReq.eng_schedulecall_icon.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(5000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	  });

	  Then('click on Select Available time in the Pop Up window', async function (dataTable) {
		pm.dataTableH(dataTable);
		base.setDropdownField(EngReq.eng_availtime_txt, EngReq.eng_availtime_dropdown,pm.getParamH("SCHEDULED_TIME"));
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			//browser.sleep(4000);
		  });
		const screenshot = await browser.takeScreenshot();
	    this.attach(screenshot, "image/png");
	  });

	  Then('click on Schedule Call', async function () {
		await EngReq.eng_schedulecall_btn.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(2000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	  });

	  Then('Verify the text Confirmation Dialouge window', async function (dataTable) {
		await element.all(by.xpath(EngReq.eng_schedulecallConfirm_txt)).each(async (eles, i) => {
			const text = await eles.getText();
			//const Actual = text.replace('\n', ' ');
			console.log("text Confirmation dialog...>", text,i);
			pm.dataTableH(dataTable);
		  expect( text.replace(/\n/g, ' '),'SCHEDULED_CALL_CONFIRMATION_TEXT').to.equal(pm.getParamH("SCHEDULED_CALL_CONFIRMATION_TEXT"));
		  })
		  const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
	  });

	  
	  Then('Close the Confirmation Dialogue', async function () {
		await EngReq.eng_confirmdialog_close_btn.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(2000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	  });

	  Then('Verify the Confirmation Dialouge window closed or not', async function (dataTable) {
		var CONFIRMATION_DIALOG_EXISTS="NO";
	pm.dataTableV(dataTable);
	if(await EngReq.eng_confirmdialog_header.isPresent())
	{
		CONFIRMATION_DIALOG_EXISTS="YES";
	}
	  
	base.compareValues('CONFIRMATION_DIALOG',  CONFIRMATION_DIALOG_EXISTS, pm.getParamV("CONFIRMATION_DIALOG"));
	
	const val = base.getValue();
	expect(val ? JSON.stringify(val) : null).to.equal(null);
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	return true;
	  });

	  Then('Close the Confirmation Dialogue from schedule call header', async function () {
		if(await EngReq.eng_confirmdialog_header.isDisplayed())
		{
			await EngReq.eng_schedulecall_icon.click();	
		}
		
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			browser.sleep(4000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	  });

	  Then('Close the Chat inbox', async function () {
		await EngReq.eng_chatwin_close_btn.click();
		await browser.getTitle().then(function(text) {
			expect(text).to.equal("mMR");
			//browser.sleep(2000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	  });

	  Then('Enter Message in Chat Text Box', async function (dataTable) {
		pm.dataTableH(dataTable);
		await EngReq.eng_chat_txtarea.sendKeys(pm.getParamH("message"));
		const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
	  });

	  
		Then('click on Send Icon in messenger', async function () {
			await EngReq.eng_chat_sendbtn.click();
			await browser.getTitle().then(function(text) {
				expect(text).to.equal("mMR");
				browser.sleep(2000);
			  });
			  const screenshot = await browser.takeScreenshot();
			  this.attach(screenshot, "image/png");
		});

		Then('Verify the text message is sent to the Care_Extender_Name Successfully', async function (dataTable) {
			let last = element.all(by.xpath(EngReq.chat_sentmsg)).last();
	        const text = await last.getText();
			 pm.dataTableH(dataTable);
			 base.compareValues("CheckIn Message1", text, pm.getParamH("message"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;

		});
  
		Then('Wait for 2 minutes in chat room for Auto Reply Message', async function () {
		    await EngReq.chat_sentmsg1.click();
	        browser.sleep(180000);
			base.WaitforElementfortwominuts(EngReq.eng_mindy_reply_msg)
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		});

   
		Then('Verify the AutoReply message recieved.', async function (dataTable) {
			pm.dataTableH(dataTable);
			let last = element.all(by.xpath(EngReq.eng_mindy_msg.replace("$replaceToken$", pm.getParamH("Auto_Reply_message")))).last();
			const text = await last.getText();
			//console.log('text...>',text);
			expect(text,'Auto_Reply_message').to.equal(pm.getParamH("Auto_Reply_message"));
				// base.compareValues("Auto_Reply_message", text, pm.getParamH("Auto_Reply_message"));
				// const val = base.getValue();
				// expect(val ? JSON.stringify(val) : null).to.equal(null);
				// const screenshot = await browser.takeScreenshot();
				// this.attach(screenshot, "image/png");
				// return true;
				const screenshot = await browser.takeScreenshot();
			  this.attach(screenshot, "image/png");
		});

		
		Then('Logout from Website', async function () {
			await EngReq.UserBtn.click();
            browser.sleep(2000);
            await EngReq.LogoutBtn.click();
			browser.sleep(5000);
			await browser.getTitle().then(function(text) {
				expect(text).to.equal("mMR");
				//browser.sleep(2000);
			  });
			base.WaitforElementPresence(login.usernameEditbox);
			//base.UrlContains("login");
		  });


		  
 
 
		  Then('Click on Engagement Requests Icon on the Casemanager Home Page', async function () {
			await EngReq.engagement_icon.click();
			browser.sleep(14000);
			await browser.getTitle().then(function(text) {
				expect(text).to.equal("mMR");
			  });
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
 
		  Then('Click on accept', async function (dataTable) {
			pm.dataTableH(dataTable);
			var ChatAutoreplyAccept_btn = EngReq.ChatAutoreplyAccept.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status").substring(0,8)).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(ChatAutoreplyAccept_btn)).click();
	        browser.sleep(9000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;

		  });

 
		  Then('Verify Status,Action for Mark As Addressed', async function (dataTable) {
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name1,type1,AssignedTo1,Cstatus3,Cstatus4,Cstatus;
				
				try {
					 name1=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name1...>',name1, pm.getParamH("Name"));
					 type1=await element(by.xpath(EngReq.type.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type1...>',type1,pm.getParamH("Request_type"));
					 AssignedTo1=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 Cstatus3 =await element(by.xpath(EngReq.status1.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(0,8)))).getText();
					 Cstatus4 =await element(by.xpath(EngReq.statusConfirm.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(10)))).getText();
					  Cstatus= Cstatus3+"  "+Cstatus4; 
					 console.log('AssignedTo1...>',AssignedTo1,pm.getParamH("Assigned_to"));
					console.log('Cstatus...>',Cstatus,pm.getParamH("Status"));
					
				} catch (error) {
				
					//  console.log('errorrr --> ', error);
					console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("no match").to.equal(null);
					} else {
						continue;
					}
					
				}

			if(name1==pm.getParamH("Name") &&	type1==pm.getParamH("Request_type") && Cstatus==pm.getParamH("Status") && AssignedTo1==pm.getParamH("Assigned_to"))
				{	
					
			var ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
						 
			base.compareValues("Status", Cstatus, pm.getParamH("Status"));
			base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
				}	
			}
		  });

		  Then('Click on Mark As Addressed', async function (dataTable) {
			pm.dataTableH(dataTable);
			var ChatAutoreplyMarkAsAddressed_btn = EngReq.ChatAutoreplyMarkAsAddressed.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status").substring(0,8)).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(ChatAutoreplyMarkAsAddressed_btn)).click();
	        browser.sleep(8000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
  
		  Then('Verify Status,Action for Add Case Note', async function (dataTable) {
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name,type,AssignedTo,status;
				console.log('i value...>',i)
				try {
					 name=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name...>',name, pm.getParamH("Name"));
					 type=await element(by.xpath(EngReq.type.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type...>',type,pm.getParamH("Request_type"));
					 AssignedTo=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 console.log('AssignedTo...>',AssignedTo,pm.getParamH("Assigned_to"));
					  status = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();
					console.log('status...>',status,pm.getParamH("Status"));
					
				} catch (error) {
				
					//  console.log('errorrr --> ', error);
					//console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("no match").to.equal(null);
					} else {
						continue;
					}
					
				}

			if(name==pm.getParamH("Name") &&	type==pm.getParamH("Request_type") && status==pm.getParamH("Status") && AssignedTo==pm.getParamH("Assigned_to"))
				{	
			//var status = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();		
			var ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
						 
			base.compareValues("Status", status, pm.getParamH("Status"));
			base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
				}	
			}
	
			
		  });
		  
		  Then('Click on  Add Case Note', async function (dataTable) {
			pm.dataTableH(dataTable);
			var ChatAutoreplyAddCaseNotes_btn = EngReq.ChatAutoreplyAddCaseNotes.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status")).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(ChatAutoreplyAddCaseNotes_btn)).click();
	        browser.sleep(10000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });

		  Then('Click on  Edit Case Note', async function (dataTable) {
			pm.dataTableH(dataTable);
			var ChatAutoreplyEditCaseNotes_btn = EngReq.ChatAutoreplyEditCaseNotes.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status")).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(ChatAutoreplyEditCaseNotes_btn)).click();
	        browser.sleep(2000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
 
		  Then('Click on Close', async function (dataTable) {
			
			pm.dataTableH(dataTable);
			var ChatAutoreplyClose_btn = EngReq.ChatAutoreplyClose.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status")).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(ChatAutoreplyClose_btn)).click();
	        browser.sleep(4000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
 
		  Then('Verify record exist in Open Engagement Requests Page', async function (dataTable) {
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name,type,AssignedTo,status1,ActionStatus1;
				console.log('i value...>',i)
				try {
					 name=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name...>',name, pm.getParamH("Name"));
					 type=await element(by.xpath(EngReq.type.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type...>',type,pm.getParamH("Request_type"));
					 AssignedTo=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 console.log('AssignedTo...>',AssignedTo,pm.getParamH("Assigned_to"));
					 status1 = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();
					console.log('status...>',status1,pm.getParamH("Status"));
					 ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
				
					} catch (error) {
					//  console.log('errorrr --> ', error);
					console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("Does Not Exist").to.equal(pm.getParamH("Row_Exist"));
					} else {
						continue;
					}
				}

			if(name==pm.getParamH("Name") && type==pm.getParamH("Request_type") && status1==pm.getParamH("Status") && AssignedTo==pm.getParamH("Assigned_to") && ActionStatus1==pm.getParamH("Action_Status"))
				{	
					expect("Exist",'Row Exist').to.equal(pm.getParamH("Row_Exist"));
				 }	
			}
		  });

		  Then('Click on Chat Auto Reply Care Extender', async function (dataTable) {
			pm.dataTableH(dataTable);
			var ChatAutoreplyCareExtender_button = EngReq.ChatAutoreplyCareExtender.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status").substring(0,8)).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,6)).replace("$Assigned_to$",pm.getParamH("Assigned_to"));
			browser.sleep(3000);
			await element(by.xpath(ChatAutoreplyCareExtender_button)).click();
	        browser.sleep(5000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;

		  });
 
	 
		  Then('Select Chat Auto Reply Care Extender', async function (dataTable) {
			pm.dataTableH(dataTable);
			var CareExtenderAssignto = EngReq.CareExtenderAssignto_txt.replace("$Assigned_to$",pm.getParamH("Assign_to_Care_Extender"));
			await EngReq.CareExtenderSelectbox.click();
			await EngReq.CareExtenderSearch.sendKeys(pm.getParamH("Assign_to_Care_Extender").substring(0,3));
            //base.WaitforElementPresence(element(by.xpath(CareExtenderAssignto)));
			browser.sleep(5000);
			await element(by.xpath(CareExtenderAssignto)).click();
			browser.sleep(5000);
	        //browser.sleep(2000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
 
	
		  	
		  Then('Verify the Chat Auto Reply Action as Mark As Addressed', async function (dataTable) {
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name1,type1,AssignedTo1,Cstatus3,Cstatus4,Cstatus;
				
				try {
					 name1=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name1...>',name1, pm.getParamH("Name"));
					 type1=await element(by.xpath(EngReq.type.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type1...>',type1,pm.getParamH("Request_type"));
					 AssignedTo1=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 Cstatus3 =await element(by.xpath(EngReq.status1.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(0,8)))).getText();
					 Cstatus4 =await element(by.xpath(EngReq.statusConfirm.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(10)))).getText();
					  Cstatus= Cstatus3+"  "+Cstatus4; 
					 console.log('AssignedTo1...>',AssignedTo1,pm.getParamH("Assigned_to"));
					console.log('Cstatus...>',Cstatus,pm.getParamH("Status"));
					
				} catch (error) {
				
					//  console.log('errorrr --> ', error);
					console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("no match").to.equal(null);
					} else {
						continue;
					}
					
				}

			if(name1==pm.getParamH("Name") &&	type1==pm.getParamH("Request_type") && Cstatus==pm.getParamH("Status") && AssignedTo1==pm.getParamH("Assigned_to"))
				{	
					
			var ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
						 
			//base.compareValues("Status", Cstatus, pm.getParamH("Status"));
			base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
				}	
			}
		  });

		  Then('Click on Schedule Call Care Extender', async function (dataTable) {
			pm.dataTableH(dataTable);
			var SchedulecallCareExtender_btn = EngReq.SchedulecallCareExtender.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status").substring(0,8)).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,6)).replace("$Assigned_to$",pm.getParamH("Assigned_to"));
			browser.sleep(3000);
			await element(by.xpath(SchedulecallCareExtender_btn)).click();
	        browser.sleep(6000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
  
		  Then('Select Schedule Call Care Extender', async function (dataTable) {
			pm.dataTableH(dataTable);
			var CareExtenderAssignto = EngReq.CareExtenderAssignto_txt.replace("$Assigned_to$",pm.getParamH("Assign_to_Care_Extender"));
			await EngReq.CareExtenderSelectbox.click();
			browser.sleep(5000);
			await EngReq.CareExtenderSearch.clear();
			browser.sleep(5000);
			await EngReq.CareExtenderSearch.sendKeys(pm.getParamH("Assign_to_Care_Extender").substring(0,3));
			browser.sleep(5000);
			await EngReq.CareExtenderSelectbox.click();
			browser.sleep(5000);
			await EngReq.CareExtenderSearch.clear();
			browser.sleep(5000);
			await EngReq.CareExtenderSearch.sendKeys(pm.getParamH("Assign_to_Care_Extender").substring(0,3));
			//browser.sleep(5000);
			//await EngReq.CareExtenderSearch.sendKeys(protractor.Key.TAB);
            //base.WaitforElementPresence(element(by.xpath(CareExtenderAssignto)));
			browser.sleep(6000);
			await element(by.xpath(CareExtenderAssignto)).click();
	        browser.sleep(5000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
  
		  Then('Verify the Schedule Call Action as Mark As Addressed', async function (dataTable) {
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name1,type1,AssignedTo1,Cstatus3,Cstatus4,Cstatus;
				
				try {
					 name1=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name1...>',name1, pm.getParamH("Name"));
					 type1=await element(by.xpath(EngReq.type_scheduleCall.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type1...>',type1,pm.getParamH("Request_type"));
					 AssignedTo1=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 Cstatus3 =await element(by.xpath(EngReq.status1.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(0,8)))).getText();
					 Cstatus4 =await element(by.xpath(EngReq.statusConfirm.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(10)))).getText();
					  Cstatus= Cstatus3+"  "+Cstatus4; 
					 console.log('AssignedTo1...>',AssignedTo1,pm.getParamH("Assigned_to"));
					console.log('Cstatus...>',Cstatus,pm.getParamH("Status"));
					
				} catch (error) {
				
					//  console.log('errorrr --> ', error);
					console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("no match").to.equal(null);
					} else {
						continue;
					}
					
				}

			if(name1==pm.getParamH("Name") &&	type1==pm.getParamH("Request_type") && Cstatus==pm.getParamH("Status") && AssignedTo1==pm.getParamH("Assigned_to"))
				{	
					
			var ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
						 
			//base.compareValues("Status", Cstatus, pm.getParamH("Status"));
			base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
				}	
			}
		  });

		  Then('Click on accept for the Scheduled Call Request', async function (dataTable) {
			
			pm.dataTableH(dataTable);
			var SchedulecallAccept_btn = EngReq.SchedulecallAccept.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status").substring(0,8)).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(SchedulecallAccept_btn)).click();
	        browser.sleep(6000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
  
		  Then('Verify Status,Action for Scheduled call Mark As Addressed', async function (dataTable) {
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name1,type1,AssignedTo1,Cstatus3,Cstatus4,Cstatus;
				
				try {
					 name1=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name1...>',name1, pm.getParamH("Name"));
					 type1=await element(by.xpath(EngReq.type_scheduleCall.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type1...>',type1,pm.getParamH("Request_type"));
					 AssignedTo1=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 Cstatus3 =await element(by.xpath(EngReq.status1.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(0,8)))).getText();
					 Cstatus4 =await element(by.xpath(EngReq.statusConfirm.replace("$i$",i.toString()).replace("$Status$",pm.getParamH("Status").substring(10)))).getText();
					  Cstatus= Cstatus3+"  "+Cstatus4; 
					 console.log('AssignedTo1...>',AssignedTo1,pm.getParamH("Assigned_to"));
					console.log('Cstatus...>',Cstatus,pm.getParamH("Status"));
					
				} catch (error) {
				
					//  console.log('errorrr --> ', error);
					console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("no match").to.equal(null);
					} else {
						continue;
					}
					
				}

			if(name1==pm.getParamH("Name") &&	type1==pm.getParamH("Request_type") && Cstatus==pm.getParamH("Status") && AssignedTo1==pm.getParamH("Assigned_to"))
				{	
					
			var ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
						 
			base.compareValues("Status", Cstatus, pm.getParamH("Status"));
			base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
				}	
			}

		  });

		  Then('Click on Scheduled Call Mark As Addressed', async function (dataTable) {
			pm.dataTableH(dataTable);
			var SchedulecallMarkAsAddressed_btn = EngReq.SchedulecallMarkAsAddressed.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status").substring(0,8)).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(SchedulecallMarkAsAddressed_btn)).click();
	        browser.sleep(8000);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
		  });
 
	 
		  Then('Verify Status, Action for Scheduled call Add Case Notes', async function (dataTable) {
			
			pm.dataTableH(dataTable);
			var header:string="//span[@id='support_requests_header_title']";
			var value= await element(by.xpath(header)).getText();
			var Number1=value.match(/\d/g).toString();
			let Num = parseInt(Number1);
			console.log('N value...>',Num);
						var index = 1;
			for( var i=1;i<=Num;i++) {
				index = i;
				var name,type,AssignedTo,status;
				console.log('i value...>',i)
				try {
					 name=await element(by.xpath(EngReq.name.replace("$i$",i.toString()).replace("$Name$",pm.getParamH("Name")))).getText();
					console.log('name...>',name, pm.getParamH("Name"));
					 type=await element(by.xpath(EngReq.type_scheduleCall.replace("$i$",i.toString()).replace("$Request_type$",pm.getParamH("Request_type")))).getText();
					console.log('type...>',type,pm.getParamH("Request_type"));
					 AssignedTo=await element(by.xpath(EngReq.AssignedTo.replace("$i$",i.toString()).replace("$Assigned_to$",pm.getParamH("Assigned_to")))).getText();
					 console.log('AssignedTo...>',AssignedTo,pm.getParamH("Assigned_to"));
					  status = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();
					console.log('status...>',status,pm.getParamH("Status"));
					
				} catch (error) {
				
					//  console.log('errorrr --> ', error);
					//console.log('Indexxxxxxx -> ', Num, index);
					if(index == Num) {
						expect("no match").to.equal(null);
					} else {
						continue;
					}
					
				}

			if(name==pm.getParamH("Name") &&	type==pm.getParamH("Request_type") && status==pm.getParamH("Status") && AssignedTo==pm.getParamH("Assigned_to"))
				{	
			//var status = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();		
			var ActionStatus1 = await element(by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
						 
			base.compareValues("Status", status, pm.getParamH("Status"));
			base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
			const val = base.getValue();
			expect(val ? JSON.stringify(val) : null).to.equal(null);
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;
				}	
			}
		  });

		  Then('Click on Drop down button on Add Case Note', async function (dataTable) {
			pm.dataTableH(dataTable);
			var SchedulecallAddCaseNoteDropdown_btn = EngReq.SchedulecallAddCaseNoteDropdown.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status")).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			await element(by.xpath(SchedulecallAddCaseNoteDropdown_btn)).click();
			browser.sleep(5000);
			await browser.getTitle().then(function(text) {
				expect(text).to.equal("mMR");
				//browser.sleep(3000);
			  });
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;

		  });

		  Then('Select Close Without Case Notes', async function (dataTable) {
			pm.dataTableH(dataTable);
			await element(by.xpath(EngReq.SchedulecallCloseWithoutCaseNote)).click();
			browser.sleep(5000);
			var SchedulecallAddCaseNoteDropdown_btn = EngReq.SchedulecallAddCaseNoteDropdown.replace("$Request_type$",pm.getParamH("Request_type")).replace("$Name$",pm.getParamH("Name")).replace("$Status1$",pm.getParamH("Status")).replace("$Status2$",pm.getParamH("Status").substring(10)).replace("$Assigned_to$",pm.getParamH("Assigned_to").substring(0,5)).replace("$Action_Status$",pm.getParamH("Action_Status"));
			if(await element(by.xpath(SchedulecallAddCaseNoteDropdown_btn)).isPresent()){
				await element(by.xpath(SchedulecallAddCaseNoteDropdown_btn)).click();
				browser.sleep(5000);
				await element(by.xpath(EngReq.SchedulecallCloseWithoutCaseNote)).click();
			}
			
			browser.sleep(5000);
			await browser.getTitle().then(function(text) {
				expect(text).to.equal("mMR");
				//browser.sleep(3000);
			  });
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot, "image/png");
			return true;

	 });

	 Then('Search for Member in the Member Search', async function (dataTable) {
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
					browser.sleep(3000);
				  });
				  const screenshot = await browser.takeScreenshot();
				  this.attach(screenshot, "image/png");
		
	  });

	  Then('click on member in the list', async function (dataTable) {
		pm.dataTableH(dataTable);
		await element(by.xpath(E2EMem.ml_select_member.replace("$replaceToken$", pm.getParamH("Name")))).click();
		browser.sleep(3000);
		await browser.getTitle().then(async function(text) {
			expect(text).to.equal("mMR");
			//browser.sleep(5000);
		  });
		  const screenshot = await browser.takeScreenshot();
		  this.attach(screenshot, "image/png");
	
	  });

	  
	  Then('Click on the Chat Icon in the Quick Actions', async function () {
		//base.WaitforElementClickable(tags.m_tag_add);
	await EngReq.eng_chat_icon.click();
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  browser.sleep(3000);
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	  });


	  Then('Send Text Message to the Member', async function (dataTable) {
		pm.dataTableH(dataTable);
		// await EngReq.eng_chat_txtarea.sendKeys(pm.getParamH("Text"));
		// await EngReq.eng_chat_sendbtn.click();
		const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
	  });

	  Then('Click on + icon at the Chat text box', async function () {
		//await EngReq.eng_upload_icon.click();
		browser.sleep(6000);
	await browser.getTitle().then(function(text) {
	  expect(text).to.equal("mMR");
	  
	});
	const screenshot = await browser.takeScreenshot();
	this.attach(screenshot, "image/png");
	  });

	  Then('Send file and click on send and verify the upload', async function (dataTable) {
		pm.dataTableH(dataTable);
		let filePath = pm.getParamH("file_path");
        let fpath = path.resolve(__dirname,filePath);
        //browser.ignoreSynchronization = true;
        browser.sleep(1000);
		var fileElem = element(by.css('input[type="file"]'));
	    fileElem.sendKeys(fpath);
		browser.sleep(4000);
		await browser.sleep(4000);
		//await closePopup();
	  });

	 


