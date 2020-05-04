@memberlaneStatusChanges
Feature: Member Lane Status Changes
Scenario: Verify Member Lane Status Changes
	Then opens left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then click on member view
		| VIEW | Lane Status View |
	Then search for member in the list
		| name |
		|  |
	Then change member status
		| from_status | pending |
		| to_status | active  |
	Then enter data in update status pop up
		| START_DATE |  |
		| REASON |  |
		| WORKFLOW_STATE |  |
		| NOTES | notes for status change pending to active |
	Then verify presence of member card
		| LANE_TO_VERIFY | active  |
		| PRESENCE | YES |
	Then verify presence of member card
		| LANE_TO_VERIFY | pending  |
		| PRESENCE | NO |
	Then change member status
		| from_status | active |
		| to_status | completed  |
	Then enter data in update status pop up
		| START_DATE |  |
		| REASON | Contact Drop Off |
		| WORKFLOW_STATE |  |
		| NOTES | notes for status change from active to completed |
	Then verify presence of member card
		| LANE_TO_VERIFY | active  |
		| PRESENCE | NO |
	Then verify presence of member card
		| LANE_TO_VERIFY | completed  |
		| PRESENCE | YES |