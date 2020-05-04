import { ElementFinder,element,by, browser } from "protractor";
     
export class verifyFilters
{
    task_lane_title: string;
    add_filter: ElementFinder;
    available_filter_option_str: string;
    expand_parent_program_str: string;
    child_program_str: string;
    apply_filter: ElementFinder;
    case_notes_title: string;
    consults_title: string;
    edit_filter: ElementFinder;
    task_assignto: ElementFinder;
    task_assignto_dropdown: any;
    task_tasktype: ElementFinder;
    task_tasktype_dropdown: string;
    task_taskstatus: ElementFinder;
    task_taskstatus_dropdown: string;
    member_lane_val: string;
    role_careextender: ElementFinder;
    role_careextender_dropdown: string;
    mc_chkbox: string;
    outreach_from: ElementFinder;
    outreach_to: ElementFinder;
    eng_txtbox: string;
    eng_dropdown: string;
    count_input: ElementFinder;
    selectdates_input: ElementFinder;
    customrange_btn: ElementFinder;
    previous_btn_from: ElementFinder;
    previous_btn_to: ElementFinder;
    from_date: ElementFinder;
    to_date: ElementFinder;
    apply_date: ElementFinder;
    cm_reports_image: string;
    cm_reports_txt: string;
    cm_member_title: string;
    member_lane_reports: string;
    timespent_selection_chbk: string;
    timespent_txtbox: ElementFinder;
    excludemaxtime_chkbox: string;
    filtermember_txtbox: string;
    select_status_input: ElementFinder;
    ml_view_button: string;
    

    constructor()
    {
        this.task_lane_title="//div[contains(@class,'mmr-lane__title')]//div[contains(text(),'$replaceToken$')]//span";
        this.member_lane_val="//span[contains(@class,'number-badge')]";
        this.add_filter=element(by.xpath("//span[contains(text(),'Add Filter')]//parent::button"));
        this.available_filter_option_str="//h4[contains(text(),'AVAILABLE FILTERS')]//parent::div//ul//li[contains(text(),'$replaceToken$')]";
        this.expand_parent_program_str="//span[@class='mat-checkbox-label' and contains(text(),'$replaceToken$')]//parent::label//parent::mat-checkbox//preceding-sibling::button";
        //this.child_program_str="//span[contains(text(),'$replaceToken$')]";
        this.child_program_str="//span[@class='mat-checkbox-label'][contains(text(),'$replaceToken$')]";
        //span[@class='mat-checkbox-label'][contains(text(),'Larson, Vandervort and Brekke')]
        this.apply_filter=element(by.xpath("//span[contains(text(),'Apply')]//parent::button"));
        this.case_notes_title="//div[@class='heading-text']//page-heading//span";
        this.consults_title="//div[@class='heading-text']//page-heading//span";
        this.edit_filter=element(by.xpath("//mmr-icons[contains(@mattooltip,'Edit Filters')]"));

        this.task_assignto=element(by.xpath("//input[contains(@role,'combobox')]"));
        this.task_assignto_dropdown="//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";

        this.role_careextender=element(by.xpath("//ng-select[@placeholder='Select Care Extender']//input"));
        this.role_careextender_dropdown="//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";

        this.task_tasktype=element(by.xpath("//input[contains(@role,'combobox')]"));
        this.task_tasktype_dropdown="//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";   
        this.task_taskstatus=element(by.xpath("//input[contains(@role,'combobox')]"));
        this.task_taskstatus_dropdown="//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]"; 
        this.mc_chkbox="//span[@class='mat-checkbox-label'][contains(text(),'$replaceToken$')]//parent::label//div[contains(@class,'mat-checkbox-inner-container')]";                       
        this.outreach_from=element(by.xpath("//input[contains(@id,'outreachScoreFrom')]"));
        this.outreach_to=element(by.xpath("//input[contains(@formcontrolname,'outreachScoreTo')]"));
        this.eng_txtbox="//ng-select[contains(@formcontrolname,'$replaceToken$')]";
        this.eng_dropdown="//span[contains(@class,'ng-option-label')][contains(.,'')]";
        this.count_input=element(by.xpath("//input[contains(@appearance,'outline')]"));
        this.selectdates_input=element(by.xpath("//input[contains(@placeholder,'Select Dates')]"));
        this.customrange_btn=element(by.xpath("//button[@type='button'][contains(.,'Custom range')]"));
        this.previous_btn_from=element(by.xpath("//th[contains(@class,'prev available')]"));
        this.previous_btn_to=element(by.xpath("//div[@class='calendar right ng-star-inserted']//th[@class='prev available ng-star-inserted']"));
        this.from_date=element(by.xpath("//div[@class='calendar left ng-star-inserted']//tr[1]//td[@class='available ng-star-inserted'][contains(.,'1')]"));
        this.to_date=element(by.xpath("//div[@class='calendar right ng-star-inserted']//tr[1]//td[@class='available ng-star-inserted'][contains(.,'1')]"));
        this.apply_date=element(by.xpath("//button[@class='btn']"));
        this.cm_reports_image="//div[@class='category-card__text'][contains(.,'$replaceToken$')]//parent::div//img";
        this.cm_reports_txt="//div[@class='category-card__text'][contains(.,'$replaceToken$')]";
        
        this.cm_member_title="//td[@role='gridcell'][contains(.,'$replaceToken$')]//parent::tr//td[@role='gridcell']//a[contains(.,'Members')]";
        this.member_lane_reports="//li[contains(.,'Members ')]";
        this.timespent_selection_chbk="//h2[contains(text(),'$selection$')]//following-sibling::div[contains(text(),'$label$')]//parent::div//mat-radio-group//mat-radio-button[contains(.,'$checkBox$')]";
        this.timespent_txtbox=element(by.xpath("//input[contains(@type,'number')]"));
        this.filtermember_txtbox="//h2[@class='mt-3'][contains(.,'$replaceToken$')]//parent::div//div//div//div//div[contains(@class,'mat-form-field-infix')]//input[contains(@type,'number')]";
        this.excludemaxtime_chkbox="//label[@class='mat-checkbox-layout'][contains(.,'$label$')]//div[contains(@class,'mat-checkbox-inner-container')]";
        this.select_status_input=element(by.xpath("//ng-select[@role='listbox'][contains(.,'Select Status')]"));
		this.ml_view_button="//div[contains(@mattooltip,'$replaceToken$')]";
    }

}