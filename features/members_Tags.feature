@VerifyMemberTags
Feature: Add and Verify Member Tag

@CreateMemberTagAndVerify
Scenario: Creating a Member Tag
	Then click on Members Tab
		| TabName |
		| Tags|
	Then click on Add Tag
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| Behavioral Test|
	Then Select Start Date
	    |Start_Date|04/01/2020|
	Then Click Add Button
	    
	Then click on Add Tag
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| Medical Tag|
	Then Select Start Date
	    |Start_Date|04/01/2020|
	Then Click Add Button
	   
	Then click on Add Tag
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| GLOBAL-OBSERVATIONS|
	Then Select Start Date
	    |Start_Date|04/01/2020|
	Then Click Add Button
	  
	Then click on Add Tag
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| GLOBAL-OTHERS|
	Then Select Start Date
	    |Start_Date|04/01/2020|
	Then Click Add Button
	 
	Then verify data in Member Tags Page

		| Behavioral_Health | Behavioral Test 04/01/2020|
		| Medical|Medical Tag 04/01/2020|
		| Observations| GLOBAL-OBSERVATIONS 04/01/2020|
		| Others|GLOBAL-OTHERS 04/01/2020|

		

@VerifyMemberTagsAfterNavigatingThroughMemberSearch
Scenario: Verify Member Tags Navigating Through Member Search
	Then opens left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then search for member in the list
		| name |
		|      |
	Then click on first member in the list
	Then click on Members Tab
		| TabName |
		| Tags|
	Then verify data in Member Tags Page
		| Behavioral_Health | Behavioral Test 04/01/2020|
		| Medical|Medical Tag 04/01/2020|
		| Observations| GLOBAL-OBSERVATIONS 04/01/2020|
		| Others|GLOBAL-OTHERS 04/01/2020|

@EditMemberTags
Scenario:Edit MemberTags

	Then Click on Edit icon on the Member Tag
		|MEMBER_TAG| Behavioral Health |
		| TAG_NAME | Behavioral Test|
	Then Change the Date
		| Behavioral_Health | Behavioral Test 02/02/2020|

	Then Click on Edit icon on the Member Tag
		|MEMBER_TAG| Medical |
		| TAG_NAME | Medical Tag|
	Then Change the Date
		| Medical | Medical Tag 02/02/2020|

	# Then Click on Edit icon on the Member Tag
	# 	|MEMBER_TAG| Observations |
	# 	| TAG_NAME | GLOBAL-OBSERVATIONS|
	# Then Change the Date
	# 	| Observations | GLOBAL-OBSERVATIONS 03/03/2020|

	# Then Click on Edit icon on the Member Tag
	# 	|MEMBER_TAG| Others |
	# 	| TAG_NAME | GLOBAL-OTHERS|
	# Then Change the Date
	# 	| Others | GLOBAL-OTHERS 03/03/2020|

	Then verify data after edit in Member Tags Page
		| Behavioral_Health | Behavioral Test 02/02/2020|
		| Medical|Medical Tag 02/02/2020|
		# # | Observations| GLOBAL-OBSERVATIONS 03/03/2020|
		# # | Others|GLOBAL-OTHERS 03/03/2020|


@DeleteCreatedMemberTags
Scenario:Delete Created Members

   Then Click on Delete icon on the Member Tag
		|MEMBER_TAG| Behavioral Health |
		| TAG_NAME | Behavioral Test|
   Then Click on Yes on the PopUp Dialogue

	Then Click on Delete icon on the Member Tag
		|MEMBER_TAG| Medical |
		| TAG_NAME | Medical Tag|
	Then Click on Yes on the PopUp Dialogue

	Then Click on Delete icon on the Member Tag
	 	|MEMBER_TAG| Observations |
		| TAG_NAME | GLOBAL-OBSERVATIONS|
	Then Click on Yes on the PopUp Dialogue

	Then Click on Delete icon on the Member Tag
	 	|MEMBER_TAG| Others |
		| TAG_NAME | GLOBAL-OTHERS|
	Then Click on Yes on the PopUp Dialogue

	Then verify data after delete in Member Tags Page
		| Behavioral_Health | This category doesn't have any tag. |
		| Medical           |This category doesn't have any tag.|
		| Observations      |This category doesn't have any tag.|
		| Others            |This category doesn't have any tag.|

