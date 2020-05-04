
import { element, promise, browser, by, ElementFinder, By } from 'protractor';
var fs = require('fs');

	

export class MMRController {
	attach: any;

	private static  m_mmrEnv :String= "STAGE"; 
	private static  m_currentUser :string = "member test";
	private static  m_prov_lookup :string = "YES"; 
	private static  m_member1 :string = "member test1";
	private static  m_member2 :string = "member test2";
	private static  m_member_password :string = "member password";
	
	
	
	   m_failed_log:String = "";
	static m_failed_log: any;
	
	
	  getFailedLog() {
		return MMRController.m_failed_log;
	}
	
	 setFailedLog( failed_log:String) {
		MMRController.m_failed_log = failed_log;
		return;
    }
    
   getCurrentUser() {
		return browser.params.mmrlogin.setCurrentUser;
    }
    
   setCurrentUser( p_value:string) {
		browser.params.mmrlogin.setCurrentUser = p_value;
		return;
	}

	getCurrentUser2() {
		return browser.params.mmrlogin2.setCurrentUser;
    }
    
   setCurrentUser2( p_value:string) {
		browser.params.mmrlogin2.setCurrentUser = p_value;
		return;
	}

	getCurrentUser3() {
		return browser.params.mmrloginCaseM.setCurrentUser;
    }
    
   setCurrentUser3( p_value:string) {
		browser.params.mmrloginCaseM.setCurrentUser = p_value;
		return;
	}

	
    
   
  
	setProvLookUp(lookupType:string) {
		browser.params.mmrlogin.setProvLookUp = lookupType;
		return;
	}

	getProvLookUp() {
		return browser.params.mmrlogin.setProvLookUp;
	}

	getMember1Email() {
		return MMRController.m_member1;
    }
    
   setMember1Email( p_value:string) {
	MMRController.m_member1 = p_value;
		return;
	}

	getMember2Email() {
		return MMRController.m_member2;
    }
    
   setMember2Email( p_value:string) {
		MMRController.m_member2 = p_value;
		return;
	}

	getCurrentPassword() {
		return MMRController.m_member_password;
    }
    
   setCurrentPassword( p_value:string) {
	MMRController.m_member_password = p_value;
	return;
	}
	
}
	  
	