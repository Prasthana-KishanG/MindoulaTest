import { ElementFinder,element,by, browser } from "protractor";
     
export class membersTags
{

	m_tag_add: ElementFinder;
	m_tag_search: ElementFinder;
	m_tag_searchinput: ElementFinder;
	m_tag_selectoption_str: string;
	m_tag_startdate: ElementFinder;
	m_tag_addbtn: ElementFinder;
	m_tag_data_str: string;
	tagname: string;
	startdate: string;
	tagandstartdate: string;
	m_tag_selectdate: ElementFinder;
	m_tag_edit_btn: string;
	m_tag_selectnextdate: ElementFinder;
	m_tag_save_btn: ElementFinder;
	m_tag_toast_close: ElementFinder;
	m_tag_delete_btn: string;
	m_tag_yes_btn: ElementFinder;
	m_tag_bh_text: ElementFinder;
	m_tag_medical_text: ElementFinder;
	m_tag_obs_text: ElementFinder;
	m_tag_others_text: ElementFinder;
	m_tag_addicon: ElementFinder;
	m_tag_selectpredate: ElementFinder;
	
	
    
    

    constructor()
    {
		this.m_tag_add=element(by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Add Tag')]//parent::button"));
		this.m_tag_search=element(by.xpath("//div[contains(@class,'mat-form-field-infix')][contains(.,'Search Tag *')]"));
		this.m_tag_searchinput=element(by.xpath("//input[contains(@placeholder,'search')]"));
		this.m_tag_selectoption_str="//mat-option[contains(@class,'mat-option mat-focus-indicator')][contains(.,'$replaceToken$')]";
		this.m_tag_startdate=element(by.xpath("//input[@formcontrolname='startDate']"));
		this.m_tag_selectdate=element(by.xpath("//td[contains(@aria-label,'April 1, 2020')]"));
		this.m_tag_selectnextdate=element(by.xpath("//td[contains(@aria-label,'February 2, 2020')]"));
		this.m_tag_selectpredate=element(by.xpath("//td[contains(@aria-label,'February 2, 2020')]"));
		//input[contains(@formcontrolname,'startDate')]
		this.m_tag_addbtn=element(by.xpath("//button[contains(@type,'submit')]"));
		this.m_tag_data_str="//mmr-tag[contains(.,'$replaceToken$')]";

		this.tagname= "//span[contains(@class,'text')][contains(.,'$replaceToken$')]";
        this.startdate= "//span[contains(@class,'text')][contains(.,'$replaceToken1$')]//parent::div//preceding-sibling::span[contains(.,'$replaceToken2$')]";
		//this.tagandstartdate= "//span[@class='text'][contains(text(),'Behavioral Test')]//parent::div//preceding-sibling::span[contains(text(),'02/02/2020')]//parent::div";
		this.tagandstartdate= "//mmr-tag[contains(.,'Behavioral Test  02/02/2020')]";
		this.m_tag_edit_btn="//h3[contains(.,'$replaceToken$')]//parent::div//span[contains(@class,'cursor-point')]//mmr-icons[@mattooltip='Edit'][contains(@id,'btn')]";
		this.m_tag_save_btn=element(by.xpath("//span[@class='ng-star-inserted'][contains(.,'Save')]"));
		this.m_tag_toast_close=element(by.xpath("//a[contains(@class,'ui-toast-close-icon')]"));
		this.m_tag_delete_btn="//h3[contains(.,'$replaceToken$')]//parent::div//span[contains(@class,'cursor-point')]//mmr-icons[@mattooltip='Delete'][contains(@id,'btn')]";
		this.m_tag_yes_btn=element(by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Yes')]"));

		this.m_tag_bh_text= element(by.xpath("//h3[contains(.,'Behavioral Health')]//parent::div//div[contains(@class,'ml')]"));
		this.m_tag_medical_text= element(by.xpath("//h3[contains(.,'Medical')]//parent::div//div[contains(@class,'ml')]"));
		this.m_tag_obs_text= element(by.xpath("//h3[contains(.,'Observations')]//parent::div//div[contains(@class,'ml')]"));
		this.m_tag_others_text= element(by.xpath("//h3[contains(.,'Others')]//parent::div//div[contains(@class,'ml')]"));
		this.m_tag_addicon=element(by.xpath("//mmr-icons[contains(@mattooltip,'Add Tag')]"));

	
	}

}