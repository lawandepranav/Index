"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperCreateRegexpFeaturesPlugin = require("@babel/helper-create-regexp-features-plugin");
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion("^7.0.0-0 || >8.0.0-alpha <8.0.0-beta");
  return (0, _helperCreateRegexpFeaturesPlugin.createRegExpFeaturePlugin)({
    name: "transform-unicode-sets-regex",
    feature: "unicodeSetsFlag",
    manipulateOptions(opts, parserOpts) {
      {
        parserOpts.plugins.push("regexpUnicodeSets");
      }
    }
  });
});

//# sourceMappingURL=index.js.map
