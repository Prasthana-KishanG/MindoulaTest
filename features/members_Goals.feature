@VerifyMemberGoals
Feature: Add Goals
Scenario: Verify Successful Login
	
@CreateGoals
Scenario: Creating a Goal
Then click on Members Tab
	| TabName |
	| Goals |
Then click on Add Goal
Then Enter data on goals page
	| NAME | mmr_goal |
	| IDENTIFIED_RESOURCES | MMR CASEMANAGER |
	| IDENTIFIED_DATE | 03032020 |
	| ACHIEVED_DATE | 09032020 |
	| COMMENTS | THIS IS THE FIRST GOAL FOR THE MEMBER |
	| BUTTON_TO_CLICK | SAVE |	


@VerifyGoals
Scenario: Verifying a Goal
Then Verify data on goals page
	| NAME | mmr_goal |
	| IDENTIFIED_DATE | 03/02/2020 |
	| STATUS | Achieved on 09/02/2020 |
	