import {
  element,
  promise,
  browser,
  by,
  ElementFinder,
  By,
  WebElement,
  protractor,
  until
} from "protractor";
var fs = require("fs");
import chai from "chai";
import { stringify } from "querystring";
var pg = require("pg");
const moment = require("moment");
var expect = chai.expect;
var Message = {};

export class Base {
  attach: any;
  client = new pg.Client({
    user: "mmr_staging@mmr-staging-pgsql",
    password: "j9Hc(lg9U^Z4!MPj",
    database: "mmr_api_staging",
    port: 5432,
    host: "mmr-staging-pgsql.postgres.database.azure.com",
    ssl: true

    //   dialect: 'postgres',
    // dialectOptions: {
    //   "ssl": {"require":true }
    //}
  });

  async scrollVerticalUp() {
    return new Promise(resolve => {
      browser.executeScript("window.scrollTo(0,0);").then(res => {
        resolve(true);
      });
    });
  }

  async scrollVerticalBy() {
    browser.executeScript("window.scrollTo(0,10000);").then(function() {});
  }

  addScreenshot() {
    function writeScreenShot(data, filename) {
      var stream = fs.createWriteStream(filename);
      stream.write(new Buffer(data, "base64"));
      stream.end();
    }

    browser.takeScreenshot().then(function(png) {
      writeScreenShot(png, "exception.png");
    });
  }

  public sleep(milliSeconds: number) {
    try {
      browser.sleep(milliSeconds * 1000);
    } catch (e) {}
  }

