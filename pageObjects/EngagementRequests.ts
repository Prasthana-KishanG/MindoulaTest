import { ElementFinder,element,by, browser } from "protractor";
     
export class EngagementRequests
{
	eng_checkin_btn: ElementFinder;
	eng_chat_wintext_str: string;
	eng_dialog__header: ElementFinder;
	eng_checkin_header_btn: ElementFinder;
	eng_checkin_option_one: string;
	eng_checkin_options_str: string;
	eng_checkin_answers: string;
	eng_checkin_answers1: ElementFinder;
	eng_mindy_msg: string;
	eng_mindy_reply_msg: ElementFinder;
	eng_mindy_help: string;
	eng_mindy_help_msg: any;
	eng_mindy_help_msg1: any;
	eng_schedulecall_icon: ElementFinder;
	eng_availtime_txt: ElementFinder;
	eng_availtime_dropdown: string;
	eng_schedulecall_btn: ElementFinder;
	eng_mindy_help_close: ElementFinder;
	eng_schedulecallConfirm_txt: string;
	eng_confirmdialog_close_btn: ElementFinder;
	eng_chatwin_close_btn: ElementFinder;
	eng_careextender_sel_str: string;
	eng_chatmem_btn: ElementFinder;
	eng_chat_txtarea: ElementFinder;
	eng_chat_sendbtn: ElementFinder;
	chat_sentmsg: string;
	chat_sentmsg1: ElementFinder;
	UserBtn: ElementFinder;
	LogoutBtn: ElementFinder;
	eng_schcallmem_btn: ElementFinder;
	engagement_icon: ElementFinder;
	Accept_Btn_str: string;
	Schedule_call_str: string;
	SchedulecallAccept: string;
	ChatAutoreplyAccept: string;
	SchedulecallMarkAsAddressed: string;
	ChatAutoreplyMarkAsAddressed: string;
	name: string;
	type: string;
	AssignedTo: string;
	Assigned: string;
	status1: string;
	Action: string;
	statusUnconfirm: string;
	statusConfirm: string;
	ChatAutoreplyAddCaseNotes: string;
	ChatAutoreplyEditCaseNotes: string;
	ChatAutoreplyClose: string;
	ChatAutoreplyCareExtender: string;
	CareExtenderSelectbox: ElementFinder;
	CareExtenderSearch: ElementFinder;
	CareExtenderAssignto_txt: string;
	SchedulecallCareExtender: string;
	SchedulecallAddCaseNoteDropdown: string;
	SchedulecallCloseWithoutCaseNote: string;
	type_scheduleCall: string;
	eng___chat_header: ElementFinder;
	eng_chat_icon: ElementFinder;
	eng_upload_icon: ElementFinder;
	eng_confirmdialog_header: ElementFinder;
	
    
    

