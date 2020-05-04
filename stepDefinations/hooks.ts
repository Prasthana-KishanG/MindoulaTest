"use strict";

import { After, Before, Status, BeforeAll, AfterAll, When } from "cucumber";
import { browser, protractor, Capabilities } from "protractor";

import { config } from "../cucumberconfig";

BeforeAll(async () => {
  if (config.baseUrl == "mmr") {
    await browser.get("https://mmr-staging.mindoula.com/login");
    
  }
  if (config.baseUrl == "mmrstaging2") {
   
    await browser.get("https://mmr-staging2.mindoula.com/login");
  }
});

After(async function(scenario) {
  if (
    scenario.result.status == Status.FAILED ||
    scenario.result.status == Status.PASSED
  ) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  await browser.quit();
});
