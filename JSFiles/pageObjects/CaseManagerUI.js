"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CaseManagerUI {
    constructor() {
        this.m_tag_add = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Add Tag')]//parent::button"));
        this.m_task_text = protractor_1.element(protractor_1.by.xpath("//a[@id='nav_menu_item_tasks']"));
        this.m_task_header_text = protractor_1.element(protractor_1.by.xpath("//span[@id='cn_header_title']"));
        this.task_lane_count = "//div[contains(@class,'mmr-lane__title')]//div[contains(text(),'$replaceToken$')]//span";
        this.m_tasklane_title = "//div[contains(@class,'mmr-lane__title')][contains(.,'$replaceToken$')]";
        this.m_filter_label = protractor_1.element(protractor_1.by.xpath("//div[@class='filter-header-label'][contains(.,'SELECTED LIST:')]"));
        this.m_addfilter_btn = protractor_1.element(protractor_1.by.xpath("//button[@type='button'][contains(.,'Add Filter')]"));
        this.m_none_btn = protractor_1.element(protractor_1.by.xpath("//button[@type='button'][contains(.,'None')]"));
        this.m_members_text = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'people')][@class='menuitem-text'][contains(.,'Members')]"));
        this.m_members_title = protractor_1.element(protractor_1.by.xpath("//span[contains(.,'Members')]"));
        this.ml_search = protractor_1.element(protractor_1.by.xpath("//input[contains(@placeholder,'Search')]"));
        this.ml_select_member_num = "//tr[@id='memberlist_table_row_' or @id='memberlist_registry_table_row_']//td//div//a[contains(text(),'$membname$')]//parent::div//parent::td//div[@class='btn-copy cc-elm'][contains(.,'$membnumber$')]";
        this.ml_select_member = "//tr[@id='memberlist_table_row_' or @id='memberlist_registry_table_row_']//td//div//a[text()='$replaceToken$']";
        this.ml_first_member = "//tr[contains(@id,'ce_list_table_row') or @id='memberlist_registry_table_row_']//td//div//a[contains(text(),'$replaceToken$')]";
        this.ml_view_button = "//div[contains(@mattooltip,'$replaceToken$')]";
        this.ml_add_memb_button = "//span[contains(text(),'$replaceToken$')]";
        this.menuItemXpath = protractor_1.element(protractor_1.by.xpath("//a[@id='nav_menu_item_members']"));
        this.cm_list_view = "//div[@class='view-buttons__btn selected']";
        this.cm_lanestatus_view = "//div[contains(@mattooltip,'Lane Status View')]";
        this.cm_outreach_view = "//div[contains(@mattooltip,'Outreach View')]";
        this.cm_registry_view = "//div[contains(@mattooltip,'Registry View')]";
        this.cm_map_view = "//div[contains(@mattooltip,'Map View')]";
        this.cm_emrid_label = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'EMR ID: ')]"));
        this.cm_emrid_val = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'EIDMMRMEMB34')]"));
        this.cm_dob_label = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'DOB:')]"));
        this.cm_dob_val = protractor_1.element(protractor_1.by.xpath("//div[@class='font-size--small'][contains(text(),'01')]"));
        this.cm_provider_label = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Provider:')]"));
        this.cm_provider_val = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Rahul Dravid')]"));
        this.cm_provider_phone_label = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Provider Phone Number:')]"));
        this.cm_practice_label = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Practice')]"));
        this.cm_practice_val = protractor_1.element(protractor_1.by.xpath("p[contains(.,'Test')]"));
        this.cm_medicaid_label = protractor_1.element(protractor_1.by.xpath("//p[@ctc-style='large'][contains(.,'Medicaid ID: ')]"));
        this.cm_medicaid_val = protractor_1.element(protractor_1.by.xpath("p[contains(text(),'MMRMEMB34')]"));
        this.cm_cont_details = protractor_1.element(protractor_1.by.xpath("//div[@class='card__details'][contains(.,'Primary: (503) 454-4353Home: (212) 561-8001 Work: (212) 561-8002')]"));
        this.cm_primary_label = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Primary:')]"));
        this.cm_primary_ph_val = protractor_1.element(protractor_1.by.xpath("//span[@class='cc-elm'][contains(.,'(503) 454-4353')]"));
        this.cm_home_ph_val = protractor_1.element(protractor_1.by.xpath("//span[@class='cc-elm'][contains(.,'(212) 561-8001')]"));
        this.cm_work_ph_val = protractor_1.element(protractor_1.by.xpath("//span[@class='cc-elm'][contains(.,'(212) 561-8002')]"));
        this.cm_home_label = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Home:')]"));
        this.cm_work_label = protractor_1.element(protractor_1.by.xpath("//p[contains(.,'Work:')]"));
        this.cm_email_val = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'mmr.memb')]"));
        this.cm_address_val = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'12340 Boggy Creek Rd, Orlando, FL 32824, USA')]"));
        this.cm_header_col3 = protractor_1.element(protractor_1.by.xpath("//div[@class='inner-card inner-card--alt']"));
        this.cm_bt_val = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'Behavioral Test')]"));
        this.cm_bhcensus1_val = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'BH Census - 07/09/2019')]"));
        this.cm_bhcensus2_val = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'BH Census - 07/21/2019')]"));
        this.cm_bhcensus3_val = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'ornamental tag')][contains(.,'BH Census - 07/25/2019')]"));
        this.cm_more_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@icon,'more')]"));
        this.cm_quick_edit_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@icon,'header-edit')]"));
        this.cm_quick_chat_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@icon,'header-chat')]"));
        this.cm_quick_casenote_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@icon,'header-add-casenote')]"));
        this.cm_quick_tag_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@icon,'header-add-tag')]"));
        this.cm_casenotes_text = protractor_1.element(protractor_1.by.xpath("//div[@id='nav_menu_label_casenotes']"));
        this.cm_casenotes_header_text = "//span[@id='cn_header_title']";
        this.m_casenotes_title = "//span[contains(@id,'title')][contains(.,'$replaceToken$')]";
        this.cm_consults_icon = protractor_1.element(protractor_1.by.xpath("//div[@id='nav_menu_icon_consults']//mmr-icons"));
        this.cm_careextender_icon = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'careextenders')][@class='side-nav-icons']"));
        this.cm_careextender_text = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'careextenders')][@class='menuitem-text'][contains(.,'Care Extenders')]"));
        this.cm_consults_text = protractor_1.element(protractor_1.by.xpath("//div[@id='nav_menu_label_consults']"));
        this.cm_consults_header_text = "//span[@id='cn_header_title']";
        this.m_consults_title = "//span[contains(@id,'title')][contains(.,'$replaceToken$')]";
        this.cm_assessments_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[@icon='assessments']"));
        this.cm_assessments_icon_str = "//mmr-icons[@icon='$replaceToken$']";
        this.cm_analytics_icon_str = "//mmr-icons[contains(@icon,'$replaceToken$')]";
        this.cm_programs_icon_str = "//mmr-icons[contains(@icon,'$replaceToken$')]";
        this.cm_assessments_text = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'assessments')][@class='menuitem-text'][contains(.,'Assessments')]"));
        this.cm_assessments_header_text = "//span[contains(@id,'title')][contains(.,'Member Assessments')]";
        this.cm_assessments_count = "//span[contains(@class,'number-badge')]";
        this.cm_reports_icon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[@icon='reports']"));
        this.cm_reports_text = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'reports')][@class='menuitem-text'][contains(.,'Reports')]"));
        this.cm_analytics_text = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'analytics')][@class='menuitem-text'][contains(.,'Analytics')]"));
        this.cm_programs_text = protractor_1.element(protractor_1.by.xpath("//div[contains(@id,'programs')][@class='menuitem-text'][contains(.,'Programs')]"));
        this.cm_reports_header_text = "//span[contains(@id,'title')][contains(.,'Reports')]";
        this.cm_analytics_header_text = "//span[contains(@id,'title')][contains(.,'Analytics')]";
        this.cm_programs_header_text = "//span[contains(@id,'title')][contains(.,'Programs')]";
        this.cm_reports_image = "//div[@class='category-card__text'][contains(.,'$replaceToken$')]//parent::div//img";
        this.cm_reports_txt = "//div[@class='category-card__text'][contains(.,'$replaceToken$')]";
        this.cm_eng_req_icon = "//mmr-support-requests-icon[@mattooltip='$replaceToken$']";
        this.cm_activity_feed_icon = "//mmr-notification-indicator-icon[@mattooltip='$replaceToken$']";
        this.cm_activity_text = protractor_1.element(protractor_1.by.xpath("//div[@class='is-bold'][contains(text(),'Activity')]"));
        this.cm_activity_notify = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'notification-link')][contains(text(),'Mark all as Read')]"));
        this.cm_chat_icon = "//mmr-messenger-toolbar-button[@mattooltip='$replaceToken$']";
        this.cm_support_help_icon = "//button[contains(@mattooltip,'$replaceToken$')]";
        this.cm_down_arrow = protractor_1.element(protractor_1.by.xpath("//span[@class='down-arrow']"));
        this.cm_up_arrow = protractor_1.element(protractor_1.by.xpath("//div[@class='avatar-container avatar--default']"));
        this.mmr_eng_txt = "//div[contains(@class,'userlogin-name')][contains(.,'$replaceToken$')]";
        this.mmr_cm_txt = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'userlogin-name')][contains(.,'MMR CaseManager')]"));
        //this.mmr_eng_txt=element(by.xpath("//div[contains(@class,'userlogin-name')][contains(.,'MMR CaseManager')]"));
        this.mmr_cm_safemodeoff_silder = protractor_1.element(protractor_1.by.xpath("//label[contains(@for,'safeModeToggle')]"));
        this.mmr_cm_safemodeoff_Toggle = protractor_1.element(protractor_1.by.xpath("//div[contains(@mattooltip,'Safe Mode Toggle')]"));
        this.mmr_cm_darkmodeon_silder = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'slide-select')]//label[@for='darkModeToggle']"));
        this.mmr_cm_changlog_txt = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'logout-container logout-options item')][contains(.,'Changelog')]"));
        this.mmr_cm_logout_btn = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'logout-container logout-options')][contains(.,'Logout')]"));
        this.mmr_cm_version_num = protractor_1.element(protractor_1.by.xpath("//p[@class='mat-line'][contains(.,'Version Number: 0.1.0')]"));
        this.mmr_cm_build_num = protractor_1.element(protractor_1.by.xpath("//p[@class='mat-line'][contains(.,'Build: 20200404.104812')]"));
        this.mmr_careext_data = "//span[contains(@class,'mind-page-display-field-title')]//parent::div//span[contains(@class,'mind-page-display-field-value')][contains(text(),'$replaceToken$')]";
        this.mmr_careext_role = "//span[contains(@class,'mind-page-display-field-title')]//parent::div//span[contains(@class,'mind-page-display-field-value')]//label[contains(text(),'$replaceToken$')]";
        //mmr-messenger-toolbar-button[@mattooltip='$replaceToken$']
        //body[@class='mmr']/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-connected-position-bounding-box']/div[@id='cdk-overlay-10']/div[@id='mat-menu-panel-0']/div[@class='mat-menu-content ng-tns-c162-6']/div[3]/div[1]
    }
}
exports.CaseManagerUI = CaseManagerUI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzZU1hbmFnZXJVSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0Nhc2VNYW5hZ2VyVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0Q7QUFFL0QsTUFBYSxhQUFhO0lBMEd0QjtRQUVGLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGVBQWUsR0FBQyx5RkFBeUYsQ0FBQztRQUUvRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMseUVBQXlFLENBQUM7UUFDaEcsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQyxDQUFDO1FBQ3RILElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFD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