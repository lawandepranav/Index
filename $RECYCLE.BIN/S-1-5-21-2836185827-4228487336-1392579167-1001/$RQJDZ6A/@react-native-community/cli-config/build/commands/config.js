"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function isValidRNDependency(config) {
  return Object.keys(config.platforms).filter(key => Boolean(config.platforms[key])).length !== 0;
}
function filterConfig(config) {
  const filtered = {
    ...config
  };
  Object.keys(filtered.dependencies).forEach(item => {
    if (!isValidRNDependency(filtered.dependencies[item])) {
      delete filtered.dependencies[item];
    }
  });
  return filtered;
}
var _default = {
  name: 'config',
  description: 'Print CLI configuration',
  options: [{
    name: '--platform <platform>',
    description: 'Output configuration for a specific platform'
  }],
  func: async (_argv, ctx) => {
    console.log(JSON.stringify(filterConfig(ctx), null, 2));
  }
};
exports.default = _default;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-config/build/commands/config.js.map