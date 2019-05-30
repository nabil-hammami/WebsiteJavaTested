const {By} = require('selenium-webdriver');
const assert = require('assert').strict;

exports.findTextElementByXpath = async function findTextElementByXpath(driver, path, elementToFind) {
    await driver.switchTo().frame(0);
    let response = await driver.findElement(By.xpath(path));
    return response.getText().then(function (foundElement) {
        assert.strictEqual(foundElement, elementToFind);
    });
};

exports.findImgElementByXpath = async function findImgElementByXpath(driver, path, image) {
    await driver.switchTo().frame(0);
    return await driver.findElement(By.xpath(path)).getAttribute("src").then(function (foundElement) {
        let isTrue = foundElement.endsWith(image);
        assert.strictEqual(isTrue, true);
    });
};

exports.findTextElementById = async function findTextElementById(driver, elementId, elementToFind) {
    await driver.switchTo().frame(0);
    let response = await driver.findElement(By.id(elementId));
    return response.getText().then(function (foundElement) {
        assert.strictEqual(foundElement, elementToFind);
    });
};