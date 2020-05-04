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
const MMRController_1 = require("../Util/MMRController");
const memberlane_StatusChanges_1 = require("../pageObjects/memberlane_StatusChanges");
const chai_1 = __importDefault(require("chai"));
const ParamManager_1 = require("../Util/ParamManager");
let base = new Base_1.Base();
var expect = chai_1.default.expect;
let mmrc = new MMRController_1.MMRController();
let pm = new ParamManager_1.ParamManager();
let memberlanestatus = new memberlane_StatusChanges_1.memberlane_StatusChanges();
cucumber_1.Then('click on member view', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        yield protractor_1.element(protractor_1.by.xpath(memberlanestatus.ml_membView.replace("$replaceToken$", pm.getParamV("VIEW")))).click();
        protractor_1.browser.sleep(3000);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            //browser.sleep(3000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('change member status', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var membStr = yield (protractor_1.element(protractor_1.by.xpath(memberlanestatus.ml_memberCardLane.replace("$name$", mmrc.getCurrentUser()).replace(" A ", " ").replace("$replaceToken$", pm.getParamV("from_status")).replace(" ", "  "))));
        var targetStr = yield (protractor_1.element(protractor_1.by.xpath(memberlanestatus.ml_targetLane.replace("$replaceToken$", pm.getParamV("to_status")))));
        base.dragAndDrop(membStr, targetStr);
        yield protractor_1.browser.getTitle().then(function (text) {
            expect(text).to.equal("mMR");
            protractor_1.browser.sleep(6000);
        });
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
cucumber_1.Then('verify presence of member card', function (dataTable) {
    return __awaiter(this, void 0, void 0, function* () {
        pm.dataTableV(dataTable);
        var membStr = protractor_1.element(protractor_1.by.xpath(memberlanestatus.ml_memberCardLane.replace("$name$", mmrc.getCurrentUser()).replace(" A ", " ").replace("$replaceToken$", pm.getParamV("LANE_TO_VERIFY")).replace(" ", "  ")));
        var presence = "NO";
        if (!membStr.isPresent) {
            presence = "YES";
        }
        if (presence != pm.getParamV("PRESENCE")) {
            protractor_1.browser.sleep(2000);
            if (membStr.isPresent) {
                presence = "YES";
            }
        }
        expect(presence, "Presence for Status " + pm.getParamV("LANE_TO_VERIFY")).to.equal(pm.getParamV("PRESENCE"));
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
        // base.compareValues("Presence for Status " + pm.getParamV("LANE_TO_VERIFY"), presence , pm.getParamV("PRESENCE"));
        // const val = base.getValue();
        // expect(val ? JSON.stringify(val) : null).to.equal(null);
        // const screenshot = await browser.takeScreenshot();
        // this.attach(screenshot, "image/png");
        // return true;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVybGFuZV9TdGF0dXNDaGFuZ2VzVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbWVtYmVybGFuZV9TdGF0dXNDaGFuZ2VzVGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQUViLHVDQUFnQztBQUNoQywyQ0FBa0Q7QUFDbEQsdUNBQW9DO0FBQ3BDLHlEQUFzRDtBQUN0RCxzRkFBbUY7QUFDbkYsZ0RBQXdCO0FBQ3hCLHVEQUFvRDtBQUVwRCxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3RCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7QUFHdEQsZUFBSSxDQUFDLHNCQUFzQixFQUFFLFVBQWdCLFNBQVM7O1FBQ3JELEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNHLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLHNCQUFz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