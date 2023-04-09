package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.LoginPageScreen;

import java.util.concurrent.TimeUnit;


public class GenericMethods  {
    public static WebDriver driver;
    private LoginPageScreen loginPageScreen;

    @Given("User launches chrome browser")
    public void user_launches_chrome_browser() {
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        loginPageScreen=new LoginPageScreen(driver);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
    @Given("User search for the URL {string}")
    public void user_search_for_the_URL(String url) {
        driver.get(url);
    }
    @When("User provides {string} and {string} at login page")
    public void user_provides_and_at_login_page(String uname, String password) {
        loginPageScreen.enterUserName(uname);
        loginPageScreen.enterPassword(password);
    }
    @Then("User closes the browser")
    public void user_closes_the_browser(){
        driver.quit();
    }
    @When("User clicks on submit button")
    public void user_clicks_on_submit_button() {
        loginPageScreen.clickSubmitButton();
    }















}
