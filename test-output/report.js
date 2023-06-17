$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/LoginTest.feature");
formatter.feature({
  "name": "Login to DemoGuru99 Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to DemoGuru99 Page with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@EOCM-001"
    }
  ]
});
formatter.step({
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User search for the URL \"https://demo.guru99.com/test/login.html\"",
  "keyword": "And "
});
formatter.step({
  "name": "User provides \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" at login page",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the success message as \"Successfully Logged in...\"",
  "keyword": "And "
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mngr484448",
        "UhYvUnU"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to DemoGuru99 Page with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@EOCM-001"
    }
  ]
});
formatter.step({
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericMethods.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for the URL \"https://demo.guru99.com/test/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_search_for_the_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"mngr484448\" and \"UhYvUnU\" at login page",
  "keyword": "When "
});
formatter.match({
  "location": "GenericMethods.user_provides_and_at_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the success message as \"Successfully Logged in...\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_verifies_the_success_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login to DemoGuru99 Page with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@EOCM-001"
    }
  ]
});
formatter.step({
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User search for the URL \"https://demo.guru99.com/test/login.html\"",
  "keyword": "And "
});
formatter.step({
  "name": "User provides \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" at login page",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies the error message as \"\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mngr481548",
        "UhYvUDU"
      ]
    },
    {
      "cells": [
        "mngr482548",
        "UhYDFnU"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to DemoGuru99 Page with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@EOCM-001"
    }
  ]
});
formatter.step({
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericMethods.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for the URL \"https://demo.guru99.com/test/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_search_for_the_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"mngr481548\" and \"UhYvUDU\" at login page",
  "keyword": "When "
});
formatter.match({
  "location": "GenericMethods.user_provides_and_at_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.user_verifies_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to DemoGuru99 Page with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@EOCM-001"
    }
  ]
});
formatter.step({
  "name": "User launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericMethods.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for the URL \"https://demo.guru99.com/test/login.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_search_for_the_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides \"mngr482548\" and \"UhYDFnU\" at login page",
  "keyword": "When "
});
formatter.match({
  "location": "GenericMethods.user_provides_and_at_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the error message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.user_verifies_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GenericMethods.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
});