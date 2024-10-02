"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../support/wait-for-behavior");
var _htmlBehavior = require("../support/html-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _logger = require("../logger");
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/, async function (elementKey, iframeName, inputValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I fill in the ${elementKey} input on the ${iframeName} iframe with ${inputValue}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const iframeStable = await (0, _waitForBehavior.waitForSelector)(page, iframeIdentifier);
    if (iframeStable) {
      const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
      if (elementIframe) {
        await (0, _htmlBehavior.inputValueOnIframe)(elementIframe, elementIdentifier, inputValue);
      }
    }
    return iframeStable;
  });
});