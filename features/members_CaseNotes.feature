@VerifyMemberCaseNotes
Feature: Add and Verify Case Notes
	
@CreateCaseNotes
Scenario: Creating a Case Notes
	Then click on Members Tab
		| TabName |
		| Case Notes |
	Then click on Add Case Notes
	Then Enter Data in Case Notes Page
		| ENGAGEMENT_DATE | 121712018 |
		| ADD_CARE_EXTENDER | MMR |
		| TIME_RANGE | 9am - 5pm,5pm - Midnight,Midnight - 9am |
		| ENGAGEMENT_METHODS | Phone;3;30,In-Person;2;30 |
		| INTERVENTIONS | Appointment Scheduling;30;[Blank],Attempted Contact;20;[Blank],Case Review with Consultant Psychiatrist;10;[Blank] |
		| ENGAGEMENT_STATUS | Attempted by Care Extender but not successful,Rescheduled |
		| FAIL_REASONS | Incorrect address,Member incarcerated |
		| INDIVIDUALS | Emergency Services,Team Member |
		| INTERACTION | Anxious,Swearing |
		| DIVERSION | Unsuccessful ED |
		| INPERSON | Community | 

	Then navigate to Actions Taken tab

	Then Enter data in Actions taken page	
		| IssuesAddressed 		| Referrals | Care Gap |
		| Assessment,Benefits   | Yes	  | Yes		  |


	Then click on Add Care Gaps
		Then Enter Data in CareGaps 
		| Type | Identifid_On | Expected_Resolution | Description |
		| Missing Vaccination | 01012018 | 01302018 | Vaccination Schedule Missed |

	Then click on Add Referral
	Then Enter Data in Referral Page
		| Type | providerInNetwork | providerType | specialtyType | Name | ContactInfo | DirectName | DirectContactInfo | AppointmentDate | reasonableTime | reminder | assitance | status | ReferralDate |
		| Provider | Yes | Specialty | Ortho | Rahul | NewYork | RDravid | Ny State | 06242018 | Yes | Yes | Yes | Successful | 06012018 | 
	Then navigate to Next Steps tab
		Then Enter Data in Next Steps page
		| follow_up_plan | follow_appointment | Tasks | Notes | 
		| has been scheduled,will continue to provide outreach,will continue to provide assistance | MMR,10302018,follow up | Yes | I don't know this is first sentence.I don't know this is second sentence.I don't know this is third sentence.I don't know this is fourth sentence.I don't know this is fifth sentence.I don't know this is sixth sentence.I don't know this is seventh sentence.I don't know this is eighth sentence.I don't know this is nineth sentence.I don't know this is tenth sentence.I don't know this is eleventh sentence. | 
	Then click on Add Tasks
		Then Enter Data in Tasks
		| Type | CareExtender| Description | goalDate | 
		| Reminder | MMR | testing | 10302018  | 
	
	Then navigate to Actions Taken tab
	Then navigate to Engagement Details tab
	Then navigate to Next Steps tab
	Then verify data in Notes
	| NOTES | Notes here... I don't know this is first sentence.I don't know this is second sentence.I don't know this is third sentence.I don't know this is fourth sentence.I don't know this is fifth sentence.I don't know this is sixth sentence.I don't know this is seventh sentence.I don't know this is eighth sentence.I don't know this is nineth sentence.I don't know this is tenth sentence.I don't know this is eleventh sentence. |  

	Then take action on case notes
		| Button_to_click |
		| Publish |	

		Then verify data in case notes response page
		| TOTAL_TIME | 60 |
		| TIME_RANGE | 9am - 5pm, 5pm - Midnight, Midnight - 9am |
		| AUTHOR |  MMR CaseManager |
		| ENGAGEMENT_METHODS | In-Person;2;30,Phone;3;30 |
		#  | INTERVENTIONS | Attempted Contact;20,Case Review with Consultant Psychiatrist;10,Appointment Scheduling;30 |
		  | INTERVENTIONS |Appointment Scheduling;30,Attempted Contact;20,Case Review with Consultant Psychiatrist;10|
		| DIVERSION_TRACKING | Unsuccessful ED |
		| ENGAGEMENT_STATUS | Attempted by Care Extender but not successful, Rescheduled |
		| FAIL_REASONS | Incorrect address, Member incarcerated |
		| INDIVIDUALS | Emergency Services, Team Member |
		| INTERACTION | Anxious, Swearing |
		| INPERSON | Community |
		| ISSUES_ADDRESSED |  Assessment,Benefits |
		# | FOLLOWUP_PLANS | Care Extender will continue to provide assistance to member while primary case manager is unavailable,Care Extender will continue to provide outreach and assistance to member as needed to support ongoing case management goals and objectives |
		| NOTES | I don't know this is first sentence.I don't know this is second sentence.I don't know this is third sentence.I don't know this is fourth sentence.I don't know this is fifth sentence.I don't know this is sixth sentence.I don't know this is seventh sentence.I don't know this is eighth sentence.I don't know this is nineth sentence.I don't know this is tenth sentence.I don't know this is eleventh sentence. |  
	@Verfycheatsheet
Scenario: Verfy cheatsheet
	Then click on Members Tab
		| TabName |
		| Cheatsheet |
	
		Then verify data in cheatsheet page
		|LAST_ENGAGEMENT|Phone,In-Person,Appointment Scheduling,Attempted Contact,Case Review with Consultant Psychiatrist|
		|OBSERVATIONS_FROM_LAST_ENGAGEMENT|Anxious,Swearing|



