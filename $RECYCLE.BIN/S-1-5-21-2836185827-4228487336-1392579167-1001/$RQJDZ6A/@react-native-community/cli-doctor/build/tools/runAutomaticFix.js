"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTOMATIC_FIX_LEVELS = void 0;
exports.default = _default;
function _cliTools() {
  const data = require("@react-native-community/cli-tools");
  _cliTools = function () {
    return data;
  };
  return data;
}
function _chalk() {
  const data = _interopRequireDefault(require("chalk"));
  _chalk = function () {
    return data;
  };
  return data;
}
var _healthchecks = require("./healthchecks");
var _common = require("./healthchecks/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let AUTOMATIC_FIX_LEVELS;
exports.AUTOMATIC_FIX_LEVELS = AUTOMATIC_FIX_LEVELS;
(function (AUTOMATIC_FIX_LEVELS) {
  AUTOMATIC_FIX_LEVELS["ALL_ISSUES"] = "ALL_ISSUES";
  AUTOMATIC_FIX_LEVELS["ERRORS"] = "ERRORS";
  AUTOMATIC_FIX_LEVELS["WARNINGS"] = "WARNINGS";
})(AUTOMATIC_FIX_LEVELS || (exports.AUTOMATIC_FIX_LEVELS = AUTOMATIC_FIX_LEVELS = {}));
async function _default({
  healthchecks,
  automaticFixLevel,
  stats,
  environmentInfo,
  config
}) {
  // Remove the fix options from screen
  if (process.stdout.isTTY) {
    process.stdout.moveCursor(0, -6);
    process.stdout.clearScreenDown();
  }
  const totalIssuesBasedOnFixLevel = {
    [AUTOMATIC_FIX_LEVELS.ALL_ISSUES]: stats.errors + stats.warnings,
    [AUTOMATIC_FIX_LEVELS.ERRORS]: stats.errors,
    [AUTOMATIC_FIX_LEVELS.WARNINGS]: stats.warnings
  };
  const issuesCount = totalIssuesBasedOnFixLevel[automaticFixLevel];
  _cliTools().logger.log(`\nAttempting to fix ${_chalk().default.bold(issuesCount.toString())} issue${issuesCount > 1 ? 's' : ''}...`);
  for (const category of healthchecks) {
    const healthchecksToRun = category.healthchecks.filter(healthcheck => {
      if (automaticFixLevel === AUTOMATIC_FIX_LEVELS.ALL_ISSUES) {
        return healthcheck.needsToBeFixed;
      }
      if (automaticFixLevel === AUTOMATIC_FIX_LEVELS.ERRORS) {
        return healthcheck.needsToBeFixed && healthcheck.type === _healthchecks.HEALTHCHECK_TYPES.ERROR;
      }
      if (automaticFixLevel === AUTOMATIC_FIX_LEVELS.WARNINGS) {
        return healthcheck.needsToBeFixed && healthcheck.type === _healthchecks.HEALTHCHECK_TYPES.WARNING;
      }
      return;
    });
    if (!healthchecksToRun.length) {
      continue;
    }
    _cliTools().logger.log(`\n${_chalk().default.dim(category.label)}`);
    for (const healthcheckToRun of healthchecksToRun) {
      const spinner = (0, _cliTools().getLoader)({
        prefixText: '',
        text: healthcheckToRun.label
      }).start();
      try {
        await healthcheckToRun.runAutomaticFix({
          loader: spinner,
          logManualInstallation: _common.logManualInstallation,
          environmentInfo,
          config
        });
      } catch (error) {
        _cliTools().logger.error(error.stderr || error.stdout);
      }
    }
  }
}

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-doctor/build/tools/runAutomaticFix.js.map