const {Given, When, Then, After} = require('cucumber');
const webdriver = require('selenium-webdriver');
const assert = require('assert').strict;

let driver = null;

async function initFields() {
    try {
        await driver.findElement({id: 'eCommerceLogin'}).clear().then(function () {
            return driver.findElement({id: 'eCommercePassword'}).clear();
        })
    } catch (err) {
        console.log(err);
    }
}

// -----------------------------------------------------
// ------------------- GIVEN Section -------------------
// -----------------------------------------------------
Given('I am connected on the log in page', function () {
    driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get('http://localhost:63342/My_Website/my_site/HTML/eCommerceLogin.html').then(function () {
        return initFields();
    })
});

// -----------------------------------------------------
// ------------------- WHEN Section --------------------
// -----------------------------------------------------
When('I fill my password', function () {
    return driver.findElement({id: 'eCommercePassword'}).sendKeys("Parker");
});

When('the login is empty', function () {
    return driver.findElement({id: 'eCommerceLogin'}).clear();
});

When('I click on the submit button', function () {
    return driver.findElement({id: 'eCommerceSubmit'}).click();
});

When('I fill my login', function () {
    return driver.findElement({id: 'eCommerceLogin'}).sendKeys("Peter");
});

When('the password is empty', function () {
    return driver.findElement({id: 'eCommercePassword'}).clear();
});

// -----------------------------------------------------
// ------------------- THEN Section --------------------
// -----------------------------------------------------
Then('an error message saying The login is mandatory must be displayed', function () {
    return driver.findElement({id: 'loginErrorMessage'}).getText().then(function (foundText) {
        assert.strictEqual(foundText, "The login is mandatory");
    });
});

Then('an error message saying The password is mandatory must be displayed', function () {
    return driver.findElement({id: 'loginErrorMessage'}).getText().then(function (foundText) {
        assert.strictEqual(foundText, "The password is mandatory");
    });

});

Then('the Order page must be displayed', function () {
    return driver.getTitle().then(function (foundTitle) {
        assert.strictEqual(foundTitle, "Online Store");
    })
});

// -----------------------------------------------------------
// ------------------- AFTER HOOK Section --------------------
// -----------------------------------------------------------
After(function () {
    //  return driver.close();
});