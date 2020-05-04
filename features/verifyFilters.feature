@VerifyFilters
Feature: Verify user is able to apply filters in Tasks
@TasksFiltersVerification
Scenario: Verify counts change after applying Filters
	Then opens left navigation menu
	Then user clicks on left nav item
		| name | 
		| Tasks |
	Then close left navigation menu
	Then check tasks count before
		| COLUMN_NAME | Completed |
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
	Then check tasks count after
		| COLUMN_NAME | Completed |

	Then Store the Count value To Count1
	| COLUMN_NAME | Completed |

@TasksFiltersVerification2
Scenario: Verify counts change after applying Filters2

    Then Click on Edit Filters
	Then click on available filters
		| FITLER_NAME |Assigned To |
	Then Select Case Extender
	|CARE_EXTENDER|MMR CaseManager|
	Then click on Apply filters
	Then check tasks count after
	| COLUMN_NAME | Completed |
	Then Store the Count value To Count2
	| COLUMN_NAME | Completed |

	# Then Compare the Count Values
	Then Verify Count_1>Count2
@TasksFiltersVerification3
Scenario: Verify counts change after applying Filters3
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Task Type |
	Then Select Task Type
	|TASK_TYPE|Assessment|
	Then click on Apply filters
	Then check tasks count after
	| COLUMN_NAME | Completed |
	Then Store the Count value To Count3
	| COLUMN_NAME | Completed |
	# Then Compare the Count Values
	Then Verify Count_1>Count3
	Then Verify Count2 >=Count3

@TasksFiltersVerification4
Scenario: Verify counts change after applying Filters4

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Task Status |
	Then Select Task Status
	|TASK_STATUS|Open|
	Then click on Apply filters
	Then check tasks count after
	| COLUMN_NAME | Completed |
	Then Store the Count value To Count4
	| COLUMN_NAME | Completed |
	Then Verify Count_1>Count4
	Then Verify Count2>Count4
	Then Veify Count3>Count4

@TasksFiltersVerification5
Scenario: Verify counts change after applying Filters5

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Task Status |
	Then Select Task Status
	|TASK_STATUS|Closed|
	Then click on Apply filters
	Then check tasks count after
	| COLUMN_NAME | Completed |
	Then Store the Count value To Count5
	| COLUMN_NAME | Completed |
	Then Verify Count_1>Count5
	Then Verify Count2>Count5
	Then Veify Count3>Count4
	Then Verify Count5>=Count4



	
	@MembersFiltersVerification
Scenario: Verify counts change after applying Member Filters
	Then open left navigation menu
	Then user click on left nav item
		| name | 
		| Members |
	Then close left navigation menu
	Then check Member count before
	Then Store the Count value To MemberCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
 	Then check Member count After
    Then Store the Count value To MemberCount2
	Then Verify the Counts MemberCount1>MemberCount2
	
@MembersFiltersVerification2
Scenario: Verify counts change after applying Member Filters2
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice |
	Then Select child practice
	|CHILD_PRACTICE|Larson Practice|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount3
	Then Verify the Counts MemberCount1>MemberCount3
	Then Verify the Counts MemberCount2>=MemberCount3

@MembersFiltersVerification3
Scenario: Verify counts change after applying Member Filters3

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice State |
	Then Select child practice
 	|CHILD_PRACTICE|Georgia|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount4
	Then Verify the Counts MemberCount3=MemberCount4

@MembersFiltersVerification4
Scenario: Verify counts change after applying Member Filters4

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Provider |
	Then Select child practice
 	|CHILD_PRACTICE|Larson Provider|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount5
	Then Verify the Counts MemberCount5<=MemberCount4

@MembersFiltersVerification5
Scenario: Verify counts change after applying Member Filters5
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Case Manager |
	Then Select child practice
	|CHILD_PRACTICE|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount6
	Then Verify the Counts MemberCount6<=MemberCount5

@MembersFiltersVerification6
Scenario: Verify counts change after applying Member Filters6
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Psychiatric Consultant |
	Then Select child practice
	|CHILD_PRACTICE|MMR Consultant|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount7
	Then Verify the Counts MemberCount7<=MemberCount6

