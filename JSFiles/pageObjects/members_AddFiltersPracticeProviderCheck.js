"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class members_AddFiltersPracticeProviderCheck {
    constructor() {
        this.ml_count = "//span[contains(@class,'number-badge')]//span";
        this.select_practice = protractor_1.element(protractor_1.by.xpath("//div[@class='ng-placeholder' and contains(text(),'Select Practice')]//following-sibling::div//input"));
        this.practice_dropdown_str = "//span[contains(@class,'ng-option') and contains(text(),'$replaceToken$')]";
        this.select_provider = protractor_1.element(protractor_1.by.xpath("//div[@class='ng-placeholder' and contains(text(),'Select Provider')]//following-sibling::div//input"));
        this.provider_dropdown_str = "//span[contains(@class,'ng-option') and contains(text(),'$replaceToken$')]";
        this.dropdown_null_str = "//div[@class='ng-dropdown-panel-items scroll-host'][contains(text(),'')]";
    }
}
exports.members_AddFiltersPracticeProviderCheck = members_AddFiltersPracticeProviderCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyc19BZGRGaWx0ZXJzUHJhY3RpY2VQcm92aWRlckNoZWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbWVtYmVyc19BZGRGaWx0ZXJzUHJhY3RpY2VQcm92aWRlckNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQStEO0FBRS9ELE1BQWEsdUNBQXVDO0lBV2hEO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBQywrQ0FBK0MsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzR0FBc0csQ0FBQyxDQUFDLENBQUM7UUFDL0ksSUFBSSxDQUFDLHFCQUFxQixHQUFDLDRFQUE0RSxDQUFDO1FBQ3hHLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNHQUFzRyxDQUFDLENBQUMsQ0FBQztRQUMvSSxJQUFJLENBQUMscUJBQXFCLEdBQUMsNEVBQTRFLENBQUM7UUFDeEcsSUFBSSxDQUFDLGlCQUFpQixHQUFDLDBFQUEwRSxDQUFDO0lBQ3RHLENBQUM7Q0FFSjtBQXJCRCwwRkFxQkMifQ==