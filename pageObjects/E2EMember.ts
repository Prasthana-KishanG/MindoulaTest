import { ElementFinder,element,by, browser } from "protractor";
     
export class E2EMember
{
    m_ep_Add:ElementFinder
    m_ep_name:ElementFinder
    m_ep_pref:ElementFinder
    m_ep_pref_dropdown_str:any
    m_ep_role:ElementFinder
    m_ep_role_dropdown_str:any
    m_ep_phone:ElementFinder
    m_ep_email:ElementFinder
    m_ep_address:ElementFinder
    m_ep_notes:ElementFinder
    m_ep_save:ElementFinder
    m_task_Add:ElementFinder
    m_task_type:ElementFinder
    m_task_type_dropdown_str:any
    m_task_careextender:ElementFinder
    m_task_careextender_dropdown_str:any
    m_task_description:ElementFinder
    m_task_goaldate:ElementFinder
    m_task_save:ElementFinder
    m_referral_add:ElementFinder
    m_referral_type:any
    m_referral_type_dropdown:any
    m_referral_isProvInNetwork:any
    m_referral_ref_type:any
    m_referral_ref_type_dropdown:any
    m_referral_specialty_type:ElementFinder
    m_referral_name:ElementFinder
    m_referral_date:ElementFinder
    m_referral_contact:ElementFinder
    m_referral_direct_name:ElementFinder
    m_referral_direct_contact:ElementFinder
    m_referral_appointment_date:ElementFinder
    m_referral_stauts_type:ElementFinder
    m_referral_status_type_dropdown:any
    m_referral_reasonableTime:ElementFinder
    m_referral_reminder:ElementFinder
    m_referral_assistance:ElementFinder
    m_referral_save:ElementFinder
    m_referral_list_type:ElementFinder
    m_referral_list_details:ElementFinder
    m_referral_list_name:ElementFinder
    m_referral_list_appointment_date:ElementFinder
    m_referral_list_referral_date:ElementFinder
    m_referral_list_status:ElementFinder
    m_referral_list_reminder:ElementFinder
    mp_change_status:ElementFinder
    mp_status_container_str:any
    ml_lane_update_reason:ElementFinder
    ml_lane_update_reason_dropdown:any
    ml_lane_update_notes:ElementFinder
    ml_lane_update_save:ElementFinder
    m_benefit_add:ElementFinder
    m_benefit_type:ElementFinder
    m_benefittype_dropdown_str:any
    m_benefit_idNum:ElementFinder
    m_benefit_amount:ElementFinder
    m_benefit_expiration_date:ElementFinder
    m_benefit_hav_orig_copy:ElementFinder
    m_benefit_status:ElementFinder
    m_benefit_hav_orig_copy_dropdown_str:any
    m_benefit_status_dropdown_str:any
    m_benefit_notes:ElementFinder
    m_benefit_save:ElementFinder
    m_open_document_section:ElementFinder
    m_add_document:ElementFinder
    m_doc_file_add:ElementFinder
    m_doc_file_upload:ElementFinder
    m_doc_file_name:ElementFinder
    m_doc_save:ElementFinder
    m_benefits_list_type: ElementFinder;
    m_benefits_list_id: ElementFinder;
    m_benefits_list_amount: ElementFinder;
    m_benefits_list_status: ElementFinder;
    m_benefits_list_expiration: ElementFinder;
    m_benefits_list_copy: ElementFinder;
    m_benefits_list_notes: ElementFinder;
    m_benefits_list_documents: ElementFinder;
    m_cg_Add: ElementFinder;
    m_cg_caregaptype: ElementFinder;
    m_cg_caregaptypedropdown_str: string;
    m_cg_identifiedon: ElementFinder;
    m_cg_exp_res_date: ElementFinder;
    m_cg_desc: ElementFinder;
    m_cg_save: ElementFinder;
    m_cg_list_str: any;
    m_cg_list_expand: ElementFinder;
    m_ak_status: ElementFinder;
    m_ak_status_dropdown_str: any;
    m_ak_actiondate: ElementFinder;
    m_ak_action_taken: ElementFinder;
    m_ak_save: ElementFinder;
    m_action_list_date: ElementFinder;
    m_action_list_action_taken: ElementFinder;
    m_action_list_status_changed_to: ElementFinder;
    m_add_contact: ElementFinder;
    m_fc_first_name: ElementFinder;
    m_fc_last_name: ElementFinder;
    m_address: ElementFinder;
    m_fc_mobile: ElementFinder;
    m_fc_email: ElementFinder;
    m_fc_home_phone: ElementFinder;
    m_fc_office_phone: ElementFinder;
    m_fc_relationship: ElementFinder;
    m_fc_housing_status: ElementFinder;
    m_fc_housing_status_dropdwon: any;
    m_fc_add: ElementFinder;
    m_fc_packitem: ElementFinder;
    m_add_release_agreement: ElementFinder;
    m_rel_file_upload: ElementFinder;
    m_rel_from_date: ElementFinder;
    m_rel_to_date: ElementFinder;
    m_rel_contacts_str: any;
    m_rel_add: ElementFinder;
    m_rel_add1: string;
    m_fc_list_name: ElementFinder;
    m_fc_list_address: ElementFinder;
    m_fc_list_phone: ElementFinder;
    m_fc_list_email: ElementFinder;
    m_fc_list_relation: ElementFinder;
    m_fc_list_release: ElementFinder;
    m_release_agreement_list_doc_name: ElementFinder;
    m_release_agreement_list_valid_from: ElementFinder;
    m_release_agreement_list_valid_to: ElementFinder;
    m_release_agreement_list_applies_to: ElementFinder;
    m_hv_add_hosp_visit: ElementFinder;
    m_hv_stay: ElementFinder;
    m_hv_stay_dropdown_str: string;
    m_hv_name: ElementFinder;
    m_hv_unit: ElementFinder;
    m_hv_reason: ElementFinder;
    m_hv_start_date: ElementFinder;
    m_hv_end_date: ElementFinder;
    m_hv_save: ElementFinder;
    m_hv_list_stay: ElementFinder;
    m_hv_list_name: ElementFinder;
    m_hv_list_unit: ElementFinder;
    m_hv_list_start: ElementFinder;
    m_hv_list_end: ElementFinder;
    m_hv_list_reason: ElementFinder;
    m_ov_add_office_visit: ElementFinder;
    m_ov_visit_date: ElementFinder;
    m_ov_name: ElementFinder;
    m_ov_speciality: ElementFinder;
    m_ov_reason: ElementFinder;
    m_ov_list_visit_date: ElementFinder;
    m_ov_list_doctor_name: ElementFinder;
    m_ov_list_specialty: ElementFinder;
    m_ov_list_reason: ElementFinder;
    m_ov_save: ElementFinder;
    m_add_document_btn: ElementFinder;
    m_doc_save_btn: ElementFinder;
    m_doc_file_upload_txt: ElementFinder;
    m_doc_list_name_val: ElementFinder;
    m_doc_file_name_val: ElementFinder;
    m_add_goal: ElementFinder;
    m_goal_save: ElementFinder;
    m_goal_name: ElementFinder;
    m_goal_resources: ElementFinder;
    m_goal_identified_date: ElementFinder;
    m_goal_achieved_date: ElementFinder;
    m_goal_list_name: ElementFinder;
    m_goal_list_resources: ElementFinder;
    m_goal_list_identified_date: ElementFinder;
    m_goal_list_achieved: ElementFinder;
    m_goal_comments: ElementFinder;
    m_diagnoses_add: ElementFinder;
    m_diagnoses_list_dianosis: ElementFinder;
    m_diagnoses_list_code: ElementFinder;
    m_diagnoses_list_times: ElementFinder;
    m_diagnoses_list_source: ElementFinder;
    m_diagnoses_code: ElementFinder;
    m_dianoses_code_dropdown_str: string;
    m_dianoses_sourcetype: ElementFinder;
    m_dianoses_sourcetype_dropdown: any;
    m_dianoses_type: ElementFinder;
    m_dianoses_type_dropdown: string;
    m_diagnoses_save: ElementFinder;
    m_demo_edit: ElementFinder;
    m_demo_firstname: ElementFinder;
    m_demo_middlename: ElementFinder;
    m_demo_lastname: ElementFinder;
    m_demo_dob: ElementFinder;
    m_demo_gender: ElementFinder;
    m_demo_gender_dropdown_str: any;
    m_demo_marital: ElementFinder;
    m_demo_marital_dropdown_str: string;
    m_demo_mobile: ElementFinder;
    m_demo_email: ElementFinder;
    m_demo_address: ElementFinder;
    m_demo_home: ElementFinder;
    m_demo_office: ElementFinder;
    m_demo_othername: ElementFinder;
    m_demo_preferredname: ElementFinder;
    m_demo_mailaddress: ElementFinder;
    m_demo_physical: ElementFinder;
    m_demo_race: ElementFinder;
    m_demo_race_dropdown_str: string;
    m_demo_housing: ElementFinder;
    m_demo_housing_dropdown_str: string;
    m_demo_minor: ElementFinder;
    m_demo_minor_dropdown_str: string;
    m_demo_ethnicity: ElementFinder;
    m_demo_ethnicity_dropdown_str: string;
    m_demo_religion: ElementFinder;
    m_demo_religion_dropdown_str: any;
    m_demo_lang: ElementFinder;
    m_demo_lang_dropdown_str: string;
    m_demo_eng_read: ElementFinder;
    m_demo_eng_read_dropdown_str: string;
    m_demo_eng_write: ElementFinder;
    m_demo_eng_write_dropdown_str: string;
    m_demo_eng_speak: ElementFinder;
    m_demo_eng_speak_dropdown_str: string;
    m_demo_contact_pref: ElementFinder;
    m_demo_contact_home_input: ElementFinder;
    m_demo_contact_work: ElementFinder;
    m_demo_contact_home: ElementFinder;
    m_demo_contact_phone: ElementFinder;
    m_demo_contact_email: ElementFinder;
    m_demo_contact_mail: ElementFinder;
    m_demo_contact_message: ElementFinder;
    m_demo_contact_work_cb: ElementFinder;
    m_demo_contact_home_cb: ElementFinder;
    m_demo_contact_phone_cb: ElementFinder;
    m_demo_contact_email_cb: ElementFinder;
    m_demo_contact_mail_cb: ElementFinder;
    m_demo_contact_message_cb: ElementFinder;
    m_demo_discretion: ElementFinder;
    m_demo_description: any;
    m_demo_submit: ElementFinder;
    m_demo_details_othername: ElementFinder;
    m_demo_details_preferredname: ElementFinder;
    m_demo_details_discretion: ElementFinder;
    m_demo_details_minor: ElementFinder;
    m_demo_details_mail: ElementFinder;
    m_demo_details_race: ElementFinder;
    m_demo_details_ethnicity: ElementFinder;
    m_demo_details_religious: ElementFinder;
    m_demo_details_primary: ElementFinder;
    m_demo_details_english: ElementFinder;
    m_demo_details_housing: ElementFinder;
    m_demo_details_physic_desc: ElementFinder;
    m_demo_details_contact_pref: ElementFinder;
    m_demo_details_contact_pref_order: ElementFinder;
    ml_pagination_item_str: any;
    ml_first_member: ElementFinder;
    ml_pagination_active_item: ElementFinder;
    ml_search:ElementFinder
    m_release_agreement_list_applies_to_str: string;
    m_doc_file_name_value: ElementFinder;
    m_doc_listview: ElementFinder;
    m_doc_list_name_val_str: any;
    ml_select_member: string;
    constructor()
    {
        this.m_ep_Add=element(by.id("member_careteam_ext_add_btn"));
        this.m_ep_name=element(by.xpath("//input[@formcontrolname='name']"));
        this.m_ep_pref=element(by.xpath("//mat-select[contains(@aria-label,'Select Preference')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_ep_pref_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$pref$')]";
        this.m_ep_role=element(by.xpath("//mat-select[contains(@aria-label,'Select Role')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_ep_role_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$role$')]";
        this.m_ep_phone=element(by.xpath("//input[@formcontrolname='phone']"));
        this.m_ep_email=element(by.xpath("//input[@formcontrolname='email']"));
        this.m_ep_address=element(by.xpath("//input[@placeholder='Enter a location']"));
        this.m_ep_notes=element(by.xpath("//textarea[@formcontrolname='notes']"));
        this.m_ep_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.m_task_Add=element(by.xpath("//span[contains(text(),'Add Task')]//parent::button"));
        this.m_task_type=element(by.xpath("//mat-select[contains(@aria-label,'Task Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_task_type_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$type$')]";
        this.m_task_careextender=element(by.xpath("//mat-select[contains(@aria-label,'Care Extender')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_task_careextender_dropdown_str="//span[@class='mat-option-text' and contains(text(),' $careextender$ ')]";
        this.m_task_description=element(by.xpath("//input[@placeholder='Task Description']"));
        this.m_task_goaldate=element(by.xpath("//input[@placeholder='Goal Date']"));
        this.m_task_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.m_referral_add=element(by.xpath("//span[contains(text(),'Add Referral')]//parent::button"));
        this.m_referral_type=element(by.xpath("//mat-select[contains(@aria-label,'Type of Referral')]//parent::div[contains(@class,'mat-form-field-infix')]")); 
        this.m_referral_type_dropdown="//span[@class='mat-option-text' and text()='$replaceToken$']";
        this.m_referral_isProvInNetwork=element(by.xpath("//span[contains(text(),'Is the provider in-network?')]//preceding-sibling::div"));
        this.m_referral_ref_type=element(by.xpath("//mat-select[contains(@aria-label,'Provider Referral Type')]//parent::div[contains(@class,'mat-form-field-infix')]")); 
        this.m_referral_ref_type_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_referral_specialty_type=element(by.xpath("//input[@formcontrolname='specialty_type']"));
        this.m_referral_name=element(by.xpath("//input[@formcontrolname='referral_name']"));
        this.m_referral_date=element(by.xpath("//input[@formcontrolname='referral_date']"));
        this.m_referral_contact=element(by.xpath("//input[@formcontrolname='referral_contact_information']"));
        this.m_referral_direct_name=element(by.xpath("//input[@formcontrolname='direct_contact_name']"));
        this.m_referral_direct_contact=element(by.xpath("//input[@formcontrolname='direct_contact_information']"));
        this.m_referral_appointment_date=element(by.xpath("//input[@formcontrolname='appointment_date']"));
        this.m_referral_stauts_type=element(by.xpath("//mmr-member-referral-dialog//mat-select[contains(@aria-label,'Status')]//parent::div[contains(@class,'mat-form-field-infix')]")); 
        this.m_referral_status_type_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_referral_reasonableTime=element(by.xpath("//span[contains(text(),'Were appointments available in a reasonable time?')]//preceding-sibling::div"));
        this.m_referral_reminder=element(by.xpath("//span[contains(text(),'Member requires a reminder to attend the meeting.')]//preceding-sibling::div"));
        this.m_referral_assistance=element(by.xpath("//span[contains(text(),'Member requires assitance at the meeting.')]//preceding-sibling::div"));
        this.m_referral_save=element(by.xpath("//mmr-member-referral-dialog//button//span[contains(text(),'Save')]"));
        this.m_referral_list_type=element(by.id("member_referral_row_type"));
        this.m_referral_list_details=element(by.id("member_referral_row_details"));
        this.m_referral_list_name=element(by.id("member_referral_row_name"));
        this.m_referral_list_appointment_date=element(by.id("member_referral_row_appointment"));
        this.m_referral_list_referral_date=element(by.id("member_referral_row_referral"));
        this.m_referral_list_status=element(by.xpath("//div[@class='mmr-table__td'][contains(.,'Successful')]"));
        this.m_referral_list_reminder=element(by.id("member_referral_row_reminder"));
        this.mp_change_status=element(by.id("member_programs_status_active_btn"));
        this.mp_status_container_str="//div[@class='program-status-container' and contains(text(),'$replaceToken$')]";
        this.ml_lane_update_reason=element(by.xpath("//mat-select[contains(@placeholder,'Reason')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.ml_lane_update_reason_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.ml_lane_update_save=element(by.xpath("//button[@type='submit']"));
        this.ml_lane_update_notes=element(by.id("member_program_status_form_notes"));
        this.m_benefit_add=element(by.id("member_benefit_add_btn"));

        this.m_benefit_type=element(by.xpath("//mat-select[contains(@aria-label,'Benefit/Document Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_benefittype_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$benefittype$')]";
        this.m_benefit_idNum=element(by.xpath("//input[@formcontrolname='idNumber']"));
        this.m_benefit_amount=element(by.xpath("//input[@formcontrolname='amount']"));
        this.m_benefit_expiration_date=element(by.xpath("//input[@placeholder='Expiratoin Date']"));
        this.m_benefit_hav_orig_copy=element(by.xpath("//mat-select[contains(@aria-label,'Have Original Copy')]//parent::div[contains(@class,'mat-form-field-infix')]")); 
        this.m_benefit_status=element(by.xpath("//mat-select[contains(@aria-label,'Status')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_benefit_hav_orig_copy_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$hav_orig_copy$')]";
        this.m_benefit_status_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$status$')]";
        this.m_benefit_notes=element(by.xpath("//textarea[@formcontrolname='notes']"));
        this.m_benefit_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.m_open_document_section=element(by.xpath("//div[contains(@class,'benefit-document__open-indicator')]"));
        this.m_add_document=element(by.id("member_benefit_add_doc_btn"));
        this.m_doc_file_add=element(by.xpath("//button[contains(@class,'mat-flat-button mat-button-base mat-primary ng-star-inserted')][contains(.,'Add File')]"));
        //this.m_doc_file_upload=element(by.xpath("//div[@class='mat-form-field-infix']//input[@type='file']"));
        this.m_doc_file_upload=element(by.xpath("//div[contains(@class,'mat-form-field-infix')]//input[@type='file']"));
        this.m_doc_file_name=element(by.xpath("//input[@formcontrolname='documentName']"));
        this.m_doc_save=element(by.xpath("//button[@type='submit']"));

        this.m_benefits_list_type=element(by.id("member_benefit_type_value"));
        this.m_benefits_list_id=element(by.id("member_benefit_id_value"));
        this.m_benefits_list_amount=element(by.id("member_benefit_amount_value"));
        this.m_benefits_list_status=element(by.id("member_benefit_status_value"));
        this.m_benefits_list_expiration=element(by.id("member_benefit_expiration_value"));
        this.m_benefits_list_copy=element(by.id("member_benefit_copy_value"));
        this.m_benefits_list_notes=element(by.xpath("//label[@id='member_benefit_notes']//parent::div"));
        this.m_benefits_list_documents=element(by.id("member_benefit_add_doc"));
        this.m_cg_Add=element(by.id("member_cg_add_btn"));

        this.m_cg_caregaptype=element(by.xpath("//mat-select[contains(@aria-label,'Care Gap Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_cg_caregaptypedropdown_str="//span[@class='mat-option-text' and contains(text(),'$caregaptype$')]";
        this.m_cg_identifiedon=element(by.xpath("//input[@placeholder='Identified On']"));
        this.m_cg_exp_res_date=element(by.xpath("//input[@placeholder='Expected Resolution Date']"));
        this.m_cg_desc=element(by.xpath("//textarea[@placeholder='Description']"));
        this.m_cg_save=element(by.xpath("//form//span[contains(text(),'Save')]//parent::button"));

        this.m_cg_list_str="//div[contains(text(),'$rowToFind$')]//parent::div[contains(@class,'member-care-gap-table-row')]";
        this.m_cg_list_expand=element(by.xpath("//div[@id='member_cg_list_row_expand_btn']//mat-icon"));
        this.m_ak_status=element(by.xpath("//span[contains(text(),'Status Changed To')]//parent::div"));
        this.m_ak_status_dropdown_str="//span[@class='mat-option-text']//span[text()='$status$']";
        this.m_ak_actiondate=element(by.xpath("//input[@placeholder='Action Date']"));
        this.m_ak_action_taken=element(by.xpath("//input[@placeholder='Action Taken']"));
        this.m_ak_save=element(by.xpath("//form//span[contains(text(),'Save')]//parent::button"));

        this.m_action_list_date=element(by.id("member-table-action_date"));
        this.m_action_list_action_taken=element(by.id("member-table-action_taken"));
        this.m_action_list_status_changed_to=element(by.id("member-table-status_changed_to"));

        this.m_add_contact=element(by.id("member_contact_add_contac_btn"));
        this.m_fc_first_name=element(by.xpath("//input[@formcontrolname='firstName']"));
        this.m_fc_last_name=element(by.xpath("//input[@formcontrolname='lastName']"));
        this.m_address=element(by.xpath("//input[@placeholder='Enter a location']"));
        this.m_fc_mobile=element(by.xpath("//input[@formcontrolname='mobileNumber']"));
        this.m_fc_email=element(by.xpath("//input[@formcontrolname='email']"));
        this.m_fc_home_phone=element(by.xpath("//input[@formcontrolname='homeNumber']"));
        this.m_fc_office_phone=element(by.xpath("//input[@formcontrolname='workNumber']"));
        this. m_fc_relationship=element(by.xpath("//input[@formcontrolname='relationship']"));
        this.m_fc_housing_status=element(by.xpath("//mat-select[contains(@aria-label,'Housing Status')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_fc_housing_status_dropdwon="//span[@class='mat-option-text'][contains(.,'$replaceToken$')]";
        //this.m_fc_housing_status_dropdwon="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_fc_add=element(by.xpath("//button[@type='submit']"));
        this.m_fc_packitem=element(by.xpath("//*[contains(@class,'pac-container')]//div[contains(@class,'pac-item')]"));
        this.m_add_release_agreement=element(by.id("member_contact_add_release_btn"));
        this.m_rel_file_upload=element(by.xpath("//div[contains(@class,'mat-form-field-infix')]//input[@type='file']"));
        this.m_rel_from_date=element(by.xpath("//input[@formcontrolname='startDate']"));
	    this.m_rel_to_date=element(by.xpath("//input[@formcontrolname='endDate']"));
	    this.m_rel_contacts_str="//span[contains(text(),'$replaceToken$')]//parent::span//preceding-sibling::div";
        this.m_rel_add=element(by.xpath("//button[@type='submit']"));
        this.m_rel_add1="//button[@type='submit']";
        
        this.m_fc_list_name=element(by.id("member_contact_row_name"));
        this.m_fc_list_address=element(by.id("member_contact_row_address"));
        this.m_fc_list_phone=element(by.id("member_contact_row_phone"));
        this.m_fc_list_email=element(by.id("member_contact_row_email"));
        this.m_fc_list_relation=element(by.id("member_contact_row_relation"));
        this.m_fc_list_release=element(by.id("member_contact_row_release"));
        this.m_release_agreement_list_doc_name=element(by.xpath("//td[@id='member_release_row_docname']//a"));
        this.m_release_agreement_list_valid_from=element(by.id("member_release_row_from"));
        this.m_release_agreement_list_valid_to=element(by.id("member_release_row_to"));
        this.m_release_agreement_list_applies_to=element(by.id("member_release_row_applies"));
        this.m_release_agreement_list_applies_to_str="member_release_row_applies";

        this.m_hv_add_hosp_visit=element(by.id("member_hospital_add_btn"));
        this.m_hv_stay=element(by.xpath("//mat-select[contains(@aria-label,'Hospital Stay')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_hv_stay_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$stay$')]";
        this.m_hv_name=element(by.xpath("//input[@placeholder='Hospital Name']"));
        this.m_hv_unit=element(by.xpath("//input[@placeholder='Hospital Unit']"));
        this.m_hv_reason=element(by.xpath("//input[@placeholder='Reason']"));
        this.m_hv_start_date=element(by.xpath("//input[@placeholder='Start Date']"));
        this.m_hv_end_date=element(by.xpath("//input[@placeholder='End Date']"));
        this.m_hv_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.m_hv_list_stay=element(by.id("member-table-hospital_stay"));
        this.m_hv_list_name=element(by.id("member-table-hospital_name"));
        this.m_hv_list_unit=element(by.id("member-table-hospital_unit"));
        this.m_hv_list_start=element(by.id("member-table-start_date"));
        this.m_hv_list_end=element(by.id("member-table-end_date"));
        this.m_hv_list_reason=element(by.id("member-table-reason"));

        this.m_ov_add_office_visit=element(by.id("member_office_add_btn"));
        this.m_ov_visit_date=element(by.xpath("//input[@placeholder='Visit Date']"));
        this.m_ov_name=element(by.xpath("//input[@placeholder='Doctor Name']"));
        this.m_ov_speciality=element(by.xpath("//input[@placeholder='Specialty']"));
        this.m_ov_reason=element(by.xpath("//input[@placeholder='Reason']"));
        this.m_ov_list_visit_date=element(by.id("member-table-visit_date"));
        this.m_ov_list_doctor_name=element(by.id("member-table-doctor_name"));
        this.m_ov_list_specialty=element(by.id("member-table-specialty"));
        this.m_ov_list_reason=element(by.xpath("//td[@id='member-table-specialty']//following-sibling::td[@id='member-table-reason']"));
        this.m_ov_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        //this.m_add_document_btn=element(by.id("member_doc_add_btn"));
        this.m_add_document_btn=element(by.xpath("//span[contains(text(),'Add Document')]"));
        this.m_doc_save_btn=element(by.xpath("button[@type='submit']"));
        this.m_doc_file_upload_txt=element(by.xpath("//div[@class='mat-form-field-infix']//input[@type='file']"));
        //this.m_doc_list_name_val=element(by.xpath("//td[@id='member_doc_name_value']//a"));
        this.m_doc_list_name_val_str="//td[@id='member_doc_name_value']//a[contains(text(),'$replaceToken$')]";
        this.m_doc_file_name_val=element(by.xpath("//input[@formcontrolname='documentName']"));
        this.m_doc_file_name_value=element(by.xpath("//p[contains(text(),'MMR DOCUMENT')]"));
        this.m_doc_listview=element(by.xpath("//mat-icon[contains(@ng-reflect-svg-icon,'list-view')]"));

        this.m_add_goal=element(by.id("member_goal_add_btn"));
        this.m_goal_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
        this.m_goal_name=element(by.xpath("//input[@placeholder='Goal']"));
        this.m_goal_resources=element(by.xpath("//input[@placeholder='Identified Resources']"));
        this.m_goal_identified_date=element(by.xpath("//input[@placeholder='Identified Date']"));
        this.m_goal_achieved_date=element(by.xpath("//input[@placeholder='Achieved Date']"));
        this.m_goal_list_name=element(by.id("member_goal_goalname_value"));
        this.m_goal_list_resources=element(by.id("member_goal_resources_value"));
        this.m_goal_list_identified_date=element(by.id("member_goal_identified_value"));
        this.m_goal_list_achieved=element(by.id("member_goal_status_value"));
        this.m_goal_comments=element(by.xpath("//textarea[@placeholder='Comments']"));
        this.m_diagnoses_add=element(by.id("member_diagnosis_list_add_btn"));
        this.m_diagnoses_list_dianosis=element(by.id("member_diagnosis_list_row_desc"));
        this.m_diagnoses_list_code=element(by.id("member_diagnosis_list_row_code"));
        this.m_diagnoses_list_times=element(by.id("member_diagnosis_list_row_timesreported"));
        this.m_diagnoses_list_source=element(by.id("member_diagnosis_list_row_source"));
        this.m_diagnoses_code=element(by.xpath("//input[contains(@formcontrolname,'query')]"));
        this.m_dianoses_code_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_dianoses_sourcetype=element(by.xpath("//mat-select[contains(@aria-label,'Source Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_dianoses_sourcetype_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_dianoses_type=element(by.xpath("//mat-select[contains(@aria-label,'Diagnosis Type')]//parent::div[contains(@class,'mat-form-field-infix')]"));
        this.m_dianoses_type_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_diagnoses_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));

        this.m_demo_edit=element(by.xpath("//span[@id='ce_detail_title_edit_icon']//mat-icon"));
        this.m_demo_firstname=element(by.id("member_form_edit_firstname_text"));
        this.m_demo_middlename=element(by.id("member_form_middle_input"));
        this.m_demo_lastname=element(by.id("member_form_lastname_input"));
        this.m_demo_dob=element(by.xpath("//input[@formcontrolname='birthDate']"));
        this.m_demo_gender=element(by.xpath("//mat-label[contains(text(),'Gender')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_gender_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_marital=element(by.xpath("//mat-label[contains(text(),'Marital Status')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_marital_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_mobile=element(by.id("member_form_home_number_input"));
        this.m_demo_email=element(by.id("member_form_office_number_input"));
        this.m_demo_address=element(by.xpath("//mat-label[text()='Address']//parent::label//parent::span//parent::div//input"));
        this.m_demo_home=element(by.id("member_form_home_number_input"));
        this.m_demo_office=element(by.id("member_form_office_number_input"));
        this.m_demo_othername=element(by.id("member_form_othername_input"));
        this.m_demo_preferredname=element(by.id("member_form_preferred_input"));
        this.m_demo_mailaddress=element(by.xpath("//mat-label[text()='Mailing Address']//parent::label//parent::span//parent::div//input"));
        this.m_demo_physical=element(by.id("member_form_edit_physical_text"));
        this.m_demo_race=element(by.xpath("//mat-label[contains(text(),'Race')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_race_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_housing=element(by.xpath("//mat-label[contains(text(),'Housing Status')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_housing_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_minor=element(by.xpath("//span[contains(text(),'Select an option')]//parent::div//parent::div//parent::mat-select")); 
        this.m_demo_minor_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_demo_ethnicity=element(by.xpath("//mat-label[contains(text(),'Ethnicity')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_ethnicity_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_religion=element(by.xpath("//mat-label[contains(text(),'Religious Affiliation')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_religion_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_lang=element(by.xpath("//mat-label[contains(text(),'Primary Language')]//parent::label//parent::span//preceding-sibling::mat-select")); 
        this.m_demo_lang_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_eng_read=element(by.id("member_form_eng_read_dropdown"));
        this.m_demo_eng_read_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_eng_write=element(by.id("member_form_eng_write_dropdown"));
        this.m_demo_eng_write_dropdown_str="//span[contains(text(),'$replaceToken$')]";
        this.m_demo_eng_speak=element(by.id("member_form_eng_speak_dropdown"));
        this.m_demo_eng_speak_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
        this.m_demo_contact_pref=element(by.xpath("//span[@class='mat-checkbox-label' and contains(text(),'$contact$')]//preceding-sibling::div"));
        this.m_demo_contact_home_input=element(by.xpath("//input[@id='member_form_edit_contact_pref_home_text']"));
        this.m_demo_contact_work=element(by.id("member_form_contact_pref_work_input"));
        this.m_demo_contact_home=element(by.id("member_form_contact_pref_home_input"));
        this.m_demo_contact_phone=element(by.id("member_form_contact_pref_phone_input"));
        this.m_demo_contact_email=element(by.id("member_form_contact_pref_email_input"));
        this.m_demo_contact_mail=element(by.id("member_form_contact_pref_mail_input"));
        this.m_demo_contact_message=element(by.id("member_form_contact_pref_message_input"));
        this.m_demo_contact_work_cb=element(by.xpath("//input[@id='member_form_contact_pref_work_checkbox-input']//parent::div"));
        this.m_demo_contact_home_cb=element(by.xpath("//input[@id='member_form_contact_pref_home_checkbox-input']//parent::div"));
        this.m_demo_contact_phone_cb=element(by.xpath("//input[@id='member_form_contact_pref_phone_checkbox-input']//parent::div"));
        this.m_demo_contact_email_cb=element(by.xpath("//input[@id='member_form_contact_pref_email_checkbox-input']//parent::div"));
        this.m_demo_contact_mail_cb=element(by.xpath("//input[@id='member_form_contact_pref_mail_checkbox-input']//parent::div"));
        this.m_demo_contact_message_cb=element(by.xpath("//input[@id='member_form_contact_pref_message_checkbox-input']//parent::div"));
        this.m_demo_discretion=element(by.xpath("//span[contains(text(),'Discretion is required?')]//following-sibling::mat-radio-group//mat-radio-button//label//div[@class='mat-radio-label-content' and text()='$replaceToken$']"));
        this.m_demo_description=element(by.id("member_form_physical_notes_textarea"));
        this.m_demo_submit=element(by.id("member_form_btn_submit"));
        this.m_demo_details_othername=element(by.id("memeber_demo_detail_othername_value"));
        this.m_demo_details_preferredname=element(by.id("memeber_demo_detail_prefname_value"));
        this.m_demo_details_discretion=element(by.xpath("//div[@id='memeber_demo_detail_discretion_value']//span"));
        this.m_demo_details_minor=element(by.xpath("//div[@id='memeber_demo_detail_age_value']//span"));
        this.m_demo_details_mail=element(by.id("memeber_demo_detail_mail_value"));
        this.m_demo_details_race=element(by.id("memeber_demo_detail_race_value"));
        this.m_demo_details_ethnicity=element(by.id("memeber_demo_detail_ethnicity_value"));
        this.m_demo_details_religious=element(by.id("memeber_demo_detail_religious_value"));
        this.m_demo_details_primary=element(by.id("memeber_demo_detail_primary_value"));
        this.m_demo_details_english=element(by.id("memeber_demo_detail_english_value"));
        this.m_demo_details_housing=element(by.id("memeber_demo_detail_housing_value"));
        this.m_demo_details_physic_desc=element(by.id("memeber_demo_physic_desc"));
        this.m_demo_details_contact_pref=element(by.xpath("//div[@id='memeber_demo_detail_contact_label' and contains(text(),'$replaceToken$')]//following-sibling::div"));
        this.m_demo_details_contact_pref_order=element(by.id("memeber_demo_detail_contact_label"));
        this.ml_pagination_item_str="//li[contains(@class,'pagination__item') and text()=' $pgNum$ ']";
        this.ml_first_member=element(by.xpath("//tr[@id='memberlist_table_row_' or @id='memberlist_registry_table_row_']//td//div//a"));
        this.ml_pagination_active_item=element(by.xpath("//li[@class='pagination__item item--is-active ng-star-inserted']"));
        this.ml_search=element(by.xpath("//input[contains(@placeholder,'Search')]"));
        this.ml_select_member="//tr[@id='memberlist_table_row_' or @id='memberlist_registry_table_row_']//td//div//a[text()='$replaceToken$']";
    }

}