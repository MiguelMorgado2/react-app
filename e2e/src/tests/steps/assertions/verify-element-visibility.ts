import {Then, setDefaultTimeout} from "@cucumber/cucumber"
import {expect} from "@playwright/test"

setDefaultTimeout(60 * 1000 * 2)

Then(
    /^The "(.*)" should contain the text "(.*)"$/,
    async function (elementKey: string, expectedElementText: string) {  
        
        console.log(`The ${elementKey} should contain the text ${expectedElementText}`)

        const content = await global.page.textContent("//span[text()=' Book Cart ']")
        expect(content).toBe(expectedElementText);
    }
)

Then(
    /^The "([^"]*)" should be displayed$/,
    async function (elementKey: string) {  
        
        console.log(`The ${elementKey} should be displayed`)

        const locator = global.page.locator("//input[@aria-label='search']")
        await expect(locator).toBeVisible();
    }
)

