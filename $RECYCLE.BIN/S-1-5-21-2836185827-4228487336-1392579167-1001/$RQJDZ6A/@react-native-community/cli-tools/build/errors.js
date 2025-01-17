"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineString = exports.UnknownProjectError = exports.CLIError = void 0;
/**
 * A custom Error that creates a single-lined message to match current styling inside CLI.
 * Uses original stack trace when `originalError` is passed or erase the stack if it's not defined.
 */
class CLIError extends Error {
  constructor(msg, originalError) {
    super(inlineString(msg));
    if (originalError) {
      this.stack = typeof originalError === 'string' ? originalError : originalError.stack || ''.split('\n').slice(0, 2).join('\n');
    } else {
      // When the "originalError" is not passed, it means that we know exactly
      // what went wrong and provide means to fix it. In such cases showing the
      // stack is an unnecessary clutter to the CLI output, hence removing it.
      delete this.stack;
    }
  }
}

/**
 * Raised when we're unable to find a package.json
 */
exports.CLIError = CLIError;
class UnknownProjectError extends Error {}
exports.UnknownProjectError = UnknownProjectError;
const inlineString = (str = '') => str.replace(/(\s{2,})/gm, ' ').trim();
exports.inlineString = inlineString;

//# sourceMappingURL=/Users/thymikee/Developer/oss/rncli/packages/cli-tools/build/errors.js.map