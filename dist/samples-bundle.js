/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./samples/Events.js":
/*!***************************!*\
  !*** ./samples/Events.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Events = (_dec = Component({\n  template: \"\\n<div>\\n    <h2>Events</h2>\\n    <p>Clicks counter: {{ count }}</p>\\n    <button (click)=\\\"increment()\\\">click</button>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Events() {\n    _classCallCheck(this, Events);\n\n    this.count = 0;\n  }\n\n  _createClass(Events, [{\n    key: \"increment\",\n    value: function increment() {\n      this.count++;\n    }\n  }]);\n\n  return Events;\n}()) || _class);\n\n//# sourceURL=webpack:///./samples/Events.js?");

/***/ }),

/***/ "./samples/Interpolation.js":
/*!**********************************!*\
  !*** ./samples/Interpolation.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Interpolation = (_dec = Component({\n  template: \"\\n<div>\\n    <h2>Interpolation</h2>\\n    <p>Text: {{ text }}</p>\\n    <SimpleText></SimpleText>\\n</div>\"\n}), _dec(_class = function Interpolation() {\n  _classCallCheck(this, Interpolation);\n\n  this.text = 'Hello Asic';\n}) || _class);\n\n//# sourceURL=webpack:///./samples/Interpolation.js?");

/***/ }),

/***/ "./samples/Loops.js":
/*!**************************!*\
  !*** ./samples/Loops.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Loops = (_dec = Component({\n  template: \"\\n<div>\\n    <h2>Loops</h2>\\n    <p>Active skill: <strong>{{ activeSkill }}</strong></p>\\n    <ul>\\n        <li *for=\\\"item in items\\\">\\n            <span>{{ item.name }} skills: <strong *for=\\\"skill in item.skills\\\" (click)=\\\"setActive(skill)\\\">{{ skill }} </strong></span>\\n            <SimpleText></SimpleText>\\n        </li>\\n    </ul>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Loops() {\n    _classCallCheck(this, Loops);\n\n    this.activeSkill = '';\n    this.items = [{\n      name: 'John',\n      skills: ['javascript', 'java']\n    }, {\n      name: 'Adam',\n      skills: ['python', 'ruby', 'html']\n    }];\n  }\n\n  _createClass(Loops, [{\n    key: \"setActive\",\n    value: function setActive(skill) {\n      this.activeSkill = skill;\n    }\n  }]);\n\n  return Loops;\n}()) || _class);\n\n//# sourceURL=webpack:///./samples/Loops.js?");

/***/ }),

/***/ "./samples/SimpleText.js":
/*!*******************************!*\
  !*** ./samples/SimpleText.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SimpleText = (_dec = Component({\n  template: \"\\n<div>\\n    <h2>Simple Text</h2>\\n    <p>Inner component</p>\\n    <p>{{ text }}</p>\\n</div>\"\n}), _dec(_class = function SimpleText() {\n  _classCallCheck(this, SimpleText);\n\n  this.text = 'Simple text';\n}) || _class);\n\n//# sourceURL=webpack:///./samples/SimpleText.js?");

/***/ }),

/***/ "./samples/Timer.js":
/*!**************************!*\
  !*** ./samples/Timer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer = (_dec = Component({\n  template: \"<p>Value: {{ count }}</p>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Timer() {\n    var _this = this;\n\n    _classCallCheck(this, Timer);\n\n    this.count = 0;\n    setInterval(function () {\n      _this.increment();\n    }, 1000);\n  }\n\n  _createClass(Timer, [{\n    key: \"increment\",\n    value: function increment() {\n      this.count++;\n    }\n  }]);\n\n  return Timer;\n}()) || _class);\n\n//# sourceURL=webpack:///./samples/Timer.js?");

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************!*\
  !*** multi ./samples/Events.js ./samples/Interpolation.js ./samples/Loops.js ./samples/SimpleText.js ./samples/Timer.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./samples/Events.js */\"./samples/Events.js\");\n__webpack_require__(/*! ./samples/Interpolation.js */\"./samples/Interpolation.js\");\n__webpack_require__(/*! ./samples/Loops.js */\"./samples/Loops.js\");\n__webpack_require__(/*! ./samples/SimpleText.js */\"./samples/SimpleText.js\");\nmodule.exports = __webpack_require__(/*! ./samples/Timer.js */\"./samples/Timer.js\");\n\n\n//# sourceURL=webpack:///multi_./samples/Events.js_./samples/Interpolation.js_./samples/Loops.js_./samples/SimpleText.js_./samples/Timer.js?");

/***/ })

/******/ });