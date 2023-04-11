import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
    
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`searchItem: ${searchItem}`);
    let element = await $(`[name=q]`);
    await element.setValue(searchItem);
    await browser.keys("Enter");
    
})

Then(/^Click on the first search result$/, async function(){
    let element = await $(`<h3>`);
    element.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`expectedURL: ${expectedURL}`);
    await browser.waitUntil(async () => {
        return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    }, {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page\ncurrent web page:${await browser.getTitle()}`})
    const url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})