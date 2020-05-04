import { ElementFinder,element,by, browser } from "protractor";
     
export class CaseManagerUI
{

	m_tag_add: ElementFinder;
	m_task_text: ElementFinder;
	m_task_header_text: ElementFinder;
	m_tasklane_title: any;
	task_lane_count: string;
	m_filter_label: ElementFinder;
	m_addfilter_btn: ElementFinder;
	m_none_btn: ElementFinder;
	m_members_text: ElementFinder;
	m_members_title: ElementFinder;
	ml_search: ElementFinder;
	ml_select_member: any;
	ml_select_member_num: any;
	ml_view_button: any;
	ml_add_memb_button: string;
	menuItemXpath: ElementFinder;
	list_view: string;
	cm_list_view: string;
	cm_lanestatus_view: string;
	cm_outreach_view: string;
	cm_registry_view: string;
	cm_map_view: string;
	cm_emrid_label: ElementFinder;
	cm_emrid_val: ElementFinder;
	cm_dob_label: ElementFinder;
	cm_dob_val: ElementFinder;
	cm_provider_label: ElementFinder;
	cm_provider_val: ElementFinder;
	cm_provider_phone_label: ElementFinder;
	cm_practice_label: ElementFinder;
	cm_practice_val: ElementFinder;
	cm_medicaid_label: ElementFinder;
	cm_medicaid_val: ElementFinder;
	cm_cont_details: ElementFinder;
	cm_primary_label: ElementFinder;
	cm_primary_ph_val: ElementFinder;
	cm_home_ph_val: ElementFinder;
	cm_work_ph_val: ElementFinder;
	cm_home_label: ElementFinder;
	cm_work_label: ElementFinder;
	cm_address_val: ElementFinder;
	cm_email_val: ElementFinder;
	cm_header_col3: ElementFinder;
	cm_bt_val: ElementFinder;
	cm_bhcensus1_val: ElementFinder;
	cm_bhcensus2_val: ElementFinder;
	cm_bhcensus3_val: ElementFinder;
	cm_more_icon: ElementFinder;
	cm_quick_edit_icon: ElementFinder;
	cm_quick_chat_icon: ElementFinder;
	cm_quick_casenote_icon: ElementFinder;
	cm_quick_tag_icon: ElementFinder;
	cm_casenotes_text: ElementFinder;
	cm_casenotes_header_text: string;
	m_casenotes_title: string;
	cm_consults_icon: ElementFinder;
	cm_consults_text: ElementFinder;
	cm_consults_header_text: string;
	m_consults_title: string;
	cm_assessments_icon: ElementFinder;
	cm_assessments_text: ElementFinder;
	cm_assessments_header_text: string;
	cm_assessments_count: string;
	cm_reports_icon: ElementFinder;
	cm_reports_text: ElementFinder;
	cm_reports_header_text: string;
	cm_reports_txt: string;
	cm_reports_image: string;
	cm_eng_req_icon: string;
	cm_activity_feed_icon: string;
	cm_activity_text: ElementFinder;
	cm_activity_notify: ElementFinder;
	cm_chat_icon: string;
	cm_support_help_icon: string;
	cm_down_arrow: ElementFinder;
	cm_up_arrow: ElementFinder;
	mmr_cm_txt: ElementFinder;
	mmr_cm_safemodeoff_silder: ElementFinder;
	mmr_cm_safemodeoff_Toggle: ElementFinder;
	mmr_cm_darkmodeon_silder: ElementFinder;
	mmr_cm_changlog_txt: ElementFinder;
	mmr_cm_logout_btn: ElementFinder;
	mmr_cm_version_num: ElementFinder;
	mmr_cm_build_num: ElementFinder;
	mmr_eng_txt: string;
	cm_careextender_icon: ElementFinder;
	cm_careextender_text: ElementFinder;
	ml_first_member: string;
	mmr_careext_data: string;
	mmr_careext_role: string;
	cm_assessments_icon_str: string;
	cm_analytics_icon_str: string;
	cm_analytics_text: ElementFinder;
	cm_analytics_header_text: string;
	cm_programs_icon_str: string;
	cm_programs_text: ElementFinder;
	cm_programs_header_text: string;
	
	
	
    
    

