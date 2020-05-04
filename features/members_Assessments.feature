@VerifyAllAssessments
Feature: Member Assessments

	@CreateAssessments

	Scenario: M3 Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| M3   |
		Then Enter Data in M3 Assessment
			| I feel sad, down in the dumps or unhappy                   | Sometimes        |
			| concentrate or focus                                       | Rarely           |
			| Nothing seems to give me much pleasure                     | Rarely           |
			| Nothing seems to give me much pleasure                     | Rarely           |
			| I have no energy                                           | Often            |
			| I have had thoughts of suicide                             | Most of the time |
			| I have difficulty sleeping                                 | Never            |
			| I have been sleeping too much                              | Rarely           |
			| I have lost some appetite                                  | Rarely           |
			| I have been eating more                                    | Rarely           |
			| I feel tense, anxious                                      | Never            |
			| I feel worried or fearful                                  | Rarely           |
			| I have attacks of anxiety or panic                         | Rarely           |
			| I worry about dying or losing control                      | Rarely           |
			| I am nervous or shaky in social situations                 | Never            |
			| I have nightmares or flashbacks                            | Sometimes        |
			| I am jumpy or feel startled easily                         | Sometimes        |
			| I avoid places that strongly remind me of a bad experience | Never            |
			| I feel dull, numb, or detached                             | Sometimes        |
			| get certain thoughts out of my mind                        | Sometimes        |
			| I feel I must repeat certain acts or rituals               | Never            |
			| I feel the need to check and recheck things                | Sometimes        |
			| Had more energy than usual?                                | Sometimes        |
			| Felt unusually irritable or angry?                         | Sometimes        |
			| Felt unusually excited, revved up or high?                 | Never            |
			| Needed less sleep than usual?                              | Often            |
			| Interferes with work or school                             | Often            |
			| Affects my relationships with friends or family            | Never            |
			| Has led to my using alcohol to get by                      | Most of the time |
			| Has led to my using drugs                                  | Most of the time |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify M3 Responses
			| RISK                | Overall symptom burden is Medium.                                                                                      |
			| TOTAL_SCORE         | 44                                                                                                                     |
			| M3_IMPAIRMENT_SCORE | 1 - Positive                                                                                                           |
			| ANXIETY_SCORE       | 5 - Low Risk                                                                                                           |
			| SELF_HARM_SCORE     | 4 - Most of the time                                                                                                   |
			| BIPOLAR_SCORE       | 4 - Medium Risk                                                                                                        |
			| DEPRESSION_SCORE    | 5 - Low Risk                                                                                                           |
			| PTSD_SCORE          | 3 - Low Risk                                                                                                           |
			| SELF_HARM_ALERT     | EXIST                                                                                                                  |
			| FOLLOW_UP_TASKS     | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,PHQ9,Psychosis,Trauma Screen |

	Scenario: MADRS Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name  |
			| MADRS |
		Then Enter Data in MADRS Assessment
			| Representing despondency                                                       | 1 - -                                                                                 |
			| Representing reports of depressed mood                                         | 2 - Sad or low but brightens up without difficulty                                                                                |
			| Representing reports of depressed mood                                         | 1 - -                                                                               |

			| Representing feelings of ill-defined discomfort                                | 2 - Occasional feelings of edginess and ill-defined discomfort                        |
			| Representing the experience of reduced duration or depth of sleep              | 3 - -                                                                                 |
			| Representing the feeling of loss of appetite compared with when well           | 4 -No appetite. Food is tasteless                                                     |
			| Representing difficulties in collecting one                                    | 5 - -                                                                                 |
			| Representing a difficulty getting started or slowness                          | 6 - Complete lassitude. Unable to do anything without help                            |
			| Representing the subjective experience of reduced interest in the surroundings | 5 - -                                                                                 |
			| Representing thoughts of guilt                                                 | 4 - Persistent self-accusations, or definite but still rational ideas of guilt or sin |
			| Representing the feeling that life is not worth living                         | 3 - -                                                                                 |

		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify MADRS Responses
			| TITLE           | Montgomery-Asberg Depression Scale                                                                                     |
			| TOTAL_SCORE     | 34                                                                                                                     |
			| TOTAL_DESC      | Moderate                                                                                                               |
			# | FOLLOW_UP_TASKS | MDQ,PCL5,GAD7,PHQ9,Columbia-Suicide Severity Rating Scale,HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis,Trauma Screen |
			| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,PHQ9,Psychosis,Trauma Screen |

	Scenario: Trauma Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name   |
			| Trauma |
		Then Enter Data in Trauma Assessment

			| Do you feel safe at home?                                                       | No  |
			| kicked or otherwise physically hurt by someone                                  | Yes |
			| Have you ever been physically attacked                                          | No |
			| Have you ever been physically attacked                                          | Yes |

			| Were you ever present when another person was killed                            | Yes |
			| Have you ever been forced to have sex or do something sexual against your will? | No  |
			| Have you ever been in any other situation that was extremely frightening        | No  |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify Trauma Responses
			| TITLE           | MCBHP Trauma Screen                                                                                      |
			| RISK            | Risk of having a mental health disorder is Positive.                                                     |
			| TOTAL_SCORE     | 4                                                                                                        |
			| TOTAL_DESC      | Positive                                                                                                 |
			| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,PHQ9,Psychosis		 |

	Scenario: PHQ9 Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| PHQ9 |
		Then Enter Data in PHQ9 Assessment
			| Feeling down, depressed, or hopeless                                                               | Several days            |
			| Little interest or pleasure in doing things?                                                       | Not at all              |
			| Trouble falling or staying asleep, or sleeping too much                                            | Not at all  |
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
			| Submit          |
		Then Verify PHQ9 Responses
			| TITLE           | Quick Depression Assessment                                                                         |
			| RISK            | Depression symptom severity is Moderately Severe.                                                   |
			| TOTAL_SCORE     | 15                                                                                                  |
			| TOTAL_DESC      | Moderately Severe                                                                                   |
			| SELF_HARM_ALERT | EXIST                                                                                               |
			# | FOLLOW_UP_TASKS | MDQ,PCL5,GAD7,Columbia-Suicide Severity Rating Scale,HRSNS (Short),NIDA Quick Screen,HRSN,Psychosis |
			| FOLLOW_UP_TASKS | Columbia-Suicide Severity Rating Scale,GAD7,HRSN,HRSNS (Short),MDQ,NIDA Quick Screen,PCL5,Psychosis |

	Scenario: HRSN Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |

		Then click on Starts Assessment
			| Name |
			| HRSN |
		Then Enter Data in HRSN Assessment
			| Think about the place you live                                                                                                        | Mold,Water leaks              |
			| What is your living situation today?                                                                                                  | I have a steady place to live |
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
			| Submit          |
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

	Scenario: HRSNS Assessments

		Then click on Members Tab
			| TabName     |
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

