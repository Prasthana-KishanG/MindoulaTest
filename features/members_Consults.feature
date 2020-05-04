@VerifyMemberConsults
Feature: Add and Verify Member Consult

	
@CreateConsultsAndVerify
Scenario: Creating a Consult
	Then click on Members Tab
		| TabName |
		| Consults |
	Then click on Add Consult
	Then click on Add Diagnosis in Conults page
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		| F12.11 | Referred | Primary |
	Then click on Add Diagnosis in Conults page
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		|Z38.5|Referred|Other|
	Then click on Add Diagnosis in Conults page
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		|Q43.9| Suggested| Primary |
		Then click on Add Diagnosis in Conults page
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		|L01.1| Claims| Primary |
		Then click on Add Diagnosis in Conults page
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		|G04.00| Suggested| Primary |

	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | M3 |
		| NOTES | Thanks for adding measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page

		| ASSESSMENT | HRSN|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | MDQ|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | MADRS|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | CCP Intake|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | IVRP Intake|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | PHQ9 |
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page	
		| ASSESSMENT | PCL5|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | AUDIT-10|
		| NOTES | Thanks for adding Test measurement plan |
	Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | DAST-10|
		| NOTES | Thanks for adding Test measurement plan |	

	Then Enter data in Consult page
		| TREATMENT_SUGGESTIONS | 1.Patient continues to endorse depressive, anxious and obsessive/compulsive symptoms. I suggest discontinuing Citalopram and starting Sertraline 25mg po daily X 6 days with food then increase to Sertraline 50mg po daily.Sertraline can be further titrated if needed. 2.Suggest to continue Buspar at this time.  Once Zoloft is hopefully effective, consider d/c of buspar.  Continue Vistaril prn.3.I suggest Mindoula Care Manager provide ongoing support for mood symptoms.  Patient may benefit from a local psychologist – Mindoula Care Manager can facilitate the referral. 4.I suggest that Mindoula Care Manager repeat PHQ9 and GAD-7 in 6-8 weeks after Zoloft is started.|
		| CONSULT_NOTES | NO |		
	Then take action for the consult
		| Button_to_click | 
		| Publish |
	Then verify data in Consults Page
		| CONSULT_TYPE | Intake |
		| DATE_CREATED | CURRENT_DATE |
		| DATE_SUBMITTED | CURRENT_DATE |
		| CONSULT_STATUS |  Complete |
		| DIAGNOSIS_TYPE | Cannabis abuse, in remission |
		| DIAGNOSIS_CODE | F12.11 |
		| DIAGNOSIS_STATUS | Referred |
		| MPLAN_NAME | M3 |
		| MPLAN_DESC | Patient-rated checklist that screens for depression, anxiety, PTSD and bipolar disorder |
		| TREATMENT_SUGGESTIONS |1.Patient continues to endorse depressive, anxious and obsessive/compulsive symptoms. I suggest discontinuing Citalopram and starting Sertraline 25mg po daily X 6 days with food then increase to Sertraline 50mg po daily.Sertraline can be further titrated if needed. 2.Suggest to continue Buspar at this time.  Once Zoloft is hopefully effective, consider d/c of buspar.  Continue Vistaril prn.3.I suggest Mindoula Care Manager provide ongoing support for mood symptoms.  Patient may benefit from a local psychologist – Mindoula Care Manager can facilitate the referral. 4.I suggest that Mindoula Care Manager repeat PHQ9 and GAD-7 in 6-8 weeks after Zoloft is started.|
		| CONSULT_NOTES | NO |

