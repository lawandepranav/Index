"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _buildAndroid = _interopRequireDefault(require("./buildAndroid"));
var _logAndroid = _interopRequireDefault(require("./logAndroid"));
var _runAndroid = _interopRequireDefault(require("./runAndroid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = [_logAndroid.default, _runAndroid.default, _buildAndroid.default];
exports.default = _default;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-platform-android/build/commands/index.js.map