@MembersFiltersVerification7
Scenario: Verify counts change after applying Member Filters7

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Care Team |
	Then Select child practice
	|CHILD_PRACTICE|Case Manager|
	Then Select role Care Extender
	|CARE_EXTENDER|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount8
	Then Verify the Counts MemberCount8<=MemberCount7


@MembersFiltersVerification8
Scenario: Verify counts change after applying Member Filters8

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Status |
	Then Select child practice
	|CHILD_PRACTICE|Pending|	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount9
	Then Verify the Counts MemberCount9<=MemberCount8

@MembersFiltersVerification9
Scenario: Verify counts change after applying Member Filters9

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Criteria |
	Then Select checkbox in Member Criteria Filter
	|MEMBER_CRITERIA|Only members with no assessment completed this month.|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount10
	Then Verify the Counts MemberCount10<=MemberCount9
	
	
@MembersFiltersVerification10
Scenario: Verify counts change after applying Member Filters10

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Tags |
	Then Select child practice
	|CHILD_PRACTICE|Behaviour palepu|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount11
	Then Verify the Counts MemberCount11<=MemberCount10


@MembersFiltersVerification11
Scenario: Verify counts change after applying Member Filters11

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |No Member Tag |
	Then Select child practice
	|CHILD_PRACTICE|Behavioral Test|
	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount12
	Then Verify the Counts MemberCount12<=MemberCount11

	
# @MembersFiltersVerification12
# Scenario: Verify counts change after applying Member Filters12
	
# 	Then Click on Edit Filters
# 	Then click on available filters
# 	| FITLER_NAME |Workflow States |
# 	Then Select child practice
# 	|CHILD_PRACTICE|In Hospital|	
# 	Then click on Apply filters
# 	Then check Member count After
# 	Then Store the Count value To MemberCount13
# 	Then Verify the Counts MemberCount13<=MemberCount12

@MembersFiltersVerification13
Scenario: Verify counts change after applying Member Filters13
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Outreach Score |
	Then input the From and To Values in the Out Reach Score Filter
	|FROM|1|
	|TO|66|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount14
	Then Verify the Counts MemberCount14<=MemberCount12
	
	
@MembersFiltersVerification14
Scenario: Verify counts change after applying Member Filters14

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Engagements |
	Then Select the values in Engagement Filters
	|TYPE|result|
	|RESULT|Any|
	Then Select the values in Engagement Filters
	|TYPE|engagementType|
	|ENGAGEMENT_TYPE|Phone|
	Then Select the values in Engagement Filters
	|TYPE|operator|
	|OPERATOR|greater ...|
	Then enter the values in count Engagement Filters
	|TYPE|Result|
	|COUNT|1|

	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount15
	Then Verify the Counts MemberCount15<=MemberCount14
	
@CaseNotesFiltersVerification
Scenario: Verify counts change after applying Filters in Case Notes	
	Then open left navigation menu
	Then user clicks on left nav item
		| name | 
		| CaseNotes |
	Then close left navigation menu
	Then check case notes count before
	Then Store the Count value To CaseNotesCount1

@CaseNotesFiltersVerification2
Scenario: Verify counts change after applying Filters in Case Notes2

	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
	 Then check case notes count after
	Then Store the Count value To CaseNotesCount2
	Then Verify the CaseNotesCount1>CaseNotesCount2

@CaseNotesFiltersVerification3
Scenario: Verify counts change after applying Filters in Case Notes3
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Care Extender |
	Then Select child practice
 	|CHILD_PRACTICE|MMR CaseManager|
	Then click on Apply filters
	 Then check case notes count after
	Then Store the Count value To CaseNotesCount3
	Then Verify the CaseNotesCount3<=CaseNotesCount2
	
@CaseNotesFiltersVerification4
Scenario: Verify counts change after applying Filters in Case Notes4

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Case Note Status |
	Then Select child practice
 	|CHILD_PRACTICE|Completed|
	Then click on Apply filters
	Then check case notes count after
	Then Store the Count value To CaseNotesCount4
	Then Verify the CaseNotesCount4<=CaseNotesCount3

@CaseNotesFiltersVerification5
Scenario: Verify counts change after applying Filters in Case Notes5

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Service Date |
	Then Select Service Date
	Then Click on Custom Range
	Then Select Date Range
	|FromDate|ToDate|
	|01/01/2020|04/01/2020|
	Then Click on Apply on Date menu
	Then click on Apply filters
	Then check case notes count after
	Then Store the Count value To CaseNotesCount5
	Then Verify the CaseNotesCount5<=CaseNotesCount4
	
