@RunAsExistingMember
Feature: Run Test With Existing Member
Scenario: Navigate to Existing Member
	##Then opens left navigation menu
	#Then user clicks on Members
	#Then close left navigation menu
	Then click on a Member in the list
		| name |
		| NEW R TEST11 |
	