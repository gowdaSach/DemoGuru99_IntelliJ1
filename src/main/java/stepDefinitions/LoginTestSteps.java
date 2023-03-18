package stepDefinitions;

import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.LoginPageScreen;

public class LoginTestSteps {

    private LoginPageScreen loginPageScreen;
    private WebDriver driver;

    public LoginTestSteps(){
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        loginPageScreen=new LoginPageScreen(driver);
    }
    @Then("user verifies the error message as {string}")
    public void user_verifies_the_error_message_as(String string) {

    }
    @Then("User verifies the success message as {string}")
    public void user_verifies_the_success_message_as(String msg) {
        loginPageScreen.validateLoginMsg(msg);

    }
    @Then("user verifies the Page Title as {string}")
    public void user_verifies_the_Page_Title_as(String title) {
        loginPageScreen.validatePageTitle(title);
    }
    @Then("User closes the browser")
    public void user_closes_the_browser() {
        driver.quit();
    }



    }


