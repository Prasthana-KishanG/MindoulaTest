@VerifyM3BranchingLogic
Feature: Verify M3 Assessment Scores

@CreateAssessments
Scenario: Creating an Assessment
	Then click on Members Tab
		| TabName |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| M3 | 
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Never  |
		| Nothing seems to give me much pleasure | Never  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Never  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Never  |
		| I have attacks of anxiety or panic | Never  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Never  |
		| I am jumpy or feel startled easily | Never  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Never  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Never  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take actions on assessment
		| Button_to_click |
		| Submit |
#	Check Score Zero
	Then Verify M3 Responses1
		| RISK | Overall symptom burden is Unlikely. |
		| TOTAL_SCORE | 0 |
		| M3_IMPAIRMENT_SCORE | 0 - Negative |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all|
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
	    # | FOLLOW_UP_TASKS | No assessments are needed at this time |

		Scenario: Creating an Assessment2

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Never  |
		| Nothing seems to give me much pleasure | Never  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Rarely  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Never  |
		| I have attacks of anxiety or panic | Never  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Never  |
		| I am jumpy or feel startled easily | Never  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Never  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Never  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take action on assessment
		| Button_to_click |
		| Save |	
#	Check M3: Suicide Question	>1
	Then Verify M3 Responses
		| RISK | Overall symptom burden is Unlikely. |
		| TOTAL_SCORE | 1 |
		| M3_IMPAIRMENT_SCORE | 1 - Positive |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 1 - Rarely	|
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | EXIST |
	    # | FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
		| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,HRSN,HRSNS (Short),NIDA Quick Screen,Psychosis,Trauma Screen |


		Scenario: Creating an Assessment3

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Never  |
		| Nothing seems to give me much pleasure | Never  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Never  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Never  |
		| I have attacks of anxiety or panic | Never  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Never  |
		| I am jumpy or feel startled easily | Never  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Never  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Often  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take action on assessment
		| Button_to_click |
		| Save |	
	# M3: Functional Impairment (gateway questions)	Yes	
	Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 3 |
		| M3_IMPAIRMENT_SCORE | 1 - Positive |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all	|
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
		| FOLLOW_UP_TASKS | HRSN,HRSNS (Short),NIDA Quick Screen,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment4

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Never  |
		| Nothing seems to give me much pleasure | Never  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Never  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Sometimes  |
		| I have attacks of anxiety or panic | Often  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Never  |
		| I am jumpy or feel startled easily | Never  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Never  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Never  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take action on assessment
		| Button_to_click |
		| Save |	
#	M3 Anxiety	>3 
	Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 5 |
		| M3_IMPAIRMENT_SCORE | 0 - Negative |
		| ANXIETY_SCORE | 3 - Low Risk |
		| SELF_HARM_SCORE | 0 - Not at all	|
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen,GAD7 |
		| FOLLOW_UP_TASKS | GAD7,HRSN,HRSNS (Short),NIDA Quick Screen,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment5

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Never  |
		| Nothing seems to give me much pleasure | Never  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Never  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Never  |
		| I have attacks of anxiety or panic | Never  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Sometimes  |
		| I am jumpy or feel startled easily | Sometimes  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Never  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Never  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take action on assessment
		| Button_to_click |
		| Save |	
#	M3 PTSD	>2	
	Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 4 |
		| M3_IMPAIRMENT_SCORE | 0 - Negative |
		| ANXIETY_SCORE | 2 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all	|
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 2 - Low Risk|
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen,PCL5 |
		| FOLLOW_UP_TASKS | HRSN,HRSNS (Short),NIDA Quick Screen,PCL5,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment6

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Most of the time |
		| concentrate or focus   		| Often  |
		| Nothing seems to give me much pleasure | Sometimes  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Never  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Never  |
		| I have attacks of anxiety or panic | Never  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Never  |
		| I am jumpy or feel startled easily | Never  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Never  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Never  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take action on assessment
		| Button_to_click |
		| Save |	
