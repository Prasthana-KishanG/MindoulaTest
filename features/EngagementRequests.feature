# @VerifyEngagementRequests
# Feature: Verify Engagement Requests

# # Scenario: Verify Successful Login
# # 	Given Launch Website
# # 	Then Login to the website with Member
# # 		| username | password |
# # 		| mmr.memb32@mind.com | Test@123 |

# @VerifyCheckinFromMemberHomepage
# Scenario: Verify Checkin from Member Home Page

# 	Then Take Action From Member Home Page
# 	    | Button_Container |
# 		| Check In |

# 	Then Click on the Care_Extender_name in the Chat Inbox
# 		|Care_Extender_Name|
# 		| MMR CaseManager |

# 	Then Verify Checkin is Opened in Primary Case manager Chat window
# 		| Primary_Case_Manager |
# 		| MMR CaseManager |
# 	#   Then Select Checkin window.		

# 	Then Select Checkin Options by click on it.			
		   
# 			|Checkin Option|	
# 			 |Not Well|		
# 	Then Select Checkin Options by click on it.		
# 			|Checkin Option|
# 			| Nothing |
# 	Then Select Checkin Options by click on it.
# 			|Checkin Option|
# 		    	| Not at all |

# 	Then Verify the Sent text in the chat window
# 		 | CheckIn Message1 | I am not doing well. | 
#  		 | CheckIn Message2 | I am getting nothing done. | 
#  		 | CheckIn Message3 | I am not sleeping at all. | 

# 	Then Store the Time Value time_checkin for Checkin Message 
# 	Then Store the Time Value time_textmessage for text message

# @VerifyAutoReplyMessage
# Scenario: Verify Auto Reply message recieved	  

# 	   Then Wait for 2 minutes

# 	Then Verify Auto Reply message recieved
# 	| Auto_Reply_message | 
# 	| We will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911.|

# Then Store the Time value Time_MindyReply for Auto Reply Message

# @VerifyMindyHelp
# Scenario: Verify Mindy Help 

# 	Then Click on mindy Help icon in the auto reply message recieved.
		
# 	Then Verify Mindy help Message Text
# 	| Help_Message |
# 	| Hello, I am Mindy, your Mindoula virtual assistant. I am here to keep you informed with things, such as confirming scheduled calls or letting you know when your care team is able to respond to you.|

# 	@MindyHelpClose
# Scenario: Verify Mindy Help Close

# 	Then Close Help window

	
# @VerifyAttachments
# Scenario: Verify Attachements in Chat window

# Then opens left navigation menu
# Then user clicks on Members
# Then Search for Member in the Member Search
#  	|Name|
# 	|MMR A MEMB34|
# Then click on member in the list
# 	|Name|
# 	|MMR A MEMB34|
# Then Click on the Chat Icon in the Quick Actions
# Then Send Text Message to the Member
# 	|Text|
# 	|Hello I am Sending the Attachments|
# Then Click on + icon at the Chat text box
#  Then Send file and click on send and verify the upload
#  	| file_path |
#  	| C:/Selenium/casemanagerpic.gif |
# Then Send file and click on send and verify the upload
#  	| file_path |
#  	| C:/Selenium/Sample.xls |
# Then Send file and click on send and verify the upload
#  	| file_path |
#  	| C:/Selenium/Sample.png |
# Then Send file and click on send and verify the upload
#  	| file_path |
#  	| C:/Selenium/Sample.doc |
#  Then Send file and click on send and verify the upload
#  	| file_path |
#  	| C:/Selenium/Sample.jpeg |

# Then Verify file name  and store the time value of uploaded file

# @VerifyScheduleCallInPrimaryCaseManagerChatWindow
# Scenario: Verify Schedule Call in primary case manager Chat Window

# 	Then Click on Schedule Call icon in chat window
# 	Then click on Select Available time in the Pop Up window
# 		| SCHEDULED_TIME |
#         | Tomorrow 1:00 AM |
# 	Then click on Schedule Call
#   	Then Verify the text Confirmation Dialouge window
#         | SCHEDULED_CALL_CONFIRMATION_TEXT |
#       	| You are confirmed for a call on: Tomorrow 1:00 AM |
#     Then Close the Confirmation Dialogue
# 	# Then Verify the Confirmation Dialouge window closed or not
# 	# 	|CONFIRMATION_DIALOG|YES|
		
