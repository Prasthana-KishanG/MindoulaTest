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
const env_1 = require("./Util/env");
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
    specs: ["../features/*.feature"],
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
            //email: "programco@mind.com",
            //email: "consultant@mind.com",
            //email: "mmr.membX1@mind.com",
            //email: "mmr.memb243@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB167",
            setProvLookUp: "YES"
        },
        mmrlogin2: {
            email: "mmr.membX2@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        },
        mmrloginCaseM: {
            email: "abccase@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        }
    },
    // params: {
    //   mmrlogin: {
    //     email: "mmr.memb130@mind.com",
    //     pwd: "Test@123",
    //     setCurrentUser: "MMR A MEMB130",
    //     setProvLookUp: "YES"
    //   }
    // },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["./stepDefinations/*.js"],
        strict: true,
        //tags: "@LoginToTheSite or @RunAsNewMember or @VerifyAllAssessments"
        //tags: "@LoginToTheSite or @RunAsExistingMember "
        //tags: "@LoginToTheSite or @RunAsNewMember or @VerifyM3BranchingLogic" 
        //tags: "@LoginToTheSite or @RunAsNewMember"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyAllAssessments"
        //tags: "@LoginToTheSite or @DarkmodeToTheSite or @RunAsNewMember or @VerifyMemberCaseNotes"
        //tags: "@LoginToTheSite or @RunAsNewMember or @test"
        tags: "@LoginToTheSite or @RunAsExistingMember or @E2E_Member"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberCaseNotes"
        //tags: "@LoginToTheSite  or @VerifyAllAssessmentsInMembPlatform"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberConsults"
        //tags: "@LoginToTheSite or @DarkmodeToTheSite or @RunAsNewMember or @E2E_Member"
        //tags: "@LoginToTheSite or @VerifyEngagementRequests"
        //tags: "@LoginToTheSite or @VerifyFilters"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberTags" 
        //tags: "@LoginToTheSite or @memberlaneStatusChanges" 
        //tags: "@LoginToTheSite or @VerifyAddFilterPracticeProviders" 
        //tags: "@LoginToTheSite or @RunAsExistingMember or @ResetPassword"
        //tags: "@LoginToTheSite or @RunAsNewMember or @ResetPassword or @VerifyAllAssessmentsInMembPlatform"
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
            output: process.cwd() + "/reports/html/" + currentDate + "cucumber_report.html",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MsaUVBQW1EO0FBQ25ELG9DQUE2QztBQUVsQyxRQUFBLE1BQU0sR0FBVztJQUMxQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsT0FBTyxFQUFFLEtBQUs7SUFDZCx5QkFBeUI7SUFDekIsWUFBWSxFQUFFLFlBQU0sQ0FBQyxZQUFZO0lBQ2pDLHNCQUFzQixFQUFFLElBQUk7SUFFNUIsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDaEMsaUNBQWlDO0lBRWpDLFNBQVMsRUFBRTs7WUFDVCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUVyQyxNQUFNLG9CQUFPO2lCQUNWLE1BQU0sRUFBRTtpQkFDUixNQUFNLEVBQUU7aUJBQ1IsUUFBUSxFQUFFLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUQsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLHNCQUFzQjtZQUM3Qiw4QkFBOEI7WUFDOUIsK0JBQStCO1lBQy9CLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFFaEMsR0FBRyxFQUFFLFVBQVU7WUFDZixjQUFjLEVBQUUsZUFBZTtZQUMvQixhQUFhLEVBQUUsS0FBSztTQUNyQjtRQUNELFNBQVMsRUFBRTtZQUVULEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsR0FBRyxFQUFFLFVBQVU7WUFDZixjQUFjLEVBQUUsZUFBZTtZQUM5QixhQUFhLEVBQUUsS0FBSztTQUN0QjtRQUNELGFBQWEsRUFBRTtZQUViLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsR0FBRyxFQUFFLFVBQVU7WUFDZixjQUFjLEVBQUUsZUFBZTtZQUMvQixhQUFhLEVBQUUsS0FBSztTQUNyQjtLQUNGO0lBSUQsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QywyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLEtBQUs7SUFFTCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ25DLE1BQU0sRUFBRSxJQUFJO1FBQ1oscUVBQXFFO1FBQ3JFLGtEQUFrRDtRQUNsRCx3RUFBd0U7UUFDeEUsNENBQTRDO1FBQzVDLDBFQUEwRTtRQUMxRSw0RkFBNEY7UUFDNUYscURBQXFEO1FBQ3JELElBQUksRUFBRSx3REFBd0Q7UUFDOUQsMkVBQTJFO1FBQzNFLGlFQUFpRTtRQUNqRSwwRUFBMEU7UUFDMUUsaUZBQWlGO1FBQ2pGLHNEQUFzRDtRQUN0RCwyQ0FBMkM7UUFDM0MsdUVBQXVFO1FBQ3ZFLHNEQUFzRDtRQUN0RCwrREFBK0Q7UUFDL0QsbUVBQW1FO1FBQ25FLHFHQUFxRztLQUN0RztJQUNELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLHlDQUF5QztLQUMzRDtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUNKLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsc0JBQXNCO1lBQ3pFLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNSLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUMifQ==