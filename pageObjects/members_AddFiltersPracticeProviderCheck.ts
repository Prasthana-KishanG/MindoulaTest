import { ElementFinder,element,by, browser } from "protractor";
     
export class members_AddFiltersPracticeProviderCheck
{
    ml_count: string;
    select_practice: ElementFinder;
    practice_dropdown_str: string;
    select_provider: ElementFinder;
    provider_dropdown_str: string;
    dropdown_null_str: string;
    
    

    constructor()
    {
        this.ml_count="//span[contains(@class,'number-badge')]//span";
        this.select_practice=element(by.xpath("//div[@class='ng-placeholder' and contains(text(),'Select Practice')]//following-sibling::div//input"));
        this.practice_dropdown_str="//span[contains(@class,'ng-option') and contains(text(),'$replaceToken$')]";
        this.select_provider=element(by.xpath("//div[@class='ng-placeholder' and contains(text(),'Select Provider')]//following-sibling::div//input"));
        this.provider_dropdown_str="//span[contains(@class,'ng-option') and contains(text(),'$replaceToken$')]";
        this.dropdown_null_str="//div[@class='ng-dropdown-panel-items scroll-host'][contains(text(),'')]";
    }

}