# @VerifyScheduleCallInPrimaryCaseManagerChatWindow1
# Scenario: Verify Schedule Call in primary case manager Chat Window1
# 	# Then Close the Confirmation Dialogue from schedule call header	
# 	Then Close the Chat inbox

# 	@VerifyAutoReplyMessageInMemberPlatform
# Scenario: Verify AutoReply message in member Home Page
	
# 	Then Take Action From Member Home Page
# 	    | Button_Container |
# 		| Chat |

# 	Then Click on the Care_Extender_name in the Chat Inbox
# 		|Care_Extender_Name|
# 		|Rama Palepu|
# 	Then Enter Message in Chat Text Box
# 		| message |
# 		| Good Morning Primary Care Team! |	
# 	Then click on Send Icon in messenger
#     Then Verify the text message is sent to the Care_Extender_Name Successfully
# 		|message|
# 		|Good Morning Primary Care Team!|


# @VerifyAutoReplymessagerecieved
# Scenario: Verify the AutoReply message recieved
	
# 	  Then Wait for 2 minutes in chat room for Auto Reply Message
# 	Then Verify the AutoReply message recieved.
#  		|Auto_Reply_message|
# 		|We will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911. |

		
# @VerifyScheduleCallInNonPrimaryCaseManagerChatWindow
# Scenario: Verify Schedule Call in non primary case manager Chat Window

# 	# Then Click on Schedule Call icon in chat window

# 	# Then Take Action From Member Home Page
# 	#     | Button_Container |
# 	# 	| Chat |

# 	Then Click on the Care_Extender_name in the Chat Inbox
# 		|Care_Extender_Name|
# 		|Rama Palepu|


# 	 Then Click on Schedule Call icon in chat window
# 	Then click on Select Available time in the Pop Up window
# 		    | SCHEDULED_TIME |
#         	|Tomorrow 1:00 AM |
# 	Then click on Schedule Call
#   	Then Verify the text Confirmation Dialouge window
#             |SCHEDULED_CALL_CONFIRMATION_TEXT|
#       		| You are confirmed for a call on: Tomorrow 1:00 AM |

#  @ConfirmationDialougeClose
# Scenario: Verify the text Confirmation Dialouge window Close

#     # Then Close the Confirmation Dialogue
#  	# Then Close the Chat inbox
# 	Then Logout from Website


	
# @VerifyScheduleCallInMemberHomepage
# Scenario: Verify Schedule Call in Member Homepage	
# 	Then Login to the website for scheduling call in primary case manager.
# 		# # | username | password |
# 		# # | MMR.MEMB33@mind.com | Test@123 |	
# 	Then Take Action From Member Home Page
# 	    | Button_Container |
# 		| Schedule Call |
# 	Then click on Select Available time in the Pop Up window
# 		| SCHEDULED_TIME |
#         	|Tomorrow 1:00 AM|
# 	Then click on Schedule Call
#   	Then Verify the text Confirmation Dialouge window
#             |SCHEDULED_CALL_CONFIRMATION_TEXT|
#       		| You are confirmed for a call on: Tomorrow 1:00 AM |

# @ConfirmationDialougeClose
# Scenario: Verify the text Confirmation Dialouge window Close

#     Then Close the Confirmation Dialogue
# 	Then Logout from Website

# @VerifytheEngagementrequestsCreatedForPrimaryCaseManager
# Scenario:Verify Enagement Requests Created for Primary Case Manager

#  Then Login to the website with Case Manager
# 		# # | username | password |
# 		# # | casemanager@mind.com| Test@123 |
# 	Then Click on Engagement Requests Icon on the Casemanager Home Page
		
    
# @VerifyActionOnChatAutoReply
# Scenario: Verify Action on Chat Auto Reply for Mark As Addressed

# 	Then Click on accept
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Assigned  Unconfirmed|MMR C|Accept|

# 	Then Verify Status,Action for Mark As Addressed
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Assigned  Confirmed| MMR C |Mark As Addressed|
		
# 	@VerifyActionOnChatAutoReply2
# Scenario: Verify Action on Chat Auto Reply for Add Case Note

# 	Then Click on Mark As Addressed
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Assigned  Confirmed|MMR C|Mark As Addressed|

# 	Then Verify Status,Action for Add Case Note
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Case Note Pending|MMR C|Add Case Note|

# @VerifyActionOnChatAutoReply3
# Scenario: Verify Action on Chat Auto Reply for complete Case Note