Scenario: IVRP Assessments
	Then click on Members Tab
			| TabName |
			| Assessments |
		Then click on Starts Assessment
			| Name |
			| IVRP Intake |

	# Then click on assessment score	
    #         | Name |
	# 		| IVRP Intake |
			
		Then Enter Data in IVRP Intake Assessment
			| How well has the member adopted the technology? | Has smartphone,Declined tech |
			| What is the highest level of education you | Elementary School |
			| What type of violence situation | Elder,Gang |
			| Is the member a      | Victim of Violence,Unsure |
			| Do you experience any of these stressors in your life? | Loneliness,Other |
			| Do you or anyone in your family have a restraining order? | Yes - Member,No |
			| Is there an indication of violence  | Yes |
			| Why? | If No, Why? |
			| If further investigation | If further investigation / contact needed, what is needed? |
			| Low Risk Factors  | History Drug activity in the home,Family history of suicide or homicide |
			| Moderate Risk Factors | Medication Compliance,Other |
			| High Risk Factors | Past threats to a worker,Unsecured weapons in the home|
			| Needs Supervisor Review | Yes |
			| have you experienced physical harm | Witnessed,Yes - At home |
			| have you experienced emotional abuse | Witnessed,Yes - In the Community |
			| incarceration history?  | Currently incarcerated |
			| If incarcerated in the last 1 year or currently incarcerated | 1 to 3 months |
			| Other Notes about this Member? | text area Other Notes about this Member? |
		Then take actions on assessment
			| Button_to_click |
			| Submit |
		Then Verify IVRP Intake Responses
			| How well has the member adopted the technology? | Declined tech \n Has smartphone |
			| What is the highest level of education you | Elementary School |
			| What type of violence situation | Gang \n Elder |
			| Is the member a      | Unsure \n Victim of Violence |
			| Do you experience any of these stressors in your life? | Other \n Loneliness |
			| Do you or anyone in your family have a restraining order? | No \n Yes - Member |
			| Is there an indication of violence  | Yes |
			| Why? | If No, Why? |
			| If further investigation | If further investigation / contact needed, what is needed? |
			| Low Risk Factors  | History Drug activity in the home \n Family history of suicide or homicide |
			| Moderate Risk Factors | Other \n Medication Compliance|
			| High Risk Factors | Past threats to a worker \n Unsecured weapons in the home |
			| Needs Supervisor Review | Yes |
			| have you experienced physical harm | Witnessed \n Yes - At home |
			| have you experienced emotional abuse | Witnessed \n Yes - In the Community  |
			| incarceration history?  | Currently incarcerated |
			| If incarcerated in the last 1 year or currently incarcerated | 1 to 3 months |
			| Other Notes about this Member? | text area Other Notes about this Member? |

	Scenario: Single Question Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name                                 |
			| Single Question Mental Health Screen |
			
		Then Enter Data in Single Question Assessment
			| would you say your mental health is | Excellent |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify Single Question Responses
			| TITLE           | Find Current Mental Health Status                                                                 |
			| RISK            | Risk of having a mental health disorder is Low Risk.                                              |
			| TOTAL_SCORE     | 0                                                                                                 |
			| TOTAL_DESC      | Low Risk                                                                                          |
			| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,GAD7,MDQ,NIDA Quick Screen,PCL5,Psychosis |

	Scenario: GAD7 Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| GAD7 |
		Then Enter Data in GAD7 Assessment
			| Feeling nervous                                    | More than half the days |
			| Not being able to stop or control worrying?        | Nearly every day        |
			| Worrying too much about different things?          | Several days |
			| Worrying too much about different things?          | More than half the days |
			| Trouble relaxing?                                  | Several days            |
			| Being so restless                                  | Not at all              |
			| Becoming easily annoyed or irritable?              | Several days            |
			| Feeling afraid as if something awful might happen? | More than half the days |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify GAD7 Responses
			| TITLE           | Measuring of generalized anxiety disorder                                                    |
			| RISK            | Risk of having an anxiety disorder is Moderate.                                              |
			| TOTAL_SCORE     | 11                                                                                           |
			| TOTAL_DESC      | Moderate                                                                                     |
			| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,MDQ,NIDA Quick Screen,PCL5,Psychosis |

	Scenario: PCL5 Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| PCL5 |
		Then Enter Data in PCL5 Assessment
			| Repeated, disturbing and unwanted memories of the stressful experience?                  | Not at all   |
			| Repeated, disturbing dreams of the stressful experience?                                 | A little bit |
			| Suddenly feeling or acting as if the stressful experience were actually happening again  | Not at all   |
			| Suddenly feeling or acting as if the stressful experience were actually happening again  | Moderately   |
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
			| Submit          |
		Then Verify PCL5 Responses
			| TITLE           | Measure to assess the presence and severity of PTSD symptoms                            |
			| RISK            | Risk of having a mental health disorder is Moderate.                                    |
			| TOTAL_SCORE     | 38                                                                                      |
			| TOTAL_DESC      | Moderate                                                                                |
			| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,MDQ,NIDA Quick Screen,Psychosis |

	Scenario: MDQ Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| MDQ  |
		Then Enter Data in MDQ Assessment
			| you shouted at people or started fights or arguments?                                                                                   | No            |
			| ...you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble? | Yes           |
			| ...you felt much more self-confident than usual?                                                                                        | No           |
			| ...you felt much more self-confident than usual?                                                                                        | Yes           |
			| you got much less sleep than usual and found                                                                                            | No            |
			| you were much more talkative or spoke much faster than usual?                                                                           | No           |
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
			| Submit          |
		Then Verify MDQ Responses
			| TITLE           | Mood Disorder Questionnaire                                                         |
			| RISK            | Risk of having a mental health disorder is Negative.                                |
			| TOTAL_SCORE     | 0                                                                                   |
			| TOTAL_DESC      | Negative                                                                            |
		| FOLLOW_UP_TASKS | AUDIT-10,Columbia-Suicide Severity Rating Scale,DAST-10,NIDA Quick Screen,Psychosis |

	Scenario: Columbia Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name     |
			| Columbia |
		Then Enter Data in Columbia Assessment
			| In the past month, Have you wished you were dead or wished you could go to sleep and not wake up? | No  |
			| anything to end your life?                                                                        | No |
			| anything to end your life?                                                                        | Yes |
			| Was this within the past 3 months?                                                                | Yes |
			| Have you had any actual thoughts of killing yourself?                                             | Yes  |
			| Have you had any actual thoughts of killing yourself?                                             | No  |
			| Have you been thinking about how you might do this?                                               | Yes |
			| Have you had these thoughts and had some intention of acting on them?                             | No  |
			| Have you started to work out or worked out the details of how to kill yourself?                   | Yes |
		Then take actions on assessment
			| Button_to_click |
			| Submit          |
		Then Verify Columbia Responses
			| In the past month, Have you wished you were dead or wished you could go to sleep and not wake up? | No  |
			| anything to end your life?                                                                        | Yes |
			| Was this within the past 3 months?                                                                | Yes |
			| Have you had any actual thoughts of killing yourself?                                             | No  |
			| Have you been thinking about how you might do this?                                               | Yes |
			| Have you had these thoughts and had some intention of acting on them?                             | No  |
			| Have you started to work out or worked out the details of how to kill yourself?                   | Yes |

	Scenario: Psychosis Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name      |
			| Psychosis |
		Then Enter Data in Psychosis Assessment
			| Do you ever hear things                                             | No  |
			| Do you ever receive special messages                                | Yes |
			| Do you ever feel like people are spying on your or out to hurt you? | No |
			| Do you ever feel like people are spying on your or out to hurt you? | Yes |


		Then take actions on assessment
			| Button_to_click |
			| Submit          |
		Then Verify Psychosis Responses
			| TITLE           | Psychosis                                            |
			| RISK            | Risk of having a mental health disorder is Positive. |
			| TOTAL_SCORE     | 2                                                    |
			| TOTAL_DESC      | Positive                                             |
			| FOLLOW_UP_TASKS | AUDIT-10,DAST-10,NIDA Quick Screen                   |

	Scenario: AUDIT10 Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name     |
			| AUDIT-10 |
		Then Enter Data in AUDIT10 Assessment
			| How often do you have a drink containing alcohol?                                                | Never                    |
			| How many drinks containing alcohol do you have on a typical day when you are drinking?           | 10 or more               |
			| How many drinks containing alcohol do you have on a typical day when you are drinking?           | 10 or more               |
			| How often do you have six or more drinks on one occasion?                                        | Monthly                  |
			| How often during the last year have you found that you were not able to stop drinking            | Weekly                   |
			| How often during the last year have you found that you were not able to stop drinking            | Weekly                   |

			| How often during the last year have you failed to do what was normally expected from you         | Less than monthly        |
			| How often during the last year have you needed a first drink in the morning                      | Never                    |
			| How often during the last year have you had a feeling of guilt                                   | Weekly                   |
			| How often during the last year have you been unable to remember what happened the night before   | Weekly                   |
			| Have you or someone else been injured as a result of your drinking?                              | but not in the last year |
			| Has a relative or friend or a doctor or another health worker been concerned about your drinking | during the last year     |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify AUDIT10 Responses
			| TITLE           | The Alcohol Use Disorders Identification Test        |
			| RISK            | Risk of having a mental health disorder is Positive. |
			| TOTAL_SCORE     | 22                                                   |
			| TOTAL_DESC      | Positive                                             |
			| FOLLOW_UP_TASKS | DAST-10,NIDA Quick Screen                            |

	Scenario: DAST10 Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name    |
			| DAST-10 |
		Then Enter Data in DAST10 Assessment
			| Have you used drugs other than those required for medical reasons? | Yes |
			| Do you abuse more than one drug at a time?                         | No  |
			| Are you always able to stop using drugs when you want to?          | No |
			| Are you always able to stop using drugs when you want to?          | Yes |

			| flashbacks                                                         | No  |
			| Do you ever feel bad or guilty about your drug use?                | Yes |
			| ever complain about your involvement with drugs?                   | No  |
			| Have you neglected your family because of your use of drugs?       | Yes |
			| Have you engaged in illegal activities in order to obtain drugs?   | No  |
			| Have you ever experienced withdrawal symptoms                      | Yes |
			| Have you had medical problems as a result of your drug use         | No  |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify DAST10 Responses
			| TITLE           | DRUG USE QUESTIONNAIRE                                     |
			| RISK            | Risk of having a mental health disorder is Moderate Level. |
			| TOTAL_SCORE     | 4                                                          |
			| TOTAL_DESC      | Moderate Level                                             |
			| FOLLOW_UP_TASKS | NIDA Quick Screen                                          |

	Scenario: NIDA Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| NIDA |
		Then Enter Data in NIDA Assessment
			| more drinks a day                          | Daily or Almost Daily |
			| Tobacco Products                           | Weekly                |
			| Prescription drugs for non-medical reasons | Weekly               |
			| Prescription drugs for non-medical reasons | Monthly               |
			| Illegal Drugs                              | Daily or Almost Daily |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify NIDA Responses
			#	| TITLE | DRUG USE QUESTIONNAIRE |
			#	| RISK | Risk of having a mental health disorder is Moderate Level. |
			#	| TOTAL_SCORE | 4 |
			#	| TOTAL_DESC | Moderate Level|
			| FOLLOW_UP_TASKS | AUDIT-10,DAST-10 |

	Scenario: MiniMental Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| Mini |
		Then Enter Data in MiniMental Assessment
			| season                                                                | Year,Season,Date         |
			| hospital                                                              | State,Town,Floor         |
			| Then ask the patient all 3 after you have said them                   | Remembered second object |
			| Repeat them until he/she learns all 3. Count trials and record below. | 5                        |
			| Serial 7                                                              | Answer 2,Answer 3        |
			| Ask for the 3 objects repeated above                                  | Remembered second object |
		Then take action on assessment
			| Button_to_click |
			| Submit          |
		Then Verify MiniMental Responses
			| TITLE           | Mini-Mental state exam |
			| TOTAL_SCORE     | 10                     |
			| TOTAL_DESC      | Severe impairment      |
			| FOLLOW_UP_TASKS | AUDIT-10,DAST-10       |



	Scenario: CCP Intake Assessments

	Then click on Members Tab
			| TabName |
			| Assessments |
		Then click on Starts Assessment
			| Name |
			| CCP Intake |
		Then Enter Data in CCI Assessment
			| technology? | Has computer,Logged into the app |
			| Hx   		  | May be |
			| Speech 	  | Tangential,Impoverished |
			| Affect      | Constricted,Labile |
			| Mood	   	  | Depressed,Euphoric |
			| Orientation | Place,Time  |
			| Memory      | No deficit,Other |
			| Attention	  | Distracted,Other   |
			| Hallucination | Visual,Sensory |
			| Thoughts   | Guilty,Paranoid |
			| Suicidality | Plan,Intent |
			| Homicidality| Plan,Intent  |
			| Behavior    | Guarded  |
			| Insight     | Good |
			| Judgement   | Poor |
			| Impulse control | Fair |
			| Pregnant/Breastfeeding | Not Applicable |
			| Current Use | Tobacco		|
			| Hx of Mental Illness  | Siblings |
			| Hx of Substance Abuse | Father |
			| Hx of Suicide         | Mother |
			| Hx of Violent         | Siblings |
			| Trauma    | Witnessed |
			| Sleep     | Other |
			| Exercise  | Yes  |
			| Interested in treatment | Therapy |
		Then take actions on assessment
			| Button_to_click |
			| Submit |


	Scenario: CCP Intake (V2) Assessments

		Then click on Members Tab
			| TabName     |
			| Assessments |
		Then click on Starts Assessment
			| Name            |
			| CCP Intake (V2) |
		Then Enter Data in CCI_V2 Assessment
			| Psychosocial history                         | Text for Psychosocial history: Family/Childhood\nSecond Line\nThird Line       |
			| Living situation                             | Lives With Others                                                              |
			| Highest level of Education                   | College Degree                                                                 |
			| Employment Status                            | Full-time                                                                      |
			| Military Hx                                  | Reserve                                                                        |
			| Legal Hx                                     | Probation                                                                      |
			| Current Behavioral health                    | Text for Current Behavioral health\nSecond Line\nThird Line                    |
			| Alcohol, (5 for men, 4 for women) or more drinks a day   | Monthly                                                                        |
			| Tobacco Products                             | Weekly                                                                         |
			| Prescription drugs for non-medical reasons   | Once or Twice                                                                  |
			| Illegal Drugs                                | Never                                                                          |
			| Current stressors                            | Text for Current stressors\nSecond Line\nThird Line                            |
			| Strengths/Supports/Hobbies                   | Text for Strengths/Supports/Hobbies\nSecond Line\nThird Line                   |
			| Current Suicidality                          | Hx of Self harm,Intent                                                         |
			| Current Homicidality                         | Intent,Plan                                                                    |
			| Sleep                                        | Difficulty Falling Asleep,No sleep troubles                                    |
			| Exercise                                     | Yes,No                                                                         |
			| Previous behavioral Health dx                | Text for Previous behavioral Health dx\nSecond Line\nThird Line                |
			| medications/dates/effectiveness              | Text for medications/dates/effectiveness\nSecond Line\nThird Line              |
			| non-medication treatment/dates/effectiveness | Text for non-medication treatment/dates/effectiveness\nSecond Line\nThird Line |
			| Trauma                                       | Text for Trauma\nSecond Line\nThird Line                                       |
			| Suicide Attempts and Self-harm history       | Text for Suicide Attempts and Self-harm history\nSecond Line\nThird Line       |
			| Family hx of behavioral health conditions    | Text for Family hx of behavioral health conditions\nSecond Line\nThird Line    |
			| Family hx of Substance Use Disorder          | Text for Family hx of Substance Use Disorder\nSecond Line\nThird Line          |
			| Family hx of Suicide attempts                | Text for Family hx of Suicide attempts\nSecond Line\nThird Line                |
			| Family Hx of Violent Behavior                | Text for Family Hx of Violent Behavior\nSecond Line\nThird Line                |
			| Current medical problems                     | Text for Current medical problems\nSecond Line\nThird Line                     |
			| Allergies                                    | Text for Allergies\nSecond Line\nThird Line                                    |
			| Pregnant/Breastfeeding                       | Breastfeeding,None                                                             |
			| Psychotropic Medications                     | Text for Psychotropic Medications\nSecond Line\nThird Line                     |
			| Other Medications                            | Text for Other Medications\nSecond Line\nThird Line                            |
			| Level of medication adherence                | Text for Level of medication adherence\nSecond Line\nThird Line                |
			| Patients goals                               | Text for Patients goals\nSecond Line\nThird Line                               |
			| Interested in treatment                      | Medication,Therapy                                                             |
			| Speech                                       | Tangential,Pressure                                                            |
			| Affect                                       | Constricted,Labile                                                             |
			| Mood                                         | Angry,Euphoric                                                                 |
			| Orientation                                  | Person,Time                                                                    |
			| Memory                                       | Short Term deficit,Long Term deficit                                           |
			| Attention                                    | Distracted,No deficit                                                          |
			| Hallucination                                | Derealization,Sensory                                                          |
			| Thoughts                                     | Religious,Suspicious                                                           |
			| Behavior                                     | Agitated,Aggressive                                                            |
			| Insight                                      | Good,Poor                                                                      |
			| Judgement                                    | Good,Fair                                                                      |
			| Impulse control                              | Fair,Poor                                                                      |
			| Diagnostic impressions                       | Text for Diagnostic impressions\nSecond Line\nThird Line                       |
			| AutoFill                                     | Yes                                                                            |
	Then take actions on assessment
			| Button_to_click |
			| Submit          |

