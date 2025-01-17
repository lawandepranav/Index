"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _chalk() {
  const data = _interopRequireDefault(require("chalk"));
  _chalk = function () {
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
function _cliTools() {
  const data = require("@react-native-community/cli-tools");
  _cliTools = function () {
    return data;
  };
  return data;
}
var _adb = _interopRequireDefault(require("./adb"));
var _tryRunAdbReverse = _interopRequireDefault(require("./tryRunAdbReverse"));
var _tryLaunchAppOnDevice = _interopRequireDefault(require("./tryLaunchAppOnDevice"));
var _tryLaunchEmulator = _interopRequireDefault(require("./tryLaunchEmulator"));
var _tryInstallAppOnDevice = _interopRequireDefault(require("./tryInstallAppOnDevice"));
var _getTaskNames = require("./getTaskNames");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

async function runOnAllDevices(args, cmd, adbPath, androidProject) {
  let devices = _adb.default.getDevices(adbPath);
  if (devices.length === 0) {
    _cliTools().logger.info('Launching emulator...');
    const result = await (0, _tryLaunchEmulator.default)(adbPath);
    if (result.success) {
      _cliTools().logger.info('Successfully launched emulator.');
      devices = _adb.default.getDevices(adbPath);
    } else {
      _cliTools().logger.error(`Failed to launch emulator. Reason: ${_chalk().default.dim(result.error || '')}.`);
      _cliTools().logger.warn('Please launch an emulator manually or connect a device. Otherwise app may fail to launch.');
    }
  }
  try {
    if (!args.binaryPath) {
      let gradleArgs = (0, _getTaskNames.getTaskNames)(androidProject.appName, args.mode, args.tasks, 'install');
      if (args.extraParams) {
        gradleArgs.push(...args.extraParams);
      }
      if (args.port != null) {
        gradleArgs.push('-PreactNativeDevServerPort=' + args.port);
      }
      if (args.activeArchOnly) {
        const architectures = devices.map(device => {
          return _adb.default.getCPU(adbPath, device);
        }).filter((arch, index, array) => arch != null && array.indexOf(arch) === index);
        if (architectures.length > 0) {
          _cliTools().logger.info(`Detected architectures ${architectures.join(', ')}`);
          gradleArgs.push('-PreactNativeArchitectures=' + architectures.join(','));
        }
      }
      _cliTools().logger.info('Installing the app...');
      _cliTools().logger.debug(`Running command "cd android && ${cmd} ${gradleArgs.join(' ')}"`);
      await (0, _execa().default)(cmd, gradleArgs, {
        stdio: ['inherit', 'inherit', 'pipe'],
        cwd: androidProject.sourceDir
      });
    }
  } catch (error) {
    (0, _cliTools().printRunDoctorTip)();
    throw createInstallError(error);
  }
  (devices.length > 0 ? devices : [undefined]).forEach(device => {
    (0, _tryRunAdbReverse.default)(args.port, device);
    if (args.binaryPath && device) {
      (0, _tryInstallAppOnDevice.default)(args, adbPath, device, androidProject);
    }
    (0, _tryLaunchAppOnDevice.default)(device, androidProject, adbPath, args);
  });
}
function createInstallError(error) {
  const stderr = (error.stderr || '').toString();
  let message = '';
  // Pass the error message from the command to stdout because we pipe it to
  // parent process so it's not visible
  _cliTools().logger.log(stderr);

  // Handle some common failures and make the errors more helpful
  if (stderr.includes('No connected devices')) {
    message = 'Make sure you have an Android emulator running or a device connected.';
  } else if (stderr.includes('licences have not been accepted') || stderr.includes('accept the SDK license')) {
    message = `Please accept all necessary Android SDK licenses using Android SDK Manager: "${_chalk().default.bold('$ANDROID_HOME/tools/bin/sdkmanager --licenses')}."`;
  } else if (stderr.includes('requires Java')) {
    message = `Looks like your Android environment is not properly set. Please go to ${_chalk().default.dim.underline(_cliTools().link.docs('environment-setup', 'android', {
      hash: 'jdk-studio',
      guide: 'native'
    }))} and follow the React Native CLI QuickStart guide to install the compatible version of JDK.`;
  } else {
    message = error.message;
  }
  return new (_cliTools().CLIError)(`Failed to install the app.${message ? ' ' + message : ''}`, error.message.length > 0 ? undefined : error);
}
var _default = runOnAllDevices;
exports.default = _default;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-platform-android/build/commands/runAndroid/runOnAllDevices.js.map