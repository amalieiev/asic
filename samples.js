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

/***/ "./samples/BasicUsage.ts":
/*!*******************************!*\
  !*** ./samples/BasicUsage.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar BasicUsage = /** @class */ (function () {\n    function BasicUsage() {\n        this.text = 'Some Text';\n    }\n    BasicUsage = __decorate([\n        index_1.Component({\n            template: \"\\n<div>\\n    <p>My Component</p>\\n    <p>{{ text }}</p>\\n</div>\"\n        })\n    ], BasicUsage);\n    return BasicUsage;\n}());\nexports.BasicUsage = BasicUsage;\n\n\n//# sourceURL=webpack:///./samples/BasicUsage.ts?");

/***/ }),

/***/ "./samples/ComplexComponent.ts":
/*!*************************************!*\
  !*** ./samples/ComplexComponent.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar ComplexComponent = /** @class */ (function () {\n    function ComplexComponent() {\n        this.text = 'Parent component';\n    }\n    ComplexComponent = __decorate([\n        index_1.Component({\n            template: \"\\n<div>\\n    <p>{{ text }}</p>\\n    <SimpleText></SimpleText>\\n</div>\"\n        })\n    ], ComplexComponent);\n    return ComplexComponent;\n}());\nexports.ComplexComponent = ComplexComponent;\n\n\n//# sourceURL=webpack:///./samples/ComplexComponent.ts?");

/***/ }),

/***/ "./samples/Events.ts":
/*!***************************!*\
  !*** ./samples/Events.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Events = /** @class */ (function () {\n    function Events() {\n        this.count = 0;\n    }\n    Events.prototype.increment = function () {\n        this.count++;\n    };\n    Events = __decorate([\n        index_1.Component({\n            template: \"\\n<div>\\n    <p>Clicks counter: {{ count }}</p>\\n    <button (click)=\\\"increment()\\\">click</button>\\n</div>\"\n        })\n    ], Events);\n    return Events;\n}());\nexports.Events = Events;\n\n\n//# sourceURL=webpack:///./samples/Events.ts?");

/***/ }),

/***/ "./samples/InnerLoops.ts":
/*!*******************************!*\
  !*** ./samples/InnerLoops.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar InnerLoops = /** @class */ (function () {\n    function InnerLoops() {\n        this.activeSkill = '';\n        this.items = [\n            { name: 'John', skills: ['javascript', 'java'] },\n            { name: 'Adam', skills: ['python', 'ruby', 'html'] }\n        ];\n    }\n    InnerLoops.prototype.setActive = function (skill) {\n        this.activeSkill = skill;\n    };\n    InnerLoops = __decorate([\n        index_1.Component({\n            template: \"\\n<div>\\n    <p>Active skill: <strong>{{ activeSkill }}</strong></p>\\n    <ul>\\n        <li *for=\\\"item in items\\\">\\n            <span>{{ item.name }} skills: <strong *for=\\\"skill in item.skills\\\" (click)=\\\"setActive(skill)\\\">{{ skill }} </strong></span>\\n            <SimpleText></SimpleText>\\n        </li>\\n    </ul>\\n</div>\"\n        })\n    ], InnerLoops);\n    return InnerLoops;\n}());\nexports.InnerLoops = InnerLoops;\n\n\n//# sourceURL=webpack:///./samples/InnerLoops.ts?");

/***/ }),

/***/ "./samples/Lifecycle.ts":
/*!******************************!*\
  !*** ./samples/Lifecycle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Lifecycle = /** @class */ (function () {\n    function Lifecycle() {\n        this.count = 0;\n    }\n    Lifecycle.prototype.initialize = function () {\n        var _this = this;\n        setInterval(function () {\n            _this.increment();\n        }, 1000);\n    };\n    Lifecycle.prototype.increment = function () {\n        this.count++;\n    };\n    Lifecycle = __decorate([\n        index_1.Component({\n            template: \"<p>Value: {{ count }}</p>\"\n        })\n    ], Lifecycle);\n    return Lifecycle;\n}());\nexports.Lifecycle = Lifecycle;\n\n\n//# sourceURL=webpack:///./samples/Lifecycle.ts?");

/***/ }),

/***/ "./samples/Loops.ts":
/*!**************************!*\
  !*** ./samples/Loops.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Loops = /** @class */ (function () {\n    function Loops() {\n        this.items = ['javascript', 'python', 'ruby'];\n    }\n    Loops = __decorate([\n        index_1.Component({\n            template: \"\\n<ul>\\n    <li *for=\\\"item in items\\\">\\n        {{ item }}\\n    </li>\\n</ul>\"\n        })\n    ], Loops);\n    return Loops;\n}());\nexports.Loops = Loops;\n\n\n//# sourceURL=webpack:///./samples/Loops.ts?");

/***/ }),

/***/ "./samples/Props.ts":
/*!**************************!*\
  !*** ./samples/Props.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Props = /** @class */ (function () {\n    function Props() {\n    }\n    __decorate([\n        index_1.Input\n    ], Props.prototype, \"items\");\n    __decorate([\n        index_1.Input\n    ], Props.prototype, \"title\");\n    Props = __decorate([\n        index_1.Component({\n            template: \"\\n<div>\\n    <p>{{ title }}</p>\\n    <ul>\\n        <li *for=\\\"item in items\\\">{{ item }}</li>\\n    </ul>\\n</div>\"\n        })\n    ], Props);\n    return Props;\n}());\nexports.Props = Props;\n\n\n//# sourceURL=webpack:///./samples/Props.ts?");

/***/ }),

/***/ "./samples/SimpleText.ts":
/*!*******************************!*\
  !*** ./samples/SimpleText.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar SimpleText = /** @class */ (function () {\n    function SimpleText() {\n        this.text = 'Simple Text';\n    }\n    SimpleText = __decorate([\n        index_1.Component({\n            template: \"\\n<div>\\n    <p>Inner component</p>\\n    <p>{{ text }}</p>\\n</div>\"\n        })\n    ], SimpleText);\n    return SimpleText;\n}());\nexports.SimpleText = SimpleText;\n\n\n//# sourceURL=webpack:///./samples/SimpleText.ts?");

/***/ }),

/***/ "./samples/index.ts":
/*!**************************!*\
  !*** ./samples/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar BasicUsage_1 = __webpack_require__(/*! ./BasicUsage */ \"./samples/BasicUsage.ts\");\nexports.BasicUsage = BasicUsage_1.BasicUsage;\nvar Props_1 = __webpack_require__(/*! ./Props */ \"./samples/Props.ts\");\nexports.Props = Props_1.Props;\nvar ComplexComponent_1 = __webpack_require__(/*! ./ComplexComponent */ \"./samples/ComplexComponent.ts\");\nexports.ComplexComponent = ComplexComponent_1.ComplexComponent;\nvar Events_1 = __webpack_require__(/*! ./Events */ \"./samples/Events.ts\");\nexports.Events = Events_1.Events;\nvar InnerLoops_1 = __webpack_require__(/*! ./InnerLoops */ \"./samples/InnerLoops.ts\");\nexports.InnerLoops = InnerLoops_1.InnerLoops;\nvar Lifecycle_1 = __webpack_require__(/*! ./Lifecycle */ \"./samples/Lifecycle.ts\");\nexports.Lifecycle = Lifecycle_1.Lifecycle;\nvar Loops_1 = __webpack_require__(/*! ./Loops */ \"./samples/Loops.ts\");\nexports.Loops = Loops_1.Loops;\nvar SimpleText_1 = __webpack_require__(/*! ./SimpleText */ \"./samples/SimpleText.ts\");\nexports.SimpleText = SimpleText_1.SimpleText;\n\n\n//# sourceURL=webpack:///./samples/index.ts?");

/***/ }),

/***/ "./src/decorators.js":
/*!***************************!*\
  !*** ./src/decorators.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Component = Component;\nexports.Input = Input;\n\nvar _services = __webpack_require__(/*! ./services */ \"./src/services.js\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction Component(_ref) {\n  var template = _ref.template;\n  return function (target) {\n    if (_services.$components[target.name]) {\n      _services.$components[target.name] = _objectSpread({}, _services.$components[target.name], {\n        target: target,\n        template: template\n      });\n    } else {\n      _services.$components[target.name] = {\n        target: target,\n        template: template\n      };\n    }\n  };\n}\n\nfunction Input(target, property) {\n  var component = target.constructor.name;\n\n  if (_services.$components[component]) {\n    _services.$components[component] = _objectSpread({}, _services.$components[component], {\n      props: _services.$components[component].props ? _toConsumableArray(_services.$components[component].props).concat([property]) : [property]\n    });\n  } else {\n    _services.$components[component] = {\n      props: [property]\n    };\n  }\n}\n\n//# sourceURL=webpack:///./src/decorators.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.$replaceEvents = $replaceEvents;\nexports.$replaceInterpolations = $replaceInterpolations;\nexports.$replaceFor = $replaceFor;\nexports.$replicateFor = $replicateFor;\nexports.$transform = $transform;\nexports.$render = $render;\nexports.$initialize = $initialize;\nexports.$exec = $exec;\nexports.$bootstrap = $bootstrap;\n\nvar _services = __webpack_require__(/*! ./services */ \"./src/services.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Replaces '(click)=\"foo()\"' with 'asic-event=\"click\" asic-event-expression=\"foo()\"'\n * And puts event name to $events variable\n * @param {string} template\n */\nfunction $replaceEvents(template) {\n  var eventRe = /(?:\\()(.+?)(?:\\)=)/g;\n  return template.replace(eventRe, function (match, eventName) {\n    _services.$events[eventName] = true;\n    return \"asic-event=\\\"\".concat(eventName, \"\\\" asic-event-expression=\");\n  });\n}\n/**\n * Replaces '{{ paramName }}' with '<span asic-bind-expression=\"paramName\"></span>'\n * @param {string} template\n */\n\n\nfunction $replaceInterpolations(template) {\n  var re = /(?:\\{\\{)(.*?)(?:\\}\\})/g;\n  template = template.replace(re, function (fullMatch, match) {\n    return \"<span asic-bind-expression=\\\"\".concat(match, \"\\\"></span>\");\n  });\n  var div = document.createElement('div');\n  div.innerHTML = template;\n  div.querySelectorAll('[asic-bind-expression]').forEach(function (element) {\n    if (element.parentElement.getAttribute('asic-event')) {\n      element.setAttribute('asic-event', element.parentElement.getAttribute('asic-event'));\n      element.setAttribute('asic-event-expression', element.parentElement.getAttribute('asic-event-expression'));\n    }\n  });\n  return div.innerHTML;\n}\n/**\n * Replaces '*for=item in items' with 'asic-for=item' 'asic-for-in=items'\n * @param {string} template\n */\n\n\nfunction $replaceFor(template) {\n  var forRe = /\\*for=\".*?\"/g;\n  return template.replace(forRe, function (match) {\n    var name = match.match(/(?:\\*for=\")(.*)(?: in)/)[1];\n    var data = match.match(/(?: in )(.*)(?:\")/)[1];\n    return \"asic-for=\\\"\".concat(name, \"\\\" asic-for-data=\\\"\").concat(data, \"\\\" asic-for-todo=\\\"true\\\"\");\n  });\n}\n/**\n * Replicates iterateble parts.\n * @param template\n */\n\n\nfunction $replicateFor(template, context) {\n  var div = document.createElement('div');\n  div.innerHTML = template;\n  var element = div.querySelector('[asic-for][asic-for-todo]');\n\n  if (!element) {\n    return template;\n  }\n\n  var name = element.getAttribute('asic-for');\n  var data = element.getAttribute('asic-for-data');\n  var outerHTML = element.outerHTML;\n  element.removeAttribute('asic-for-todo');\n  var resultHTML = '';\n\n  var _loop = function _loop(index) {\n    var partHTML = element.outerHTML.replace(RegExp(\"\\\\b\".concat(name, \"\\\\b\"), 'g'), function (match) {\n      return \"\".concat(data, \"[\").concat(index, \"]\");\n    });\n    resultHTML += partHTML;\n  };\n\n  for (var index = 0; index < $exec('return ' + data, context).length; index++) {\n    _loop(index);\n  }\n\n  template = template.replace(outerHTML, resultHTML);\n  return $replicateFor(template, context);\n}\n/**\n * Makes template transformations.\n * @param template\n */\n\n\nfunction $transform(template, context) {\n  template = $normalize(template);\n  template = $replaceEvents(template);\n  template = $replaceFor(template);\n  template = $replicateFor(template, context);\n  template = $replaceInterpolations(template);\n  return template;\n}\n/**\n * Replaces '<SomeComponent></SomeComponent>' with '<somecomponent></somecomponent>'\n * @param template\n */\n\n\nfunction $normalize(template) {\n  for (var componentName in _services.$components) {\n    template = template.replace(RegExp(\"<\".concat(componentName), 'g'), \"<\".concat(componentName.toLowerCase()));\n    template = template.replace(RegExp(\"</\".concat(componentName), 'g'), \"</\".concat(componentName.toLowerCase()));\n  }\n\n  return template;\n}\n\nfunction $render(element, component, parentProxy) {\n  if (element.innerHTML) {} else {\n    var template = _services.$components[component].template;\n    var Component = _services.$components[component].target;\n    var proxy = new Proxy(new Component(), {\n      set: function set(target, property, value) {\n        target[property] = value;\n        element.querySelectorAll('[asic-bind-expression]').forEach(function (el) {\n          var expression = el.getAttribute('asic-bind-expression'); //TODO: find correct solution\n\n          try {\n            el.innerHTML = $exec('return ' + expression, proxy);\n          } catch (err) {}\n        });\n        return true;\n      }\n    });\n    $initialize(proxy, element, parentProxy, _services.$components[component]);\n    element.innerHTML = $transform(template, proxy);\n    element.querySelectorAll('[asic-bind-expression]').forEach(function (el) {\n      var expression = el.getAttribute('asic-bind-expression');\n      el.innerHTML = $exec('return ' + expression, proxy);\n    });\n    element.querySelectorAll('[asic-event]').forEach(function (el) {\n      var eventName = el.getAttribute('asic-event');\n      var expression = el.getAttribute('asic-event-expression');\n      el.$asic = {\n        events: _defineProperty({}, eventName, expression),\n        context: proxy\n      };\n    });\n\n    var _loop2 = function _loop2(key) {\n      element.querySelectorAll(key).forEach(function (el) {\n        $render(el, key);\n      });\n    };\n\n    for (var key in _services.$components) {\n      _loop2(key);\n    }\n  }\n}\n\nfunction $initialize(proxy, element, parentProxy, component) {\n  var props = component.props || [];\n  props.map(function (param) {\n    var value = element.getAttribute(param);\n    var expression = element.getAttribute(\"[\".concat(param, \"]\"));\n\n    if (value !== null) {\n      proxy[param] = value;\n    } else if (expression !== null) {\n      proxy[param] = $exec('return ' + expression, parentProxy);\n    }\n  });\n\n  if (proxy.initialize) {\n    proxy.initialize();\n  }\n}\n/**\n * Evaluates an expression in provided context.\n * @param { string } expression\n * @param { Object } context\n */\n\n\nfunction $exec(expression, context, args) {\n  if (!context) context = window;\n  var parts = expression.match(/[a-zA-Z0-9_]+/g);\n  parts.forEach(function (name) {\n    if (name in context) {\n      expression = expression.replace(RegExp(\"\\\\b\".concat(name, \"\\\\b\")), function (match) {\n        return 'this.' + match;\n      });\n    }\n  });\n  return Function(expression).apply(context, args);\n}\n/**\n * Cleans asic related things form markup\n */\n\n\nfunction $cleanUp() {\n  ['asic-event', 'asic-event-expression', // 'asic-bind-expression',\n  'asic-for', 'asic-for-data'].forEach(function (value) {\n    document.querySelectorAll(\"[\".concat(value, \"]\")).forEach(function (element) {\n      element.removeAttribute(value);\n    });\n  });\n}\n/**\n * Bootstraps an application.\n */\n\n\nfunction $bootstrap() {\n  window.addEventListener('load', function () {\n    var _loop3 = function _loop3(key) {\n      var component = _services.$components[key];\n      document.querySelectorAll(component.target.name).forEach(function (element) {\n        $render(element, component.target.name);\n      });\n    };\n\n    for (var key in _services.$components) {\n      _loop3(key);\n    }\n\n    var _loop4 = function _loop4(eventName) {\n      document.addEventListener(eventName, function (event) {\n        var target = arguments[0].target;\n\n        if (target.$asic) {\n          $exec(target.$asic.events[eventName], target.$asic.context);\n        }\n      });\n    };\n\n    for (var eventName in _services.$events) {\n      _loop4(eventName);\n    }\n\n    $cleanUp();\n  });\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Component\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Component;\n  }\n});\nObject.defineProperty(exports, \"Input\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Input;\n  }\n});\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./src/decorators.js\");\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\nif (window) {\n  window.Component = _decorators.Component;\n  window.Input = _decorators.Input;\n}\n\n(0, _functions.$bootstrap)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.$events = exports.$components = void 0;\nvar $components = {};\nexports.$components = $components;\nvar $events = {};\nexports.$events = $events;\n\n//# sourceURL=webpack:///./src/services.js?");

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** multi ./samples/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./samples/index.ts */\"./samples/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./samples/index.ts?");

/***/ })

/******/ });