@ConsultsFiltersVerification1
Scenario: Verify counts change after applying Filters in Consults1
	Then open left navigation menu
	Then user clicks on left nav item
		| name | 
		| Consults |
	Then close left navigation menu
	Then check consults count before
	Then Store the Count value To ConsultsCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
	Then check consults count after
	Then Store the Count value To ConsultsCount2
	Then Verify the Consults ConsultsCount2<ConsultsCount1

@ConsultsFiltersVerification2
Scenario: Verify counts change after applying Filters in Consults2
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Case Manager |
	Then Select child practice
	|CHILD_PRACTICE|MMR CaseManager|
	Then click on Apply filters
	Then check consults count after
	Then Store the Count value To ConsultsCount3
	Then Verify the Consults ConsultsCount3<=ConsultsCount2

@ConsultsFiltersVerification3
Scenario: Verify counts change after applying Filters in Consults3
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Psychiatric Consultant |
	Then Select child practice
	|CHILD_PRACTICE|MMR Consultant|
	Then click on Apply filters
	Then check consults count after
	Then Store the Count value To ConsultsCount4
	 Then Verify the Consults ConsultsCount4<=ConsultsCount3
@ConsultsFiltersVerification4
Scenario: Verify counts change after applying Filters in Consults4
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Status |
	Then Select child practice
  	|CHILD_PRACTICE|Completed|
	Then click on Apply filters
	Then check consults count after
	Then Store the Count value To ConsultsCount5
	Then Verify the Consults ConsultsCount5<=ConsultsCount4




@ReportsFiltersVerificationCCPBilling
Scenario:Verify Report Filters Verification in CCP Billing
	Then open left navigation menu
	Then user clicks on left nav item
		| name | 
		| Reports |
	Then close left navigation menu
	Then Click on Reports
	   |REPORT|Collaborative Care Billing|
	Then Click on Members in March-2020 
	   |TITLE|March-2020|
	Then Check Member Count Before in Reports page
	Then Store the Count value To ReportMemberCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
	Then check Reports Member count After
	Then Store the Count value To ReportMemberCount2
	Then Verify the Counts ReportMemberCount1>=ReportMemberCount2

@ReportsFiltersVerificationCCPBilling2
Scenario:Verify Report Filters Verification in CCP Billing2

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Case Manager |
	Then Select child practice
 	|CHILD_PRACTICE|MMR CaseManager|	
	Then click on Apply filters
	Then check Reports Member count After
	Then Store the Count value To ReportMemberCount3
	Then Verify the Counts ReportMemberCount2>=ReportMemberCount3

@ReportsFiltersVerificationCCPBilling3
Scenario:Verify Report Filters Verification in CCP Billing3
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Time Based Criteria |
	Then Select Check box in Time Spent for Filter members
	|SELECTION|Time Spent|
	|LABEL|Filter members with total time spent as specified in the criteria|
	|CHECKBOX_NAME|Greater than|
	Then Type value in the Text Box
	|SELECTION|Time Spent|
	|TEXTBOX|20|
	Then click on Apply filters
	Then check Reports Member count After
	Then Store the Count value To ReportMemberCount4
	Then Verify the Counts ReportMemberCount3>=ReportMemberCount4

@ReportsFiltersVerificationCCPBilling4
Scenario:Verify Report Filters Verification in CCP Billing4
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Time Based Criteria |
	Then Select Check box in Time Spent for Filter members
	|SELECTION|Billable Time|
	|LABEL|Filter members with total billable time as specified in the criteria.|
	|CHECKBOX_NAME|Less than|
	Then Type value in the Text Box
	|SELECTION|Billable Time|
	|TEXTBOX|20|
	Then click on Apply filters
	Then check Reports Member count After
	Then Store the Count value To ReportMemberCount5
	Then Verify the Counts ReportMemberCount4>=ReportMemberCount5

@ReportsFiltersVerificationCCPBilling5
Scenario:Verify Report Filters Verification in CCP Billing5
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Other Billing Criteria |
	Then Select Check box in Other Billing Criteria
	|LABEL|Exclude Max time billed: Exclude members who already billed maximum possible time.|
	|CHECKBOX|yes|
	Then click on Apply filters
	Then Store the Count value To ReportMemberCount6
	Then Verify the Counts ReportMemberCount5>=ReportMemberCount6
	
