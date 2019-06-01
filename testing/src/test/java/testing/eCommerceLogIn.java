package testing;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

import static junit.framework.TestCase.assertEquals;

public class eCommerceLogIn {

    private WebDriver driver;

    @Given("I am connected on the log in page")
    public void i_am_connected_on_the_log_in_page() {
        try {
            driver = new FirefoxDriver();
            driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
            driver.get("http://localhost:63342/testing/HTML/eCommerceLogin.html");
        } catch (Error e) {
            myLibrary.printError(e);
            throw e;
        }
    }

    @When("I fill the {string} with {string}")
    public void i_fill_the_with(String string, String string2) {
        if (string.equals("login")) {
            myLibrary.fillFieldById("eCommerceLogin", string2, driver);
        } else if (string.equals("password")) {
            myLibrary.fillFieldById("eCommercePassword", string2, driver);
        } else {
            myLibrary.alert("Unknown value");
            throw new IllegalArgumentException("Unknown value");
        }
    }

    @When("I click on the submit button")
    public void i_click_on_the_submit_button() {
        try {
            driver.findElement(By.id("eCommerceSubmit")).click();
        } catch (Error e) {
            myLibrary.printError(e);
            throw e;
        }
    }

    @Then("an error message saying {string} must be displayed")
    public void an_error_message_saying_must_be_displayed(String expectedString) {
        String fieldId;
        switch (expectedString) {
            case "The login is mandatory":
            case "The password is mandatory":
            case "Invalid credentials":
                fieldId = "loginErrorMessage";
                break;
            default:
                myLibrary.alert("Unknown value");
                throw new IllegalArgumentException("Unknown value");
        }

        try {
            assertEquals(expectedString, driver.findElement(By.id(fieldId)).getText());
            driver.close();
        } catch (Error e) {
            myLibrary.printError(e);
            driver.close();
            throw e;
        }
    }

    @Then("the Order page must be displayed")
    public void the_Order_page_must_be_displayed() {
        try {
            assertEquals("Online Store", driver.getTitle());
            driver.close();
        } catch (Error e) {
            myLibrary.printError(e);
            driver.close();
            throw e;
        }
    }
}
