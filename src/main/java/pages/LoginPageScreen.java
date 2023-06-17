package pages;


import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageScreen {
    public WebDriver ldriver;

    public LoginPageScreen(WebDriver rdriver) {
        this.ldriver = rdriver;
        PageFactory.initElements(rdriver, this);
    }

    @FindBy(xpath = "//input[@id=\"email\"]")
    @CacheLookup
    WebElement username;

    @FindBy(xpath = "//input[@id=\"passwd\"]")
    @CacheLookup
    WebElement password;

    @FindBy(xpath = "//button[@id=\"SubmitLogin\"]")
    @CacheLookup
    WebElement signInButton;

    @FindBy(xpath = "//div[@class=\"error-copy\"]/h3")
    @CacheLookup
    WebElement validationMsg;


    public void enterUserName(String uname) {
        username.clear();
        username.sendKeys(uname);
    }

    public void enterPassword(String pasword) {
        password.clear();
        password.sendKeys(pasword);
    }

    public void clickSubmitButton() {
        signInButton.click();
    }

    public void validateLoginMsg(String msg) {
        String actualMsg = validationMsg.getText();
        Assert.assertEquals("Success Msg is " + actualMsg + "", msg, actualMsg);
    }

    public void validatePageTitle(String title) {
        String ActualTitle = ldriver.getTitle();
        System.out.println("The Page Title is " + ActualTitle);
        Assert.assertEquals(ActualTitle, title);
    }
}