# 	Then Click on  Add Case Note
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Case Note Pending|MMR C|Add Case Note|

	
# 	Then Enter Data in Case Notes Page
# 		| ENGAGEMENT_DATE | 121712018 |
# 		| ADD_CARE_EXTENDER | MMR |
# 		| TIME_RANGE | 9am - 5pm,5pm - Midnight,Midnight - 9am |
# 		| ENGAGEMENT_METHODS | Phone;3;30,In-Person;2;30 |
# 		| INTERVENTIONS | Appointment Scheduling;30;[Blank],Attempted Contact;20;[Blank],Case Review with Consultant Psychiatrist;10;[Blank] |
# 		| DIVERSION | Unsuccessful ED |
# 		| ENGAGEMENT_STATUS | Attempted by Care Extender but not successful,Rescheduled |
# 		| FAIL_REASONS | Incorrect address,Member incarcerated |
# 		| INDIVIDUALS | Emergency Services,Team Member |
# 		| INTERACTION | Anxious,Swearing |
# 		| INPERSON | Community | 
	
# 	Then take action on case notes
# 		| Button_to_click |
# 		| Publish |	

#     Then Click on Engagement Requests Icon on the Casemanager Home Page
	
# 	@VerifyActionOnChatAutoReply4
# Scenario: Verify record exist in Open Engagement Requests Page

# 	Then Click on Close
# 	 |Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Case Note Completed|MMR C|Close|

# 	Then Verify record exist in Open Engagement Requests Page
# 	|Request_type|Name|Status|Assigned_to|Action_Status|Row_Exist|
# 	|Chat Auto Reply|MMR MEMB34|Case Note Completed|MMR C|Close|Does Not Exist|

# @VerifyAssigntoMyself
# Scenario: Verify Action on Assign to Myself

	

# 	Then Click on Chat Auto Reply Care Extender
#     |Request_type|Name|Status|Assigned_to|
#  	|Chat Auto Reply|MMR MEMB34|Assigned  Unconfirmed|Rama Palepu|

# 	Then Select Chat Auto Reply Care Extender
# 	|Assign_to_Care_Extender|
# 	|MMR CaseManager|

# 	Then Verify the Chat Auto Reply Action as Mark As Addressed
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Chat Auto Reply|MMR MEMB34|Assigned  Confirmed|MMR C|Mark As Addressed|

# 	@VerifyAssigntoMyselfforScheduleCall
# Scenario: Verify Action on Assign to Myself for Schedule Call

	
# 	Then Click on Schedule Call Care Extender
# 	|Request_type|Name|Status|Assigned_to|
#     |Scheduled Call|MMR MEMB34|Assigned  Unconfirmed|Rama Palepu|

# 	Then Select Schedule Call Care Extender
# 	|Assign_to_Care_Extender|
# 	|MMR CaseManager|

# 	Then Verify the Schedule Call Action as Mark As Addressed
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Scheduled Call|MMR MEMB34|Assigned  Confirmed|MMR C|Mark As Addressed|

# 	@VerifyActiononScheduleCallRequest
# Scenario: Verify Action on ScheduleCall Request

# 	Then Click on accept for the Scheduled Call Request
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Scheduled Call|MMR MEMB33|Assigned  Unconfirmed|MMR C|Accept|


# 	Then Verify Status,Action for Scheduled call Mark As Addressed
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Scheduled Call|MMR MEMB33|Assigned  Confirmed|MMR C|Mark As Addressed|


# @VerifyActiononScheduleCallRequest1
# Scenario: Verify Action on ScheduleCall Request1

# 	Then Click on Scheduled Call Mark As Addressed
# 	|Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Scheduled Call|MMR MEMB33|Assigned  Confirmed|MMR C|Mark As Addressed|

# 	# Then Verify Status, Action for Scheduled call Add Case Notes
# 	# |Request_type|Name|Status|Assigned_to|Action_Status|
# 	# |Scheduled Call|MMR MEMB33|Case Note Pending|MMR C|Add Case Note|

# 	Then Click on Drop down button on Add Case Note 
#     |Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Scheduled Call|MMR MEMB33|Case Note Pending|MMR C|Add Case Note|
	
# 	Then  Select Close Without Case Notes
#     |Request_type|Name|Status|Assigned_to|Action_Status|
# 	|Scheduled Call|MMR MEMB33|Case Note Pending|MMR C|Add Case Note|




# @VerifyQuichActionChat
# Scenario: Verify QuickActionChat

