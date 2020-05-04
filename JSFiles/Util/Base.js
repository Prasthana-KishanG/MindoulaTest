"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var fs = require("fs");
const chai_1 = __importDefault(require("chai"));
var pg = require("pg");
const moment = require("moment");
var expect = chai_1.default.expect;
var Message = {};
class Base {
    constructor() {
        this.client = new pg.Client({
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
    }
    scrollVerticalUp() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                protractor_1.browser.executeScript("window.scrollTo(0,0);").then(res => {
                    resolve(true);
                });
            });
        });
    }
    scrollVerticalBy() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.executeScript("window.scrollTo(0,10000);").then(function () { });
        });
    }
    addScreenshot() {
        function writeScreenShot(data, filename) {
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer(data, "base64"));
            stream.end();
        }
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, "exception.png");
        });
    }
    sleep(milliSeconds) {
        try {
            protractor_1.browser.sleep(milliSeconds * 1000);
        }
        catch (e) { }
    }
    WaitforElementPresence(elem) {
        var until = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(until.presenceOf(elem), 10000);
    }
    WaitforElementClickable(elem) {
        var Ec = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(Ec.elementToBeClickable(elem), 10000);
    }
    WaitforElementfortwominuts(elem) {
        var Ec = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(Ec.elementToBeClickable(elem), 180000);
    }
    WaitforalertIsPresent() {
        var until = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(until.alertIsPresent(), 10000);
    }
    UrlContains(elem) {
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.urlContains(elem), 12000);
    }
    TitleContains(elem) {
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.titleContains(elem), 10000);
    }
    MoveToElement(element) {
        protractor_1.browser
            .actions()
            .mouseMove(element)
            .perform();
    }
    scrollIntoView(ele) {
        protractor_1.browser
            .actions()
            .mouseMove(protractor_1.element(protractor_1.By.xpath(ele)))
            .perform();
    }
    moveCursorToAnElement(ele) {
        protractor_1.browser
            .actions()
            .mouseMove(protractor_1.element(protractor_1.By.xpath(ele)))
            .perform();
    }
    setChips_singleSelect(xpath, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            xpath = xpath.replace("$replaceToken$", replaceToken);
            const ele = protractor_1.element(protractor_1.By.xpath(xpath));
            if (!(ele.isDisplayed() && ele.isEnabled())) {
                this.scrollIntoView(xpath);
                this.sleep(1);
            }
            else {
                this.moveCursorToAnElement(xpath);
                this.sleep(1);
            }
            yield protractor_1.element(protractor_1.By.xpath(xpath)).click();
        });
    }
    setChips_multiSelect(xpath, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log("replaceToken -> ", replaceToken);
            const options = replaceToken.split(",");
            for (const opt of options) {
                const xpathh = xpath.replace("$replaceToken$", opt.trim());
                this.scroll(xpathh);
                yield protractor_1.element(protractor_1.By.xpath(xpathh)).click();
            }
        });
    }
    setChips_multi(xpath, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = replaceToken.split(",");
            for (const opt of options) {
                const xpathh = xpath.replace("$replaceToken$", opt.trim());
                this.scroll(xpathh);
                this.sleep(1);
                yield protractor_1.element(protractor_1.By.xpath(xpathh)).click();
            }
        });
    }
    clickAutofill(xpath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scroll(xpath);
            yield protractor_1.element(protractor_1.By.xpath(xpath)).click();
        });
    }
    setTextArea(xpath, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scroll(xpath);
            yield protractor_1.element(protractor_1.By.xpath(xpath)).click();
            yield protractor_1.element(protractor_1.By.xpath(xpath)).clear();
            yield protractor_1.element(protractor_1.By.xpath(xpath)).sendKeys(replaceToken);
        });
    }
    setTextAreaId(id, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scrollId(id);
            yield protractor_1.element(protractor_1.By.id(id)).click();
            yield protractor_1.element(protractor_1.By.id(id)).clear();
            yield protractor_1.element(protractor_1.By.id(id)).sendKeys(replaceToken);
        });
    }
    setTextAreaNum(xpath, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scroll(xpath);
            yield protractor_1.element(protractor_1.By.xpath(xpath)).click();
            yield protractor_1.element(protractor_1.By.xpath(xpath)).clear();
            yield protractor_1.element(protractor_1.By.xpath(xpath)).sendKeys(replaceToken);
        });
    }
    scroll(xpath) {
        const ele = protractor_1.element(protractor_1.By.xpath(xpath));
        if (!(ele.isDisplayed() && ele.isEnabled())) {
            this.scrollIntoView(xpath);
            this.sleep(1);
        }
        else {
            this.moveCursorToAnElement(xpath);
            this.sleep(1);
        }
    }
    scrollId(id) {
        const ele = protractor_1.element(protractor_1.By.id(id));
        if (!(ele.isDisplayed() && ele.isEnabled())) {
            this.scrollIntoView(id);
            this.sleep(1);
        }
        else {
            this.moveCursorToAnElement(id);
            this.sleep(1);
        }
    }
    setChips_singleSelect1(xpath, replaceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            xpath = xpath.replace("$replaceToken$", replaceToken);
            const ele = protractor_1.element(protractor_1.By.xpath(xpath));
            if (!(ele.isDisplayed() && ele.isEnabled())) {
                this.scrollIntoView(xpath);
                this.sleep(1);
            }
            else {
                this.moveCursorToAnElement(xpath);
                this.sleep(1);
            }
            yield protractor_1.element(protractor_1.By.xpath(xpath)).click();
        });
    }
    setChips(xpath, value, xpath_input) {
        return __awaiter(this, void 0, void 0, function* () {
            value = value.trim();
            var str1 = [];
            if (value == "")
                return;
            for (const data of value.split(",")) {
                if (data.search(";")) {
                    str1 = data.split(";");
                    const ele = protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", str1[0])));
                    if (!(ele.isDisplayed() && ele.isEnabled())) {
                        this.scrollIntoView(xpath.replace("$replaceToken$", str1[0]));
                        this.sleep(1);
                    }
                    else {
                        this.moveCursorToAnElement(xpath.replace("$replaceToken$", str1[0]));
                        this.sleep(1);
                    }
                    protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", str1[0]))).click();
                    // browser.sleep(2000);
                    yield this.clickValues(xpath_input, str1);
                }
                else {
                    protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", data))).click();
                }
                protractor_1.browser.sleep(2000);
            }
        });
    }
    clickValues(xpath_input, str1) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                protractor_1.element
                    .all(protractor_1.By.xpath(xpath_input.replace("$replaceToken$", str1[0])))
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
        });
    }
    verifySelfHarmAlert(size) {
        if (size > 0) {
            return "DOES_NOT_EXIST";
        }
        else {
            return "EXIST";
        }
    }
    verifySelfHarmAlert1(objDetails) {
        if (!objDetails.alertIsPresent) {
            return "DOES_NOT_EXIST";
        }
        else {
            return "EXIST";
        }
    }
    verifyMemberCard(objDetails) {
        if (!objDetails.alertIsPresent) {
            return "DOES_NOT_EXIST";
        }
        else {
            return "EXIST";
        }
    }
    getSize(objDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield objDetails.getText();
            if (text.substring(0, 2).toLowerCase() == "id") {
                return protractor_1.element(protractor_1.by.id(text.trim())).size();
            }
            else if (text.substring(0, 5).toLowerCase() == "xpath") {
                return protractor_1.element(protractor_1.by.xpath(text.trim())).size();
            }
            return 0;
        });
    }
    getSize1(objDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield objDetails.getText();
            if (objDetails.isDisplayed) {
                return objDetails.length;
            }
        });
    }
    compareValues(fieldName, appValue, featureValue) {
        //appValue =  appValue.trim();
        appValue = appValue ? appValue.trim() : "";
        if (appValue == featureValue) {
            return "Comparison Result: PASS";
        }
        else {
            //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
            Message[fieldName] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
        }
        //console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
    }
    compareValues1(fieldName, appValue, featureValue) {
        //appValue =  appValue.trim();
        //appValue = appValue ? appValue.trim() : "";
        if (appValue == featureValue) {
            return "Comparison Result: PASS";
        }
        else {
            //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
            Message[fieldName] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
        }
        //console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
    }
    compareValues_referrals(fieldName, appValue, featureValue) {
        let date = new Date();
        var cdate = moment(date).format("MM/DD/YYYY");
        //var cdate = (date.getMonth() + 1) + '/' +date.getDate() + '/' + +date.getFullYear();
        //var cdate = date.toISOString().slice(0, 10);
        appValue = appValue.trim();
        featureValue = featureValue.trim();
        featureValue = featureValue.replace("CURRENT_DATE", cdate);
        //featureValue = featureValue.replace("CURRENT_CHAT_TIME", MMRController.getChatTime());
        if (appValue == featureValue) {
            return "Comparison Result: PASS";
        }
        else {
            //Message[fieldName] = "Actual Result: " + appValue, "Expected Result: " + featureValue ;
            Message[fieldName] = `Actual Result: ${appValue}, Expected Result: ${featureValue}`;
        }
        //console.log('message121212 --> ', Message[fieldName] = `Actual Result: ${appValue.trim()}, Expected Result: ${featureValue}`);
    }
    getValue() {
        console.log("getValue --> ", Message, Object.keys(Message));
        if (Object.keys(Message).length !== 0) {
            const data = Object.assign({}, Message);
            Message = {};
            return data;
        }
        else {
            return null;
        }
    }
    clear() {
        Message = [];
        console.log("clear --> ", Message);
    }
    setDateField(ele, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.click();
        ele.sendKeys(value);
        //sleep(2);
        ele.sendKeys(protractor_1.protractor.Key.ESCAPE);
        //ele.sendKeys(protractor.Key.TAB);
        //ele.sendKeys(Keys.ESCAPE);
    }
    setDateFields(ele, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.click();
        ele.sendKeys(value);
        //sleep(2);
        //ele.sendKeys(protractor.Key.ESCAPE);
        //ele.sendKeys(protractor.Key.TAB);
        //ele.sendKeys(Keys.ESCAPE);
    }
    setDropdownField(ele, xpath, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.click();
        //sleep(2);
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", value.replace("[SPACE]", " ")))).click();
        //browser.sleep(2000);
        return;
    }
    setDropdownFieldNoReplace(ele, xpath, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.click();
        //sleep(2);
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", value.replace("[SPACE]", " ")))).click();
        //browser.sleep(2000);
        return;
    }
    setDropdownField1(ele, xpath, value) {
        //value = value.trim();
        if (value == "")
            return;
        //this.scroll(ele);
        //	this.sleep(1);
        ele.click();
        //sleep(2);
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", value))).click();
        protractor_1.browser.sleep(2000);
        return;
    }
    moveToElement(ele) {
        protractor_1.browser
            .actions()
            .mouseMove(protractor_1.element(protractor_1.By.xpath(ele)))
            .perform();
        this.sleep(1);
    }
    setRadioField(xpath, str) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", str))).click();
        });
    }
    setInputField(ele, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.sendKeys(value);
    }
    setDropdownFieldSearch(ele, xpath, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.By.xpath("//input[@placeholder='search']")).sendKeys(value);
        protractor_1.browser.sleep(4000);
        protractor_1.element(protractor_1.By.xpath(xpath.replace("$replaceToken$", value))).click();
        return;
    }
    setCheckboxField(ele, value) {
        value = value.trim();
        if (value == "")
            return;
        if (value == "Yes") {
            ele.click();
            // browser.sleep(2000);
        }
    }
    setCheckboxField1(ele, value) {
        //value = value.trim();
        if (value == "")
            return;
        if (value == "Yes") {
            ele.click();
            //browser.sleep(2000);
        }
    }
    setTextArea_Keys(ele, value) {
        value = value.trim();
        if (value == "")
            return;
        ele.click();
        //sleep(2);protractor.Key.ESCAPE
        value = value.replace("\n", protractor_1.protractor.Key.chord(protractor_1.protractor.Key.SHIFT, protractor_1.protractor.Key.ENTER));
        ele.sendKeys(value);
    }
    verifyAssessmentsFollowupTaskold() {
        return __awaiter(this, void 0, void 0, function* () {
            var actualFollowUp = "";
            const returnData = yield protractor_1.element
                .all(protractor_1.by.xpath("//td[contains(@class,'table-actions')]//div//div[contains(@class,'is-bold font-size--small d-flex align-items-center')]"))
                .each((eles, index) => __awaiter(this, void 0, void 0, function* () {
                let text = yield eles.getText();
                console.log("text -> ", text);
                actualFollowUp = text ? actualFollowUp + text.trim() + "," : "";
                if (actualFollowUp !== "") {
                    actualFollowUp.substring(0, actualFollowUp.length - 1);
                }
                else {
                    actualFollowUp = "No assessments are needed at this time,";
                }
                return actualFollowUp;
            }));
            actualFollowUp = actualFollowUp.substring(0, actualFollowUp.length - 1);
            console.log("actualFollowUp --> ", actualFollowUp);
            return actualFollowUp;
        });
    }
    verifyAssessmentsFollowupTask() {
        return __awaiter(this, void 0, void 0, function* () {
            var actualFollowUp = "";
            const textArr = [];
            const returnData = yield protractor_1.element
                .all(protractor_1.by.xpath("//td[contains(@class,'table-actions')]//div//div[contains(@class,'is-bold font-size--small d-flex align-items-center')]"))
                .each((eles, index) => __awaiter(this, void 0, void 0, function* () {
                let text = yield eles.getText();
                console.log("text -> ", text);
                textArr.push(text);
            }));
            console.log("textArr --> ", textArr);
            const sortedArr = textArr.sort();
            sortedArr.map(text => {
                actualFollowUp = text ? actualFollowUp + text.trim() + "," : "";
                if (actualFollowUp !== "") {
                    actualFollowUp.substring(0, actualFollowUp.length - 1);
                }
                else {
                    actualFollowUp = "No assessments are needed at this time,";
                }
            });
            // return actualFollowUp;
            actualFollowUp = actualFollowUp.substring(0, actualFollowUp.length - 1);
            console.log("actualFollowUp --> ", actualFollowUp);
            return actualFollowUp;
        });
    }
    verifyAssessmentsFollowupTaskHome() {
        return __awaiter(this, void 0, void 0, function* () {
            var actualFollowUp = "";
            const returnData = yield protractor_1.element
                .all(protractor_1.by.xpath("//div[@class='is-bold'][contains(.,'')]"))
                .each((eles, index) => __awaiter(this, void 0, void 0, function* () {
                let text = yield eles.getText();
                console.log("text -> ", text);
                actualFollowUp = text ? actualFollowUp + text.trim() + "," : "";
                if (actualFollowUp !== "") {
                    actualFollowUp.substring(0, actualFollowUp.length - 1);
                }
                else {
                    actualFollowUp = "No assessments are needed at this time,";
                }
                return actualFollowUp;
            }));
            actualFollowUp = actualFollowUp.substring(0, actualFollowUp.length - 1);
            console.log("actualFollowUp --> ", actualFollowUp);
            return actualFollowUp;
        });
    }
    getTextElements(xpath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var engMethodVal = "";
                protractor_1.element
                    .all(protractor_1.by.xpath(xpath))
                    .each((eles, i) => __awaiter(this, void 0, void 0, function* () {
                    const text = yield eles.getText();
                    console.log("text lenghth...>", text);
                    if (engMethodVal !== "") {
                        if (i === 3) {
                            engMethodVal = engMethodVal + "," + text;
                        }
                        else {
                            engMethodVal = engMethodVal + ";" + text;
                        }
                    }
                    else {
                        engMethodVal = text;
                    }
                    return text;
                }))
                    .then(res => {
                    console.log("final res -> ", res, engMethodVal);
                    resolve(engMethodVal);
                });
            });
        });
    }
    getTextElementsInterventionValold(xpath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var InterventionVal = "";
                protractor_1.element
                    .all(protractor_1.by.xpath(xpath))
                    .each((eles, i) => __awaiter(this, void 0, void 0, function* () {
                    const text = yield eles.getText();
                    console.log("text lenghth...>", text, i);
                    if (InterventionVal !== "") {
                        if (!Number(text)) {
                            InterventionVal = InterventionVal + "," + text;
                        }
                        else {
                            InterventionVal = InterventionVal + ";" + text;
                        }
                        // InterventionVal = InterventionVal + ";" + text;
                    }
                    else {
                        InterventionVal = text;
                    }
                    return text;
                }))
                    .then(res => {
                    console.log("final res -> ", res, InterventionVal);
                    resolve(InterventionVal);
                });
            });
        });
    }
    getTextElementsInterventionVal(xpath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var InterventionVal = "";
                const textArr = [];
                protractor_1.element
                    .all(protractor_1.by.xpath(xpath))
                    .each((eles, i) => __awaiter(this, void 0, void 0, function* () {
                    const text = yield eles.getText();
                    console.log("text lenghth...>", text, i);
                    textArr.push(text);
                }))
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
                            }
                            else {
                                InterventionVal = InterventionVal + ";" + text;
                            }
                            // InterventionVal = InterventionVal + ";" + text;
                        }
                        else {
                            InterventionVal = text;
                        }
                        return text;
                    });
                    console.log("final res -> ", res, InterventionVal);
                    resolve(InterventionVal);
                });
            });
        });
    }
    getTextElementsIssuesAddressedVal(xpath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var IssuesAddressedVal = "";
                protractor_1.element
                    .all(protractor_1.by.xpath(xpath))
                    .each((eles, i) => __awaiter(this, void 0, void 0, function* () {
                    const text = (yield eles.getText())
                        ? (yield eles.getText()).trim()
                        : "";
                    console.log("address...>", text, i);
                    if (IssuesAddressedVal !== "") {
                        if (i === 1) {
                            IssuesAddressedVal =
                                IssuesAddressedVal + "," + text.substring(1).trim();
                        }
                        // IssuesAddressedVal = IssuesAddressedVal  + text.substring(1);
                    }
                    else {
                        IssuesAddressedVal = text.substring(1).trim();
                    }
                    return text;
                }))
                    .then(res => {
                    console.log("final res -> ", res, IssuesAddressedVal);
                    resolve(IssuesAddressedVal);
                });
            });
        });
    }
    getTextElementsFollowupVal(xpath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var FollowupVal = "";
                protractor_1.element
                    .all(protractor_1.by.xpath(xpath))
                    .each((eles, i) => __awaiter(this, void 0, void 0, function* () {
                    const text = (yield eles.getText())
                        ? (yield eles.getText()).trim()
                        : "";
                    console.log("text lenghth...>", text);
                    if (FollowupVal !== "") {
                        if (i === 1) {
                            FollowupVal = FollowupVal + "," + text.substring(1).trim();
                        }
                        // FollowupVal = FollowupVal  + text.substring(1);
                    }
                    else {
                        FollowupVal = text.substring(1).trim();
                    }
                    return text;
                }))
                    .then(res => {
                    console.log("final res -> ", res, FollowupVal);
                    resolve(FollowupVal);
                });
            });
        });
    }
    dragAndDrop(element, destination) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser
                .actions()
                .mouseDown(element)
                .perform();
            yield protractor_1.browser
                .actions()
                .mouseMove(destination)
                .perform();
            return yield protractor_1.browser
                .actions()
                .mouseUp(destination)
                .perform();
        });
    }
}
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWwvQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDJDQVVvQjtBQUNwQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsZ0RBQXdCO0FBRXhCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFFakIsTUFBYSxJQUFJO0lBQWpCO1FBRUUsV0FBTSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNyQixJQUFJLEVBQUUsK0JBQStCO1lBQ3JDLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSwrQ0FBK0M7WUFDckQsR0FBRyxFQUFFLElBQUk7WUFFVCx5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLDZCQUE2QjtZQUM3QixHQUFHO1NBQ0osQ0FBQyxDQUFDO0lBeXJCTCxDQUFDO0lBdnJCTyxnQkFBZ0I7O1lBQ3BCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNCLG9CQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN4RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0I7O1lBQ3BCLG9CQUFPLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxD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