Scenario: EPDS Assessments

	Then click on Members Tab
		| TabName |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| EPDS | 
	Then Enter Data in EPDS Assessment

		|I have been able to laugh and see the funny side of things        |Not quite so much now|
		|I have looked forward with enjoyment to things                    |Rather less than I used to |
		|I have blamed myself unnecessarily when things went wrong 		   |No, never|
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
Then Verify EPDS Responses
		| TOTAL_SCORE | 13 |
		| SELF_HARM_SCORE | 3 - Yes, quite often |
		| SELF_HARM_ALERT | EXIST |



Scenario: COVID-19 Assessments


Then click on Members Tab
		| TabName |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| COVID-19 | 
	Then Enter Data in COVID-19 Assessment

|Has there been any changes with your job|Got worse|
|Has your income reduced because of COVID-19|Yes - little bit|
|Has your income reduced because of COVID-19|Yes - a lot|

|Are you quarantined|No|
|Are you quarantined|Yes - Self isolated|
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


Scenario: P3 Intake Assessments

Then click on Members Tab
		| TabName |
		| Assessments |
	Then click on Start Assessment
		| Name |
		| P3 Intake | 
	Then Enter Data in P3 Intake Assessment

|When is your due date?|03/26/2020|
|How are you feeling about this pregnancy?|Quite Happy|
|Does anyone smoke inside your home?|Yes|
|Does anyone smoke inside your home?|No|