# Then opens left navigation menu
# Then user clicks on Members
# Then Search for Member in the Member Search
#  	|Name|
# 	|MMR A MEMB34|
# Then click on member in the list
# 	|Name|
# 	|MMR A MEMB34|
# Then Click on the Chat Icon in the Quick Actions
# Then Send Text Message to the Member
# 	|Text|
# 	|Hello I am Sending Greetings to Member|

# Then Verify the text message is sent to the member Successfully
# 		|Text|
# 		|Hello I am Sending Greetings to Member|


# Then Close the Chat inbox

# Then opens left navigation menu
# Then user clicks on Members
# Then Search for Member in the Member Search
#  	|Name|
# 	|MMR A MEMB34|
# Then click on member in the list
# 	|Name|
# 	|MMR A MEMB34|
#  Then click on Members Tab
#  	| TabName |
# 	| Chat Log |

# Then Verify the Chat Conversation with time_checkin and click.
# Then verify the chat conversations exists





















@VerifyEngagementRequests
Feature: Verify Engagement Requests

# Scenario: Verify Successful Login
# 	Given Launch Website
# 	Then Login to the website with Member
# 		| username | password |
# 		| mmr.memb32@mind.com | Test@123 |

@VerifyCheckinFromMemberHomepage
Scenario: Verify Checkin from Member Home Page

	Then Take Action From Member Home Page
	    | Button_Container |
		| Check In |

	Then Click on the Care_Extender_name in the Chat Inbox
		|Care_Extender_Name|
		| MMR CaseManager |

	Then Verify Checkin is Opened in Primary Case manager Chat window
		| Primary_Case_Manager |
		| MMR CaseManager |
	#   Then Select Checkin window.		

	Then Select Checkin Options by click on it.			
		   
			|Checkin Option|	
			 |Not Well|		
	Then Select Checkin Options by click on it.		
			|Checkin Option|
			| Nothing |
	Then Select Checkin Options by click on it.
			|Checkin Option|
		    	| Not at all |

	Then Verify the Sent text in the chat window
		 | CheckIn Message1 | I am not doing well. | 
 		 | CheckIn Message2 | I am getting nothing done. | 
 		 | CheckIn Message3 | I am not sleeping at all. | 

@VerifyAutoReplyMessage
Scenario: Verify Auto Reply message recieved	  

	   Then Wait for 2 minutes

	Then Verify Auto Reply message recieved
	| Auto_Reply_message | 
	| We will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911.|

@VerifyMindyHelp
Scenario: Verify Mindy Help 

	Then Click on mindy Help icon in the auto reply message recieved.
		
	Then Verify Mindy help Message Text
	| Help_Message |
	| Hello, I am Mindy, your Mindoula virtual assistant. I am here to keep you informed with things, such as confirming scheduled calls or letting you know when your care team is able to respond to you.|

	@MindyHelpClose
Scenario: Verify Mindy Help Close

	Then Close Help window

@VerifyScheduleCallInPrimaryCaseManagerChatWindow
Scenario: Verify Schedule Call in primary case manager Chat Window

	Then Click on Schedule Call icon in chat window
	Then click on Select Available time in the Pop Up window
		| SCHEDULED_TIME |
        | Tomorrow 1:00 AM |
	Then click on Schedule Call
  	Then Verify the text Confirmation Dialouge window
        | SCHEDULED_CALL_CONFIRMATION_TEXT |
      	| You are confirmed for a call on: Tomorrow 1:00 AM |
    Then Close the Confirmation Dialogue
	# Then Verify the Confirmation Dialouge window closed or not
	# 	|CONFIRMATION_DIALOG|YES|
		
@VerifyScheduleCallInPrimaryCaseManagerChatWindow1
Scenario: Verify Schedule Call in primary case manager Chat Window1
	# Then Close the Confirmation Dialogue from schedule call header	
	Then Close the Chat inbox

	@VerifyAutoReplyMessageInMemberPlatform
Scenario: Verify AutoReply message in member Home Page
	
	Then Take Action From Member Home Page
	    | Button_Container |
		| Chat |

	Then Click on the Care_Extender_name in the Chat Inbox
		|Care_Extender_Name|
		|Rama Palepu|
	Then Enter Message in Chat Text Box
		| message |
		| Good Morning Primary Care Team! |	
	Then click on Send Icon in messenger
    Then Verify the text message is sent to the Care_Extender_Name Successfully
		|message|
		|Good Morning Primary Care Team!|


@VerifyAutoReplymessagerecieved
Scenario: Verify the AutoReply message recieved
	
	  Then Wait for 2 minutes in chat room for Auto Reply Message
	Then Verify the AutoReply message recieved.
 		|Auto_Reply_message|
		|We will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911. |

		
