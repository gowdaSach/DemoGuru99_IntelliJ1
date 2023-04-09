package stepDefinitions;

import cucumber.api.java.en.*;
import pages.LoginPageScreen;

public class LoginTestSteps {

    private LoginPageScreen loginPageScreen;
    private GenericMethods genericMethods;
    public LoginTestSteps(){
        genericMethods=new GenericMethods();
        loginPageScreen=new LoginPageScreen(genericMethods.driver);
    }

    @Then("User verifies the success message as {string}")
    public void user_verifies_the_success_message_as(String msg) {
        loginPageScreen.validateLoginMsg(msg);
    }
    @Then("user verifies the error message as {string}")
    public void user_verifies_the_error_message_as(String string) {

    }


    }


