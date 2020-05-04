@RunAsNewMember
Feature: Run Test With New Member
Scenario: Create A New Member
	Then opens left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then click on Add Member	
	Then Enter data in Add Member Page
	 | fname | mname | lname | email  | mobile  | dob  | gender  | marital_status  | address  | home_phone  | office_phone |
	 | MMR | AUTO | MEMBER1 | MMRAUTO.MEMBER1@mindoula.com  | 2125618000  | 01311958  | Male  | Single  | 2765 Auchmull St Henderson NV | 2125618001 | 2125618002 |

@AddProgram
Scenario: Add a New Program
	Then Click on Add Program in Member's ID Bar
	Then Navigate to Provider Look Up
	Then Enter data in Add Program Provider Look Up Page
		| program | practice | identified_on | provider | EMR_ID | status | verbal_date | written_date | written_document | roi_date | roi_document| medicaid | insurance_note | readmission_date | readmission_discharge_date | admission_reason | hospital | alt_identifier | admission_valid |
		| IVRP | Test | 06152019 | Rahul | A534534 | Pending | 06162019 | 06172019 | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019 | 06202019 | Psychiatric | Bon Secours Hospital | text for alt identifier | Yes |
	Then Navigate to Program Look Up
	Then Enter data in Add Program page
		| program | practice | identified_on | provider | EMR_ID | status | verbal_date | written_date | written_document | roi_date | roi_document| medicaid | insurance_note | readmission_date | readmission_discharge_date | admission_reason | hospital | alt_identifier | admission_valid |
		| IVRP | Test | 06152019 | Rahul | A534534 | Pending | 06162019 | 06172019 | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019 | 06202019 | Psychiatric | Bon Secours Hospital | text for alt identifier | Yes |
	
@CreateCareTeam
Scenario: Creating a Care Team
	Then click on Members Tab
		| TabName |
		| Care Team |
	Then click on Add Care Team
	Then Enter Data in Care Team Page
		| Role | MemberName | Primary | fromDate | toDate |
		| Case Manager | MMR | Yes | 11302018  |  |
	Then click on Add Care Team
	Then Enter Data in Care Team Page
		| Role | MemberName | Primary | fromDate | toDate |
		| Psychiatric Consultant | MMR | Yes | 11302018  |  |
	
