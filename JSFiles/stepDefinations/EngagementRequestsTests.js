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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Base_1 = require("../Util/Base");
const membersConsults_1 = require("../pageObjects/membersConsults");
const MMRController_1 = require("../Util/MMRController");
const membersCaseNotes_1 = require("../pageObjects/membersCaseNotes");
const E2EMember_1 = require("../pageObjects/E2EMember");
const EngagementRequests_1 = require("../pageObjects/EngagementRequests");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
const MMRLoginPage_1 = require("../pageObjects/MMRLoginPage");
let consults = new membersConsults_1.membersConsults();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let casenotes = new membersCaseNotes_1.membersCaseNotes();
let pm = new ParamManager_1.ParamManager();
let E2EMem = new E2EMember_1.E2EMember();
let EngReq = new EngagementRequests_1.EngagementRequests();
const moment = require("moment");
let login = new MMRLoginPage_1.MMRLoginPage();
let path = require("path");
cucumber_1.Then("Login to the website with Member", function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield login.usernameEditbox.sendKeys(pm.getParamH("username"));
        yield login.passwordEditbox.sendKeys(pm.getParamH("password"));
        yield login.loginBtn.click();
        protractor_1.browser.sleep(4000);
        base.UrlContains("member");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then("Login to the website for scheduling call in primary case manager.", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //pm.dataTableH(dataTable);
        //await login.usernameEditbox.sendKeys(pm.getParamH("username"));
        //await login.passwordEditbox.sendKeys(pm.getParamH("password"));
        yield login.usernameEditbox.sendKeys(protractor_1.browser.params.mmrlogin2.email);
        yield login.passwordEditbox.sendKeys(protractor_1.browser.params.mmrlogin2.pwd);
        yield login.loginBtn.click();
        protractor_1.browser.sleep(8000);
        base.UrlContains("member");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Login to the website with Case Manager', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //pm.dataTableH(dataTable);
        // await login.usernameEditbox.sendKeys(pm.getParamH("username"));
        // await login.passwordEditbox.sendKeys(pm.getParamH("password"));
        yield login.usernameEditbox.sendKeys(protractor_1.browser.params.mmrloginCaseM.email);
        yield login.passwordEditbox.sendKeys(protractor_1.browser.params.mmrloginCaseM.pwd);
        yield login.loginBtn.click();
        protractor_1.browser.sleep(6000);
        base.UrlContains("member");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Take Action From Member Home Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        if (pm.getParamH("Button_Container") == ("Check In")) {
            base.WaitforElementClickable(EngReq.eng_checkin_btn);
            yield EngReq.eng_checkin_btn.click();
            protractor_1.browser.sleep(15000);
        }
        if (pm.getParamH("Button_Container") == ("Chat")) {
            base.WaitforElementClickable(EngReq.eng_chatmem_btn);
            yield EngReq.eng_chatmem_btn.click();
            protractor_1.browser.sleep(8000);
        }
        if (pm.getParamH("Button_Container") == ("Schedule Call")) {
            base.WaitforElementClickable(EngReq.eng_chatmem_btn);
            yield EngReq.eng_schcallmem_btn.click();
            protractor_1.browser.sleep(8000);
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on the Care_Extender_name in the Chat Inbox', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var eng_careextender_sel = EngReq.eng_careextender_sel_str.replace("$replaceToken$", pm.getParamH("Care_Extender_Name"));
        yield protractor_1.element(protractor_1.by.xpath(eng_careextender_sel)).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Checkin is Opened in Primary Case manager Chat window', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        //var eng_chat_wintext = EngReq.eng_chat_wintext_str.replace("$replaceToken$",pm.getParamH("Primary_Case_Manager"));
        //base.WaitforElementPresence(element(by.xpath(eng_chat_wintext)));
        //console.log('Text1111...>',await element(by.xpath(eng_chat_wintext)).getText());
        base.compareValues("Primary_Case_Manager", yield protractor_1.element(protractor_1.by.xpath(EngReq.eng_chat_wintext_str.replace("$replaceToken$", pm.getParamH("Primary_Case_Manager")))).getText(), pm.getParamH("Primary_Case_Manager"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Select Checkin window.', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (!EngReq.eng_dialog__header.Displayed) {
            base.WaitforElementClickable(EngReq.eng_checkin_header_btn);
            //browser.sleep(5000);
            yield EngReq.eng_checkin_header_btn.click();
            //base.WaitforElementClickable(element(by.xpath(EngReq.eng_checkin_options_str)));
            //browser.sleep(10000);
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
cucumber_1.Then('Select Checkin Options by click on it.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var eng_checkin_options = EngReq.eng_checkin_options_str.replace("$replaceToken$", pm.getParamH("Checkin Option"));
        //base.WaitforElementPresence(element(by.xpath(eng_checkin_options)));
        //browser.actions().mouseMove(await element(by.xpath(eng_checkin_options))).perform();
        base.WaitforElementClickable(protractor_1.element(protractor_1.by.xpath(eng_checkin_options)));
        yield protractor_1.element(protractor_1.by.xpath(eng_checkin_options)).click();
        //base.WaitforElementClickable(EngReq.eng_checkin_answers1);
        protractor_1.browser.sleep(1000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Checkin message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //pm.dataTableV(dataTable);
        yield EngReq.eng_checkin_answers1.click();
        protractor_1.browser.sleep(180000);
        base.WaitforElementfortwominuts(EngReq.eng_mindy_reply_msg);
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Sent text in the chat window', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues("CheckIn Message1", yield protractor_1.element(protractor_1.by.xpath(EngReq.eng_checkin_answers.replace("$replaceToken$", pm.getParamV("CheckIn Message1")))).getText(), pm.getParamV("CheckIn Message1"));
        base.compareValues("CheckIn Message2", yield protractor_1.element(protractor_1.by.xpath(EngReq.eng_checkin_answers.replace("$replaceToken$", pm.getParamV("CheckIn Message2")))).getText(), pm.getParamV("CheckIn Message2"));
        base.compareValues("CheckIn Message3", yield protractor_1.element(protractor_1.by.xpath(EngReq.eng_checkin_answers.replace("$replaceToken$", pm.getParamV("CheckIn Message3")))).getText(), pm.getParamV("CheckIn Message3"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Wait for 2 minutes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //pm.dataTableV(dataTable);
        //browser.sleep(5000);
        //await EngReq.eng_checkin_answers1.click();
        protractor_1.browser.sleep(180000);
        base.WaitforElementfortwominuts(EngReq.eng_mindy_reply_msg);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Auto Reply message recieved', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        let last = protractor_1.element.all(protractor_1.by.xpath(EngReq.eng_mindy_msg.replace("$replaceToken$", pm.getParamH("Auto_Reply_message")))).last();
        const text = yield last.getText();
        //console.log('text...>',text);
        expect(text, 'Auto_Reply_message').to.equal(pm.getParamH("Auto_Reply_message"));
        // base.compareValues("Auto_Reply_message", text, pm.getParamH("Auto_Reply_message"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on mindy Help icon in the auto reply message recieved.', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let last = protractor_1.element.all(protractor_1.by.xpath(EngReq.eng_mindy_help)).last();
        // const text = await last.getText();
        // console.log('mindy Help icon text...>',text);
        yield last.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Mindy help Message Text', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.element.all(protractor_1.by.xpath(EngReq.eng_mindy_help_msg)).each((eles, i) => __awaiter(this, void 0, void 0, function* () {
            const text = yield eles.getText();
            //console.log("text help...>", text.substring(10),i);
            pm.dataTableH(dataTable);
            expect(text.substring(10), 'Mindy_Help_Message').to.equal(pm.getParamH("Help_Message"));
        }));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Close Help window', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.eng_mindy_help_close.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on Schedule Call icon in chat window', function () {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield EngReq.eng_schedulecall_icon.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(5000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Select Available time in the Pop Up window', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        base.setDropdownField(EngReq.eng_availtime_txt, EngReq.eng_availtime_dropdown, pm.getParamH("SCHEDULED_TIME"));
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Schedule Call', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.eng_schedulecall_btn.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the text Confirmation Dialouge window', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element.all(protractor_1.by.xpath(EngReq.eng_schedulecallConfirm_txt)).each((eles, i) => __awaiter(this, void 0, void 0, function* () {
            const text = yield eles.getText();
            //const Actual = text.replace('\n', ' ');
            console.log("text Confirmation dialog...>", text, i);
            pm.dataTableH(dataTable);
            expect(text.replace(/\n/g, ' '), 'SCHEDULED_CALL_CONFIRMATION_TEXT').to.equal(pm.getParamH("SCHEDULED_CALL_CONFIRMATION_TEXT"));
        }));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Close the Confirmation Dialogue', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.eng_confirmdialog_close_btn.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the Confirmation Dialouge window closed or not', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        var CONFIRMATION_DIALOG_EXISTS = "NO";
        pm.dataTableV(dataTable);
        if (yield EngReq.eng_confirmdialog_header.isPresent()) {
            CONFIRMATION_DIALOG_EXISTS = "YES";
        }
        base.compareValues('CONFIRMATION_DIALOG', CONFIRMATION_DIALOG_EXISTS, pm.getParamV("CONFIRMATION_DIALOG"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Close the Confirmation Dialogue from schedule call header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield EngReq.eng_confirmdialog_header.isDisplayed()) {
            yield EngReq.eng_schedulecall_icon.click();
        }
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Close the Chat inbox', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.eng_chatwin_close_btn.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Enter Message in Chat Text Box', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield EngReq.eng_chat_txtarea.sendKeys(pm.getParamH("message"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on Send Icon in messenger', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.eng_chat_sendbtn.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(2000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify the text message is sent to the Care_Extender_Name Successfully', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        let last = protractor_1.element.all(protractor_1.by.xpath(EngReq.chat_sentmsg)).last();
        const text = yield last.getText();
        pm.dataTableH(dataTable);
        base.compareValues("CheckIn Message1", text, pm.getParamH("message"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Wait for 2 minutes in chat room for Auto Reply Message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.chat_sentmsg1.click();
        protractor_1.browser.sleep(180000);
        base.WaitforElementfortwominuts(EngReq.eng_mindy_reply_msg);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the AutoReply message recieved.', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        let last = protractor_1.element.all(protractor_1.by.xpath(EngReq.eng_mindy_msg.replace("$replaceToken$", pm.getParamH("Auto_Reply_message")))).last();
        const text = yield last.getText();
        //console.log('text...>',text);
        expect(text, 'Auto_Reply_message').to.equal(pm.getParamH("Auto_Reply_message"));
        // base.compareValues("Auto_Reply_message", text, pm.getParamH("Auto_Reply_message"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Logout from Website', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.UserBtn.click();
        protractor_1.browser.sleep(2000);
        yield EngReq.LogoutBtn.click();
        protractor_1.browser.sleep(5000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(2000);
        });
        base.WaitforElementPresence(login.usernameEditbox);
        //base.UrlContains("login");
    });
});
cucumber_1.Then('Click on Engagement Requests Icon on the Casemanager Home Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield EngReq.engagement_icon.click();
        protractor_1.browser.sleep(14000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on accept', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var ChatAutoreplyAccept_btn = EngReq.ChatAutoreplyAccept.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status").substring(0, 8)).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(ChatAutoreplyAccept_btn)).click();
        protractor_1.browser.sleep(9000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Status,Action for Mark As Addressed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name1, type1, AssignedTo1, Cstatus3, Cstatus4, Cstatus;
            try {
                name1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name1...>', name1, pm.getParamH("Name"));
                type1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.type.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type1...>', type1, pm.getParamH("Request_type"));
                AssignedTo1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                Cstatus3 = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(0, 8)))).getText();
                Cstatus4 = yield protractor_1.element(protractor_1.by.xpath(EngReq.statusConfirm.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(10)))).getText();
                Cstatus = Cstatus3 + "  " + Cstatus4;
                console.log('AssignedTo1...>', AssignedTo1, pm.getParamH("Assigned_to"));
                console.log('Cstatus...>', Cstatus, pm.getParamH("Status"));
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("no match").to.equal(null);
                }
                else {
                    continue;
                }
            }
            if (name1 == pm.getParamH("Name") && type1 == pm.getParamH("Request_type") && Cstatus == pm.getParamH("Status") && AssignedTo1 == pm.getParamH("Assigned_to")) {
                var ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
                base.compareValues("Status", Cstatus, pm.getParamH("Status"));
                base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
                const val = base.getValue();
                expect(val ? JSON.stringify(val) : null).to.equal(null);
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
                return true;
            }
        }
    });
});
cucumber_1.Then('Click on Mark As Addressed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var ChatAutoreplyMarkAsAddressed_btn = EngReq.ChatAutoreplyMarkAsAddressed.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status").substring(0, 8)).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(ChatAutoreplyMarkAsAddressed_btn)).click();
        protractor_1.browser.sleep(8000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Status,Action for Add Case Note', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name, type, AssignedTo, status;
            console.log('i value...>', i);
            try {
                name = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name...>', name, pm.getParamH("Name"));
                type = yield protractor_1.element(protractor_1.by.xpath(EngReq.type.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type...>', type, pm.getParamH("Request_type"));
                AssignedTo = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                console.log('AssignedTo...>', AssignedTo, pm.getParamH("Assigned_to"));
                status = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();
                console.log('status...>', status, pm.getParamH("Status"));
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                //console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("no match").to.equal(null);
                }
                else {
                    continue;
                }
            }
            if (name == pm.getParamH("Name") && type == pm.getParamH("Request_type") && status == pm.getParamH("Status") && AssignedTo == pm.getParamH("Assigned_to")) {
                //var status = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();		
                var ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
                base.compareValues("Status", status, pm.getParamH("Status"));
                base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
                const val = base.getValue();
                expect(val ? JSON.stringify(val) : null).to.equal(null);
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
                return true;
            }
        }
    });
});
cucumber_1.Then('Click on  Add Case Note', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var ChatAutoreplyAddCaseNotes_btn = EngReq.ChatAutoreplyAddCaseNotes.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status")).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(ChatAutoreplyAddCaseNotes_btn)).click();
        protractor_1.browser.sleep(10000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on  Edit Case Note', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var ChatAutoreplyEditCaseNotes_btn = EngReq.ChatAutoreplyEditCaseNotes.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status")).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(ChatAutoreplyEditCaseNotes_btn)).click();
        protractor_1.browser.sleep(2000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Click on Close', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var ChatAutoreplyClose_btn = EngReq.ChatAutoreplyClose.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status")).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(ChatAutoreplyClose_btn)).click();
        protractor_1.browser.sleep(4000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify record exist in Open Engagement Requests Page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name, type, AssignedTo, status1, ActionStatus1;
            console.log('i value...>', i);
            try {
                name = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name...>', name, pm.getParamH("Name"));
                type = yield protractor_1.element(protractor_1.by.xpath(EngReq.type.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type...>', type, pm.getParamH("Request_type"));
                AssignedTo = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                console.log('AssignedTo...>', AssignedTo, pm.getParamH("Assigned_to"));
                status1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();
                console.log('status...>', status1, pm.getParamH("Status"));
                ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("Does Not Exist").to.equal(pm.getParamH("Row_Exist"));
                }
                else {
                    continue;
                }
            }
            if (name == pm.getParamH("Name") && type == pm.getParamH("Request_type") && status1 == pm.getParamH("Status") && AssignedTo == pm.getParamH("Assigned_to") && ActionStatus1 == pm.getParamH("Action_Status")) {
                expect("Exist", 'Row Exist').to.equal(pm.getParamH("Row_Exist"));
            }
        }
    });
});
cucumber_1.Then('Click on Chat Auto Reply Care Extender', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var ChatAutoreplyCareExtender_button = EngReq.ChatAutoreplyCareExtender.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status").substring(0, 8)).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 6)).replace("$Assigned_to$", pm.getParamH("Assigned_to"));
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath(ChatAutoreplyCareExtender_button)).click();
        protractor_1.browser.sleep(5000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Select Chat Auto Reply Care Extender', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var CareExtenderAssignto = EngReq.CareExtenderAssignto_txt.replace("$Assigned_to$", pm.getParamH("Assign_to_Care_Extender"));
        yield EngReq.CareExtenderSelectbox.click();
        yield EngReq.CareExtenderSearch.sendKeys(pm.getParamH("Assign_to_Care_Extender").substring(0, 3));
        //base.WaitforElementPresence(element(by.xpath(CareExtenderAssignto)));
        protractor_1.browser.sleep(5000);
        yield protractor_1.element(protractor_1.by.xpath(CareExtenderAssignto)).click();
        protractor_1.browser.sleep(5000);
        //browser.sleep(2000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Chat Auto Reply Action as Mark As Addressed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name1, type1, AssignedTo1, Cstatus3, Cstatus4, Cstatus;
            try {
                name1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name1...>', name1, pm.getParamH("Name"));
                type1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.type.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type1...>', type1, pm.getParamH("Request_type"));
                AssignedTo1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                Cstatus3 = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(0, 8)))).getText();
                Cstatus4 = yield protractor_1.element(protractor_1.by.xpath(EngReq.statusConfirm.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(10)))).getText();
                Cstatus = Cstatus3 + "  " + Cstatus4;
                console.log('AssignedTo1...>', AssignedTo1, pm.getParamH("Assigned_to"));
                console.log('Cstatus...>', Cstatus, pm.getParamH("Status"));
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("no match").to.equal(null);
                }
                else {
                    continue;
                }
            }
            if (name1 == pm.getParamH("Name") && type1 == pm.getParamH("Request_type") && Cstatus == pm.getParamH("Status") && AssignedTo1 == pm.getParamH("Assigned_to")) {
                var ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
                //base.compareValues("Status", Cstatus, pm.getParamH("Status"));
                base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
                const val = base.getValue();
                expect(val ? JSON.stringify(val) : null).to.equal(null);
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
                return true;
            }
        }
    });
});
cucumber_1.Then('Click on Schedule Call Care Extender', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var SchedulecallCareExtender_btn = EngReq.SchedulecallCareExtender.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status").substring(0, 8)).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 6)).replace("$Assigned_to$", pm.getParamH("Assigned_to"));
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath(SchedulecallCareExtender_btn)).click();
        protractor_1.browser.sleep(6000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Select Schedule Call Care Extender', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var CareExtenderAssignto = EngReq.CareExtenderAssignto_txt.replace("$Assigned_to$", pm.getParamH("Assign_to_Care_Extender"));
        yield EngReq.CareExtenderSelectbox.click();
        protractor_1.browser.sleep(5000);
        yield EngReq.CareExtenderSearch.clear();
        protractor_1.browser.sleep(5000);
        yield EngReq.CareExtenderSearch.sendKeys(pm.getParamH("Assign_to_Care_Extender").substring(0, 3));
        protractor_1.browser.sleep(5000);
        yield EngReq.CareExtenderSelectbox.click();
        protractor_1.browser.sleep(5000);
        yield EngReq.CareExtenderSearch.clear();
        protractor_1.browser.sleep(5000);
        yield EngReq.CareExtenderSearch.sendKeys(pm.getParamH("Assign_to_Care_Extender").substring(0, 3));
        //browser.sleep(5000);
        //await EngReq.CareExtenderSearch.sendKeys(protractor.Key.TAB);
        //base.WaitforElementPresence(element(by.xpath(CareExtenderAssignto)));
        protractor_1.browser.sleep(6000);
        yield protractor_1.element(protractor_1.by.xpath(CareExtenderAssignto)).click();
        protractor_1.browser.sleep(5000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify the Schedule Call Action as Mark As Addressed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name1, type1, AssignedTo1, Cstatus3, Cstatus4, Cstatus;
            try {
                name1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name1...>', name1, pm.getParamH("Name"));
                type1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.type_scheduleCall.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type1...>', type1, pm.getParamH("Request_type"));
                AssignedTo1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                Cstatus3 = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(0, 8)))).getText();
                Cstatus4 = yield protractor_1.element(protractor_1.by.xpath(EngReq.statusConfirm.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(10)))).getText();
                Cstatus = Cstatus3 + "  " + Cstatus4;
                console.log('AssignedTo1...>', AssignedTo1, pm.getParamH("Assigned_to"));
                console.log('Cstatus...>', Cstatus, pm.getParamH("Status"));
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("no match").to.equal(null);
                }
                else {
                    continue;
                }
            }
            if (name1 == pm.getParamH("Name") && type1 == pm.getParamH("Request_type") && Cstatus == pm.getParamH("Status") && AssignedTo1 == pm.getParamH("Assigned_to")) {
                var ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
                //base.compareValues("Status", Cstatus, pm.getParamH("Status"));
                base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
                const val = base.getValue();
                expect(val ? JSON.stringify(val) : null).to.equal(null);
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
                return true;
            }
        }
    });
});
cucumber_1.Then('Click on accept for the Scheduled Call Request', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var SchedulecallAccept_btn = EngReq.SchedulecallAccept.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status").substring(0, 8)).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(SchedulecallAccept_btn)).click();
        protractor_1.browser.sleep(6000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Status,Action for Scheduled call Mark As Addressed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name1, type1, AssignedTo1, Cstatus3, Cstatus4, Cstatus;
            try {
                name1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name1...>', name1, pm.getParamH("Name"));
                type1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.type_scheduleCall.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type1...>', type1, pm.getParamH("Request_type"));
                AssignedTo1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                Cstatus3 = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(0, 8)))).getText();
                Cstatus4 = yield protractor_1.element(protractor_1.by.xpath(EngReq.statusConfirm.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status").substring(10)))).getText();
                Cstatus = Cstatus3 + "  " + Cstatus4;
                console.log('AssignedTo1...>', AssignedTo1, pm.getParamH("Assigned_to"));
                console.log('Cstatus...>', Cstatus, pm.getParamH("Status"));
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("no match").to.equal(null);
                }
                else {
                    continue;
                }
            }
            if (name1 == pm.getParamH("Name") && type1 == pm.getParamH("Request_type") && Cstatus == pm.getParamH("Status") && AssignedTo1 == pm.getParamH("Assigned_to")) {
                var ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
                base.compareValues("Status", Cstatus, pm.getParamH("Status"));
                base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
                const val = base.getValue();
                expect(val ? JSON.stringify(val) : null).to.equal(null);
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
                return true;
            }
        }
    });
});
cucumber_1.Then('Click on Scheduled Call Mark As Addressed', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var SchedulecallMarkAsAddressed_btn = EngReq.SchedulecallMarkAsAddressed.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status").substring(0, 8)).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(SchedulecallMarkAsAddressed_btn)).click();
        protractor_1.browser.sleep(8000);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Verify Status, Action for Scheduled call Add Case Notes', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var header = "//span[@id='support_requests_header_title']";
        var value = yield protractor_1.element(protractor_1.by.xpath(header)).getText();
        var Number1 = value.match(/\d/g).toString();
        let Num = parseInt(Number1);
        console.log('N value...>', Num);
        var index = 1;
        for (var i = 1; i <= Num; i++) {
            index = i;
            var name, type, AssignedTo, status;
            console.log('i value...>', i);
            try {
                name = yield protractor_1.element(protractor_1.by.xpath(EngReq.name.replace("$i$", i.toString()).replace("$Name$", pm.getParamH("Name")))).getText();
                console.log('name...>', name, pm.getParamH("Name"));
                type = yield protractor_1.element(protractor_1.by.xpath(EngReq.type_scheduleCall.replace("$i$", i.toString()).replace("$Request_type$", pm.getParamH("Request_type")))).getText();
                console.log('type...>', type, pm.getParamH("Request_type"));
                AssignedTo = yield protractor_1.element(protractor_1.by.xpath(EngReq.AssignedTo.replace("$i$", i.toString()).replace("$Assigned_to$", pm.getParamH("Assigned_to")))).getText();
                console.log('AssignedTo...>', AssignedTo, pm.getParamH("Assigned_to"));
                status = yield protractor_1.element(protractor_1.by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();
                console.log('status...>', status, pm.getParamH("Status"));
            }
            catch (error) {
                //  console.log('errorrr --> ', error);
                //console.log('Indexxxxxxx -> ', Num, index);
                if (index == Num) {
                    expect("no match").to.equal(null);
                }
                else {
                    continue;
                }
            }
            if (name == pm.getParamH("Name") && type == pm.getParamH("Request_type") && status == pm.getParamH("Status") && AssignedTo == pm.getParamH("Assigned_to")) {
                //var status = await element(by.xpath(EngReq.status1.replace("$i$", i.toString()).replace("$Status$", pm.getParamH("Status")))).getText();		
                var ActionStatus1 = yield protractor_1.element(protractor_1.by.xpath(EngReq.Action.replace("$i$", i.toString()).replace("$Action_Status$", pm.getParamH("Action_Status")))).getText();
                base.compareValues("Status", status, pm.getParamH("Status"));
                base.compareValues("Action_Status", ActionStatus1, pm.getParamH("Action_Status"));
                const val = base.getValue();
                expect(val ? JSON.stringify(val) : null).to.equal(null);
                const screenshot = yield protractor_1.browser.takeScreenshot();
                this.attach(screenshot, "image/png");
                return true;
            }
        }
    });
});
cucumber_1.Then('Click on Drop down button on Add Case Note', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        var SchedulecallAddCaseNoteDropdown_btn = EngReq.SchedulecallAddCaseNoteDropdown.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status")).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        yield protractor_1.element(protractor_1.by.xpath(SchedulecallAddCaseNoteDropdown_btn)).click();
        protractor_1.browser.sleep(5000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Select Close Without Case Notes', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(EngReq.SchedulecallCloseWithoutCaseNote)).click();
        protractor_1.browser.sleep(5000);
        var SchedulecallAddCaseNoteDropdown_btn = EngReq.SchedulecallAddCaseNoteDropdown.replace("$Request_type$", pm.getParamH("Request_type")).replace("$Name$", pm.getParamH("Name")).replace("$Status1$", pm.getParamH("Status")).replace("$Status2$", pm.getParamH("Status").substring(10)).replace("$Assigned_to$", pm.getParamH("Assigned_to").substring(0, 5)).replace("$Action_Status$", pm.getParamH("Action_Status"));
        if (yield protractor_1.element(protractor_1.by.xpath(SchedulecallAddCaseNoteDropdown_btn)).isPresent()) {
            yield protractor_1.element(protractor_1.by.xpath(SchedulecallAddCaseNoteDropdown_btn)).click();
            protractor_1.browser.sleep(5000);
            yield protractor_1.element(protractor_1.by.xpath(EngReq.SchedulecallCloseWithoutCaseNote)).click();
        }
        protractor_1.browser.sleep(5000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('Search for Member in the Member Search', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        protractor_1.browser.sleep(3000);
        var membName = pm.getParamH("Name");
        //  if(membName.trim()==("")) {
        // 			 membName = mmrc.getCurrentUser();
        // 		 }
        yield E2EMem.ml_search.clear();
        yield E2EMem.ml_search.sendKeys(membName);
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                protractor_1.browser.sleep(3000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('click on member in the list', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(E2EMem.ml_select_member.replace("$replaceToken$", pm.getParamH("Name")))).click();
        protractor_1.browser.sleep(3000);
        yield protractor_1.browser.getTitle().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(text).to.equal("mMR");
                //browser.sleep(5000);
            });
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on the Chat Icon in the Quick Actions', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //base.WaitforElementClickable(tags.m_tag_add);
        yield EngReq.eng_chat_icon.click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Send Text Message to the Member', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        // await EngReq.eng_chat_txtarea.sendKeys(pm.getParamH("Text"));
        // await EngReq.eng_chat_sendbtn.click();
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Click on + icon at the Chat text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await EngReq.eng_upload_icon.click();
        protractor_1.browser.sleep(6000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Send file and click on send and verify the upload', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        let filePath = pm.getParamH("file_path");
        let fpath = path.resolve(__dirname, filePath);
        //browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(1000);
        var fileElem = protractor_1.element(protractor_1.by.css('input[type="file"]'));
        fileElem.sendKeys(fpath);
        protractor_1.browser.sleep(4000);
        yield protractor_1.browser.sleep(4000);
        //await closePopup();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5nYWdlbWVudFJlcXVlc3RzVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvRW5nYWdlbWVudFJlcXVlc3RzVGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBOEQ7QUFDOUQsdUNBQW9DO0FBQ3BDLG9FQUFpRTtBQUNqRSx5REFBc0Q7QUFDdEQsc0VBQW1FO0FBQ25FLHdEQUFxRDtBQUNyRCwwRUFBdUU7QUFDdkUsZ0RBQXdCO0FBQ3hCLHVEQUFvRDtBQUNwRCw4REFBMkQ7QUFFM0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN0QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQy9CLElBQUksU0FBUyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUN2QyxJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7QUFDdEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUczQixlQUFJLENBQUMsa0NBQWtDLEVBQUUsVUFBZSxTQUFTOztRQUNoRSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sS0FBSyxDQUFDLGVBQWUsQ0FB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