@ReportsFiltersVerificationCCPBilling6
Scenario:Verify Report Filters Verification in CCP Billing6

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Assessment Completed|

	Then Select value in Assessment Completed
 	|SELECT_STATUS|Yes|
 	Then click on Apply filters
	Then check Reports Member count After
	Then Store the Count value To ReportMemberCount7
	Then Verify the Counts ReportMemberCount6>=ReportMemberCount7

@ReportsFiltersVerificationCCPBilling7
Scenario:Verify Report Filters Verification in CCP Billing7

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Assessment Completed|
	
	Then Select value in Assessment Completed
 	|SELECT_STATUS|No|
 	Then click on Apply filters
	Then check Reports Member count After
	Then Store the Count value To ReportMemberCount8
	Then Verify the Counts ReportMemberCount7>=ReportMemberCount8
	
@ReportsFiltersVerificationCCPOrderStatusReports1
Scenario:Verify Report Filters Verification in CCP Order Status Reports1

	Then open left navigation menu
	Then user clicks on left nav item
		| name | 
		| Reports |
	Then close left navigation menu
	Then Click on Reports
		|REPORT| CCP Order Status Reports |
	Then check CCP Order Status Reports count before
	Then Store the Count value To CCPReportCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
	Then check CCP Order Status count After
	Then Store the Count value To CCPReportCount2
	Then Verify the Counts CCPReportCount1>CCPReportCount2

@ReportsFiltersVerificationCCPOrderStatusReports2
Scenario:Verify Report Filters Verification in CCP Order Status Reports2
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice |
	Then Select child practice
 	|CHILD_PRACTICE|Larson Practice|
	Then click on Apply filters
	Then check CCP Order Status count After
	Then Store the Count value To CCPReportCount3
	Then Verify the Counts CCPReportCount1>CCPReportCount3
	Then Logout from Website





@MembersFiltersVerificationLaneStatusView1
Scenario: Verify Member Filters counts change in LaneSatus View1
  Then Login to the website with Case Manager

	Then opens left navigation menu
	Then user click on left nav item
		| name | 
		| Members |
	Then close left navigation menu
	Then Click on member View
		|VIEW_ICON|Lane Status View|

	Then check Member count before
	Then Store the Count value To MemberCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
 	Then check Member count After
    Then Store the Count value To MemberCount2
	 Then Verify the Counts MemberCount1>MemberCount2
	
@MembersFiltersVerificationLaneStatusView2
Scenario: Verify Member Filters counts change in LaneSatus View2
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice |
	Then Select child practice
	|CHILD_PRACTICE|Larson Practice|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount3
	Then Verify the Counts MemberCount1>MemberCount3
	Then Verify the Counts MemberCount2>=MemberCount3

@MembersFiltersVerificationLaneStatusView3
Scenario: Verify Member Filters counts change in LaneSatus View3

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice State |
	Then Select child practice
 	|CHILD_PRACTICE|Georgia|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount4
	Then Verify the Counts MemberCount3=MemberCount4


@MembersFiltersVerificationLaneStatusView4
Scenario: Verify Member Filters counts change in LaneSatus View4

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Provider |
	Then Select child practice
 	|CHILD_PRACTICE|Larson Provider|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount5
	Then Verify the Counts MemberCount5<=MemberCount4


@MembersFiltersVerificationLaneStatusView5
Scenario: Verify Member Filters counts change in LaneSatus View5
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Case Manager |
	Then Select child practice
	|CHILD_PRACTICE|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount6
	Then Verify the Counts MemberCount6<=MemberCount5

@MembersFiltersVerificationLaneStatusView6
Scenario: Verify Member Filters counts change in LaneSatus View6
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Psychiatric Consultant |
	Then Select child practice
	|CHILD_PRACTICE|MMR Consultant|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount7
	Then Verify the Counts MemberCount7<=MemberCount6


@MembersFiltersVerificationLaneStatusView7
Scenario: Verify Member Filters counts change in LaneSatus View7

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Care Team |
	Then Select child practice
	|CHILD_PRACTICE|Case Manager|
	Then Select role Care Extender
	|CARE_EXTENDER|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount8
	Then Verify the Counts MemberCount8<=MemberCount7


