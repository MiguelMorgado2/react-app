import {Then} from "@cucumber/cucumber"
import {expect, mergeExpects} from "@playwright/test"

Then(
    /^The contacts header should contain the text Contacts$/,
    async function () {  
        
        console.log("The contacts header should contain the text Contacts")

        const content = await global.page.textContent("[data-id='contacts")
        expect(content).toBe('Contacts');
    }
)