@VerifyScheduleCallInNonPrimaryCaseManagerChatWindow
Scenario: Verify Schedule Call in non primary case manager Chat Window

	# Then Click on Schedule Call icon in chat window

	# Then Take Action From Member Home Page
	#     | Button_Container |
	# 	| Chat |

	Then Click on the Care_Extender_name in the Chat Inbox
		|Care_Extender_Name|
		|Rama Palepu|


	 Then Click on Schedule Call icon in chat window
	Then click on Select Available time in the Pop Up window
		    | SCHEDULED_TIME |
        	|Tomorrow 1:00 AM |
	Then click on Schedule Call
  	Then Verify the text Confirmation Dialouge window
            |SCHEDULED_CALL_CONFIRMATION_TEXT|
      		| You are confirmed for a call on: Tomorrow 1:00 AM |

 @ConfirmationDialougeClose
Scenario: Verify the text Confirmation Dialouge window Close

    # Then Close the Confirmation Dialogue
 	# Then Close the Chat inbox
	Then Logout from Website


	
@VerifyScheduleCallInMemberHomepage
Scenario: Verify Schedule Call in Member Homepage	
	Then Login to the website for scheduling call in primary case manager.
		# # | username | password |
		# # | MMR.MEMB33@mind.com | Test@123 |	
	Then Take Action From Member Home Page
	    | Button_Container |
		| Schedule Call |
	Then click on Select Available time in the Pop Up window
		| SCHEDULED_TIME |
        	|Tomorrow 1:00 AM|
	Then click on Schedule Call
  	Then Verify the text Confirmation Dialouge window
            |SCHEDULED_CALL_CONFIRMATION_TEXT|
      		| You are confirmed for a call on: Tomorrow 1:00 AM |

@ConfirmationDialougeClose
Scenario: Verify the text Confirmation Dialouge window Close

    Then Close the Confirmation Dialogue
	Then Logout from Website

@VerifytheEngagementrequestsCreatedForPrimaryCaseManager
Scenario:Verify Enagement Requests Created for Primary Case Manager

 Then Login to the website with Case Manager
		# # | username | password |
		# # | casemanager@mind.com| Test@123 |
	Then Click on Engagement Requests Icon on the Casemanager Home Page
		
    
@VerifyActionOnChatAutoReply
Scenario: Verify Action on Chat Auto Reply for Mark As Addressed

	Then Click on accept
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Assigned  Unconfirmed|MMR C|Accept|

	Then Verify Status,Action for Mark As Addressed
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Assigned  Confirmed| MMR C |Mark As Addressed|
		
	@VerifyActionOnChatAutoReply2
Scenario: Verify Action on Chat Auto Reply for Add Case Note

	Then Click on Mark As Addressed
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Assigned  Confirmed|MMR C|Mark As Addressed|

	Then Verify Status,Action for Add Case Note
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Case Note Pending|MMR C|Add Case Note|

@VerifyActionOnChatAutoReply3
Scenario: Verify Action on Chat Auto Reply for complete Case Note

	Then Click on  Add Case Note
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Case Note Pending|MMR C|Add Case Note|

	
	Then Enter Data in Case Notes Page
		| ENGAGEMENT_DATE | 121712018 |
		| ADD_CARE_EXTENDER | MMR |
		| TIME_RANGE | 9am - 5pm,5pm - Midnight,Midnight - 9am |
		| ENGAGEMENT_METHODS | Phone;3;30,In-Person;2;30 |
		| INTERVENTIONS | Appointment Scheduling;30;[Blank],Attempted Contact;20;[Blank],Case Review with Consultant Psychiatrist;10;[Blank] |
		| DIVERSION | Unsuccessful ED |
		| ENGAGEMENT_STATUS | Attempted by Care Extender but not successful,Rescheduled |
		| FAIL_REASONS | Incorrect address,Member incarcerated |
		| INDIVIDUALS | Emergency Services,Team Member |
		| INTERACTION | Anxious,Swearing |
		| INPERSON | Community | 
	
	Then take action on case notes
		| Button_to_click |
		| Publish |	

    Then Click on Engagement Requests Icon on the Casemanager Home Page
	
	@VerifyActionOnChatAutoReply4