# 	M3 Depression	>5
	Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 9 |
		| M3_IMPAIRMENT_SCORE | 0 - Negative |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all	|
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 5 - Low Risk| 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen,PHQ9 |
		| FOLLOW_UP_TASKS | HRSN,HRSNS (Short),NIDA Quick Screen,PHQ9,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment7

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Never  |
		| Nothing seems to give me much pleasure | Never  |
		| I have no energy      | Never  |
		| I have had thoughts of suicide 	   	  | Never  | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Never  |
		| I have lost some appetite	  | Never   |
		| I have been eating more | Never  |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Never  |
		| I have attacks of anxiety or panic | Never  |
		| I worry about dying or losing control  | Never  |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Never  |
		| I am jumpy or feel startled easily | Never  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Never  |
		| get certain thoughts out of my mind | Never  |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Never  |
		| Had more energy than usual? | Most of the time  |
		| Felt unusually irritable or angry? | Never  |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Never  |
		| Interferes with work or school | Never  |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never  |
		| Has led to my using drugs | Never  |
	Then take action on assessment
		| Button_to_click |
		| Save |	
#  	M3 Bipolar	>2	
	Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 4 |
		| M3_IMPAIRMENT_SCORE | 0 - Negative |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all	|
		| BIPOLAR_SCORE | 2 - Low Risk|
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen,MDQ |
		| FOLLOW_UP_TASKS | HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment8

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Rarely |
		| Nothing seems to give me much pleasure | Rarely |
		| I have no energy      | Often |
		| I have had thoughts of suicide 	   	  | Most of the time | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Rarely |
		| I have lost some appetite	  | Rarely  |
		| I have been eating more | Rarely |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Rarely |
		| I have attacks of anxiety or panic | Rarely |
		| I worry about dying or losing control  | Rarely |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Sometimes |
		| I am jumpy or feel startled easily | Sometimes |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Sometimes |
		| get certain thoughts out of my mind | Sometimes |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Sometimes |
		| Had more energy than usual? | Sometimes |
		| Felt unusually irritable or angry? | Sometimes |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Often |
		| Interferes with work or school | Often |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Most of the time |
		| Has led to my using drugs | Most of the time |
	Then take action on assessment
		| Button_to_click |
		| Save |
# 	Score - 42
	Then Verify M3 Responses
		| RISK | Overall symptom burden is Medium. |
		| TOTAL_SCORE | 42 |
		| M3_IMPAIRMENT_SCORE | 1 - Positive |
		| ANXIETY_SCORE | 5 - Low Risk|
		| SELF_HARM_SCORE | 4 - Most of the time |
		| BIPOLAR_SCORE | 4 - Medium Risk|
		| DEPRESSION_SCORE | 4 - Negative | 
		| PTSD_SCORE | 3 - Low Risk|
		| SELF_HARM_ALERT | EXIST |
		# | FOLLOW_UP_TASKS | MDQ,PCL5,GAD7,Columbia-Suicide Severity Rating Scale,HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
		| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,Psychosis,Trauma Screen |
	
	Scenario: Creating an Assessment9

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Rarely |
		| Nothing seems to give me much pleasure | Rarely |
		| I have no energy      | Often |
		| I have had thoughts of suicide 	   	  | Never | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Rarely |
		| I have lost some appetite	  | Rarely  |
		| I have been eating more | Rarely |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Rarely |
		| I have attacks of anxiety or panic | Rarely |
		| I worry about dying or losing control  | Rarely |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Rarely  |
		| I am jumpy or feel startled easily | Rarely  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Rarely  |
		| get certain thoughts out of my mind | Sometimes |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Sometimes |
		| Had more energy than usual? | Rarely |
		| Felt unusually irritable or angry? | Sometimes |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Rarely |
		| Interferes with work or school | Often |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Most of the time |
		| Has led to my using drugs | Most of the time |
	Then take action on assessment
		| Button_to_click |
		| Save |	
