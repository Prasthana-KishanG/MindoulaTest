"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chrome = {
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
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
exports.firefox = {
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'firefox'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
    },
    shardTestFiles: true,
    maxInstances: 1,
    requireWindowFocus: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbC9lbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDVyxRQUFBLE1BQU0sR0FBRztJQUNsQix1REFBdUQ7SUFFdkQsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUNULENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUM7UUFDL0MsU0FBUyxFQUNMLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsSUFBSSxLQUFLLENBQUM7S0FFaEQ7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUMxQixLQUFLLEVBQUU7WUFDTCw0QkFBNEIsRUFBRSxLQUFLO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCwwQkFBMEIsRUFBRSxLQUFLO2FBQ2xDO1NBQ0Y7S0FDRjtJQUNELGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFlBQVksRUFBRSxDQUFDO0lBQ2Ysa0JBQWtCLEVBQUUsS0FBSztDQUV6QixDQUFDO0FBQ1MsUUFBQSxPQUFPLEdBQUc7SUFDcEIsdURBQXVEO0lBRXZELFlBQVksRUFBRTtRQUNaLGFBQWEsRUFDVCxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksU0FBUyxDQUFDO1FBQ2hELFNBQVMsRUFDTCxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUksS0FBSyxDQUFDO0tBQ2hEO0lBQ0QsY0FBYyxFQUFFLElBQUk7SUFDcEIsWUFBWSxFQUFFLENBQUM7SUFDZixrQkFBa0IsRUFBRSxLQUFLO0NBRXpCLENBQUMifQ==