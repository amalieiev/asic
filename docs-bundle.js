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

/***/ "./docs/Footer.js":
/*!************************!*\
  !*** ./docs/Footer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Footer = (_dec = Component({\n  template: \"\\n<div>\\n    <h3>\\n        <a id=\\\"authors-and-contributors\\\" class=\\\"anchor\\\" href=\\\"#authors-and-contributors\\\" aria-hidden=\\\"true\\\"><span\\n                    class=\\\"octicon octicon-link\\\"></span></a>Authors and Contributors</h3>\\n\\n    <p>You can <a href=\\\"https://github.com/blog/821\\\" class=\\\"user-mention\\\">@mention</a> a GitHub username to generate a\\n        link to their profile. The resulting <code>&lt;a&gt;</code> element will link to the contributor's GitHub\\n        Profile. For example: In 2007, Chris Wanstrath (<a href=\\\"https://github.com/defunkt\\\" class=\\\"user-mention\\\">@defunkt</a>),\\n        PJ Hyett (<a href=\\\"https://github.com/pjhyett\\\" class=\\\"user-mention\\\">@pjhyett</a>), and Tom Preston-Werner (<a\\n                href=\\\"https://github.com/mojombo\\\" class=\\\"user-mention\\\">@mojombo</a>) founded GitHub.</p>\\n\\n    <h3>\\n        <a id=\\\"support-or-contact\\\" class=\\\"anchor\\\" href=\\\"#support-or-contact\\\" aria-hidden=\\\"true\\\"><span\\n                    class=\\\"octicon octicon-link\\\"></span></a>Support or Contact</h3>\\n\\n    <p>Having trouble with Pages? Check out the documentation at <a href=\\\"https://help.github.com/pages\\\">https://help.github.com/pages</a>\\n        or contact <a href=\\\"mailto:support@github.com\\\">support@github.com</a> and we\\u2019ll help you sort it out.</p>\\n\\n    <footer class=\\\"site-footer\\\">\\n        <span class=\\\"site-footer-owner\\\"><a href=\\\"https://github.com/amalieiev/asic\\\">Asic</a> is maintained by <a\\n                    href=\\\"https://github.com/amalieiev\\\">amalieiev</a>.</span>\\n\\n        <span class=\\\"site-footer-credits\\\">This page was generated by <a href=\\\"https://pages.github.com\\\">GitHub Pages</a> using the <a\\n                    href=\\\"https://github.com/jasonlong/cayman-theme\\\">Cayman theme</a> by <a\\n                    href=\\\"https://twitter.com/jasonlong\\\">Jason Long</a>.</span>\\n    </footer>\\n</div>\\n    \"\n}), _dec(_class = function Footer() {\n  _classCallCheck(this, Footer);\n}) || _class);\n\n//# sourceURL=webpack:///./docs/Footer.js?");

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./docs/Footer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./docs/Footer.js */\"./docs/Footer.js\");\n\n\n//# sourceURL=webpack:///multi_./docs/Footer.js?");

/***/ })

/******/ });