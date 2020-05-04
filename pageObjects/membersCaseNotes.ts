import { ElementFinder,element,by, browser } from "protractor";
     
export class membersCaseNotes
{
    m_casenotes_add: ElementFinder;
    m_casenotes_engdate: ElementFinder;
    m_casenotes_timerange: string;
	m_casenotes_eng_methods: string;
	m_casenotes_eng_methods_input: string;
	m_casenotes_interventions: string;
	m_casenotes_interventions_input: string;
	m_casenotes_eng_status: string;
	m_casenotes_eng_fail_reason: string;
	m_casenotes_individuals: string;
	m_casenotes_interactions: string;
	m_casenotes_diversion: string;
	m_casenotes_inperson: string;
	m_actionstaken: ElementFinder;
	m_at_issues_addressed: string;
	m_at_caregap: string;
	m_at_referrals: string;
	m_actionstaken1: string;
	assessmentTab: string;
	m_cg_Add: ElementFinder;
	m_cg_caregaptype: ElementFinder;
	m_cg_caregaptypedropdown_str: string;
	m_cg_identifiedon: ElementFinder;
	m_cg_exp_res_date: ElementFinder;
	m_cg_desc: ElementFinder;
	m_cg_save: ElementFinder;
	m_referral_type: ElementFinder;
	m_referral_type_dropdown: string;
	m_referral_isProvInNetwork: ElementFinder;
	m_referral_ref_type: ElementFinder;
	m_referral_ref_type_dropdown: string;
	m_referral_name: ElementFinder;
	m_referral_list_type: ElementFinder;
	m_referral_list_details: ElementFinder;
	m_referral_list_name: ElementFinder;
	m_referral_list_appointment_date: ElementFinder;
	m_referral_list_referral_date: ElementFinder;
	m_referral_list_status: ElementFinder;
	m_referral_list_reminder: ElementFinder;
	m_referral_specialty_type: ElementFinder;
	m_referral_contact: ElementFinder;
	m_referral_direct_name: ElementFinder;
	m_referral_direct_contact: ElementFinder;
	m_referral_appointment_date: ElementFinder;
	m_referral_date: ElementFinder;
	m_referral_save: ElementFinder;
	m_referral_status_type: ElementFinder;
	m_referral_status_type_dropdown: string;
	m_referral_add: ElementFinder;
	m_referral_reasonableTime: ElementFinder;
	m_referral_reminder: ElementFinder;
	m_referral_assistance: ElementFinder;
	m_nextsteps: ElementFinder;
	m_ns_follow_plan_str: any;
	m_ns_add_appointment: ElementFinder;
	m_ns_app_careextender: ElementFinder;
	m_ns_app_careextender_dropdown: string;
	m_ns_app_goal_date: ElementFinder;
	m_ns_app_desc: ElementFinder;
	m_ns_app_save: ElementFinder;
	m_ns_app_tasks: string;
	m_ns_app_notes: ElementFinder;
	m_task_Add: ElementFinder;
	m_task_type: ElementFinder;
	m_task_type_dropdown_str: string;
	m_task_careextender: ElementFinder;
	m_task_careextender_dropdown_str: string;
	m_task_description: ElementFinder;
	m_task_goaldate: ElementFinder;
	m_task_save: ElementFinder;
	m_task_toast_message: ElementFinder;
	m_discard_btn: ElementFinder;
	m_publish_btn: ElementFinder;
	m_at_caregap1: string;
	m_cn_resp_total_time: ElementFinder;
	m_cn_resp_time_range: ElementFinder;
	m_cn_resp_author: ElementFinder;
	m_cn_resp_eng_method: string;
	m_cn_resp_interventions: string;
	m_cn_resp_chip_text: string;
	m_cn_resp_issues_addressed: string;
	m_cn_resp_notes: ElementFinder;
	m_cn_resp_follow_up_plans: string;
	m_engdetails: ElementFinder;
	m_cn_nextsteps_notes: ElementFinder;
	cheatsheets_phone: ElementFinder;
	cheatsheets_inperson: ElementFinder;
	cheatsheets_appointmentschd: ElementFinder;
	cheatsheets_attemptcontc: ElementFinder;
	cheatsheets_casereviewconsult: ElementFinder;
	cheatsheets_anxious: ElementFinder;
	cheatsheets_swearing: ElementFinder;
    

