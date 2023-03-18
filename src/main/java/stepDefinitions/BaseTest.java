package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.LoginPageScreen;

public class BaseTest {
    private LoginPageScreen loginPageScreen;
    private WebDriver driver;

    @Given("User launches chrome browser")
    public void user_launches_chrome_browser() {
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        loginPageScreen=new LoginPageScreen(driver);
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
    @When("User clicks on submit button")
    public void user_clicks_on_submit_button() {
        loginPageScreen.clickSubmitButton();

    }





}
