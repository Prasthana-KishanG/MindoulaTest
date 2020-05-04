"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class membersTags {
    constructor() {
        this.m_tag_add = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Add Tag')]//parent::button"));
        this.m_tag_search = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-form-field-infix')][contains(.,'Search Tag *')]"));
        this.m_tag_searchinput = protractor_1.element(protractor_1.by.xpath("//input[contains(@placeholder,'search')]"));
        this.m_tag_selectoption_str = "//mat-option[contains(@class,'mat-option mat-focus-indicator')][contains(.,'$replaceToken$')]";
        this.m_tag_startdate = protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='startDate']"));
        this.m_tag_selectdate = protractor_1.element(protractor_1.by.xpath("//td[contains(@aria-label,'April 1, 2020')]"));
        this.m_tag_selectnextdate = protractor_1.element(protractor_1.by.xpath("//td[contains(@aria-label,'February 2, 2020')]"));
        this.m_tag_selectpredate = protractor_1.element(protractor_1.by.xpath("//td[contains(@aria-label,'February 2, 2020')]"));
        //input[contains(@formcontrolname,'startDate')]
        this.m_tag_addbtn = protractor_1.element(protractor_1.by.xpath("//button[contains(@type,'submit')]"));
        this.m_tag_data_str = "//mmr-tag[contains(.,'$replaceToken$')]";
        this.tagname = "//span[contains(@class,'text')][contains(.,'$replaceToken$')]";
        this.startdate = "//span[contains(@class,'text')][contains(.,'$replaceToken1$')]//parent::div//preceding-sibling::span[contains(.,'$replaceToken2$')]";
        //this.tagandstartdate= "//span[@class='text'][contains(text(),'Behavioral Test')]//parent::div//preceding-sibling::span[contains(text(),'02/02/2020')]//parent::div";
        this.tagandstartdate = "//mmr-tag[contains(.,'Behavioral Test  02/02/2020')]";
        this.m_tag_edit_btn = "//h3[contains(.,'$replaceToken$')]//parent::div//span[contains(@class,'cursor-point')]//mmr-icons[@mattooltip='Edit'][contains(@id,'btn')]";
        this.m_tag_save_btn = protractor_1.element(protractor_1.by.xpath("//span[@class='ng-star-inserted'][contains(.,'Save')]"));
        this.m_tag_toast_close = protractor_1.element(protractor_1.by.xpath("//a[contains(@class,'ui-toast-close-icon')]"));
        this.m_tag_delete_btn = "//h3[contains(.,'$replaceToken$')]//parent::div//span[contains(@class,'cursor-point')]//mmr-icons[@mattooltip='Delete'][contains(@id,'btn')]";
        this.m_tag_yes_btn = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper'][contains(.,'Yes')]"));
        this.m_tag_bh_text = protractor_1.element(protractor_1.by.xpath("//h3[contains(.,'Behavioral Health')]//parent::div//div[contains(@class,'ml')]"));
        this.m_tag_medical_text = protractor_1.element(protractor_1.by.xpath("//h3[contains(.,'Medical')]//parent::div//div[contains(@class,'ml')]"));
        this.m_tag_obs_text = protractor_1.element(protractor_1.by.xpath("//h3[contains(.,'Observations')]//parent::div//div[contains(@class,'ml')]"));
        this.m_tag_others_text = protractor_1.element(protractor_1.by.xpath("//h3[contains(.,'Others')]//parent::div//div[contains(@class,'ml')]"));
        this.m_tag_addicon = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@mattooltip,'Add Tag')]"));
    }
}
exports.membersTags = membersTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyc1RhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9tZW1iZXJzVGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRDtBQUUvRCxNQUFhLFdBQVc7SUErQnBCO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsc0JBQXNCLEdBQUMsK0ZBQStGLENBQUM7UUFDNUgsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQzdGLCtDQUErQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBQyx5Q0FBeUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsT0FBTyxHQUFFLCtEQUErRCxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUUscUlBQXFJLENBQUM7UUFDNUosc0tBQXNLO1FBQ3RLLElBQUksQ0FBQyxlQUFlLEdBQUUsc0RBQXNELENBQUM7UUFDN0UsSUFBSSxDQUFDLGNBQWMsR0FBQyw0SUFBNEksQ0FBQztRQUNqSyxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGdCQUFnQixHQUFDLDhJQUE4SSxDQUFDO1FBQ3JLLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsYUFBYSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDLENBQUM7UUFDeEgsSUFBSSxDQUFDLGtCQUFrQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLGNBQWMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxpQkFBaUIsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztJQUd0RixDQUFDO0NBRUQ7QUFoRUQsa0NBZ0VDIn0=