@MembersFiltersVerificationLaneStatusView8
Scenario: Verify Member Filters counts change in LaneSatus View8

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Status |
	Then Select child practice
	|CHILD_PRACTICE|Pending|	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount9
	Then Verify the Counts MemberCount9<=MemberCount8

@MembersFiltersVerificationLaneStatusView9
Scenario: Verify Member Filters counts change in LaneSatus View9

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Criteria |
	Then Select checkbox in Member Criteria Filter
	|MEMBER_CRITERIA|Only members with no assessment completed this month.|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount10
	Then Verify the Counts MemberCount10<=MemberCount9
	

@MembersFiltersVerificationLaneStatusView10
Scenario: Verify Member Filters counts change in LaneSatus View10

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Tags |
	Then Select child practice
	|CHILD_PRACTICE|Behaviour palepu|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount11
	Then Verify the Counts MemberCount11<=MemberCount10


@MembersFiltersVerificationLaneStatusView11
Scenario: Verify Member Filters counts change in LaneSatus View11

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |No Member Tag |
	Then Select child practice
	|CHILD_PRACTICE|Behavioral Test|
	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount12
	Then Verify the Counts MemberCount12<=MemberCount11


# @MembersFiltersVerificationLaneStatusView12
# Scenario: Verify Member Filters counts change in LaneSatus View12
	
# 	Then Click on Edit Filters
# 	Then click on available filters
# 	| FITLER_NAME |Workflow States |
# 	Then Select child practice
# 	|CHILD_PRACTICE|In Hospital|	
# 	Then click on Apply filters
# 	Then check Member count After
# 	Then Store the Count value To MemberCount13
# 	Then Verify the Counts MemberCount13<=MemberCount12


@MembersFiltersVerificationLaneStatusView13
Scenario: Verify Member Filters counts change in LaneSatus View13
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Outreach Score |
	Then input the From and To Values in the Out Reach Score Filter
	|FROM|1|
	|TO|66|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount14
	Then Verify the Counts MemberCount14<=MemberCount12
	
	
@MembersFiltersVerificationLaneStatusView14
Scenario: Verify Member Filters counts change in LaneSatus View14

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Engagements |
	Then Select the values in Engagement Filters
	|TYPE|result|
	|RESULT|Any|
	Then Select the values in Engagement Filters
	|TYPE|engagementType|
	|ENGAGEMENT_TYPE|Phone|
	Then Select the values in Engagement Filters
	|TYPE|operator|
	|OPERATOR|greater ...|
	Then enter the values in count Engagement Filters
	|TYPE|Result|
	|COUNT|1|

	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount15
	Then Verify the Counts MemberCount15<=MemberCount14
	Then Logout from Website

	
@MembersFiltersVerificationoutreachView1
Scenario: Verify Member Filters counts change in outreach View1
Then Login to the website with Case Manager

	Then opens left navigation menu
	Then user click on left nav item
		| name | 
		| Members |
	Then close left navigation menu
	Then Click on member View
		|VIEW_ICON|Outreach View|

	Then check Member count before
	Then Store the Count value To MemberCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
 	Then check Member count After
    Then Store the Count value To MemberCount2
	Then Verify the Counts MemberCount1>MemberCount2
	
@MembersFiltersVerificationoutreachView2
Scenario: Verify Member Filters counts change in outreach View2
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice |
	Then Select child practice
	|CHILD_PRACTICE|Larson Practice|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount3
	 Then Verify the Counts MemberCount1>MemberCount3
	Then Verify the Counts MemberCount2>=MemberCount3

@MembersFiltersVerificationoutreachView3
Scenario: Verify Member Filters counts change in outreach View3

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice State |
	Then Select child practice
 	|CHILD_PRACTICE|Georgia|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount4
	Then Verify the Counts MemberCount3=MemberCount4


@MembersFiltersVerificationoutreachView4
Scenario: Verify Member Filters counts change in outreach View4

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Provider |
	Then Select child practice
 	|CHILD_PRACTICE|Larson Provider|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount5
	Then Verify the Counts MemberCount5<=MemberCount4


