import {Given, setDefaultTimeout} from "@cucumber/cucumber"

setDefaultTimeout(60 * 1000 * 2)

Given(
  /^I am on the "(.*)" page$/,
  async function(pageId: string) {

    console.log(`I am on the ${pageId} page`);

    await global.page.goto("https://bookcart.azurewebsites.net/")
  }
)