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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar $components = exports.$components = {};\nvar $events = exports.$events = {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmljZXMuanM/ZmM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgJGNvbXBvbmVudHMgPSB7fVxuZXhwb3J0IGNvbnN0ICRldmVudHMgPSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmljZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Component = undefined;\n\nvar _decorators = __webpack_require__(3);\n\nvar _functions = __webpack_require__(4);\n\nif (window) {\n    window.Component = _decorators.Component;\n}\n\n(0, _functions.$bootstrap)();\n\nexports.Component = _decorators.Component;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2RlY29yYXRvcnMnXG5pbXBvcnQgeyAkYm9vdHN0cmFwIH0gZnJvbSAnLi9mdW5jdGlvbnMnXG5cbmlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuQ29tcG9uZW50ID0gQ29tcG9uZW50XG59XG5cbiRib290c3RyYXAoKVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Component = Component;\n\nvar _services = __webpack_require__(0);\n\nfunction Component(_ref) {\n    var template = _ref.template;\n\n    return function (target) {\n        _services.$components[target.name] = { target: target, template: template };\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGVjb3JhdG9ycy5qcz83ZTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICRjb21wb25lbnRzIH0gZnJvbSAnLi9zZXJ2aWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudCh7dGVtcGxhdGV9KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgJGNvbXBvbmVudHNbdGFyZ2V0Lm5hbWVdID0ge3RhcmdldCwgdGVtcGxhdGV9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGVjb3JhdG9ycy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.$replaceEvents = $replaceEvents;\nexports.$getOutputName = $getOutputName;\nexports.$getOutputExpression = $getOutputExpression;\nexports.$replace = $replace;\nexports.$render = $render;\nexports.$getExpressionFromMatch = $getExpressionFromMatch;\nexports.$exec = $exec;\nexports.$bootstrap = $bootstrap;\n\nvar _services = __webpack_require__(0);\n\nfunction $replaceEvents(template) {\n    var eventRe = /\\(.+?\\)=\".*?\"/g;\n\n    return template.replace(eventRe, function (match) {\n        var eventName = $getOutputName(match);\n        console.log(match);\n        console.log($getOutputName(match));\n        console.log($getOutputExpression(match));\n\n        _services.$events[eventName] = true;\n\n        return '';\n    });\n}\n\nfunction $getOutputName(expression) {\n    var outputRe = /\\(.+?\\)/;\n    var parenthesesRe = /[(,)]/g;\n\n    return expression.match(outputRe)[0].replace(parenthesesRe, '');\n}\n\nfunction $getOutputExpression(expression) {\n    var expressionRe = /\".+?\"/;\n\n    return expression.match(expressionRe)[0].replace(/^\"/, '').replace(/\"$/, '');\n}\n\nfunction $replace(template, data) {\n    var re = /\\{\\{.*?\\}\\}/g;\n\n    return template.replace(re, function (match) {\n        var expression = $getExpressionFromMatch(match);\n\n        return $exec(expression, data);\n    });\n}\n\nfunction $render(element, component) {\n    if (element.innerHTML) {} else {\n        var template = _services.$components[component].template;\n        var Component = _services.$components[component].target;\n        var html = $replace(template, new Component());\n\n        element.innerHTML = $replaceEvents(html);\n\n        var _loop = function _loop(key) {\n            element.querySelectorAll(key).forEach(function (el) {\n                $render(el, key);\n            });\n        };\n\n        for (var key in _services.$components) {\n            _loop(key);\n        }\n    }\n}\n\nfunction $getExpressionFromMatch(match) {\n    var startRe = /\\{\\{/;\n    var endRe = /\\}\\}/;\n\n    return match.replace(startRe, '').replace(endRe, '').trim();\n}\n\nfunction $exec(expression, context) {\n    for (var key in context) {\n        if (context[key].toUpperCase) {\n            Function(key + ' = \"' + context[key] + '\"')();\n        } else {\n            Function(key + ' = ' + context[key])();\n        }\n    }\n\n    return Function('return ' + expression)();\n}\n\nfunction $bootstrap() {\n    window.addEventListener('load', function () {\n        var _loop2 = function _loop2(key) {\n            var component = _services.$components[key];\n            document.querySelectorAll(component.target.name).forEach(function (element) {\n                $render(element, component.target.name);\n            });\n        };\n\n        for (var key in _services.$components) {\n            _loop2(key);\n        }\n\n        for (var eventName in _services.$events) {\n            document.addEventListener(eventName, function () {\n                console.log(arguments[0].target);\n            });\n        }\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZnVuY3Rpb25zLmpzPzBjZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgJGNvbXBvbmVudHMgfSBmcm9tICcuL3NlcnZpY2VzJ1xuaW1wb3J0IHsgJGV2ZW50cyB9IGZyb20gJy4vc2VydmljZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiAkcmVwbGFjZUV2ZW50cyh0ZW1wbGF0ZSkge1xuICAgIGNvbnN0IGV2ZW50UmUgPSAvXFwoLis/XFwpPVwiLio/XCIvZ1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoZXZlbnRSZSwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9ICRnZXRPdXRwdXROYW1lKG1hdGNoKVxuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaClcbiAgICAgICAgY29uc29sZS5sb2coJGdldE91dHB1dE5hbWUobWF0Y2gpKVxuICAgICAgICBjb25zb2xlLmxvZygkZ2V0T3V0cHV0RXhwcmVzc2lvbihtYXRjaCkpXG5cbiAgICAgICAgJGV2ZW50c1tldmVudE5hbWVdID0gdHJ1ZVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0T3V0cHV0TmFtZShleHByZXNzaW9uKSB7XG4gICAgY29uc3Qgb3V0cHV0UmUgPSAvXFwoLis/XFwpL1xuICAgIGNvbnN0IHBhcmVudGhlc2VzUmUgPSAvWygsKV0vZ1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb24ubWF0Y2gob3V0cHV0UmUpWzBdLnJlcGxhY2UocGFyZW50aGVzZXNSZSwgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0T3V0cHV0RXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblJlID0gL1wiLis/XCIvXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbi5tYXRjaChleHByZXNzaW9uUmUpWzBdLnJlcGxhY2UoL15cIi8sICcnKS5yZXBsYWNlKC9cIiQvLCAnJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRyZXBsYWNlKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgY29uc3QgcmUgPSAvXFx7XFx7Lio/XFx9XFx9L2dcblxuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IGV4cHJlc3Npb24gPSAkZ2V0RXhwcmVzc2lvbkZyb21NYXRjaChtYXRjaClcblxuICAgICAgICByZXR1cm4gJGV4ZWMoZXhwcmVzc2lvbiwgZGF0YSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJHJlbmRlcihlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5pbm5lckhUTUwpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJGNvbXBvbmVudHNbY29tcG9uZW50XS50ZW1wbGF0ZVxuICAgICAgICBjb25zdCBDb21wb25lbnQgPSAkY29tcG9uZW50c1tjb21wb25lbnRdLnRhcmdldFxuICAgICAgICBjb25zdCBodG1sID0gJHJlcGxhY2UodGVtcGxhdGUsIG5ldyBDb21wb25lbnQoKSlcblxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICRyZXBsYWNlRXZlbnRzKGh0bWwpXG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluICRjb21wb25lbnRzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoa2V5KS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAkcmVuZGVyKGVsLCBrZXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGdldEV4cHJlc3Npb25Gcm9tTWF0Y2gobWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFJlID0gL1xce1xcey9cbiAgICBjb25zdCBlbmRSZSA9IC9cXH1cXH0vXG5cbiAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgLnJlcGxhY2Uoc3RhcnRSZSwgJycpXG4gICAgICAgIC5yZXBsYWNlKGVuZFJlLCAnJylcbiAgICAgICAgLnRyaW0oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGV4ZWMoZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0W2tleV0udG9VcHBlckNhc2UpIHtcbiAgICAgICAgICAgIEZ1bmN0aW9uKGAke2tleX0gPSBcIiR7Y29udGV4dFtrZXldfVwiYCkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRnVuY3Rpb24oYCR7a2V5fSA9ICR7Y29udGV4dFtrZXldfWApKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuICcgKyBleHByZXNzaW9uKSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkYm9vdHN0cmFwKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gJGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSAkY29tcG9uZW50c1trZXldXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbXBvbmVudC50YXJnZXQubmFtZSkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAkcmVuZGVyKGVsZW1lbnQsIGNvbXBvbmVudC50YXJnZXQubmFtZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBldmVudE5hbWUgaW4gJGV2ZW50cykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1swXS50YXJnZXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZnVuY3Rpb25zLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0FBZUE7QUFPQTtBQU1BO0FBVUE7QUFrQkE7QUFVQTtBQVlBO0FBQ0E7QUFsRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBTUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);