@MembersFiltersVerificationoutreachView5
Scenario: Verify Member Filters counts change in outreach View5
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Case Manager |
	Then Select child practice
	|CHILD_PRACTICE|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount6
	Then Verify the Counts MemberCount6<=MemberCount5

@MembersFiltersVerificationoutreachView6
Scenario: Verify Member Filters counts change in outreach View6
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Psychiatric Consultant |
	Then Select child practice
	|CHILD_PRACTICE|MMR Consultant|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount7
	Then Verify the Counts MemberCount7<=MemberCount6


@MembersFiltersVerificationoutreachView7
Scenario: Verify Member Filters counts change in outreach View7

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Care Team |
	Then Select child practice
	|CHILD_PRACTICE|Case Manager|
	Then Select role Care Extender
	|CARE_EXTENDER|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount8
	Then Verify the Counts MemberCount8<=MemberCount7


@MembersFiltersVerificationoutreachView8
Scenario: Verify Member Filters counts change in outreach View8

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Status |
	Then Select child practice
	|CHILD_PRACTICE|Pending|	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount9
	Then Verify the Counts MemberCount9<=MemberCount8

@MembersFiltersVerificationoutreachView9
Scenario: Verify Member Filters counts change in outreach View9

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Criteria |
	Then Select checkbox in Member Criteria Filter
	|MEMBER_CRITERIA|Only members with no assessment completed this month.|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount10
	Then Verify the Counts MemberCount10<=MemberCount9
	

@MembersFiltersVerificationoutreachView10
Scenario: Verify Member Filters counts change in outreach View10

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Tags |
	Then Select child practice
	|CHILD_PRACTICE|Behaviour palepu|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount11
	Then Verify the Counts MemberCount11<=MemberCount10


@MembersFiltersVerificationoutreachView11
Scenario: Verify Member Filters counts change in outreach View11

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |No Member Tag |
	Then Select child practice
	|CHILD_PRACTICE|Behavioral Test|
	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount12
	Then Verify the Counts MemberCount12<=MemberCount11


# @MembersFiltersVerificationoutreachView12
# Scenario: Verify Member Filters counts change in outreach View12
	
# 	Then Click on Edit Filters
# 	Then click on available filters
# 	| FITLER_NAME |Workflow States |
# 	Then Select child practice
# 	|CHILD_PRACTICE|In Hospital|	
# 	Then click on Apply filters
# 	Then check Member count After
# 	Then Store the Count value To MemberCount13
# 	Then Verify the Counts MemberCount13<=MemberCount12


@MembersFiltersVerificationoutreachView13
Scenario: Verify Member Filters counts change in outreach View13
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Outreach Score |
	Then input the From and To Values in the Out Reach Score Filter
	|FROM|1|
	|TO|66|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount14
	Then Verify the Counts MemberCount14<=MemberCount12
	
	
@MembersFiltersVerificationoutreachView14
Scenario: Verify Member Filters counts change in outreach View14

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Engagements |
	Then Select the values in Engagement Filters
	|TYPE|result|
	|RESULT|Any|
	Then Select the values in Engagement Filters
	|TYPE|engagementType|
	|ENGAGEMENT_TYPE|Phone|
	Then Select the values in Engagement Filters
	|TYPE|operator|
	|OPERATOR|greater ...|
	Then enter the values in count Engagement Filters
	|TYPE|Result|
	|COUNT|1|

	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount15
	Then Verify the Counts MemberCount15<=MemberCount14
	Then Logout from Website

@MembersFiltersVerificationRegistryView1
Scenario: Verify Member Filters counts change in Registry View1
 Then Login to the website with Case Manager

	Then opens left navigation menu
	Then user click on left nav item
		| name | 
		| Members |
	Then close left navigation menu
	Then Click on member View
		|VIEW_ICON|Registry View|

	Then check Member count before
	Then Store the Count value To MemberCount1
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on Apply filters
 	Then check Member count After
    Then Store the Count value To MemberCount2
	Then Verify the Counts MemberCount1>MemberCount2
	
@MembersFiltersVerificationRegistryView2
Scenario: Verify Member Filters counts change in Registry View2
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice |
	Then Select child practice
	|CHILD_PRACTICE|Larson Practice|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount3
	 Then Verify the Counts MemberCount1>MemberCount3
	Then Verify the Counts MemberCount2>=MemberCount3

