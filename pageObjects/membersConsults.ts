import { ElementFinder,element,by, browser } from "protractor";
     
export class membersConsults
{
	m_consult_add: ElementFinder;
	m_consult_add_diagnosis: ElementFinder;
	m_consult_add_measure: ElementFinder;
	m_measure_assessment: ElementFinder;
	m_measure_assessment_dropdown: string;
	m_measure_start_date: ElementFinder;
	m_measure_gap: ElementFinder;
	m_measure_notes: ElementFinder;
	m_measure_save: ElementFinder;
	m_consult_medication_notes: ElementFinder;
	m_consult_notes: ElementFinder;
	m_consult_details_date_created: ElementFinder;
	m_consult_details_date_submitted: ElementFinder;
	m_consult_details_consult_type: ElementFinder;
	m_consult_details_status: ElementFinder;
	m_consult_detais_diagnosis: ElementFinder;
	m_consult_details_diagnosis_code: ElementFinder;
	m_consult_details_diagnosis_status: ElementFinder;
	m_consult_details_mp_name: ElementFinder;
	m_consult_details_mp_desc: ElementFinder;
	m_consult_details_med_notes: ElementFinder;
	m_consult_details_cons_notes: ElementFinder;
	m_discard_btn: ElementFinder;
	m_consult_list_row: ElementFinder;
	m_consult_list_row_edit: ElementFinder;
	m_publish_btn: ElementFinder;
	m_diagnoses_code: ElementFinder;
	m_dianoses_code_dropdown_str: string;
	m_dianoses_sourcetype: ElementFinder;
	m_dianoses_sourcetype_dropdown: string;
	m_dianoses_type: ElementFinder;
	m_dianoses_type_dropdown: string;
	m_diagnoses_save: ElementFinder;
	m_ov_save: ElementFinder;
	m_measure_notes_str: string;
	m_consult_detais_diagnosis_str: string;
	m_consult_list_row_str: string;
	m_consult_list_row_edit_str: string;
	m_consult_details_mp_name2: string;
	m_consult_details_mp_desc2: string;
	m_consult_details_diagnosis_code_str: string;
	m_consult_details_diagnosis_status_str: string;
	m_consult_details_mp_name_str: string;
	m_consult_details_mp_desc_str: string;
	m_consult_details_diagnosis_status_str1: string;
	m_consult_tsugg_notes: string;
	tasksTab: string;
	membHeader: string;
	assessmentTab: string;
	consult_first: string;
	consult_Edit: string;
	m_consult_row_edit: string;
	m_consult_draft_notes: ElementFinder;
	
    
    

