import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter";
import { chrome, firefox } from "./Util/env";

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  allScriptsTimeout: 20000,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  baseUrl: "mmr",
  //baseUrl: "mmrstaging2",
  capabilities: chrome.capabilities,
  useAllAngular2AppRoots: true,

  specs: ["../features/*.feature"],
  //ignoreUncaughtExceptions: true,

  onPrepare: async function() {
    browser.ignoreSynchronization = true;

    await browser
      .manage()
      .window()
      .maximize();
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
    let date: Date = new Date();
    var cdate = date.toISOString().slice(0, 10);
    var time = date.getTime();
    var currentDate = cdate + "-" + time;
    var options = {
      theme: "bootstrap",
      jsonFile: "./cucumberreport.json",
      output:
        process.cwd() + "/reports/html/" + currentDate + "cucumber_report.html",
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
