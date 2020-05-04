"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class memberTasks {
    constructor() {
        this.m_task_assessmenttype = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-form-field-infix')][contains(.,'Assessment TypeAssessment Type *')]"));
        this.m_task_assessmenttypedrp_str = "//span[@class='mat-option-text'][contains(text(),'$assessmenttype$')]";
        this.task_type = "//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]";
        //this.task_desc="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]//parent::mat-card//preceding-sibling::mat-card-content//div[contains(@class,'mmr-content__description')][contains(text(),'Testing')]"
        //this.task_goal_date="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]//parent::mat-card//preceding-sibling::mat-card-content//div[@class='card-detail-row'][contains(.,'Goal date')]"
        this.task_goal = "//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$:')]//parent::mat-card//preceding-sibling::mat-card-content//div[@class='card-detail-row']//div//span[@class='mmr-card__title--light'][contains(.,'Goal date:')]";
        this.task_goal_date = "//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$:')]//parent::mat-card//preceding-sibling::mat-card-content//div[@class='card-detail-row']//div//span[@class='mmr-card__date']";
        this.task_action_completed = " //mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]//parent::mat-card//mat-card-actions[@class='mat-card-actions']//div[@class='action-icons']//mmr-tasks-operations//span[@mattooltip='Completed']";
        this.task_action_status = "//div[contains(@class,'mmr-lane ng-star-inserted')]//mmr-task-card[contains(@class,'d-block mb-2 ng-star-inserted')]//mat-card//mat-card-header[@class='mat-card-header']//mat-card-title//div[@class='task-name']//span[contains(.,'$replaceToken$')]";
    }
}
exports.memberTasks = memberTasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyVGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9tZW1iZXJUYXNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRDtBQUUvRCxNQUFhLFdBQVc7SUFXcEI7UUFFSSxJQUFJLENBQUMscUJBQXFCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdHQUFnRyxDQUFDLENBQUMsQ0FBQztRQUMvSSxJQUFJLENBQUMsNEJBQTRCLEdBQUMsdUVBQXVFLENBQUM7UUFDMUcsSUFBSSxDQUFDLFNBQVMsR0FBQyw2RUFBNkUsQ0FBQztRQUM3RixtT0FBbU87UUFDbk8sa05BQWtOO1FBR2xOLElBQUksQ0FBQyxTQUFTLEdBQUMsME9BQTBPLENBQUM7UUFDMVAsSUFBSSxDQUFDLGNBQWMsR0FBQyx3TUFBd00sQ0FBQztRQUU3TixJQUFJLENBQUMscUJBQXFCLEdBQUMsOE5BQThOLENBQUM7UUFFMVAsSUFBSSxDQUFDLGtCQUFrQixHQUFDLHdQQUF3UCxDQUFDO0lBQ3JSLENBQUM7Q0FFSjtBQTVCRCxrQ0E0QkMifQ==