Scenario: Verify record exist in Open Engagement Requests Page

	Then Click on Close
	 |Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Case Note Completed|MMR C|Close|

	Then Verify record exist in Open Engagement Requests Page
	|Request_type|Name|Status|Assigned_to|Action_Status|Row_Exist|
	|Chat Auto Reply|MMR MEMB34|Case Note Completed|MMR C|Close|Does Not Exist|

@VerifyAssigntoMyself
Scenario: Verify Action on Assign to Myself

	

	Then Click on Chat Auto Reply Care Extender
    |Request_type|Name|Status|Assigned_to|
 	|Chat Auto Reply|MMR MEMB34|Assigned  Unconfirmed|Rama Palepu|

	Then Select Chat Auto Reply Care Extender
	|Assign_to_Care_Extender|
	|MMR CaseManager|

	Then Verify the Chat Auto Reply Action as Mark As Addressed
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Chat Auto Reply|MMR MEMB34|Assigned  Confirmed|MMR C|Mark As Addressed|

	@VerifyAssigntoMyselfforScheduleCall
Scenario: Verify Action on Assign to Myself for Schedule Call

	
	Then Click on Schedule Call Care Extender
	|Request_type|Name|Status|Assigned_to|
    |Scheduled Call|MMR MEMB34|Assigned  Unconfirmed|Rama Palepu|

	Then Select Schedule Call Care Extender
	|Assign_to_Care_Extender|
	|MMR CaseManager|

	Then Verify the Schedule Call Action as Mark As Addressed
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Scheduled Call|MMR MEMB34|Assigned  Confirmed|MMR C|Mark As Addressed|

	@VerifyActiononScheduleCallRequest
Scenario: Verify Action on ScheduleCall Request

	Then Click on accept for the Scheduled Call Request
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Scheduled Call|MMR MEMB33|Assigned  Unconfirmed|MMR C|Accept|


	Then Verify Status,Action for Scheduled call Mark As Addressed
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Scheduled Call|MMR MEMB33|Assigned  Confirmed|MMR C|Mark As Addressed|


@VerifyActiononScheduleCallRequest1
Scenario: Verify Action on ScheduleCall Request1

	Then Click on Scheduled Call Mark As Addressed
	|Request_type|Name|Status|Assigned_to|Action_Status|
	|Scheduled Call|MMR MEMB33|Assigned  Confirmed|MMR C|Mark As Addressed|

	# Then Verify Status, Action for Scheduled call Add Case Notes
	# |Request_type|Name|Status|Assigned_to|Action_Status|
	# |Scheduled Call|MMR MEMB33|Case Note Pending|MMR C|Add Case Note|

	Then Click on Drop down button on Add Case Note 
    |Request_type|Name|Status|Assigned_to|Action_Status|
	|Scheduled Call|MMR MEMB33|Case Note Pending|MMR C|Add Case Note|
	
	Then  Select Close Without Case Notes
    |Request_type|Name|Status|Assigned_to|Action_Status|
	|Scheduled Call|MMR MEMB33|Case Note Pending|MMR C|Add Case Note|




@VerifyAttachments
Scenario: Verify Attachements in Chat window

Then opens left navigation menu
Then user clicks on Members
Then Search for Member in the Member Search
 	|Name|
	|MMR A MEMB34|
Then click on member in the list
	|Name|
	|MMR A MEMB34|
Then Click on the Chat Icon in the Quick Actions
Then Send Text Message to the Member
	|Text|
	|Hello I am Sending the Attachments|
Then Click on + icon at the Chat text box
 Then Send file and click on send and verify the upload
 	| file_path |
 	| C:/Selenium/casemanagerpic.gif |
Then Send file and click on send and verify the upload
 	| file_path |
 	| C:/Selenium/Sample.xls |
Then Send file and click on send and verify the upload
 	| file_path |
 	| C:/Selenium/Sample.png |
Then Send file and click on send and verify the upload
 	| file_path |
 	| C:/Selenium/Sample.doc |
 Then Send file and click on send and verify the upload
 	| file_path |
 	| C:/Selenium/Sample.jpeg |


# Then Send the .Gif file and click on send and verify the upload
# Then Send .xls file and click on send and verify the upload
# Then send .png fild and click on send and verify the upload
# Then send .doc file and click on send and verify the upload
# Then Send the .JPEG fild and click on send and verify the Upload

Then Close the Chat inbox

Then opens left navigation menu
Then user clicks on Members
Then Search for Member in the Member Search
 	|Name|
	|MMR A MEMB34|
Then click on member in the list
	|Name|
	|MMR A MEMB34|
# Then click on Members Tab
# 	| TabName |
# 	| Chat Log |



