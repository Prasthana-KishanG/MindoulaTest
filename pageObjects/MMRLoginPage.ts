import { ElementFinder, element, by, browser } from "protractor";

export class MMRLoginPage {
  usernameEditbox: ElementFinder;
  passwordEditbox: ElementFinder;
  loginBtn: ElementFinder;
  UserBtn: ElementFinder;
  darkmode_btn: ElementFinder;
  signIn_btn: ElementFinder;

  constructor() {
    this.usernameEditbox = element(by.id("auth_form_username_text"));
    this.passwordEditbox = element(by.id("auth_form_password_text"));
    this.loginBtn = element(by.id("auth_form_add_btn_submit"));
    this.UserBtn = element(by.xpath("//body[@class='mmr']/mmr-root/ng-component[@class='ng-star-inserted']/div[@class='mind-nav-container']/mat-toolbar[@id='nav_toolbar_menu']/div[@class='flex nav-button-container']/div[@class='flex--align-center button-theme']/button[@id='nav_btn_user']/span[@class='mat-button-wrapper']/span[@class='down-arrow']/*"));
    this.darkmode_btn = element(by.xpath("//div[@class='slider slider-dm']"));
    this.signIn_btn = element(by.xpath("//button[contains(.,'Sign In')]"));
  }



  enterUserID() {
    this.usernameEditbox.sendKeys(browser.params.login.userid);
  }

  enterPassword() {
    this.passwordEditbox.sendKeys(browser.params.login.password);
  }

  clickLogin() {
    this.loginBtn.click();
  }

  mmrLogin() {
    this.usernameEditbox.sendKeys(browser.params.mmrlogin.email);
    this.passwordEditbox.sendKeys(browser.params.mmrlogin.pwd);
    this.loginBtn.click();
  }
}
