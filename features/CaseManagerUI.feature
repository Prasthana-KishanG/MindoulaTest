@VerifyCaseManagerUI
Feature:VerifyCaseManagerUI


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
Then user clicks on Members
Then Take action on View
|VIEW|
|List View|
Then Search Member last name in the Search bar
|Name|
|MMR AUTO MEMB34|
Then click on member in the list
|Name|
|MMR A MEMB34|
Then Verify the Text in the Header Column1
 |Text1|EMR ID: EIDMMRMEMB34,DOB: 01/31/1958 (62),Provider: Automation Provider|
|Text2|Practice: Automation,Medicaid ID: MMRMEMB34|
Then Verify the Text in the Header Column2
|Text1|Primary: (503) 454-4353\n(503) 454-4353,Home: (212) 561-8002,Work: (212) 561-8002|
@VerifyMemberHeaderemail
Scenario: Verify Member Header email
Then Verify the Text in the Header Column2 email adderess
|Text2|mmr.memb34@mind.com,12340 Boggy Creek Rd, Orlando, FL 32824, USA |
# Then Mousehover on the Header Column3
# Then verify the Text in the Header Column3
# |TEXT|Behavioral Test,BH Census - 07/09/2019,BH Census - 07/21/2019,BH Census - 07/25/2019|

@VerifyThe QuickActionButtons
Scenario: Verify Quick Action Button

Then Mousehover on Edit Iocn
Then Get Text from the Edit Icon
|TEXT|Edit|
Then Mousehover on chat Iocn
# Then Get Text from the chat Icon
# |TEXT|Chat|
Then Mousehover on Add Case Note Iocn
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

@VerifyAssessmentsExistsIntheLeftNavigation
Scenario:Verify Assessments Exists in Left Navigation

Then Veify Assessment Button Assessment Text Exists in Left Navigation
|TEXT|
|Assessments|

Then Click on the Assessments
Then Verify the Assessments page Opened.
|HEADER_NAME|
|Member Assessments|
Then Verify the Assements Text and Get the Assessments count
|TEXT|Count|
|Member Assessments|Assessments Count|

@VerifyReportsExistsIntheLeftNavigation
Scenario:Verify Reports Exists in Left Navigation

Then Veify Report Button Report Text Exists in Left Navigation
|TEXT|
|Reports|

Then Click on the Reports
Then Verify the Reports page Opened.
|HEADER_NAME|
|Reports|
Then Verify the Reports Text in the Header
|HEADER_NAME|
|Reports|
Then Verify the Report Text and Report Images Exists in the Reports Page
|REPORT|Collaborative Care Billing|
|IMAGE_NAME|https://mmr-staging.mindoula.com/assets/images/doc-1.svg|
|REPORT_IMAGE_EXISTS|YES|

Then Verify the Report Text and Report Images Exists in the Reports Page
|REPORT|CCP Order Status Reports|
|IMAGE_NAME|https://mmr-staging.mindoula.com/assets/images/doc-5.svg|
|REPORT_IMAGE_EXISTS|YES|

Then Verify the Report Text and Report Images Exists in the Reports Page
|REPORT|Population Health|
|IMAGE_NAME|https://mmr-staging.mindoula.com/assets/images/doc-6.svg|
|REPORT_IMAGE_EXISTS|YES|

Then Verify the Report Text and Report Images Exists in the Reports Page
|REPORT|M3|
|IMAGE_NAME|https://mmr-staging.mindoula.com/assets/images/doc-2.svg|
|REPORT_IMAGE_EXISTS|YES|

Then Verify the Report Text and Report Images Exists in the Reports Page
|REPORT|Utilization|
|IMAGE_NAME|https://mmr-staging.mindoula.com/assets/images/doc-3.svg|
|REPORT_IMAGE_EXISTS|YES|

Then Verify the Report Text and Report Images Exists in the Reports Page
|REPORT|Discovery Assessment|
|IMAGE_NAME|https://mmr-staging.mindoula.com/assets/images/doc-4.svg|
|REPORT_IMAGE_EXISTS|YES|



@VerifyiconsInCasemanager
Scenario: Verify Icons Exists in Casemanager

Then Verify Engagment request icon Exists 
|ICON|Engagement Requests|
|ICON_EXISTS|YES|
Then Get Text by mousehover to the icon
|TEXT|Engagement Requests|
Then Verify ActivityFeedIcon Exists
|ICON|Activity Feed|
|ICON_EXISTS|YES|
Then Click on Activity Feed
|ICON|Activity Feed|
Then Verify Text in the Menu
|TEXT1|Activity|
# |TEXT2|Mark all as Read|

@VerifyiconsInCasemanager2
Scenario: Verify Icons Exists in Casemanager2

Then Click on Activity Feed
|ICON|Activity Feed|
Then Mousehover ActivityfeedIcon
|ICON|Activity Feed|
Then Get Text for Activityfeed icon
|TEXT|
|Activity Feed|

Then Verify Chat Icon Exists
|ICON|Web Chat|
|ICON_EXISTS|YES|
Then Mousehover on Chat Icon
|ICON|Web Chat|
Then Get Text from Chat icon
|TEXT|
|Web Chat|

Then Verify The MMR Help Icon Exists
|ICON|mMR Support|
|ICON_EXISTS|YES|

Then Mouse hover to the MMR Help Icon
|ICON|mMR Support|

Then Get Text from the help Icon
|TEXT|
|mMR Support|

Then Click on Casemanager Icon at down arrow
Then Verify the Text in the Pop Up
|MMR_CASEMANAGER|MMR CaseManager|
# |SAFEMODE_OFF|Safe Mode Off|
|SAFEMODE_TOGGLE|Safe Mode Toggle|
# |DARKMODE_ON|Dark Mode On|
|CHANGE_LOG|Changelog|
|LOGOUT|Logout|
|VERSION_NUMBER|Version Number: 0.1.0|
# |BUILD_NUMBER|Build:20200327.174703|

# |MMR_CASEMANAGER|SAFEMODE_OFF|SAFEMODE_TOGGLE|DARKMODE_ON|CHANGE_LOG|LOGOUT|VERSION_NUMBER|BUILD_NUMBER|
# |MMR CaseManager|Safe Mode Off|Safe Mode Toggle|Dark Mode On|Changelog|Logout|Version Number: 0.1.0|Build:20200327.174703|





	