#	Score 32
		Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 32 |
		| M3_IMPAIRMENT_SCORE | 1 - Positive |
		| ANXIETY_SCORE | 2 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all |
		| BIPOLAR_SCORE | 1 - Negative |
		| DEPRESSION_SCORE | 2 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
		| FOLLOW_UP_TASKS | HRSN,HRSNS (Short),NIDA Quick Screen,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment10

	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Never |
		| concentrate or focus   		| Rarely |
		| Nothing seems to give me much pleasure | Rarely |
		| I have no energy      | Rarely |
		| I have had thoughts of suicide 	   	  | Never | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Rarely |
		| I have lost some appetite	  | Rarely  |
		| I have been eating more | Rarely |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Rarely |
		| I have attacks of anxiety or panic | Rarely |
		| I worry about dying or losing control  | Rarely |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Rarely  |
		| I am jumpy or feel startled easily | Rarely  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Rarely  |
		| get certain thoughts out of my mind | Rarely |
		| I feel I must repeat certain acts or rituals  | Never |
		| I feel the need to check and recheck things | Rarely |
		| Had more energy than usual? | Rarely |
		| Felt unusually irritable or angry? | Rarely |
		| Felt unusually excited, revved up or high? | Never |
		| Needed less sleep than usual? | Rarely |
		| Interferes with work or school | Rarely |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Rarely |
		| Has led to my using drugs | Rarely |
	Then take action on assessment
		| Button_to_click |
		| Save |	
# 	Score 19
	Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 19 |
		| M3_IMPAIRMENT_SCORE | 1 - Positive |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all |
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
	    # | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
	    | FOLLOW_UP_TASKS | HRSN,HRSNS (Short),NIDA Quick Screen,Psychosis,Trauma Screen |

		Scenario: Creating an Assessment11
	Then take action in results page
		| BUTTON_TO_CLICK |
		| Edit |
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Rarely |
		| concentrate or focus   		| Rarely |
		| Nothing seems to give me much pleasure | Rarely |
		| I have no energy      | Rarely |
		| I have had thoughts of suicide 	   	  | Never | 
		| I have difficulty sleeping  | Never | 
		| I have been sleeping too much | Rarely |
		| I have lost some appetite	  | Rarely  |
		| I have been eating more | Rarely |
		| I feel tense, anxious | Never |
		| I feel worried or fearful | Rarely |
		| I have attacks of anxiety or panic | Rarely |
		| I worry about dying or losing control  | Rarely |
		| I am nervous or shaky in social situations | Never |
		| I have nightmares or flashbacks  | Rarely  |
		| I am jumpy or feel startled easily | Rarely  |
		| I avoid places that strongly remind me of a bad experience | Never |
		| I feel dull, numb, or detached | Rarely  |
		| get certain thoughts out of my mind | Rarely |
		| I feel I must repeat certain acts or rituals  | Rarely |
		| I feel the need to check and recheck things | Rarely |
		| Had more energy than usual? | Rarely |
		| Felt unusually irritable or angry? | Rarely |
		| Felt unusually excited, revved up or high? | Rarely |
		| Needed less sleep than usual? | Rarely |
		| Interferes with work or school | Rarely |
		| Affects my relationships with friends or family | Never |
		| Has led to my using alcohol to get by | Never |
		| Has led to my using drugs | Never |
	Then take action on assessment
		| Button_to_click |
		| Save |	
# 	Score 20
		Then Verify M3 Responses2
		| RISK | Overall symptom burden is Low. |
		| TOTAL_SCORE | 20 |
		| M3_IMPAIRMENT_SCORE | 0 - Negative |
		| ANXIETY_SCORE | 0 - Negative |
		| SELF_HARM_SCORE | 0 - Not at all |
		| BIPOLAR_SCORE | 0 - Negative |
		| DEPRESSION_SCORE | 0 - Negative | 
		| PTSD_SCORE | 0 - Negative |
		| SELF_HARM_ALERT | DOES_NOT_EXIST |
		# | FOLLOW_UP_TASKS | HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
		| FOLLOW_UP_TASKS |  HRSN,HRSNS (Short),NIDA Quick Screen,Psychosis,Trauma Screen |
	
	
	
