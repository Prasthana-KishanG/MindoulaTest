import { ElementFinder,element,by, browser } from "protractor";
     
export class memberlane_StatusChanges
{
	ml_membView: string;
	ml_memberCardLane: string;
	ml_targetLane: string;

	    
    

    constructor()
    {

		this.ml_membView="//div[@mattooltip='$replaceToken$']";
		this.ml_memberCardLane="//div[@id='$replaceToken$']//div//mat-card//div[@class='card__title']//a[contains(text(),'$name$')]//ancestor::mat-card";
		this.ml_targetLane="//div[@id='$replaceToken$']//div//mat-card";
	
		

		
	}

}