@MembersFiltersVerificationRegistryView3
Scenario: Verify Member Filters counts change in Registry View3

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Practice State |
	Then Select child practice
 	|CHILD_PRACTICE|Georgia|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount4
	Then Verify the Counts MemberCount3=MemberCount4

@MembersFiltersVerificationRegistryView4
Scenario: Verify Member Filters counts change in Registry View4

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Provider |
	Then Select child practice
 	|CHILD_PRACTICE|Larson Provider|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount5
	Then Verify the Counts MemberCount5<=MemberCount4


@MembersFiltersVerificationRegistryView5
Scenario: Verify Member Filters counts change in Registry View5
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Case Manager |
	Then Select child practice
	|CHILD_PRACTICE|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount6
	Then Verify the Counts MemberCount6<=MemberCount5

@MembersFiltersVerificationRegistryView6
Scenario: Verify Member Filters counts change in Registry View6
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Primary Psychiatric Consultant |
	Then Select child practice
	|CHILD_PRACTICE|MMR Consultant|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount7
	Then Verify the Counts MemberCount7<=MemberCount6

@MembersFiltersVerificationRegistryView7
Scenario: Verify Member Filters counts change in Registry View7

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Care Team |
	Then Select child practice
	|CHILD_PRACTICE|Case Manager|
	Then Select role Care Extender
	|CARE_EXTENDER|MMR CaseManager|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount8
	Then Verify the Counts MemberCount8<=MemberCount7

@MembersFiltersVerificationRegistryView8
Scenario: Verify Member Filters counts change in Registry View8

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Status |
	Then Select child practice
	|CHILD_PRACTICE|Pending|	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount9
	Then Verify the Counts MemberCount9<=MemberCount8

@MembersFiltersVerificationRegistryView9
Scenario: Verify Member Filters counts change in Registry View9

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Criteria |
	Then Select checkbox in Member Criteria Filter
	|MEMBER_CRITERIA|Only members with no assessment completed this month.|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount10
	Then Verify the Counts MemberCount10<=MemberCount9
	
@MembersFiltersVerificationRegistryView10
Scenario: Verify Member Filters counts change in Registry View10

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Member Tags |
	Then Select child practice
	|CHILD_PRACTICE|Behaviour palepu|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount11
	Then Verify the Counts MemberCount11<=MemberCount10

@MembersFiltersVerificationRegistryView11
Scenario: Verify Member Filters counts change in Registry View11

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |No Member Tag |
	Then Select child practice
	|CHILD_PRACTICE|Behavioral Test|
	
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount12
	Then Verify the Counts MemberCount12<=MemberCount11


# @MembersFiltersVerificationRegistryView12
# Scenario: Verify Member Filters counts change in Registry View12
	
# 	Then Click on Edit Filters
# 	Then click on available filters
# 	| FITLER_NAME |Workflow States |
# 	Then Select child practice
# 	|CHILD_PRACTICE|In Hospital|	
# 	Then click on Apply filters
# 	Then check Member count After
# 	Then Store the Count value To MemberCount13
# 	Then Verify the Counts MemberCount13<=MemberCount12

@MembersFiltersVerificationRegistryView13
Scenario: Verify Member Filters counts change in Registry View13
	
	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Outreach Score |
	Then input the From and To Values in the Out Reach Score Filter
	|FROM|1|
	|TO|66|
	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount14
	Then Verify the Counts MemberCount14<=MemberCount12
	
	@MembersFiltersVerificationRegistryView14
Scenario: Verify Member Filters counts change in Registry View14

	Then Click on Edit Filters
	Then click on available filters
	| FITLER_NAME |Engagements |
	Then Select the values in Engagement Filters
	|TYPE|result|
	|RESULT|Any|
	Then Select the values in Engagement Filters
	|TYPE|engagementType|
	|ENGAGEMENT_TYPE|Phone|
	Then Select the values in Engagement Filters
	|TYPE|operator|
	|OPERATOR|greater ...|
	Then enter the values in count Engagement Filters
	|TYPE|Result|
	|COUNT|1|

	Then click on Apply filters
	Then check Member count After
	Then Store the Count value To MemberCount15
	Then Verify the Counts MemberCount15<=MemberCount14
		Then Logout from Website


	













