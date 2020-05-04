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
const E2EMember_1 = require("../pageObjects/E2EMember");
const memberTasks_1 = require("../pageObjects/memberTasks");
const ParamManager_1 = require("../Util/ParamManager");
const MMRController_1 = require("../Util/MMRController");
const chai_1 = __importDefault(require("chai"));
var path = require('path');
let E2EMem = new E2EMember_1.E2EMember();
let membtask = new memberTasks_1.memberTasks();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let pm = new ParamManager_1.ParamManager();
let mmrc = new MMRController_1.MMRController();
var pg = require("pg");
cucumber_1.Then('Enter Data in Tasks Page1', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableH(dataTable);
        yield E2EMem.m_task_type.click();
        protractor_1.browser.sleep(2000);
        var m_task_type_dropdown = E2EMem.m_task_type_dropdown_str.replace("$type$", pm.getParamH("Type"));
        protractor_1.browser.sleep(3000);
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_type_dropdown)));
        yield protractor_1.element(protractor_1.by.xpath(m_task_type_dropdown)).click();
        yield E2EMem.m_task_careextender.click();
        protractor_1.browser.sleep(3000);
        var m_task_careextender_dropdown = E2EMem.m_task_careextender_dropdown_str.replace("$careextender$", pm.getParamH("CareExtender"));
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_careextender_dropdown)));
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath(m_task_careextender_dropdown)).click();
        yield membtask.m_task_assessmenttype.click();
        protractor_1.browser.sleep(2000);
        var m_task_assessmenttypedrp = membtask.m_task_assessmenttypedrp_str.replace("$assessmenttype$", pm.getParamH("Assessment_Type"));
        protractor_1.browser.sleep(3000);
        base.WaitforElementPresence(protractor_1.element(protractor_1.by.xpath(m_task_assessmenttypedrp)));
        yield protractor_1.element(protractor_1.by.xpath(m_task_assessmenttypedrp)).click();
        base.setInputField(E2EMem.m_task_description, pm.getParamH("Description"));
        base.setDateField(E2EMem.m_task_goaldate, pm.getParamH("goalDate"));
        yield E2EMem.m_task_save.click();
        base.UrlContains("tasks");
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(20000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Created Tasks', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues('Reminder', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Reminder"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Reminder"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Reminder"))).getText()), pm.getParamV("Upcoming_Task1"));
        base.compareValues('Case Note Follow Up', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Case Note Follow Up"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Case Note Follow Up"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Case Note Follow Up"))).getText()), pm.getParamV("Upcoming_Task2"));
        base.compareValues('Documentation', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Documentation"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Documentation"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Documentation"))).getText()), pm.getParamV("Upcoming_Task3"));
        base.compareValues('Case Note Follow Up', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Case Note Follow Up"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Case Note Follow Up"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Case Note Follow Up"))).getText()), pm.getParamV("Upcoming_Task4"));
        base.compareValues('Intake Case Review', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Intake Case Review"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Intake Case Review"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Intake Case Review"))).getText()), pm.getParamV("Upcoming_Task5"));
        base.compareValues('Intake Consult', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Intake Consult"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Intake Consult"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Intake Consult"))).getText()), pm.getParamV("Upcoming_Task6"));
        base.compareValues('Scheduling', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Scheduling"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Scheduling"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Scheduling"))).getText()), pm.getParamV("Upcoming_Task7"));
        base.compareValues('Other', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Other"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Other"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Other"))).getText()), pm.getParamV("Upcoming_Task8"));
        base.compareValues('Assessment', (yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", "Assessment"))).getText()) + ',' + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal.replace("$assessmenttype$", "Assessment"))).getText()) + (yield protractor_1.element(protractor_1.by.xpath(membtask.task_goal_date.replace("$assessmenttype$", "Assessment"))).getText()), pm.getParamV("Upcoming_Task9"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
cucumber_1.Then('click on Completed in Upcoming Tasks', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(membtask.task_type.replace("$assessmenttype$", pm.getParamV("Upcoming_Task"))))).perform();
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath(membtask.task_action_completed.replace("$assessmenttype$", pm.getParamV("Upcoming_Task")))).click();
        protractor_1.browser.sleep(35000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('Verify Completed Tasks', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var task_type = protractor_1.element(protractor_1.by.xpath(membtask.task_action_status.replace("$replaceToken$", pm.getParamV("Type"))));
        var presence = "NO";
        if (task_type.isPresent) {
            presence = "YES";
        }
        expect(presence, "Presence for Status " + pm.getParamV("Type")).to.equal(pm.getParamV("PRESENCE"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyVGFza1Rlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL21lbWJlclRhc2tUZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRWIsdUNBQWdDO0FBQ2hDLDJDQUFpRjtBQUNqRix1Q0FBb0M7QUFDcEMsd0RBQXFEO0FBQ3JELDREQUF5RDtBQUN6RCx1REFBb0Q7QUFDcEQseURBQXNEO0FBRXRELGdEQUF3QjtBQUN4QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN0QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUt2QixlQUFJLENBQUMsMkJBQTJCLEVBQUUsVUFBZ0IsU0FBUzs7UUFDMUQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEcsb0JBQU8sQ0FBQyxL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QyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBLElBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDdlcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBLElBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDblYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFD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