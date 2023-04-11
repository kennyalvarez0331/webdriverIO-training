import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^inventory page should list (.*) products$/, async function(numOfProducts) {
    if (!numOfProducts) throw Error(`Invalid number provided: ${numOfProducts}`);
    
    const elements = await $$(`.inventory_item`)
    chai.expect(elements.length).to.equal(parseInt(numOfProducts))
})

/**
 * steps:
 * 1. Get Price list
 * 2. Convert string to number 
 * 3. Assert if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function(){
    const elements = await $$(`.inventory_item_price`)

    const priceStrArr = []
    for(const element of elements){
        const price = await element.getText();
        console.log(`price: ${price}`);
        priceStrArr.push(price)
    }

    const prices = priceStrArr.map(price => parseFloat(price.replace("$","")))
    console.log(prices);
    
    for(const price of prices){
        chai.expect(price).to.be.above(0.0)
    }
})