|What does your household use for drinking water?|Well water|
|Does the refrigerator in your home work?|Yes|
|Does the stove in your home work?|Yes|
|In the past month, have there been days when you did not have enough food or money to buy food?|Yes|
|When your new baby sleeps alone, is his or her crib or bed in the same room where you sleep?|Yes|
|Listed below are some things about how babies sleep. How did your new baby usually sleep in the past 2 weeks?|In a crib, bassinet or pack and play,On a twin or larger mattress or bed,On a couch, sofa or armchair,In an infant car seat or swing,In a sleeping sack or wearable blanket,With a blanket|
|Have you seen your doctor since you became pregnant?|No|
|Is this your first pregnancy?|No|
|How many babies are you having with this pregnancy?|Twins|
|How many other times have you been pregnant?|One|
|How many children do you have?|One|
|Number of babies born early?|One|
|Number of miscarriages?|One|
|List your health problems here, indicate None if none exists|Hypo Thryrodism|
|List any medications you are currently taking, indicate None if none exists|Thyroxine 100Mg|
|Have you recently stopped any medications?|No|
|Have you recently started any medications?|No|
|Which of these do you have?|Nausea,Vomiting,Heartburn,Constipation|
|Which of these do you take?|Prenatal vitamins,Iron supplement,Medicine from doctor|
|During the 3 months before you got pregnant with your new baby, did you have any of the following health conditions?|Type 1 or Type 2 diabetes (not gestational diabetes or diabetes that starts during pregnancy),High blood pressure or hypertension|
|How many weeks or months pregnant were you when you had your first visit for prenatal care?|6 Weeks|
|How do you feel about your weight change since you became pregnant?|Gaining too little|
|Do you follow any kind of special diet?|Yes|
|Do you eat fruit every day?|Yes|
|Do you eat vegetables every day?|Yes|
|Which of these do you drink everyday?|Milk,Water,Flavored water,Fruit juice, fruit drinks or punch,Regular soda|
|Check any of the following items you eat|Cigarette butts,Clay,Dirt,Ice|
|How does the amount of exercise you get now compare with before you were pregnant?|Less|
|Do you watch more than 2 hours of TV everyday?|Yes|
|Have you thought about how you will feed your baby?|Breastfeed|
|Have you smoked any cigarettes in the past 2 years?|Yes|
|In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day? A pack has 20 cigarettes.|6 to 10 cigarettes|
|In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day? A pack has 20 cigarettes.|6 to 10 cigarettes|
|How many cigarettes do you smoke on an average day now? A pack has 20 cigarettes.|6 to 10 cigarettes|
|Have you had any alcoholic drinks in the past 2 years? A drink is 1 glass of wine, wine cooler, can or bottle of beer, shot of liquor, or mixed drink.|Yes|
|During the 3 months before you got pregnant, how many alcoholic drinks did you have in an average week?|4 to 7 drinks a week|
|What concerns do you have about your health during this pregnancy?|No Concerns|

