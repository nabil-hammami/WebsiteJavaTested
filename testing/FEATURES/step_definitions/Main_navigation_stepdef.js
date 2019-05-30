// Declarations for Cucumber
const {Given, When, Then, After} = require('cucumber');
//const assert = require('assert').strict;

// Declarations for Selenium
const webdriver = require('selenium-webdriver');
//const {By} = require('selenium-webdriver');

// Import my own modules
const mine = require('../modules/myModules');

// Driver creation for Firefox
let driver;

Given('I am connected to the website', function () {
    driver = new webdriver.Builder().forBrowser('firefox').build();
    return driver.get('http://localhost:63342/My_Website/my_site/index.html');

});

When('I click on the Home link', function () {
    return driver.findElement({id: 'menu_home'}).click();
});

When('I click on the Projects link', function () {
    return driver.findElement({id: 'menu_projects'}).click();
});

When('I click on the Logbook link', function () {
    return driver.findElement({id: 'menu_logBook'}).click();
});

When('I click on the Latest test results link', function () {
    return driver.findElement({id: 'menu_latestTestResult'}).click();
});

When('I click on the Roadmap link', function () {
    return driver.findElement({id: 'menu_roadmap'}).click();
});

Then('the main frame must contain Welcome', function () {
    return mine.findTextElementByXpath(driver, '/html/body/article[1]/h1', 'Welcome');
});

Then('the main frame must contain Projects', function () {
    return mine.findTextElementById(driver, 'projectsTitle', 'Projects');
});

Then('the main frame must contain Logbook', function () {
    return mine.findTextElementByXpath(driver, '/html/body/h1', 'Logbook');
});

Then('the main frame must contain Cucumberjs Report', function () {
    return mine.findTextElementByXpath(driver, '/html/body/div[1]/div/div/a', 'Cucumberjs Report')
});

Then('the main frame must contain roadmap.png', function () {
    return mine.findImgElementByXpath(driver, '/html/body/img', 'roadmap.png');
});

After(function () {
//    return driver.close();
});