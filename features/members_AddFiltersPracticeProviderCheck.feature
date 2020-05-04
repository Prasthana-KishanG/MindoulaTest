@VerifyAddFilterPracticeProviders
Feature: Verify pagination retention
Scenario: Pagination retention without any search text
	Then opens left navigation menu
	Then user clicks on Members
	Then close left navigation menu
	Then click on member view
		| VIEW | Lane Status View |
	Then check member count before
	Then click on Add Filter
	Then click on available filters
		| FITLER_NAME | Program |
	Then expand parent program
		| PARENT_NAME | Collaborative Care |
	Then select child program
		| CHILD_PROGRAM | Larson, Vandervort and Brekke |
	Then click on available filters
		| FITLER_NAME | Practice |
	Then enter data in practice filter
		| PRACTICE_NAME | Koslow and Associates LTD	|
	Then verify data in practice filter
		| PRACTICE_NAME | Koslow and Associates LTD	|
		| PRACTICE_CHECK | NO |
	Then click on available filters
		| FITLER_NAME | Provider |
	Then enter data in provider filter
		| PROVIDER_NAME | Blair Smitham, MD	|
	Then verify data in provider filter
		| PROVIDER_NAME | Blair Smitham, MD	|
		| PROVIDER_CHECK | NO |
	Then click on available filters
		| FITLER_NAME | Practice |
	Then enter data in practice filter
		| PRACTICE_NAME | Larson Practice	|
	Then verify data in practice filter
		| PRACTICE_NAME | Larson Practice	|
		| PRACTICE_CHECK | YES |
	Then click on available filters
		| FITLER_NAME | Provider |
	Then enter data in provider filter
		| PROVIDER_NAME | Larson Provider |
	Then verify data in provider filter2
		| PROVIDER_NAME | Larson Provider |
		| PROVIDER_CHECK | YES |
	#Then click on Apply filters
	#Then check member count after
	#	| SAME_COUNT | NO  |
		