Then take actions on assessment
	| Button_to_click |
 	| Submit |


Scenario: IVRPIntake(v2) Assessments
	Then click on Members Tab
			| TabName |
			| Assessments |
	Then click on Starts Assessment
			| Name |
			| IVRP Intake (V2) |

	Then Enter Data in IVRP Intake2 Assessment
			| How well has the member adopted the technology? | Has smartphone,Declined tech |
			| What is the highest level of education you | Elementary School |
			| What type of violence situation | Elder,Gang |
			| Is the member a      | Victim of Violence,Unsure |
			| Do you experience any of these stressors in your life? | Loneliness,Other |
			| Do you or anyone in your family have a restraining order? | Yes - Member,No |
			| Is there an indication of violence  | Yes |
			| Why? | If No, Why? |
			| If further investigation | If further investigation / contact needed, what is needed? |
			|Other Notes about this Member?|Testing Text Box in Other Notes|


	Then take actions on assessment
	| Button_to_click |
	| Submit |

	Then Verify IVRP Intake2 Responses
			| How well has the member adopted the technology? | Declined tech \n Has smartphone |
			| What type of violence situation | Gang \n Elder |
			| Is the member a      | Unsure \n Victim of Violence |
			| Do you experience any of these stressors in your life? | Other \n Loneliness |
			| Do you or anyone in your family have a restraining order? | No \n Yes - Member |
			| Is there an indication of violence  | Yes |
			| Why? | If No, Why? |
			| If further investigation | If further investigation / contact needed, what is needed? |
			|Other Notes about this Member?|Testing Text Box in Other Notes|

			
