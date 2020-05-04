@VerifyAdminUI
Feature:Verify Admin UI


@VerifyTaskExistsinLeftNavigation
Scenario:Verify Tasks Exists in Left Navigation

Then Verify Tasks Button  and Tasks Text in Left Navigation
|Text|
|Tasks|

Then Click on Tasks in the Left Navigation
Then veify the tasks page open in the left navigation
|HEADER_NAME|
|Tasks|
Then Verify the Text Tasks in the Page
|HEADER_NAME|
|Tasks|

@VerifyColumnsAndGetTheCounts
Scenario:Verify the Columns and get the counts

Then Verify the Columns and get the counts
|Coloumn1|Coloumn1_Count|Coloumn2|Coloumn2_Count|Coloumn3|Coloumn3_Count|Coloumn4|Coloumn4_Count|
|Upcoming Tasks |Count|Scheduled Today |Count|Overdue|Count|Completed|Count|


@VerifySlectedlistviewNoneAddFilterbutton
Scenario:Verify the Slected listview None AddFilter button in the Page

Then Verify the Slected listview None AddFilter button in the Page
|FILTER_LABEL|NONE_BUTTON|ADD_FILTER_BUTTON|
|SELECTED LIST:|None|Add Filter|


@VerifyMembersExistsintheLeftNavigation
Scenario: Veify Members Exists in the Left navigation

Then Veify Members Icon and Members Text in the Left Navigation
|Text|
|Members|
Then user clicks on Members
Then Verify Members Text and Get the Members Count
|Text|Count|
|Members|Members Count|
Then Type 9849275538 in the Member Search Text Box
|SEARCH|
|(984) 927-5538|
Then Veify the Member List Retrieved with the Mobile number 9849275538
|MEMBER_NAME|MOBILE_NUMBER|
|MMR A MEMB47|(984) 927-5538|
Then Pick the Top Member Recieved
|MEMBER_NAME|MOBILE_NUMBER|
|MMR AUTO MEMB47|(984) 927-5538|
Then Verify the Name and Mobile number
|MEMBER_NAME|MOBILE_NUMBER|
|MMR A MEMB47|(984) 927-5538|
@VerifyiDifferentViews
Scenario: Verify Different Views
Then user clicks on Members
Then verify listview icon lane status view icon out reach view icon Registry view icon Map View Icon Add Member Exists
# |LISTVIEW_ICON|LANESTATUSVIEW_ICON|OUTREACHVIEW_ICON|REGISTRYVIEW_ICON|MAPVIEW_ICON|ADDMEMBER_ICON|
# |List View|Lane Status View|Outreach View|Registry View|Map View| Add Member |

|LISTVIEW_ICON|List View|
|LISTVIEW_ICON_EXIST|YES|
|LANESTATUSVIEW_ICON|Lane Status View|
|LANESTATUSVIEW_ICON_EXIST|YES|
|OUTREACHVIEW_ICON|Outreach View|
|OUTREACHVIEW_ICON_EXIST|YES|
|REGISTRYVIEW_ICON|Registry View|
|REGISTRYVIEW_ICON_EXIST|YES|
|MAPVIEW_ICON|Map View|
|MAPVIEW_ICON_EXIST|YES|
|ADDMEMBER_ICON|Add Member |
|ADDMEMBER_ICON_EXIST|YES |


Then Mousehover to List view icon 
Then Get Text from the List View Icon
|LISTVIEW_ICON|
|List View|
Then Take action on View
|VIEW|
|List View|

Then Mousehover to Lane Status View icon 
Then Get Text from the Lane Status View Icon
|LANESTATUSVIEW_ICON|
|Lane Status View|
Then Take action on View
|VIEW|
|Lane Status View|

Then Mousehover to Outreach View icon 
Then Get Text from the Outreach View Icon
|OUTREACHVIEW_ICON|
|Outreach View|
Then Take action on View
|VIEW|
|Outreach View|

Then Mousehover to Registry View icon 
Then Get Text from the Registry View Icon
|REGISTRYVIEW_ICON|
|Registry View|
Then Take action on View
|VIEW|
|Registry View|

Then Mousehover to Map View icon 
Then Get Text from the Map View Icon
|MAPVIEW_ICON|
|Map View|
Then Take action on View
|VIEW|
|Map View|

@VerifyMemberHeader
Scenario: Verify Member Header
Then user clicks on Members
Then Take action on View
|VIEW|
|List View|
Then Search Member last name in the Search bar
|Name|
|MMR AUTO MEMB32|
Then click on member in the list
|Name|
|MMR A MEMB32|
# Then Verify the Text in the Header Column1
# |Text1|EMR ID:EIDMMRMEMB32,DOB:01/31/1958 (62) Male,Provider: Rahul Dravid|
# |Text2|Provider Phone Number: -,Practice: Test,Medicaid ID:MMRMEMB32|
# Then Verify the Text in the Header Column2
# |Text1|Primary: (212) 561-8003,Home: (212) 561-8001,Work: (212) 561-8002|
# |Text2|mmr.memb32@mind.com,12340 Boggy Creek Rd, Orlando, FL 32824, USA|
# Then Mousehover on the Header Column3
# Then verify the Text in the Header Column3
# |TEXT|Behavioral Test,BH Census - 07/09/2019,BH Census - 07/21/2019,BH Census - 07/25/2019|

