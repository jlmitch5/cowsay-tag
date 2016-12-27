(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cowsay-tag", [], factory);
	else if(typeof exports === 'object')
		exports["cowsay-tag"] = factory();
	else
		root["cowsay-tag"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = cowsay;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function cowsay(strings) {
	    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        values[_key - 1] = arguments[_key];
	    }
	
	    var raw = strings.reduce(function (acc, val, i) {
	        acc += val;
	        if (values[i]) {
	            acc += values[i];
	        }
	
	        return acc;
	    }, '');
	
	    var lineArr = raw.split('\n');
	
	    var maxLineLength = Math.max.apply(Math, _toConsumableArray(lineArr.map(function (v) {
	        return v.length;
	    })));
	
	    var text = lineArr.map(function (l, i) {
	        function getBoundChar(bound, numLines, index) {
	            var boundChar = void 0;
	
	            if (numLines === 1) {
	                boundChar = bound === 'start' ? '<' : '>';
	            } else {
	                if (index === 0) {
	                    boundChar = bound === 'start' ? '/' : '\\';
	                } else if (numLines - 1 === index) {
	                    boundChar = bound === 'start' ? '\\' : '/';
	                } else {
	                    boundChar = '|';
	                }
	            }
	
	            return boundChar;
	        }
	
	        var startChar = getBoundChar('start', lineArr.length, i);
	        var endChar = getBoundChar('end', lineArr.length, i);
	
	        return startChar + ' ' + l + ' '.repeat(maxLineLength - l.length) + ' ' + endChar;
	    });
	
	    var startLine = ' ' + '_'.repeat(maxLineLength + 2);
	    var endLine = ' ' + '-'.repeat(maxLineLength + 2);
	
	    var cow = '    \\   ^__^\n     \\  (oo)_______\n        (__)       )/\\\n            ||----w |\n            ||     ||';
	
	    return [].concat(startLine).concat(text).concat(endLine).concat(cow).join('\n');
	}
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cowsay-tag.js.map