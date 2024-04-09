"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var common = "./src/tests/features/**/*.feature                 --require-module ts-node/register                 --require ./src/tests/steps/**/**/*.ts                 -f json:./reports/report.json                 --format progress-bar";
var dev = exports.dev = "".concat(common, " --tags '@dev'");
var smoke = exports.smoke = "".concat(common, " --tags '@smoke'");
var regression = exports.regression = "".concat(common, " --tags '@regression'");