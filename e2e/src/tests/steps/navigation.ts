import {Given, setDefaultTimeout} from "@cucumber/cucumber"

setDefaultTimeout(60 * 1000 * 2)

Given(
  /^I am on the home page$/,
  async function() {

    console.log("I am on the home page");

    await global.page.goto("https://bookcart.azurewebsites.net/")
  }
)