  WaitforElementPresence(elem: any) {
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(elem), 10000);
  }

  WaitforElementClickable(elem: any) {
    var Ec = protractor.ExpectedConditions;
    browser.wait(Ec.elementToBeClickable(elem), 10000);
  }

  WaitforElementfortwominuts(elem: any) {
    var Ec = protractor.ExpectedConditions;
    browser.wait(Ec.elementToBeClickable(elem), 180000);
  }

  WaitforalertIsPresent() {
    var until = protractor.ExpectedConditions;
    browser.wait(until.alertIsPresent(), 10000);
  }

  UrlContains(elem: any) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains(elem), 12000);
  }

  TitleContains(elem: any) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.titleContains(elem), 10000);
  }

  MoveToElement(element: any) {
    browser
      .actions()
      .mouseMove(element)
      .perform();
  }

  scrollIntoView(ele: any) {
    browser
      .actions()
      .mouseMove(element(By.xpath(ele)))
      .perform();
  }

  moveCursorToAnElement(ele: any) {
    browser
      .actions()
      .mouseMove(element(By.xpath(ele)))
      .perform();
  }

  async setChips_singleSelect(xpath: string, replaceToken: string) {
    xpath = xpath.replace("$replaceToken$", replaceToken);
    const ele = element(By.xpath(xpath));
    if (!(ele.isDisplayed() && ele.isEnabled())) {
      this.scrollIntoView(xpath);
      this.sleep(1);
    } else {
      this.moveCursorToAnElement(xpath);
      this.sleep(1);
    }

    await element(By.xpath(xpath)).click();
  }

  async setChips_multiSelect(xpath: string, replaceToken: string) {
    //console.log("replaceToken -> ", replaceToken);
    const options = replaceToken.split(",");
    for (const opt of options) {
      const xpathh = xpath.replace("$replaceToken$", opt.trim());
      this.scroll(xpathh);
      await element(By.xpath(xpathh)).click();
    }
  }

  async setChips_multi(xpath: string, replaceToken: string) {
    const options = replaceToken.split(",");
    for (const opt of options) {
      const xpathh = xpath.replace("$replaceToken$", opt.trim());
      this.scroll(xpathh);
      this.sleep(1);
      await element(By.xpath(xpathh)).click();
    }
  }

  async clickAutofill(xpath: string) {
    this.scroll(xpath);
    await element(By.xpath(xpath)).click();
  }

  async setTextArea(xpath: string, replaceToken: string) {
    this.scroll(xpath);
    await element(By.xpath(xpath)).click();
    await element(By.xpath(xpath)).clear();
    await element(By.xpath(xpath)).sendKeys(replaceToken);
  }

  async setTextAreaId(id: string, replaceToken: string) {
    this.scrollId(id);
    await element(By.id(id)).click();
    await element(By.id(id)).clear();
    await element(By.id(id)).sendKeys(replaceToken);
  }

  async setTextAreaNum(xpath: string, replaceToken: number) {
    this.scroll(xpath);
    await element(By.xpath(xpath)).click();
    await element(By.xpath(xpath)).clear();
    await element(By.xpath(xpath)).sendKeys(replaceToken);
  }

  scroll(xpath) {
    const ele = element(By.xpath(xpath));
    if (!(ele.isDisplayed() && ele.isEnabled())) {
      this.scrollIntoView(xpath);
      this.sleep(1);
    } else {
      this.moveCursorToAnElement(xpath);
      this.sleep(1);
    }
  }

  scrollId(id: string) {
    const ele = element(By.id(id));
    if (!(ele.isDisplayed() && ele.isEnabled())) {
      this.scrollIntoView(id);
      this.sleep(1);
    } else {
      this.moveCursorToAnElement(id);
      this.sleep(1);
    }
  }
  async setChips_singleSelect1(xpath: string, replaceToken: string) {
    xpath = xpath.replace("$replaceToken$", replaceToken);
    const ele = element(By.xpath(xpath));
    if (!(ele.isDisplayed() && ele.isEnabled())) {
      this.scrollIntoView(xpath);
      this.sleep(1);
    } else {
      this.moveCursorToAnElement(xpath);
      this.sleep(1);
    }

    await element(By.xpath(xpath)).click();
  }

  async setChips(xpath: String, value: string, xpath_input: String) {
    value = value.trim();
    var str1 = [];
    if (value == "") return;

    for (const data of value.split(",")) {
      if (data.search(";")) {
        str1 = data.split(";");
        const ele = element(By.xpath(xpath.replace("$replaceToken$", str1[0])));
        if (!(ele.isDisplayed() && ele.isEnabled())) {
          this.scrollIntoView(xpath.replace("$replaceToken$", str1[0]));
          this.sleep(1);
        } else {
          this.moveCursorToAnElement(xpath.replace("$replaceToken$", str1[0]));
          this.sleep(1);
        }
        element(By.xpath(xpath.replace("$replaceToken$", str1[0]))).click();
        // browser.sleep(2000);
        await this.clickValues(xpath_input, str1);
      } else {
        element(By.xpath(xpath.replace("$replaceToken$", data))).click();
      }
      browser.sleep(2000);
    }
  }

  async clickValues(xpath_input, str1) {
    return new Promise(resolve => {
      element
        .all(By.xpath(xpath_input.replace("$replaceToken$", str1[0])))
        .each((res, index) => {
          res.click();
          res.clear();
          if (str1[index + 1] !== "[Blank]") {
            res.sendKeys(str1[index + 1]);
          }
        })
        .then(data => {
          resolve(true);
        });
    });
  }

  verifySelfHarmAlert(size: any) {
    if (size > 0) {
      return "DOES_NOT_EXIST";
    } else {
      return "EXIST";
    }
  }

  verifySelfHarmAlert1(objDetails: any) {
    if (!objDetails.alertIsPresent) {
      return "DOES_NOT_EXIST";
    } else {
      return "EXIST";
    }
  }

  verifyMemberCard(objDetails: any) {
    if (!objDetails.alertIsPresent) {
      return "DOES_NOT_EXIST";
    } else {
      return "EXIST";
    }
  }

  async getSize(objDetails: ElementFinder) {
    const text = await objDetails.getText();
    if (text.substring(0, 2).toLowerCase() == "id") {
      return element(by.id(text.trim())).size();
    } else if (text.substring(0, 5).toLowerCase() == "xpath") {
      return element(by.xpath(text.trim())).size();
    }
    return 0;
  }

  async getSize1(objDetails: ElementFinder) {
    const text = await objDetails.getText();
    if (objDetails.isDisplayed) {
      return objDetails.length;
    }
  }

  compareValues(fieldName: string, appValue: string, featureValue: string) {
    //appValue =  appValue.trim();
    appValue = appValue ? appValue.trim() : "";
    if (appValue == featureValue) {
      return "Comparison Result: PASS";
    } else {
      //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
      Message[
        fieldName
      ] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
    }
    //console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
  }

  compareValues1(fieldName: string, appValue: string, featureValue: string) {
    //appValue =  appValue.trim();
    //appValue = appValue ? appValue.trim() : "";
    if (appValue == featureValue) {
      return "Comparison Result: PASS";
    } else {
      //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
      Message[
        fieldName
      ] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
    }
    //console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
  }

  compareValues_referrals(
    fieldName: string,
    appValue: string,
    featureValue: string
  ) {
    let date: Date = new Date();
    var cdate = moment(date).format("MM/DD/YYYY");
    //var cdate = (date.getMonth() + 1) + '/' +date.getDate() + '/' + +date.getFullYear();
    //var cdate = date.toISOString().slice(0, 10);
    appValue = appValue.trim();
    featureValue = featureValue.trim();
    featureValue = featureValue.replace("CURRENT_DATE", cdate);
    //featureValue = featureValue.replace("CURRENT_CHAT_TIME", MMRController.getChatTime());
    if (appValue == featureValue) {
      return "Comparison Result: PASS";
    } else {
      //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
      Message[
        fieldName
      ] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
    }
    //console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
  }

  getValue() {
    console.log("getValue --> ", Message, Object.keys(Message));
    if (Object.keys(Message).length !== 0) {
      const data = { ...Message };
      Message = {};
      return data;
    } else {
      return null;
    }
  }

  clear() {
    Message = [];
    console.log("clear --> ", Message);
  }

  setDateField(ele: any, value: string) {
    value = value.trim();
    if (value == "") return;

    ele.click();
    ele.sendKeys(value);
    //sleep(2);
    ele.sendKeys(protractor.Key.ESCAPE);
    //ele.sendKeys(protractor.Key.TAB);
    //ele.sendKeys(Keys.ESCAPE);
  }

  setDateFields(ele: any, value: string) {
    value = value.trim();
    if (value == "") return;

    ele.click();

    ele.sendKeys(value);
    //sleep(2);
    //ele.sendKeys(protractor.Key.ESCAPE);
    //ele.sendKeys(protractor.Key.TAB);
    //ele.sendKeys(Keys.ESCAPE);
  }

  setDropdownField(ele: any, xpath: string, value: string) {
    value = value.trim();
    if (value == "") return;
    ele.click();
    //sleep(2);
    browser.sleep(2000);
    element(
      By.xpath(xpath.replace("$replaceToken$", value.replace("[SPACE]", " ")))
    ).click();
    //browser.sleep(2000);
    return;
  }

  setDropdownFieldNoReplace(ele: any, xpath: string, value: string) {
    value = value.trim();
    if (value == "") return;
    ele.click();
    //sleep(2);
    browser.sleep(2000);
    element(
      By.xpath(xpath.replace("$replaceToken$", value.replace("[SPACE]", " ")))
    ).click();
    //browser.sleep(2000);
    return;
  }

  setDropdownField1(ele: any, xpath: string, value: string) {
    //value = value.trim();
    if (value == "") return;
    //this.scroll(ele);
    //	this.sleep(1);
    ele.click();
    //sleep(2);
    browser.sleep(2000);
    element(By.xpath(xpath.replace("$replaceToken$", value))).click();
    browser.sleep(2000);
    return;
  }

  moveToElement(ele) {
    browser
      .actions()
      .mouseMove(element(By.xpath(ele)))
      .perform();
    this.sleep(1);
  }

  async setRadioField(xpath: string, str: string) {
    await element(By.xpath(xpath.replace("$replaceToken$", str))).click();
  }

  setInputField(ele: any, value: string) {
    value = value.trim();
    if (value == "") return;
    ele.sendKeys(value);
  }

  setDropdownFieldSearch(ele: any, xpath: string, value: any) {
    value = value.trim();
    if (value == "") return;
    ele.click();
    browser.sleep(3000);
    element(By.xpath("//input[@placeholder='search']")).sendKeys(value);
    browser.sleep(4000);
    element(By.xpath(xpath.replace("$replaceToken$", value))).click();
    return;
  }

  setCheckboxField(ele: any, value: string) {
    value = value.trim();
    if (value == "") return;
    if (value == "Yes") {
      ele.click();
      // browser.sleep(2000);
    }
  }

  setCheckboxField1(ele: any, value: string) {
    //value = value.trim();
    if (value == "") return;
    if (value == "Yes") {
      ele.click();
      //browser.sleep(2000);
    }
  }

  setTextArea_Keys(ele: any, value: string) {
    value = value.trim();
    if (value == "") return;
    ele.click();
    //sleep(2);protractor.Key.ESCAPE
    value = value.replace(
      "\n",
      protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.ENTER)
    );
    ele.sendKeys(value);
  }

  async verifyAssessmentsFollowupTaskold() {
    var actualFollowUp = "";
    const returnData = await element
      .all(
        by.xpath(
          "//td[contains(@class,'table-actions')]//div//div[contains(@class,'is-bold font-size--small d-flex align-items-center')]"
        )
      )
      .each(async (eles, index) => {
        let text = await eles.getText();
        console.log("text -> ", text);
        actualFollowUp = text ? actualFollowUp + text.trim() + "," : "";
        if (actualFollowUp !== "") {
          actualFollowUp.substring(0, actualFollowUp.length - 1);
        } else {
          actualFollowUp = "No assessments are needed at this time,";
        }
        return actualFollowUp;
      });
    actualFollowUp = actualFollowUp.substring(0, actualFollowUp.length - 1);
    console.log("actualFollowUp --> ", actualFollowUp);
    return actualFollowUp;
  }

  async verifyAssessmentsFollowupTask() {
    var actualFollowUp = "";
    const textArr = [];
    const returnData = await element
      .all(
        by.xpath(
          "//td[contains(@class,'table-actions')]//div//div[contains(@class,'is-bold font-size--small d-flex align-items-center')]"
        )
      )
      .each(async (eles, index) => {
        let text = await eles.getText();
        console.log("text -> ", text);
        textArr.push(text);
      });
    console.log("textArr --> ", textArr);
    const sortedArr = textArr.sort();
    sortedArr.map(text => {
      actualFollowUp = text ? actualFollowUp + text.trim() + "," : "";
      if (actualFollowUp !== "") {
        actualFollowUp.substring(0, actualFollowUp.length - 1);
      } else {
        actualFollowUp = "No assessments are needed at this time,";
      }
    });

    // return actualFollowUp;
    actualFollowUp = actualFollowUp.substring(0, actualFollowUp.length - 1);
    console.log("actualFollowUp --> ", actualFollowUp);
    return actualFollowUp;
  }

  async verifyAssessmentsFollowupTaskHome() {
    var actualFollowUp = "";
    const returnData = await element
      .all(by.xpath("//div[@class='is-bold'][contains(.,'')]"))
      .each(async (eles, index) => {
        let text = await eles.getText();
        console.log("text -> ", text);
        actualFollowUp = text ? actualFollowUp + text.trim() + "," : "";
        if (actualFollowUp !== "") {
          actualFollowUp.substring(0, actualFollowUp.length - 1);
        } else {
          actualFollowUp = "No assessments are needed at this time,";
        }
        return actualFollowUp;
      });
    actualFollowUp = actualFollowUp.substring(0, actualFollowUp.length - 1);
    console.log("actualFollowUp --> ", actualFollowUp);
    return actualFollowUp;
  }

  async getTextElements(xpath: string): Promise<string> {
    return new Promise(resolve => {
      var engMethodVal = "";
      element
        .all(by.xpath(xpath))
        .each(async (eles, i) => {
          const text = await eles.getText();
          console.log("text lenghth...>", text);
          if (engMethodVal !== "") {
            if (i === 3) {
              engMethodVal = engMethodVal + "," + text;
            } else {
              engMethodVal = engMethodVal + ";" + text;
            }
          } else {
            engMethodVal = text;
          }
          return text;
        })
        .then(res => {
          console.log("final res -> ", res, engMethodVal);
          resolve(engMethodVal);
        });
    });
  }

  async getTextElementsInterventionValold(xpath: string): Promise<string> {
    return new Promise(resolve => {
      var InterventionVal = "";
      element
        .all(by.xpath(xpath))
        .each(async (eles, i) => {
          const text = await eles.getText();
          console.log("text lenghth...>", text, i);
          if (InterventionVal !== "") {
            if (!Number(text)) {
              InterventionVal = InterventionVal + "," + text;
            } else {
              InterventionVal = InterventionVal + ";" + text;
            }

            // InterventionVal = InterventionVal + ";" + text;
          } else {
            InterventionVal = text;
          }
          return text;
        })
        .then(res => {
          console.log("final res -> ", res, InterventionVal);
          resolve(InterventionVal);
        });
    });
  }

  async getTextElementsInterventionVal(xpath: string): Promise<string> {
    return new Promise(resolve => {
      var InterventionVal = "";
      const textArr = [];
      element
        .all(by.xpath(xpath))
        .each(async (eles, i) => {
          const text = await eles.getText();
          console.log("text lenghth...>", text, i);
          textArr.push(text);
        })
        .then(res => {
          console.log("textArr --> ", textArr);
          const insert = (arr, index, item) => {
            arr.splice(index, 0, item);
          };
          const nbr1 = textArr[5];
          const nbr2 = textArr[3];
          const nbr3 = textArr[1];
          let sortedArr = textArr.sort();
          console.log('sortedarr before --> ', sortedArr);
          sortedArr.splice(0, 3);
          insert(sortedArr, 1, nbr1);
          insert(sortedArr, 3, nbr2);
          insert(sortedArr, 5, nbr3);
          console.log('sortedarr after insert--> ', sortedArr);
          sortedArr.map(text => {
            if (InterventionVal !== "") {
              if (!Number(text)) {
                InterventionVal = InterventionVal + "," + text;
              } else {
                InterventionVal = InterventionVal + ";" + text;
              }

              // InterventionVal = InterventionVal + ";" + text;
            } else {
              InterventionVal = text;
            }
            return text;
          });
          console.log("final res -> ", res, InterventionVal);
          resolve(InterventionVal);
        });
    });
  }

  async getTextElementsIssuesAddressedVal(xpath: string): Promise<string> {
    return new Promise(resolve => {
      var IssuesAddressedVal = "";
      element
        .all(by.xpath(xpath))
        .each(async (eles, i) => {
          const text = (await eles.getText())
            ? (await eles.getText()).trim()
            : "";
          console.log("address...>", text, i);
          if (IssuesAddressedVal !== "") {
            if (i === 1) {
              IssuesAddressedVal =
                IssuesAddressedVal + "," + text.substring(1).trim();
            }
            // IssuesAddressedVal = IssuesAddressedVal  + text.substring(1);
          } else {
            IssuesAddressedVal = text.substring(1).trim();
          }
          return text;
        })
        .then(res => {
          console.log("final res -> ", res, IssuesAddressedVal);
          resolve(IssuesAddressedVal);
        });
    });
  }

  async getTextElementsFollowupVal(xpath: string): Promise<string> {
    return new Promise(resolve => {
      var FollowupVal = "";
      element
        .all(by.xpath(xpath))
        .each(async (eles, i) => {
          const text = (await eles.getText())
            ? (await eles.getText()).trim()
            : "";
          console.log("text lenghth...>", text);
          if (FollowupVal !== "") {
            if (i === 1) {
              FollowupVal = FollowupVal + "," + text.substring(1).trim();
            }
            // FollowupVal = FollowupVal  + text.substring(1);
          } else {
            FollowupVal = text.substring(1).trim();
          }
          return text;
        })
        .then(res => {
          console.log("final res -> ", res, FollowupVal);
          resolve(FollowupVal);
        });
    });
  }

  async dragAndDrop(element: WebElement, destination: WebElement) {
    await browser
      .actions()
      .mouseDown(element)
      .perform();
    await browser
      .actions()
      .mouseMove(destination)
      .perform();
    return await browser
      .actions()
      .mouseUp(destination)
      .perform();
  }
}
