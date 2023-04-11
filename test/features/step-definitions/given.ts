import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to inventory web app$/, async function() {
    /** Login to inventory app */
    await browser.url("https://www.saucedemo.com/")

    /**login actions */
    try {
        await $(`#user-nam`).setValue("standard_user")
        await browser.pause(1000)
        await $(`#password`).setValue("secret_sauce")
        await browser.pause(1000)
        await $(`#login-button`).click()
    } catch (error) {
        console.log(`Error in first login. retrying`)
        await browser.refresh()
        await browser.pause(2000)
        await $(`#user-name`).setValue("standard_user")
        await browser.pause(1000)
        await $(`#password`).setValue("secret_sauce")
        await browser.pause(1000)
        await $(`#login-button`).click()
    }

    /**different user login */
    // await browser.pause(2000)
    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com/")
    // await $(`#user-name`).setValue("problem_user")
    // await browser.pause(1000)
    // await $(`#password`).setValue("secret_sauce")
    // await $(`#login-button`).click()
    await browser.pause(1000)
    await browser.back()
    await browser.pause(2000)
    await browser.forward()
    
    await browser.pause(3000)
})