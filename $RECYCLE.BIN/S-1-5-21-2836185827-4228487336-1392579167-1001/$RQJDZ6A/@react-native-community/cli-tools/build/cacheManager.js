"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _path() {
  const data = _interopRequireDefault(require("path"));
  _path = function () {
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
function _os() {
  const data = _interopRequireDefault(require("os"));
  _os = function () {
    return data;
  };
  return data;
}
function _appdirsjs() {
  const data = _interopRequireDefault(require("appdirsjs"));
  _appdirsjs = function () {
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
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function loadCache(name) {
  try {
    const cacheRaw = _fs().default.readFileSync(_path().default.resolve(getCacheRootPath(), name), 'utf8');
    const cache = JSON.parse(cacheRaw);
    return cache;
  } catch (e) {
    if (e.code === 'ENOENT') {
      // Create cache file since it doesn't exist.
      saveCache(name, {});
    }
    _logger.default.debug('No cache found');
    return undefined;
  }
}
function saveCache(name, cache) {
  const fullPath = _path().default.resolve(getCacheRootPath(), name);
  _fs().default.mkdirSync(_path().default.dirname(fullPath), {
    recursive: true
  });
  _fs().default.writeFileSync(fullPath, JSON.stringify(cache, null, 2));
}

/**
 * Returns the path string of `$HOME/.react-native-cli`.
 *
 * In case it doesn't exist, it will be created.
 */
function getCacheRootPath() {
  const legacyPath = _path().default.resolve(_os().default.homedir(), '.react-native-cli', 'cache');
  const cachePath = (0, _appdirsjs().default)({
    appName: 'react-native-cli',
    legacyPath
  }).cache;
  if (!_fs().default.existsSync(cachePath)) {
    _fs().default.mkdirSync(cachePath, {
      recursive: true
    });
  }
  return cachePath;
}
function removeProjectCache(name) {
  const cacheRootPath = getCacheRootPath();
  try {
    const fullPath = _path().default.resolve(cacheRootPath, name);
    if (_fs().default.existsSync(fullPath)) {
      _fs().default.rmSync(fullPath, {
        recursive: true
      });
    }
  } catch {
    _logger.default.error(`Failed to remove cache for ${name}. If you experience any issues when running freshly initialized project, please remove the "${_chalk().default.underline(_path().default.join(cacheRootPath, name))}" folder manually.`);
  }
}
function get(name, key) {
  const cache = loadCache(name);
  if (cache) {
    return cache[key];
  }
  return undefined;
}
function set(name, key, value) {
  const cache = loadCache(name);
  if (cache) {
    cache[key] = value;
    saveCache(name, cache);
  }
}
var _default = {
  get,
  set,
  removeProjectCache,
  getCacheRootPath
};
exports.default = _default;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-tools/build/cacheManager.js.map