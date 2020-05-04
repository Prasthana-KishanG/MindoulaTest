import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter";
import { chrome, firefox } from "../Util/env";

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  allScriptsTimeout: 20000,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  baseUrl: "mmr",
  capabilities: chrome.capabilities,
  useAllAngular2AppRoots: true,

  specs: ["../../features/*.feature"],
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
      email: "consultant@mind.com",
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
    tags: "@LoginToTheSite or @VerifyPsychiatricConsultantUI"
        
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
        //process.cwd() + "/reports/html/" + "Add New Member Report"+ "-" + currentDate + ".html",
        process.cwd() + "/reports/html/" + "Psychiatric Consultant UI Report"+ "-" + currentDate + ".html",
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
