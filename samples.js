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

/***/ "./samples/BasicUsage.js":
/*!*******************************!*\
  !*** ./samples/BasicUsage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BasicUsage = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BasicUsage = (_dec = Component({\n  template: \"\\n<div>\\n    <p>My Component</p>\\n    <p>{{ text }}</p>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function BasicUsage() {\n    _classCallCheck(this, BasicUsage);\n  }\n\n  _createClass(BasicUsage, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.text = 'Some Text';\n    }\n  }]);\n\n  return BasicUsage;\n}()) || _class);\nexports.BasicUsage = BasicUsage;\n\n//# sourceURL=webpack:///./samples/BasicUsage.js?");

/***/ }),

/***/ "./samples/ComplexComponent.js":
/*!*************************************!*\
  !*** ./samples/ComplexComponent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ComplexComponent = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ComplexComponent = (_dec = Component({\n  template: \"\\n<div>\\n    <p>{{ text }}</p>\\n    <SimpleText></SimpleText>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function ComplexComponent() {\n    _classCallCheck(this, ComplexComponent);\n  }\n\n  _createClass(ComplexComponent, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.text = 'Parent component';\n    }\n  }]);\n\n  return ComplexComponent;\n}()) || _class);\nexports.ComplexComponent = ComplexComponent;\n\n//# sourceURL=webpack:///./samples/ComplexComponent.js?");

/***/ }),

/***/ "./samples/Events.js":
/*!***************************!*\
  !*** ./samples/Events.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Events = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Events = (_dec = Component({\n  template: \"\\n<div>\\n    <p>Clicks counter: {{ count }}</p>\\n    <button (click)=\\\"increment()\\\">click</button>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Events() {\n    _classCallCheck(this, Events);\n  }\n\n  _createClass(Events, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.count = 0;\n    }\n  }, {\n    key: \"increment\",\n    value: function increment() {\n      this.count++;\n    }\n  }]);\n\n  return Events;\n}()) || _class);\nexports.Events = Events;\n\n//# sourceURL=webpack:///./samples/Events.js?");

/***/ }),

/***/ "./samples/InnerLoops.js":
/*!*******************************!*\
  !*** ./samples/InnerLoops.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.InnerLoops = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar InnerLoops = (_dec = Component({\n  template: \"\\n<div>\\n    <p>Active skill: <strong>{{ activeSkill }}</strong></p>\\n    <ul>\\n        <li *for=\\\"item in items\\\">\\n            <span>{{ item.name }} skills: <strong *for=\\\"skill in item.skills\\\" (click)=\\\"setActive(skill)\\\">{{ skill }} </strong></span>\\n            <SimpleText></SimpleText>\\n        </li>\\n    </ul>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function InnerLoops() {\n    _classCallCheck(this, InnerLoops);\n  }\n\n  _createClass(InnerLoops, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.activeSkill = '';\n      this.items = [{\n        name: 'John',\n        skills: ['javascript', 'java']\n      }, {\n        name: 'Adam',\n        skills: ['python', 'ruby', 'html']\n      }];\n    }\n  }, {\n    key: \"setActive\",\n    value: function setActive(skill) {\n      this.activeSkill = skill;\n    }\n  }]);\n\n  return InnerLoops;\n}()) || _class);\nexports.InnerLoops = InnerLoops;\n\n//# sourceURL=webpack:///./samples/InnerLoops.js?");

/***/ }),

/***/ "./samples/Lifecycle.js":
/*!******************************!*\
  !*** ./samples/Lifecycle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Lifecycle = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Lifecycle = (_dec = Component({\n  template: \"<p>Value: {{ count }}</p>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Lifecycle() {\n    _classCallCheck(this, Lifecycle);\n  }\n\n  _createClass(Lifecycle, [{\n    key: \"initialize\",\n    value: function initialize() {\n      var _this = this;\n\n      this.count = 0;\n      setInterval(function () {\n        _this.increment();\n      }, 1000);\n    }\n  }, {\n    key: \"increment\",\n    value: function increment() {\n      this.count++;\n    }\n  }]);\n\n  return Lifecycle;\n}()) || _class);\nexports.Lifecycle = Lifecycle;\n\n//# sourceURL=webpack:///./samples/Lifecycle.js?");

/***/ }),

/***/ "./samples/Loops.js":
/*!**************************!*\
  !*** ./samples/Loops.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Loops = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Loops = (_dec = Component({\n  template: \"\\n<ul>\\n    <li *for=\\\"item in items\\\">\\n        {{ item }}\\n    </li>\\n</ul>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Loops() {\n    _classCallCheck(this, Loops);\n  }\n\n  _createClass(Loops, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.items = ['javascript', 'python', 'ruby'];\n    }\n  }]);\n\n  return Loops;\n}()) || _class);\nexports.Loops = Loops;\n\n//# sourceURL=webpack:///./samples/Loops.js?");

/***/ }),

/***/ "./samples/Props.js":
/*!**************************!*\
  !*** ./samples/Props.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Props = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Props = (_dec = Component({\n  template: \"\\n<div>\\n    <p>Props</p>\\n    <p>{{ foo }}</p>\\n    <p>{{ text }}</p>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function Props() {\n    _classCallCheck(this, Props);\n  }\n\n  _createClass(Props, [{\n    key: \"initialize\",\n    value: function initialize(foo, bar) {\n      this.text = bar;\n      this.foo = foo;\n    }\n  }]);\n\n  return Props;\n}()) || _class);\nexports.Props = Props;\n\n//# sourceURL=webpack:///./samples/Props.js?");

/***/ }),

/***/ "./samples/SimpleText.js":
/*!*******************************!*\
  !*** ./samples/SimpleText.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SimpleText = void 0;\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SimpleText = (_dec = Component({\n  template: \"\\n<div>\\n    <p>Inner component</p>\\n    <p>{{ text }}</p>\\n</div>\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function SimpleText() {\n    _classCallCheck(this, SimpleText);\n  }\n\n  _createClass(SimpleText, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.text = 'Simple text';\n    }\n  }]);\n\n  return SimpleText;\n}()) || _class);\nexports.SimpleText = SimpleText;\n\n//# sourceURL=webpack:///./samples/SimpleText.js?");

/***/ }),

/***/ "./samples/index.js":
/*!**************************!*\
  !*** ./samples/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _BasicUsage = __webpack_require__(/*! ./BasicUsage */ \"./samples/BasicUsage.js\");\n\nvar _Props = __webpack_require__(/*! ./Props */ \"./samples/Props.js\");\n\nvar _ComplexComponent = __webpack_require__(/*! ./ComplexComponent */ \"./samples/ComplexComponent.js\");\n\nvar _Events = __webpack_require__(/*! ./Events */ \"./samples/Events.js\");\n\nvar _InnerLoops = __webpack_require__(/*! ./InnerLoops */ \"./samples/InnerLoops.js\");\n\nvar _Lifecycle = __webpack_require__(/*! ./Lifecycle */ \"./samples/Lifecycle.js\");\n\nvar _Loops = __webpack_require__(/*! ./Loops */ \"./samples/Loops.js\");\n\nvar _SimpleText = __webpack_require__(/*! ./SimpleText */ \"./samples/SimpleText.js\");\n\n//# sourceURL=webpack:///./samples/index.js?");

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** multi ./samples/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./samples/index.js */\"./samples/index.js\");\n\n\n//# sourceURL=webpack:///multi_./samples/index.js?");

/***/ })

/******/ });