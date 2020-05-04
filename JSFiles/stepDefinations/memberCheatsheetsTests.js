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
const ParamManager_1 = require("../Util/ParamManager");
const MMRController_1 = require("../Util/MMRController");
const memberGoals_1 = require("../pageObjects/memberGoals");
const chai_1 = __importDefault(require("chai"));
const memberCheatsheets_1 = require("../pageObjects/memberCheatsheets");
var path = require('path');
let E2EMem = new E2EMember_1.E2EMember();
let membcsheet = new memberCheatsheets_1.memberCheatsheets();
let membgoals = new memberGoals_1.memberGoals();
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let pm = new ParamManager_1.ParamManager();
let mmrc = new MMRController_1.MMRController();
var pg = require("pg");
cucumber_1.Then('click on Edit in Physical Description', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        protractor_1.browser.actions().mouseMove(yield protractor_1.element(protractor_1.by.xpath(membcsheet.m_cs_cheatsheettype.replace("$type$", pm.getParamV("TYPE"))))).perform();
        protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath(membcsheet.m_cs_cheatsheet_edit.replace("$type$", pm.getParamV("TYPE")))).click();
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(4000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyQ2hlYXRzaGVldHNUZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9tZW1iZXJDaGVhdHNoZWV0c1Rlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFYix1Q0FBZ0M7QUFDaEMsMkNBQWlGO0FBQ2pGLHVDQUFvQztBQUNwQyx3REFBcUQ7QUFFckQsdURBQW9EO0FBQ3BELHlEQUFzRDtBQUN0RCw0REFBeUQ7QUFFekQsZ0RBQXdCO0FBQ3hCLHdFQUFxRTtBQUNyRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0FBQ3pDLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFJdkIsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLFVBQWdCLFNBQVM7O1FBQ3JFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUIsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JJLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekcsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9