@AssignMemberTagsThroughQuickActionsTab
Scenario: Assigning a Member Tag Through QuickActionsTab
	
	Then click on AddTag in Members QuickAction Icon
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| Behavioral Test|
	Then Select Start Date1
	    |Start_Date|02/02/2020|
	Then Click Add Button
	    
	Then click on AddTag in Members QuickAction Icon
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| Medical Tag|
	Then Select Start Date1
	    |Start_Date|02/02/2020|
	Then Click Add Button
	   
	Then click on AddTag in Members QuickAction Icon
	Then click on Search Tag
	Then select Tag
		| Search Tag |
		| GLOBAL-OBSERVATIONS|
	Then Select Start Date1
	    |Start_Date|02/02/2020|
	Then Click Add Button
	  
	# Then click on AddTag in Members QuickAction Icon
	# Then click on Search Tag
	# Then select Tag
	# 	| Search Tag |
	# 	| GLOBAL-OTHERS|
	# Then Select Start Date1
	#     |Start_Date|02/02/2020|
	# Then Click Add Button
	Then verify data in Member Tags Page QuickAction
		| Behavioral_Health | Behavioral Test 02/02/2020|
		| Medical|Medical Tag 02/02/2020|
		| Observations| GLOBAL-OBSERVATIONS 02/02/2020|
		# | Others|GLOBAL-OTHERS 02/02/2020|















# @VerifyMemberTags
# Feature: Add and Verify Member Tag

# @CreateMemberTagAndVerify
# Scenario: Creating a Member Tag
# 	Then click on Members Tab
# 		| TabName |
# 		| Tags|
# 	Then click on Add Tag
# 	Then click on Search Tag
# 	Then select Tag
# 		| Search Tag |
# 		| Behavioral Test|
# 	Then Select Start Date
# 	    |Start_Date|02/02/2020|
# 	Then Click Add Button
	    
# 	Then click on Add Tag
# 	Then click on Search Tag
# 	Then select Tag
# 		| Search Tag |
# 		| GLOBAL-Medical|
# 	Then Select Start Date
# 	    |Start_Date|02/02/2020|
# 	Then Click Add Button
	   
# 	Then click on Add Tag
# 	Then click on Search Tag
# 	Then select Tag
# 		| Search Tag |
# 		| GLOBAL-OBSERVATIONS|
# 	Then Select Start Date
# 	    |Start_Date|02/02/2020|
# 	Then Click Add Button
	  
# 	Then click on Add Tag
# 	Then click on Search Tag
# 	Then select Tag
# 		| Search Tag |
# 		| GLOBAL-OTHERS|
# 	Then Select Start Date
# 	    |Start_Date|02/02/2020|
# 	Then Click Add Button
	 
# 	Then verify data in Member Tags Page

# 		| Behavioral_Health | Behavioral Test 02/02/2020|
# 		| Medical|GLOBAL-Medical 02/02/2020|
# 		| Observations| GLOBAL-OBSERVATIONS 02/02/2020|
# 		| Others|GLOBAL-OTHERS 02/02/2020|

		

# @CreatedMemberTagsVerify
# Scenario: Verifying the Created Tags for the Member	
# 	Then open left navigation menu
# 	Then user clicks on Members
# 	Then close left navigation menu
# 	Then search for member in the list
# 		| name |
# 		|      |
# 	Then click on first member in the list
# 	Then click on Members Tab
# 		| TabName |
# 		| Tags|
# 	Then verify data in Member Tags Page
# 		| Behavioral_Health | Behavioral Test 02/02/2020|
# 		| Medical|GLOBAL-Medical 02/02/2020|
# 		| Observations| GLOBAL-OBSERVATIONS 02/02/2020|
# 		| Others|GLOBAL-OTHERS 02/02/2020|