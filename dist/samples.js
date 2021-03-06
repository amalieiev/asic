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
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar BasicUsage = /** @class */ (function () {\n    function BasicUsage() {\n        this.text = 'Some Text';\n    }\n    BasicUsage = __decorate([\n        index_1.Component({\n            element: 'BasicUsage',\n            template: \"\\n<div>\\n    <p>My Component</p>\\n    <p>{{ text }}</p>\\n</div>\"\n        })\n    ], BasicUsage);\n    return BasicUsage;\n}());\nexports.BasicUsage = BasicUsage;\n\n\n//# sourceURL=webpack:///./samples/BasicUsage.ts?");

/***/ }),

/***/ "./samples/ComplexComponent.ts":
/*!*************************************!*\
  !*** ./samples/ComplexComponent.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar ComplexComponent = /** @class */ (function () {\n    function ComplexComponent() {\n    }\n    ComplexComponent = __decorate([\n        index_1.Component({\n            element: 'ComplexComponent',\n            template: \"\\n<div>\\n    <p>Container</p>\\n    <SimpleText></SimpleText>\\n</div>\"\n        })\n    ], ComplexComponent);\n    return ComplexComponent;\n}());\nexports.ComplexComponent = ComplexComponent;\n\n\n//# sourceURL=webpack:///./samples/ComplexComponent.ts?");

/***/ }),

/***/ "./samples/CustomEvents.ts":
/*!*********************************!*\
  !*** ./samples/CustomEvents.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar MyComponent = /** @class */ (function () {\n    function MyComponent() {\n    }\n    MyComponent.prototype.onClick = function () {\n        this.myCustomEvent('some event payload');\n    };\n    __decorate([\n        index_1.Output\n    ], MyComponent.prototype, \"myCustomEvent\");\n    MyComponent = __decorate([\n        index_1.Component({\n            element: 'MyComponent',\n            template: \"<button (click)=\\\"onClick()\\\">Fire Event</button>\"\n        })\n    ], MyComponent);\n    return MyComponent;\n}());\nexports.MyComponent = MyComponent;\nvar CustomEvents = /** @class */ (function () {\n    function CustomEvents() {\n    }\n    CustomEvents = __decorate([\n        index_1.Component({\n            element: 'CustomEvents',\n            template: \"\\n<div>\\n    <p>Custom Events</p>\\n    <MyComponent (myCustomEvent)=\\\"alert($event)\\\"></MyComponent>\\n</div>\"\n        })\n    ], CustomEvents);\n    return CustomEvents;\n}());\nexports.CustomEvents = CustomEvents;\n\n\n//# sourceURL=webpack:///./samples/CustomEvents.ts?");

/***/ }),

/***/ "./samples/Events.ts":
/*!***************************!*\
  !*** ./samples/Events.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Events = /** @class */ (function () {\n    function Events() {\n        this.count = 0;\n    }\n    Events.prototype.increment = function () {\n        this.count++;\n    };\n    Events.prototype.log = function () {\n        console.log('mouseover');\n    };\n    __decorate([\n        index_1.Ref\n    ], Events.prototype, \"login\");\n    Events = __decorate([\n        index_1.Component({\n            element: 'Events',\n            template: \"\\n<div>\\n    <p>Clicks counter: {{ count }}</p>\\n    <p>{{ login.value }}</p>\\n    <input type=\\\"text\\\" #login (input)=\\\"increment()\\\">\\n    <button (click)=\\\"increment()\\\" (mouseover)=\\\"log()\\\">click</button>\\n</div>\"\n        })\n    ], Events);\n    return Events;\n}());\nexports.Events = Events;\n\n\n//# sourceURL=webpack:///./samples/Events.ts?");

/***/ }),

/***/ "./samples/InnerLoops.ts":
/*!*******************************!*\
  !*** ./samples/InnerLoops.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar InnerLoops = /** @class */ (function () {\n    function InnerLoops() {\n        this.activeSkill = '';\n        this.items = [\n            { name: 'John', skills: ['javascript', 'java'] },\n            { name: 'Adam', skills: ['python', 'ruby', 'html'] }\n        ];\n    }\n    InnerLoops.prototype.setActive = function (skill) {\n        this.activeSkill = skill;\n    };\n    InnerLoops = __decorate([\n        index_1.Component({\n            element: 'InnerLoops',\n            template: \"\\n<div>\\n    <p>Active skill: <strong>{{ activeSkill }}</strong></p>\\n    <ul>\\n        <li *for=\\\"item in items\\\">\\n            <span>{{ item.name }} skills:</span><button *for=\\\"skill in item.skills\\\" (click)=\\\"setActive(skill)\\\">{{ skill }}</button>\\n            <SimpleText></SimpleText>\\n        </li>\\n    </ul>\\n</div>\"\n        })\n    ], InnerLoops);\n    return InnerLoops;\n}());\nexports.InnerLoops = InnerLoops;\n\n\n//# sourceURL=webpack:///./samples/InnerLoops.ts?");

/***/ }),

/***/ "./samples/Lifecycle.ts":
/*!******************************!*\
  !*** ./samples/Lifecycle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Lifecycle = /** @class */ (function () {\n    function Lifecycle() {\n        this.count = 0;\n    }\n    Lifecycle.prototype.initialize = function () {\n        var _this = this;\n        setInterval(function () {\n            _this.increment();\n        }, 1000);\n    };\n    Lifecycle.prototype.increment = function () {\n        this.count++;\n    };\n    Lifecycle = __decorate([\n        index_1.Component({\n            element: 'Lifecycle',\n            template: \"<p>Value: {{ count }}</p>\"\n        })\n    ], Lifecycle);\n    return Lifecycle;\n}());\nexports.Lifecycle = Lifecycle;\n\n\n//# sourceURL=webpack:///./samples/Lifecycle.ts?");

/***/ }),

/***/ "./samples/Loops.ts":
/*!**************************!*\
  !*** ./samples/Loops.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Loops = /** @class */ (function () {\n    function Loops() {\n        this.items = ['javascript', 'python', 'ruby'];\n    }\n    Loops = __decorate([\n        index_1.Component({\n            element: 'Loops',\n            template: \"\\n<ul>\\n    <li *for=\\\"item in items\\\">\\n        {{ item }}\\n    </li>\\n</ul>\"\n        })\n    ], Loops);\n    return Loops;\n}());\nexports.Loops = Loops;\n\n\n//# sourceURL=webpack:///./samples/Loops.ts?");

/***/ }),

/***/ "./samples/Props.ts":
/*!**************************!*\
  !*** ./samples/Props.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar Props = /** @class */ (function () {\n    function Props() {\n    }\n    __decorate([\n        index_1.Input\n    ], Props.prototype, \"items\");\n    __decorate([\n        index_1.Input\n    ], Props.prototype, \"title\");\n    Props = __decorate([\n        index_1.Component({\n            element: 'Props',\n            template: \"\\n<div>\\n    <p>{{ title }}</p>\\n    <ul>\\n        <li *for=\\\"item in items\\\">{{ item }}</li>\\n    </ul>\\n</div>\"\n        })\n    ], Props);\n    return Props;\n}());\nexports.Props = Props;\n\n\n//# sourceURL=webpack:///./samples/Props.ts?");

/***/ }),

/***/ "./samples/SimpleText.ts":
/*!*******************************!*\
  !*** ./samples/SimpleText.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar SimpleText = /** @class */ (function () {\n    function SimpleText() {\n        this.text = 'Simple Text';\n    }\n    SimpleText = __decorate([\n        index_1.Component({\n            element: 'SimpleText',\n            template: \"<p>{{ text }}</p>\"\n        })\n    ], SimpleText);\n    return SimpleText;\n}());\nexports.SimpleText = SimpleText;\n\n\n//# sourceURL=webpack:///./samples/SimpleText.ts?");

/***/ }),

/***/ "./samples/TodoList.ts":
/*!*****************************!*\
  !*** ./samples/TodoList.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nvar TodoList = /** @class */ (function () {\n    function TodoList() {\n        this.items = [\n            { name: 'Improve Asic', done: false }\n        ];\n    }\n    TodoList.prototype.addItem = function () {\n        this.items.push({ name: this.input.value, done: false });\n    };\n    TodoList.prototype.removeItem = function (item) {\n        this.items.splice(this.items.indexOf(item), 1);\n    };\n    __decorate([\n        index_1.Input\n    ], TodoList.prototype, \"title\");\n    __decorate([\n        index_1.Ref\n    ], TodoList.prototype, \"input\");\n    TodoList = __decorate([\n        index_1.Component({\n            element: 'TodoList',\n            template: \"\\n<div>\\n    <p>{{ title }}</p>\\n    <input type=\\\"text\\\" #input>\\n    <button (click)=\\\"addItem()\\\">Add</button>\\n    <ul>\\n        <li *for=\\\"item in items\\\">\\n            <button (click)=\\\"removeItem(item)\\\">remove</button>{{ item.name }}\\n        </li>\\n    </ul>\\n    <SimpleText></SimpleText>\\n</div>\"\n        })\n    ], TodoList);\n    return TodoList;\n}());\nexports.TodoList = TodoList;\n\n\n//# sourceURL=webpack:///./samples/TodoList.ts?");

/***/ }),

/***/ "./samples/index.ts":
/*!**************************!*\
  !*** ./samples/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar BasicUsage_1 = __webpack_require__(/*! ./BasicUsage */ \"./samples/BasicUsage.ts\");\nexports.BasicUsage = BasicUsage_1.BasicUsage;\nvar Props_1 = __webpack_require__(/*! ./Props */ \"./samples/Props.ts\");\nexports.Props = Props_1.Props;\nvar ComplexComponent_1 = __webpack_require__(/*! ./ComplexComponent */ \"./samples/ComplexComponent.ts\");\nexports.ComplexComponent = ComplexComponent_1.ComplexComponent;\nvar Events_1 = __webpack_require__(/*! ./Events */ \"./samples/Events.ts\");\nexports.Events = Events_1.Events;\nvar CustomEvents_1 = __webpack_require__(/*! ./CustomEvents */ \"./samples/CustomEvents.ts\");\nexports.CustomEvents = CustomEvents_1.CustomEvents;\nvar InnerLoops_1 = __webpack_require__(/*! ./InnerLoops */ \"./samples/InnerLoops.ts\");\nexports.InnerLoops = InnerLoops_1.InnerLoops;\nvar Lifecycle_1 = __webpack_require__(/*! ./Lifecycle */ \"./samples/Lifecycle.ts\");\nexports.Lifecycle = Lifecycle_1.Lifecycle;\nvar Loops_1 = __webpack_require__(/*! ./Loops */ \"./samples/Loops.ts\");\nexports.Loops = Loops_1.Loops;\nvar SimpleText_1 = __webpack_require__(/*! ./SimpleText */ \"./samples/SimpleText.ts\");\nexports.SimpleText = SimpleText_1.SimpleText;\nvar TodoList_1 = __webpack_require__(/*! ./TodoList */ \"./samples/TodoList.ts\");\nexports.TodoList = TodoList_1.TodoList;\n\n\n//# sourceURL=webpack:///./samples/index.ts?");

/***/ }),

/***/ "./src/decorators.js":
/*!***************************!*\
  !*** ./src/decorators.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Component = Component;\nexports.Input = Input;\nexports.Ref = Ref;\nexports.Output = Output;\n\nvar _services = __webpack_require__(/*! ./services */ \"./src/services.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction Component(_ref) {\n  var template = _ref.template,\n      element = _ref.element;\n  return function (target) {\n    if (_services.$components[element]) {\n      _services.$components[element] = _objectSpread({}, _services.$components[element], {\n        target: target,\n        template: template\n      });\n    } else {\n      _services.$components[element] = {\n        target: target,\n        template: template\n      };\n    }\n  };\n}\n\nfunction Input(target, property) {\n  if (!target.constructor.props) {\n    target.constructor.props = [];\n  }\n\n  target.constructor.props.push(property);\n}\n\nfunction Ref(target, property) {}\n\nfunction Output(target, property) {\n  if (!target.constructor.outputs) {\n    target.constructor.outputs = [];\n  }\n\n  target.constructor.outputs.push(property);\n}\n\n//# sourceURL=webpack:///./src/decorators.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.$replaceEvents = $replaceEvents;\nexports.$replaceRefs = $replaceRefs;\nexports.$replaceInterpolations = $replaceInterpolations;\nexports.$replaceFor = $replaceFor;\nexports.$replicateFor = $replicateFor;\nexports.$transform = $transform;\nexports.$render = $render;\nexports.$bindRefs = $bindRefs;\nexports.$renderInnerComponents = $renderInnerComponents;\nexports.$bindEvents = $bindEvents;\nexports.$interpolateExpressions = $interpolateExpressions;\nexports.$applyProps = $applyProps;\nexports.$applyOutputs = $applyOutputs;\nexports.$initialize = $initialize;\nexports.$exec = $exec;\nexports.$bootstrap = $bootstrap;\n\nvar _services = __webpack_require__(/*! ./services */ \"./src/services.js\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Replaces '(click)=\"foo()\"' with 'asic-event=\"click\" asic-event-expression=\"foo()\"'\n * And puts event name to $events variable\n * @param {string} template\n */\nfunction $replaceEvents(template, element) {\n  var eventRe = /(?:\\()(\\S+?)(?:\\)=)/g;\n\n  if (!element.$asicEvents) {\n    element.$asicEvents = [];\n  }\n\n  return template.replace(eventRe, function (match, eventName) {\n    _services.$events[eventName] = true;\n    element.$asicEvents.push(eventName);\n    return \"asic-event-\".concat(eventName, \"=\");\n  });\n}\n\nfunction $replaceRefs(template) {\n  return template.replace(/#([A-Za-z])+/g, function (match) {\n    var refName = match.replace('#', '');\n    return \"asic-ref=\".concat(refName);\n  });\n}\n/**\n * Replaces '{{ paramName }}' with '<span asic-bind-expression=\"paramName\"></span>'\n * @param {string} template\n */\n\n\nfunction $replaceInterpolations(template) {\n  var re = /(?:\\{\\{)(.*?)(?:\\}\\})/g;\n  template = template.replace(re, function (fullMatch, match) {\n    return \"<span asic-bind-expression=\\\"\".concat(match, \"\\\"></span>\");\n  });\n  var div = document.createElement('div');\n  div.innerHTML = template;\n  return div.innerHTML;\n}\n/**\n * Replaces '*for=item in items' with 'asic-for=item' 'asic-for-in=items'\n * @param {string} template\n */\n\n\nfunction $replaceFor(template) {\n  var forRe = /\\*for=\".*?\"/g;\n  template = template.replace(forRe, function (match) {\n    var name = match.match(/(?:\\*for=\")(.*)(?: in)/)[1];\n    var data = match.match(/(?: in )(.*)(?:\")/)[1];\n    return \"asic-for=\\\"\".concat(name, \"\\\" asic-for-data=\\\"\").concat(data, \"\\\" asic-for-todo=\\\"true\\\" data-asic-index\");\n  });\n  var el = document.createElement('div');\n  el.innerHTML = template;\n  var forEl = el.querySelector('[asic-for]');\n\n  if (forEl) {\n    var commentEl = document.createComment(forEl.outerHTML);\n    forEl.replaceWith(commentEl);\n    return el.innerHTML;\n  } else {\n    return template;\n  }\n}\n\nfunction getComments(el) {\n  var arr = [];\n\n  for (var i = 0; i < el.childNodes.length; i++) {\n    var node = el.childNodes[i];\n\n    if (node.nodeType === Node.COMMENT_NODE) {\n      arr.push(node);\n    } else {\n      arr.push.apply(arr, getComments(node));\n    }\n  }\n\n  return arr;\n}\n/**\n * Replicates iterateble parts.\n * @param template\n */\n\n\nfunction $replicateFor(template, context) {\n  var div = document.createElement('div');\n  div.innerHTML = template;\n  var element = div.querySelector('[asic-for][asic-for-todo]');\n\n  if (!element) {\n    return template;\n  }\n\n  var name = element.getAttribute('asic-for');\n  var data = element.getAttribute('asic-for-data');\n  var outerHTML = element.outerHTML;\n  element.removeAttribute('asic-for-todo');\n  var resultHTML = '';\n\n  var _loop = function _loop(index) {\n    var partHTML = element.outerHTML.replace(RegExp(\"\\\\b\".concat(name, \"\\\\b\"), 'g'), function (match) {\n      return \"\".concat(data, \"[\").concat(index, \"]\");\n    });\n    resultHTML += partHTML;\n  };\n\n  for (var index = 0; index < $exec('return ' + data, context).length; index++) {\n    _loop(index);\n  }\n\n  template = template.replace(outerHTML, resultHTML);\n  return $replicateFor(template, context);\n}\n/**\n * Makes template transformations.\n * @param template\n */\n\n\nfunction $transform(template, context, element) {\n  template = $normalize(template);\n  template = $replaceEvents(template, element);\n  template = $replaceRefs(template);\n  template = $replaceFor(template); // template = $replicateFor(template, context);\n\n  template = $replaceInterpolations(template);\n\n  if (element) {\n    element.innerHTML = template;\n  }\n\n  return template;\n}\n/**\n * Replaces '<SomeComponent></SomeComponent>' with '<somecomponent></somecomponent>'\n * @param template\n */\n\n\nfunction $normalize(template) {\n  for (var componentName in _services.$components) {\n    template = template.replace(RegExp(\"<\".concat(componentName), 'g'), \"<\".concat(componentName.toLowerCase()));\n    template = template.replace(RegExp(\"</\".concat(componentName), 'g'), \"</\".concat(componentName.toLowerCase()));\n  }\n\n  return template;\n}\n\nfunction $render(element, component, parentProxy) {\n  if (element.innerHTML) {} else {\n    var template = _services.$components[component].template;\n    var Component = _services.$components[component].target;\n    var props = Component.props || [];\n    var outputs = Component.outputs || [];\n    var cmp = new Component();\n    var proxy = new Proxy(cmp, {\n      set: function set(target, property, value) {\n        target[property] = value;\n        $interpolateExpressions(element, proxy);\n        return true;\n      }\n    });\n    Object.getOwnPropertyNames(proxy).forEach(function (property) {\n      // is Array\n      if (proxy[property].splice) {\n        ['pop', 'push', 'reverse', 'shift', 'unshift', 'sort', 'splice'].forEach(function (methodName) {\n          proxy[property][methodName] = new Proxy(proxy[property][methodName], {\n            apply: function apply(target, thisArg, argumentsList) {\n              var result = target.apply(thisArg, argumentsList);\n              $interpolateExpressions(element, proxy);\n              return result;\n            }\n          });\n        });\n      }\n    });\n    $applyProps(element, props, cmp, parentProxy);\n    $applyOutputs(element, outputs, cmp, parentProxy);\n    $transform(template, cmp, element);\n    $bindRefs(element, cmp);\n    $initialize(proxy);\n    $interpolateExpressions(element, proxy);\n  }\n}\n\nfunction $bindRefs(element, context) {\n  element.querySelectorAll('[asic-ref]').forEach(function (el) {\n    var refName = el.getAttribute('asic-ref');\n    context[refName] = el;\n  });\n}\n\nfunction $renderInnerComponents(element) {\n  var _loop2 = function _loop2(componentName) {\n    element.querySelectorAll(componentName).forEach(function (el) {\n      $render(el, componentName);\n    });\n  };\n\n  for (var componentName in _services.$components) {\n    _loop2(componentName);\n  }\n}\n\nfunction $bindEvents(element, context) {\n  element.$asicEvents.forEach(function (eventName) {\n    element.querySelectorAll(\"[asic-event-\".concat(eventName, \"]\")).forEach(function (el) {\n      var expression = el.getAttribute(\"asic-event-\".concat(eventName));\n\n      if (el.$asic) {\n        el.$asic.events = _objectSpread({}, el.$asic.events, _defineProperty({}, eventName, expression));\n      } else {\n        el.$asic = {\n          events: _defineProperty({}, eventName, expression),\n          context: context\n        };\n      }\n    });\n  });\n}\n\nfunction $interpolateExpressions(element, proxy) {\n  $interpolateForExpressions(element, proxy);\n\n  try {\n    element.querySelectorAll('[asic-bind-expression]').forEach(function (el) {\n      var expression = el.getAttribute('asic-bind-expression');\n      el.innerHTML = $exec('return ' + expression, proxy);\n    });\n  } catch (err) {// console.log(err);\n  }\n\n  $bindEvents(element, proxy);\n  $renderInnerComponents(element);\n  $cleanUp();\n}\n\nfunction $interpolateForExpressions(element, proxy) {\n  element.querySelectorAll('[data-asic-index]').forEach(function (el) {\n    el.remove();\n  });\n  var commentEl = getComments(element).find(function (commentNode) {\n    return commentNode.textContent.match('asic-for');\n  });\n\n  if (commentEl) {\n    var template = $replicateFor(commentEl.textContent, proxy);\n    var div = document.createElement('div');\n    div.innerHTML = template;\n    commentEl.replaceWith.apply(commentEl, [commentEl].concat(_toConsumableArray(div.childNodes)));\n  }\n}\n\nfunction $applyProps(element, props, context, parentContext) {\n  props.map(function (param) {\n    var value = element.getAttribute(param);\n    var expression = element.getAttribute(\"[\".concat(param, \"]\"));\n\n    if (value !== null) {\n      context[param] = value;\n    } else if (expression !== null) {\n      context[param] = $exec('return ' + expression, parentContext);\n    }\n  });\n}\n\nfunction $applyOutputs(target, outputs, context, parentContext) {\n  outputs.map(function (eventName) {\n    context[eventName] = function () {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      $exec(\"[$event] = arguments; \" + target.$asic.events[eventName], target.$asic.context, args);\n    };\n  });\n}\n\nfunction $initialize(proxy) {\n  if (proxy.initialize) {\n    proxy.initialize();\n  }\n}\n/**\n * Evaluates an expression in provided context.\n * @param { string } expression\n * @param { Object } context\n */\n\n\nfunction $exec(expression, context, args) {\n  if (!context) context = window;\n  var parts = expression.match(/[a-zA-Z0-9_]+/g);\n  parts.forEach(function (name) {\n    if (name in context) {\n      expression = expression.replace(RegExp(\"\\\\b\".concat(name, \"\\\\b\")), function (match) {\n        return 'this.' + match;\n      });\n    }\n  });\n  return Function(expression).apply(context, args);\n}\n/**\n * Cleans asic related things form markup\n */\n\n\nfunction $cleanUp() {\n  ['asic-ref', // 'asic-bind-expression',\n  'asic-for', 'asic-for-data'].forEach(function (value) {\n    document.querySelectorAll(\"[\".concat(value, \"]\")).forEach(function (element) {\n      element.removeAttribute(value);\n    });\n  });\n\n  var _loop3 = function _loop3(eventName) {\n    document.querySelectorAll(\"[asic-event-\".concat(eventName, \"]\")).forEach(function (element) {\n      element.removeAttribute(\"asic-event-\".concat(eventName));\n    });\n  };\n\n  for (var eventName in _services.$events) {\n    _loop3(eventName);\n  }\n}\n/**\n * Bootstraps an application.\n */\n\n\nfunction $bootstrap() {\n  window.addEventListener('load', function () {\n    $renderInnerComponents(document);\n\n    var _loop4 = function _loop4(eventName) {\n      document.addEventListener(eventName, function (event) {\n        var target = arguments[0].target;\n\n        if (target.$asic && target.$asic.events[eventName]) {\n          $exec(target.$asic.events[eventName], target.$asic.context);\n        } else if (target.hasAttribute('asic-bind-expression') && target.parentElement.$asic && target.parentElement.$asic.events[eventName]) {\n          $exec(target.parentElement.$asic.events[eventName], target.parentElement.$asic.context);\n        }\n      });\n    };\n\n    for (var eventName in _services.$events) {\n      _loop4(eventName);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Component\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Component;\n  }\n});\nObject.defineProperty(exports, \"Input\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Input;\n  }\n});\nObject.defineProperty(exports, \"Output\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Output;\n  }\n});\nObject.defineProperty(exports, \"Ref\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Ref;\n  }\n});\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./src/decorators.js\");\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\nif (window) {\n  window.Component = _decorators.Component;\n  window.Input = _decorators.Input;\n  window.Output = _decorators.Output;\n  window.Ref = _decorators.Ref;\n}\n\n(0, _functions.$bootstrap)();\n\n//# sourceURL=webpack:///./src/index.js?");

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