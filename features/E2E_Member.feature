@E2E_Member
Feature: End to End test for Member
	
@CreateExternalProvider
Scenario: Adding a External Provider
	Then click on Members Tab
		| TabName |
		| Care Team |
	Then click on Add External Provider
	Then Enter Data in External Provider Page
		| Name | Preference | Role | Current | Phone | Email | Address | Notes |
		| John | Highly Preferred | Case Manager | Yes | 5034230987 | john.john@gmail.com | 1 4th Ave, Lowell MA | Add External Provider |	

@CreateTask
Scenario: Creating a Task
	Then click on Members Tab
		| TabName |
		| Tasks |
	Then click on Add Tasks
	Then Enter Data in Tasks Page
		| Type | CareExtender| Description | goalDate | 
		| Reminder | MMR CaseManager  | Task This is to check the maximum length that is allowed for the field as we are observing several kingd of issues  | 10302018  | 


@CreateReferral
Scenario: Creating a Referral
	Then click on Members Tab
		| TabName |
		| Referrals |
	Then click on Add Referral
	Then Enter Data in Referral Page
		| Type | providerInNetwork | providerType | specialtyType | Name | ContactInfo | DirectName | DirectContactInfo | AppointmentDate | reasonableTime | reminder | assitance | status | ReferralDate |
		| Provider | Yes | Specialty | Dentist | Rahul | NewYork | RDravid | Ny State | 06242018 | Yes | Yes | Yes | Successful | 06022018 |
	Then verify data in Referrals Page
		| REFERRAL_TYPE | Provider |
		| REFERRAL_DETAILS | Specialty\nDentist |
		| REFERRAL_NAME | Rahul , NewYork\nNy State |
		| APPOINTMENT_DATE | 06/23/2018 |
		| REFERRAL_DATE | CURRENT_DATE |
		| STATUS | Successful |
		| REMINDER | Yes |	

@UpdateMemberStatus		
Scenario: Update Member Status
	Then click on Members Tab
		| TabName |
		| Program |
	Then Click on Change Status
	Then Click on Status Container
		| STATUS_NAME | Active |
	Then enter data in update status pop up
		| START_DATE |  |
		| REASON |  |
		| WORKFLOW_STATE |  |
		| NOTES | notes for status change pending to active |
	Then Click on Change Status
	Then Click on Status Container
		| STATUS_NAME | Completed |
	Then enter data in update status pop up
		| START_DATE |  |
		| REASON | Contact Drop Off |
		| WORKFLOW_STATE |  |
		| NOTES | notes for status change from active to completed |

@CreateBenefit
Scenario: Creating a Benefit
	Then click on Members Tab
		| TabName |
		| Benefits/Documents |
	Then click on Add Benefits
	Then Enter Data in Benefits Page
		| Benefit_Type | ID_Num | Amount | Expiration_date | Have_orig_copy | Status | Notes |
		| SSI | 435346 | 100.00 | 01012019 | Yes | Active | Add Benefit Record This is to check the maximum length that is allowed for the field as we are observing several kingd of issues |
	Then Expand Document Section
	Then click on Add Document in Benefits page
	Then Enter data in Benefits Document Page
		| file_path | name |
		| C:\\Selenium\\pmay.pdf | BENEFITS DOCUMENT |	
	Then verify data in Benefits Page
		| DOC_TYPE | SSI |
		| ID_NUMBER | 435346 |
		| AMOUNT | 100.00 |
		| STATUS | Active |
		| EXPIRATION_DATE | 01/01/2019 |
		| ORIGINAL_COPY | yes |
		| NOTES | Notes:\n Add Benefit Record This is to check the maximum length that is allowed for the field as we are observing several kingd of issues |
		| DOCUMENTS | BENEFITS DOCUMENT |	
		
@CreateCareGap
Scenario: Creating a Care Gap
	Then click on Members Tab
		| TabName |
		| Care Gaps |
	Then click on Add Care Gaps
	Then Enter Data in CareGaps Page
		| Type | Identifid_On | Expected_Resolution | Description |
		| Missing Vaccination | 01012018 | 01302018 | Vaccination Schedule Missed This is to check the maximum length that is allowed for the field as we are observing several kingd of issues  |
		

@CreateActionsTaken
Scenario: Creating Actions Taken
	Then Click on Expand in Care Gaps Page
		| rowToFind |
		| Missing Vaccination |
	Then Enter Data in Actions Taken
		| Status | Action_Date | Action_Taken |
		| Resolved | 10012018 | Resolved the issue This is to check the maximum length that is allowed for the field as we are observing several kingd of issues |	
	Then verify data in Actions Taken Section
		| ACTION_DATE | 09/30/2018 |
		| ACTION_TAKEN | Resolved the issue This is to check the maximum length that is allowed for the field as we are observing several kingd of issues |
		| STATUS_CHANGED_TO | Resolved |
	
		
@CreateFamilyContact
Scenario: Creating a Family Contact
	Then click on Members Tab
		| TabName |
		| Contacts |
	Then click on Add Contact
	Then Enter Data in Family Contact Page
		| fname		| lname 	| email 	| mobile 	| address | home_phone | office_phone | relationship | housing_status |
		| Ramesh 	| SVS| ramesh.naren@gmail.com | 9194983999 | 2765 Auchmull St, Henderson, NV 89044, USA | 509890988 | 5098954324-1234 | Brother | Stays With Member |
	
	
