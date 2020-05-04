import { ElementFinder,element,by, browser } from "protractor";
     
export class memberCheatsheets
{
    m_cs_cheatsheettype: string;
    m_cs_cheatsheet_edit: string;
    
    
    constructor()
    {
        this.m_cs_cheatsheettype="//mat-card//h4[contains(text(),'$type$')]";
        this.m_cs_cheatsheet_edit="/mat-card//h4[contains(text(),'$type$')]//following-sibling::div";
    }

}