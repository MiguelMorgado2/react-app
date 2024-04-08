import {Then, setDefaultTimeout} from "@cucumber/cucumber"
import {expect, mergeExpects} from "@playwright/test"

setDefaultTimeout(60 * 1000 * 2)

Then(
    /^The page header should contain the text Book Cart$/,
    async function () {  
        
        console.log("The page header should contain the text Book Cart")

        const content = await global.page.textContent("//span[text()=' Book Cart ']")
        expect(content).toBe(' Book Cart ');
    }
)