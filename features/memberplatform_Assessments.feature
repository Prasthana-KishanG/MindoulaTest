@VerifyAllAssessmentsInMembPlatform
Feature: Member Assessments

	
@CreateAssessments
Scenario: Creating M3 Assessment
	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| M3 | 
	Then Enter Data in M3 Assessment
		| I feel sad, down in the dumps or unhappy | Sometimes |
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
		| Submit |
	Then Close Self Harm Pop Up	
	Then Verify M3 Responses
		| RISK | Overall symptom burden is Medium. |
		| TOTAL_SCORE | 44 |
		| M3_IMPAIRMENT_SCORE | 1 - Positive |
		| ANXIETY_SCORE | 5 - Low Risk|
		| SELF_HARM_SCORE | 4 - Most of the time |
		| BIPOLAR_SCORE | 4 - Medium Risk|
		| DEPRESSION_SCORE | 5 - Low Risk| 
		| PTSD_SCORE | 3 - Low Risk|
		| SELF_HARM_ALERT | EXIST |
		| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,PHQ9,Psychosis,Trauma Screen |
	
	Then user clicks on Dashboard in Member Platform Home Page
		| name |
		| Dashboard |

    Then Verify Followup Tasks in Home page
		| FOLLOW_UP_TASKS | MDQ,PCL5,GAD7,PHQ9,Columbia-Suicide Severity Rating Scale,HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
	
	Scenario: Creating Trauma Assessment

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| Trauma | 
	Then Enter Data in Trauma Assessment Member Platform
		| Do you feel safe at home? | No |
		| kicked or otherwise physically hurt by someone | Yes |
		| Have you ever been forced to have sex or do something sexual against your will? | No |
		| Have you ever been physically attacked, like being hit, kicked or beaten up? | Yes |
		| Have you ever been in any other situation that was extremely frightening  | No | 
		| Were you ever present when another person was killed, seriously injured, or sexually or physically assaulted? | Yes | 
	Then take action on assessment
		| Button_to_click |
		| Submit |
	Then Verify Trauma Responses
			| TITLE           | MCBHP Trauma Screen                                                                                      |
			| RISK            | Risk of having a mental health disorder is Positive.                                                     |
			| TOTAL_SCORE     | 4                                                                                                        |
			| TOTAL_DESC      | Positive                                                                                                 |
			| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,PHQ9,Psychosis |

	Scenario: Creating PHQ9 Assessment

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
 			| Name |
			| PHQ9 |
	Then Enter Data in PHQ9 Assessment
			| Feeling down, depressed, or hopeless                                                               | Several days            |
			| Little interest or pleasure in doing things?                                                       | Not at all              |
			| Trouble falling or staying asleep, or sleeping too much                                            | More than half the days |
			| Feeling tired or having little energy                                                              | Nearly every day        |
			| Poor appetite or overeating                                                                        | Not at all              |
			| Feeling bad about yourself or that you are a failure                                               | More than half the days |
			| Trouble concentrating on things, such as reading the newspaper                                     | Nearly every day        |
			| Moving or speaking so slowly that other people could have noticed                                  | Several days            |
			| Thoughts that you would be better off dead                                                         | Nearly every day        |
			| If you checked off any problems, how difficult have these problems made it for you to do your work | Not difficult at all    |
	Then take action on assessment
			| Button_to_click |
			| Submit |	
	Then Close Self Harm Pop Up	
	
	Then Verify PHQ9 Responses
			| TITLE           | Quick Depression Assessment                                                                         |
			| RISK            | Depression symptom severity is Moderately Severe.                                                   |
			| TOTAL_SCORE     | 15                                                                                                  |
			| TOTAL_DESC      | Moderately Severe                                                                                   |
			| SELF_HARM_ALERT | EXIST                                                                                               |
			| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,Psychosis |

	Scenario: Creating HRSN Assessment
	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Starts Assessment
		| Name |
		| HRSN | 
	Then Enter Data in HRSN Assessment
			| What is your living situation today?                                                                                                  | I have a steady place to live |
			| Think about the place you live                                                                                                        | Mold,Water leaks              |
			| you worried that your food would run out before you got money to buy more                                                             | Never true                    |
			| have money to get more                                                                                                                | Sometimes true                |
			| In the past 12 months, has lack of reliable transportation kept you from medical appointments                                         | Yes                           |
			| In the past 12 months has the electric, gas, oil, or water company threatened to shut off services                                    | Already shut off              |
			| How often does anyone, including family and friends, physically hurt you?                                                             | Fairly often                  |
			| How often does anyone, including family and friends, insult or talk down to you?                                                      | Frequently                    |
			| How often does anyone, including family and friends, threaten you with harm?                                                          | Sometimes                     |
			| How often does anyone, including family and friends, scream or curse at you?                                                          | Sometimes                     |
			| How hard is it for you to pay for the very basics like food, housing, medical care, and heating?                                      | Somewhat hard                 |
			| Do you want help finding or keeping work or a job?                                                                                    | Yes, help keeping work        |
			| If for any reason you need help with day-to-day activities such as bathing, preparing meals, shopping, managing finances, etc         | I get all the help I need     |
			| How often do you feel lonely or isolated from those around you?                                                                       | Always                        |
			| Do you speak a language other than English at home?                                                                                   | Yes                           |
			| Do you want help with school or training?                                                                                             | Yes                           |
			| In the last 30 days, other than the activities you did for work, on average                                                           | 6                             |
			| On average, how many minutes did you usually spend exercising at this level on one of those days?                                     | 150 or greater                |
			| How many times in the past 12 months have you had 5 or more drinks in a day                                                           | Daily or Almost Daily         |
			| How many times in the past 12 months have you used tobacco products                                                                   | Weekly                        |
			| How many times in the past year have you used prescription drugs for non-medical reasons?                                             | Weekly                        |
			| How many times in the past year have you used illegal drugs?                                                                          | Weekly                        |
			| Over the past 2 weeks, how often have you been bothered by any of the following problems?Little interest or pleasure in doing things? | More than half the days       |
			| Over the past 2 weeks, how often have you been bothered by any of the following problems?Feeling down, depressed, or hopeless?        | Several days                  |
			| Stress means a situation in which a person feels tense, restless, nervous, or anxious                                                 | Somewhat                      |
			| Because of a physical, mental, or emotional condition, do you have serious difficulty concentrating                                   | Yes                           |
			| Because of a physical, mental, or emotional condition, do you have difficulty doing errands alone                                     | No                            |
	Then take action on assessment
		| Button_to_click |
		| Submit |	
	Then Verify HRSN Responses
			| TITLE               | Accountable Health Communities (AHC) Health-Related Social Needs (HRSN) Screening Tool                          |
			| DISABILITIES SCREEN | 1 - Positive                                                                                                    |
			| DISABILITIES SUM    | 1 - All level                                                                                                   |
			| STRESS SCREEN       | 1 - Positive                                                                                                    |
			| STRESS SUM          | 1 - All level                                                                                                   |
			| MENTALHEALTH SCREEN | 1 - Positive                                                                                                    |
			| MENTALHEALTH SUM    | 3 - All level                                                                                                   |
			| SUBSTANCE SCREEN    | 1 - Positive                                                                                                    |
			| SUBSTANCE SUM       | 4 - All level                                                                                                   |
			| ACTIVITY SCREEN     | 0 - Negative                                                                                                    |
			| ACTIVITY SUM        | 900 - All level                                                                                                 |
			| EDUCATION SCREEN    | 1 - Positive                                                                                                    |
			| EDUCATION SUM       | 2 - All level                                                                                                   |
			| SUPPORT SCREEN      | 1 - Positive                                                                                                    |
			| SUPPORT SUM         | 1 - All level                                                                                                   |
			| EMPLOYMENT SCREEN   | 1 - Positive                                                                                                    |
			| EMPLOYMENT SUM      | 1 - All level                                                                                                   |
			| FINANCIAL SCREEN    | 1 - Positive                                                                                                    |
			| FINANCIAL SUM       | 1 - All level                                                                                                   |
			| SAFETY SCREEN       | 1 - Positive                                                                                                    |
			| SAFETY SUM          | 15 - All level                                                                                                  |
			| UTILITIES SCREEN    | 1 - Positive                                                                                                    |
			| UTILITIES SUM       | 1 - All level                                                                                                   |
			| TRANSPORT SCREEN    | 1 - Positive                                                                                                    |
			| TRANSPORT SUM       | 1 - All level                                                                                                   |
			| FOOD SCREEN         | 1 - Positive                                                                                                    |
			| FOOD SUM            | 1 - All level                                                                                                   |
			| LIVING SCREEN       | 1 - Positive                                                                                                    |
			| LIVING SUM          | 2 - All level                                                                                                   |
			| FOLLOW_UP_TASKS     | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,GAD7,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,Psychosis |

	Scenario: Creating HRSNS Assessment

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
			Then click on Start Assessment
			| Name  |
			| HRSNS |
		Then Enter Data in HRSNS Assessment
			| What is your living situation today?                                                              | I have a steady place to live |
			| Think about the place you live                                                                    | Mold,Water leaks              |
			| you worried that your food would run out before you got money to buy more                         | Never true                    |
			| have money to get more                                                                            | Sometimes true                |
			| In the past 12 months, has lack of reliable transportation kept you from medical appointments     | Yes                           |
			| In the past 12 months has the electric, gas, oil, or water company threatened to shutoff services | Already shut off              |
			| How often does anyone, including family and friends, physically hurt you?                         | Fairly often                  |
			| How often does anyone, including family and friends, insult or talk down to you?                  | Frequently                    |
			| How often does anyone, including family and friends, threaten you with harm?                      | Sometimes                     |
			| How often does anyone, including family and friends, scream or curse at you?                      | Sometimes                     |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify HRSNS Responses
			| TITLE           | HRSNS Without supplemental questions                                                              |
			| SAFETY          | 15 - Unsafe                                                                                       |
			| UTILITIES       | 1 - Unmet Needs                                                                                   |
			| TRANSPORT       | 1 - Unmet Needs                                                                                   |
			| FOOD            | 1 - Unmet Needs                                                                                   |
			| LIVING          | 2 - Unmet Needs                                                                                   |
			| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,GAD7,MDQ,NIDA Quick Screen,PCL5,Psychosis |

	Scenario: Creating Single Question Assessment

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| Single Question Mental Health Screen | 
	Then Enter Data in Single Question Assessment
		| would you say your mental health is | Excellent |
	Then take action on assessment
		| Button_to_click |
		| Submit |	
	Then Verify Single Question Responses
		| TITLE | Find Current Mental Health Status | 
		| RISK | Risk of having a mental health disorder is Low Risk. |
		| TOTAL_SCORE | 0 |
		| TOTAL_DESC | Low Risk |
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,GAD7,MDQ,NIDA Quick Screen,PCL5,Psychosis |
	
	Scenario: Creating GAD7 Assessment
	
	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| GAD7 | 
	Then Enter Data in GAD7 Assessment
			| Feeling nervous                                    | More than half the days |
			| Not being able to stop or control worrying?        | Nearly every day        |
			| Worrying too much about different things?          | More than half the days |
			| Trouble relaxing?                                  | Several days            |
			| Being so restless                                  | Not at all              |
			| Becoming easily annoyed or irritable?              | Several days            |
			| Feeling afraid as if something awful might happen? | More than half the days |
	Then take action on assessment
		| Button_to_click |
		| Submit |	
	Then Verify GAD7 Responses
		| TITLE | Measuring of generalized anxiety disorder | 
		| RISK | Risk of having an anxiety disorder is Moderate. |
		| TOTAL_SCORE | 11 |
		| TOTAL_DESC | Moderate |
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,MDQ,NIDA Quick Screen,PCL5,Psychosis |
	
	Scenario: Creating PCL5 Assessment

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| PCL5 | 
	Then Enter Data in PCL5 Assessment
			| Repeated, disturbing and unwanted memories of the stressful experience?                  | Not at all   |
			| Suddenly feeling or acting as if the stressful experience were actually happening again  | Moderately   |
			| Repeated, disturbing dreams of the stressful experience?                                 | A little bit |
			| Feeling very upset when something reminded you of the stressful experience?              | Quite a bit  |
			| Having strong physical reactions when something reminded you of the stressful experience | Extremely    |
			| thoughts or feelings related to the stressful experience?                                | Quite a bit  |
			| Avoiding external reminders of the stressful experience                                  | Moderately   |
			| Trouble remembering important parts of the stressful experience?                         | A little bit |
			| Having strong negative beliefs about yourself                                            | Not at all   |
			| Blaming yourself or someone else for the stressful experience or what happened after it? | A little bit |
			| Having strong negative feelings such as fear                                             | Moderately   |
			| Loss of interest in activities that you used to enjoy?                                   | Quite a bit  |
			| Feeling distant or cut off from other people?                                            | Extremely    |
			| Trouble experiencing positive feelings                                                   | Quite a bit  |
			| Irritable behavior                                                                       | Moderately   |
			| Taking too many risks or doing things that could cause you harm?                         | A little bit |
			| or watchful or on guard?                                                                 | Not at all   |
			| Feeling jumpy or easily startled?                                                        | A little bit |
			| Having difficulty concentrating?                                                         | Moderately   |
			| Trouble falling or staying asleep?                                                       | Quite a bit  |
	Then take action on assessment
		| Button_to_click |
		| Submit |	
	Then Verify PCL5 Responses
		| TITLE | Measure to assess the presence and severity of PTSD symptoms | 
		| RISK | Risk of having a mental health disorder is Moderate. |
		| TOTAL_SCORE | 38 |
		| TOTAL_DESC | Moderate |
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,MDQ,NIDA Quick Screen,Psychosis |
	
	Scenario: Creating MDQ Assessment
	
	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| MDQ | 
	Then Enter Data in MDQ Assessment
			| you shouted at people or started fights or arguments?                                                                                   | No            |
			| ...you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble? | Yes           |
			| ...you felt much more self-confident than usual?                                                                                        | Yes           |
			| you got much less sleep than usual and found                                                                                            | No            |
			| you were much more talkative or spoke much faster than usual?                                                                           | Yes           |
			| thoughts raced through your head                                                                                                        | No            |
			| you were so easily distracted by things around you                                                                                      | Yes           |
			| you had much more energy than usual?                                                                                                    | No            |
			| you were much more active or did many more things than usual?                                                                           | Yes           |
			| you were much more social or outgoing than usual                                                                                        | No            |
			| you were much more interested in sex than usual?                                                                                        | Yes           |
			| you did things that were unusual for you or that other people might have thought were excessive                                         | No            |
			| spending money got you or your family into trouble?                                                                                     | Yes           |
			| If you checked YES to more than one of the above                                                                                        | No            |
			| How much of a problem did any of these cause you                                                                                        | Minor Problem |
			| Have any of your blood relatives                                                                                                        | Yes           |
			| Has a health professional                                                                                                               | No            |
	Then take actions on assessment
		| Button_to_click |
		| Submit |	
	Then Verify MDQ Responses
		| TITLE | Mood Disorder Questionnaire | 
		| RISK | Risk of having a mental health disorder is Negative. |
		| TOTAL_SCORE | 0 |
		| TOTAL_DESC | Negative |
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,NIDA Quick Screen,Psychosis |	
	
	# Scenario: Creating Columbia Assessment
	
	# Then user clicks on left nav item in Member Platform
	# 	| name |
	# 	| Assessments |	
	# Then click on Start Assessment
	# 	| Name |
	# 	| Columbia | 
	# Then Enter Data in Columbia Assessment
	# 		| In the past month, Have you wished you were dead or wished you could go to sleep and not wake up? | No  |
	# 		| anything to end your life?                                                                        | Yes |
	# 		| Was this within the past 3 months?                                                                | Yes |
	# 		| Have you had any actual thoughts of killing yourself?                                             | No  |
	# 		| Have you been thinking about how you might do this?                                               | Yes |
	# 		| Have you had these thoughts and had some intention of acting on them?                             | No  |
	# 		| Have you started to work out or worked out the details of how to kill yourself?                   | Yes |
	# 	Then take actions on assessment
	# 		| Button_to_click |
	# 		| Submit          |
	# 	Then Verify Columbia Responses
	# 		| In the past month, Have you wished you were dead or wished you could go to sleep and not wake up? | No  |
	# 		| anything to end your life?                                                                        | Yes |
	# 		| Was this within the past 3 months?                                                                | Yes |
	# 		| Have you had any actual thoughts of killing yourself?                                             | No  |
	# 		| Have you been thinking about how you might do this?                                               | Yes |
	# 		| Have you had these thoughts and had some intention of acting on them?                             | No  |
	# 		| Have you started to work out or worked out the details of how to kill yourself?                   | Yes |
	
	Scenario: Creating Psychosis Assessment
	
	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| Psychosis | 
	Then Enter Data in Psychosis Assessment
			| Do you ever hear things                                             | No  |
			| Do you ever feel like people are spying on your or out to hurt you? | Yes |
			| Do you ever receive special messages                                | Yes |
	Then take actions on assessment
		| Button_to_click |
		| Submit |	
	Then Verify Psychosis Responses
		| TITLE | Psychosis | 
		| RISK | Risk of having a mental health disorder is Positive. |
		| TOTAL_SCORE | 2 |
		| TOTAL_DESC | Positive |
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,NIDA Quick Screen |
	
	Scenario: Creating AUDIT10 Assessment

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| AUDIT-10 | 
	Then Enter Data in AUDIT10 Assessment
			| How often do you have a drink containing alcohol?                                                | Never                    |
			| How many drinks containing alcohol do you have on a typical day when you are drinking?           | 10 or more               |
			| How often do you have six or more drinks on one occasion?                                        | Monthly                  |
			| How often during the last year have you found that you were not able to stop drinking            | Weekly                   |
			| How often during the last year have you failed to do what was normally expected from you         | Less than monthly        |
			| How often during the last year have you needed a first drink in the morning                      | Never                    |
			| How often during the last year have you had a feeling of guilt                                   | Weekly                   |
			| How often during the last year have you been unable to remember what happened the night before   | Weekly                   |
			| Have you or someone else been injured as a result of your drinking?                              | but not in the last year |
			| Has a relative or friend or a doctor or another health worker been concerned about your drinking | during the last year     |
	Then take action on assessment
		| Button_to_click |
		| Submit |	
	Then Verify AUDIT10 Responses
		| TITLE | The Alcohol Use Disorders Identification Test | 
		| RISK | Risk of having a mental health disorder is Positive. |
		| TOTAL_SCORE | 22 |
		| TOTAL_DESC | Positive |
		| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,DAST-10,NIDA Quick Screen |
	
	Scenario: Creating DAST10 Assessment
	
	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| DAST-10 | 
	Then Enter Data in DAST10 Assessment
			| Have you used drugs other than those required for medical reasons? | Yes |
			| Are you always able to stop using drugs when you want to?          | Yes |
			| Do you abuse more than one drug at a time?                         | No  |
			| flashbacks                                                         | No  |
			| Do you ever feel bad or guilty about your drug use?                | Yes |
			| ever complain about your involvement with drugs?                   | No  |
			| Have you neglected your family because of your use of drugs?       | Yes |
			| Have you engaged in illegal activities in order to obtain drugs?   | No  |
			| Have you ever experienced withdrawal symptoms                      | Yes |
			| Have you had medical problems as a result of your drug use         | No  |
	Then take action on assessment
		| Button_to_click |
		| Submit |	
	Then Verify DAST10 Responses
		| TITLE | DRUG USE QUESTIONNAIRE | 
		| RISK | Risk of having a mental health disorder is Moderate Level. |
		| TOTAL_SCORE | 4 |
		| TOTAL_DESC | Moderate Level|
		| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,NIDA Quick Screen |
 	
	 Scenario: Creating NIDA Assessment
	 
	 Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| NIDA | 
	Then Enter Data in NIDA Assessment
			| more drinks a day                          | Daily or Almost Daily |
			| Prescription drugs for non-medical reasons | Monthly               |
			| Tobacco Products                           | Weekly                |
			| Illegal Drugs                              | Daily or Almost Daily |
	Then take action on assessment
		| Button_to_click |
		| Submit |

	Then Verify NIDA Responses
	#	| TITLE | DRUG USE QUESTIONNAIRE | 
	#	| RISK | Risk of having a mental health disorder is Moderate Level. |
	#	| TOTAL_SCORE | 4 |
	#	| TOTAL_DESC | Moderate Level|
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10 |
	
	Scenario: EPDS Assessments

	Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| EPDS | 
	Then Enter Data in EPDS Assessment

		|I have been able to laugh and see the funny side of things        |Not quite so much now|
		|I have looked forward with enjoyment to things                    |Rather less than I used to |
		|I have blamed myself unnecessarily when things went wrong 		   |Not very often|
		|I have been anxious or worried for no good reason                 |No, not at all |
		|I have felt scared or panicky for no very good reason             |No, not at all |
		|Things have been getting on top of me                             |Yes, most of the time|
		|I have been so unhappy that I have had difficulty sleeping        |Yes, sometimes|
		|I have felt sad or miserable                                      |Not very often |
		|I have been so unhappy that I have been crying                    |Only occasionally|
		|The thought of harming myself has occurred to me                  |Yes, quite often |

