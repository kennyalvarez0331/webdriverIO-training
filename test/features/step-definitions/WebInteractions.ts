import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^A web page is opened$/, async function(){
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
    await browser.pause(3000)

})

When(/^Perform web interactions$/, async function(){
    const element = await $(`[type=number]`)
    await element.click()
    const input = "123456"
    // await element.setValue(`123456`)
    for(const i of input){
        await browser.pause(500)
        await browser.keys(i)
    }
})