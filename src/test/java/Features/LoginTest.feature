Feature: Login to DemoGuru99 Page

  @Login   @EOCM-001
  Scenario Outline: Login to DemoGuru99 Page with valid credentials
    Given User launches chrome browser
    And User search for the URL "https://demo.guru99.com/test/login.html"
    When User provides "<username>" and "<password>" at login page
    And User clicks on submit button
    Then user verifies the Page Title as ""
    And User verifies the success message as "Successfully Logged in..."
    And User closes the browser

    Examples:
    |     username          |   password      |
    |    mngr484448         |   UhYvUnU       |


    @Login   @EOCM-001
  Scenario Outline: Login to DemoGuru99 Page with invalid credentials
      Given User launches chrome browser
      And User search for the URL "https://demo.guru99.com/test/login.html"
      When User provides "<username>" and "<password>" at login page
      And User clicks on submit button
      Then user verifies the error message as ""
      And User closes the browser

    Examples:
      |     username          |    password     |
      |    mngr484448         |   UhYvUnU       |
      |    mngr484448         |   UhYvUnU       |