Then take action on assessment
		| Button_to_click |
		| Submit |	
Then Close Self Harm Pop Up	
Then Verify EPDS Responses
		| TOTAL_SCORE | 13 |
		| SELF_HARM_SCORE | 3 - Yes, quite often |
		| SELF_HARM_ALERT | EXIST |



Scenario: COVID-19 Assessments


Then user clicks on left nav item in Member Platform
		| name |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| COVID-19 | 
	Then Enter Data in COVID-19 Assessment

|Has there been any changes with your job|Got worse|
|Are you quarantined|Yes - Self isolated|
|Has your income reduced because of COVID-19|Yes - a lot|
|What are your restrictions|During the 14 days of isolation, you must stay at home or in your hotel and don’t go to public places including work, school, childcare, university or public gatherings. Only people who usually live with you should be in the home. Do not see visitors. If you are in a hotel, avoid contact with other guests or staff.|
|Are you adhering to them|Yes Completely|
|If not, what is difficult for you|Nothing|
|Do you understand why there are restrictions?|Yes|
|If this extends beyond current restrictions, do you have a plan|Currently I Donot Have Any Plan|
|What are the next steps for you|Keep in touch with family members and friends via telephone, email or social media.Learn about coronavirus and talk with others.Reassure young children using age-appropriate language.Where possible, keep up normal daily routines, such as eating and exercise.Arrange to work from home.Ask your child’s school to supply assignments or homework by post or email.Do things that help you relax and use isolation as an opportunity to do activities you don’t usually have time for.|
|Has COVID-19 had any effect on your anxiety|Yes - Increased anxiety|
|Select the changes that happened because of COVID-19.|Increased use of substances, Inability to get prescribed medications ,Missed my scheduled medical procedures|
|How is your support system during this time|Barely|
|If you are quarantined, do you have ways to cope with isolation?|Yes|
|Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath|Yes|
|Have you spent time with or have anyone visiting in your household who has recently returned from another country|Yes|
|If they have had these symptoms or have them now, have you seen a doctor|Yes|
|If they have had these symptoms or have them now, have you been tested|Yes|
|Any other notes related to COVID-19|Call the National Coronavirus Help Line on 1800 020 080. It operates 24 hours a day, seven days a week. If you require translating or interpreting services, call 131 450|

