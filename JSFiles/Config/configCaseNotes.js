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
            setCurrentUser: "MMR A MEMB122",
            setProvLookUp: "YES"
        },
        mmrlogin2: {
            email: "mmr.membX2@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB74",
            setProvLookUp: "YES"
        },
        mmrloginCaseM: {
            email: "abccase@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        }
    },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["../stepDefinations/*.js"],
        strict: true,
        tags: "@LoginToTheSite or @DarkmodeToTheSite or @RunAsNewMember or @VerifyMemberCaseNotes"
        //tags: "@LoginToTheSite or @DarkmodeToTheSite or @RunAsExistingMember or @VerifyMemberCaseNotes"
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
            output: process.cwd() + "/reports/html/" + "Member Case Notes Report" + "-" + currentDate + ".html",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnQ2FzZU5vdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQ29uZmlnL2NvbmZpZ0Nhc2VOb3Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MsaUVBQW1EO0FBQ25ELHFDQUE4QztBQUVuQyxRQUFBLE1BQU0sR0FBVztJQUMxQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsT0FBTyxFQUFFLEtBQUs7SUFDZCxZQUFZLEVBQUUsWUFBTSxDQUFDLFlBQVk7SUFDakMsc0JBQXNCLEVBQUUsSUFBSTtJQUU1QixLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUNuQyxpQ0FBaUM7SUFFakMsU0FBUyxFQUFFOztZQUNULG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBRXJDLE1BQU0sb0JBQU87aUJBQ1YsTUFBTSxFQUFFO2lCQUNSLE1BQU0sRUFBRTtpQkFDUixRQUFRLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsY0FBYyxFQUFFLGVBQWU7WUFDL0IsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUFDRCxTQUFTLEVBQUU7WUFFVCxLQUFLLEVBQUUscUJBQXFCO1lBQzVCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsY0FBYyxFQUFFLGNBQWM7WUFDOUIsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUFDRCxhQUFhLEVBQUU7WUFFYixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsY0FBYyxFQUFFLGVBQWU7WUFDL0IsYUFBYSxFQUFFLEtBQUs7U0FDckI7S0FDRjtJQUdELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUsb0ZBQW9GO1FBQzFGLGlHQUFpRztLQUVsRztJQUNELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLHlDQUF5QztLQUMzRDtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUNKLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0IsR0FBRywwQkFBMEIsR0FBRSxHQUFHLEdBQUcsV0FBVyxHQUFHLE9BQU87WUFDNUYsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQyJ9