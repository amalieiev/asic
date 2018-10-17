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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/decorators.js":
/*!***************************!*\
  !*** ./src/decorators.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Component = Component;\nexports.Attr = Attr;\nexports.Ref = Ref;\n\nvar _services = __webpack_require__(/*! ./services */ \"./src/services.js\");\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction Component(_ref) {\n  var template = _ref.template,\n      element = _ref.element;\n  return function (target) {\n    if (_services.$components[element]) {\n      _services.$components[element] = _objectSpread({}, _services.$components[element], {\n        target: target,\n        template: template\n      });\n    } else {\n      _services.$components[element] = {\n        target: target,\n        template: template\n      };\n    }\n  };\n}\n\nfunction Attr(target, property) {\n  if (!target.constructor.props) {\n    target.constructor.props = [];\n  }\n\n  target.constructor.props.push(property);\n}\n\nfunction Ref(target, property) {}\n\n//# sourceURL=webpack:///./src/decorators.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.$replaceEvents = $replaceEvents;\nexports.$replaceRefs = $replaceRefs;\nexports.$replaceInterpolations = $replaceInterpolations;\nexports.$replaceFor = $replaceFor;\nexports.$replicateFor = $replicateFor;\nexports.$transform = $transform;\nexports.$render = $render;\nexports.$bindRefs = $bindRefs;\nexports.$renderInnerComponents = $renderInnerComponents;\nexports.$bindEvents = $bindEvents;\nexports.$interpolateExpressions = $interpolateExpressions;\nexports.$applyProps = $applyProps;\nexports.$initialize = $initialize;\nexports.$exec = $exec;\nexports.$bootstrap = $bootstrap;\n\nvar _services = __webpack_require__(/*! ./services */ \"./src/services.js\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Replaces '(click)=\"foo()\"' with 'asic-event=\"click\" asic-event-expression=\"foo()\"'\n * And puts event name to $events variable\n * @param {string} template\n */\nfunction $replaceEvents(template) {\n  var eventRe = /(?:\\()(.+?)(?:\\)=)/g;\n  return template.replace(eventRe, function (match, eventName) {\n    _services.$events[eventName] = true;\n    return \"asic-event=\\\"\".concat(eventName, \"\\\" asic-event-expression=\");\n  });\n}\n\nfunction $replaceRefs(template) {\n  return template.replace(/#ref/g, function (match, refName) {\n    return \"asic-ref\";\n  });\n}\n/**\n * Replaces '{{ paramName }}' with '<span asic-bind-expression=\"paramName\"></span>'\n * @param {string} template\n */\n\n\nfunction $replaceInterpolations(template) {\n  var re = /(?:\\{\\{)(.*?)(?:\\}\\})/g;\n  template = template.replace(re, function (fullMatch, match) {\n    return \"<span asic-bind-expression=\\\"\".concat(match, \"\\\"></span>\");\n  });\n  var div = document.createElement('div');\n  div.innerHTML = template;\n  return div.innerHTML;\n}\n/**\n * Replaces '*for=item in items' with 'asic-for=item' 'asic-for-in=items'\n * @param {string} template\n */\n\n\nfunction $replaceFor(template) {\n  var forRe = /\\*for=\".*?\"/g;\n  template = template.replace(forRe, function (match) {\n    var name = match.match(/(?:\\*for=\")(.*)(?: in)/)[1];\n    var data = match.match(/(?: in )(.*)(?:\")/)[1];\n    return \"asic-for=\\\"\".concat(name, \"\\\" asic-for-data=\\\"\").concat(data, \"\\\" asic-for-todo=\\\"true\\\" data-asic-index\");\n  });\n  var el = document.createElement('div');\n  el.innerHTML = template;\n  var forEl = el.querySelector('[asic-for]');\n\n  if (forEl) {\n    var commentEl = document.createComment(forEl.outerHTML);\n    forEl.replaceWith(commentEl);\n    return el.innerHTML;\n  } else {\n    return template;\n  }\n}\n\nfunction getComments(el) {\n  var arr = [];\n\n  for (var i = 0; i < el.childNodes.length; i++) {\n    var node = el.childNodes[i];\n\n    if (node.nodeType === Node.COMMENT_NODE) {\n      arr.push(node);\n    } else {\n      arr.push.apply(arr, getComments(node));\n    }\n  }\n\n  return arr;\n}\n/**\n * Replicates iterateble parts.\n * @param template\n */\n\n\nfunction $replicateFor(template, context) {\n  var div = document.createElement('div');\n  div.innerHTML = template;\n  var element = div.querySelector('[asic-for][asic-for-todo]');\n\n  if (!element) {\n    return template;\n  }\n\n  var name = element.getAttribute('asic-for');\n  var data = element.getAttribute('asic-for-data');\n  var outerHTML = element.outerHTML;\n  element.removeAttribute('asic-for-todo');\n  var resultHTML = '';\n\n  var _loop = function _loop(index) {\n    var partHTML = element.outerHTML.replace(RegExp(\"\\\\b\".concat(name, \"\\\\b\"), 'g'), function (match) {\n      return \"\".concat(data, \"[\").concat(index, \"]\");\n    });\n    resultHTML += partHTML;\n  };\n\n  for (var index = 0; index < $exec('return ' + data, context).length; index++) {\n    _loop(index);\n  }\n\n  template = template.replace(outerHTML, resultHTML);\n  return $replicateFor(template, context);\n}\n/**\n * Makes template transformations.\n * @param template\n */\n\n\nfunction $transform(template, context, element) {\n  template = $normalize(template);\n  template = $replaceEvents(template);\n  template = $replaceRefs(template);\n  template = $replaceFor(template); // template = $replicateFor(template, context);\n\n  template = $replaceInterpolations(template);\n\n  if (element) {\n    element.innerHTML = template;\n  }\n\n  return template;\n}\n/**\n * Replaces '<SomeComponent></SomeComponent>' with '<somecomponent></somecomponent>'\n * @param template\n */\n\n\nfunction $normalize(template) {\n  for (var componentName in _services.$components) {\n    template = template.replace(RegExp(\"<\".concat(componentName), 'g'), \"<\".concat(componentName.toLowerCase()));\n    template = template.replace(RegExp(\"</\".concat(componentName), 'g'), \"</\".concat(componentName.toLowerCase()));\n  }\n\n  return template;\n}\n\nfunction $render(element, component, parentProxy) {\n  if (element.innerHTML) {} else {\n    var template = _services.$components[component].template;\n    var Component = _services.$components[component].target;\n    var props = Component.props || [];\n    var cmp = new Component();\n    var proxy = new Proxy(cmp, {\n      set: function set(target, property, value) {\n        target[property] = value;\n        $interpolateExpressions(element, proxy);\n        return true;\n      }\n    });\n    Object.getOwnPropertyNames(proxy).forEach(function (property) {\n      // is Array\n      if (proxy[property].splice) {\n        ['pop', 'push', 'reverse', 'shift', 'unshift', 'sort', 'splice'].forEach(function (methodName) {\n          proxy[property][methodName] = new Proxy(proxy[property][methodName], {\n            apply: function apply(target, thisArg, argumentsList) {\n              var result = target.apply(thisArg, argumentsList);\n              $interpolateExpressions(element, proxy);\n              return result;\n            }\n          });\n        });\n      }\n    });\n    $applyProps(element, props, cmp, parentProxy);\n    $transform(template, cmp, element);\n    $bindRefs(element, cmp);\n    $initialize(proxy);\n    $interpolateExpressions(element, proxy);\n  }\n}\n\nfunction $bindRefs(element, context) {\n  element.querySelectorAll('[asic-ref]').forEach(function (el) {\n    var refName = el.getAttribute('asic-ref');\n    context[refName] = el;\n  });\n}\n\nfunction $renderInnerComponents(element) {\n  var _loop2 = function _loop2(componentName) {\n    element.querySelectorAll(componentName).forEach(function (el) {\n      $render(el, componentName);\n    });\n  };\n\n  for (var componentName in _services.$components) {\n    _loop2(componentName);\n  }\n}\n\nfunction $bindEvents(element, context) {\n  element.querySelectorAll('[asic-event]').forEach(function (el) {\n    var eventName = el.getAttribute('asic-event');\n    var expression = el.getAttribute('asic-event-expression');\n    el.$asic = {\n      events: _defineProperty({}, eventName, expression),\n      context: context\n    };\n  });\n}\n\nfunction $interpolateExpressions(element, proxy) {\n  $interpolateForExpressions(element, proxy);\n\n  try {\n    element.querySelectorAll('[asic-bind-expression]').forEach(function (el) {\n      var expression = el.getAttribute('asic-bind-expression');\n      el.innerHTML = $exec('return ' + expression, proxy);\n    });\n  } catch (err) {// console.log(err);\n  }\n\n  $bindEvents(element, proxy);\n  $renderInnerComponents(element);\n  $cleanUp();\n}\n\nfunction $interpolateForExpressions(element, proxy) {\n  element.querySelectorAll('[data-asic-index]').forEach(function (el) {\n    el.remove();\n  });\n  var commentEl = getComments(element).find(function (commentNode) {\n    return commentNode.textContent.match('asic-for');\n  });\n\n  if (commentEl) {\n    var template = $replicateFor(commentEl.textContent, proxy);\n    var div = document.createElement('div');\n    div.innerHTML = template;\n    commentEl.replaceWith.apply(commentEl, [commentEl].concat(_toConsumableArray(div.childNodes)));\n  }\n}\n\nfunction $applyProps(element, props, context, parentContext) {\n  props.map(function (param) {\n    var value = element.getAttribute(param);\n    var expression = element.getAttribute(\"[\".concat(param, \"]\"));\n\n    if (value !== null) {\n      context[param] = value;\n    } else if (expression !== null) {\n      context[param] = $exec('return ' + expression, parentContext);\n    }\n  });\n}\n\nfunction $initialize(proxy) {\n  if (proxy.initialize) {\n    proxy.initialize();\n  }\n}\n/**\n * Evaluates an expression in provided context.\n * @param { string } expression\n * @param { Object } context\n */\n\n\nfunction $exec(expression, context, args) {\n  if (!context) context = window;\n  var parts = expression.match(/[a-zA-Z0-9_]+/g);\n  parts.forEach(function (name) {\n    if (name in context) {\n      expression = expression.replace(RegExp(\"\\\\b\".concat(name, \"\\\\b\")), function (match) {\n        return 'this.' + match;\n      });\n    }\n  });\n  return Function(expression).apply(context, args);\n}\n/**\n * Cleans asic related things form markup\n */\n\n\nfunction $cleanUp() {\n  ['asic-event', 'asic-ref', 'asic-event-expression', // 'asic-bind-expression',\n  'asic-for', 'asic-for-data'].forEach(function (value) {\n    document.querySelectorAll(\"[\".concat(value, \"]\")).forEach(function (element) {\n      element.removeAttribute(value);\n    });\n  });\n}\n/**\n * Bootstraps an application.\n */\n\n\nfunction $bootstrap() {\n  window.addEventListener('load', function () {\n    $renderInnerComponents(document);\n\n    var _loop3 = function _loop3(eventName) {\n      document.addEventListener(eventName, function (event) {\n        var target = arguments[0].target;\n\n        if (target.$asic && target.$asic.events[eventName]) {\n          $exec(target.$asic.events[eventName], target.$asic.context);\n        } else if (target.hasAttribute('asic-bind-expression') && target.parentElement.$asic && target.parentElement.$asic.events[eventName]) {\n          $exec(target.parentElement.$asic.events[eventName], target.parentElement.$asic.context);\n        }\n      });\n    };\n\n    for (var eventName in _services.$events) {\n      _loop3(eventName);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Component\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Component;\n  }\n});\nObject.defineProperty(exports, \"Attr\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Attr;\n  }\n});\nObject.defineProperty(exports, \"Ref\", {\n  enumerable: true,\n  get: function get() {\n    return _decorators.Ref;\n  }\n});\n\nvar _decorators = __webpack_require__(/*! ./decorators */ \"./src/decorators.js\");\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\nif (window) {\n  window.Component = _decorators.Component;\n  window.Attr = _decorators.Attr;\n  window.Ref = _decorators.Ref;\n}\n\n(0, _functions.$bootstrap)();\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });