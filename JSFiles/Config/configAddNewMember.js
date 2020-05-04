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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
const env_1 = require("../Util/env");
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    allScriptsTimeout: 20000,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    baseUrl: "mmr",
    capabilities: env_1.chrome.capabilities,
    useAllAngular2AppRoots: true,
    specs: ["../../features/*.feature"],
    //ignoreUncaughtExceptions: true,
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.ignoreSynchronization = true;
            yield protractor_1.browser
                .manage()
                .window()
                .maximize();
        });
    },
    params: {
        mmrlogin: {
            email: "casemanager@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB278",
            setProvLookUp: "YES"
        },
    },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["../stepDefinations/*.js"],
        strict: true,
        tags: "@LoginToTheSite or @RunAsNewMember"
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },
    onComplete: () => {
        let date = new Date();
        var cdate = date.toISOString().slice(0, 10);
        var time = date.getTime();
        var currentDate = cdate + "-" + time;
        var options = {
            theme: "bootstrap",
            jsonFile: "./cucumberreport.json",
            output: process.cwd() + "/reports/html/" + "Add New Member Report" + "-" + currentDate + ".html",
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                Browser: "Chrome  54.0.2840.98",
                Platform: "Windows 10",
                Parallel: "Scenarios",
                Executed: "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnQWRkTmV3TWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQ29uZmlnL2NvbmZpZ0FkZE5ld01lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MsaUVBQW1EO0FBQ25ELHFDQUE4QztBQUVuQyxRQUFBLE1BQU0sR0FBVztJQUMxQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsT0FBTyxFQUFFLEtBQUs7SUFDZCxZQUFZLEVBQUUsWUFBTSxDQUFDLFlBQVk7SUFDakMsc0JBQXNCLEVBQUUsSUFBSTtJQUU1QixLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUNuQyxpQ0FBaUM7SUFFakMsU0FBUyxFQUFFOztZQUNULG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBRXJDLE1BQU0sb0JBQU87aUJBQ1YsTUFBTSxFQUFFO2lCQUNSLE1BQU0sRUFBRTtpQkFDUixRQUFRLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsY0FBYyxFQUFFLGVBQWU7WUFDL0IsYUFBYSxFQUFFLEtBQUs7U0FDckI7S0FFRjtJQUdELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUsb0NBQW9DO0tBRTNDO0lBQ0Qsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMseUNBQXlDO0tBQzNEO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksSUFBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksV0FBVyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQ0osT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLGdCQUFnQixHQUFHLHVCQUF1QixHQUFFLEdBQUcsR0FBRyxXQUFXLEdBQUcsT0FBTztZQUN6RixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsUUFBUTthQUNuQjtTQUNGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFDIn0=