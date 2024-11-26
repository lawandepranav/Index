"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGitRepository = exports.checkIfFolderIsGitRepo = exports.checkGitInstallation = void 0;
function _cliTools() {
  const data = require("@react-native-community/cli-tools");
  _cliTools = function () {
    return data;
  };
  return data;
}
function _execa() {
  const data = _interopRequireDefault(require("execa"));
  _execa = function () {
    return data;
  };
  return data;
}
function _fs() {
  const data = _interopRequireDefault(require("fs"));
  _fs = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = _interopRequireDefault(require("path"));
  _path = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const checkGitInstallation = async () => {
  try {
    await (0, _execa().default)('git', ['--version'], {
      stdio: 'ignore'
    });
    return true;
  } catch {
    return false;
  }
};
exports.checkGitInstallation = checkGitInstallation;
const checkIfFolderIsGitRepo = async folder => {
  try {
    await (0, _execa().default)('git', ['rev-parse', '--is-inside-work-tree'], {
      stdio: 'ignore',
      cwd: folder
    });
    return true;
  } catch {
    return false;
  }
};
exports.checkIfFolderIsGitRepo = checkIfFolderIsGitRepo;
const createGitRepository = async folder => {
  const loader = (0, _cliTools().getLoader)();
  loader.start('Initializing Git repository');
  let version;
  try {
    version = JSON.parse(_fs().default.readFileSync(_path().default.join('node_modules/react-native/package.json'), 'utf8')).version;
  } catch {}
  try {
    await (0, _execa().default)('git', ['init'], {
      cwd: folder
    });
    await (0, _execa().default)('git', ['branch', '-M', 'main'], {
      cwd: folder
    });
    await (0, _execa().default)('git', ['add', '.'], {
      cwd: folder
    });
    await (0, _execa().default)('git', ['commit', '-m', `Initial commit\n\n${version ? 'Generated by react-native@' + version : ''}`], {
      cwd: folder
    });
    loader.succeed();
  } catch (e) {
    loader.stop();
    _cliTools().logger.debug('Could not create an empty Git repository, error: ', e);
  }
};
exports.createGitRepository = createGitRepository;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli/build/commands/init/git.js.map