    constructor()
    {
	
	this.m_consult_add=element(by.xpath("//span[contains(text(),'Add Consult')]//parent::button"));
	this.m_consult_add_diagnosis=element(by.xpath("//span[contains(text(),'Add Diagnosis')]//parent::button[@id='add_prog_action_button']"));
	this.m_consult_add_measure=element(by.xpath("//span[contains(text(),'Add Measurement Plan')]//parent::button[@id='add_prog_action_button']"));
	this.m_measure_assessment=element(by.xpath("//input[@formcontrolname='assessment']"));
	this.m_measure_assessment_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_measure_start_date=element(by.xpath("//input[@formcontrolname='start_date']"));
	this.m_measure_gap=element(by.xpath("//input[@formcontrolname='gap_in_weeks']"));
	this.m_measure_notes=element(by.xpath("//textarea[@formcontrolname='notes']"));
	this.m_measure_notes_str="//textarea[@formcontrolname='notes']";
	this.m_measure_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
	this.m_consult_medication_notes=element(by.xpath("//textarea[@placeholder='Treatment Suggestions']"));
	//this.m_consult_tsugg_notes="//textarea[@placeholder='Treatment Suggestions']";
	this.m_consult_notes=element(by.xpath("//textarea[@placeholder='Notes']"));
	this.m_consult_details_date_created=element(by.xpath("//span[contains(text(),'Date Created:')]//following-sibling::span[1]"));
	this.m_consult_details_date_submitted=element(by.xpath("//span[contains(text(),'Date Submitted:')]//following-sibling::span[1]"));
	this.m_consult_details_consult_type=element(by.xpath("//span[contains(text(),'Consult Type:')]//following-sibling::span[1]"));
	this.m_consult_details_status=element(by.xpath("//span[contains(text(),'Consult Status:')]//following-sibling::span"));
	//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),' Cannabis abuse, in remission')]
	this.m_consult_detais_diagnosis=element(by.xpath("//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),' $replaceToken$')]"));

	//this.m_consult_detais_diagnosis=element(by.xpath("//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[1]"));
	this.m_consult_detais_diagnosis_str="//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),'$replaceToken$')]";
	this.m_consult_details_diagnosis_code=element(by.xpath("//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[2]"));
	this.m_consult_details_diagnosis_code_str="//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),'$replaceToken$')]";

	this.m_consult_details_diagnosis_status=element(by.xpath("//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[3]"));
	this.m_consult_details_diagnosis_status_str1="//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(.,'$replaceToken$')]";

	this.m_consult_details_diagnosis_status_str="//h1[contains(text(),'Diagnoses')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(.,'$replaceToken$')]";
	this.m_consult_details_mp_name=element(by.xpath("//h1[contains(text(),'Measurement Plans')]//parent::div//following-sibling::div//table//tbody//tr//td[1]"));
	this.m_consult_details_mp_name_str="//h1[contains(text(),'Measurement Plans')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),'$replaceToken$')]";
	this.m_consult_details_mp_desc=element(by.xpath("//h1[contains(text(),'Measurement Plans')]//parent::div//following-sibling::div//table//tbody//tr//td[2]"));
	this.m_consult_details_mp_desc_str="//h1[contains(text(),'Measurement Plans')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),'$replaceToken$')]";

	this.m_consult_details_mp_name2="//h1[contains(text(),'Measurement Plans')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),'$replaceToken$')]";

	this.m_consult_details_mp_desc2="//h1[contains(text(),'Measurement Plans')]//parent::div//following-sibling::div//table//tbody//tr//td[contains(text(),'$replaceToken$')]";
	
	
	this.m_consult_details_med_notes=element(by.xpath("//h2[text()=' Treatment Suggestions ']//following-sibling::div//pre"));
	this.m_consult_details_cons_notes=element(by.xpath("//h2[text()=' Notes ']//following-sibling::div//pre"));
	this.m_discard_btn=element(by.xpath("//span[.=' Discard ']//parent::button"));
	//this.m_consult_list_row=element(by.xpath("//td[contains(@class,'consult-created') and contains(text(),'$replaceToken$')]"));
	this.m_consult_list_row_str="//td[contains(@class,'consult-created') and contains(text(),'$replaceToken$')]";
	//this.m_consult_list_row_edit=element(by.xpath("//td[contains(@class,'consult-created') and contains(text(),'$replaceToken$')]//parent::tr//td[contains(@class,'column-actions')]//span//mmr-icons[@mattooltip='View Details']"));
	this.m_consult_list_row_edit_str="//td[contains(@class,'consult-created') and contains(text(),'$replaceToken$')]//parent::tr//td[contains(@class,'column-actions')]//span//mmr-icons[@mattooltip='View Details']";
	this.m_publish_btn=element(by.xpath("//span[.=' Publish ']//parent::button"));
	this.m_diagnoses_code=element(by.xpath("//input[@ng-reflect-name='query']"));
	this.m_dianoses_code_dropdown_str="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_dianoses_sourcetype=element(by.xpath("//mat-select[contains(@aria-label,'Source Type')]//parent::div[@class='mat-form-field-infix']"));
	this.m_dianoses_sourcetype_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_dianoses_type=element(by.xpath("//mat-select[contains(@aria-label,'Diagnosis Type')]//parent::div[@class='mat-form-field-infix']"));
	this.m_dianoses_type_dropdown="//span[@class='mat-option-text' and contains(text(),'$replaceToken$')]";
	this.m_diagnoses_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
	this.m_ov_save=element(by.xpath("//span[contains(text(),'Save')]//parent::button"));
	this.tasksTab="//div[@class='mat-tab-label-content'][contains(.,'Tasks')]";
	this.membHeader="//div[@class='header__title'][contains(.,'MMR')]";
	this.assessmentTab="//div[@class='mat-tab-label-content' and contains(text(),'Assessments')]";

	this.consult_first="//td[contains(@class,'mat-cell cdk-cell cdk-column-consult-created mat-column-consult-created ng-star-inserted')]";
	this.m_consult_row_edit="//td[contains(@class,'mat-cell cdk-cell cdk-column-status mat-column-status ng-star-inserted') and contains(text(),'$replaceToken$')]//parent::tr//td[contains(@class,'column-actions')]//span//mmr-icons[@mattooltip='Edit']";
	this.m_consult_draft_notes=element(by.xpath("//textarea[contains(@placeholder,'Treatment Suggestions')]"));	
}

}