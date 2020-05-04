
export let chrome = {
  // Capabilities to be passed to the webdriver instance.
  
  capabilities: {
    'browserName':
        (process.env.TEST_BROWSER_NAME || 'chrome'),
    'version':
        (process.env.TEST_BROWSER_VERSION || 'ANY')
        
  },
  chromeOptions: {
    args: ['disable-infobars'],
    prefs: {
      'credentials_enable_service': false,
      'profile': {
        'password_manager_enabled': false
      }
    }
  },
  shardTestFiles: true,
  maxInstances: 1,
  requireWindowFocus: false

 };
 export let firefox = {
  // Capabilities to be passed to the webdriver instance.
  
  capabilities: {
    'browserName':
        (process.env.TEST_BROWSER_NAME || 'firefox'),
    'version':
        (process.env.TEST_BROWSER_VERSION || 'ANY')
  },
  shardTestFiles: true,
  maxInstances: 1,
  requireWindowFocus: false

 };

 
 
 
 