@CreateReleaseAgreement
Scenario: Creating a Release Agreement
	Then click on Add Release Agreement
	Then Enter data on Release Agreement
		| file_path | from_date | to_date | contacts_csv |
		| C:\\Selenium\\pmay.pdf | 02012020 | 02012021 | Ramesh SVS |
	Then verify data in Contacts page
		| NAME | Ramesh SVS |
		| ADDRESS | 2765 Auchmull St, Henderson, NV 89044, USA |
		| PHONE | (919) 498-3999 |
		| EMAIL | ramesh.naren@gmail.com |
		| RELATIONSHIP | Brother |
		 | RELEASE | Yes |
	Then verify data in Release Agreements page
		| DOCUMENT_NAME | pmay.pdf |
		| VALID_FROM | 02/01/2020 |
		| VALID_TO | 02/01/2021 |
		 | APPLIES_TO | 	Ramesh SVS |
	
@CreateHospitalVist
Scenario: Creating a Hospital Visit
	Then click on Members Tab
		| TabName |
		| Hospital Visits |
	Then click on Add Hospital Visit
	Then Enter Data in Add Hospital Visit Page
		| Stay | HospitalName | HospitalUnit | Reason| startDate | endDate |
		| Hospital Admission | JJ Hospitals | Hospital Unit This is to check the maximum | Ortho This is to check the maximum length that is allowed for the field as we are observing several kingd of issues  | 01302018 | 10302018 |
	Then verify data in Hospital Visits
			| HOSPITAL_STAY | Hospital Admission |
			| HOSPITAL_NAME | JJ Hospitals |
			| HOSPITAL_UNIT | Hospital Unit This is to check the maximum |
			| HOSPITAL_START_DATE | 01/29/2018 |
			| HOSPITAL_END_DATE | 10/29/2018 |
			| HOSPITAL_REASON | Ortho This is to check the maximum length that is allowed for the field as we are observing several kingd of issues |
	
@CreateOfficeVist
Scenario: Creating a Office Visit
	Then click on Add Office Visit
	Then Enter Data in Add Office Visit Page
		| visitDate | DoctorName | Speciality | Reason | 
		| 10302018 | Aravind | General Physician | General This is to check the maximum leng | 
	Then verify data in Office Visits
			| VISIT_DATE | 10/29/2018 |
			| DOCTOR_NAME | Aravind |
			| SPECIALTY | General Physician |
			| REASON | General This is to check the maximum leng |

@CreateDocuments
Scenario: Creating a Document
	Then click on Members Tab
		| TabName |
		| Documents |
	# # # Then click on Add Document
	Then Enter data on add document page card view
		| file_path | name |
		| C:\\Selenium\\pmay.pdf | MMR DOCUMENT |		
	Then verify data in Documents page card view
			| NAME | MMR DOCUMENT |

	# 		Then Change to List view
	# 		Then click on Add Document
	# Then Enter data on add document page List view
	# 	| file_path | name |
	# 	| C:\\Selenium\\pmay.pdf | MMR DOCUMENT1 |		
	# Then verify data in Documents page List view
	# 		| NAME | MMR DOCUMENT1 |

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

@CreateDiagnoses
Scenario: Creating a Diagnosis
	Then click on Members Tab
		| TabName |
		| Diagnoses |
	Then click on Add Diagnoses
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		| F12.11 | Referred | Primary |
	Then verify data in Diagnosis Page
		| DIAGNOSIS | Cannabis abuse, in remission |
		| ICD_CODE |  F12.11 |
		| NUM_OF_TIMES | 	1 |
		| SOURCE_TYPE | Referred |

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
	Then open left navigation menu
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
	
@EditDemographics
Scenario: Edit Member Demographics
Then click on Members Tab
		| TabName |
		| Demographics |
	#  Then Click on Edit Icon in Member Header
	Then Enter Data in Demographics Page
		| fname	| mname | lname | dob | gender | marital_status |  address | home_phone | office_phone | other_name | preferred_name | mail_address | race | ethnicity | religion | p_lang | eng_read | eng_write | eng_speak | housing_stat | minor | discretion | description | contact_home | contact_work | contact_phone | contact_email | contact_mail | contact_message |
		| Anil	| AUTO2 | MEMB21 | 01051988 | Female | Married |1 Ham And Honey Rd, Tompkinsville KY | 5091890988 | 5091890989 | Chotu | Anil | 1 E 41st St Savannah GA | Asian | Hispanic or Latino | Jewish | Chinese | Yes | No | Yes | Rented | No | Yes | Anil Kumble | 1 | 3 | 2| 5 | 4 | 6 |
		

@PaginationRetention
Scenario: Pagination retention without any search text
	 Then open left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then click on pagination list
		| PAGE_NUMBER | 3 |
	Then click on first member in the list
	Then open left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then verify active page in the list
		| PAGE_NUMBER | 3 |
		
@PaginationRetention
Scenario: Pagination retention with search text
	Then search for member in the list
		| name |
		|  |
	Then click on pagination list
		| PAGE_NUMBER | 2 |
	Then click on first member in the list
	Then open left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then verify active page in the list
		| PAGE_NUMBER | 2 |
