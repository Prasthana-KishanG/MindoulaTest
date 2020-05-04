"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MMRLoginPage {
    constructor() {
        this.usernameEditbox = protractor_1.element(protractor_1.by.id("auth_form_username_text"));
        this.passwordEditbox = protractor_1.element(protractor_1.by.id("auth_form_password_text"));
        this.loginBtn = protractor_1.element(protractor_1.by.id("auth_form_add_btn_submit"));
        this.UserBtn = protractor_1.element(protractor_1.by.xpath("//body[@class='mmr']/mmr-root/ng-component[@class='ng-star-inserted']/div[@class='mind-nav-container']/mat-toolbar[@id='nav_toolbar_menu']/div[@class='flex nav-button-container']/div[@class='flex--align-center button-theme']/button[@id='nav_btn_user']/span[@class='mat-button-wrapper']/span[@class='down-arrow']/*"));
        this.darkmode_btn = protractor_1.element(protractor_1.by.xpath("//div[@class='slider slider-dm']"));
        this.signIn_btn = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Sign In')]"));
    }
    enterUserID() {
        this.usernameEditbox.sendKeys(protractor_1.browser.params.login.userid);
    }
    enterPassword() {
        this.passwordEditbox.sendKeys(protractor_1.browser.params.login.password);
    }
    clickLogin() {
        this.loginBtn.click();
    }
    mmrLogin() {
        this.usernameEditbox.sendKeys(protractor_1.browser.params.mmrlogin.email);
        this.passwordEditbox.sendKeys(protractor_1.browser.params.mmrlogin.pwd);
        this.loginBtn.click();
    }
}
exports.MMRLoginPage = MMRLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTU1STG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTU1STG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlFO0FBRWpFLE1BQWEsWUFBWTtJQVF2QjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJUQUEyVCxDQUFDLENBQUMsQ0FBQztRQUM5VixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFJRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFwQ0Qsb0NBb0NDIn0=