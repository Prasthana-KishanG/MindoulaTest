"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var fs = require('fs');
class MMRController {
    constructor() {
        this.m_failed_log = "";
    }
    getFailedLog() {
        return MMRController.m_failed_log;
    }
    setFailedLog(failed_log) {
        MMRController.m_failed_log = failed_log;
        return;
    }
    getCurrentUser() {
        return protractor_1.browser.params.mmrlogin.setCurrentUser;
    }
    setCurrentUser(p_value) {
        protractor_1.browser.params.mmrlogin.setCurrentUser = p_value;
        return;
    }
    getCurrentUser2() {
        return protractor_1.browser.params.mmrlogin2.setCurrentUser;
    }
    setCurrentUser2(p_value) {
        protractor_1.browser.params.mmrlogin2.setCurrentUser = p_value;
        return;
    }
    getCurrentUser3() {
        return protractor_1.browser.params.mmrloginCaseM.setCurrentUser;
    }
    setCurrentUser3(p_value) {
        protractor_1.browser.params.mmrloginCaseM.setCurrentUser = p_value;
        return;
    }
    setProvLookUp(lookupType) {
        protractor_1.browser.params.mmrlogin.setProvLookUp = lookupType;
        return;
    }
    getProvLookUp() {
        return protractor_1.browser.params.mmrlogin.setProvLookUp;
    }
    getMember1Email() {
        return MMRController.m_member1;
    }
    setMember1Email(p_value) {
        MMRController.m_member1 = p_value;
        return;
    }
    getMember2Email() {
        return MMRController.m_member2;
    }
    setMember2Email(p_value) {
        MMRController.m_member2 = p_value;
        return;
    }
    getCurrentPassword() {
        return MMRController.m_member_password;
    }
    setCurrentPassword(p_value) {
        MMRController.m_member_password = p_value;
        return;
    }
}
exports.MMRController = MMRController;
MMRController.m_mmrEnv = "STAGE";
MMRController.m_currentUser = "member test";
MMRController.m_prov_lookup = "YES";
MMRController.m_member1 = "member test1";
MMRController.m_member2 = "member test2";
MMRController.m_member_password = "member password";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTU1SQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWwvTU1SQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUE4RTtBQUM5RSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFJdkIsTUFBYSxhQUFhO0lBQTFCO1FBWUksaUJBQVksR0FBVSxFQUFFLENBQUM7SUFnRjdCLENBQUM7SUE1RUUsWUFBWTtRQUNiLE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUEsWUFBWSxDQUFFLFVBQWlCO1FBQy9CLGFBQWEsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQ3hDLE9BQU87SUFDTCxDQUFDO0lBRUYsY0FBYztRQUNmLE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztJQUM1QyxDQUFDO0lBRUYsY0FBYyxDQUFFLE9BQWM7UUFDL0Isb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDakQsT0FBTztJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFFRixlQUFlLENBQUUsT0FBYztRQUNoQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUNsRCxPQUFPO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLG9CQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDakQsQ0FBQztJQUVGLGVBQWUsQ0FBRSxPQUFjO1FBQ2hDLG9CQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ3RELE9BQU87SUFDUixDQUFDO0lBTUQsYUFBYSxDQUFDLFVBQWlCO1FBQzlCLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1FBQ25ELE9BQU87SUFDUixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUYsZUFBZSxDQUFFLE9BQWM7UUFDakMsYUFBYSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDakMsT0FBTztJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRixlQUFlLENBQUUsT0FBYztRQUNoQyxhQUFhLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxPQUFPO0lBQ1IsQ0FBQztJQUVELGtCQUFrQjtRQUNqQixPQUFPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUNyQyxDQUFDO0lBRUYsa0JBQWtCLENBQUUsT0FBYztRQUNwQyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1FBQzFDLE9BQU87SUFDUCxDQUFDOztBQTFGRixzQ0E0RkM7QUF6RmdCLHNCQUFRLEdBQVUsT0FBTyxDQUFDO0FBQzFCLDJCQUFhLEdBQVcsYUFBYSxDQUFDO0FBQ3RDLDJCQUFhLEdBQVcsS0FBSyxDQUFDO0FBQzlCLHVCQUFTLEdBQVcsY0FBYyxDQUFDO0FBQ25DLHVCQUFTLEdBQVcsY0FBYyxDQUFDO0FBQ25DLCtCQUFpQixHQUFXLGlCQUFpQixDQUFDIn0=