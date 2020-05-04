"use strict";

import { Then } from "cucumber";
import { browser, element, by } from "protractor";
import { Base } from "../Util/Base";
import { Memberspage } from "../pageObjects/Memberspage";
import { MMRController } from "../Util/MMRController";
import { MMRLoginPage } from "../pageObjects/MMRLoginPage";
import chai from "chai";
import { ParamManager } from "../Util/ParamManager";

let pm = new ParamManager();
let mpage = new Memberspage();
let base = new Base();
var expect = chai.expect;
let mmrc = new MMRController();
let login = new MMRLoginPage();

Then("open left navigation menu", async function() {
  //browser.sleep(5000);
  //if (!element(by.tagName("mat-sidenav")).isDisplayed) {
    await mpage.menuIcon.click();
    //browser.sleep(3000);
  //}
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("open left navigation from menu", async function() {
  //browser.sleep(5000);
  if (!element(by.tagName("mat-sidenav")).isDisplayed) {
    await mpage.menuIcon.click();
    browser.sleep(3000);
  }
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("opens left navigation menu", async function() {
  //browser.sleep(5000);
  if (!element(by.tagName("mat-sidenav")).isDisplayed) {
    await mpage.menuIcon.click();
    browser.sleep(4000);
  }
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("user clicks on Members", async function() {
  await mpage.menuItemXpath.click();
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("close left navigation menu", async function() {
  if (mpage.sideNavigation.isDisplayed) {
    await mpage.menuIcon.click();
    browser.sleep(3000);
  }
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("click on a Member in the list", async function(dataTable) {
  var a = dataTable.hashes();
  //await mpage.ml_search.sendKeys(a[0].name);
  //await mpage.ml_search.sendKeys(browser.params.mmrlogin.setCurrentUser);
  await mpage.ml_search.sendKeys(mmrc.getCurrentUser());
  browser.sleep(2000);
  //console.log('getCurrentUser--->',mmrc.getCurrentUser())
  var str = "//td[contains(@id,'memberlist_table_row_name_')]//div//a[text()='$name$']";
  var ml_memberName = str.replace("$name$", mmrc.getCurrentUser());
  base.WaitforElementPresence(element(by.xpath(ml_memberName)));
  await element(by.xpath(ml_memberName)).click();
  base.UrlContains("details");
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(4000);
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});



Then('save member details', async function (dataTable) {
  pm.dataTableV(dataTable);
  if(pm.getParamV("INPUT")==("MEMBER1")){
    var email1=await mpage.email_header.getText();
    //console.log('email1...>',email1)
    mmrc.setMember1Email(email1);
    //console.log('email1...>',email1)
  }
  if(pm.getParamV("INPUT")==("MEMBER2")){
    var email1=await mpage.email_header.getText();
    //console.log('email1...>',email1)
    mmrc.setMember2Email(email1);
    //console.log('email1...>',email1)
  }

});



Then('Reset Password', async function () {
 
  
  base.client.connect();
  var email = mmrc.getMember1Email();
  console.log('email...>',email)
  let query=`select confirmation_token  from users where email='${email}'`;
  console.log('query...>',query);

  var rs = await base.client.query(query);
  //var rs = await base.client.query(`select confirmation_token from users where email= ${email}`);
  //var rs = await base.client.query("select confirmation_token from" + users +" where email="+email );
  console.log("rs...>", rs.rows);
  var Tokenid = rs.rows[0]["confirmation_token"];
  console.log("Tokenid...>", Tokenid);
  var oldurl="http://mmr-staging.mindoula.com/user-confirmation?confirmation_token=$token$";
  var newUrl=oldurl.replace('$token$',Tokenid);
  console.log("newUrl...>", newUrl);
  await browser.get(newUrl);
  browser.sleep(2000);
  await browser.getTitle().then(async function(text) {
    expect(text).to.equal("mMR");
    browser.sleep(2000);
  });
 
    mmrc.setCurrentPassword("Test@123");
    await mpage.resetPwd.sendKeys("Test@123");
    await mpage.confirmResetPwd.sendKeys("Test@123");
    await mpage.resetBtn.click();
    
    browser.sleep(2000);
    await browser.getTitle().then(async function(text) {
      expect(text).to.equal("mMR");
      browser.sleep(2000);
  //mmr.memb361@mind.com

});
});

// Then('Reset Password', async function () {
 
  
//   base.client.connect();
//   var email = mmrc.getMember1Email();
//   console.log('email...>',email)
//   let query="select confirmation_token  from users where email='mmr.memb17@mind.com'";
//   console.log('query...>',query);

//   var rs = await base.client.query(query);
//   //var rs = await base.client.query(`select confirmation_token from users where email= ${email}`);
//   //var rs = await base.client.query("select confirmation_token from" + users +" where email="+email );
//   console.log("rs...>", rs.rows);
//   var Tokenid = rs.rows[0]["confirmation_token"];
//   console.log("Tokenid...>", Tokenid);
//   var oldurl="http://mmr-staging.mindoula.com/user-confirmation?confirmation_token=$token$";
//   var newUrl=oldurl.replace('$token$',Tokenid);
//   console.log("newUrl...>", newUrl);
//   await browser.get(newUrl);
//   browser.sleep(2000);
//   await browser.getTitle().then(async function(text) {
//     expect(text).to.equal("mMR");
//     browser.sleep(2000);
//   });
//     await mpage.resetPwd.sendKeys("Test@123");
//     await mpage.confirmResetPwd.sendKeys("Test@123");
//     await mpage.resetBtn.click();
//     browser.sleep(2000);
//     await browser.getTitle().then(async function(text) {
//       expect(text).to.equal("mMR");
//       browser.sleep(20000);
//   //mmr.memb361@mind.com

// });
// });

Then("Member Login", async function() {
  await login.signIn_btn.click();
  browser.sleep(4000);
  await login.usernameEditbox.sendKeys(mmrc.getMember1Email());
  await login.passwordEditbox.sendKeys(mmrc.getCurrentPassword());
  await login.loginBtn.click();
  browser.sleep(4000);
  base.UrlContains("member");
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

