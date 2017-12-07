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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar $components = exports.$components = {};\nvar $events = exports.$events = {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmljZXMuanM/ZmM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgJGNvbXBvbmVudHMgPSB7fTtcbmV4cG9ydCBjb25zdCAkZXZlbnRzID0ge307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zZXJ2aWNlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Component = Component;\n\nvar _services = __webpack_require__(0);\n\nfunction Component(_ref) {\n    var template = _ref.template;\n\n    return function (target) {\n        _services.$components[target.name] = { target: target, template: template };\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGVjb3JhdG9ycy5qcz83ZTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICRjb21wb25lbnRzIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQoe3RlbXBsYXRlfSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICRjb21wb25lbnRzW3RhcmdldC5uYW1lXSA9IHt0YXJnZXQsIHRlbXBsYXRlfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kZWNvcmF0b3JzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.$replaceEvents = $replaceEvents;\nexports.$replaceInterpolations = $replaceInterpolations;\nexports.$replaceFor = $replaceFor;\nexports.$replicateFor = $replicateFor;\nexports.$transform = $transform;\nexports.$render = $render;\nexports.$exec = $exec;\nexports.$bootstrap = $bootstrap;\n\nvar _services = __webpack_require__(0);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Replaces '(click)=\"foo()\"' with 'asic-event=\"click\" asic-event-expression=\"foo()\"'\n * And puts event name to $events variable\n * @param {string} template\n */\nfunction $replaceEvents(template) {\n    var eventRe = /(?:\\()(.+?)(?:\\)=)/g;\n\n    return template.replace(eventRe, function (match, eventName) {\n\n        _services.$events[eventName] = true;\n\n        return 'asic-event=\"' + eventName + '\" asic-event-expression=';\n    });\n}\n\n/**\n * Replaces '{{ paramName }}' with '<span asic-bind-expression=\"paramName\"></span>'\n * @param {string} template\n */\nfunction $replaceInterpolations(template) {\n    var re = /(?:\\{\\{)(.*?)(?:\\}\\})/g;\n    template = template.replace(re, function (fullMatch, match) {\n        return '<span asic-bind-expression=\"' + match + '\"></span>';\n    });\n\n    var div = document.createElement('div');\n\n    div.innerHTML = template;\n\n    div.querySelectorAll('[asic-bind-expression]').forEach(function (element) {\n        if (element.parentElement.getAttribute('asic-event')) {\n            element.setAttribute('asic-event', element.parentElement.getAttribute('asic-event'));\n            element.setAttribute('asic-event-expression', element.parentElement.getAttribute('asic-event-expression'));\n        }\n    });\n\n    return div.innerHTML;\n}\n\n/**\n * Replaces '*for=item in items' with 'asic-for=item' 'asic-for-in=items'\n * @param {string} template\n */\nfunction $replaceFor(template) {\n    var forRe = /\\*for=\".*?\"/g;\n\n    return template.replace(forRe, function (match) {\n        var name = match.match(/(?:let )(.*)(?: in)/)[1];\n        var data = match.match(/(?: in )(.*)(?:\")/)[1];\n\n        return 'asic-for=\"' + name + '\" asic-for-data=\"' + data + '\"';\n    });\n}\n\n/**\n * Replicates iterateble parts.\n * @param template\n */\nfunction $replicateFor(template, context) {\n    var div = document.createElement('div');\n\n    div.innerHTML = template;\n\n    var element = div.querySelector('[asic-for]');\n    var name = element.getAttribute('asic-for');\n    var data = element.getAttribute('asic-for-data');\n\n    var resultHTML = '';\n\n    var _loop = function _loop(index) {\n        element.setAttribute('asic-for-index', index);\n\n        resultHTML += element.outerHTML.replace(RegExp('\\\\b' + name + '\\\\b', 'g'), function (match) {\n            return data + '[' + index + ']';\n        });\n    };\n\n    for (var index = 0; index < context[data].length; index++) {\n        _loop(index);\n    }\n\n    element.removeAttribute('asic-for-index');\n\n    return template.replace(element.outerHTML, resultHTML);\n}\n\n/**\n * Makes template transformations.\n * @param template\n */\nfunction $transform(template, context) {\n    template = $replaceEvents(template);\n    template = $replaceFor(template);\n    template = $replicateFor(template, context);\n    template = $replaceInterpolations(template);\n\n    return template;\n}\n\nfunction $render(element, component) {\n    if (element.innerHTML) {} else {\n        var template = _services.$components[component].template;\n        var Component = _services.$components[component].target;\n        var instance = new Component();\n        var proxy = new Proxy(instance, {\n            set: function set(target, property, value) {\n                target[property] = value;\n\n                element.querySelectorAll('[asic-bind-expression]').forEach(function (el) {\n                    var expression = el.getAttribute('asic-bind-expression');\n\n                    //TODO: find correct solution\n                    try {\n                        el.innerHTML = $exec('return ' + expression, proxy);\n                    } catch (err) {}\n                });\n\n                return true;\n            }\n        });\n\n        element.innerHTML = $transform(template, proxy);\n\n        element.querySelectorAll('[asic-bind-expression]').forEach(function (el) {\n            var expression = el.getAttribute('asic-bind-expression');\n\n            el.innerHTML = $exec('return ' + expression, proxy);\n        });\n\n        element.querySelectorAll('[asic-event]').forEach(function (el) {\n            var eventName = el.getAttribute('asic-event');\n            var expression = el.getAttribute('asic-event-expression');\n\n            el.$asic = {\n                events: _defineProperty({}, eventName, expression),\n                context: proxy\n            };\n        });\n\n        var _loop2 = function _loop2(key) {\n            element.querySelectorAll(key).forEach(function (el) {\n                $render(el, key);\n            });\n        };\n\n        for (var key in _services.$components) {\n            _loop2(key);\n        }\n    }\n}\n\n/**\n * Evaluates an expression in provided context.\n * @param { string } expression\n * @param { Object } context\n */\nfunction $exec(expression, context, args) {\n    var parts = expression.match(/[a-zA-Z0-9_]+/g);\n\n    parts.forEach(function (name) {\n        if (name in context) {\n            expression = expression.replace(RegExp('\\\\b' + name + '\\\\b'), function (match) {\n                return 'this.' + match;\n            });\n        }\n    });\n\n    return Function(expression).apply(context, args);\n}\n\n/**\n * Bootstraps an application.\n */\nfunction $bootstrap() {\n    window.addEventListener('load', function () {\n        var _loop3 = function _loop3(key) {\n            var component = _services.$components[key];\n            document.querySelectorAll(component.target.name).forEach(function (element) {\n                $render(element, component.target.name);\n            });\n        };\n\n        for (var key in _services.$components) {\n            _loop3(key);\n        }\n\n        var _loop4 = function _loop4(eventName) {\n            document.addEventListener(eventName, function (event) {\n                var target = arguments[0].target;\n\n                if (target.$asic) {\n                    $exec(target.$asic.events[eventName], target.$asic.context);\n                }\n            });\n        };\n\n        for (var eventName in _services.$events) {\n            _loop4(eventName);\n        }\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZnVuY3Rpb25zLmpzPzBjZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgJGNvbXBvbmVudHMgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7ICRldmVudHMgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyoqXG4gKiBSZXBsYWNlcyAnKGNsaWNrKT1cImZvbygpXCInIHdpdGggJ2FzaWMtZXZlbnQ9XCJjbGlja1wiIGFzaWMtZXZlbnQtZXhwcmVzc2lvbj1cImZvbygpXCInXG4gKiBBbmQgcHV0cyBldmVudCBuYW1lIHRvICRldmVudHMgdmFyaWFibGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHJlcGxhY2VFdmVudHModGVtcGxhdGUpIHtcbiAgICBjb25zdCBldmVudFJlID0gLyg/OlxcKCkoLis/KSg/OlxcKT0pL2c7XG5cbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShldmVudFJlLCBmdW5jdGlvbiAobWF0Y2gsIGV2ZW50TmFtZSkge1xuXG4gICAgICAgICRldmVudHNbZXZlbnROYW1lXSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIGBhc2ljLWV2ZW50PVwiJHtldmVudE5hbWV9XCIgYXNpYy1ldmVudC1leHByZXNzaW9uPWA7XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZXMgJ3t7IHBhcmFtTmFtZSB9fScgd2l0aCAnPHNwYW4gYXNpYy1iaW5kLWV4cHJlc3Npb249XCJwYXJhbU5hbWVcIj48L3NwYW4+J1xuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkcmVwbGFjZUludGVycG9sYXRpb25zKHRlbXBsYXRlKSB7XG4gICAgY29uc3QgcmUgPSAvKD86XFx7XFx7KSguKj8pKD86XFx9XFx9KS9nO1xuICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShyZSwgZnVuY3Rpb24gKGZ1bGxNYXRjaCwgbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGA8c3BhbiBhc2ljLWJpbmQtZXhwcmVzc2lvbj1cIiR7bWF0Y2h9XCI+PC9zcGFuPmA7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICAgIGRpdi5xdWVyeVNlbGVjdG9yQWxsKCdbYXNpYy1iaW5kLWV4cHJlc3Npb25dJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FzaWMtZXZlbnQnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FzaWMtZXZlbnQnLCBlbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhc2ljLWV2ZW50JykpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FzaWMtZXZlbnQtZXhwcmVzc2lvbicsIGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FzaWMtZXZlbnQtZXhwcmVzc2lvbicpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XG59XG5cbi8qKlxuICogUmVwbGFjZXMgJypmb3I9aXRlbSBpbiBpdGVtcycgd2l0aCAnYXNpYy1mb3I9aXRlbScgJ2FzaWMtZm9yLWluPWl0ZW1zJ1xuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkcmVwbGFjZUZvcih0ZW1wbGF0ZSkge1xuICAgIGNvbnN0IGZvclJlID0gL1xcKmZvcj1cIi4qP1wiL2c7XG5cbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShmb3JSZSwgbWF0Y2ggPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gbWF0Y2gubWF0Y2goLyg/OmxldCApKC4qKSg/OiBpbikvKVsxXTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG1hdGNoLm1hdGNoKC8oPzogaW4gKSguKikoPzpcIikvKVsxXTtcblxuICAgICAgICByZXR1cm4gYGFzaWMtZm9yPVwiJHtuYW1lfVwiIGFzaWMtZm9yLWRhdGE9XCIke2RhdGF9XCJgO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFJlcGxpY2F0ZXMgaXRlcmF0ZWJsZSBwYXJ0cy5cbiAqIEBwYXJhbSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHJlcGxpY2F0ZUZvcih0ZW1wbGF0ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdbYXNpYy1mb3JdJyk7XG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhc2ljLWZvcicpO1xuICAgIGNvbnN0IGRhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXNpYy1mb3ItZGF0YScpO1xuXG4gICAgbGV0IHJlc3VsdEhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250ZXh0W2RhdGFdLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXNpYy1mb3ItaW5kZXgnLCBpbmRleCk7XG5cbiAgICAgICAgcmVzdWx0SFRNTCArPSBlbGVtZW50Lm91dGVySFRNTC5yZXBsYWNlKFJlZ0V4cChgXFxcXGIke25hbWV9XFxcXGJgLCAnZycpLCBtYXRjaCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF0YX1bJHtpbmRleH1dYDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FzaWMtZm9yLWluZGV4Jyk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShlbGVtZW50Lm91dGVySFRNTCwgcmVzdWx0SFRNTCk7XG59XG5cbi8qKlxuICogTWFrZXMgdGVtcGxhdGUgdHJhbnNmb3JtYXRpb25zLlxuICogQHBhcmFtIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdHJhbnNmb3JtKHRlbXBsYXRlLCBjb250ZXh0KSB7XG4gICAgdGVtcGxhdGUgPSAkcmVwbGFjZUV2ZW50cyh0ZW1wbGF0ZSk7XG4gICAgdGVtcGxhdGUgPSAkcmVwbGFjZUZvcih0ZW1wbGF0ZSk7XG4gICAgdGVtcGxhdGUgPSAkcmVwbGljYXRlRm9yKHRlbXBsYXRlLCBjb250ZXh0KTtcbiAgICB0ZW1wbGF0ZSA9ICRyZXBsYWNlSW50ZXJwb2xhdGlvbnModGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJHJlbmRlcihlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5pbm5lckhUTUwpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJGNvbXBvbmVudHNbY29tcG9uZW50XS50ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gJGNvbXBvbmVudHNbY29tcG9uZW50XS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENvbXBvbmVudCgpO1xuICAgICAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShpbnN0YW5jZSwge1xuICAgICAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbYXNpYy1iaW5kLWV4cHJlc3Npb25dJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBlbC5nZXRBdHRyaWJ1dGUoJ2FzaWMtYmluZC1leHByZXNzaW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBmaW5kIGNvcnJlY3Qgc29sdXRpb25cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9ICRleGVjKCdyZXR1cm4gJyArIGV4cHJlc3Npb24sIHByb3h5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICR0cmFuc2Zvcm0odGVtcGxhdGUsIHByb3h5KTtcblxuICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thc2ljLWJpbmQtZXhwcmVzc2lvbl0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBlbC5nZXRBdHRyaWJ1dGUoJ2FzaWMtYmluZC1leHByZXNzaW9uJyk7XG5cbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9ICRleGVjKCdyZXR1cm4gJyArIGV4cHJlc3Npb24sIHByb3h5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbYXNpYy1ldmVudF0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnYXNpYy1ldmVudCcpO1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGVsLmdldEF0dHJpYnV0ZSgnYXNpYy1ldmVudC1leHByZXNzaW9uJyk7XG5cbiAgICAgICAgICAgIGVsLiRhc2ljID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICBbZXZlbnROYW1lXTogZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGV4dDogcHJveHlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiAkY29tcG9uZW50cykge1xuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGtleSkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgJHJlbmRlcihlbCwga2V5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGVzIGFuIGV4cHJlc3Npb24gaW4gcHJvdmlkZWQgY29udGV4dC5cbiAqIEBwYXJhbSB7IHN0cmluZyB9IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7IE9iamVjdCB9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRleGVjKGV4cHJlc3Npb24sIGNvbnRleHQsIGFyZ3MpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGV4cHJlc3Npb24ubWF0Y2goL1thLXpBLVowLTlfXSsvZyk7XG5cbiAgICBwYXJ0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAobmFtZSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKFJlZ0V4cChgXFxcXGIke25hbWV9XFxcXGJgKSwgbWF0Y2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAndGhpcy4nICsgbWF0Y2g7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEZ1bmN0aW9uKGV4cHJlc3Npb24pLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xufVxuXG4vKipcbiAqIEJvb3RzdHJhcHMgYW4gYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkYm9vdHN0cmFwKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gJGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSAkY29tcG9uZW50c1trZXldO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb21wb25lbnQudGFyZ2V0Lm5hbWUpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgJHJlbmRlcihlbGVtZW50LCBjb21wb25lbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGV2ZW50TmFtZSBpbiAkZXZlbnRzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gYXJndW1lbnRzWzBdLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuJGFzaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV4ZWModGFyZ2V0LiRhc2ljLmV2ZW50c1tldmVudE5hbWVdLCB0YXJnZXQuJGFzaWMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mdW5jdGlvbnMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUE7QUFlQTtBQXdCQTtBQWVBO0FBNEJBO0FBU0E7QUEwREE7QUFpQkE7QUFDQTtBQS9LQTtBQUNBOzs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFVQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQXpDQTtBQTJDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFDQTtBQXlDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFPQTtBQUFBO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);