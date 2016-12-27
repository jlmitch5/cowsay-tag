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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = cowsay;
	
	var _cows = __webpack_require__(1);
	
	var _cows2 = _interopRequireDefault(_cows);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// creates text bubble text
	var getTextBubble = function getTextBubble(strings) {
	    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        values[_key - 1] = arguments[_key];
	    }
	
	    // create raw string from text pieces and var substitutions
	    var raw = strings.reduce(function (acc, val, i) {
	        acc += val;
	        if (values[i]) {
	            acc += values[i];
	        }
	
	        return acc;
	    }, '');
	
	    var lineArr = raw.split('\n');
	
	    // find the length of the longest line
	    var maxLineLength = Math.max.apply(Math, _toConsumableArray(lineArr.map(function (v) {
	        return v.length;
	    })));
	
	    // transform each line with bound chars and proper padding
	    // based on longest line
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
	
	    // make underscore and dash top and bottom text-bubble boundaries
	    var startLine = ' ' + '_'.repeat(maxLineLength + 2);
	    var endLine = ' ' + '-'.repeat(maxLineLength + 2);
	
	    return [].concat(startLine).concat(text).concat(endLine).join('\n');
	};
	
	// function the library exposes for use
	function cowsay(cow) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	    }
	
	    // combines cow and text bubble and returns string
	    var getCowSay = function getCowSay(cow) {
	        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	            args[_key3 - 1] = arguments[_key3];
	        }
	
	        var textBubble = getTextBubble.apply(undefined, args);
	
	        return [].concat(textBubble).concat(cow).join('\n');
	    };
	
	    // support the default form cowsay`foo`
	    if (Array.isArray(cow)) {
	        var newArgs = [cow].concat(args || []);
	
	        cow = '    \\   ^__^\n     \\  (oo)_______\n        (__)       )/\\\n            ||----w |\n            ||     ||';
	
	        return getCowSay.apply(undefined, [cow].concat(_toConsumableArray(newArgs)));
	    }
	
	    // support the form cowsay('customCow')`foo`
	    // lots of help from:
	    // http://www.2ality.com/2016/11/computing-tag-functions.html
	    // thanks, Dr. Axel Rauschmayer!
	    return function () {
	        // look to see if the cow is in the cows object
	        if (_cows2.default[cow] !== undefined) {
	            cow = _cows2.default[cow];
	        }
	
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	        }
	
	        return getCowSay.apply(undefined, [cow].concat(args));
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  // Snake on http://www.asciiworld.com/-Animals-.html
	  snake: "   \\       /^\\/^\\\n    \\    _|__|  O|\n\\/     /~     \\_/ \\\n \\____|__________/  \\\n        _______      \\\n                `\\     \\                 \\\n                  |     |                  \\\n                 /      /                    \\\n                /     /                       \\\\\n              /      /                         \\ \\\n             /     /                            \\  \\\n           /     /             _----_            \\   \\\n          /     /           _-~      ~-_         |   |\n         (      (        _-~    _--_    ~-_     _/   |\n          \\      ~-____-~    _-~    ~-_    ~-_-~    /\n            ~-_           _-~          ~-_       _-~\n               ~--______-~                ~-___-~"
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cowsay-tag.js.map