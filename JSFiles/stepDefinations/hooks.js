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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const cucumberconfig_1 = require("../cucumberconfig");
cucumber_1.BeforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    if (cucumberconfig_1.config.baseUrl == "mmr") {
        yield protractor_1.browser.get("https://mmr-staging.mindoula.com/login");
    }
    if (cucumberconfig_1.config.baseUrl == "mmrstaging2") {
        yield protractor_1.browser.get("https://mmr-staging2.mindoula.com/login");
    }
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status == cucumber_1.Status.FAILED ||
            scenario.result.status == cucumber_1.Status.PASSED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
cucumber_1.AfterAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.quit();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztBQUViLHVDQUE0RTtBQUM1RSwyQ0FBK0Q7QUFFL0Qsc0RBQTJDO0FBRTNDLG9CQUFTLENBQUMsR0FBUyxFQUFFO0lBQ25CLElBQUksdUJBQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO1FBQzNCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztLQUU3RDtJQUNELElBQUksdUJBQU0sQ0FBQyxPQUFPLElBQUksYUFBYSxFQUFFO1FBRW5DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztLQUM5RDtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFDM0IsSUFDRSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxpQkFBTSxDQUFDLE1BQU07WUFDdkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQ3ZDO1lBQ0EsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILG1CQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUMzQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9