@VerifyingExistingConsult
Scenario: Verifying an Existing Consult
	Then open left navigation from menu
	Then user clicks on Members
	Then close left navigation menu
	Then search for member in the list
		| name |
		| Merilyn DuBuque |
	Then click on first member in the list
	Then click on Members Tab
		| TabName |
		| Consults |
	Then click on view details in consults list page
		| CONSULT_CREATED_DATE | 02/11/2020 | 
	Then verify data in Existing Consults Page
		| CONSULT_TYPE | Intake  |
		| DATE_CREATED | 02/11/2020 |
		| DATE_SUBMITTED | 02/10/2020 |
		| CONSULT_STATUS |  Complete |
		| DIAGNOSIS_TYPE | Major depressive disorder, single episode, mild  |
		| DIAGNOSIS_CODE |F32.0  |
		| DIAGNOSIS_STATUS |Suggested  |
		| MPLAN_NAME1 | M3 |
		| MPLAN_DESC1 | Patient-rated checklist that screens for depression, anxiety, PTSD and bipolar disorder  |
		| MPLAN_NAME2 | GAD7|
		| MPLAN_DESC2 | Measuring of generalized anxiety disorder |
		| MPLAN_NAME3 | PHQ9|
		| MPLAN_DESC3 | Quick Depression Assessment |
		| TREATMENT_SUGGESTIONS |TREATMENT SUGGESTIONS:\n\n\n1. Patient endorses mild depressive and anxious symptoms.  Patient prefers therapy only at this time.  Mindoula Care manager can provide ongoing support. \n2. I suggest that Mindoula Care Manager repeat PHQ9 and GAD-7 in 6-8 weeks after support is initiated.   \n\n\nPSYCHIATRIST REVIEW:\n\nHistory of Present Illness:  18 yo Female with a history of depression presents with depressive and anxious symptoms. Patient endorses depressed mood, insomnia, appetite changes, low energy and decreased concentration. Patient denies suicidal or homicidal ideation, plan or intent.  Patient endorses anxiety, worry, trouble relaxing, restlessness and irritability. \n\nPast Psychiatric History: History of depression.  No hx psychiatric medications.\n\nSocial History:  Single, lives with parents and sibling.   Unemployed and pursuing her GED.\n\nSubstance Use:  Alcohol: denies; Denies illicit drug use.\n\nMedical History: Irregular menstrual periods\n\nMedications: Melatonin prn; Drospirenone-ethinyl estradiol\n\nAllergies: Pineapple\n\nRating Scales:  PHQ9: 7; GAD7: 6; M3: 35; \n\nDIAGNOSTIC SUGGESTIONS:\n\n1. Major Depressive Disorder, Single, Mild \n2. Generalized Anxiety Disorder (mild)| 
		| CONSULT_NOTES | NO |

@CreateConsultsNotesAutoSave
Scenario: Creating a Consult
    Then open left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then click on a Member in the list
	    | name |
		| NEW R TEST11 |
	Then click on Members Tab
		| TabName |
		| Consults |
	Then click on Add Consult
	Then click on Add Diagnosis in Conults page
	Then Enter Data in Diagnosis Page
		| Code | source_type | diagnosis_type | 
		| F12.11 | Suggested| Primary |
    Then click on Add Measurement Plan
	Then Enter data in Measurement Plan page
		| ASSESSMENT | M3 |
		| NOTES | Thanks for adding Test measurement plan |

	Then Enter data in Consult page
		| TREATMENT_SUGGESTIONS | This is for the medication notes text box |
		| CONSULT_NOTES | NO |	
	 Then wait for a minute
	Then click on Members Tab
	    | TabName |
		| Tasks |
	Then click on Members Tab
		| TabName |
		| Consults |
	Then Edit the top consult in the list 
	|Status|Draft|
	# Then Click on Edit icon

Then Verify the Data in the Notes
	| TREATMENT_SUGGESTIONS | This is for the medication notes text box |