@VerifyThe QuickActionButtons
Scenario: Verify Quick Action Button

Then Mousehover on Edit Iocn
Then Get Text from the Edit Icon
|TEXT|Edit|
# Then Mousehover on chat Iocn
# Then Get Text from the chat Icon
# |TEXT|Chat|
# Then Mousehover on Add Case Note Iocn
# Then Get Text from the Add Case Note Icon
# |TEXT|Add Case Note|
Then Mousehover on Add Tag Iocn
Then Get Text from the Add Tag Icon
|TEXT|Add Tag|

@VerifyCasenotesExistsin the Left Navigation
Scenario:Verify Casenotes in the left navigation

Then Verify the Casenotes Icon and Case Notes Text in the Left Navigation
|TEXT|
|Case Notes|
Then Click on the Case Notes
Then Verify the Case notes page Opened.
|HEADER_NAME|
|Case Notes|
Then Verify the CaseNotes Text and Get the Casenotes count
|TEXT|Count|
|Case Notes|casenotes Count|

@VerifyConsultsExistsIntheLeftNavigation
Scenario:Verify Consults Exists in Left Navigation
Then Verify the Consults Icon and Consults Text in the Left Navigation
|TEXT|
|Consults|
Then Click on the Consults
Then Verify the Consults page Opened.
|HEADER_NAME|
|Consults|
Then Verify the Consults Text and Get the Consults count
|TEXT|Count|
|Consults|Consults Count|

@VerifyCareExtenderExistsIntheLeftNavigation
Scenario:Verify Care Extender Exists in Left Navigation

Then Veify Care Extender Button Care Extender Text Exists in Left Navigation
    |TEXT|
    | Care Extenders |

Then Click on the Care Extender

Then Search Member last name in the Search bar
|Name|
|TEST AUTOMATION|
Then Click on Care Extender in the Care Extender List Page
|Name|
|TEST AUTOMATION|

Then Verify the Care Extender Data Displayed	
	|FIRST_NAME|TEST|
	|LAST_NAME|AUTOMATION|
	|EMAIL|testautomation@mind.com|
	|MOBILE|(222) 222-2222|
	|ADDRESS|12345 Mountain Ave, Chino, CA 91710, USA|
	|ROLE1|Program Manager|
    |ROLE2|Case Manager|
    |ROLE3|Psychiatric Consultant|
    |ROLE4|Engagement Coordinator|
    |ROLE5|On Call Administrator|
    |ROLE6|Program Coordinator|
	|EMRS|Allscripts|
	|STATE_LICENSES|California|


@VerifyReportsExistsIntheLeftNavigation
Scenario:Verify Reports Exists in Left Navigation

Then Veify Report Button Report Text Not Exists in Left Navigation
|ICON|Reports|
|ICON_EXISTS|NO|

# |TEXT|
# |Reports|

@VerifyiconsInMMRAdmin 
Scenario: Verify Icons Exists in MMR Admin 

Then Verify Engagment request icon not Exists 
|ICON|Engagement Requests|
|ICON_EXISTS|NO|
# Then Get Text by mousehover to the icon
# |TEXT|Engagement Requests|
Then Verify ActivityFeedIcon Exists
|ICON|Activity Feed|
|ICON_EXISTS|YES|
Then Click on Activity Feed
|ICON|Activity Feed|
Then Verify Text in the Menu
|TEXT1|Activity|
# |TEXT2|Mark all as Read|

@VerifyiconsInMMRAdmin 
Scenario: Verify Icons Exists in MMR Admin2

Then Click on Activity Feed
|ICON|Activity Feed|
Then Mousehover ActivityfeedIcon
|ICON|Activity Feed|
Then Get Text for Activityfeed icon
|TEXT|
|Activity Feed|

Then Verify Chat Icon not Exists
|ICON|Web Chat|
|ICON_EXISTS|NO|


Then Verify The MMR Help Icon Exists
|ICON|mMR Support|
|ICON_EXISTS|YES|

Then Mouse hover to the MMR Help Icon
|ICON|mMR Support|

Then Get Text from the help Icon
|TEXT|
|mMR Support|

Then Click on Casemanager Icon at down arrow
Then Verify the Text in the engagement manager Pop Up
|MMR_CASEMANAGER|MMR Admin|
# |SAFEMODE_OFF|Safe Mode Off|
|SAFEMODE_TOGGLE|Safe Mode Toggle|
# |DARKMODE_ON|Dark Mode On|
|CHANGE_LOG|Changelog|
|LOGOUT|Logout|
|VERSION_NUMBER|Version Number: 0.1.0|
# |BUILD_NUMBER|Build:20200327.174703|

# |MMR_CASEMANAGER|SAFEMODE_OFF|SAFEMODE_TOGGLE|DARKMODE_ON|CHANGE_LOG|LOGOUT|VERSION_NUMBER|BUILD_NUMBER|
# |MMR CaseManager|Safe Mode Off|Safe Mode Toggle|Dark Mode On|Changelog|Logout|Version Number: 0.1.0|Build:20200327.174703|

# Then Click on Casemanager Icon up arrow




	