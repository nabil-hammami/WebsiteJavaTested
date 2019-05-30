package testing;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;

import java.util.concurrent.TimeUnit;

import static junit.framework.TestCase.*;


public class menuValidation {


//    FirefoxProfile p = new FirefoxProfile();
//    p.SetPreference("webdriver.log.file","C:\\Temp\\logFirefox.txt");

    private WebDriver driver;


    private boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    @Before
    public void setUp() throws Exception {
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @Given("I am connected to the website")
    public void i_am_connected_to_the_website() {
        driver.get("http://localhost:63342/testing/index.html");
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Home link")
    public void i_click_on_the_Home_link() {
        driver.findElement(By.id("menu_home")).click();
        //throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Welcome")
    public void the_main_frame_must_contain_Welcome() {
        driver.switchTo().frame(0);
        String readText = driver.findElement(By.xpath("/html/body/article[1]/h1")).getText();
        assertEquals(readText, "Welcome");
        driver.quit();
        //TODO Errors management
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Projects link")
    public void i_click_on_the_Projects_link() {
        driver.findElement(By.id("menu_projects")).click();
        //throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Projects")
    public void the_main_frame_must_contain_Projects() {
        driver.switchTo().frame(0);
        String readText = driver.findElement(By.id("projectsTitle")).getText();
        assertEquals(readText, "Projects");
        driver.quit();
        //TODO Errors management
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Roadmap link")
    public void i_click_on_the_Roadmap_link() {
        driver.findElement(By.id("menu_roadmap")).click();
        //throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain roadmap.png")
    public void the_main_frame_must_contain_roadmap_png() {
        driver.switchTo().frame(0);
        assertTrue(isElementPresent(By.name("roadmap.png")));
        driver.quit();
        //TODO Errors management
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Latest test results link")
    public void i_click_on_the_Latest_test_results_link() {
        driver.findElement(By.id("menu_latestTestResult")).click();
        //throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Cucumberjs Report")
    public void the_main_frame_must_contain_Cucumberjs_Report() {
        driver.switchTo().frame(0);
        String readText = driver.findElement(By.linkText("Cucumberjs Report")).getText();
        assertEquals(readText, "Cucumberjs Report");
        driver.quit();
        //TODO Errors management
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Logbook link")
    public void i_click_on_the_Logbook_link() {
        driver.findElement(By.id("menu_logBook")).click();
        //throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Logbook")
    public void the_main_frame_must_contain_Logbook() {
        driver.switchTo().frame(0);
        String readText = driver.findElement(By.xpath("/html/body/h1")).getText();
        assertEquals(readText, "Logbook");
        driver.quit();
        //TODO Errors management
        //throw new cucumber.api.PendingException();
    }
}
