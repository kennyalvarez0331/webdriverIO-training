import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^A web page is opened$/, async function(){
    await browser.url("https://www.amazon.com/")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()

})

When(/^Perform web interactions$/, async function(){
    // const element = await $(`[type=number]`)
    // await element.click()
    // const input = "123456"
    // // await element.setValue(`123456`)
    // for(const i of input){
    //     await browser.pause(500)
    //     await browser.keys(i)
    // }

    // dropdown stuff
    // const element = await $(`//select/option[@selected="selected"]`)
    // const value = await element.getText()
    // chai.expect(value).to.equal("Please select an option")

    // const elements = await $$(`select > option`);
    // console.log(elements);
    // await browser.pause(3000)

    // checkboxes stuff
    // const elements = await $$(`//form[@id="checkboxes"]/Input`)
    // for(const element of elements){
    //     const isChecked = await element.isSelected()
    //     if (!isChecked){
    //         await element.click()
    //     }
    // }


    // windows stuff
    // await $(`=Click Here`).click()
    // await $(`=Elemental Selenium`).click()
    // let currentWindowTitle = await browser.getTitle()
    // const parentWindow = await browser.getWindowHandle()
    // console.log(`current title= ${currentWindowTitle}`)

    // javascript alert stuff
    // const windowHandle = await browser.getWindowHandles()
    // for(const window of windowHandle){
    //     await browser.pause(1000)
    //     console.log(`win handle: ${window}`)
    //     await browser.switchToWindow(window)
    //     currentWindowTitle = await browser.getTitle()
    //     if (currentWindowTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
    //         const header = await $(`<h1>`).getText()
    //         console.log(`headerText=${header}`)
    //         break
    //     }
    // }
    // await browser.pause(1000)
    // await browser.switchToWindow(parentWindow)
    // const parentWindowheader = await $(`<h3>`).getText()
    // console.log(`parentWindowHeader= ${parentWindowheader}`)Click for JS Prompt

    // await $(`button=Click for JS Confirm`).click()
    // await $(`button=Click for JS Prompt`).click()
    // await browser.pause(1000)
    // if(await browser.isAlertOpen()){
    //     const elementAlert = await browser.getAlertText()
    //     console.log(`alertText= ${elementAlert}`)
    //     await browser.sendAlertText(`hello js promt`)
    //     await browser.pause(1000)
    //     await browser.acceptAlert()
    // }


    // file upload stuff
    // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/text.txt`)
    // await $(`#file-submit`).click()

    // await $(`=iFrame`).click()
    // let element = await $(`#mce_0_ifr`)
    // await browser.switchToFrame(element)
    // await $(`#tinymce`).click()
    // await browser.keys(["Control", "A"])
    // await browser.pause(1000)
    // await browser.keys("Delete")
    // await $(`#tinymce`).addValue(`Typing in the frame....`)
    // await browser.switchToParentFrame()


    // table stuff
    // const rows = await $$(`//table[@id='table1']/tbody/tr`).length
    // chai.expect(rows).to.equal(4)
    // const cols = await $$(`//table[@id='table1']/thead/tr/th`).length
    // chai.expect(cols).to.equal(6)

    // const tableHeaders = ["lastname","firstname","email","due","web","action"];
    // const array = []
    // for(let i = 1; i <= rows; i++){
    //     const person = {
    //         lastname: "",
    //         firstname: "",
    //         email: "",
    //         due: "",
    //         web:"",
    //         action: ""
    //     }
    //     const due = parseFloat((await $(`//table[@id='table1']/tbody/tr[${i}]/td[4]`).getText()).replace("$",""))
    //     if(due > 50.00){
    //         for(let j = 1; j <= cols; j++){
    //             const cellVal = await $(`//table[@id='table1']/tbody/tr[${i}]/td[${j}]`).getText()
    //             person[tableHeaders[j-1]] = cellVal
    //         }
    //         array.push(person)
    //     }
    //     // array.push(person)
    // }

    // console.log(array)

    await browser.execute(() => {
        window.scrollBy(0, window.innerHeight)

    })
    await browser.pause(1000)
    await browser.execute(() => {
        window.scrollBy(0, -window.innerHeight)
    })
    await browser.pause(1000)
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
    await browser.pause(1000)
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollTop)
    })
    await browser.pause(3000)
})


