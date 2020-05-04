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
            email: "programmanager@mind.com",
            //email: "consultant@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB274",
            setProvLookUp: "YES"
        },
    },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["../stepDefinations/*.js"],
        strict: true,
        //tags: "@LoginToTheSite or @RunAsNewMember or @VerifyMemberTasks"
        tags: "@LoginToTheSite or @VerifyProgramManagerUI"
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
            process.cwd() + "/reports/html/" + "Program Manager UI Report" + "-" + currentDate + ".html",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnUHJvZ3JhbU1hbmFnZXJVSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbmZpZy9jb25maWdQcm9ncmFtTWFuYWdlclVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE2QztBQUM3QyxpRUFBbUQ7QUFDbkQscUNBQThDO0FBRW5DLFFBQUEsTUFBTSxHQUFXO0lBQzFCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFDbkIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxPQUFPLEVBQUUsS0FBSztJQUNkLFlBQVksRUFBRSxZQUFNLENBQUMsWUFBWTtJQUNqQyxzQkFBc0IsRUFBRSxJQUFJO0lBRTVCLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBQ25DLGlDQUFpQztJQUVqQyxTQUFTLEVBQUU7O1lBQ1Qsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFFckMsTUFBTSxvQkFBTztpQkFDVixNQUFNLEVBQUU7aUJBQ1IsTUFBTSxFQUFFO2lCQUNSLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxVQUFVO1lBQ2YsY0FBYyxFQUFFLGVBQWU7WUFDL0IsYUFBYSxFQUFFLEtBQUs7U0FDckI7S0FFRjtJQUdELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFDWixrRUFBa0U7UUFDbEUsSUFBSSxFQUFFLDRDQUE0QztLQUVuRDtJQUNELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLHlDQUF5QztLQUMzRDtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTTtZQUNKLDBGQUEwRjtZQUMxRixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsZ0JBQWdCLEdBQUcsMkJBQTJCLEdBQUUsR0FBRyxHQUFHLFdBQVcsR0FBRyxPQUFPO1lBQzdGLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNSLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUMifQ==