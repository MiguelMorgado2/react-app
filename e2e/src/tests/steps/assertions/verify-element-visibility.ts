import {Then, setDefaultTimeout} from "@cucumber/cucumber"
import {expect} from "@playwright/test"

setDefaultTimeout(60 * 1000 * 2)

Then(
    /^The "(.*)" should contain the text "(.*)"$/,
    async function (elementKey: string, expectedElementText: string) {  

        const {
            screen: { page },
        } = this;
        
        console.log(`The ${elementKey} should contain the text ${expectedElementText}`)

        const content = await page.textContent("//span[text()=' Book Cart ']")
        expect(content).toBe(expectedElementText);
    }
)

Then(
    /^The "([^"]*)" should be displayed$/,
    async function (elementKey: string) {  
        const {
            screen: { page },
        } = this;
        
        console.log(`The ${elementKey} should be displayed`)

        const locator = page.locator("//input[@aria-label='search']")
        await expect(locator).toBeVisible();
    }
)