Scenario: IVRPIntake(v3) Assessments
	Then click on Members Tab
			| TabName |
			| Assessments |
	Then click on Starts Assessment
			| Name |
			| IVRP Intake (V3) |

	Then Enter Data in IVRP Intake3 Assessment
			| How well has the member adopted the technology? | Has smartphone,Declined tech |
			| What is the highest level of education you | Elementary School |
			| What type of violence situation | Elder,Gang |
			| Is the member a      | Victim of Violence,Unsure |
			| Do you experience any of these stressors in your life? | Loneliness,Other |
			| Do you or anyone in your family have a restraining order? | Yes - Member,No |
			| Is there an indication of violence  | Yes |
			| Why? | If No, Why? |
			| If further investigation | If further investigation / contact needed, what is needed? |
			|Other Notes about this Member?|Testing Text Box in Other Notes|
			|Are you pregnant?|Yes|
			|If yes, How far along are you in pregnancy?|26 weeks|

	Then take actions on assessment
	| Button_to_click |
	| Submit |

	Then Verify IVRP Intake3 Responses
			| How well has the member adopted the technology? | Declined tech \n Has smartphone |
			| What type of violence situation | Gang \n Elder |
			| Is the member a      | Unsure \n Victim of Violence |
			| Do you experience any of these stressors in your life? | Other \n Loneliness |
			| Do you or anyone in your family have a restraining order? | No \n Yes - Member |
			| Is there an indication of violence  | Yes |
			| Why? | If No, Why? |
			| If further investigation | If further investigation / contact needed, what is needed? |
			|Other Notes about this Member?|Testing Text Box in Other Notes|
			|Are you pregnant?|Yes|
			|If yes, How far along are you in pregnancy?|26 weeks|

			
