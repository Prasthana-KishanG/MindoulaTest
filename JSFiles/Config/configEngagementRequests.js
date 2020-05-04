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
    //baseUrl: "mmrstaging2",
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
            email: "mmr.memb34@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB244",
            setProvLookUp: "YES"
        },
        mmrlogin2: {
            email: "mmr.memb33@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        },
        mmrloginCaseM: {
            email: "casemanager@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        }
    },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["../stepDefinations/*.js"],
        strict: true,
        tags: "@LoginToTheSite or @VerifyEngagementRequests"
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
            output: process.cwd() + "/reports/html/" + "EngagementRequests Report" + "-" + currentDate + ".html",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnRW5nYWdlbWVudFJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQ29uZmlnL2NvbmZpZ0VuZ2FnZW1lbnRSZXF1ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MsaUVBQW1EO0FBQ25ELHFDQUE4QztBQUVuQyxRQUFBLE1BQU0sR0FBVztJQUMxQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsT0FBTyxFQUFFLEtBQUs7SUFDZCx5QkFBeUI7SUFDekIsWUFBWSxFQUFFLFlBQU0sQ0FBQyxZQUFZO0lBQ2pDLHNCQUFzQixFQUFFLElBQUk7SUFFNUIsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsaUNBQWlDO0lBRWpDLFNBQVMsRUFBRTs7WUFDVCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUVyQyxNQUFNLG9CQUFPO2lCQUNWLE1BQU0sRUFBRTtpQkFDUixNQUFNLEVBQUU7aUJBQ1IsUUFBUSxFQUFFLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUQsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFO1lBQ1AsS0FBSyxFQUFFLHFCQUFxQjtZQUU3QixHQUFHLEVBQUUsVUFBVTtZQUNmLGNBQWMsRUFBRSxlQUFlO1lBQy9CLGFBQWEsRUFBRSxLQUFLO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBRVQsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixHQUFHLEVBQUUsVUFBVTtZQUNmLGNBQWMsRUFBRSxlQUFlO1lBQy9CLGFBQWEsRUFBRSxLQUFLO1NBQ3JCO1FBQ0QsYUFBYSxFQUFFO1lBRWIsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixHQUFHLEVBQUUsVUFBVTtZQUNmLGNBQWMsRUFBRSxlQUFlO1lBQy9CLGFBQWEsRUFBRSxLQUFLO1NBQ3JCO0tBQ0Y7SUFHRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLDhDQUE4QztLQUVyRDtJQUNELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLHlDQUF5QztLQUMzRDtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUNKLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0IsR0FBRywyQkFBMkIsR0FBRSxHQUFHLEdBQUcsV0FBVyxHQUFHLE9BQU87WUFDN0Ysc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQyJ9