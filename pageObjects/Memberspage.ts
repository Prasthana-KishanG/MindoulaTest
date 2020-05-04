import { ElementFinder,element,by, browser } from "protractor";
var CCPIntake="//*[@id='sidenav-content']/mmr-member-assessments-container/tab-details/mmr-page-section/div/section-body/mmr-member-assessments/div[1]/div/table/tbody/tr[2]/td[1]/div/button/span"
const nida_single ="//b[contains(text(),'$paramName$')]//parent::span//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";
const assess_multi ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::div//mat-checkbox//label//span[contains(text(),'$replaceToken$')]";
const assess_textarea ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::Div[@class='question__combo-container']//following-sibling::mat-form-field//div//textarea";
        
export class Memberspage
{
    
    menuIcon:ElementFinder;
    sideNavigation:ElementFinder;
    menuItemXpath:ElementFinder;
    ml_search:ElementFinder;
    ml_memberName:ElementFinder;
    ml_headerTitle:ElementFinder;
    m_tab:ElementFinder;
    HRSN_start:ElementFinder;
    HRSNS_start:ElementFinder;
    CCPIntake_start:ElementFinder;
    CCPIntakeV2_start:ElementFinder;
    PHQ9_start:ElementFinder;
    m_submit_btn:ElementFinder
    m_discard_btn:ElementFinder
    m_discard_yes:ElementFinder
    m_save_btn:ElementFinder
    assess_single:any
    nida_single:any
    assess_multi:any
    assess_textarea:any
    assessmentsTab:any
    assessments:any
    assess_risk:any
    assess_title:any
    assess_total:any
    m_m3_score_type:any
    m_m3_selfharmalert:any
    m_m3_followup:any
    assess_total_desc:any
    assess_followup:any
    m_hrsn_score_type:any
    m_ivrp_responses:any
    m_columbia_responses:any
    Autofill:any
    tab:any
    doctab:any
    hrsnele:any
    CCPIntake:any
    mstart_str:any
    ml_memberName_str:any
    m_assessment_score_str:any
    IVRPIntake:any
    IVRPIntakeV2:any
    CCPIntakeV2:any
    m_edit_btn: ElementFinder;
    m_m3_selfharmalert_close: ElementFinder;
    m_m3_selfharmalert1: any;
    m_m3_score_type1: string;
    resetPwd: ElementFinder;
    confirmResetPwd: ElementFinder;
    resetBtn: ElementFinder;
    email_header: ElementFinder;
    tasksTab: string;
    assess_multinew: string;
    m_select_date: ElementFinder;
    IVRPIntakeV2_start: ElementFinder;
    IVRPV2: string;
    IVRPV3: string;
    constructor()
    {
        
        this.menuIcon=element(by.xpath("//mat-toolbar//div//button[@id='nav_btn_menu']"));
        this.sideNavigation=element(by.tagName("mat-sidenav"));
        this.menuItemXpath=element(by.xpath("//a[@id='nav_menu_item_members']"));
        this.ml_search=element(by.xpath("//input[contains(@placeholder,'Search')]"));
        this.ml_memberName=element(by.xpath("//td[contains(@id,'memberlist_table_row_name_')]//div//a[text()='$name$']"));
        this.ml_headerTitle=element(by.xpath("//*[@id='sidenav-content']/mmr-member-container/div/mmr-member-detail/div/div[1]/div[1]/div/div[1]"));
        this.m_tab=element(by.xpath("//div[@class='mat-tab-label-content' and contains(text(),'$tabname$')]"));
        this.HRSN_start=element(by.xpath("//*[@id='sidenav-content']/mmr-member-assessments-container/tab-details/mmr-page-section/div/section-body/mmr-member-assessments/div[1]/div/table/tbody/tr[20]/td[1]/div/button"));
        this.HRSNS_start=element(by.xpath("//strong[contains(text(),'HRSNS') and contains(text(),'Short')]//parent::div//preceding-sibling::button"));
        this.CCPIntake_start=element(by.xpath("//strong[text()=' CCP Intake  ']//parent::div//preceding-sibling::button"));
        this.CCPIntakeV2_start=element(by.xpath("//strong[text()=' CCP IntakeV2  ']//parent::div//preceding-sibling::button"));

        this.PHQ9_start=element(by.xpath("//strong[text()=' PHQ9  ']//parent::div//preceding-sibling::button"));
        this.tab="//div[@class='mat-tab-label-content' and contains(text(),'$tabname$')]";
        this.m_submit_btn=element(by.xpath("//span[.=' Submit ']//parent::button"));
        this.m_discard_btn=element(by.xpath("//span[.=' Discard ']//parent::button"));
        this.m_discard_yes=element(by.xpath("//span[contains(text(),'Delete')]//parent::buttons"));
        this.m_save_btn=element(by.xpath("//span[.=' Save ']//parent::button"));
        //this.assess_single ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";  
        //this.assess_single ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::div[@class='with-scale']//mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";  
        this.assess_single ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[contains(@class,'question__combo-container ')]//following-sibling::div[contains(@class,'with-scale')]//mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";

        //this.nida_single ="//b[contains(text(),'$paramName$')]//parent::span//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";
        //this.nida_single ="//b[contains(text(),'$paramName$')]//parent::span//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::div[@class='with-scale']//mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";
        this.nida_single ="//b[contains(text(),'$paramName$')]//parent::span//parent::h4//parent::mmr-assessment-question//parent::div[contains(@class,'question__combo-container')]//following-sibling::div[contains(@class,'with-scale')]//mat-radio-group//mat-radio-button//label//div[contains(text(),'$replaceToken$')]";

        this.assess_multi ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[contains(@class,'question__combo-container')]//following-sibling::div//mat-checkbox//label//span[contains(text(),'$replaceToken$')]";
        this.assess_multinew ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container ng-star-inserted']//parent::div//following-sibling::div[contains(@class,'assessment__chip-group')]//mat-checkbox[contains(@class,'mat-checkbox assessment__chips')]//label//span[@class='mat-checkbox-label'][contains(.,'$replaceToken$')]";

       
        //this.assess_multi ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::div[@class='question__combo-container']//following-sibling::div//mat-checkbox//label//span[contains(text(),'$replaceToken$')]";
        this.assess_textarea ="//span[contains(text(),'$paramName$')]//parent::h4//parent::mmr-assessment-question//parent::Div[contains(@class,'question__combo-container')]//following-sibling::mat-form-field//div//textarea";
        this.assessmentsTab="//div[@class='mat-tab-label-content' and contains(text(),'$tabname$')]";
        this.assessments="//div[@class='mat-tab-label-content' and contains(text(),'Assessments')]";
        
        this.assess_risk=element(by.xpath("//div[@class='result-summary push-double--bottom ng-star-inserted']"));
        this.assess_title=element(by.xpath("//mmr-member-assessment-results//div//div//h1//following-sibling::div"));
        this.assess_total=element(by.xpath("//div[@class='dabba-body']"));
        this.m_m3_score_type="//div[@class='score-type' and translate(text(),'abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ')=' $replaceToken$ ']//parent::div//div[@class='data']";
        this.m_m3_score_type1="//div[@class='score-type'][contains(.,'$replaceToken$')]//parent::div//div[@class='data']";
        this.m_m3_selfharmalert=element(by.xpath("//mmr-assessment-self-harm"));
        this.m_m3_selfharmalert1="//mmr-assessment-self-harm";
        //this.m_m3_followup=element(by.xpath("//td[contains(@class,'table-actions')]//div//div[contains(@class,'font-weight--medium')]"));
        this.m_m3_followup=element(by.xpath("//td[contains(@class,'table-actions')]//div//div[contains(@class,'is-bold font-size--small d-flex align-items-center')]"));

        //td[contains(@class,'table-actions')]//div//div[contains(@class,'mr-2 flex-shrink-0')]
        this.assess_total_desc=element(by.xpath("//div[@class='main-score']//div[@class='data']"));
        this.assess_followup=element(by.xpath("//td[contains(@class,'table-actions')]//strong"));
        this.m_hrsn_score_type="//div[@class='score-type' and translate(text(),'abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ')=' $replaceToken$ ']//parent::div//div[@class='data']";
        this.m_ivrp_responses="//div[contains(@class,'assessment-summary__question-container')]//h3[contains(text(),'$replaceToken$')]//following-sibling::div";
        this.m_columbia_responses="//div[contains(@class,'assessment-summary__question-container')]//h3[contains(text(),'$replaceToken$')]//following-sibling::div";
        this.Autofill="//span[contains(text(),'Autofill')]//parent::button";
        this.doctab= "//div[@class='mat-tab-label-content' and contains(text(),'Documents')]//parent::div[@aria-labelledby='documents']";
        this.hrsnele="//strong[.=' HRSN  ']//parent::div//preceding-sibling::button";
        this.CCPIntake="//strong[text()=' CCP Intake  ']//parent::div//preceding-sibling::button"
        this.mstart_str = "//strong[contains(text(),'$replaceToken$')]//parent::div//preceding-sibling::button";
        this.ml_memberName_str="//td[contains(@id,'memberlist_table_row_name_')]//div//a[text()='$name$']"
        this.m_assessment_score_str="//strong[contains(text(),'$replaceToken$')]//parent::div//parent::div//parent::td//following-sibling::td//div[@class='mat-data-node__score ng-star-inserted']//following-sibling::div";
        this.IVRPIntake="//strong[.=' IVRP Intake  ']//parent::div//preceding-sibling::button";
        this.IVRPIntakeV2="//strong[.=' IVRP Intake (V2) ']//parent::div//preceding-sibling::button";
        this.CCPIntakeV2="//strong[text()=' CCP Intake (V2) ']//parent::div//preceding-sibling::button";
        this.IVRPV2="//strong[text()=' IVRP Intake (V2) ']//parent::div//preceding-sibling::button";
        this.IVRPV3="//strong[text()=' IVRP Intake (V3) ']//parent::div//preceding-sibling::button";

        this.m_edit_btn=element(by.xpath("//mmr-member-assessment-results//mmr-icons[@icon='edit']"));
        this.m_m3_selfharmalert_close=element(by.xpath("//mmr-icons[@mattooltip='Close']//mat-icon"));


		this.resetPwd= element(by.xpath("//input[@id='reset_form_pass_text']"));
		this.confirmResetPwd=element(by.xpath("//input[@id='reset_form_confirm_pass_text']"));
        this.resetBtn=element(by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Reset Password')]"));
        //this.email_header=element(by.xpath("//span[@class='cc-elm'][contains(text(),'mmr.memb')]"));
        this.email_header=element(by.xpath("//p[contains(text(),'mmr.memb')]"));
        this.m_select_date=element(by.xpath("//input[contains(@placeholder,'Select Date')]"));

    }

}