Then take actions on assessment
	| Button_to_click |
 	| Submit |	

Then Verify COVID-19 Responses
|Has there been any changes with your job|Got worse|
|Are you quarantined|Yes - Self isolated|
|Has your income reduced because of COVID-19|Yes - a lot|
|What are your restrictions|During the 14 days of isolation, you must stay at home or in your hotel and don’t go to public places including work, school, childcare, university or public gatherings. Only people who usually live with you should be in the home. Do not see visitors. If you are in a hotel, avoid contact with other guests or staff.|
|Are you adhering to them|Yes Completely|
|If not, what is difficult for you|Nothing|
|Do you understand why there are restrictions?|Yes|
|If this extends beyond current restrictions, do you have a plan|Currently I Donot Have Any Plan|
|What are the next steps for you|Keep in touch with family members and friends via telephone, email or social media.Learn about coronavirus and talk with others.Reassure young children using age-appropriate language.Where possible, keep up normal daily routines, such as eating and exercise.Arrange to work from home.Ask your child’s school to supply assignments or homework by post or email.Do things that help you relax and use isolation as an opportunity to do activities you don’t usually have time for.|
|Has COVID-19 had any effect on your anxiety|Yes - Increased anxiety|
|Select the changes that happened because of COVID-19.|Missed my scheduled medical procedures \n Inability to get prescribed medications \n Increased use of substances|
|How is your support system during this time|Barely|
|If you are quarantined, do you have ways to cope with isolation?|Yes|
|Have you been ill lately with any type of respiratory illness, fever, cough, runny nose or general weakness or shortness of breath|Yes|
|Have you spent time with or have anyone visiting in your household who has recently returned from another country|Yes|
|If they have had these symptoms or have them now, have you seen a doctor|Yes|
|If they have had these symptoms or have them now, have you been tested|Yes|
|Any other notes related to COVID-19|Call the National Coronavirus Help Line on 1800 020 080. It operates 24 hours a day, seven days a week. If you require translating or interpreting services, call 131 450|


		
		
					