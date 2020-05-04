import { Given, When, Then } from "cucumber";
import { browser, protractor, ExpectedConditions } from "protractor";
import { MMRLoginPage } from "../pageObjects/MMRLoginPage";
import chai from "chai";
import { Memberspage } from "../pageObjects/Memberspage";
import { basename } from "path";
import { Base } from "../Util/Base";

let login = new MMRLoginPage();
var expect = chai.expect;
let mpage = new Memberspage();
let base = new Base();

Given("Launch Website", async function() {
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then("Login to the website", async function() {
  await login.usernameEditbox.sendKeys(browser.params.mmrlogin.email);
  await login.passwordEditbox.sendKeys(browser.params.mmrlogin.pwd);
  await login.loginBtn.click();
  browser.sleep(4000);
  base.UrlContains("member");
  await browser.getTitle().then(function(text) {
    expect(text).to.equal("mMR");
  });
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});

Then('Change to Darkmode On', async function () {
  await login.UserBtn.click();
  browser.sleep(2000);
  await login.darkmode_btn.click();
  browser.sleep(2000);
});
