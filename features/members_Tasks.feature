@VerifyMemberTasks
Feature: Add Tasks

@CreateTask
Scenario: Creating a Task
Then click on Members Tab
	| TabName |
	| Tasks |
Then click on Add Tasks
Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	| Reminder | MMR | Testing | 10302020  | 
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Case Note Follow Up|MMR| TestingCasenotes | 10302020  |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Documentation|MMR | TestingDocumentation | 10302020  |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Follow Up|MMR | TestingFollowup | 10302020  |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Intake Case Review|MMR | TestingCasereview | 10302020  |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Intake Consult|MMR | TestingIntakeConsult | 10302020  |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Scheduling|MMR | TestingScheduling | 10302020  |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
	| Type | CareExtender| Description | goalDate | 
	|Other|MMR | Testingothers | 10302020  |
Then click on Add Tasks
Then Enter Data in Tasks Page1
| Type | Assessment_Type|CareExtender| Description | goalDate | 
|Assessment|M3|MMR |TestingAssessment|10302020  |

@VerifyCreatedTasks
Scenario: Verify Created Tasks
Then Verify Created Tasks
    |Upcoming_Task1|Reminder:Goal date:10/30/20|
	|Upcoming_Task2|Case Note Follow Up:Goal date:10/30/20|
	|Upcoming_Task3|Documentation:Goal date:10/30/20|
	|Upcoming_Task4|Case Note Follow Up:Goal date:10/30/20|
	|Upcoming_Task5|Intake Case Review:Goal date:10/30/20|
	|Upcoming_Task6|Intake Consult:Goal date:10/30/20|
	|Upcoming_Task7|Scheduling:Goal date:10/30/20|
	|Upcoming_Task8|Other:Goal date:10/30/20|
	|Upcoming_Task9|Assessment: M3,Goal date:10/30/20|

@ClickCompletedFunctionalityinTasks
Scenario: Click on Complete Task

Then click on Completed in Upcoming Tasks
|Upcoming_Task|Assessment|
Then click on Completed in Upcoming Tasks
|Upcoming_Task|Intake Consult|

@VerifyCompletedTaskList
Scenario:Verify Completed Task List
Then Verify Completed Tasks

# |Completed|
# |Assessment:M3,Goal date:10/30/20|
# |Upcoming Tasks|
# |Intake Consult,Goal date:10/30/20|

| Type | Assessment:  M3  |
| PRESENCE | YES |
Then Verify Completed Tasks
	| Type | Intake Consult  |
	| PRESENCE | YES |

