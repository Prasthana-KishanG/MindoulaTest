"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class verifyFilters {
    constructor() {
        this.task_lane_title = "//div[contains(@class,'mmr-lane__title')]//div[contains(text(),'$replaceToken$')]//span";
        this.member_lane_val = "//span[contains(@class,'number-badge')]";
        this.add_filter = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Add Filter')]//parent::button"));
        this.available_filter_option_str = "//h4[contains(text(),'AVAILABLE FILTERS')]//parent::div//ul//li[contains(text(),'$replaceToken$')]";
        this.expand_parent_program_str = "//span[@class='mat-checkbox-label' and contains(text(),'$replaceToken$')]//parent::label//parent::mat-checkbox//preceding-sibling::button";
        //this.child_program_str="//span[contains(text(),'$replaceToken$')]";
        this.child_program_str = "//span[@class='mat-checkbox-label'][contains(text(),'$replaceToken$')]";
        //span[@class='mat-checkbox-label'][contains(text(),'Larson, Vandervort and Brekke')]
        this.apply_filter = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Apply')]//parent::button"));
        this.case_notes_title = "//div[@class='heading-text']//page-heading//span";
        this.consults_title = "//div[@class='heading-text']//page-heading//span";
        this.edit_filter = protractor_1.element(protractor_1.by.xpath("//mmr-icons[contains(@mattooltip,'Edit Filters')]"));
        this.task_assignto = protractor_1.element(protractor_1.by.xpath("//input[contains(@role,'combobox')]"));
        this.task_assignto_dropdown = "//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";
        this.role_careextender = protractor_1.element(protractor_1.by.xpath("//ng-select[@placeholder='Select Care Extender']//input"));
        this.role_careextender_dropdown = "//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";
        this.task_tasktype = protractor_1.element(protractor_1.by.xpath("//input[contains(@role,'combobox')]"));
        this.task_tasktype_dropdown = "//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";
        this.task_taskstatus = protractor_1.element(protractor_1.by.xpath("//input[contains(@role,'combobox')]"));
        this.task_taskstatus_dropdown = "//span[contains(@class,'ng-option-label')][contains(.,'$replaceToken$')]";
        this.mc_chkbox = "//span[@class='mat-checkbox-label'][contains(text(),'$replaceToken$')]//parent::label//div[contains(@class,'mat-checkbox-inner-container')]";
        this.outreach_from = protractor_1.element(protractor_1.by.xpath("//input[contains(@id,'outreachScoreFrom')]"));
        this.outreach_to = protractor_1.element(protractor_1.by.xpath("//input[contains(@formcontrolname,'outreachScoreTo')]"));
        this.eng_txtbox = "//ng-select[contains(@formcontrolname,'$replaceToken$')]";
        this.eng_dropdown = "//span[contains(@class,'ng-option-label')][contains(.,'')]";
        this.count_input = protractor_1.element(protractor_1.by.xpath("//input[contains(@appearance,'outline')]"));
        this.selectdates_input = protractor_1.element(protractor_1.by.xpath("//input[contains(@placeholder,'Select Dates')]"));
        this.customrange_btn = protractor_1.element(protractor_1.by.xpath("//button[@type='button'][contains(.,'Custom range')]"));
        this.previous_btn_from = protractor_1.element(protractor_1.by.xpath("//th[contains(@class,'prev available')]"));
        this.previous_btn_to = protractor_1.element(protractor_1.by.xpath("//div[@class='calendar right ng-star-inserted']//th[@class='prev available ng-star-inserted']"));
        this.from_date = protractor_1.element(protractor_1.by.xpath("//div[@class='calendar left ng-star-inserted']//tr[1]//td[@class='available ng-star-inserted'][contains(.,'1')]"));
        this.to_date = protractor_1.element(protractor_1.by.xpath("//div[@class='calendar right ng-star-inserted']//tr[1]//td[@class='available ng-star-inserted'][contains(.,'1')]"));
        this.apply_date = protractor_1.element(protractor_1.by.xpath("//button[@class='btn']"));
        this.cm_reports_image = "//div[@class='category-card__text'][contains(.,'$replaceToken$')]//parent::div//img";
        this.cm_reports_txt = "//div[@class='category-card__text'][contains(.,'$replaceToken$')]";
        this.cm_member_title = "//td[@role='gridcell'][contains(.,'$replaceToken$')]//parent::tr//td[@role='gridcell']//a[contains(.,'Members')]";
        this.member_lane_reports = "//li[contains(.,'Members ')]";
        this.timespent_selection_chbk = "//h2[contains(text(),'$selection$')]//following-sibling::div[contains(text(),'$label$')]//parent::div//mat-radio-group//mat-radio-button[contains(.,'$checkBox$')]";
        this.timespent_txtbox = protractor_1.element(protractor_1.by.xpath("//input[contains(@type,'number')]"));
        this.filtermember_txtbox = "//h2[@class='mt-3'][contains(.,'$replaceToken$')]//parent::div//div//div//div//div[contains(@class,'mat-form-field-infix')]//input[contains(@type,'number')]";
        this.excludemaxtime_chkbox = "//label[@class='mat-checkbox-layout'][contains(.,'$label$')]//div[contains(@class,'mat-checkbox-inner-container')]";
        this.select_status_input = protractor_1.element(protractor_1.by.xpath("//ng-select[@role='listbox'][contains(.,'Select Status')]"));
        this.ml_view_button = "//div[contains(@mattooltip,'$replaceToken$')]";
    }
}
exports.verifyFilters = verifyFilters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5RmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3ZlcmlmeUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0Q7QUFFL0QsTUFBYSxhQUFhO0lBNkN0QjtRQUVJLElBQUksQ0FBQyxlQUFlLEdBQUMseUZBQXlGLENBQUM7UUFDL0csSUFBSSxDQUFDLGVBQWUsR0FBQyx5Q0FBeUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLDJCQUEyQixHQUFDLG9HQUFvRyxDQUFDO1FBQ3RJLElBQUksQ0FBQyx5QkFBeUIsR0FBQywySUFBMkksQ0FBQztRQUMzSyxxRUFBcUU7UUFDckUsSUFBSSxDQUFDLGlCQUFpQixHQUFDLHdFQUF3RSxDQUFDO1FBQ2hHLHFGQUFxRjtRQUNyRixJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGdCQUFnQixHQUFDLGtEQUFrRCxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUMsa0RBQWtELENBQUM7UUFDdkUsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsc0JBQXNCLEdBQUMsMEVBQTBFLENBQUM7UUFFdkcsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLDBCQUEwQixHQUFDLDBFQUEwRSxDQUFDO1FBRTNHLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsc0JBQXNCLEdBQUMsMEVBQTBFLENBQUM7UUFDdkcsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyx3QkFBd0IsR0FBQywwRUFBMEUsQ0FBQztRQUN6RyxJQUFJLENBQUMsU0FBUyxHQUFDLDZJQUE2SSxDQUFDO1FBQzdKLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFVBQVUsR0FBQywwREFBMEQsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxHQUFDLDREQUE0RCxDQUFDO1FBQy9FLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0ZBQStGLENBQUMsQ0FBQyxDQUFDO1FBQ3hJLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlIQUFpSCxDQUFDLENBQUMsQ0FBQztRQUNwSixJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrSEFBa0gsQ0FBQyxDQUFDLENBQUM7UUFDbkosSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxxRkFBcUYsQ0FBQztRQUM1RyxJQUFJLENBQUMsY0FBYyxHQUFDLG1FQUFtRSxDQUFDO1FBRXhGLElBQUksQ0FBQyxlQUFlLEdBQUMsa0hBQWtILENBQUM7UUFDeEksSUFBSSxDQUFDLG1CQUFtQixHQUFDLDhCQUE4QixDQUFDO1FBQ3hELElBQUksQ0FBQyx3QkFBd0IsR0FBQyxvS0FBb0ssQ0FBQztRQUNuTSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsbUJBQW1CLEdBQUMsOEpBQThKLENBQUM7UUFDeEwsSUFBSSxDQUFDLHFCQUFxQixHQUFDLG9IQUFvSCxDQUFDO1FBQ2hKLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO1FBQzlHLElBQUksQ0FBQyxjQUFjLEdBQUMsK0NBQStDLENBQUM7SUFDbEUsQ0FBQztDQUVKO0FBaEdELHNDQWdHQyJ9