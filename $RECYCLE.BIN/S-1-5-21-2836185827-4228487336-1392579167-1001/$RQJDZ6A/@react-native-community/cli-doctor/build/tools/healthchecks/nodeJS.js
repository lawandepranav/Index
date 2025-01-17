"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _versionRanges = _interopRequireDefault(require("../versionRanges"));
var _checkInstallation = require("../checkInstallation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  label: 'Node.js',
  description: 'Required to execute JavaScript code',
  getDiagnostics: async ({
    Binaries
  }) => ({
    needsToBeFixed: (0, _checkInstallation.doesSoftwareNeedToBeFixed)({
      version: Binaries.Node.version,
      versionRange: _versionRanges.default.NODE_JS
    }),
    version: Binaries.Node.version,
    versionRange: _versionRanges.default.NODE_JS
  }),
  runAutomaticFix: async ({
    loader,
    logManualInstallation
  }) => {
    loader.fail();
    logManualInstallation({
      healthcheck: 'Node.js',
      url: 'https://nodejs.org/en/download/'
    });
  }
};
exports.default = _default;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-doctor/build/tools/healthchecks/nodeJS.js.map