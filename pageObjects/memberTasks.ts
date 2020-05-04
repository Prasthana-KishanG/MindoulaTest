import { ElementFinder,element,by, browser } from "protractor";
     
export class memberTasks
{
    m_task_assessmenttype: ElementFinder;
    m_task_assessmenttypedrp_str: string;
    task_type: string;
    task_desc: string;
    task_goal_date: string;
    task_goal: string;
    task_action_completed: string;
    task_action_status: string;
    
    constructor()
    {
        this.m_task_assessmenttype=element(by.xpath("//div[contains(@class,'mat-form-field-infix')][contains(.,'Assessment TypeAssessment Type *')]"));
        this.m_task_assessmenttypedrp_str="//span[@class='mat-option-text'][contains(text(),'$assessmenttype$')]";
        this.task_type="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]";
        //this.task_desc="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]//parent::mat-card//preceding-sibling::mat-card-content//div[contains(@class,'mmr-content__description')][contains(text(),'Testing')]"
        //this.task_goal_date="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]//parent::mat-card//preceding-sibling::mat-card-content//div[@class='card-detail-row'][contains(.,'Goal date')]"


        this.task_goal="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$:')]//parent::mat-card//preceding-sibling::mat-card-content//div[@class='card-detail-row']//div//span[@class='mmr-card__title--light'][contains(.,'Goal date:')]";
        this.task_goal_date="//mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$:')]//parent::mat-card//preceding-sibling::mat-card-content//div[@class='card-detail-row']//div//span[@class='mmr-card__date']";

        this.task_action_completed=" //mat-card-header[@class='mat-card-header'][contains(.,'$assessmenttype$')]//parent::mat-card//mat-card-actions[@class='mat-card-actions']//div[@class='action-icons']//mmr-tasks-operations//span[@mattooltip='Completed']";

        this.task_action_status="//div[contains(@class,'mmr-lane ng-star-inserted')]//mmr-task-card[contains(@class,'d-block mb-2 ng-star-inserted')]//mat-card//mat-card-header[@class='mat-card-header']//mat-card-title//div[@class='task-name']//span[contains(.,'$replaceToken$')]";
    }

}