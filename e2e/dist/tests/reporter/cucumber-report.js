"use strict";

var _cucumberHtmlReporter = _interopRequireDefault(require("cucumber-html-reporter"));

var _parsEnv = require("../env/parsEnv");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: (0, _parsEnv.env)('COMMON_CONFIG_FILE')
});

var options = {
  theme: 'bootstrap',
  jsonFile: (0, _parsEnv.env)('JSON_REPORT_FILE'),
  output: (0, _parsEnv.env)('HTML_REPORT_FILE'),
  screenshotsDirectory: (0, _parsEnv.env)('SCREENSHOT_PATH'),
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false
};

_cucumberHtmlReporter.default.generate(options);