# @VerifyMemberConsults
# Feature: Add and Verify Member Consult

	
# @CreateConsultsAndVerify
# Scenario: Creating a Consult
# 	Then click on Members Tab
# 		| TabName |
# 		| Consults |
# 	Then click on Add Consult
# 	Then click on Add Diagnosis in Conults page
# 	Then Enter Data in Diagnosis Page
# 		| Code | source_type | diagnosis_type | 
# 		| F12.11 | Referred | Primary |
# 	Then click on Add Measurement Plan
# 	Then Enter data in Measurement Plan page
# 		| ASSESSMENT | M3 |
# 		| NOTES | Thanks for adding measurement plan |
# 	Then Enter data in Consult page
# 		| TREATMENT_SUGGESTIONS | This is for the medication notes text box |
# 		| CONSULT_NOTES | NO |	
# 	Then take action for the consult
# 		| Button_to_click | 
# 		| Publish |
# 	Then verify data in Consults Page
# 		| CONSULT_TYPE | Intake |
# 		| DATE_CREATED | CURRENT_DATE |
# 		| DATE_SUBMITTED | CURRENT_DATE |
# 		| CONSULT_STATUS |  Complete |
# 		| DIAGNOSIS_TYPE | Cannabis abuse, in remission |
# 		| DIAGNOSIS_CODE | F12.11 |
# 		| DIAGNOSIS_STATUS | Referred |
# 		| MPLAN_NAME | M3 |
# 		| MPLAN_DESC | Patient-rated checklist that screens for depression, anxiety, PTSD and bipolar disorder |
# 		| TREATMENT_SUGGESTIONS | This is for the medication notes text box |
# 		| CONSULT_NOTES | NO |

# 		@VerifyingExistingConsult
# 		Scenario: Verifying an Existing Consult
# 	Then open left navigation from menu
# 	Then user clicks on Members
# 	Then close left navigation menu
# 	Then search for member in the list
# 		| name |
# 		| Randell Fahey |
# 	Then click on first member in the list
# 	Then click on Members Tab
# 		| TabName |
# 		| Consults |
# 	Then click on view details in consults list page
# 		| CONSULT_CREATED_DATE | 01/13/2020 | 
# 	Then verify data in Existing Consults Page
# 		| CONSULT_TYPE | Intake  |
# 		| DATE_CREATED | 01/13/2020 |
# 		| DATE_SUBMITTED | 01/13/2020 |
# 		| CONSULT_STATUS |  Complete |
# 		| DIAGNOSIS_TYPE | Major depressive disorder, recurrent, mild |
# 		| DIAGNOSIS_CODE |F33.0  |
# 		| DIAGNOSIS_STATUS |Suggested  |
# 		| MPLAN_NAME1 | GAD7 |
# 		| MPLAN_DESC1 | Measuring of generalized anxiety disorder  |
# 		| MPLAN_NAME2 | PHQ9|
# 		| MPLAN_DESC2 | Quick Depression Assessment |
# 	    | TREATMENT_SUGGESTIONS | Pt is a 44 yo woman with past psychiatric history significant for depression usually precipitated by psychosocial stressors. Over the past year she has been struggling with depressed mood, feeling overwhelmed, increased appetite, poor concentration, and insomnia precipitated by the death of her father in Dec 2018 and sister’s diagnosis of breast cancer with need for double mastectomy in 2019. Patient was started on Wellbutrin Oct 2019, dose decreased to current dose on SR 150 mg daily after she experienced chest tightness on higher dose. Started Prozac 10 g in Dec 2019 to assist with continued depressive symptoms. Has found this combination of medications beneficial with significant improvement in depressive symptoms. No SI/HI, symptoms consistent with psychosis or mania. \n1) Continue Wellbutrin SR 150 mg daily and fluoxetine 10 mg po daily. If patient experiences relapse in depressive symptoms for over 2 weeks, it is reasonable to increase dose of fluoxetine to 20 mg daily. \n2) Continue brief therapy with CM to include mindfulness exercises, coping skills, sleep hygiene, and grounding techniques. Patient is actively looking for a longer-term individual therapist. \n3) Continue to encourage regular exercise as patient has experienced weight gain associated with depressed mood over the past year. |
#         | CONSULT_NOTES | NO |