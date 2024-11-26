"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _init = _interopRequireDefault(require("./init"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  func: _init.default,
  detached: true,
  name: 'init [projectName]',
  description: 'New app will be initialized in the directory of the same name. Android and iOS projects will use this name for publishing setup.',
  options: [{
    name: '--version <string>',
    description: 'React Native version to install in the template'
  }, {
    name: '--template <string>',
    description: 'Uses a custom template. Valid arguments are the ones supported by `npm install [package]` or `yarn add [package]`, if you are using `--pm yarn` option'
  }, {
    name: '--pm <string>',
    description: 'Use specific package manager to initialize the project. Available options: `yarn`, `npm`, `bun`. Default: `npm`'
  }, {
    name: '--directory <string>',
    description: 'Uses a custom directory instead of `<projectName>`.'
  }, {
    name: '--title <string>',
    description: 'Uses a custom app title name for application'
  }, {
    name: '--skip-install',
    description: 'Skips dependencies installation step'
  }, {
    name: '--install-pods [boolean]',
    description: 'Determine if CocoaPods should be installed when initializing a project'
  }, {
    name: '--package-name <string>',
    description: 'Inits a project with a custom package name (Android) and bundle ID (iOS), e.g. com.example.app'
  }, {
    name: '--platform-name <string>',
    description: 'Name of out of tree platform to be used for ex. react-native-macos. This flag is optional as it should be passed automatically by out of tree platform. It needs to match the name of the platform declared in package.json'
  }, {
    name: '--skip-git-init',
    description: 'Skip git repository initialization'
  }, {
    name: '--replace-directory [boolean]',
    description: 'Replaces the directory if it already exists.'
  }, {
    name: '--yarn-config-options <string>',
    description: 'Passes extra options that will be added to `.yarnrc.yml` file, format: key=value,key2=value2.',
    parse: val => {
      return Object.fromEntries(val.split(',').map(option => {
        const [key, value] = option.split('=');
        return [key, value];
      }));
    }
  }]
};
exports.default = _default;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli/build/commands/init/index.js.map