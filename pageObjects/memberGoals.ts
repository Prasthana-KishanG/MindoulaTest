import { ElementFinder,element,by, browser } from "protractor";
     
export class memberGoals
{
    m_goal_name: string;
    m_goal_identifiedon: string;
    m_goal_status: string;
   
    
    constructor()
    {
        this.m_goal_name="//td[@role='gridcell'][contains(@id,'value')][contains(.,'$goalname$')]";
        this.m_goal_identifiedon="//td[@role='gridcell'][contains(@id,'value')][contains(.,'$identifiedon$')]";
        this.m_goal_status="//td[@role='gridcell'][contains(@id,'value')][contains(.,'$status$')]";
        
    }

}