Scenario: Safety Assessment Assessments
	Then click on Members Tab
			| TabName |
			| Assessments |
		Then click on Start Assessment
			| Name |
			| Safety Assessment |

		Then Enter Data in Safety Assessment Assessment

			|Low Risk Factors (Concern)|Animals in the home - Ensure that they are secured,Public Health Concerns,Family history of suicide or homicide,History (i.e. 2 or more years in the past),History Drug activity in the home,Serious,History of suicidal or homicidal gestures,Animals in the home - virtual outreach attempted|
			|Moderate Risk Factors (Triggers a safety plan)|Active drug/gang activity in family and/or neighborhood,History of recent (i.e. terminated within past 90 days) restraining orders,Convicted sex offender family in home,Serious,History (i.e. within past year)|
			|High Risk Factors (Require conversation w/Supervisor before proceeding further)|Unsecured weapons in the home,Persistent self-destructive or aggressive behavior without conscious suicidal or homicidal intent,Suicidal or homicidal preoccupation with plan and intent,Unable or unwilling to contract for safety,Uncomfortable,History of assault/aggravated assault,History of buying/selling/manufacturing drugs in the home,Active Drug/Alcohol activity in the home,Past threats to a worker,Unexpected or unreported strangers in the home,Unexpected or unreported strangers in the home,Serious (potentially lethal) suicide or homicide attempt,Witness/Victim Relocation|
			|Needs Supervisor Review|Yes|
			|Other Notes about this Member?|Testing Others Text Box|

			Then take actions on assessment
			| Button_to_click |
			| Submit |


		Then Verify Safety Assessment Responses

			|Low Risk Factors (Concern)|Animals in the home - virtual outreach attempted / animal unable to be secured \n History of suicidal or homicidal gestures \n Serious, non-lethal self-mutilation \n History Drug activity in the home \n History (i.e. 2 or more years in the past) of suicide attempt or violence directed against others, animals, and/or property (low likelihood of lethality) \n Family history of suicide or homicide \n Public Health Concerns- bed bugs, flees, etc. \n Animals in the home - Ensure that they are secured|
			|Moderate Risk Factors (Triggers a safety plan)|History (i.e. within past year) of suicide attempt or violence directed against others, animals, and/or property \n Serious, non-lethal physical harm to another \n Convicted sex offender family in home \n History of recent (i.e. terminated within past 90 days) restraining orders \n Active drug/gang activity in family and/or neighborhood|
			|High Risk Factors (Require conversation w/Supervisor before proceeding further)|Witness/Victim Relocation \n Serious (potentially lethal) suicide or homicide attempt \n Past threats to a worker \n Active Drug/Alcohol activity in the home \n History of buying/selling/manufacturing drugs in the home \n History of assault/aggravated assault \n Uncomfortable, assaultive behavior toward others \n Unable or unwilling to contract for safety \n Suicidal or homicidal preoccupation with plan and intent \n Persistent self-destructive or aggressive behavior without conscious suicidal or homicidal intent \n Unsecured weapons in the home|
			|Needs Supervisor Review|Yes|
			|Other Notes about this Member?|Testing Others Text Box|