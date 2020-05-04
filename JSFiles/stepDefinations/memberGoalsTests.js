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
const memberGoals_1 = require("../pageObjects/memberGoals");
const chai_1 = __importDefault(require("chai"));
var path = require('path');
let E2EMem = new E2EMember_1.E2EMember();
let membtask = new memberTasks_1.memberTasks();
let membgoals = new memberGoals_1.memberGoals();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let pm = new ParamManager_1.ParamManager();
let mmrc = new MMRController_1.MMRController();
var pg = require("pg");
cucumber_1.Then('Verify data on goals page', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        base.compareValues('NAME', yield protractor_1.element(protractor_1.by.xpath(membgoals.m_goal_name.replace("$goalname$", pm.getParamV("NAME")))).getText(), pm.getParamV("NAME"));
        base.compareValues('IDENTIFIED_DATE', yield protractor_1.element(protractor_1.by.xpath(membgoals.m_goal_identifiedon.replace("$identifiedon$", pm.getParamV("IDENTIFIED_DATE")))).getText(), pm.getParamV("IDENTIFIED_DATE"));
        base.compareValues('STATUS', yield protractor_1.element(protractor_1.by.xpath(membgoals.m_goal_status.replace("$status$", pm.getParamV("STATUS")))).getText(), pm.getParamV("STATUS"));
        const val = base.getValue();
        expect(val ? JSON.stringify(val) : null).to.equal(null);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyR29hbHNUZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9tZW1iZXJHb2Fsc1Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFYix1Q0FBZ0M7QUFDaEMsMkNBQWlGO0FBQ2pGLHVDQUFvQztBQUNwQyx3REFBcUQ7QUFDckQsNERBQXlEO0FBQ3pELHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFDdEQsNERBQXlEO0FBRXpELGdEQUF3QjtBQUN4QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDakMsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN0QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUl2QixlQUFJLENBQUMsMkJBQTJCLEVBQUUsVUFBZ0IsU0FBUzs7UUFDMUQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkosSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNwTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFHN0osTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ1osQ0FBQztDQUFBLENBQUMsQ0FBQyJ9