    constructor()
    {
	
	this.eng_checkin_btn=element(by.xpath("//div[contains(@class,'checkout member-header-btn')]"));
	//div[@class='media__name ng-tns-c480-8'][contains(.,'MMR CaseManager')]
	//div[contains(@class,'media__name ng')][contains(.,'$replaceToken$')]
	this.eng_careextender_sel_str="//div[contains(@class,'media__name ng')][contains(.,'$replaceToken$')]";
	this.eng_chat_wintext_str="//div[contains(@class,'messenger-body__header')][contains(.,'$replaceToken$')]";
	this.eng_dialog__header=element(by.xpath("//div[contains(@class,'dialog__header header')][contains(.,'Check In')]"));

	this.eng___chat_header=element(by.xpath("//h1[@class='h2 mb-0 sidebar-title ng-tns-c480-415'][contains(.,'Chat Inbox')]"));
	this.eng_checkin_header_btn=element(by.xpath("//mmr-icons[contains(@icon,'q-doing')]"));
	this.eng_checkin_options_str="//div[text()][contains(text(),'$replaceToken$')]";
	this.eng_checkin_option_one="//div[text()][contains(text(),'Not Well')]";
	// this.eng_checkin_answers="//div[@class='checkin__answer'][contains(.,'$replaceToken$')]";
	// this.eng_checkin_answers1=element(by.xpath("//div[@class='checkin__answer'][contains(.,'I am not doing well.')]"));
	
	this.eng_checkin_answers="//div[@class='message message--sent message--last message--has-attachment']//div[@class='message__content']//div[@class='message__body ng-star-inserted']//div[@class='msg-content message--show']//div[@class='message__checkin ng-star-inserted']//div//div[@class='checkin__answer'][contains(text(),'$replaceToken$')]";
	this.eng_checkin_answers1=element(by.xpath("//div[@class='message message--sent message--last message--has-attachment']//div[@class='message__content']//div[@class='message__body ng-star-inserted']//div[@class='msg-content message--show']//div[@class='message__checkin ng-star-inserted']//div//div[@class='checkin__answer'][contains(text(),'I am not doing well.')]"));

	//div[@class='message message--sent message--last message--has-attachment']//div[@class='message__content']//div[@class='message__body ng-star-inserted']//div[@class='msg-content message--show']//div[@class='message__checkin ng-star-inserted']//div//div[@class='checkin__answer'][contains(text(),'I am not doing well.')]
	//this.eng_mindy_msg="//mmr-message[contains(.,'$replaceToken$')]";
	this.eng_mindy_msg="//div[text()][contains(.,'$replaceToken$')]";
	//div[@class='col-12 col-md-12 p-0'][contains(.,'We will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911.')]
	this.eng_mindy_reply_msg=element(by.xpath("//div[text()][contains(.,'We will get back to you within')]"));
	this.eng_mindy_help="//mmr-icons[contains(@icon,'whatis-icon')]";
	this.eng_mindy_help_msg1=element(by.xpath("//p[contains(.,'Hello, I am Mindy, a virtual assistant of Mindoula.')]"));
	//this.eng_mindy_help_msg=element(by.xpath("//div[contains(@class,'dialog__body text-center')]"));
	this.eng_mindy_help_msg="//div[contains(@class,'dialog__body text-center')]";
	this.eng_mindy_help_close=element(by.xpath("//mmr-icons[contains(@mattooltip,'Close')]"));

	this.eng_schedulecall_icon=element(by.xpath("//mmr-icons[contains(@icon,'schedule-call')]"));
	this.eng_availtime_txt=element(by.xpath("//div[contains(@class,'mat-form-field-flex')][contains(.,'Select Available Time *')]"));
	this.eng_availtime_dropdown="//span[@class='mat-option-text'][contains(.,'$replaceToken$')]";
	this.eng_schedulecall_btn=element(by.xpath("//button[contains(.,'Schedule Call')]"));
	this.eng_schedulecallConfirm_txt="//div[contains(@class,'dialog__body on-call')][contains(.,'You are confirmed for a call on')]";
	this.eng_confirmdialog_close_btn=element(by.xpath("//div[@mattooltip='Close']"));
	this.eng_confirmdialog_header=element(by.xpath("//div[contains(@class,'dialog__header')]"));
	this.eng_chatwin_close_btn=element(by.xpath("//div[contains(@class,'header__action-container')]//span[contains(@mattooltip,'Close')]"));
	this.eng_chatmem_btn=element(by.xpath("//div[contains(@class,'chat member-header-btn')]"));
	this.eng_chat_txtarea=element(by.xpath("//textarea[contains(@placeholder,'Write a message...')]"));
	this.eng_chat_sendbtn=element(by.xpath("//div[contains(@class,'send-button')]"));
	this.chat_sentmsg="//div[contains(@class,'message__text ng-star-inserted')][contains(.,'Good Morning')]";
	this.chat_sentmsg1=element(by.xpath("//div[contains(@class,'message__text ng-star-inserted')][contains(.,'Good Morning')]"));
	this.UserBtn = element(by.xpath("//button[@aria-haspopup='true'][contains(@id,'user')]"));
	this.LogoutBtn = element(by.xpath("//div[@class='logout-container logout-options item-link-name'][contains(.,'Logout')]"));
	this.eng_schcallmem_btn=element(by.xpath("//div[contains(@class,'call member-header-btn')]"));

	this.engagement_icon=element(by.xpath("//mmr-icons[contains(@icon,'engagement-icon')]"));
	this.name="//tr[$i$]//a[contains(text(),'$Name$')]";
	this.type="//tr[$i$]//a[@class='ng-star-inserted'][contains(text(),'$Request_type$')]";
	this.type_scheduleCall="//tr[$i$]//span[@class='font-weight--medium'][contains(text(),'$Request_type$')]";
	//tr[2]//span[@class='font-weight--medium'][contains(.,'Scheduled Call')])[2]
	this.AssignedTo="//tr[$i$]//div[@class='select-ce-name'][contains(text(),'$Assigned_to$')]";
	this.Action="//tr[$i$]//span[contains(text(),'$Action_Status$')]";

	this.status1="//tr[$i$]//div[@class='font-weight--medium'][contains(text(),'$Status$')]";
	this.statusUnconfirm="//tr[$i$]//div[@class='item-meta-info overdue ng-star-inserted'][contains(text(),'$Status$')]";
	this.statusConfirm="//tr[$i$]//div[@class='item-meta-info ng-star-inserted'][contains(text(),'$Status$')]";
	
	this.SchedulecallAccept="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.ChatAutoreplyAccept="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span//a[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),' $Assigned_to$ ')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	//this.ChatAutoreplyAccept="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span//a[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.SchedulecallMarkAsAddressed="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.ChatAutoreplyMarkAsAddressed ="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span//a[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	//this.ChatAutoreplyMarkAsAddressed ="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.ChatAutoreplyAddCaseNotes ="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span//a[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),' $Assigned_to$ ')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.ChatAutoreplyEditCaseNotes ="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),' $Assigned_to$ ')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.ChatAutoreplyClose ="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span//a[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),' $Assigned_to$ ')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[contains(text(),'$Action_Status$')]";
	this.ChatAutoreplyCareExtender ="//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span//a[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]";
	this.SchedulecallCareExtender = "//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::div[contains(text(),'$Status2$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),'$Assigned_to$')]";
	this.SchedulecallAddCaseNoteDropdown= "//a[contains(text(),'$Name$')]//parent::span//parent::td//preceding-sibling::td[@id='sr_type_value']//span[contains(text(),'$Request_type$')]//parent::span//parent::td//following-sibling::td[@id='sr_status_value']//div[contains(text(),'$Status1$')]//parent::td//following-sibling::td//div//div//div//div[contains(text(),' $Assigned_to$ ')]//parent::div//parent::div//parent::div//parent::div//parent::div//parent::td//following-sibling::td//div//div//button//span[@class='mat-button-wrapper']/mat-icon[@role='img']";
	this.SchedulecallCloseWithoutCaseNote =  "//button[contains(.,'Close Without Case Note')]";

	this.CareExtenderSelectbox =element(by.xpath(" //div[contains(@class,'mat-select-value')][contains(.,'')]"));
	this.CareExtenderSearch =element(by.xpath("//input[@placeholder='Search Care Extender']"));
	this.CareExtenderAssignto_txt="//span[contains(text(),'$Assigned_to$')]";
	this.eng_chat_icon=element(by.xpath("//mmr-icons[contains(@icon,'header-chat')]"));

	this.eng_upload_icon=element(by.xpath("//div[contains(@class,'upload-files pointer')]"));
	




    }

}