    constructor()
    {
    this.m_casenotes_add=element(by.xpath("//span[contains(text(),'Add Case Notes')]//parent::button"));
    this.m_casenotes_engdate=element(by.xpath("//input[@formcontrolname='appointment_date']"));
	// "m_casenotes_add_careextender":"xpath://mat-select[contains(@placeholder,'Care Extender')]//parent::div[@class='mat-form-field-infix']", 
	// "m_casenotes_add_careextender_dropdown":"xpath://span[@class='mat-option-text' and contains(text(),'$replaceToken$')]",
    this.m_casenotes_timerange="//mat-card-title[contains(text(),'Time Range')]//parent::mat-card-content//mat-chip-list//div//mat-chip[contains(text(),'$replaceToken$')]";
	this.m_casenotes_eng_methods="//mat-card-title[contains(text(),'Engagement Methods')]//parent::mat-card-content//mat-chip-list//div//span[contains(text(),'$replaceToken$')]//parent::mat-chip";
    this.m_casenotes_interventions="//mat-card-title[contains(text(),'Interventions')]//parent::mat-card-content//mat-chip-list//div//span[contains(text(),'$replaceToken$')]//parent::mat-chip";
	this.m_casenotes_eng_methods_input="//mat-card-title[contains(text(),'Engagement Methods')]//parent::mat-card-content//mat-chip-list//div[contains(text(),'$replaceToken$')]//following-sibling::input";
	this.m_casenotes_interventions_input="//mat-card-title[contains(text(),'Interventions')]//parent::mat-card-content//mat-chip-list//div[contains(text(),'$replaceToken$')]//following-sibling::input";
	this.m_casenotes_eng_status="//mat-card-title[contains(text(),'Engagement Status')]//parent::mat-card-content//mat-chip-list//div//mat-chip[contains(text(),'$replaceToken$')]";
	this.m_casenotes_eng_fail_reason="//mat-card-title[contains(text(),'Engagement Fail Reasons')]//parent::mat-card-content//mat-chip-list//div//mat-chip[contains(text(),'$replaceToken$')]";
	this.m_casenotes_individuals="//mat-card-title[contains(text(),'Individuals present during the engagement')]//parent::mat-card-content//mat-chip-list//div//mat-chip[text()='$replaceToken$']";
	this.m_casenotes_interactions="//mat-card-title[contains(text(),'How was the member during your interaction')]//parent::mat-card-content//mat-chip-list//div//mat-chip[text()='$replaceToken$']";
	this.m_casenotes_diversion="//mat-card-title[contains(text(),'Did the engagement help with a diversion')]//following-sibling::mat-chip-list//div//mat-chip[contains(text(),'$replaceToken$')]";
	this.m_casenotes_inperson="//mat-card-title[contains(text(),'If the meeting was in person, where did you meet')]//parent::div//mat-chip-list//div//mat-chip[contains(text(),'$replaceToken$')]";
	
	this.m_actionstaken=element(by.xpath("//span[text()='Actions Taken']//parent::li"));
	this.m_actionstaken1="//span[text()='Actions Taken']//parent::li";
	this.m_nextsteps=element(by.xpath("//span[text()='Next Steps']//parent::li"));
	this.m_engdetails=element(by.xpath("//span[text()='Engagement Details']//parent::li"));
	// "m_engdetails":"xpath://span[text()='Engagement Details']//parent::li",
	this.assessmentTab="//div[@class='mat-tab-label-content' and contains(text(),'Assessments')]";
	this.m_at_issues_addressed="//mat-card-title[contains(text(),'Issues Addressed')]//parent::mat-card-content//mat-chip-list//div//mat-chip[text()='$replaceToken$']";
	this.m_at_caregap="//mat-card-title[contains(text(),'Care Gap')]//following-sibling::mat-radio-group//div[contains(text(),'$replaceToken$')]";
	this.m_at_caregap1="//mat-card-title[contains(text(),'Care Gap')]//following-sibling::mat-radio-group//div[contains(text(),'Yes')]";

	this.m_at_referrals="//mat-card-title[contains(text(),'Referrals')]//following-sibling::mat-radio-group//div[contains(text(),'$replaceToken$')]";
	this.m_cg_Add=element(by.id("member_cg_add_btn"));
	this.m_cg_caregaptype=element(by.xpath("//mat-select[contains(@aria-label,'Care Gap Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
	this.m_cg_caregaptypedropdown_str="//span[@class='mat-option-text' and contains(text(),'$caregaptype$')]";
	this.m_cg_identifiedon=element(by.xpath("//input[@placeholder='Identified On']"));
	this.m_cg_exp_res_date=element(by.xpath("//input[@placeholder='Expected Resolution Date']"));
	this.m_cg_desc=element(by.xpath("//textarea[@placeholder='Description']"));
	this.m_cg_save=element(by.xpath("//form//span[contains(text(),'Save')]//parent::button"));
	
	this.m_referral_type=element(by.xpath("//mat-select[contains(@aria-label,'Type of Referral')]//parent::div[contains(@class,'mat-form-field-infix')]"));
	this.m_referral_type_dropdown="//span[@class='mat-option-text' and text()='$replaceToken$']";
	this.m_referral_isProvInNetwork=element(by.xpath("//span[contains(text(),'Is the provider in-network?')]//preceding-sibling::div"));
	this.m_referral_ref_type=element(by.xpath("//mat-select[contains(@aria-label,'Provider Referral Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
	this.m_referral_ref_type_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_referral_name=element(by.xpath("//input[@formcontrolname='referral_name']"));
	this.m_referral_list_type=element(by.id("member_referral_row_type"));
	this.m_referral_list_details=element(by.id("member_referral_row_details"));
	this.m_referral_list_name=element(by.id("member_referral_row_name"));
	this.m_referral_list_appointment_date=element(by.id("member_referral_row_appointment"));
	this.m_referral_list_referral_date=element(by.id("member_referral_row_referral"));
	this.m_referral_list_status=element(by.xpath("//div[@id='member_referral_row_reminder']//parent::td//preceding-sibling::td[@class='mat-cell cdk-column-status mat-column-status ng-star-inserted']//div"));
	this.m_referral_list_reminder=element(by.id("member_referral_row_reminder"));
	this.m_referral_specialty_type=element(by.xpath("//input[@formcontrolname='specialty_type']"));
	this.m_referral_contact=element(by.xpath("//input[@formcontrolname='referral_contact_information']"));
	this.m_referral_direct_name=element(by.xpath("//input[@formcontrolname='direct_contact_name']"));
	this.m_referral_direct_contact=element(by.xpath("//input[@formcontrolname='direct_contact_information']"));
	this.m_referral_appointment_date=element(by.xpath("//input[@formcontrolname='appointment_date']"));
	this.m_referral_date=element(by.xpath("//input[@formcontrolname='referral_date']"));
	this.m_referral_save=element(by.xpath("//mmr-member-referral-dialog//button//span[contains(text(),'Save')]"));
	this.m_referral_status_type=element(by.xpath("//mmr-member-referral-dialog//mat-select[contains(@aria-label,'Status')]//parent::div[contains(@class,'mat-form-field-infix')]"));
	this.m_referral_status_type_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_referral_add=element(by.xpath("//span[contains(text(),'Add Referral')]//parent::button"));
	this.m_referral_reasonableTime=element(by.xpath("//span[contains(text(),'Were appointments available in a reasonable time?')]//preceding-sibling::div"));
	this.m_referral_reminder=element(by.xpath("//span[contains(text(),'Member requires a reminder to attend the meeting.')]//preceding-sibling::div"));
	this.m_referral_assistance=element(by.xpath("//span[contains(text(),'Member requires assitance at the meeting.')]//preceding-sibling::div"));

	
	this.m_ns_follow_plan_str="//mat-card-title[.='Follow Up Plan']//parent::mat-card-content//span[contains(text(),'$replaceToken$')]//parent::span//preceding-sibling::div";
	this.m_ns_add_appointment=element(by.id("appointment_btn"));
	this.m_ns_app_careextender=element(by.xpath("//mat-select[contains(@aria-label,'Care Extender')]//parent::div[contains(@class,'mat-form-field-infix')]"));
	this.m_ns_app_careextender_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_ns_app_goal_date=element(by.xpath("//input[@placeholder='Goal Date']"));
	this.m_ns_app_desc=element(by.xpath("//input[@placeholder='Description']"));
	this.m_ns_app_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
	this.m_ns_app_tasks="//mat-card-title[contains(text(),'Tasks')]//following-sibling::mat-radio-group//div[contains(text(),'$replaceToken$')]";
	//this.m_ns_app_notes=element(by.xpath("//textarea[@placeholder='Notes here...']"));
	this.m_ns_app_notes=element(by.xpath("//div[contains(@data-placeholder,'Notes here....')]"));
//div[contains(@data-placeholder,'Notes here....')]
	this.m_task_Add=element(by.xpath("//span[contains(text(),'Add Task')]//parent::button"));
	this.m_task_type=element(by.xpath("//mat-select[contains(@aria-label,'Task Type')]//parent::div[contains(@class,'mat-form-field-infix')]")); 
	this.m_task_type_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$type$')]";
	this.m_task_careextender=element(by.xpath("//mat-select[contains(@aria-label,'Care Extender')]//parent::div[contains(@class,'mat-form-field-infix')]"));
	this.m_task_careextender_dropdown_str="//span[@class='mat-option-text' and contains(text(),' $careextender$ ')]";
	this.m_task_description=element(by.xpath("//input[@placeholder='Task Description']"));
	this.m_task_goaldate=element(by.xpath("//input[@placeholder='Goal Date']"));
	this.m_task_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
	this.m_task_toast_message=element(by.xpath("//div[@class='ui-toast-summary']"));
	this.m_discard_btn=element(by.xpath("//span[.=' Discard ']//parent::button"));
	this.m_publish_btn=element(by.xpath("//span[.=' Publish ']//parent::button"));
	
	// "m_casenotes_list_row":"xpath://td[contains(text(),'IVRP')]",
	// "m_casenotes_list_row_edit":"xpath://td[contains(text(),'IVRP')]",
	
	 this.m_cn_resp_total_time=element(by.xpath("//span[contains(text(),'Total Service Time')]//following-sibling::span"));
	 this.m_cn_resp_time_range=element(by.xpath("//span[contains(text(),'Time Range')]//following-sibling::span"));
	 this.m_cn_resp_author=element(by.xpath("//span[contains(text(),'Author')]//following-sibling::span"));	
	 this.m_cn_resp_eng_method="//span[text()='Method']//ancestor::table//tbody//tr//td";
	 this.m_cn_resp_interventions="//span[text()='Intervention Type']//ancestor::table//tbody//tr//td";
	 this.m_cn_resp_chip_text="//div[contains(text(),'$replaceToken$')]//following-sibling::div";
	this.m_cn_resp_issues_addressed="//h2[contains(text(),'Issues Addressed')]//following-sibling::div[1]//div";
	this.m_cn_resp_notes=element(by.xpath("//h2[contains(text(),'Notes')]//following-sibling::div"));
	this.m_cn_nextsteps_notes=element(by.xpath("//div[contains(@data-placeholder,'Notes here....')]"));
	this.m_cn_resp_follow_up_plans="//h2[contains(text(),'Follow Up Plans')]//following-sibling::div[1]//div";
	this.cheatsheets_phone=element(by.xpath("//mat-chip[@role='option'][contains(.,'Phone')]"));
	this.cheatsheets_inperson=element(by.xpath("//mat-chip[@role='option'][contains(.,'In-Person')]"));
	this.cheatsheets_appointmentschd=element(by.xpath("//mat-chip[@role='option'][contains(.,'Appointment Scheduling')]"));
	this.cheatsheets_attemptcontc=element(by.xpath("//mat-chip[@role='option'][contains(.,'Attempted Contact')]"));
	this.cheatsheets_casereviewconsult=element(by.xpath("//mat-chip[@role='option'][contains(.,'Case Review with Consultant Psychiatrist')]"));
	this.cheatsheets_anxious=element(by.xpath("//mat-chip[@role='option'][contains(.,'Anxious')]"));
	this.cheatsheets_swearing=element(by.xpath("//mat-chip[@role='option'][contains(.,'Swearing')]"));
    }

}