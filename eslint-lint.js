// CodeMirror Lint addon to use ESLint, copyright (c) by Angelo ZERR and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Depends on eslint.js from https://github.com/zaach/jsonlint

// declare global: jsonlint

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.registerHelper("lint", "javascript", function(text) {
  var found = [];
  var config = { rules:{'no-debugger' : 1, 'no-unused-vars': 1}};
  var filename = "[doc]";

  //clear all existing settings for a new file
  eslint.reset();

  var messages = eslint.verify(text, config, filename);
  for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    found.push({from: CodeMirror.Pos(message.line - 1, message.column),
      to: CodeMirror.Pos(message.line, message.column),
      message: message.message});	
  }
  return found;
});

});
