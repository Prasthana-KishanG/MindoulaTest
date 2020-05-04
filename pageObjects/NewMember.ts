import { ElementFinder,element,by, browser } from "protractor";
     
export class NewMember
{
    ml_addMember:ElementFinder
    am_fname:ElementFinder
    am_mname:ElementFinder
    am_lname:ElementFinder
    am_dob:any
    am_mobile:ElementFinder
    am_email:ElementFinder
    am_address:ElementFinder
    am_address_select:ElementFinder
    am_hphone:ElementFinder
    am_ophone:ElementFinder
    am_gender:ElementFinder
    am_bob:any
    m_referral_type:any
    m_referral_type_dropdown:any
    m_referral_ref_type_dropdown:any
    gender:any
    marital_status:any
    am_gender_dropdown_str:any
    am_marital_status_dropdown_str:any
    am_submit:ElementFinder
    m_addProgram:ElementFinder
    ap_radio_add_type:any
    ap_EMR_ID:ElementFinder
    ap_medica_ID:ElementFinder
    ap_alternate_identifier:ElementFinder
    ap_provider:any
    ap_provider_dropdown:any
    ap_identified_on:any
    ap_status:any
    ap_status_dropdown:any
    ap_ins_note:any
    ap_save:any
    ap_program:any
    ap_program_dropdown:any
    ap_practice:any
    ap_practice_dropdown:any
    m_ct_Add:any
    m_ct_role:any
    m_ct_role_dropdown_str:any
    m_ct_member:any
    m_ct_member_dropdown_str:any
    m_ct_from_date:any
    m_ct_to_date:any
    m_ct_primary:any
    m_ct_save:any
    m_nm_selectaddress: ElementFinder;
    m_nm_useaddress: ElementFinder;

    constructor()
    {
        this.ml_addMember=element(by.xpath("//button[@id='member_action_button']"));
        this.am_fname=element(by.id("member_firstname_text"));
        this.am_mname=element(by.id("member_middle_text"));
        this.am_lname=element(by.id("member_lastname_text"));
        this.am_dob=element(by.id("member_dateofbirth_text"));
        this.am_mobile=element(by.id("member_mobile_text"));
        this.am_email=element(by.id("member_email_text"));
        this.am_address=element(by.xpath("//input[@placeholder='Enter a location']"));
        this.am_address_select=element(by.xpath("/*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]"));
        this.am_hphone=element(by.id("member_home_number_text"));
        this.am_ophone=element(by.id("member_office_number_text"));
        this.am_submit=element(by.id("member_btn_submit"));
        
        this.am_gender=element(by.xpath("//label[@id='mat-form-field-label-27']"));
        this.am_bob=element(by.xpath("//input[@formcontrolname='birthDate']"));
        this.m_referral_type=element(by.xpath("//mat-select[contains(@aria-label,'Type of Referral')]//parent::div[@class='mat-form-field-infix']")); 
	    this.m_referral_type_dropdown=element(by.xpath("//span[@class='mat-option-text' and text()='$replaceToken$']"));
        this.m_referral_ref_type_dropdown=element(by.xpath("//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]"));
        //this.gender="//mmr-single-select[@id='add-member-gender-select']/mat-form-field//div[@class='mat-form-field-infix']";
        this.gender="//mmr-single-select[@class='input-with-icon'][contains(.,'Gender *')]";
        //this.marital_status="//mmr-single-select[@id='add-member-marital-select']/mat-form-field//div[@class='mat-form-field-flex']";
        this.marital_status=" //mmr-single-select[@class='input-with-icon'][contains(.,'Marital Status')]";
        this.am_gender_dropdown_str="//div//mat-option//span//span[contains(text(),'$gender$')]";
        this.am_marital_status_dropdown_str = "//div//mat-option//span//span[contains(text(),'$marital_status$')]";
        this.m_addProgram=element(by.xpath("//div[text()=' Add Program ']//preceding-sibling::div[@class='circle-btn circle-btn--light circle-btn--large add-icon add-icon--large']"));
        this.ap_radio_add_type="//div[contains(text(),'$replaceToken$')]//ancestor::mat-radio-button//div[@class='mat-radio-container']";
        this.ap_EMR_ID=element(by.xpath("//input[@placeholder='EMR ID']"));
        this.ap_medica_ID=element(by.xpath("//input[@placeholder='Medicaid ID']"));
        this.ap_alternate_identifier=element(by.xpath("//input[@placeholder='Alternate Identifier']"));
        //this.ap_provider=element(by.xpath("//mmr-single-select[@ng-reflect-field_title='Provider']"));
        this.ap_provider=element(by.xpath("//mmr-single-select[contains(.,'Provider')]"));
        this.ap_provider_dropdown="//span[@class='mat-option-text']//span[contains(text(),'$replaceToken$')]";
        this.ap_identified_on=element(by.xpath("//input[@placeholder='Identified On']"));
        this.ap_status=element(by.xpath("//mmr-single-select[@ng-reflect-field_title='Status']"));
        this.ap_status=element(by.xpath("//mmr-single-select[contains(.,'Status *')]"));
        this.ap_status_dropdown="//span[contains(text(),'$replaceToken$')]";
        this.ap_ins_note=element(by.xpath("//input[@placeholder='Insurance Note']"));
        this.ap_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.ap_program=element(by.xpath("//mmr-single-select[contains(.,'Program *')]"));
        //this.ap_program=element(by.xpath("//div[@class='mat-form-field-infix'][contains(.,'Program *')]"));
        this.ap_program_dropdown="//span[contains(text(),'$replaceToken$')]";
        this.ap_practice=element(by.xpath("//mmr-single-select[contains(.,'Practice')]"));
        this.ap_practice_dropdown="//span[contains(text(),'$replaceToken$')]";
        this.m_ct_Add=element(by.id("member_careteam_add_btn"));
        this.m_ct_role=element(by.xpath("//mat-select[contains(@aria-label,'Select Role')]"));
        this.m_ct_role_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$role$')]";
        this.m_ct_member=element(by.xpath("//mat-select[contains(@aria-label,'Select Case Manager / Psychiatric Consultant')]")); 
        this.m_ct_member_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$member$')]";
        this.m_ct_from_date=element(by.xpath("//input[@formcontrolname='startDate']"));
        this.m_ct_to_date=element(by.xpath("//input[@formcontrolname='endDate']"));
        this.m_ct_primary=element(by.xpath("//div[@class='mat-checkbox-inner-container']"));
        this.m_ct_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.m_nm_selectaddress=element(by.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]"));
        this.m_nm_useaddress=element(by.xpath("//button[@color='primary'][contains(.,'Use Address')]"));
    }

}