"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parsEnv = require("./tests/env/parsEnv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: (0, _parsEnv.env)('COMMON_CONFIG_FILE')
});

var common = "./src/tests/features/**/*.feature                 --require-module ts-node/register                 --require ./src/tests/steps/**/**/*.ts                 -f json:./reports/report.json                 --format progress-bar";
var dev = exports.dev = "".concat(common, " --tags '@dev'");
var smoke = exports.smoke = "".concat(common, " --tags '@smoke'");
var regression = exports.regression = "".concat(common, " --tags '@regression'");