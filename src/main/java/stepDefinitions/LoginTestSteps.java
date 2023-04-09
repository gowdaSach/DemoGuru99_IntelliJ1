package stepDefinitions;

import cucumber.api.java.en.*;
import pages.LoginPageScreen;

public class LoginTestSteps {

    private final LoginPageScreen loginPageScreen;

    public LoginTestSteps(){
        loginPageScreen=new LoginPageScreen(GenericMethods.driver);
    }

    @Then("User verifies the success message as {string}")
    public void user_verifies_the_success_message_as(String msg) {
        loginPageScreen.validateLoginMsg(msg);
    }
    @Then("user verifies the error message as {string}")
    public void user_verifies_the_error_message_as(String string) {

    }
    public void add(){

    }
    public void Subtract(){}
    //Hi

    }


