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
            //email: "consultant@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB126",
            setProvLookUp: "YES"
        },
    },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["../stepDefinations/*.js"],
        strict: true,
        tags: "@LoginToTheSite or @RunAsNewMember or @VerifyMemberTasks"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberTasks"
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
            output: 
            //process.cwd() + "/reports/html/" + "Add New Member Report"+ "-" + currentDate + ".html",
            process.cwd() + "/reports/html/" + "Member Tasks Report" + "-" + currentDate + ".html",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnVGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9Db25maWcvY29uZmlnVGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZDO0FBQzdDLGlFQUFtRDtBQUNuRCxxQ0FBOEM7QUFFbkMsUUFBQSxNQUFNLEdBQVc7SUFDMUIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELE9BQU8sRUFBRSxLQUFLO0lBQ2QsWUFBWSxFQUFFLFlBQU0sQ0FBQyxZQUFZO0lBQ2pDLHNCQUFzQixFQUFFLElBQUk7SUFFNUIsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsaUNBQWlDO0lBRWpDLFNBQVMsRUFBRTs7WUFDVCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUVyQyxNQUFNLG9CQUFPO2lCQUNWLE1BQU0sRUFBRTtpQkFDUixNQUFNLEVBQUU7aUJBQ1IsUUFBUSxFQUFFLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUQsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QiwrQkFBK0I7WUFDL0IsR0FBRyxFQUFFLFVBQVU7WUFDZixjQUFjLEVBQUUsZUFBZTtZQUMvQixhQUFhLEVBQUUsS0FBSztTQUNyQjtLQUVGO0lBR0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztRQUNwQyxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSwwREFBMEQ7UUFDaEUsdUVBQXVFO0tBRXhFO0lBQ0Qsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMseUNBQXlDO0tBQzNEO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksSUFBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksV0FBVyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNO1lBQ0osMEZBQTBGO1lBQzFGLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0IsR0FBRyxxQkFBcUIsR0FBRSxHQUFHLEdBQUcsV0FBVyxHQUFHLE9BQU87WUFDdkYsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQyJ9