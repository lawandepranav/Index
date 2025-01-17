"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _cliTools() {
  const data = require("@react-native-community/cli-tools");
  _cliTools = function () {
    return data;
  };
  return data;
}
class DirectoryAlreadyExistsError extends _cliTools().CLIError {
  constructor(directory) {
    super(`Cannot initialize new project because directory "${directory}" already exists. Please remove or rename the directory and try again.`);
  }
}
exports.default = DirectoryAlreadyExistsError;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli/build/commands/init/errors/DirectoryAlreadyExistsError.js.map