    constructor()
    {
		this.m_tag_add=element(by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Add Tag')]//parent::button"));
		this.m_task_text=element(by.xpath("//a[@id='nav_menu_item_tasks']"));
		this.m_task_header_text=element(by.xpath("//span[@id='cn_header_title']"));
		this.task_lane_count="//div[contains(@class,'mmr-lane__title')]//div[contains(text(),'$replaceToken$')]//span";

		this.m_tasklane_title="//div[contains(@class,'mmr-lane__title')][contains(.,'$replaceToken$')]";
		this.m_filter_label=element(by.xpath("//div[@class='filter-header-label'][contains(.,'SELECTED LIST:')]"));
		this.m_addfilter_btn=element(by.xpath("//button[@type='button'][contains(.,'Add Filter')]"));
		this.m_none_btn=element(by.xpath("//button[@type='button'][contains(.,'None')]"));
		this.m_members_text=element(by.xpath("//div[contains(@id,'people')][@class='menuitem-text'][contains(.,'Members')]"));
		this.m_members_title=element(by.xpath("//span[contains(.,'Members')]"));
		this.ml_search=element(by.xpath("//input[contains(@placeholder,'Search')]"));
		this.ml_select_member_num="//tr[@id='memberlist_table_row_' or @id='memberlist_registry_table_row_']//td//div//a[contains(text(),'$membname$')]//parent::div//parent::td//div[@class='btn-copy cc-elm'][contains(.,'$membnumber$')]";
		this.ml_select_member="//tr[@id='memberlist_table_row_' or @id='memberlist_registry_table_row_']//td//div//a[text()='$replaceToken$']";
		this.ml_first_member="//tr[contains(@id,'ce_list_table_row') or @id='memberlist_registry_table_row_']//td//div//a[contains(text(),'$replaceToken$')]";
		this.ml_view_button="//div[contains(@mattooltip,'$replaceToken$')]";
		this.ml_add_memb_button="//span[contains(text(),'$replaceToken$')]";
		this.menuItemXpath=element(by.xpath("//a[@id='nav_menu_item_members']"));
		this.cm_list_view="//div[@class='view-buttons__btn selected']";
		this.cm_lanestatus_view="//div[contains(@mattooltip,'Lane Status View')]";
		this.cm_outreach_view="//div[contains(@mattooltip,'Outreach View')]";
		this.cm_registry_view="//div[contains(@mattooltip,'Registry View')]";
		this.cm_map_view="//div[contains(@mattooltip,'Map View')]";
		this.cm_emrid_label=element(by.xpath("//p[contains(text(),'EMR ID: ')]"));
		this.cm_emrid_val=element(by.xpath("//p[contains(.,'EIDMMRMEMB34')]"));
		this.cm_dob_label=element(by.xpath("//p[contains(text(),'DOB:')]"));
		this.cm_dob_val=element(by.xpath("//div[@class='font-size--small'][contains(text(),'01')]"));
		this.cm_provider_label=element(by.xpath("//p[contains(.,'Provider:')]"));
		this.cm_provider_val=element(by.xpath("//p[contains(.,'Rahul Dravid')]"));
		this.cm_provider_phone_label=element(by.xpath("//p[contains(.,'Provider Phone Number:')]"));
		this.cm_practice_label=element(by.xpath("//p[contains(.,'Practice')]"));
		this.cm_practice_val=element(by.xpath("p[contains(.,'Test')]"));
		this.cm_medicaid_label=element(by.xpath("//p[@ctc-style='large'][contains(.,'Medicaid ID: ')]"));
		this.cm_medicaid_val=element(by.xpath("p[contains(text(),'MMRMEMB34')]"));
		this.cm_cont_details=element(by.xpath("//div[@class='card__details'][contains(.,'Primary: (503) 454-4353Home: (212) 561-8001 Work: (212) 561-8002')]")); 
		this.cm_primary_label=element(by.xpath("//p[contains(.,'Primary:')]"));
		this.cm_primary_ph_val=element(by.xpath("//span[@class='cc-elm'][contains(.,'(503) 454-4353')]"));
        this.cm_home_ph_val=element(by.xpath("//span[@class='cc-elm'][contains(.,'(212) 561-8001')]"));
		this.cm_work_ph_val=element(by.xpath("//span[@class='cc-elm'][contains(.,'(212) 561-8002')]"));
		this.cm_home_label=element(by.xpath("//p[contains(.,'Home:')]"));
		this.cm_work_label=element(by.xpath("//p[contains(.,'Work:')]"));
		this.cm_email_val=element(by.xpath("//p[contains(text(),'mmr.memb')]"));
		this.cm_address_val=element(by.xpath("//p[contains(text(),'12340 Boggy Creek Rd, Orlando, FL 32824, USA')]"));
		this.cm_header_col3=element(by.xpath("//div[@class='inner-card inner-card--alt']"));
		this.cm_bt_val=element(by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'Behavioral Test')]"));
		this.cm_bhcensus1_val=element(by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'BH Census - 07/09/2019')]"));
		this.cm_bhcensus2_val=element(by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'BH Census - 07/21/2019')]"));
		this.cm_bhcensus3_val=element(by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'BH Census - 07/25/2019')]"));
		this.cm_more_icon=element(by.xpath("//mmr-icons[contains(@icon,'more')]"));
		this.cm_quick_edit_icon=element(by.xpath("//mmr-icons[contains(@icon,'header-edit')]"));
		this.cm_quick_chat_icon=element(by.xpath("//mmr-icons[contains(@icon,'header-chat')]"));
		this.cm_quick_casenote_icon=element(by.xpath("//mmr-icons[contains(@icon,'header-add-casenote')]"));
		this.cm_quick_tag_icon=element(by.xpath("//mmr-icons[contains(@icon,'header-add-tag')]"));
		this.cm_casenotes_text=element(by.xpath("//div[@id='nav_menu_label_casenotes']"));
		this.cm_casenotes_header_text="//span[@id='cn_header_title']";
		this.m_casenotes_title="//span[contains(@id,'title')][contains(.,'$replaceToken$')]";

		this.cm_consults_icon=element(by.xpath("//div[@id='nav_menu_icon_consults']//mmr-icons"));
		this.cm_careextender_icon=element(by.xpath("//div[contains(@id,'careextenders')][@class='side-nav-icons']"));
		this.cm_careextender_text=element(by.xpath("//div[contains(@id,'careextenders')][@class='menuitem-text'][contains(.,'Care Extenders')]"));
		
		this.cm_consults_text=element(by.xpath("//div[@id='nav_menu_label_consults']"));
		this.cm_consults_header_text="//span[@id='cn_header_title']";
		this.m_consults_title="//span[contains(@id,'title')][contains(.,'$replaceToken$')]";

		this.cm_assessments_icon=element(by.xpath("//mmr-icons[@icon='assessments']"));
		this.cm_assessments_icon_str="//mmr-icons[@icon='$replaceToken$']";
		this.cm_analytics_icon_str="//mmr-icons[contains(@icon,'$replaceToken$')]";
		this.cm_programs_icon_str="//mmr-icons[contains(@icon,'$replaceToken$')]";
		this.cm_assessments_text=element(by.xpath("//div[contains(@id,'assessments')][@class='menuitem-text'][contains(.,'Assessments')]"));
		this.cm_assessments_header_text="//span[contains(@id,'title')][contains(.,'Member Assessments')]";
		this.cm_assessments_count="//span[contains(@class,'number-badge')]";
		this.cm_reports_icon=element(by.xpath("//mmr-icons[@icon='reports']"));
		this.cm_reports_text=element(by.xpath("//div[contains(@id,'reports')][@class='menuitem-text'][contains(.,'Reports')]"));
		this.cm_analytics_text=element(by.xpath("//div[contains(@id,'analytics')][@class='menuitem-text'][contains(.,'Analytics')]"));
		this.cm_programs_text=element(by.xpath("//div[contains(@id,'programs')][@class='menuitem-text'][contains(.,'Programs')]"));

		this.cm_reports_header_text="//span[contains(@id,'title')][contains(.,'Reports')]";
		this.cm_analytics_header_text="//span[contains(@id,'title')][contains(.,'Analytics')]";
		this.cm_programs_header_text="//span[contains(@id,'title')][contains(.,'Programs')]";


		this.cm_reports_image="//div[@class='category-card__text'][contains(.,'$replaceToken$')]//parent::div//img";
		this.cm_reports_txt="//div[@class='category-card__text'][contains(.,'$replaceToken$')]";
		this.cm_eng_req_icon="//mmr-support-requests-icon[@mattooltip='$replaceToken$']";
		this.cm_activity_feed_icon="//mmr-notification-indicator-icon[@mattooltip='$replaceToken$']";
		this.cm_activity_text=element(by.xpath("//div[@class='is-bold'][contains(text(),'Activity')]"));
		this.cm_activity_notify=element(by.xpath("//div[contains(@class,'notification-link')][contains(text(),'Mark all as Read')]"));

		this.cm_chat_icon="//mmr-messenger-toolbar-button[@mattooltip='$replaceToken$']";
		this.cm_support_help_icon="//button[contains(@mattooltip,'$replaceToken$')]";
		this.cm_down_arrow=element(by.xpath("//span[@class='down-arrow']"));
		this.cm_up_arrow=element(by.xpath("//div[@class='avatar-container avatar--default']"));

		this.mmr_eng_txt="//div[contains(@class,'userlogin-name')][contains(.,'$replaceToken$')]";
		this.mmr_cm_txt=element(by.xpath("//div[contains(@class,'userlogin-name')][contains(.,'MMR CaseManager')]"));
		//this.mmr_eng_txt=element(by.xpath("//div[contains(@class,'userlogin-name')][contains(.,'MMR CaseManager')]"));
		this.mmr_cm_safemodeoff_silder=element(by.xpath("//label[contains(@for,'safeModeToggle')]"));
		this.mmr_cm_safemodeoff_Toggle=element(by.xpath("//div[contains(@mattooltip,'Safe Mode Toggle')]"));
		this.mmr_cm_darkmodeon_silder=element(by.xpath("//div[contains(@class,'slide-select')]//label[@for='darkModeToggle']"));
		this.mmr_cm_changlog_txt=element(by.xpath("//div[contains(@class,'logout-container logout-options item')][contains(.,'Changelog')]"));
		this.mmr_cm_logout_btn=element(by.xpath("//div[contains(@class,'logout-container logout-options')][contains(.,'Logout')]"));
		this.mmr_cm_version_num=element(by.xpath("//p[@class='mat-line'][contains(.,'Version Number: 0.1.0')]"));
		this.mmr_cm_build_num=element(by.xpath("//p[@class='mat-line'][contains(.,'Build: 20200404.104812')]"));

		this.mmr_careext_data="//span[contains(@class,'mind-page-display-field-title')]//parent::div//span[contains(@class,'mind-page-display-field-value')][contains(text(),'$replaceToken$')]";
		this.mmr_careext_role="//span[contains(@class,'mind-page-display-field-title')]//parent::div//span[contains(@class,'mind-page-display-field-value')]//label[contains(text(),'$replaceToken$')]";
		//mmr-messenger-toolbar-button[@mattooltip='$replaceToken$']
//body[@class='mmr']/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-connected-position-bounding-box']/div[@id='cdk-overlay-10']/div[@id='mat-menu-panel-0']/div[@class='mat-menu-content ng-tns-c162-6']/div[3]/div[1]
	}

}