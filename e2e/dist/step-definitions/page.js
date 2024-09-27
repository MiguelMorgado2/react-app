"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../support/wait-for-behavior");
var _htmlBehavior = require("../support/html-behavior");
var _webElementHelper = require("../support/web-element-helper");
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) with "([^"]*)"$/, async function (elementKey, elementPosition, inputValue) {
  const {
    screen: {
      page,
      context
    },
    globalConfig
  } = this;
  console.log(`I fill in the ${elementKey} input on the ${elementPosition} window|tab with ${inputValue}`);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    let pages = context.pages();
    const result = await pages[pageIndex].waitForSelector(elementIdentifier, {
      state: 'visible'
    });
    if (result) {
      await (0, _htmlBehavior.inputValueOnPage)(pages, pageIndex, elementIdentifier, inputValue);
    }
    return result;
  });
});