webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-24 09:26:45 
 * @Last Modified time:   2017-11-24 09:26:45 
 * @Description: 在父级容器container下寻找指定tag[class="className"]的容器
 *               有则返回这个目标容器
 *               无则创建
 */

/* harmony default export */ __webpack_exports__["a"] = ((container, className, tag = 'g') => {
  const isExit = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](container).select('.' + className).empty();
  let wrap;
  if (isExit) {
    wrap = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](container).append(tag).attr('class', className);
  } else {
    wrap = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](container).select('.' + className);
  }
  return wrap;
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-24 10:05:15 
 * @Last Modified time:   2017-11-24 10:05:15 
 * @Description: 获取SVG容器的大小
 *               为了扩展支持百分比
 *               返回[width,height]
 */

/* harmony default export */ __webpack_exports__["a"] = ((seletor, w, h) => {
  const contain = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(seletor);
  let width, height;
  if (typeof w === 'string' && w.indexOf('%' != -1)) {
    width = Math.floor(contain.width() * parseInt(w, 10) / 100);
  } else {
    width = w;
  }
  if (typeof h === 'string' && h.indexOf('%' != -1)) {
    height = Math.floor(contain.height() * parseInt(h, 10) / 100);
  } else {
    height = h;
  }
  return [width, height];
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getContainer__ = __webpack_require__(3);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-24 11:10:53 
 * @Last Modified time:   2017-11-24 11:10:53 
 * @Description: 悬浮框公用方法
 */


/* harmony default export */ __webpack_exports__["a"] = (option => {
  const { location: { x, y }, data } = option;
  let text = '';
  data.map(d => {
    text += `${d.name} : ${d.value}<br/>`;
  });

  const el = Object(__WEBPACK_IMPORTED_MODULE_1__getContainer__["a" /* default */])('body', 'l-tooltip', 'div');
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.l-tooltip').css({
    'left': x,
    'top': y,
    'box-sizing': ' border-box',
    'position': ' absolute',
    'padding': ' 10px 15px',
    'background': 'linear-gradient( -90deg, rgb(7,8,74) 0%, rgb(1,2,27) 90%)',
    'border-radius': ' 5px',
    'border': ' 1px solid #928a82',
    'color': ' #e7f3fe',
    'font-size': ' 16px',
    'z-index': ' 10',
    'white-space': ' nowrap'
  }).html(text);
  return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.l-tooltip');
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getIdRandom__ = __webpack_require__(57);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-24 15:49:54 
 * @Last Modified time:   2017-11-24 15:49:54 
 * @Description: 返回创建好的渐变SVG-DOM及其对应的id
 */

/* harmony default export */ __webpack_exports__["a"] = (color => {
  const { x1, y1, x2, y2, colorStops } = color;
  const gradientId = Object(__WEBPACK_IMPORTED_MODULE_0__getIdRandom__["a" /* default */])();
  let gradientDOM = `<linearGradient id="${gradientId}" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%">`;
  colorStops.map(d => {
    gradientDOM += `<stop offset="${d.offset}%" style="stop-color:${d.color};stop-opacity:${d.opacity}"/>`;
  });
  gradientDOM += `</linearGradient>`;
  return {
    dom: gradientDOM,
    id: gradientId
  };
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(19)['default'];


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "\n/*l-banner-style*/\n\n.l-banner {\n    background: #1E2943;\n    color: #fff;\n    width: 100%;\n    overflow: hidden;\n    margin: 0 auto 20px;\n}\n\n.l-til-icon {\n    display: block;\n    text-align: center;\n    margin-top: 18px;\n}\n\n.l-til-icon img {\n    background: #fff;\n    border-radius: 50%;\n}\n\n.l-til-icon h3 {\n    margin: 20px auto 10px;\n}\n\n\n/*l-container-style*/\n.row>div{\n    margin-bottom: 30px;\n}\n.l-card {\n    -webkit-transition: all .5s;\n    -moz-transition: all .5s;\n    transition: all .5s;\n    border: none;\n    box-shadow: 0 2px 8px rgba(84, 48, 132, 0.1);\n}\n\n.l-card:hover {\n    -webkit-transform: translateY(-8px);\n    -ms-transform: translateY(-8px);\n    transform: translateY(-8px);\n    box-shadow: 0 12px 24px rgba(84, 48, 132, 0.06);\n}\n\n.l-short-scan {\n    width: 100%;\n    display: block;\n    padding: 16px 16px 8px 8px;\n}\n\n.l-short-scan img {\n    display: block;\n    width: 100%;\n    height: 180px;\n    margin: 0 auto 16px;\n}\n\n\n/*l-layer-chart*/\n\n.l-layer {\n    z-index: 5;\n    overflow-y: auto;\n    position: fixed;\n    left: 0;\n    width: 100%;\n    overflow: hidden;\n    background-image: url(" + __webpack_require__(52) + ");\n    height: 100%;\n    top: 0;\n    display: none;\n}\n\n.l-chart {\n    padding: 20px;\n    width: 50%;\n    height: 60%;\n    margin: 60px auto;\n    background-color: rgb(0, 25, 76);\n    border-radius: 10px;\n    display: block;\n    color: #fff;\n}\n\n.l-layer-close {\n    position: fixed;\n    z-index: 5;\n    top: 7px;\n    height: 24px;\n    cursor: pointer;\n    right: 8px;\n    width: 24px;\n    background-image: url(" + __webpack_require__(53) + ");\n}\n\n\n/*l-foot-style*/\n\n.l-footer {\n    background: #22252a;\n    color: #e9e9e9;\n    padding-bottom: 30px;\n    margin-top: 30px;\n}\n\n.l-footer .h5 {\n    padding: 8px 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.l-footer a {\n    color: #515151\n}\n\n.l-footer a:hover {\n    color: #48A0DC;\n}\n\n\n/*l-axis-style*/\n\n.y-axis path,\n.y-axis line {\n    fill: none;\n    stroke: none;\n    shape-rendering: optimizeSpeed;\n}\n\n.y-axis text {\n    font-size: 28px;\n    font-family: sans-serif;\n    fill: #a4d5ff;\n}\n\n/*饼图*/\n.ready .rotate{animation:rotate 4s linear;transform-origin:480px 250px;fill:white;}\n@keyframes rotate{\n  0%{transform:rotate(0deg);fill:white;}\n  100%{fill:whssite;transform:rotate(-360deg);}\n}\n.ready .fix{animation:fix 4s step-start;fill:white;transform:translateX(-430px);}\n@keyframes fix{\n  50%{transform:translateX(0);fill:black;}\n  100%{fill:white;transform:translateX(-430px);}\n}\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(54);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "\r\n.l-bar-css-chart{\r\n  width: 450px;\r\n  margin: 0 auto;\r\n}\r\n.terminal-item {\r\n  list-style: none;\r\n  width: 450px;\r\n  height: 90px;\r\n  margin-top: 10px;\r\n  background: url(" + __webpack_require__(64) + ") 0% 0% / 100% 75% no-repeat;\r\n}\r\n\r\n.item-index {\r\n  float: left;\r\n  height: 100%;\r\n  line-height: 66px;\r\n  width: 16%;\r\n  text-align: center;\r\n  color: #14c7fb;\r\n  font-size: 26px;\r\n}\r\n\r\n.item-container {\r\n  float: left;\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  width: 83%;\r\n  padding: 10px 0px 20px 10px;\r\n}\r\n\r\n.bar-container {\r\n  width: 100%;\r\n  height: 25px;\r\n  line-height: 25px;\r\n}\r\n\r\n.back-bar {\r\n  position: relative;\r\n  float: left;\r\n  width: 290px;\r\n  height: 24px;\r\n  margin-right: 10px;\r\n  background: url(" + __webpack_require__(65) + ") 0% 0% / 100% 100% no-repeat;\r\n}\r\n.active .outer-bar{\r\n  width: 0 !important;\r\n}\r\n\r\n.outer-bar {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  left: 0;\r\n  top: 4px;\r\n  width: 0;\r\n  height: 16px;\r\n  transition: width 5s;\r\n}\r\n\r\n.real-bar {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 290px;\r\n  background: url(" + __webpack_require__(66) + ") 0% 0% / 100% 100% no-repeat;\r\n}\r\n\r\n\r\n.value {\r\n  float: left;\r\n  color: #3da3ff;\r\n  font-size: 30px;\r\n}\r\n\r\n.item-name {\r\n  font-size: 20px;\r\n  color: #b0caf9;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "/*折线图*/\r\n.active-line{stroke-dasharray:1000;stroke-dashoffset:1000;animation:dash 3s linear forwards;}\r\n@keyframes dash{\r\n  to{stroke-dashoffset:0;}\r\n}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(5);

var _exception = __webpack_require__(9);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(20);

var _decorators = __webpack_require__(28);

var _logger = __webpack_require__(30);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQzs7QUFDekIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjExJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiJdfQ==


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(14, function() {
			var newContent = __webpack_require__(14);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hbs_banner_hbs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hbs_banner_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__hbs_banner_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hbs_container_hbs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hbs_container_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__hbs_container_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hbs_layer_hbs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hbs_layer_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__hbs_layer_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hbs_footer_hbs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hbs_footer_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hbs_footer_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_app_css__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_render__ = __webpack_require__(55);
/**
 * 页面布局初始化
 */









__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.app').append(__WEBPACK_IMPORTED_MODULE_1__hbs_banner_hbs___default()());
__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.app').append(__WEBPACK_IMPORTED_MODULE_2__hbs_container_hbs___default()());
__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.app').append(__WEBPACK_IMPORTED_MODULE_3__hbs_layer_hbs___default()());
__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.app').append(__WEBPACK_IMPORTED_MODULE_4__hbs_footer_hbs___default()());

__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.app').on('click', '.l-card', function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.l-layer').show();
  Object(__WEBPACK_IMPORTED_MODULE_6__components_render__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('data-chart'));
});
__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.app').on('click', '.l-layer-close', function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.l-layer').hide();
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(8);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"l-banner\">\r\n    <a href=\"https://github.com/funlee/d3charts\" class=\"l-til-icon\" target=\"_black\"><img src=\"" + __webpack_require__(35) + "\" alt=\"github\"></a>\r\n    <h3 class=\"text-center\">Component</h3>\r\n    <p class=\"text-center\">汇聚D3JS图表，沉淀技术，提升效率</p>\r\n</div>\r\n<div class=\"auto-tooltip\"></div>";
},"useData":true});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(15);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(31);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(9);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(5);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(32);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(33);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(21);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(22);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(23);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(24);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(25);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(26);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(27);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(5);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(5);

var _exception = __webpack_require__(9);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(9);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(5);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(5);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(29);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(5);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(5);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(5);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(9);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(15);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsZUFBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUU1QixRQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0FBQ2pCLGdCQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNoQyxRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUV4QixPQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDNUMsVUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7QUFDRCxRQUFJLE1BQU0sWUFBQTtRQUNOLFdBQVcsR0FBRyxZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7QUFDL0QsUUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO0FBQzFCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixjQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDM0YsTUFBTTtBQUNMLGNBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3BCO0tBQ0Y7O0FBRUQsYUFBUyxJQUFJLENBQUMsT0FBTyxnQkFBZTtBQUNsQyxhQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDckg7QUFDRCxRQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN0RyxXQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDL0I7QUFDRCxLQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNwQixlQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxFLFVBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUMzQixpQkFBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ3RFO0FBQ0QsVUFBSSxZQUFZLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUU7QUFDekQsaUJBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUM1RTtLQUNGLE1BQU07QUFDTCxlQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsZUFBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGVBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUMzQztHQUNGLENBQUM7O0FBRUYsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUNsRCxRQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDL0MsWUFBTSwyQkFBYyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0QsUUFBSSxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JDLFlBQU0sMkJBQWMseUJBQXlCLENBQUMsQ0FBQztLQUNoRDs7QUFFRCxXQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztHQUNqRixDQUFDO0FBQ0YsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUM1RixXQUFTLElBQUksQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNqQyxRQUFJLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDM0IsUUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQ2hHLG1CQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7O0FBRUQsV0FBTyxFQUFFLENBQUMsU0FBUyxFQUNmLE9BQU8sRUFDUCxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNwQixXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxhQUFhLENBQUMsQ0FBQztHQUNwQjs7QUFFRCxNQUFJLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFekUsTUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsTUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsTUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFTSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN4RCxNQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osUUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQixFQUFFO0FBQ3JDLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3pDLE1BQU07QUFDTCxhQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7R0FDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs7QUFFekMsV0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDdkIsV0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDckM7QUFDRCxTQUFPLE9BQU8sQ0FBQztDQUNoQjs7QUFFTSxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7QUFFdkQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUUsU0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsV0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztHQUN2RTs7QUFFRCxNQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLE1BQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTs7QUFDckMsYUFBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXpDLFVBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsa0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFnQjtZQUFkLE9BQU8seURBQUcsRUFBRTs7OztBQUkvRixlQUFPLENBQUMsSUFBSSxHQUFHLGtCQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxlQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0FBQ3BELGVBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUM3QixDQUFDO0FBQ0YsVUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ2YsZUFBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNwRTs7R0FDRjs7QUFFRCxNQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksWUFBWSxFQUFFO0FBQ3pDLFdBQU8sR0FBRyxZQUFZLENBQUM7R0FDeEI7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3pCLFVBQU0sMkJBQWMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUMsQ0FBQztHQUM1RSxNQUFNLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtBQUN0QyxXQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDbEM7Q0FDRjs7QUFFTSxTQUFTLElBQUksR0FBRztBQUFFLFNBQU8sRUFBRSxDQUFDO0NBQUU7O0FBRXJDLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsTUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQzlCLFFBQUksR0FBRyxJQUFJLEdBQUcsa0JBQVksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0dBQ3JCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLE1BQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNoQixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iXX0=


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(8);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"bar\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(37) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">基础柱状图-Rect</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"barNormal\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(38) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">柱状图扩展-Circle</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"barMask\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(39) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">柱状图扩展-Mask</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"barPath\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(40) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">柱状图扩展-Path</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"barCss\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(41) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">柱状图扩展-CSS</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"line\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(42) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">折线图</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"area\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(43) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">面积图</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"pie\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(44) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">饼图</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"waterBall\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(45) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">水球图</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"radar\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(46) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">雷达图</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"triangle\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(47) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">三角柱状图</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n            <div class=\"l-card\" data-chart=\"map\">\r\n                <a href=\"#\" class=\"l-short-scan\">\r\n                    <img src=\"" + __webpack_require__(48) + "\" alt=\"\" class=\"img-responsive\">\r\n                    <p class=\"text-center\">地图--geojson</p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1gAAAIkCAYAAAADCIqmAAAgAElEQVR4nOzdC5hcZZnu/aePCdCcQ9KdcwgEhBhJc4gogoKKEE4iYnAcGQ+Mfjiyx/FTtzJb0JlxPrZbceOGTzc6ThxngogCgiICKpmgJIFOwIAhIeRAQocmCaccO+nu3c/KXmV1dXV136veXlXV9f9dV0hSXW+z+s7zVtWzDu+qsea5PQYAAAAAKFptqTcAAAAAAEYKGiwAAAAACIQGCwAAAAACocECAAAAgEBosAAAAAAgEBosAAAAAAiEBgsAAAAAAqHBAgAAAIBAaLAAAAAAIBAaLAAAAAAIhAYLAAAAAAKhwQIAAACAQGiwAAAAACAQGiwAAAAACIQGCwAAAAACocECAAAAgEBosAAAAAAgEBosAAAAAAikvtQb4L43/1vW0bHFvvS5fxz0uVd/+iM270OXZv6+auUa+/iVf9vnOdOmTbYbbrzOmlvGRn/v3LPXvnPzv9odP/55v//vjOOnZ/5+249+Zrd8+wfF/CgAAAAAqlhJj2B97et/bwsX39OnySkkbq68ETpzzoV20zdvtam9zZR/n1jcXLkr530qet66tRvso1d90E6dMzvzPG+uxk9ots9e8+XoOYsWLrZL33+hXfaBi4a0La2t83p/XSH8tAAAAABGupI0WN4E3X7X96M/e4Oz/fUdQxrz9nPOiI5YxUeZ/IjUksVtdtLsmZnm6bwLzrEjjjjcbl9wt63tbazcd2+ZH/3+3svmRr97E+WN2b13329LFy+LHrv1lh/atm0v23vOPzvsDwsAAACgapSkwfLG5/JLPjakUwJjJ592UtQ4tT32RJ/HN27YZE0HH2Sn9n7dtZ7ypqhRenzJ8sxztnRste3bd9gxx06LGrXWU2ZZZ2enLc16jm/Ta6++Hh3Vyj7SBQAAAABDVTGLXIwde2T0e0dvs5TN/+7XWE2cPCFqng459OCoUYqPXrm4eWpqOsjG9H6fsWPHRA3Xln7fa4s1NjbalKmThv8HAgAAADDiVEyDNZD1656PjkYNxpunwfjRMAAAAABIquIbLAAAAAAoFxXfYPnpfH5a32D8tMDB+GmGAAAAAJBUxTRY8bVX8bVYufz0vvhaK78Oy6/HyhVfd+WnC8bXY+Xy0w39tEMAAAAAUFVMgxVfa+WrBGbLXRHQmydfbfDk/7uqoPNVAX11wGdXr42asNyVB503ZL7K4AubNmeWbgcAAAAARdk2WPG9svyGwM6bnuXLVkQ3JfYbDju/n9Vpc1r73M/qzjt+ETVcl19xceYo1ieuvjI6euX3unL33fuQbW7vsAsuPjezJPtVV384OqoV3zMLAAAAAFRl22D56Xve8GTf98rvm7Vo4WKb96FLbeHie+yav7vKfvaTezI3HnbeaF137Q3R2Pm33Rw9z08Z/MJnvpJZut1/97970/WNm74aPcdvVuzjOHoFAAAAIKkaa57bU+qNyMePUvkRpnJtelpb55nH19a2oNSbAgAAAKBMlO0RLF/Rj+uhAAAAAFSS+lJvwED8dEAAAAAAqCRlewQLAAAAACoNDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHQYAEAAABAIDRYAAAAABAIDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHQYAEAAABAIDRYAAAAABAIDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHQYAEAAABAIDRYAAAAABAIDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHQYAEAAABAIDRYAAAAABAIDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHQYAEAAABAIDRYAAAAABAIDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHQYAEAAABAIDRYAAAAABAIDRYAAAAABEKDBQAAAACB0GABAAAAQCA0WAAAAAAQCA0WAAAAAARCgwUAAAAAgdBgAQAAAEAgNFgAAAAAEAgNFgAAAAAEQoMFAAAAAIHUl3oDVF/7+t/bGWfOyfx90cLF9qXP/WOf50ybNtluuPE6a24ZG/29c89e+87N/2p3/PjnfZ73vfnfshnHT8/8/bYf/cxu+fYPhnHrAQAAAIxkFXUEK26uvBE6c86FdtM3b7XT5rRGj8fi5spdOe9T0fPWrd1gH73qg3bqnNmZ53lzNX5Cs332mi9Hz/FG7dL3X2iXfeCi1H8uAAAAACNDxTRY3jgdc+w0W7VyTeYokx+RWrK4LXrcv+7Ou+AcO+KIw+32BXfb2t7Gyn33lvnR7++9bG70uzdRU3uff+/d99vSxcuix2695Ye2bdvL9p7zz077RwMAAAAwQlRMgzVUrae8KWqUHl+yPPPYlo6ttn37jkwj1nrKLOvs7LSlWc/xZuy1V1+PjmplH+kCAAAAgKGqmAbLG6DfPbQoumbq6k9/JHrMj0T5KYL+uH/dm6dDDj04apTio1fxWH+sqekgGzP2SBs7dkzUcHnjla2jY4s1NjbalKmTUv3ZAAAAAIwMFbXIhZ8a2NHbFH3yU39l8z506YCLV+TjzZMfnSpk44ZNUcMGAAAAAElUVIMVL0zxxc/9Q3TtlJ/K95V/+kJ03dTHr/zbUm8eAAAAgCpXMacI5luYwn//l1v/I3o8Pm1wIH5a4GAmTp4QZFsBAAAAVKeKabDGjj0y+r0j57qp9euejxas8OYovtbKr8OKVxXMFl935acLxtdj5fLv5d8TAAAAAFQV02C5xlENmUYr5gtS+MIUfv2U8+bJl2k/+bSTMs/xUwn91MJnV6+NmjB/btPBB9mpWc+Jl4F/YdPmzBEyAAAAAFBUTIN1370P2eb2Drvg4nMzy6j7734DYV+W3b/u7rzjF9FRqMuvuDhzFOsTV18ZHb3ye10N9L2uuvrD0VGt+J5ZAAAAAKCqsea5PaXeCIUvdOFLtcf8xsO5C1zEi1/4USrnzdQXPvOVPku3e/N1w43XWXPL2Ojv21/fYddde8OQj161ts4zj6+tbUGRPxEAAACAkaLiGqxyQYMFAAAAIFfFnCIIAAAAAOWOBgsAAAAAAqHBAgAAAIBAaLAAAAAAIBAaLAAAAAAIhAYLAAAAAAKhwQIAAACAQGiwAAAAACAQGiwAAAAACIQGCwAAAAACocECAAAAgEBosAAAAAAgEBosAAAAAAiEBgsAAAAAAqHBAgAAAIBAaLAAAAAAIBAaLAAAAAAIhAYLAAAAAAKhwQIAAACAQGiwAAAAACAQGiwAAAAACIQGCwAAAAACocECAAAAgEBosAAAAAAgEBosAAAAAAiEBgsAAAAAAqHBAgAAAIBAaLAAAAAAIBAaLAAAAAAIhAYLAAAAAAKhwQIAAACAQGiwAAAAACAQGiwAAAAACIQGCwAAAAACocECAAAAgEBosAAAAAAgEBosAAAAAAiEBgsAAAAAAqHBAgAAAIBAaLAAAAAAIBAaLAAAAAAIhAYLAAAAAAKhwQIAAACAQGiwAAAAACAQGiwAAAAACIQGCwAAAAACocECAAAAgEBosAAAAAAgkPpSbwDgjp1s9raTa2328bV2zOT9jz27wWzZym77z8e7bfWG0m4fAAAAMBQ0WCi5y8+ttWv+on8pzn6D/6q197+72/7lzm77ya+7S7B1AAAAwNDRYKGk/vm/1EdHrgo5+KBa+y8f8qNbXfalm7pS2jIAAABAxzVYKBk/cjVYc5XtzFPqojEAAABAueLTKkrCr7nKd1rgYD5ySW00FgAAAChHNFgoCeXIVTY/XTDpWAAAAGC48UkVJeGLV5RiLAAAADCc+KSKkjh2ck3iscdMCrghAAAAQEA0WKg4NTXJmzMAAABgONFgoSRWb+gpyVgAAABgONFgoSSW/Sn5TYOLGQsAAAAMJxoslMR/Pt5t23fqR6J8zH3/SYMFAACA8kSDhZJYvcHsX+7sksf5mPYtw7BBAAAAQAA0WCiZ2+/vjo5kDZU/18cAAAAA5YoGCyX1xf+5z276930FTxf0r/lz/LkAAABAOasv9QYAflTKF65428m10U2E43tk+WqB/rhfc8VpgQAAAKgENFgoC35N1uoN3WZ3cgogAAAAKhenCAIAAABAIDRYAAAAABAIDRYAAAAABMI1WCgLx0wye2trnb3puNroz+7Z582eeKbbHmnriv4MIH3MTR2ZIQ3UGdJAnSVTY81zB14fGwNqbZ1nHl9b24JSb0rFe9+76uxTVwzc62/f0W3z7+6ynz7IAhhAmpibOjJDGqgzpIE6S67OmmZcX+qNqEQtLTPNG6z29hWl3pSK9g9/U2/ve3fhA6mNjTV22hvrbPqkGvvtEiYxkAbmpo7MkAbqDGmgzorDNVgoGd8z4oedh+qM3uf6GADDi7mpIzOkgTpDGqiz4tFgoST8PN5Ch50HcuVFfz4HGEB4zE0dmSEN1BnSQJ2FQYOFklD2jGRrOqg28VgAg2Nu6sgMaaDOkAbqLAwaLJTEScfXlGQsgMKYmzoyQxqoM6SBOguDBgslMX1S8tKbPpEJDAwX5qaOzJAG6gxpoM7CoMFC5alhAgNlibmpIzOkgTpDGqizDBoslMSa55Mv51nMWACFMTd1ZIY0UGdIA3UWBg0WSmL5yuT3ty5mLIDCmJs6MkMaqDOkgToLgwYLJfFIW5dt36lPRB9z/yNdw7BFABxzU0dmSAN1hjQUU2c+FvvRYKEknn3ebP7d+kT0MZu3DMMGAYgwN3VkhjRQZ0hDMXXmY7EfDRZK5qcPdEl7O/y5PgbA8GJu6sgMaaDOkAbqrHh11jTj+lJvRCVqaZnZ+98aa29fUepNqWi/XdJt23eanTC9xhob8q8+44edb72jy26+jckLpIW5qSMzpIE6Qxqos+LUWPNcrkhLoLV1nnl8bW0LSr0pI8Ixk/bfPdxvUhffg8FXo/ELJv3ccU5vAEqDuakjM6SBOkMaqLNkKrLBuvrTH7F5H7o08/fN7R32hc98xdau3RD9fdq0yXbDjddZc8vY6O+de/bad27+V7vjxz/v832+N/9bNuP46Zm/3/ajn9kt3/7BkLaBBgsAAABArvpSb4DKm6KpvQ3UTd+8tV/D5OLmyl0571NR0+VjPnrVB239uudt6eJlme8zfkKzffaaL0ePfe3rf2+Xvv9C6+jYmvf7AgAAAMBgKmqRCz9y5c1VvqNRsfMuOMeOOOJwu33B3ZkjWt+9ZX70+3svmxv9ftkHLoq+z713359puG695Ye2bdvL9p7zz07hJwEAAAAwElVUg9V6yptsXW/TVOgIkz/HG6XHlyzPPLalY6tt377Djjl2WnSEq/WUWdbZ2WlLs57jzdhrr74eHdU6dc7sYf05AAAAAIxMFXOKoDc93vwsXzbwqn3ePB1y6MFRoxQfvXLZzdOYsUfa2LFjoobLG69sHR1boiNbU6ZOyhzZQjqmTzQ7/aQ6mzWj1o6euP+x5zaaPbmq2/6wvMvWbCzt9gHVirmpIzOkgTpDGqizZCqmwfKmp7Gx0bZtfdluv+v7mQUstr++w6679oZBGyJvnrzBKmTjhk122pzWYNuMoXnvOXX2icv7l+Ks4/xXrV1ydq396N4uu+s33SXYOqB6MTd1ZIY0UGdIA3WWXEWdIujec/450fVVZ865MPr1wqbN9s9f/2/RdVWoPNf9P/V5J2+2poNq7ZMfaLAvf7Ji9gcAFY+5qSMzpIE6Qxqos+JUXIO1ZHFbn2uwfvXL30S/+3VVhfhpgYOZOHlCcRsHie8Z8cPOQ/WW2XXRGADDi7mpIzOkgTpDGqiz4lVMg+VLrPvCFH4aX77HXXytlV+H5ddj5Yqvu/LTBZuaDoqux8rl38u/J4aXn9M72J6RfP5ibm00FsDwYG7qyAxpoM6QBuosjIppsOKVAHOPMsXXZsW8efJl2k8+7aTMY/ECGc+uXhs1Yd6kNR18kJ2a9RxvyHyVQT/lkAUuht/ps5Pt6fDD0UnHAhgcc1NHZkgDdYY0UGdhVEyD5Y3R7x5aZGecOSe6H5bzpujyKy6Ojjrdeccvosf8d/+7Px4fxfrE1VdGzZnf68rdd+9Dtrm9wy64+NzMkuxXXf3h6KhWfM8sDK9ZM2pKMhZAYcxNHZkhDdQZ0kCdhVFRV6Xd8u0fWEfHVvvkp/7K5n3o0ugxb5Q+ddXnM8uy+9EnX1XwK//0BZt/282Z53zhM1/JPMd/97/fcON19o2bvho9NtTVCBHG9InJe/ujJzCBgeHC3NSRGdJAnSEN1FkYFdVgOV/gotCNhp03See/c17B53iTdfklHwu5aUhJTQ0TGChHzE0dmSEN1BnSQJ39WcWcIoiRZc3G5PdMKGYsgMKYmzoyQxqoM6SBOguDBgsl8eSqnpKMBVAYc1NHZkgDdYY0UGdh0GChJP6wrMt27NQnoo954Pddw7BFABxzU0dmSAN1hjQUU2c+FvvRYKEk1mw0+9G9+kT0MS9uHYYNAhBhburIDGmgzpCGYurMx2I/GiyUzJ0Pddkflg99EvtzfQyA4cXc1JEZ0kCdIQ3UWfHqrGnG9aXeiErU0jKz97811t6+otSbUtEefqzbduwye8O0GmtsyL/6jB92/sGdXfad25m8QFqYmzoyQxqoM6SBOitOjTXP5Yq0BFpbfRn4GmtrW1DqTRkRpk/cf/dwv0ldfA8GX43GL5j0c8c5vQEoDeamjsyQBuoMaaDOkqHBSogGCwAAAEAursECAAAAgEBosAAAAAAgEBosAAAAAAikvtQbALijJ5rNmVVnM4+ts2kT9z+2dqPZitVdtvjJLnuOeysAJcHc1JEZ0kCdIQ3UWTIscpEQi1yEc9E76uzjlzUM+PXtO7ttwS+67J7fsQwokCbmpo7MkAbqDGmgzpLjPlgJcR+sMK796wa76OzCB1L9/gsnn1hn0ybU2H+2dae0ZUB1Y27qyAxpoM6QBuqsOFyDhZLxPSNz3lQ35Oe/+aS6aAyA4cXc1JEZ0kCdIQ3UWfFosFASfk5vocPOA5l3fl00FsDwYG7qyAxpoM6QBuosDBoslISyZyRb04G1iccCGBxzU0dmSAN1hjRQZ2HQYKEk3nhs8tIrZiyAwpibOjJDGqgzpIE6C4MkUBLTJiQvvakTagJuCYBszE0dmSEN1BnSQJ2FQYOFilNjTGCgHDE3dWSGNFBnSAN19mc0WCiJtZuSL+dZzFgAhTE3dWSGNFBnSAN1FgYNFkrij6uTT8JixgIojLmpIzOkgTpDGqizMGiwUBKLn+iyHTt75HE+5qFHuWM4MFyYmzoyQxqoM6ShmDrzsdiPBgsl8dxGswW/3CeP8zEdW4dhgwBEmJs6MkMaqDOkoZg687HYjwYLJfPz33ZJezv8uT4GwPBiburIDGmgzpAG6qx4ddY04/pSb0QlammZab5eSnv7ilJvSkX7z8e7bceuHjtuaq01NuRffcYPO//w7n32vZ/qe1QAJMPc1JEZ0kCdIQ3UWXFqrHmufqIlrLV1nnl8bW0LSr0pI8LRE/ffPdxvUhffg8FXo/ELJv3ccU5vAEqDuakjM6SBOkMaqLNkaLASosECAAAAkItrsAAAAAAgEBosAAAAAAiEBgsAAAAAAqkv9QYAbuqEGjvtjXV24jF1NnX8/sfWvWD21LNdtuSPXbZuE5cKAqXA3NSRmY7MdGSGNFBnybDIRUIschHO3LPq7SPvbRjw6zt2dtvtv9pnv1jIPRaANDE3dWSmIzMdmSEN1Fly3AcrIe6DFcbnP9ZoF5xV+ECq339h9ht8z0mNPbKsO6UtA6obc1NHZjoy05EZ0kCdFYcGKyEarOL5npHBJm+2CeNqbccus9XrmcTAcGJu6shMR2Y6MkMaqLPiscgFSsLP6S102Hkgl59bF40FMDyYmzoy05GZjsyQBuosDBoslIRfMJnEQQfWJh4LYHDMTR2Z6chMR2ZIA3UWBg0WSuLEY5KXXjFjARTG3NSRmY7MdGSGNFBnYZAESmLqhOSl5xdTAhgezE0dmenITEdmSAN1FgYNFipPDRMYKEvMTR2Z6chMR2ZIA3WWQYOFkli3KflKM8WMBVAYc1NHZjoy05EZ0kCdhUGDhZJ46tnkk7CYsQAKY27qyExHZjoyQxqoszBosFASS/7YZTt29cjjfMzvluwbhi0C4JibOjLTFZOZj61G1BnSwNwMgwYLJbFuU4/d/iv9Bd/HdGwbhg0CEGFu6shMV0xmPrYaUWdIA3MzDBoslMwvHt4n7e3w5/oYAMOLuakjMx2Z6cgMaaDOildnTTOuL/VGVKKWlpm9/62x9vYVpd6UivbIMj8UbTZjaq01NuRffcYPO//7vfvsX+/cm/LWAdWLuakjMx2Z6cgMaaDOilNjzXM5npdAa+s88/ja2haUelNGhKkTaqI7gPtN6uJ7MPhqNH7BpJ87zukNQGkwN3VkpiMzHZkhDdRZMjRYCdFgAQAAAMjFNVgAAAAAEAgNFgAAAAAEQoMFAAAAAIHUl3oDRqIp42vslBPr7A3T62xKy/6VV9a399if1nTZY0912foXuOwtF5kB5Ym5qSMzHZnpyAxpoM6SYZGLhAZa5OK8M+rtLy9uHHDcjp3d9tMH9tmvFnG/gBiZAeWJuakjMx2Z6cgMaaDOkuM+WAnluw/W313ZaOed2VBwnN9L4E3H10V7BP7wxNBv4jZSkRlQnpibOjLTkZmOzJAG6qw4NFgJ5TZY3uUPVojZxo+ttZ27euzZDd3DtIXlj8yA8sTc1JGZjsx0ZIY0UGfFY5GLALxzL3QIdSCXvqs+GluNyAwoT8xNHZnpyExHZkgDdRYGDVYAp8ysSzTuoANrE4+tdGQGlCfmpo7MdGSmIzOkgToLgwYrgBOOTl5QxYytZGQGlCfmpo7MdGSmIzOkgToLgwYrgCnjk8c4uaU6D6eSGVCemJs6MtORmY7MkAbqLAwarBKrqaEYVWQGlCfmpo7MdGSmIzOkgTr7MxqsANa/kHzVlGLGVjIyA8oTc1NHZjoy05EZ0kCdhUGDFcDTzyVf+7+YsZWMzIDyxNzUkZmOzHRkhjRQZ2HQYAXw2IquaP1/lY/xsdWomMwWPsYdw4HhwtzUkZmO900ddYY0MDfDoMEKYP0LPfbTX++Vx/kYH1uNisnspW3DsEEAIsxNHZnpeN/UUWdIA3MzDBqsQO5btK+3cx/6HiJ/ro+pZmQGlCfmpo7MdGSmIzOkgTorXp01zbi+1BtRiVpaZvb+t8ba21dkHvvDE/sPqx47pdYaGvKvpOJfv+2Xe+3f7tH3DoxEZAaUJ+amjsx0ZKYjM6SBOitOjTXP5XheAq2t88zja2tb0O9rU8bXRHez9huuxfcT8JVV/OI/Pw+aQ/X9kRlQnpibOjLTkZmOzJAG6iwZGqyECjVYAAAAAKoT12ABAAAAQCA0WAAAAAAQCA0WAAAAAARSX+oNGIkmt9RY6wn1dvzRddGf3Yb2Hlv5XJe1Pb0v+jP6IjOgPDE3dWSmIzMdmSEN1FkyLHKR0ECLXLz7rfX2wQtGDThu565uu+vBvfbr33O/gBiZAeWJuakjMx2Z6cgMaaDOkuM+WAnluw/WNR8aZe8+o7HgOL+XwBuPq7fJLbW2+MmuYd7K8kdmQHliburITEdmOjJDGqiz4tBgJZTbYHmXP1gh9hk/ttZ27u6xNc93D9MWlj8yA8oTc1NHZjoy05EZ0kCdFY9FLgLwc1ILHUIdyCXnNGTOZ602ZAaUJ+amjsx0ZKYjM6SBOguDBiuA1hOTrRVy4AG1icdWOjIDyhNzU0dmOjLTkRnSQJ2FQYMVwPHTksdYzNhKRmZAeWJu6shMR2Y6MkMaqLMwSCIAv7ivFGMrGZkB5Ym5qSMzHZnpyAxpoM7CIAkAAAAACIQGK4AN7clXTSlmbCUjM6A8MTd1ZKYjMx2ZIQ3UWRg0WAGsXJu8oIoZW8nIDChPzE0dmenITEdmSAN1FgYNVgBtT+2L7mat8jE+thoVk9mix6szMyANzE0dmel439RRZ0gDczMMGqwANrT32F0P7ZXH+RgfW42KyWzLy9WZGZAG5qaOzHS8b+qoM6SBuRkGDVYgv35kn9S5+3N9TDUjM6A8MTd1ZKYjMx2ZIQ3UWfFqrHluxbab35v/LZs6bbJ95+Z/tTt+/PPM49N6H7vhxuusuWVs9PfOPXv7PSceP+P46Zm/3/ajn9kt3/7BkP7fra3zzONra1vQ5/F3v7U+upu133AtHz+E6l0+hfhnZAaUJ+amjsx0ZKYjM6SBOkuuzppmXF/qjUji6k9/xM46+63W1dVtjy1dbk8/9Uz0eNxcuU9d9Xm78evfsTPffnr0a9Uza+yFTZujr3lzNX5Cs33xc/9o/3T9N+3Y46bbO9/9dtu5c1fmexXS0jLTvMFqb1/R5/E1z3fbH1d12avbvW/tsQNHm+3d19P7eJctattn8+/q7P06FwFmIzOgPDE3dWSmIzMdmSEN1Fly9aXegCS8iXr7OWfYtq2vWFPTQX2+dt4F59gRRxweHbFau3ZD9Nh3b5lvX/mnL9h7L5trSxcvs8s+cFF05OtnP7kn+ru79ZYf2jHHTrP3nH92vyNdKj8HdUO7fv5qNSMzoOCaJYsAACAASURBVDwxN3VkpiMzHZkhDdRZMhV5DdZVV384+n3Rwkf7fa31lDfZtm0v2+NLlmce29Kx1bZv3xE1UN6ctZ4yyzo7O21p1nO8GXvt1dejo1qnzpk9/D8EAAAAgBGn4hosP/p02pxW+91Di2znjp19vubN0yGHHhw1SvHRKxc3T360a8zYI23s2DFRw+WNV7aOji3W2NhoU6ZOSuVnAQAAADCyVFSD5UeWPnrVB23J4rYhL0YR8+ZpMBs3bEq6aQAAAABQWddgfeLqK6MjT369VDmb1FxjJ72h3mZMrY/+7J7f3GOr1u2z5X/aF/0ZfZEZ0kCd6chMR2Y6MtORGdJAnSVTMQ3W177+99H1Uddde0Of0/+Gyk8LHMzEyROSbFof57y5wT5w/qh+jx83zX/VRV+/57d77aFHuWAwRmZIA3WmIzMdmenITEdmSAN1llxFNFh+auBJs2da08EH2Tdu+mq/r1/zd1dFpw568+XXWvl1WH49Vm4jFl935acLerPm12PlPscXv1i/7vlE23n1FaOjLr8Qv5eAF+uMqbX2/9+2J9H/ZyQhM6SBOtORmY7MdGSmIzOkgTorTkVcg+VLqZ//znl25pwL+/zyGwP7TYRv+uat0df9ed48+TLtJ592Uma8N2jeUD27em3UUPm1Vt6snZr1HG/IfJVBv09WvHS7wrv4wQox2+wTGqIx1YzMkAbqTEdmOjLTkZmOzJAG6qx4FdFgKe684xfRUajLr7g4appc7rVb9937kG1u77ALLj43syS7L/3uqwz6PbNUfk5qvkOog7nwHQ2Z81mrDZkhDdSZjsx0ZKYjMx2ZIQ3UWRgjrsHyo09+qqA3S/Nvu9kWLr4nOmXwC5/5SuZ0QP/d/+5Nl59y6M/xUxB9XJKjV0qXn80PrSYdW+nIDGmgznRkpiMzHZnpyAxpoM7CqOgkfKn2fMu1x6cUFuJN1uWXfCzIdviFfsWM9QsEqw2ZIQ3UmY7MdGSmIzMdmSEN1FkYI+4IVilMHJc8xmLGVjIyQxqoMx2Z6chMR2Y6MkMaqLMwSAIAAAAAAqHBCmDji90lGVvJyAxpoM50ZKYjMx2Z6cgMaaDOwqDBCuCZtV0lGVvJyAxpoM50ZKYjMx2Z6cgMaaDOwqDBCmD5n/bZzl161+5jfGw1Kiaz3y+rzsygo850ZKYjMx3vmzrqDGlgboZBgxXA85t7Eq2a4mN8bDUqJrOtr1RnZtBRZzoy05GZjvdNHXWGNDA3w6DBCuShR/dKnbs/18dUMzJDGqgzHZnpyExHZjoyQxqos+LVWdOM60u9EZWopWVm739rrL19ReaxpSv8sGqPHT2x1hoa8t/N2g+h/uyBTrv9V50pbWl5IzOkgTrTkZmOzHRkpiMzpIE6K06NNc/leF4Cra1+I+Maa2tb0O9rk5prortZ+w3X4nsC+MoqfvGfnwfNofr+yAxpoM50ZKYjMx2Z6cgMaaDOkqHBSqhQgwUAAACgOnENFgAAAAAEQoMFAAAAAIHQYAEAAABAIPWl3oCRaOK4Gpt1fIMdO6XeJozbv/LKphd7bPX6ffbkyr228UUue8tFZkgDdaYjMx2Z6chMR2ZIA3WWDItcJDTQIhfvmNNg7zt39IDjfEnLXz7cab9bwv0CYmSGNFBnOjLTkZmOzHRkhjRQZ8lxH6yE8t0H668vH23vePOoguP8XgInHON7AWqt7amh38RtpCIzpIE605GZjsx0ZKYjM6SBOisODVZCuQ2Wd/mDFWK25jF1tmt3j63b1D1MW1j+yAxpoM50ZKYjMx2Z6cgMaaDOisciFwH4+amFDqEO5LwzG6Ox1YjMkAbqTEdmOjLTkZmOzJAG6iwMGqwA/OK/JA48oDbx2EpHZkgDdaYjMx2Z6chMR2ZIA3UWBg1WAMdOrSvJ2EpGZkgDdaYjMx2Z6chMR2ZIA3UWBg1WABPHJY9xwtjq/CcgM6SBOtORmY7MdGSmIzOkgToLgyRKrIbTVWVkhjRQZzoy05GZjsx0ZIY0UGd/RoMVwMYXk6+aUszYSkZmSAN1piMzHZnpyExHZkgDdRYGDVYAq9d1lWRsJSMzpIE605GZjsx0ZKYjM6SBOguDBiuAJ1futV279a7dx/jYalRMZoufqM7MoKPOdGSmIzMd75s66gxpYG6GQYMVwMYXe+yXD3fK43yMj61GxWS29ZXqzAw66kxHZjoy0/G+qaPOkAbmZhg0WIH8dvFeqXP35/qYakZmSAN1piMzHZnpyExHZkgDdVa8OmuacX2pN6IStbTM7P1vjbW3r8g89vhT+2zX7h6bNrHWGurzL6Xih1B//tAe++mv9b0DIxGZIQ3UmY7MdGSmIzMdmSEN1Flxaqx5LsfzEmhtnWceX1vbgn5fmziuJrqbtd9wLb6fgK+s4hf/eZfPIdT+yAxpoM50ZKYjMx2Z6cgMaaDOkqHBSqhQgwUAAACgOnENFgAAAAAEQoMFAAAAAIHQYAEAAABAIPWl3oCRaMLYWps5o96mT66P/uw2dXTbmg37bMWqfdGf0ReZIQ3UmY7MdGSmIzMdmSEN1FkyLHKR0ECLXJx5aqNd8s7RA47btavb7l+0xxY+xv0CYmSGNFBnOjLTkZmOzHRkhjRQZ8lxH6yE8t0H66PvO6C3GEcVHNfQUGPHT2+w8WNrbfmf9g3zVpY/MkMaqDMdmenITEdmOjJDGqiz4tBgJZTbYHmXP1ghZhs3ps527emx9S90DdMWlj8yQxqoMx2Z6chMR2Y6MkMaqLPischFAH5OaqFDqAM5962NmfNZqw2ZIQ3UmY7MdGSmIzMdmSEN1FkYJBHAzOOSrRVywAG1icdWOjJDGqgzHZnpyExHZjoyQxqoszBosAI4ZnLygipmbCUjM6SBOtORmY7MdGSmIzOkgToLgwYrgPFFHBIdf1R1/hOQGdJAnenITEdmOjLTkRnSQJ2FQRKlVlPqDahAZIY0UGc6MtORmY7MdGSGNFBnGTRYAbxQxE3WihlbycgMaaDOdGSmIzMdmenIDGmgzsKgwQrg2Q3J1/4vZmwlIzOkgTrTkZmOzHRkpiMzpIE6C4MGK4AVz+yzXbv1rt3H+NhqVExmS5/kjuEYGupMR2Y6MtPxvqmjzpAG5mYYNFgBbOrotvsXdcrjfMymKj2cWkxm217tGYYtwkhEnenITEdmOt43ddQZ0sDcDIMGK5CFSzttxaqh7yHy5/qYakZmSAN1piMzHZnpyExHZkgDdVa8OmuacX2pN6IStbTMNF8upb19ReaxZX/aZ7v29NiU8bXWUJ9/KRU/hPqL3+2xux7ck9KWljcyQxqoMx2Z6chMR2Y6MkMaqLPi1FjzXI4bJ9DaOs88vra2Bf2+NmHs/rtZ+w3X4vsJ+MoqfvGfnwfNofr+yAxpoM50ZKYjMx2Z6cgMaaDOkqHBSqhQgwUAAACgOnENFgAAAAAEQoMFAAAAAIHQYAEAAABAIPWl3oCRaPxRtXbCsQ129KR6a/m/FwS2d3Tbc8/vs6dX77UXXuI+AbnITEdmOjLTkZmOzHRkpiMzpIE6S4ZFLhIaaJGLM05utAvOPmDAcb6k5YOP7LFH2rhfQIzMdGSmIzMdmenITEdmOjJDGqiz5LgPVkL57oP14UsOtLeeMqrgOL+XwHFHN1jLUbX25DP7hnkryx+Z6chMR2Y6MtORmY7MdGSGNFBnxaHBSii3wfIuf7BCzDb2yDrbvafHNrR3DdMWlj8y05GZjsx0ZKYjMx2Z6cgMaaDOisciFwH4+amFDqEO5Jy3jIrGViMy05GZjsx0ZKYjMx2Z6cgMaaDOwiCJAE6Y0ZBo3AGjaxOPrXRkpiMzHZnpyExHZjoy05EZ0kCdhUGDFcDRk+pKMraSkZmOzHRkpiMzHZnpyExHZkgDdRYGDVYA449KXlAtRYytZGSmIzMdmenITEdmOjLTkRnSQJ2FQYNVYjWl3oAKRGY6MtORmY7MdGSmIzMdmSEN1Nmf0WAF8MJLyVdNKWZsJSMzHZnpyExHZjoy05GZjsyQBuosDBqsAJ57PnlBFTO2kpGZjsx0ZKYjMx2Z6chMR2ZIA3UWBg1WAE+v2mu7d3fL43yMj61GxWT2+IrqvGM4menITEdmOjLT8b6po86QBuZmGDRYAbzwUrc9+Ps98jgf42OrUTGZvfxqzzBsUfkjMx2Z6chMR2Y63jd11BnSwNwMgwYrkEWPd9rTq4feuftzfUw1IzMdmenITEdmOjLTkZmOzJAG6qx4ddY04/pSb0QlammZab5eSnv7isxjT6zca7v39Njkljqrr8+/loofQv3Vwt12z293p7Sl5Y3MdGSmIzMdmenITEdmOjJDGqiz4tRY81yOGyfQ2jrPPL62tgX9vjb+qP13s/YbrsX3E/CVVfziPz8PmkP1/ZGZjsx0ZKYjMx2Z6chMR2ZIA3WWDA1WQoUaLAAAAADViWuwAAAAACAQGiwAAAAACIQGCwAAAAACqS/1BoxEzUfV2vHTG2zqxAZrHrO/h928pdvWbdxrK9fstc3cJ6AfMtORmY7MdGSmIzMdmenIDGmgzpJhkYuEBlrk4s2zR9l5Zx0w4Lhdu7vtd4/utkeXc7+AGJnpyExHZjoy05GZjsx0ZIY0UGfJcR+shPLdB+uKCw+002ePLjiuob7Gjp26fy/AilVDv4nbSEVmOjLTkZmOzHRkpiMzHZkhDdRZcWiwEsptsLzLH6wQsx11RF10A7eNm7uGaQvLH5npyExHZjoy05GZjsx0ZIY0UGfFY5GLAPz81EKHUAfy9jmjorHViMx0ZKYjMx2Z6chMR2Y6MkMaqLMwSCKAN0xvSDTugNG1icdWOjLTkZmOzHRkpiMzHZnpyAxpoM7CoMEKYOrE5IsxFjO2kpGZjsx0ZKYjMx2Z6chMR2ZIA3UWBg1WAM1H1SUeO25M8rGVjMx0ZKYjMx2Z6chMR2Y6MkMaqLMwaLBKrKam1FtQechMR2Y6MtORmY7MdGSmIzOkgTr7MxqsADa/lHzVlGLGVjIy05GZjsx0ZKYjMx2Z6cgMaaDOwqDBCmDdxn0lGVvJyExHZjoy05GZjsx0ZKYjM6SBOguDBiuAP63Za7v3dMvjfIyPrUbFZLbs6eq8YziZ6chMR2Y6MtPxvqmjzpAG5mYYFdVgnTpntv3ywdts4eJ7Mr++9vW/7/e8adMm2+13fT/znAcX/swu+8BF/Z73vfnf6vO9rv70RxJt1+aXuu23j+6Rx/kYH1uNisnsldd6hmGLyh+Z6chMR2Y6MtPxvqmjzpAG5mYYFdVgfeLqK235shV25pwLo183ffNWO21Oa9Qoxby5uuHG66I/XznvU9Hz1q3dYB+96oNRgxbzMeMnNNtnr/ly9JxFCxfbpe+/MG8jNhSPLttjK9cMfQ+RP9fHVDMy05GZjsx0ZKYjMx2Z6cgMaaDOildnTTOuL/VGDNXP7/qVPfTAwszfn37qGTv+hGPt2BlH26pn1tgLmzbbB//yUms95U02/19+bL9ftCR6Xnv7i/aOc86ww484LBrvTdQ7332W3f2zX/b+ui96znPPrrMzzppjkyZPiP4/g2lpmdn735re770i89iKVX5YtccmtdRZfX3+pVT8EOoDj+y2Xz28u4gkRg4y05GZjsx0ZKYjMx2Z6cgMaaDOijPi7gjmzdW2bS/b40uWZx7b0rHVtm/fYcccOy06wtV6yizr7Oy0pVnPWbt2g7326uvRUS0/0rV08bJE/3/v4Ndt3BvdzdpvuBbfT8BXVvGL//w8aA7V90VmOjLTkZmOzHRkpiMzHZkhDdRZchXfYI0dOyZqnryJ8ubpkEMPjholb5hi2c3TmLFH9hmTraNji03t/R5Tpk5K3GA5Pwd180t+qJTDpUNFZjoy05GZjsx0ZKYjMx2ZIQ3UWTIVdQ1WLl/gYsbx0+3Z1Wv7NFT5ePM0mI0bNoXaNAAAAABVqGKPYPkiFd5crVq5xr70uX8s9eYAAAAAQOUdwfIFKnzZdW+ufOW/j1/5t0Ma56cFDmbi5AnFbh4AAACAKlZRR7C8ufrkp/4qWqDii5/7h37XScXXWvl1WH49Vu5pg/F1V366YHw9Vu5z/HuvX/d8Uds5bkytzZjWaFMmNNi4I/f3sC9u7bb1m/baqrWd9uIW7hOQi8x0ZKYjMx2Z6chMR2Y6MkMaqLNkKqbB8obp8isujlYI/MJnvjLgNVfxQhUnn3ZS5jm+KqA3VH4PLX/Mr7U648w5dmrvc+Imzb+/rzLoS70Xs8DFabNG2bvedmC/x6dMqO39VR99feHS3bb0SS4WjJGZjsx0ZKYjMx2Z6chMR2ZIA3WWXMXcB+ud555lbzvrdLvv3gftgfsfHvB5r732up359tPt2OOOtscWL7dXXnnVvvq1/2o1tTV2wz/eFP19y0vb7PS3nmozZ70hc/+sz1/7aZs8ZaL9jxtujv4+mHz3wXr/eQfZaSeNLjjO7yUwfUqDjRtTZ08/u3fIP/9IRWY6MtORmY7MdGSmIzMdmSEN1FlxKu4arHkfutQWLr6n3y9fUdD50afrrr3BmpoOsvm33Rx9zU8ZzD7q5b/73/2UwW/c9NXoOSfNnhmNS3r0yrv4GUc3Dvn5x/U+18dUMzLTkZmOzHRkpiMzHZnpyAxpoM6KV2PNc7lDWAKtrfPM42trWxCdn/rxDxwqf4/du7vtR3e/XpXnr5KZjsx0ZKYjMx2Z6chMR2ZIA3UWRsUdwSpHSpefbfTo2sRjKx2Z6chMR2Y6MtORmY7MdGSGNFBnYdBgBTBlfPK1QooZW8nITEdmOjLTkZmOzHRkpiMzpIE6C4MGKwC/uC/x2COTj61kZKYjMx2Z6chMR2Y6MtORGdJAnYVBgxXA6FHJY/RDqtWIzHRkpiMzHZnpyExHZjoyQxqoszBIIgC/2VopxlYyMtORmY7MdGSmIzMdmenIDGmgzsKgwQrg1deTr5jy4paugFtSOchMR2Y6MtORmY7MdGSmIzOkgToLgwYrgIVLdiUeu+SJ3QG3pHKQmY7MdGSmIzMdmenITEdmSAN1FgYNVgCvvt6TqKh8jI+tRmSmIzMdmenITEdmOjLTkRnSQJ2FQYMVyAOLdknnnq56rjMaU83ITEdmOjLTkZmOzHRkpiMzpIE6K16dNc24vtQbUYlaWmb2/rfG2ttXZB57cmWn7dnTYxOa66y+vibvuN17uu23f9hlDzxCIToy05GZjsx0ZKYjMx2Z6cgMaaDOilNjzXM5npdAa+s88/ja2hb0+9q4MfvvZu03XIvvJ+AX/q1/YZ89+ac9HELNg8x0ZKYjMx2Z6chMR2Y6MkMaqLNkaLASKtRgAQAAAKhOXIMFAAAAAIHQYAEAAABAIDRYAAAAABBIfak3YCQae2StHTO10SaNb+j98/4LAju2dtnzL+y1Z9d19v45+V2yRyoy05GZjsx0ZKYjMx2Z6chMR2Y6MkuGRS4SGmiRi5PfONrOfsuBA47zJS1//9gue3zFnmHewspBZjoy05GZjsx0ZKYjMx2Z6chMR2bJcR+shPLdB+uSdzfZKbNGFxzn9xKYNrkx2iOwcs3Qb+I2UpGZjsx0ZKYjMx2Z6chMR2Y6MtORWXFosBLKbbC8yx+sELMdeXi97enssfaOfcO0heWPzHRkpiMzHZnpyExHZjoy05GZjsyKxyIXAXjnXugQ6kDecvLoaGw1IjMdmenITEdmOjLTkZmOzHRkpiOzMEgiAL/4L4nRo2oTj610ZKYjMx2Z6chMR2Y6MtORmY7MdGQWBg1WAJPHN5RkbCUjMx2Z6chMR2Y6MtORmY7MdGSmI7MwaLACiJetTOKoIsZWMjLTkZmOzHRkpiMzHZnpyExHZjoyC4MGq8RqSr0BFYjMdGSmIzMdmenITEdmOjLTkZmOzP6MBisAv+FaKcZWMjLTkZmOzHRkpiMzHZnpyExHZjoyC4MGK4ANLyRf+7+YsZWMzHRkpiMzHZnpyExHZjoy05GZjszCoMEK4Nl1nbZnT7c8zsf42GpUTGZPrarOO4aTmY7MdGSmIzMd75s66kxHZjrmZhg0WAF0bO22Rx7fLY/zMT62GhWT2auv9wzDFpU/MtORmY7MdGSm431TR53pyEzH3AyDBiuQx/+421avHXrn7s/1MdWMzHRkpiMzHZnpyExHZjoy05GZjsyKV2dNM64v9UZUopaWmebrpbS3r8g8tnJNp+3p7LHxY+usvj7/Wip+CHXhkl322z/sTGlLyxuZ6chMR2Y6MtORmY7MdGSmIzMdmRWnxprnVucx0CK1ts4zj6+tbUG/r409cv/drP2Ga/H9BHxlFb/4z8/prdbDzoWQmY7MdGSmIzMdmenITEdmOjLTkVkyNFgJFWqwAAAAAFQnrsECAAAAgEBosAAAAAAgEBosAAAAAAikvtQbMBIddUStHT1llE1sbuj98/4LAl/a1mUbN++159bv6f0z9wnIRWY6MtORmY7MdGSmIzMdmenITEdmybDIRUIDLXJx0gmj7aw3HzTgOF/S8tFlu2z509wvIEZmOjLTkZmOzHRkpiMzHZnpyExHZslxH6yE8t0H64Jzmmz2zAMKjvN7CUyd2GhHHV5nq4SbuI1UZKYjMx2Z6chMR2Y6MtORmY7MdGRWHBqshHIbLO/yByvEbEccVt/b+ffY5pf2DdMWlj8y05GZjsx0ZKYjMx2Z6chMR2Y6Misei1wE4OenFjqEOpA3zz4gGluNyExHZjoy05GZjsx0ZKYjMx2Z6cgsDJIIwC/+S2LUqNrEYysdmenITEdmOjLTkZmOzHRkpiMzHZmFQYMVwMTm5IsxFjO2kpGZjsx0ZKYjMx2Z6chMR2Y6MtORWRg0WAEcdUTygipmbCUjMx2Z6chMR2Y6MtORmY7MdGSmI7MwaLAAAAAAIBAarABe2pZ81ZRixlYyMtORmY7MdGSmIzMdmenITEdmOjILgwYrgI2bkxdUMWMrGZnpyExHZjoy05GZjsx0ZKYjMx2ZhUGDFcBz6/dEd7NW+RgfW42KyexPq8lMQWZkpiAzHZnpeN/UUWc6MtMxN8OgwQrgpW3d9uiyXfI4H+Njq1Exmb22ncwUZEZmCjLTkZmO900ddaYjMx1zMwwarECWP73b1giduz/Xx1QzMtORmY7MdGSmIzMdmenITEdmOjIrXp01zbi+1BtRiVpaZvb+t8ba21dkHlu1ttP27OmxlqPqrb6+Ju84P4T6yGM7beGSnSltaXkjMx2Z6chMR2Y6MtORmY7MdGSmI7Pi1Fjz3J5Sb0Qlam2dZx5fW9uCfl876oj9d7P2G67F9wTwlVX84j8/P5VDqP2RmY7MdGSmIzMdmenITEdmOjLTkVkyNFgJFWqwAAAAAFQnrsECAAAAgEBosAAAAAAgEBosAAAAAAikvtQbMBKNObzOpk5utPHjGqM/uy0vd9kLL3baug2d0Z/RF5npyExHZjoy05GZjsx0ZKYjMx2ZJcMiFwkNtMjFrDeMtree2jTgOF/ScukTO+2PK7lfQIzMdGSmIzMdmenITEdmOjLTkZmOzJLjPlgJ5bsP1nvefrDNOuHAguP8XgKTJ+zfC/Dsus5h3sryR2Y6MtORmY7MdGSmIzMdmenITEdmxaHBSii3wfIuf7BCzHb4ofXW2dltL27ZN0xbWP7ITEdmOjLTkZmOzHRkpiMzHZnpyKx4LHIRgHfuhQ6hDuSUWQdmzmetNmSmIzMdmenITEdmOjLTkZmOzHRkFgYNVgB+8V8So0bVJh5b6chMR2Y6MtORmY7MdGSmIzMdmenILAwarAAmjGsoydhKRmY6MtORmY7MdGSmIzMdmenITEdmYdBgBXDkEclXuz/y8OpcKZ/MdGSmIzMdmenITEdmOjLTkZmOzMKgwSq1mlJvQAUiMx2Z6chMR2Y6MtORmY7MdGSmI7MMGqwAtm5LvmpKMWMrGZnpyExHZjoy05GZjsx0ZKYjMx2ZhUGDFcCmF/eWZGwlIzMdmenITEdmOjLTkZmOzHRkpiOzMGiwAli3odP2dHbL43yMj61GxWT2zJo9w7BF5Y/MdGSmIzMdmel439RRZzoy0zE3w6DBCmDLy1322BM75XE+xsdWo2Iye327PvFHAjLTkZmOzHRkpuN9U0ed6chMx9wMgwYrkCf/tNvWbhj63g5/ro+pZmSmIzMdmenITEdmOjLTkZmOzHRkVrw6a5pxfak3ohK1tMw0Xy6lvX1F5rFn13VaZ2e3jTuq3urr8i+l4odQF7ftsEce0/cOjERkpiMzHZnpyExHZjoy05GZjsx0ZFacGmue21PqjahEra3zzONra1vQ72tjDq+L7mbtN1yL7yfgK6v4xX9+fiqHUPsjMx2Z6chMR2Y6MtORmY7MdGSmI7NkaLASKtRgAQAAAKhOXIMFAAAAAIHQYAEAAABAIDRYAAAAABBIfak3YCQ64rA6mzKx0VrGNkZ/dtte6bL2jk5bv7Ez+jP6IjMdmenITEdmOjLTkZmOzHRkpiOzZFjkIqGBFrk4ccZoe/PJTQOO27On25at2GlPreJ+ATEy05GZjsx0ZKYjMx2Z6chMR2Y6MkuO+2AllO8+WO9828E28/gDC46rr6+xieMb7cjD6uy5DZ3DvJXlj8x0ZKYjMx2Z6chMR2Y6MtORmY7MisM1WIF4lz9l4qghP3/KpFHRmGpGZjoy05GZjsx0ZKYjMx2Z6chMR2bFo8EKwM9JLXQIdSCzZx6YOZ+12pCZjsx0ZKYjMx2Z6chMR2Y6MtORWRg0WAH4xX9JjBpVm3hspSMzHZnpyExHZjoy05GZjsx0ZKYjszBosAJoGddQkrGVjMx0ZKYjMx2Z6chMR2Y6MtORmY7MwqDBCuDIw5Kvdn/EodW5Uj6Z6chMR2Y6MtORmY7MdGSmIzMdmYVBg1ViNTWl3oLKQ2Y6MtORmY7MdGSmIzMdmenITEdmf1bVDdb35n/LFi6+J/PruvaF4gAAFmBJREFU6k9/JNH32frKvsTbUMzYSkZmOjLTkZmOzHRkpiMzHZnpyExHZmFUbYPlzdX4Cc322Wu+bGfOudAWLVxsl77/QrvsAxfJ36v9xb2Jt6OYsZWMzHRkpiMzHZnpyExHZjoy05GZjszCqMoGy5uoqdMm2713329LFy+LHrv1lh/atm0v23vOP1v+fus3dlpnZ7c8zsf42GpUTGar1+4Zhi0qf2SmIzMdmenITMf7po4605GZjrkZRlU2WK2nzOothE5bumR55rG1azfYa6++Hh3VOnXObOn7bXuly9r+uFPeDh/jY6tRMZlt36FP/JGAzHRkpiMzHZnpeN/UUWc6MtMxN8OoygZr7Ngxtn37DtvSsbXP4x0dW6yxsdGmTJ0kf8+nVu3u7dyHvrfDn+tjqhmZ6chMR2Y6MtORmY7MdGSmIzMdmRWvzppmXF/qjUjbRe99j40aPcoevP9he+WVVzOPH3f8dHvDicfZY0uX29NPPVPwe7S0zOz9b421t6/IPPbchv2HVceOqbe6uvxLqfjXly7fYYuX6XsHRiIy05GZjsx0ZKYjMx2Z6chMR2Y6MisOC9YXoaXljdba2v/x59pr7LBDenvXpjo7cPT+g4Q7d3fb9u1d9sprXTaqqSfvuGpGZjoy05GZjsx0ZKYjMx2Z6chMVwmZtbUtKO0G5EGDlWXi5AlDfm5b2229BZW/o9+1u6f31z6zDparHCoy05GZjsx0ZKYjMx2Z6chMR2Y6MkumKhssv9bKF7MYM/bIaHGLbL74xfp1zw/p+5RjxwwAAACgdKpykYuNGzZZ08EH2amnnZR5bNq0yXbMsdPshU2bM0u3AwAAAICiKhus++59yDa3d9gFF5+bWZL9qqs/bE1NB9l3b5lf4q0DAAAAUKlqrHluT6k3ohT8iNUNN15nzS1jo79vf32HXXftDRy9AgAAAJBY1TZYAAAAABBaVZ4iCAAAAADDgQYLAAAAAAKhwQIAAACqxJyLrox+YfhwDdYgvAAPHTvBfv29r0V/n3Ha2Tbn4ivtN/O/YZtWPdnnuaMObLLzPvFle/qRX9mqJb/JjHeLfz4/7/eLHzvxzPMH3ZaNK5/oM67cvPvjX7IDDz7M7vvuV23Pzu19HncDbbvn9s6PfM6WP/DTfpl63ie89T39vudQtmXi8W+K/rzr9Vft3v/13+z1rS+qP9Kwyd6+mG/n5ueetmlvOr3f87dtWt8vg4OPHGfnXvUl+8PPvp/JbcKMWXbSu95nD/7g6/3yyq3PfNtQ6P9XTvL97IUM1xzzDF/t2JSZ3+XOc7vgb/7BHr/vtsxr1ECGmpl7auEvKyaDwcQZHXDwoUN6fvz6ckjvuOy5l/taX+h1Lp84/0W3f3fQf6ty4K89p1/6Mbv/1q9Fr7XZ733+tbOv/Kwtvnt+3p8l931yKPy94YzLPzHo8/bu2Z33/brUcl9/l/36Djv+9Hdl6s7nlNdP7vvY6e/9WJ9xXh87XtmSyd5l1288zp3z4c/aQz/8Rua9cLD35nKjvL/lfi137nn9TJ315uhn9xzWPfloRcwz1VDnSbbc15yBPmtkz/dsuXXl23DyefPK7nPYcKvKGw0Xw4vOX8zOvOJvbOGC/9XnRdsnvH8o9Ynsz3mtt5Bapp8YvaC5+MNYvhezwT7YxW/W5conUPyi/xdf/X70u7+xrXj4Xhs37ThrGDXaPvo/fpx5fvbP67n5C1/uG/BAzVX8QnrEhCkDbo+/QJTzm0butsVvHGt7X+SPnDCtz4tW/LXGAw7K+3Of+9fX9vv+8b+BK1Rb+T68xbmXM59X+/bssS0bnxvyGHWO5WswKuXDbii5meX7IBy/mcaG2qCU6wdft3fPrn6v7/n4z+ofWp3XYkPjAdEc9dcsz8iz8cz8z2MmHt2byWHR+8Jg4p1VP//WF+1dH/uvdnjzpLJvYCceP9uef7ot87rlc8k/tDrP8d+uvTL6ufK9pmc/N5Zv/mXv+PF5mDsXkzRqpeLzKrth8Nf36a1nRHXnWca80dq4cln0YTbfOM/C/54trl+vtbg+3ZZNz0VzM94hkO+9OVu57TjxOvJs4jl20jvfF70X+J9zeS3EX/OMVi99OPrcFn/I9+bKP48NptJfz/LNEzfYXMm3AzbfZ433f/GmzJ/9/eLh/7jJ/nDn96MdAZd85r9H+XvWnl/2c2PlmlsINFg5Btprm+8FKC62uKiyP/xmF2J2UXnB+vfPd1Qlt+DjRqJ9zVMBfrLh4y9As86+2O7/3/9kBx02JrNXKN5+b5r8A4LLncy5e1f8z7l7W+JmIf5w6y+Wd934+czY+HF/k8lufP0F4sgJU8tyr0nuv7Xntre3Ydi6cW30d3/zi7c5/pr/3X/umHIEK7uuPTP/kLO3c1fevJ1/kCk3+eZmdiOZT25DpMwxf47/yj4S4TWX+1oQz2lX7kf+VP6z5Xvty/13yP6g4nW64Ct/3efrlfTBN9tgR3kX/eQ7mb/7v7nvTPMPY9l16eOPnv3W6Oj0IWOa+7wf5NZLfKTnxbXPZOa6v37598z+sFhufB6NmXR0tKMs/nvDqFHRjsZs+XZw+OvYIWPG9Xuuy/6AH7+2ucH2yud7Dx+JO0dyd7p5bQ302u3zctHt34nm4innX2HNR58w4BHFchbvuJgy87Toz14LnkG8I9vFO32y3y/95/TPIf7e5w2rN5fZr93+57imsuflSHg9K3Q2wkA7EbPnqnoEy3OLx/vzfH7/5J+viZ6XfeQw3pmr7CitJDRYOeIPVbH4qNPyB3864OHnWPZkLlR8A4n/H150/v/wvTPx4/Gfy5HvqVj5hwd6J+oF0Z4L5xP65c3P287XX+lzumT8s2VT95LHH0J8z5vLbRJy97Jc8nf/vez2kOT+W/sLv9dZ564d0ZEZb6piA+1p87q64//7L30e858x38/pWebWsGdaSUew4rmZZG7F1DmW+8HRZb/5Zp8iGL9xlOMH4KTUuZnkg2+57SXPNthRcP/gEYtPM/IPY7mnK8U1G3/IyPd9vIlyd33z832eE3/A8+y9cSvHvPyD/iFjWvq99ubb4x1rf26lHXZUS+bIQPzceI/2YPLtzMhXn/G/xUjk7xf+uSP7NdF5LcV5+s5cl52N16q/Z/tpWwPN13Kss1j2vIyP0Pi/c76vZ/OfJ66HVYt/k/n5BjpFcKS8nuV+rnVKkzjQZ43cx7JlZ+efM/x7+Ouc15zP+ZlnXWDHtJ4Z7dwcSe+Z2WiwipD7gpVvT2e+Q6Kx3A8vXmRLf/GjqHkYO3WGTXpDa3Q0ptyLL/4Z1q9YGu3leOy+BdHe1vjFJ3cPeO65uEPdS559Csm2F9ZljtIUurYh/lq5if+t/Yhb556dUV7+Ycwf96Y0PuIX7wn2PW5OuT4k99C7n6J08JhxNuucSzLPqaQjWDFv5LNPRYpP08q+tmAg6hzzzNxQ9rANdCpGORro390Vc61ndgbxB5kDDjksOnrj9Thmwv48y/VITDH89SnOdP2KJX2+Fp3yVVPT7/3AP3j4XJ8x5+xorvrzCr1nxM/318tyOiKTu5ffP1wN9bTG7D3a8VweymmU7thT326nXfiX0Z/9NctPgdu7e1ef9+NVS36b4CcaftlHFS793Dft4f/4drDvne8UwR2vbrXZ735/5mi8N2V+SqK/F/v7T/xvEG9bOYr/Xb1p9OtI/Xr4eEdrLPe1LftatvjMoeyd4f465afj5jMSXs8Gu5Z2KE1ioesrXe5RKc/f30f+5f/9QL/t8Nctf32Md3r4zs2RigargHji5Z4b7ryI/E1x2a9/Ev09+wNJvoUwhrpYgz/fD9vHp76V01GXgWTvrY33aKx7on9mLp6o2dS95LlHaQp9CPasf3HzdeqPlAr/GfxN4uy//Ez0wh+fpub15rXiufppEH5dR/yz5X6QGWgvVL7G0j+8+ZuRN6fRKZ0JjgCVWny6QXykNImhzjHP8NS5H4pOv/EjB/5v5Ht947/H4tNMyvFc8oHeXIf64Vw9RTD7g212HnGdxnvbL7/25swHo3JdvGfaSW8peATG+cIEsThP/6ARN1jxhz3/8H/P//xS5rU/fj2Lx8TzN6rNITQl5baHPJvPG3/98nmSr/Zy54nnFb/H+qnRfuqyH5kpJPuDr1/nW4n839B3nMWndJ/1wWuiU0hzay77NDZvljrWr7bj3/LO6O/emGUvjOTNeXZNZvOc4p2gPgf9LAk/W8Kzjs+iiK8X9IZkKNcnpS27Cff3S7+uLxa/9gz02hZ/9jj4iLF5d1IWasxcpb6exWevDLbAzkCXF/h89sf99MB8nxeiM5N6Pwv7e6o/N3dHY/we5HlmN1zZ2b2+5cWyblKTosEqILoo+ZDD+p0bXmglwezrgrK/Fr+AxRdnFiqk+OiFv0n5G3UlFd1AC1Bkr2SUSz2CNdCHxkLX45Tbi17M68I/YLj4xcvfOLwB8vrzr8VHthR+ys4BWXvl/E3JT3V7bcvm6GLf+BTB+LSI3FOa3vGXfxudQlFOzYLzJjH3OpZY7mOF/s2HMse8ufU6zr3I3D8s+4fAOEcXv3kPdc97WnJPDck+FW0o1J0f2XvAfY7mfljMnrflOidja5f/PrpmJfuDh9dE9o4yz3PKiadmxsQfLvzx+lGj+lyXGteYZ5O98qS6aqEr52v9/HXLj8JvWfKcLb33R322MfeaC//ZfSdmvHPJ5/eW558b0s+lrHJZTkf7BuI7jeLrXOJFLuJGJ379iY/Sr1+xOFOTfmpz9nXgrmHUAf1OEXQ+9p6bru3zHp37vpl9TVI5X/eXzV+D/EwPnxfxNcYDbffr2zr67KQcyuqeI+H1zHfUDrbDKPfMlezTa3N3YDeMPiBaxMI/I2ef1jzQaZWe1VDn60hBg1WAv8jteu2VPoXlp1cd0HRo3uYq3oPiH7IGOgXHJ6F37Lnj471F/oYz6YRW+82/3WgnnX1ptFernCdtPv7h0z9YxD9f9kpb+agf4rI/NBZzPU458Gx8IY76xlHRz+KZ+c/hp8D5i6G/4OWebjRUvncy/sDvbzivvtQevchmi+v0xbUro783HnBg9KLpp9qUW7Pg8p1LPtRTBJU55m8sx556ViaXXL4nOLs5yz1tcSQY6lGSgV6fCl2LUO6romaLF5nJ/bCW71rF+LHsxS+cNxFXXPe/+zRR/mEjbpRyL6KvtOX/s/ne7KcW3hvl5h/+sxtJPz3cj9rHWfoRKz9t2eevZ+bz0huMocj3WpCr0q6/yn7Njvm1zCr/3JK9NHsse7GCuInzDHN3qFXKsuXxzomtm/ZfMuD/1t5MO28ch9JY++v/uGnHZ95vB2rMKv31LPdzWa7sRWRcPHfqR4+2fbt393v+jNPekTeT7GvilNtSjEQ0WAPwiesrP8VvBvEFlF5ot2ed6uFvqCe+bW7vn3qsp7vb/v3LH8tcLJ97oa0Xm7/x+J6q+EXBP5xkL1HrC0b4BzU/xc5XlPPn+f/DX2T9eYXuA1Eu8u0pyd6Llm2o163k+xCXvdjFQNctlOM9sLL5hzGvA/8w5aejbdm4/8Xd91j6BxXfExzi39n3Nq38/a/tjPd/ss/j8RtQ/GLq5+iX22luuQo1VAOdMpl0juUufHHYuAnRv8nqpb+LLtD1IxrOm+RiTlssF/EHez+SWeioSu6eyHzzbLA9lr5jpdx5LfjZCn76S65oYZotL9ihY8ZnHvMjVX40Jn6/8A/L3mh4zcTXfQx2cbnXYnZzlX19Q7nzbW0YdWDm9cN/Vq8pP7ric/a5ZY/0eb2Pl2/35130t/8c1cRQX3tyFzuqVP+nvbNZsaOKwmgUDC2BGBXFODEzJ5k68RUc+go+ga/hgzgTnGSYJ9AMhBhEBCHiHxkFBHHS9ir9mu3Jqeq6fSvmVLIWhE7o3Hur6p6zz/7fr15/fUr1I/2YqOexXLvx5nmaJZkMlTreAqdQZOJXdz4/aK7gCHAv2Zttkwv+Xet8ejpGjDOMUfS2zK6bM8z2Ls8OjWBheHIOQBxJNWrcGlft3D8i2W+8e2v2M0fXzbZAA2sGlDAUXzZZXVRsvKrwcshSPDp3+NVw6VSE+9M/6Q/xWNYWte3By8KjUBVlD485cFi3UYjRWBPBunpybYqULM2y6gmzeJhQfJPXC20qQ547BvKoG5hrxIhHyHAYksKHUOI7zsGBxzd58YfA84DUMpDqVA+gOfhMvrdRlbocig8f3Ov+Pl0CUepy7cfusRys5ODT2jhOl7TkJvqIUTrqOltLrTnttSaGQzpP7d3j+/at96fBr9XhgPHEnkQJYz2wX2Jg1YY0RAceP/pteo6HdORkrdJ8hf0akl5e1/SIcO3ca22XnTEHa7sfkgGy9j5jnC0xcgQrNZ6vXD05bzSRNQM4xXqt7kMMs8ePfpkiMEn1I+Lw8P7Xk4xqDaw4AIC9vtSBl+9i5PlrbQ1WS8a59EjdUOtM5F4xKjA2ee71d3uXZ4dGsOqQYCBAQKdQOqHOybRat4cMZNxEAgo5J/n8qhPuPQtpCQ2shiqQOSgwAoBF1UtzmysGzWZrIzS8P++ZWpd4lPB08prWC56GDizC925/MKVwbRXVeFqsiWD99ecfi8IPesKsfj/xOkGv0LQWVI4G14uihnIfoZIUh5rTzCGCcKqeoTnaTpatM6AHyhzGHI0vKmkbPxIxrjBw6p66/m+9C+RQ5VlkyOGxeywHa6bR8520dTM1+jgyGNx4bFODVpmrOb0se/f4/v7jd+dNjEJreMaogAwSPj09fSLVbc1eQrZxxuB0Iv2mwhrE8M2aHm2d1b3JM6q1uDjFcn6SJlm91j15zt5NJLVdQ9XDvjSjbA8kQpDoC+soEQN47a2b00+csmnkBLWTHs9ymml4Jt/SGRBltb5PiKOJLJol46Otxx2JKndxgrddmOfuidfRsZfXsQ4zCLxHryU57F2eHUubNdUalDVLhDWUzsiRmXXGH2swZ3ZttvK8oYHVgNBDucrGrRuWxdJ6fBD4pD9Ukt41Nx291tWkiQGLcEmBRgEkpE9L2uQYj0rPU4LRlDQ+BNFlPRURoq1BBRw4GCYcOAjC+vxHK0Dlu0QZqUP7ED51NgfwnL747NMnojI9Drm/1H7xJ8Yc31HW99pZNP8nHKgxrloDp11TPAueF5FOBP9l91gdSMy6Io2n9cbBXrohcV2RY3PteVHojokut4Zpj9E9vrVJwEXEeZSoFa3/+YnigAzKXmrnwrR8+PEn0wiBpRQtzgvSUkdTfNmbpP9Bved6L8jtum9//v7+lZOzfYXDoq6T2ihlbtBw/X9LjBzBqtePAcW5iaMrtXo4hH794dv/GKoooe1912eH/Prm7pfT3/M+ed3UkfZsXfdqa9t0y2Nqf58m9QxgfczpWJUYPnkd58JFA+rzuvqs9yzP5mjPUe5xzdnV03GRg3FeZiTMXC8C1iBrMTrhGmfwHnnpyjsfnT7rixARERmB2gjgonqUQ2awiYjIi4MGloiIiIiIyEa8/KwvQERERERE5HlBA0tERERERGQjNLBEREREREQ2QgNLRERERERkIzSwRERERERENkIDS0REREREZCM0sERERERERDZCA0tERERERGQjNLBEREREREQ2QgNLRERERERkIzSwRERERERENuJvBO7mZ8LcwYcAAAAASUVORK5CYII="

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1MAAAIkCAYAAAD76HFRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AACAASURBVHic7N13fFX1/cfx97n7ZtwkJISQQCCEvYQgIIqoxbpH3aL+tLbaoVVrl79aq9Wq1Z+/Vqt1VX+uOlurddaFAyciS/YMhJEQsnNzV+74/XH1YiogHEjOTfJ6Ph484HtzEz5RSO6Lc873GCo6PiEAAAAAwF6xWT0AAAAAAHRHxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMSaqoOFsVFbOsHgMAAABAN0JMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJxBQAAAAAmEBMAQAAAIAJDqsHkKRLLrtQh8+crquuvF6VlVUd3vbgo3do+MjyDo/5W9t03W9u1by5C3f5vKcff0733PVw5w4OAAAAoNeyNKZOP+sk/ejS78rldqqmuvZrby8rK5UvJ1urV67TRRf8dJcf58FH71BxSZF+fvm1mjd3oW6+7RqdesaJqq2t17PPvNiZnwIAAACAXsqy0/xuvu0anTnrZF18wU+1euU60x/n9LNO0uCyUr38wuupI1UP3POYGhoadcxx39pf4wIAAABAB5Ydmbr6lzfu8XNra+t2+baKA8crEolo3qeLUo9VVlappblVxSVFmjx1YofTAQEAAABgf0jrDSgKCvOVlZW52+cUFhbI729TXW19h8dra+vkcrk0aPDAzhwRAAAAQC+V1jH1pekzpmrO3Jc0Z+5LevWtpzV56sRvfJ/NVVu6YDIAAAAAvVVax9S8uQt13JFna8bUEzVj6on6+eXXSpKuv+mqPQoqAAAAAOgsaR1T/2ne3IV66IEn5XK5dMrpx+/2uQNKS7poKgAAAAC9UbeKKUnauGGTIpFIal1bW6esrEwVFOZ/7bmRSEQbN2zqyvEAAAAA9BJpHVOTp05UWVlph8cGDR4ol8uVWm+u2qKs7ExNnjIh9VhZWamGDivT1i017OQHAAAAoFOkdUwNGjxQv7z6J6n15KkT9b2Lz1FDQ6MeuOcxSdK/X56tmupanXDy0anrqC6+5HxlZWXq/nsetWRuAAAAAD2fZfeZ2hPPPvOiCgvzNWfuS6nHVq9cp4su+GlqXVlZpauuvF633n6d/njnDZIkf2ubrvvNrRyVAgAAANBpDBUdn7B6CKtVVJwtydCCBU9ZPQoAAACAbiKtT/MDAAAAgHRFTAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJhATAEAAACACcQUAAAAAJjgsHoASbrksgt1+MzpuurK61VZWdXhbWVlpbr19utU1L9QkhQJt+u+ux/Rs8+82OF5Dz56h4aPLE+tn378Od1z18OdPzwAAACAXsnSI1Onn3WS3prznM4+79Sdvv3LkJKkC86+VDOmnqgNlVX63sXnaPLUiannPfjoHSouKdLPL79WM6aeqA/mzNWpZ5yo0886qUs+DwAAAAC9j2UxdfNt1+jMWSfr4gt+qtUr1+30OceeMFN9+uTp70+9kDpidf89j0qSTjn9eEnJIBtcVqqXX3hd8+YulCQ9cM9jamho1DHHfasLPhMAAAAAvZFlp/ld/csbv/E5FQceoIaGRs3/dFHqsbraevn9bRo6rExlZaWqOHC8IpGI5n3lOZWVVWppblVxSZEmT52YiiwAAAAA2F/SdgOKsrJS+XKy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+7PT6P+LHQPN7dflqyPTE2GYnQPD3FsQPTtHsZS7muuTU+jdUsXnv1HYYjAFBlNEREQ0ekXdmo6YBws9y4xbjEPu2/9lK66c/QZXzn6DgdZODFx0YPBip+fv1k5EJMchMj0BkWkJiExLRGRaPCLTEz1/pycgMjVBscKgloFOJ1zbauCs+DMGv3Fcz0MlGnEMpsBgioiIiMYAswHGu/JhvPNWGL5nQ2SCeUS+drDHjb5jzeg/0oi+mkb0H20eke8lGgnRoU4AEREREY0AZx/cu05I85KiZ2XDOP82GGZnIzrPet2+ZrDHjb6as+j7ogn9R5rQf5xD+Gj0YjBFRERENAb1H2lE/5FG6d/RBRmIypuI6PyJiMpKQURCDCIsJkTEmhBhMSLCYsTAt93SkD8xDHCgtRMD5zsw0Ob5e7C9K4RHRTSyGEwREREREfprW9Bf2wJXqBNCFEYih9+FiIiIiIiI1BhMERERERERBYHBFBERERERURAYTBEREREREQWBwRQREREREVEQGEwREREREREFgcEUERERERFREBhMERERERERBYHBFBERERERURAYTBEREREREQWBwRQREREREVEQGEwREREREREFgcEUERERERFREBhMERERERERBYHBFBERERERURAYTBEREREREQWBwRQREREREVEQGEwREREREREFgcEUERERERFREBhMERERERERBYHBFBERERERURAYTBEREREREQWBwRQREREREVEQGEwREREREREFgcEUERERERFREBhMERERERERBYHBFBERERERURAYTBEREREREQWBwRQREREREVEQGEwREREREREFITrUCbhe3qh4GbbcydK/t739AX73L/8WwhQREREREdFoNip6pt6oeBkTrenYsP4ZFBfdi6rKatx3/734h++XhjppREREREQ0SoV9MPUP3y9FVvbN2L3zExypPg4A+NffvYlLl77F4rtLQpw6IiIiIiIarcI+mJrx3QK43W4cqTkhbWts/AqdHQ5MtKZjVtH0EKaOiIiIiIhGq7APplJTU9DV1Y22i+2K7RcvtsFoNCIza1KIUkZERERERKNZ2AdTvrR8ZQ91EoiIiIiIaBQbNav5XasJE/4OM2aEOhVERERERGPTsWNbQ52EgI3anqmMm61+73vs2DacP/+XG5gaIiIiIiIabcK+Z+rixTZM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"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAysAAAIUCAYAAAAaDLOQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AACAASURBVHic7N17fFxloe//79wzufWSkKZN2iYthEKxtIUmIFgwQLmVclGweKFbAd0/RLbIQbQoHFBwIxvhKPKTDeiveOEqcukWBeH86AYhrVLooViqkN5C25i0zWWSzJrLOn+ka5iZTNIkbZJnJp/368WLZmZlsmZmrWc93+e2XCo/1xYAAAAAGMY91jsAAAAAAJkQVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMFLWh5WFC5dr4cJLx3o3AAAAABxiWR9WAAAAAOQmwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkbwH+wJXfe2LOvW0k3XDtbeosXFbynMPrrpHNXNmpzzW2RHSzTfeoXUN6/vd7tFfPaX7fvKLg901AAAAAFls2GHl059Zpn/96r/IH/Bp187mPs9XV89Q8YQibd70vq5Y8fV+X+fBVfdoWkW5rrvmJq1rWK/b7/yOLrr4PDU3t+rJx54d7u4BAAAAyHLDGgZ2+53f0SWXnq8rV3xdmze9P+w//unPLFNV9QytfuaPiZ6WB+57WHv27NVZ59QP+3UBAAAAZL9h9aysvP77g962ubml3+cWHj9PlmVp3dq3Eo81Nm5Te1uHplWUa1HdgpThYgAAAADGjxGbYF9aVqLCwoIBtykrK1VnZ0gtza0pjzc3t8jv92tm1fSR2j0AAAAAhhvx1cBOXlynNQ3PaU3Dc/r9nx7VoroFB/ydHduaRnq3AAAAABhuxMLKuob1Ouf05Vpcd54W152n6665SZJ0y203DCqwAAAAABjfRu0+K+sa1uvnD/xGfr9fF3763AG3rZxRMUp7BQAAAMBUo3pTyK1btsuyrMTPzc0tKiwsUGlZSZ9tLcvS1i3bR3P3AAAAABhkxMLKoroFqq6ekfLYzKrp8vv9iZ93bGtSYVGBFtXOTzxWXT1Dhx9RrQ+bdrESGAAAADCOjVhYmVk1XdevvDrx86K6BfrSlZ/Vnj179cB9D0uSnl/9knbtbNbS889MzGO58qrLVFhYoPvvWzVSuwYAAAAgCwz7DvYH8uRjz6qsrERrGp5LPJZ+N/vGxm264dpbdMfdN+uuH98qSersCOnmG++gVwUAAAAY51wqP9ce6504GAsXLpfk0ptvPjLWuwIAAADgEBrVCfYAAAAAMFiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABjJe7AvcNXXvqhTTztZN1x7ixobt6U8V109Q3fcfbPKp5ZJkqxwRD/76f+nJx97NmW7B1fdo5o5sxM/P/qrp3TfT35xsLsGAAAAIIsNu2fl059Zpj+teUrLP39RxuedoCJJK5Z/VYvrztOWxm360pWf1aK6BYntHlx1j6ZVlOu6a27S4rrz9OqaBl108Xn69GeWDXfXAAAAAOSAYYWV2+/8ji659HxdueLr2rzp/YzbnL30NE2ePEmPP/JMosfl/vtWSZIu/PS5knoDT1X1DK1+5o9a17BekvTAfQ9rz569Ouuc+uHsGgAAAIAcMaxhYCuv//4Bt1l4/LHas2ev/rr2rcRjLc2t6uwM6fAjqlVdPUMLj58ny7K0LmmbxsZtam/r0LSKci2qW5AIMQAAAADGlxGZYF9dPUPFE4rU3taRMo/FCSKFhQUqLStRWVmpOjtDamluTfn95uYW+f1+zayaPhK7BwAAACALjPpqYM3NLQfcZse2plHYEwAAAAAmY+liAAAAAEYa9bBSVlZ6wG0qZ1SMwp4AAAAAMNmIhBVnbkrxhCJVV8/o87wzT6W5uSUxfyWdZVnaumX7SOweAAAAgCwwYj0rzc0tmjx5ko6rnZ94bFHdAk2rKNc//t6oxsZt2rGtSYVFBVqUtE119QwdfkS1PmzaxUpgAAAAwDg2YmHld0/+lyzL0iWXnp/oXfnKVSvU2RnSA/c9LEl6fvVL2rWzWUvPPzNxo8grr7pMhYUFiXuyAAAAABifRiysrGtYr5tvvEOFhQVa9ehPtabhORVPKNIN196SWM64sXGbbrj2FnV2hnTXj2/VmobnNH/BMbr5xjvoVQEAAADGOZfKz7XHeicOxsKFyyW59Oabj4z1rgAAAAA4hFi6GAAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJG8Y70DAAAABytox1Qcj6rIjqrIjqs4HlWxoiq2Y/LYtrpcHnW53OqSRx1uj5rdfm335I31bgM4AMIKAADIGkXxiI6Idas61qNZsR5VxXv/X2DHhvV6jZ48bfXkaYs7T+95gnrHW6A2t+8Q7zWA4cqpsLK8Z7da3T61unxqdXnV6vap051TbxEAgHFldrRbi6LtOi7aoSOi3ZrUTyix5RrW61fFwqqKhXWK2hKP7Xb7tMmbr/WeQr3on0RdAhhDOXX2/Wv3rj6PheXSHrdPLW6f9ri92qveENPq9qnF5dUet1d73D7toRUFAIAxVxyPqDbaoUWRTh0f6VCJHU15frihZCjK4lGVWe1arHZd1f2hXvNP0Au+SWrwFSvmGvm/D+AjORVWlKEAC0iaGo9oajxywN9udXm1z+3VbrdP290BbfXkaZs7oEZPQCFaVQAAGBHlsbBOt/bppGiHjop2pT07tuHAJ+lUq12nWu3a6/LomUCpHssrVbfLM6b7BYwXOVUDP9jWlsl2TJNjMc2KhXWiOlOea3N5tM0T0E63X01uv5o8AW13+7XZm39QfxMAgPFocjyiemufPhlp09HR7sTjo9FzMlwT7bhW9DTr/HCrfpN3mJ4JlMhysbAqMJIIK4NUbMd1TLRbx6i7z3PvefK0yZOvHR6/drn92uX2aafbpy56YwAASCiOR7U40qZPWm1akNSDYnJAyWSCHdf/071bF/e06uFgmVYHJo/1LgE5K6dq02NV2NXEwqqJhfs83uT26/9487XBm68N3gLt9PjHYO8AABg7+fGoPhHp0KmRdh0X6ZQzeCrbAkomJXZM13bt1HnhPbozv0L/8AbHepeAnENYGUHT4hFNs9p0ptW7wkiL26t3PPl6xxvUO958feDJU5yJegCAHBOwYzox0qlTrXbVRjrll73/GVfiX7lkdszSTzsa9XRgsn4RPEw9zGcBDhnCyigqicd0SrxDp0Q6JEldLrc2efP0rieojZ58/c0bVMhNAQcAyE5HRbq0zNqnk6125SXFEtOvz4eCW9JF4b1aHGnX3cFpWusvHOtdAnICYWUMBW1bCyLdWhDplrRHMUkbvPn6b3+R/ttXpDbmvAAADBewY6q32nVeuE2Hx3oSj2fbNflQKYnH9f3QDj0Xmaif5ZcpwgR84KDkVG042wtGt6T50W7Nj3bra2rW296gXvMVab03X9u8gbHePQAAEqbHwjovvE+nW+0qsOOSsv86fCgttdp0TKxb3y+Ypu0eruHAcBFWDDYv2qN50d5WqlaXR2/5CtTgy9daX6F6aKkBAIyygB3TJ6yQzrDadGyWLDc8lmbGInqgfavuzS/T6sDEsd4dICsRVrLEZDuueqtD9VaHevRPveYv0J/8xXrbG5TNJH0AwAiaG+nW6VabTrE6Fdw/FyWXr7mH2le7/ql50W79KH8KjY3AEBFWslBAtuqtTtVbndrj8ujFQLH+6C/WLo9vrHcNAJAjJsWjWhJu12lWhyrjkcTj4+Vae6idbIVUFd2uWwvLtYNhYcCgEVay3CQ7rkt69umSnn36mzdPL/kLtcZXyKpiAIAhK4xHdXIkpMVWSB+LdsvpAxiP19eRUBGP6n+1N+lH+WV6LcBqYcBg5FZYGefDoebEwprTHdZXu1v1iq9ATwQmagsT8wEAAwjacZ0YCekTVqcWRLs/qhi4cvOeKGMtIOnb3c16Mh7Ww3mTud8acAC5FVZo+UlYHOnS4kiX/uIN6onABL3r4666AIBeeXZctZEufSIS0gmRrqRnCCij5VPhdlXFIvpBQZnCzGMB+kVYyXHHRXt0XLRH73n9+p1/gv7sLxjrXQIwCEXxmMpjEeXtL9aithRxSRG5FHG5FZEUcbn2/+ySRWUHB1AYj+qESLdOjHRpfrRHPibKj7mF0R7d0blTNxeUq43h20BGORVWRIHbryOjEX0r2qLt4TY97S/S//YXKErlBhgxQTuu4nhMxXZcxXZcRXZMxfGYCmWrwI4raMcVtG3l2XHly078nG/HVGQPr23bkktdLpe6XG51u9zqcrnULbe69v+70+1Wl9xqc7nV7vaoTR61uXv/3U15kJMqYpbmR3pUF+3W/GhP2rNcM00wKxbVnZ27dHNBmXayUA7QR06FFVqHDqwyFtXV3Xv1uZ52PRMo1At+JuMDwzE5HlNFPKLKWERT41FNj0U0yY6p2I6pJB4/qNceblnmkzTBtjXBjkmKDel3Lbl6g4vLo30ut1rdXv3T5dYet1ctbo9aXR41e7wMVzFceSyqY6I9OibWo2OiYR0W/+g44BpprinxmO7s3KX/WVCmfzDXFEhBWBmnJtpxrehp10XhDv0uUKzVgUKGkQAZTItZqohHNTMaUaUdVXk8pqqopbwBRvZnY1nkk1Qaj6tUTtAKZ9yu2+VSi9urlv1BptXt7g0ybq/2ujxqdXvUQQPIqAjGY6qORVQVi+iomKW50R5NtlODcjYei+NVoS3d1tms2wsO09u+vLHeHcAYhJVxrtCWvtDTrqXhkJ4MFOqFAMPDMD7l2XHNilqqikVUFY9oejyqWdGI/P2EkvFa3uTZvT20lZIkK+M2YUmtbq9aXB7t9Xj0T7dHe1ye/cHGqxa3W23unLr8jLjqqKXKeFRVsYhm7D9GS+N9e8/G63GZK/ySVoZadXtBCYEF2C+nrhYU0sM30Y7rip52nW+F9Ou8Iq1hIj5y3MeiPZobDWt2NKrp8YjKMlT8JMqV4fBLmhqPaapiA45G2+3u7Ylpd7nV7nJrn9utDnnU7nb+7Va7u7cHZ7zIs+M6cn9onhmPaHosqtmxSMZtOTZzk0/SzaFWfa+gROsJLABhBalK43H9W1ebzra69GBesd5n7CxyxJGRsD4WtXRM1NLHYn2HOFF+jL6yeFxlg5zf0+5yq9Xt1t79PTN79s+raXF7tNfl1j89HvVkQa9wfjymSXZck+2YpsRimhKPako8rjI7qvJYTEV238+DY3N8uiG0R3cUTCawYNwjrCCjI6JR/Xtnq17xB/XLvGKWVETWqYpa+tj+/46KWQomrbBFWZF9imxbRbGYqg6wcECny6Uel1s9Lpe6XS712C6FXa6Pft7/XNSWoi4pKrciLikq1/6fXYnHwwc4TFyS/Lbd+59s+ZL+7belQsU1KW5roh3VpLityfGoDtT8w7EJh1fSN0N79cOCSQQWjGuEFQzApVOssGqtFj0dKNBzeQWKcKddGKowHtOxUUsLomEdG7E0kYnG41KBLRVk6J0wAzdcxNB4JV0f2qe7CyZqHYEF4xRhBQeUJ2l5OKT6SI9+lVeoN/wUmBh7LttWdSyiBRFL82OWDo9GlNz/R3kAIBd4JX0j1Ka7CqS/EFgwDhFWMGiHxeO6tqtdm6xu/TyvUFu93LwKoyvPjmthxNLCiKVjo5aKU1rQabUGkJvckr4RatePCCwYhwgrGLIjo1H9oHOfng/k6fG8Am4ShxEVsOM6PmLpRCuseVFL/qTnOOcBjBduSdeGOvSTfDHCAeNKjoUVjBaXpHPCPaqLWHooWKj1PlYNw6Hj2x9QTohYmh8JpwUUABif3JL+ratDkktv+LnuYnzIsbBCK+tomxy3dX2oQ3/xhvXz/ELtc9PLguHx2bYWRML7A0ok6Q7xDO8CgGRXd3WoxyW9RUMhxgHCCg6J46IRHd2xV08E8vVCIE82q4ZhkKZHozrd6tHHI5byWV4YAA7IJenaUKfuLHDrHR/zR5HbciqsiMrNmAra0mU93To5YunBYIG2enPs8MIhE4zHdVLE0qlWWNWx5PtmcA4DwGB4JV0X6tAdBUXaRGBBDsup2iQtsWaojsV1W2eHfh8I6Ld5QYXpZcF+NZGoPhkJq9ayEjfH47wFgOHxSbo+1KnvFxaqkRU6kaMIKxgxZ4ct1UWi+kUwqLdo9Rm3CuNxLbYsnWJZmhZ3lhpmHgoAHAp+Sd8Kdem2gkJt83oOuD2QbQgrGFGT4ra+EerSX3w+PRzMYwL+ODI1FtPZ4bA+bkUSq3lxjgLAoRe0pW+FOvX9gkJ9SGBBjsmtsMJwI2MdF43q6M5OPZGXp5f8/gP/ArKSy7a1IBrVknBER8Wi+x+kFwUARlqBpG93dem2gnzt8hBYkDtyK6zQamu0PFv6QndYJ4cjeiiYpx20/uQMvx3XqVZEZ1oRlcR7ownnIwCMriJb+laoW7cV5OufHkYyIDcQVjDqquK2bgl160W/T7/L8zMBP4vlx20tsSI6zYqo0CakAMBYm2BLN3R16/sFQYZeIycQVjAmXJKWWFEdF43pN3l+rffl1KGY8ybG4zo7HNFiK8qqXgBgmMlx6YZQWD8oCKidwIIsl1M1RCpL2WdyXLq6y9LfvFH9Os+vnXRbG60sFtc5VkSfsJx7ozAfBQBMVBa3dX1XWP+eH1CIwIIsRliBEeZEbf3PzrBe8Xv0TMBLwWqYGdGYllpRzY/E5RbnGgBkg6kx6X90WfphfkDdbsptZCfCCozhlvRJK64TIhE9HfDo5UBOHZ5Z6ahITOdYMc2Jcn8UAMhGlTHpui5LdxYwRxTZKadqg4SV3JBnS8t7YjrFiunRPJ/+5qOXZbTVWjEtsWKaEWPSPABkuxkx6RuhiP6jwKuIi2sqsgthBcYqj0tf74pqo9elR/O8avbw/Y6kgritxVZMp0RsTWL5YQDIKVUx6atdMd1TQFhBdiGswHhHR6VbO6N62e/WcwE3424PsalRW2dEYlpk2fLtf4xzCQByz5yodFUoqv8338ONtJE1RjSsPLjqHtXMmZ3yWGdHSDffeIfWNazvd7tHf/WU7vvJL4bxFznxclm9ZasuEtPqgFuv+F2KU9AelOOsuE6x4qpxFvbi/AGAnDcvKn2+J65fBrkxM7LDiIWV6uoZKp5QpM2b3tcVK77e73YPrrpH0yrKdd01N2ldw3rdfud3dNHF56m5uVVPPvbskP4mrcG5L9+WLumxtdiy9VieW5t8fOdDkRe3tTjS+/mVxCUmzAPA+PNxS2p3xfRMHoEF5hvTYWCf/swyVVXP0FNPPJfoaXngvod1+BHVOuucesIK+jUlLl3TZWuzR/pdUNrKfJYBlcVsnR62VRux5ZdLhBQAGN/ODEv7XHG9EmAOC8w24mGlubml3+cWHj9PlmVp3dq3Eo81Nm5Te1uHplWUa1HdgpThYgdCWBl/johJ3+yU3vHaeiYgfejlGHC4bFvHRG190nLpyKgkQgoAIMnFPbY6XLbe9HPthLlGLKyUlpWosLBgwG3KykrV2RlSS3NryuPNzS2qqp6hmVXTCSsYlLnR3v/+4rP1gn98h5a8uK0TI9JiSzos3ttiRkABAPTl0opuyZat9QQWGGrEe1ZOXlynNQ3PSco8uT6THduaVFu3cMh/i7CC4yIuHReR3vXaeiFg6/1xFFqmxGydGpZqI679Q70IKQCAgbkl/Uu3S5Kt9f6x3hugrxELK+sa1uuc05cnfl5Ut0C33HaDbrnthkEFluEgrMBxVNSlo6LSFo+tFwO2/o/vwL+TjSbEbR0fcen4iEsVsY/GHRNSAACD5ZK0otslj+L6C4EFhhm1CfbrGtbr5w/8Rv/61X/RhZ8+d8CwUjmjYlh/g7CCdDNjLl3RJXW4bK332Vrnt7Utyxc/CcZtLYi6dLzl1qyY5KIXBQBwkFySPtftkRQjsMAoo7oa2NYt22VZVuLn5uYWTasoV2lZiRobt6Vsa1mWtm7ZPqTXJ6ygP4W2S5+wpE9YUovbVoMvrrX+uNqy5AaTRXHp2KhLH4u4dGQ0deUWQgoA4FBwSfp8t1duO6a1Aa4uMMOIhZVFdQvU0tyaEkJmVk2X3/9RXN+xrUknL67Totr5iZ6W6uoZOvyIan3YtGvIQ8UIKxiMkrhL54TdOicsve+x9RdfTOv9tsKGHT4Fcenjlltzoy7NZIgXAGCULO/xyKW4GgLxsd4VYOTCysyq6friFZfqqiu/Kak3vHzpys9qz569euC+hyVJz69+SaeedrKWnn+m1q19S+sa1uvKqy5TYWGB7vzBvUP+m4QVDNWsmEuzYm5d0iO9443p715bf/fEtWuM7kA0MyodFXXrqKhH02MfHc8EFADA6HHpkp7eaxCBBWPNpfJzR6wedNXXvqjln78o8XOmu9lXV8/QHXffrPKpZZIGv2KYY+HC5ZJcevPNR3RXe+CQ7TvGtw6XrX944trmieufbqnZbavVc2hPlcqYVBFza1rcpcqYW1NjLgUI3AAAQ9iy9VReVH/2E1gwxIQtjwAAH0hJREFUdkY0rIyG5LDyH+15Y707yHEfuuPqcNvqktTlthVySd2yFXLbCu3fJmBLfkl5tuSXS3m2S8W2VGS7VRzvnT9TZBNKAADZ4am8iP7sj431bmCcGqPBLiODYWAYaVPjHk09BA1MWd1CAAAYVy7s8ctjW/rvAIEFo4+wAgAAgAGdFw4oqIheCETGelcwzuRUWBFhBQAAYEScHvarIC49nWfJdlHnwujIqbBCzwoAAMDIOSESUMB267FgD4EFo4KwAgAAgEGbH/XL3+3Sr4PdihFYMMIIKwAAABiSo6J+fbnLo1XBkLrcB94eGC7CCgAAAIZsesyrr3UV6efBkP7p4V4sGBmEFQAAAAxLcdyjq0JFejQY0nu+6FjvDnIQYQUAAADD5pNLn+su0p/i3VoT6Bnr3UGOIawAAADgoLgknRHO19SYV78NdipKlQyHCGEFAAAAh8TcaEAlIY9+md+hDjfzWHDwCCsAAAA4ZKbEfboqNFG/DrZphzc21ruDLEdYAQAAwCEVtD36UtckPRPs0Nu+8FjvDrIYYQUAAACHnEsuXdA9QUdEerQ6r0M9bnusdwlZKKfCiggrAAAARpkbDWp6l19PB9rV6LPGeneQZXIqrNCzAgAAYJ6iuFdf6J6shlhILwU6WC0Mg5ZTYYWeFQAAAHPVWYU6MpqnZ/P2aYs3Mta7gyyQU2GFnhUAAACzTYj79IWuw7TB16U/BtqYy4IBEVYAAAAw6j4WKdDsaFB/9nfojUDnWO8ODJVbYcVFWAEAAMgWQXl0mjVRtZEiveZv11u+kGJU55Akt8IKPSsAAABZp9D26szwZJ0YKdZrvnat94fGepdgCMIKAAAAjFAU9+mscInqIsV61d+ujd6QbKp34xphBQAAAEaZGPdraU+pPu6aoLX+Nr1FT8u4RVgBAACAkSbZfp0ZPkwnWZP1V1+b1vs6FGb1sHGFsAIAAACjFdheLbZK9HFrsho9XXrPF9LfvV2KuAguuY6wAgAAgKzgkUuHxwp1eKxQkvQPT0h/94b0ni9EcMlRhBUAAABkpdmxQs2OFeqssPS+J6T3vSG97+1SyB0b613DIUJYAQAAQNabFSvUrFihzghLe1yWGr0hbfV2a7unS1GqiFmLsAIAAICcMskOaFIkoIWR3p+3eru03d2lfe6I9rot7XVbBJgsQVgBAABATpsRLdAMFaQ81umKat/+4LLPHVGL29K+/f8ebcG4Rz7bJb/c8ttufejtGfV9MBVhBQAAAONOge1TQcynilhBn+e6XTF1u2LqckXVs///3a6YMk3hd0nKsz3y2x4FbLf8cvfZxiu3PLbkkVseSe7kn+3e55PdU/TeoXmTOSCnwooIKwAAADhIQduroO3VZAXGelfGvZwKK/SsAAAAALmDsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAj5VZYcRFWAAAAgFyRW2GFnhUAAAAgZxBWAAAAABiJsAIAAADASIQVAAAAAEbKqbAiwgoAAACQM3IqrNCzAgAAAOQOwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARsqxsAIAAAAgV+RUWBE9KwAAAEDOyKmwYrsIKwAAAECuyK2wQs8KAAAAkDMIKwAAAACMRFgBAAAAYCTCCgAAAAAjEVYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgpBwLKwAAAAByRU6FFdGzAgAAAOSMnAorDAMDAAAAcgdhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASLkVVlyEFQAAACBX5FZYoWcFAAAAyBmEFQAAAABGIqwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGCknAorIqwAAAAAOSOnwgo9KwAAAEDuIKwAAAAAMBJhBQAAAICRCCsAAAAAjERYAQAAAGAkwgoAAAAAIxFWAAAAABiJsAIAAADASIQVAAAAAEYirAAAAAAwEmEFAAAAgJEIKwAAAACMRFgBAAAAYKScCityEVYAAACAXJFTYYWeFQAAACB3EFYAAAAAGImwAgAAAMBIhBUAAAAARiKsAAAAADASYQUAAACAkQgrAAAAAIxEWAEAAABgJMIKAAAAACMRVgAAAAAYibACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRciqsiLACAAAA5IycCiv0rAAAAAC5g7ACAAAAwEiEFQAAAABGIqwAAAAAMBJhBQAAAICRciusuAgrAAAAQK7IrbBCzwoAAACQMwgrAAAAAIxEWAEAAABgJCPCyoOr7lHNnNmJnx/91VO67ye/GPLrEFYAAACA3DHmYeXBVfdoWkW5rrvmJq1rWK/b7/yOLrr4PDU3t+rJx54d0msRVgAAAIDcMaZh5dOfWaaq6hl66onntK5hvSTpgfse1uFHVOusc+oJKwAAAMA4NqZhZeHx82RZltatfSvxWGPjNrW3dWhaRbkW1S1IhJjBIKwAAAAAuWNMw0pZWak6O0NqaW5Neby5uUVV1TM0s2r6kMKKCCsAAABAzhjzOSuZ7NjWpNq6hUP+PXpWAAAAgNxhZFgZqqlTP6aFC6W8aOlY7woAAABwUHq8l471LgzZm28+MiKva2RYqZxRMeht33zzUS1c2Nuj0uP940jtEgAAAIBRNqZhpbm5RdMqylVaVqLGxm0pz1mWpa1btg/qdUYqyQEAAAAYO+6x/OM7tjWpsKhAi2rnJx6rrp6hw4+o1odNu4Y4uR4AAABALhnTsPL86pe0a2ezlp5/phbVLZAkXXnVZSosLND9960ay10DAAAAMMZcKj/XHssdqK6eoTvuvlnlU8skSZ0dId184x30qgAAAADj3JiHFQAAAADIZEyHgQEAAABAfwgrAAAAAIxEWAEAAABGWd2yFapbtmKsd8N4WTNnpW7ZCk0oq9ALD94uSaqprVfd+Sv08qq71LR5Q8q2gfxCnf2Vm/Tua3/Q5rUvJ35fkhqeXZXx9ZzH5i4+54D7smPT2ym/Z5olV6xUftFEPX//rQp3daY8LqnffQ/kF+r0L16vt178bZ/PtKa2XkefdFaf1xzMvlTOOVaS1N3RptX3flcdrbuH+pZGTPL+Obo72rTrg3dVfeyJfbbf07S1z2dQVDJFZ165Uq8/9VDic6uomaf5Z3xKf/rFnX0+r/TjM9M+DPT3TJLpvQ9kpM6xJVesVFtzU+L8Nl1RyRQtvfp7+uvzjybKqP4M9jOTpI1rfp81n8GBOJ9RsGjCoLZ3ypfikikp5156WT9QOZeJ8/m/+vj9B/yuTFBRM08nXnS5/vjA7epo3Z1y7auomaf6Fdep4ZlVGd9L+nVyMGpq63XyJV854HaRcE/G6/VYSy9/17/wpOaceEbiuNu45veaUFbR5zp24oWXp/zeq4/fr9C+lsRnLynl+HV+T5JOu+w6vfTwXYlr4YGuzaYZyvUt/bn0c6+mtl5V807QCw/eriVXrNSWDW9kxXk2VIM9T5Kllzn91TWSz/dk6cdVTW29jjt7uXH1sMEw8g72g7F57csK7WvR4kuv1ppH7k0pAMNdnXr+/lt1+hevV2hfi9pbd2vq7Ll66eG7JH1UsclUMByokuRc+ExVU1ufKEA/d+tDknovEu+8slpTqo+UL5CnL/3HY4ntk99vuKtTb7342z4Xs/6CilMoTa6Y2e/+vPr4/UYXwOn75hTCjRveUElFdUoB4DznDxZkfN9nfvnGPq/vfAfSwMdWpoqQ87mbbOrsuYqGw2rZ8cGgf2eo51imynq2VBwPlfTPLFOl0rkwOQZb2Te1EilJkXB3n/I9k6KSKTrtsuskSS07PpDPH9TZX7lJz99/qxqeXaUlV6xU3bIVanh2lUorZylYNFHtg7hYOw0/z97zbZ1x+bc0qXy68WGwcs4CbX/3zUS5NaGsQls2vCFJatq8Qb+8cYWWXLEyY5mevK0j0/mX3Iiyee3Lfc7F4YSesfLCg7enVL79wQLNXniy1jxyryrnLEhst3HN77Vj03qdeNHlGX8v3NWpipp5Ka/tHL/trbsTx6cktTR9oKVXfy8RrjNdm5OZ1gjRtHmDKucsSJxj80//lKbOnqvn77+1z7Z1y1Ykngt3derv617R4kuvTlSYq+adoLbmpgP+zWwvzzKdJ9KBz5VMjZmZ6hoXf/vHiX/v2PS2XvnNj/X67x7SiRderguu/aGev/9WVc07QcGiCSnbOkz93BzGhpX+WhMznczOF+d8QckVyeQvNfkLqpxzrOYuPidja3/6weNUyne+v/EQvLORU1QyRfPqz9cf//M2FUwsTbRWOPvf8MwqTSqfLqnviZGe+k++5Ct9WgGcirdTUQx3derpu7+Z+F3n8YqaeSkhcskVK1VSUWVkmk//rgsmlioSDqt1R6MkqbhkSmKfnec6Wnfr6bu/mXiNofSsJB/XJ1/yFR190lmKWN0ZP2+pt1JgmkznZnIoyyQ9XAzlHGt4dpUanl2V0kJeU1vfpyxwzmnJ/B6poaqcc2zGsi/9e0i+6He07tYjt3w55flsqkQmO1Dv46tP/Czxc7irUy89fJeWXv29lOOycs6xmrXgJO364F0Vl5anXA/SjxenB2J343uJc331vd/V0qu/l1LxMk0gv1Cl02fprRd/m/jZFwgotK8lZbtMjQVFJVNUXDqlz7ZSamXZKdukA7cWZ7qG52JDQ3oD1sXf/nG/ZXdH6269+vjPVLdshY4/51KVzzq6354ukzmNADOPqVXDs6tUU1uvs79yU6JRWPqoASX5erl57cuaVD5dR590lnZsWq8p1UemlN2Vc45NHFPJ52UulGcD9ZL31yCXfK4OtWcl3NWZ+P2KmnkqLp2iJ35wjTpad6f0aDkNo0NpdBxtxoYVp4LicHpD3vrTb/vtYnQknxgDfZH9cf5GTW29Nq99WfNP/1TiceffJjrxwsu16fUXNXfxUr3+u96LdN2yFdq7a7u6OvalDIlz3luyobbeOhd0XyBPUt+Ak57+L/jGD41L7unf9aTy6WprbpLVHVI0HFbBxNLEtv21AHW07taT//5vKY81bd6Q8X02PLuqzzG85IqVWdWz4pybwzm3HEM9x9IrYVLqhSx5GJhTCJtYmRyuoZ6bw6lEmtZ6m+xAvbNFJVMS/3aGkjxyy5f7DElxjlnngp3pdZZe/T1J0tM/+mbKNk5lqW7ZCn3u1oeM/Lz8wQIVl07tU/Zmaol17PxgkyYeNjXRYu1s67S0HkimhoFMx6fzXeQiqzukp+/+ZkqZKPUOA3M+z+6ONkmpn82SK1Zq0+sv6rizl/d7vpp4nDmSz0un5yCQX5jx+WQNz65KHA+bG15OvL/+hoHlSnmWXq+Vhha4+qtrpD+WLPmze/Xx+9XRultFJVN03NnLFSyaoGNOWarDFy7Wzvc3Gn3NNDasDEX6yZ+pBS5Tt5cjvSIQ7urUuv/6lepXXKeyqhpNP2qh1jxyr9FfpPRRwbD1nXU688qV+svzj2jq7LmJEzm9ZTZ97OJgW2+Thwns+XBLovdgoLHgznOmcb7rxZdeLSvcpamz5+rd1/6gcFenujr2JXqinBbKHZt6b1Y6lPH06d2rpZWzVFQ6RfNOuyCxTTb1rDjmLl6aMtzEGYqTPBa7P0M9x0orZ0nSoFp++utuN1F/37t0cHPjkj8Dp1IQLJ6oXR+8q0i4R6UVvZ+nqT0EB2PLhjcSn+nWd9amPFc5Z4HkcvW5Hrz6+P2aVD5dNXX1ennVXaqcs2DAa4az/Zf+4zGjegrSW59rausHPXQtuaXVOZcHM1ROko5YdKpqz/uCpN4yq6XpA0V6ulOux5vX/u9hvKORl9zafdH1P9Irv/nJIXvtTMPAQm2tWrDk4kQvcUXNPM1eeLJW3/tdTZ09N/EdOPtmIud77e5o01+ff1R1569INFo60su25Lk/zoiW5IblQH6h8osmZvx7uVCeHWju4WAC10Dz0ST16S05+ZKvaMemt/Xz//GZPvvx6uP3a+s7axMNCG/96bcyWVaEFecgTh9LK/V+OTV19Vr/whOSUpN8pkn4g50o3rR5gxqeWZUY3mRSb0B/klsRnaS95e2+n5n00UGfbKitt+m9BwNVKMNdnfqvn9481Lc0Kpo2b9Bfn39U9V+4Vt0dbYmhSFs2vKGjTzpLgfxCzTymVj5/MPHe0isF/bWOZApplXMWyBfI054Pt/QO2xtGz8RYc7qUnR684RjsORbIL9Sicz+vyRUz9blbH1J3R5s2vf5i4meHM5TAxLG3/V2oBlvRHeowsORKYvLn4RynTivwJTf+NFHJMHXhkOr5Hx+wZ0DqnRTtcD7PqnknJMKKU3Ha07RVz/2vlYmy3ynPnN9xzt+mzRsGVcE3reU2WSC/UEefdJYmV8zMeOylnydV805IXGOLS6YoYnXL6g4N+DeSK5HvvLL6EL+D0dHw7Crt2LQ+MWz3lM9eo+LS8j7HXPJQpdMuu07NW/+uOR8/XVJvyElelOXib/845ZhM9s4rqxMNihU181QwsVTRcFhWdyjRu+/Mr5pQVjGo+RyjLTnQ7nx/o35540ehyil7+ivbnLpH0eSyjA1+A4UcKXvLM2dUxYEW9+hvCHkgv1Dzz/iUXn/qoYz1hbplK1RTV6+GZ3p7rdIb7Zxr0MY1v08JL8mfXUfLbmMDX1aEldLKWQoWT+wzlnagFcGS51EkP+cUBs7EsIG+FKdV/eiTztLWd9Ya+QX2p7/J78krkqQbas9KfxWwgeYvmFaAODavfVlV806QpERBsPP9jZpXf75KK2epat4JiR6XofAHCxRMai0qKpmi0umz1N6yS39f90piGJjT9Z0+bOWTX/i6Nje8bFTFW+oNXOnj/h3pjw30nQ/mHJt5TK0mV8zsM8F1T9NWRazuxOcofXQhHGyL8GhJ7/5PHm40GENtSEhumZ27+Jw+Fa/k89bUc9LR+Naf9erjP0u5iM88pjal0amoZIpmzl2U+B3nQl1UMkXeQCBlHp9zjNUtW5GygtxQVx+TzJ4bVVo5S10d+9Sy9gOtW/2rlH1MH6NeVDJF+UUTEw01lXMWqGX7B4N6X0NZrc6kXqj+vP67hxLzApwJ9k5ocMofp/d46zsNiWNy/umfSpk3K0m+QLDPMDCp9xrz3I9vTLlGp183k+dwmDxPKtmSK1bKFwhoT9PWxJzM/va7Y09zSoPfYFbpy4XyzOcPHrDxJX1ERfIQyvTGYF9eUBdc+0MFiyemDF3tb+jc3MXnDPp8NUlWhJXKOQvU3b4v5Uuad9oFChZOyBhUnGTf3rq732EWOza9rUtu/Gmf33daMYpKpmj60Qv18i/v1vz6i3TKZ68x+gTIJGJ164//eVvi/SWvmJPJUCtEyRWwg5m/YIKikikqqaiS1x9QRc08NW3eoI7W3dr+7ps688s3ak/T1j5DSgYrGg4nKs9Hn3SW2v65Uz5/MGUb5zjd3bhJkuQP5uuCa3+olqYPjKt4S5nH3g52GNhQzrFAfqGOWHRK4nNJt/WddSlBJ31oWi4YbOt9f+XTQGO3TV/dMJmzwEV6xSfT3C7nseSJ95KUXzRRl978nymBZO7icxKhI30Cb7YtiZ2spq5eG9esVsHEUs0//VMpoey4s5frr88/mvgsi0umqKi09/x99YmfafrRC/X6U4PrNc1UFqTLtvkqyWW2Y++u7UN+ne72fSnLFTuSJ0o7gajh2VV9GqeyZSlfJ+i3NvUOCz/7Kzfp1cfvl9QbwgYTUk/57DWaUj0ncb3tL+Rke3mWXi9Ll7yAhfTRuePNy1O0p6fP9jW1n8z4mSTPIRrKUu2mMj6sFJVM0awFJyUKVmfyVrSnR48ndefX1NZr7ifOlWTLjsf165suT0zUTZ/kd/oXr9fGNav1+u8eSpxgLzx4e8qyjSdeeLm2v/umtrz9hlp3NGrp1d9TTW299u7argllFQOuM26KTAk+uXUn2WDH+WeqECVPtO9vnLeJ91hJdvRJZ6m1aYvampu06NzPq2VHb0G5Y9N61dTVq6tj3yH5nn15QW368ws6+eJ/TXncKcydgmnBkouNG8qUbqBw0t+wuOGeY+mT7idOqVBXxz79fd3/r8MXLtbMY2olSSUVVQc1NM0UTiX53df+MGBrf3oLWabz7EAtaTs2vX1odnoEVdTMU935K9TwTN9KyqTy6Wpr+VATSqclHquad4J2vr8xcb1ob92tgoml6urYlxgnf6CJrTW19SlBJXk8uOlqauvlC+Qnyo+6Zb3LFb/ymx/rtMuu0wfrX0sp750ljeuWrdCyr/9AOza9PeiyJ32hlWwVLJ6ki67/kTa9/qK8gcBBv17BxJLEUDp/sCDlueQl3+cuXpooE//y+0eGdN8qE0ydPTdxbqZPsN+89uWUeRGZ6hhO0Olu36df33R54t5I/YWcbC/Phtqzcspnr9G7r/1BkhKNMsm9melBJf2+UqWVszR5WlW/f9P0upnD+LBy4oWXq7VpizavfTnlC3r18ftTKo+Tyqcr1Nba74UkuUtsT9NWtezo7eJ2WtKSl21Mv4h1tO7Wmkfu1fwzPqWt76yT1NvKl946bprB9Kz48wp0wbU/HPBeKZkKBqflY/7pn0qMg5TUp7va+dz/+vyjxp4MNbX1mrXgJK2+97uyukMqnT5LpZWzVDCxNFEIH3f28sQ44qGYOnuuJCXGfr/6+M9SCvP+NDyzSk2bNxhbQXIuMNv/9mbG553VvpZcsTKx7wd7jjkXqUi4R+Wzjk40YDjL1Hr9Ab286sCT+02XPEcv03Kd0tBWkMn2lsiyqiM158QzUsL7zvc36rizl+tztz6kSLhHDc+sSoSV5MUwKucsUHvLbnW07h7SynpFJVNUVlWjVx//qGfGGUKcfEybqKhkio4+6ayUJWSdpb8Hu4pZ5ZxjB/0+naAzEJN7Vpw5cT5/XmKSu3PMSL0NTJmWf3Y4Iae9ZaemVM9JDOfy5uVp+8a/KtzV2SesOGFa6u3tG2glzco5xxp9f5/0OSvpnFscZOLMs0hvmGt4dpXefe0POvPKlQrta0l5LtvLs6H2rCTf0FGSTv/i9SounaonfnBNv2Va8jynyjkLtLvxvUTjvHOdbNq8IaVOaProGGPDSnLh9tLDd+mCa38oSXriB9dkHMrU30Q058BN7zkI5Bfqgmt/mJgb4LR0tLfu1oSyij6ts85k8oqaeZp5zCL5g/mHrLV9pAymZ8XqCQ1YkEiZK0TJ34/TGiIp4yS35Mlcpqmomafjzl6uNY/cmzhBnW7s5DGgO9/fqKVXfy+lxaI/6SvSpQfrTMqqalR3/grt+XBLyuPOUsom6e/u68X75wdIH12gllyxMnFDqoM9x5yLlHMX3p3vb+wzzyC5V8xkVndI3e0frTaXrL85esOV7S2RzVveSyyg4kgPcU4FXVLipo+2bfcZzjSYcymQX6jTLrtOkytmqqb2kynPbVzze23Z8EbimDbtOEs+Nztad6fMXdzTtDVx/bz05v9MaU3NVJ4vuWJloocv/RhKbvkd6B442cBpuXZ6BY4+6axES7YkTThsqqTeuQLOIjJS6opYq+/9bu89s8LhxApfJ150ecrrOJxGm41rVg9YkR/oTvBjLbncPfHCy/usptrfeyoqmaLFl16tYNEEnXbZdYmbtmaSaZleKfvLs4OVPponPZwlj14I5BcmVjh1yszke0htXLM6cc1OXujBRMaGlVM+e426OvYlToLkg//d1/7QpyViT9NWvfKb9Im9vUN4+rsrbPI8BGcCdUfr7gEro/+3vft5iSKM4zj+KRA1BA+GCCZKN10J6bCbCXuQENFtQTzLgu5fUODBP6BLkf9Axw51ETukUNAhiA4RorAiheJBLUEDN2LBDnlYnodnZmfWTal9Ft6v884yzzA/ns8zzzPf/S8bSqQzSt6fsXMyfRWV4FPZnJ2qtbe1fuEEbW5I4XAilQPR8tN5DYyMK5GeCBx/3xa/JdIZfV59ESiwNJp7GPj2u1S+cS49flDxtiDK37TPrJXp6O6zwSiVzdnzu9ZaB//T8NScDSrhsBA+p948e6Sx/IKG7k2rvbP7wteYWzxyYGRcWx/fVowSSWqIr5pI5evH3MfiPll5tLdzqbee4ZAXxfeRSHeB8nnMQIx5m9LTf1vFo/L0r9knL+21FK47EHZ3Oq9Pr59XnYbTd+uOegeT3nUih6fmtLP2QZICbXbbsrw4H7huD74W1HKtTd+2C4HzxP1IQ1xRSPd31fj8ZsXd/+s3bur3aUk/Dnbt2qbi8aG+b28GQt9p6VdFu91jl0hntPHulSTZ/zHb9Q4m1dTcGrkWMTyl7jJrJf8l9xmQyuZi+1guEyLMdmP5hXOLCZvt3GPdyPezOOHnaOH9Sk3Prqg+bunniR0INGUS4tZuF48P1dTcavuEtQys1ssVdU3+qfdOAADgiqrWXO23tdb4AQA0FsIKAAAAAC9drfcOAAAAAEAUwgoAAAAALxFWAAAAAHiJsAIAAADAS4QVAAAAAF4irAAAAADwEmEFAAAAgJcIKwAAAAC8RFgBAAAA4KUznpFuNMrM2Q8AAAAASUVORK5CYII="

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pie.png";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAG8CAYAAAAmS8F5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AACAASURBVHic7N13eFxnmTbw+7TpRdJIGvUuWbbsuMdOYscppCdOCEmWkMCXXViWDtuA7cteLGxlSVhK6LuBhUCAFNJIIdVO7DjutlxlW7236XPK98fIMxqry9JRu3/Xda7EM+8cvdOeeZ/zNgF5txggIiIiIiIygTjXFSAiIiIioqWDCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZmGCQgREREREZlGnusK0MyQRBEOuxWKIkGWRMiSBFmSIEkiZDmRZ6qqDk3ToWpa4lB1qJqKQCgKXTfm+BkQ0ULBeENEZmG8WZyYgCwwFkVGhscJl8MKl8OWPCyKhO7+ICRRgKrp0JJfQA2qpqN3/Rch6jGIhgoZKiyGCsnQIGhhVIsBSOFuaIPtiPY2IxQYQDAURe9AELG4OtdPmYjmyLTjzbq/gKSGIekRWPUInHoEsh6BqIbhsRowYgHEgv2I95xDMDDIeENEFxdvtAgkLQKrHoZDj0ExohDUEDxWwIgFEQv2I9bfhnBfO+PNPMEEZJ6zWmT4MtzIzkwcFkVGd98gwpE4BgJhtHT0IhCKIBKNj3uejJVxAAIAZegYImSgywAERw0klwCxUISsBuFQe1Fo9EAKtSLUfgq9ne3o6h3kF5ZoEZupeJO50gBgSxwiUoN9LUALAMEpQHILEPMFKPFeeKLtKBP6IAWaMdBxFj29A4w3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AnY+9MUlDbHMtBXBqSd/tOThXMlNCucOwQIyzymhq8cEJI8yjS1Mz65PPv593PzwoxmXpMx2gp1/8Rnc/PCjuOs7P8z58wNDAzj11OySeMldzs/8/An0HTmQ8+RNBofylnZIZjOadt8Mi6sMwyc4gZSomCzUq5BpOfDlsPWB35234lW2Nf8tLjduf/Q73P2cqEi0334XJnsuzIstyQuY+x5+dN5crmSbY8dnvgBHde2iexvStyJYquQckMDQAH71pd9D9YZrdPNEMg3poqvHBCSPMu3pkS7bZl25XMlzAKBu264l73Lu6+3GuRf+DVs++SACQwOpblUiKnzZvuDTE4FIwL/s8y5e+/ojsJZX4IPf+G7q5yTHW2eLQTsf+qLuYgyHZBEVpmznZXJUR7Yezb4jBxAYGsDNDz+KW7/8zRU/v5OrjyZHnQCJ5YEjAb9uc0K2b5afgLq7tHxXgoiIiIiIVgcx3xUgIiIiIqLVgwkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkI0a13hgAABGlJREFUEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZhgkIEREREREZ5v8Ho26z5GZpWYgAAAAASUVORK5CYII="

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/radar.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/map.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(8);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"l-layer\">\r\n  <div class=\"l-layer-close\" title=\"关闭\"></div>\r\n  <div class=\"l-chart\">\r\n\r\n  </div>\r\n</div>";
},"useData":true});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(8);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"l-footer\">\r\n    <div class=\"container\">\r\n        <p class=\"h5\">FUNLEE · 时感人生的虚无，却无法抑制的沸腾</p>\r\n        <ul class=\"list-inline\">\r\n            <li><a>友情链接</a></li>\r\n            <li><a href=\"http://byr.wiki/\" target=\"_blank\">北邮人导航</a></li>\r\n            <li><a href=\"https://zhuanlan.zhihu.com/xiaxiaozheng\" target=\"_blank\">小正说事</a></li>\r\n        </ul>\r\n        <p>Copyright © 2017-2099 funlee. All Rights Reserved.V.1.1.0.</p>\r\n    </div>\r\n</footer>";
},"useData":true});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(10, function() {
			var newContent = __webpack_require__(10);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNkYGBYykAEYCJG0ahC6ikEABdbALlR14OUAAAAAElFTkSuQmCC"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAo0lEQVRIie2UwQ2AIAxFW+MeuokjMIJxAuMkuoGrOJIbfA9yIARMW3r0n4hp30MpEv3RBMAAYG3oDwDCV8GEN6cBPsfeXVoolqh7NA2WDeWN1Vc2wxPAGgGzOzwBnbnEDV6SuMMLEhW8Uziuyro96WcpnYkbPHnmI/k60GaJZFrMEs0oqiWWORdL8P7PTZeoJumzupGIDmbetAJmXgDckfFHngd4f1WrRUuuJQAAAABJRU5ErkJggg=="

/***/ }),
/* 54 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_barNormal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_barMask__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_barPath__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_barCss__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_line__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__charts_area__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charts_pie__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__charts_waterBall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__charts_radar__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__charts_triangle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__charts_map__ = __webpack_require__(74);













/* harmony default export */ __webpack_exports__["a"] = (chartType => {
  const config = {};
  switch (chartType) {
    case 'bar':
      new __WEBPACK_IMPORTED_MODULE_0__charts_bar__["a" /* default */]('.l-chart', config).render();
      break;
    case 'barNormal':
      new __WEBPACK_IMPORTED_MODULE_1__charts_barNormal__["a" /* default */]('.l-chart', config).render();
      break;
    case 'barMask':
      new __WEBPACK_IMPORTED_MODULE_2__charts_barMask__["a" /* default */]('.l-chart', config).render();
      break;
    case 'barPath':
      new __WEBPACK_IMPORTED_MODULE_3__charts_barPath__["a" /* default */]('.l-chart', config).render();
      break;
    case 'barCss':
      new __WEBPACK_IMPORTED_MODULE_4__charts_barCss__["a" /* default */]('.l-chart', config).render();
      break;
    case 'line':
      new __WEBPACK_IMPORTED_MODULE_5__charts_line__["a" /* default */]('.l-chart', config).render();
      break;
    case 'area':
      new __WEBPACK_IMPORTED_MODULE_6__charts_area__["a" /* default */]('.l-chart', config).render();
      break;
    case 'pie':
      new __WEBPACK_IMPORTED_MODULE_7__charts_pie__["a" /* default */]('.l-chart', config).render();
      break;
    case 'waterBall':
      new __WEBPACK_IMPORTED_MODULE_8__charts_waterBall__["a" /* default */]('.l-chart', config).render();
      break;
    case 'radar':
      new __WEBPACK_IMPORTED_MODULE_9__charts_radar__["a" /* default */]('.l-chart', config).render();
      break;
    case 'triangle':
      new __WEBPACK_IMPORTED_MODULE_10__charts_triangle__["a" /* default */]('.l-chart', config).render();
      break;
    case 'map':
      new __WEBPACK_IMPORTED_MODULE_11__charts_map__["a" /* default */]('.l-chart', config).render();
      break;
    default:
      break;
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__ = __webpack_require__(7);
/**
 * @Author:       lee
 * @Email:        liwei@hiynn.com
 * @DateTime:     2017-11-09 21:21:04
 * @Description:  基础柱状图--模版
 */







class Bar {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      itemStyle: {
        normal: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'red',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'blue',
            opacity: 0.8
          }]
        },
        emphasize: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'blue',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'red',
            opacity: 0.8
          }]
        }
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-bar-chart';
    const {
      width,
      height,
      itemStyle: {
        normal,
        emphasize
      }
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();
    // 创建面积图的线性渐变
    const normalGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(normal);
    const emphasizeGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(emphasize);

    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');

    defs.html(`${defs.html()}${normalGradient.dom}${emphasizeGradient.dom}`);

    this.normalGradientId = normalGradient.id;
    this.emphasizeGradientId = emphasizeGradient.id;

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'bar|10': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.bar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;

    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2;

    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(data.length)).rangeRoundBands([20, width - right - left], 0.9);

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    // 绘制柱子
    this.drawBar(data);
    // 绘制Y轴
    this.drawYaxis();
    // 绘制X轴
    this.drawXaxis(data);
  }
  /**
   *  绘制柱子
   */
  drawBar(data) {
    const self = this;
    const {
      margin: {
        bottom
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'bar-container', 'g');
    const update = container.selectAll('.bar').data(data);
    const enter = update.enter().append('g').attr('class', 'bar');
    update.exit().remove();

    const item = container.selectAll('.bar');
    enter.append('rect');

    item.select('rect').attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'width': this.xScale.rangeBand(),
      'fill': `url(#${this.normalGradientId})`,
      'cursor': 'pointer',
      'y': d => {
        return height - bottom;
      },
      'height': 0
    }).transition().duration(2000).attr({
      'height': d => {
        return this.yScale(d.value);
      },
      'y': d => {
        return height - bottom - this.yScale(d.value);
      }
    });
    item.on('mouseover', function (d) {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('rect').attr({
        'fill': `url(#${self.emphasizeGradientId})`
      });
      const event = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event;
      const top = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageY;
      const left = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageX + 20;
      const option = {
        location: {
          x: left,
          y: top
        },
        data: [{
          name: '当前值',
          value: d.value
        }]
      };
      self.tooltip = Object(__WEBPACK_IMPORTED_MODULE_5__tool_tooltip__["a" /* default */])(option);
      self.tooltip.show();
    }).on('mouseout', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('rect').attr({
        'fill': `url(#${self.normalGradientId})`
      });
      self.tooltip.hide();
    });
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bar;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-24 15:51:46 
 * @Last Modified time:   2017-11-24 15:51:46 
 * @Description: 随机生成的ID
 */
/* harmony default export */ __webpack_exports__["a"] = ((() => {
  let id = 1;
  return () => {
    let prefix = new Date().valueOf();
    return `hyfe-${prefix}-${id++}`;
  };
})());

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/**
 * @Author:       lee
 * @Email:        liwei@hiynn.com
 * @DateTime:     2017-11-09 21:21:04
 * @Description:  柱状图扩展--正规图形填充
 *                以圆为例
 */






class BarNormal {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      doteRadius: 8, //小圆点的半径
      doteMT: 4, //小圆点的margin-top
      itemStyle: {
        color: ['#647260', '#f6e046']
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-bar-normal-chart';
    const {
      width,
      height
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();
    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'bar|10': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.bar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      doteRadius,
      doteMT,
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;

    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2;
    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(data.length)).rangeRoundBands([20, width - right - left], 0.9);

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    const maxCircleH = height - top - bottom; //柱子最大高度
    this.maxCircleNum = Math.ceil((maxCircleH + doteMT) / (2 * doteRadius + doteMT));
    // 根据数据值和最大值的比例关系，确定该数据应该绘制几个圆圈-------比例尺
    this.circleNumScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, this.maxCircleNum]);

    // 绘制柱子
    this.drawBar(data);
    // 绘制Y轴
    this.drawYaxis();
    // 绘制X轴
    this.drawXaxis(data);
  }
  /**
   *  绘制柱子
   */
  drawBar(data) {
    const self = this;
    const {
      margin: {
        bottom
      },
      doteRadius,
      doteMT,
      itemStyle: {
        color
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'bar-container', 'g');
    const update = container.selectAll('.bar').data(data);
    const enter = update.enter().append('g').attr({
      'class': 'bar',
      'cursor': 'pointer'
    });
    update.exit().remove();

    const item = container.selectAll('.bar').attr({
      'transform': (d, i) => {
        return `translate(${this.xScale(i)},0)`;
      }
    });

    const circleUpdate = item.selectAll('circle').data(d => {
      return __WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(parseInt(this.circleNumScale(d.value).toFixed(0), 10));
    });
    circleUpdate.enter().append('circle');
    circleUpdate.exit().remove();
    item.selectAll('circle').attr({
      'cy': (d, i) => {
        return height - bottom;
      },
      'stroke': 'none',
      'fill': (d, i) => {
        const a = color[0];
        const b = color[1];
        const compute = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.interpolate(a, b);
        return compute(d / self.maxCircleNum);
      },
      'r': doteRadius
    }).transition().duration(2000).attr({
      'cy': (d, i) => {
        return height - bottom - (doteRadius + d * (2 * doteRadius + doteMT));
      }
    });
    item.on('mouseover', function (d) {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).selectAll('circle').attr({
        'fill': (d, i) => {
          const a = color[0];
          const b = color[1];
          const compute = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.interpolate(a, b);
          return compute(1 - d / self.maxCircleNum);
        }
      });
      const event = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event;
      const top = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageY;
      const left = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageX + 20;
      const option = {
        location: {
          x: left,
          y: top
        },
        data: [{
          name: '数值',
          value: d.value
        }]
      };
      self.tooltip = Object(__WEBPACK_IMPORTED_MODULE_5__tool_tooltip__["a" /* default */])(option);
      self.tooltip.show();
    }).on('mouseout', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).selectAll('circle').attr({
        'fill': (d, i) => {
          const a = color[0];
          const b = color[1];
          const compute = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.interpolate(a, b);
          return compute(d / self.maxCircleNum);
        }
      });
      self.tooltip.hide();
    });
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BarNormal;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__ = __webpack_require__(7);
/**
 * @Author:       lee
 * @Email:        liwei@hiynn.com
 * @DateTime:     2017-11-09 21:21:04
 * @Description:  柱状图--蒙版切割图案
 */







class BarMask {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      mask: {
        lineWidth: 4, //线宽
        linePart: 10 //两根线的间隔
      },
      itemStyle: {
        normal: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'red',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'blue',
            opacity: 0.8
          }]
        },
        emphasize: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'blue',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'red',
            opacity: 0.8
          }]
        }
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-bar-chart';
    const {
      width,
      height,
      itemStyle: {
        normal,
        emphasize
      },
      mask: {
        lineWidth,
        linePart
      }
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();
    // 创建面积图的线性渐变
    const normalGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(normal);
    const emphasizeGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(emphasize);

    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');

    defs.html(`${defs.html()}${normalGradient.dom}${emphasizeGradient.dom}`);

    this.normalGradientId = normalGradient.id;
    this.emphasizeGradientId = emphasizeGradient.id;

    //创建蒙版
    const mask = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-defs`, `${this.chartName}-mask`, 'mask');
    mask.attr('id', `${this.chartName}-mask`).attr('maskUnits', 'userSpaceOnUse');
    const maskRect = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-mask`, `${this.chartName}-mask-rect`, 'rect');
    maskRect.attr({
      'x': 0,
      'y': 0,
      'width': w,
      'height': h,
      'fill': 'white'
    });
    const maskLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-mask`, `${this.chartName}-mask-line`, 'g');

    const update = maskLine.selectAll('line').data(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(Math.ceil(h / linePart)));
    update.enter().append('line');
    update.exit().remove();

    maskLine.selectAll('line').attr({
      'x1': 0,
      'y1': (d, i) => {
        return i * linePart;
      },
      'x2': w,
      'y2': (d, i) => {
        return i * linePart;
      }
    }).style({
      'stroke-width': lineWidth,
      'stroke': 'black'
    });

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'bar|10': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.bar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;
    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2;

    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(data.length)).rangeRoundBands([20, width - right - left], 0.9);

    const yDomain = [0, __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2];

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    // 绘制柱子
    this.drawBar(data);
    // 绘制Y轴
    this.drawYaxis();
    // 绘制X轴
    this.drawXaxis(data);
  }
  /**
   *  绘制柱子
   */
  drawBar(data) {
    const self = this;
    const {
      margin: {
        bottom
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'bar-container', 'g');
    const update = container.selectAll('.bar').data(data);
    const enter = update.enter().append('g').attr('class', 'bar');
    update.exit().remove();

    const item = container.selectAll('.bar');
    enter.append('rect');

    item.select('rect').attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'width': this.xScale.rangeBand(),
      'fill': `url(#${this.normalGradientId})`,
      'mask': `url(#${this.chartName}-mask)`,
      'cursor': 'pointer',
      'y': d => {
        return height - bottom;
      },
      'height': 0
    }).transition().duration(2000).attr({
      'height': d => {
        return this.yScale(d.value);
      },
      'y': d => {
        return height - bottom - this.yScale(d.value);
      }
    });
    item.on('mouseover', function (d) {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('rect').attr({
        'fill': `url(#${self.emphasizeGradientId})`
      });
      const event = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event;
      const top = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageY;
      const left = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageX + 20;
      const option = {
        location: {
          x: left,
          y: top
        },
        data: [{
          name: '当前值',
          value: d.value
        }]
      };
      self.tooltip = Object(__WEBPACK_IMPORTED_MODULE_5__tool_tooltip__["a" /* default */])(option);
      self.tooltip.show();
    }).on('mouseout', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('rect').attr({
        'fill': `url(#${self.normalGradientId})`
      });
      self.tooltip.hide();
    });
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BarMask;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__ = __webpack_require__(7);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-24 22:35:50 
 * @Last Modified time:   2017-11-24 22:35:50 
 * @Description: 柱状图扩展--异形填充--利用Path
 */







class BarPath {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      itemStyle: {
        barWidth: 38, //异形图案的宽度，按照设计稿是76
        normal: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'red',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'blue',
            opacity: 0.8
          }]
        },
        emphasize: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'blue',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'red',
            opacity: 0.8
          }]
        }
      },
      label: {
        color: '#62a4f6',
        fontSize: 14
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-bar-path-chart';
    const {
      width,
      height,
      itemStyle: {
        normal,
        emphasize
      }
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    const normalGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(normal);
    const emphasizeGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(emphasize);
    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');
    defs.html(`${defs.html()}${normalGradient.dom}${emphasizeGradient.dom}`);
    this.normalGradientId = normalGradient.id;
    this.emphasizeGradientId = emphasizeGradient.id;

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'bar|6': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.bar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;

    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2;

    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(data.length)).rangeRoundBands([20, width - right - left], 0.9);

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    //利用区域生成器绘制异形图形的path
    this.area = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.area().x(d => {
      return d.x;
    }).y0(d => {
      return height - d.y0;
    }).y1(d => {
      return height - d.y1;
    });

    // 绘制柱子
    this.drawBar(data);
    // 绘制Y轴
    // this.drawYaxis()
    // 绘制X轴
    this.drawXaxis(data);
  }
  /**
   *  绘制柱子
   */
  drawBar(data) {
    const self = this;
    const {
      margin: {
        bottom
      },
      itemStyle: {
        barWidth
      },
      label: {
        color,
        fontSize
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'bar-container', 'g');
    const update = container.selectAll('.bar').data(data);
    const enter = update.enter().append('g').attr('class', 'bar');
    enter.append('path');
    enter.append('text');
    update.exit().remove();

    const item = container.selectAll('.bar');
    item.select('path').attr({
      'transform': (d, i) => {
        return `translate(${this.xScale(i) - barWidth},-20)`; //设置translateY让图形不超过X轴轴线
      },
      'fill': `url(#${this.normalGradientId})`,
      'd': (d, i) => {
        const data = [{
          x: 0,
          y0: 20,
          y1: 40
        }, {
          x: 38,
          y0: 40,
          y1: 40
        }, {
          x: 76,
          y0: 20,
          y1: 40
        }];
        return this.area(data);
      }
    }).transition().duration(2000).attr({
      'd': (d, i) => {
        const pathY = this.yScale(d.value);
        const data = [{
          x: 0,
          y0: 20,
          y1: pathY
        }, {
          x: 38,
          y0: 40,
          y1: pathY + 20
        }, {
          x: 76,
          y0: 20,
          y1: pathY
        }];
        return this.area(data);
      }
    });

    item.select('text').attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': d => {
        return height - this.yScale(d.value) - 30; //图案有个尖，字体过不去，所以加30px
      },
      'dy': '1em',
      'opacity': 0,
      'text-anchor': 'middle',
      'fill': color,
      'font-size': fontSize
    }).text(d => {
      return d.value;
    });

    item.on('mouseover', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('text').transition().duration(1000).attr({
        'dy': '-2em',
        'opacity': 1
      });
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('path').attr({
        'fill': `url(#${self.emphasizeGradientId})`
      });
    }).on('mouseout', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('text').transition().duration(1000).attr({
        'dy': '1em',
        'opacity': 0
      });
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('path').attr({
        'fill': `url(#${self.normalGradientId})`
      });
    });
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BarPath;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hbs_barCss_hbs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hbs_barCss_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hbs_barCss_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_barCss_css__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_barCss_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_barCss_css__);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-26 11:19:45 
 * @Last Modified time:   2017-11-26 11:19:45 
 * @Description: 柱状图扩展--CSS
 */







class BarCss {
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    this.chartName = 'l-bar-css-chart';
    this.ul = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'ul');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'bar|5': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.bar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    data.sort(function (a, b) {
      return __WEBPACK_IMPORTED_MODULE_1_d3___default.a.descending(a.value, b.value);
    });
    const colors = ['#ffd43d', '#efefef', '#14c7fb', '#ffd43d', '#efefef'];
    const max = __WEBPACK_IMPORTED_MODULE_1_d3___default.a.max(data, (d, i) => {
      return d.value;
    });
    for (let i = 0, length = data.length; i < length; i++) {
      data[i].barWidth = parseInt(data[i].value) * 100 / max + '%';
      data[i].color = colors[i];
      data[i].order = i + 1;
    }
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').find(`.${this.chartName}`).html(__WEBPACK_IMPORTED_MODULE_4__hbs_barCss_hbs___default()(data));
    setTimeout(() => {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').find('.terminal-item').removeClass('active');
    }, 1000);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BarCss;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(8);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li class=\"terminal-item active\">\r\n        <div class=\"item-index\" style=\"color:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.order || (depth0 != null ? depth0.order : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"order","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"item-container\">\r\n            <div class=\"bar-container\">\r\n                <div class=\"back-bar\">\r\n                    <div class=\"outer-bar\" style=\"width:"
    + alias4(((helper = (helper = helpers.barWidth || (depth0 != null ? depth0.barWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"barWidth","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <div class=\"real-bar\"></div>\r\n                    </div>\r\n                </div>     \r\n                <div class=\"value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</div>       \r\n            </div>\r\n\r\n            <div class=\"item-name\" title="
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n        </div>\r\n    </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(13, function() {
			var newContent = __webpack_require__(13);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAAYBAMAAAChGJ29AAAAFVBMVEULKkcMO1sMRGUMNFMLL00LLEkNSGpXvcjJAAAAZUlEQVRIx2NIS1MaVCAtjSFNUXBQAaE0hiRB40EFBNUYEoVdBhUwFGNQNHENHUQgxFkI6KQAhkEEWEedNOqkUSfhBqNOIgaMOokYMOokYsDIcdKga5wMwibcIGzoDsLuwODrNAEAb1YyEAzAWRkAAAAASUVORK5CYII="

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAASCAYAAAB/5bOVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOEU3QUIzOEJEREQxMUU3ODgyN0ZFMjBDMjFGMTQ2OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOEU3QUIzOUJEREQxMUU3ODgyN0ZFMjBDMjFGMTQ2OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4RTdBQjM2QkRERDExRTc4ODI3RkUyMEMyMUYxNDY5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4RTdBQjM3QkRERDExRTc4ODI3RkUyMEMyMUYxNDY5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OPGaEQAADPdJREFUeNp8W1mW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"

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_line_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_line_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_line_css__);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-26 16:43:05 
 * @Last Modified time:   2017-11-26 16:43:05 
 * @Description: 折线图
 */






class Line {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      itemStyle: {
        color: ['#d7b723', '#17f3d1', '#a455f4']
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-line-chart';
    const {
      width,
      height
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();
    this.linePath = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.line().x((d, i) => {
      return this.xScale(i);
    }).y(d => {
      return this.yScale(d.value);
    }).interpolate('basis');

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'line': {
        'line1|10': [{
          'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
          'value': '@natural(100,150)'
        }],
        'line2|10': [{
          'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
          'value': '@natural(100,180)'
        }],
        'line3|10': [{
          'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
          'value': '@natural(100,160)'
        }]
      }
    });
    this.dataset = data.line;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;

    //集合所有数据寻找最大value值
    let allData = [];
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(3).map((d, i) => {
      allData.push(data['line' + (i + 1)]);
    });

    let maxValue = allData[0][0].value;

    allData.map((item, i) => {
      item.map((tip, index) => {
        maxValue = allData[i][index].value > maxValue ? allData[i][index].value : maxValue;
      });
    });

    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(allData[0].length)).rangeRoundBands([20, width - right - left], 0.9);

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    // 绘制折线
    this.drawLine(allData);
    // 绘制Y轴
    this.drawYaxis();
    // 绘制X轴
    this.drawXaxis(allData);
  }
  /**
   *  绘制折线
   */
  drawLine(data) {
    const self = this;
    const {
      margin: {
        bottom
      },
      itemStyle: {
        color
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'line-container', 'g');
    const update = container.selectAll('.l-line').data(data);
    const enter = update.enter().append('path').attr('class', 'l-line');
    update.exit().remove();

    container.selectAll('.l-line').classed('active-line', false).attr({
      'd': (d, i) => {
        return this.linePath(d);
      },
      'fill': 'none',
      'stroke-width': 3,
      'stroke': (d, i) => {
        return color[i];
      },
      'stroke-opacity': .6,
      'stroke-opacity': 0
    }).transition().delay(1000).attr('stroke-opacity', 1).attr('class', 'active-line l-line');
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data[0]);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data[0]).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Line;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_getLinearGradient__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_line_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_line_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_line_css__);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-26 16:43:05 
 * @Last Modified time:   2017-11-26 16:43:05 
 * @Description: 面积图
 */







class Area {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      itemStyle: {
        normal: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'red',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'blue',
            opacity: 0.8
          }]
        }
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const self = this;
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-area-chart';
    const {
      width,
      height,
      itemStyle: {
        normal
      }
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    // 创建面积图的线性渐变
    const normalGradient = Object(__WEBPACK_IMPORTED_MODULE_5__tool_getLinearGradient__["a" /* default */])(normal);
    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');
    defs.html(`${defs.html()}${normalGradient.dom}`);
    this.normalGradientId = normalGradient.id;

    //创建蒙版
    const mask = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-defs`, `${this.chartName}-mask`, 'mask');
    mask.attr('id', `${this.chartName}-mask`).attr('maskUnits', 'userSpaceOnUse');
    const maskRect = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-mask`, `${this.chartName}-mask-rect`, 'rect');
    maskRect.attr({
      'x': 0,
      'y': 0,
      'fill': 'white',
      'fill-opacity': 1
    });

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'area|10': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香', '园游会', '发如雪', '珊瑚海', '迷迭香', '青花瓷'],
        'value': '@natural(100,150)'
      }]
    });
    this.dataset = data.area;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;
    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2;

    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(data.length)).rangeRoundBands([20, width - right - left], 0.9);

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    // 绘制面积图
    this.drawArea(data);
    // 绘制Y轴
    this.drawYaxis();
    // 绘制X轴
    this.drawXaxis(data);

    //面积动画--利用蒙版
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`#${this.chartName}-mask`).select('rect').attr({
      'width': 0,
      'height': height
    }).transition().delay(500).duration(3800).ease('bounce').attr({
      'width': width
    });
  }
  /**
   *  绘制面积图
   */
  drawArea(data) {
    const self = this;
    const {
      margin: {
        bottom
      },
      itemStyle: {
        color
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'area-container', 'g');
    const area = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])('.area-container', 'area-path', 'path');

    const areaPath = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.area().x((d, i) => {
      return this.xScale(i);
    }).y1((d, i) => {
      return this.yScale(d.value);
    }).y0(height - bottom).interpolate('basis');

    area.attr({
      'd': areaPath(data),
      'stroke': 'none',
      'fill': `url(#${this.normalGradientId})`,
      'transform': `translate(-${this.xScale.rangeBand()},0)`,
      'mask': `url(#${this.chartName}-mask)`
    });
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Area;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_fill_png__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_fill_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_fill_png__);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-26 21:19:41 
 * @Last Modified time:   2017-11-26 21:19:41 
 * @Description: 饼图
 */






class Pie {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: 960,
      height: 500
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-pie-chart';
    const {
      width,
      height
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    //创建图案填充
    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');
    const pattern = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-defs`, `${this.chartName}-pattern`, 'pattern');

    pattern.attr({
      'id': `${this.chartName}-pattern`,
      'patternUnits': 'objectBoundingBox',
      'x': 0,
      'y': 0,
      'width': 1,
      'height': 1
    });

    const patternImg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-pattern`, `${this.chartName}-pattern-img`, 'image');
    patternImg.attr({
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'xlink:href': __WEBPACK_IMPORTED_MODULE_5__img_fill_png___default.a
    });

    //创建蒙版
    const mask = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-defs`, `${this.chartName}-mask`, 'mask');
    mask.attr('id', `${this.chartName}-mask`);
    const maskRotate = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-mask`, 'rotate', 'rect');
    maskRotate.attr({
      'x': 480,
      'y': 0,
      'width': 430,
      'height': 500
    });
    const maskFix = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}-mask`, 'fix', 'rect');
    maskFix.attr({
      'x': 480,
      'y': 0,
      'width': 430,
      'height': 500
    });

    this.pie = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.layout.pie().value(d => {
      return d.value;
    }).sort(null);

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'pie|5': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.pie;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const self = this;
    const [width, height] = this.size;
    //弧生成器
    let outerRadius = width / 6;
    let innerRadius = 0;

    this.arc = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
    //处理数据
    let pieData = this.pie(data);
    const arcWrap = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'pie-container', 'g');
    arcWrap.attr('mask', '').style('visibility', 'hidden');
    this.svg.classed('ready', false);

    let arcsUpdate = arcWrap.selectAll('.arcs').data(pieData);
    let arcsEnter = arcsUpdate.enter().append('g').attr('class', 'arcs');

    arcsEnter.append('path').attr('class', 'arcs-path'); //把PATH 加上
    arcsEnter.append('text').attr('class', 'arcs-value'); //把Value值的text 加上
    arcsEnter.append('path').attr('class', 'arcs-line');

    arcsUpdate.exit().remove();

    let arcs = arcWrap.selectAll('.arcs').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let arcsPath = arcs.select('.arcs-path').attr({
      'fill': `url(#${this.chartName}-pattern)`,
      'd': d => {
        return this.arc(d);
      },
      'cursor': 'pointer',
      'stroke': '#235894',
      'stroke-width': 3
    }).on('mousemove', function (d, i) {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).attr({
        'transform': 'scale(1.1,1.1)'
      });
      // 悬浮框不做了
    }).on('mouseout', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).attr({
        'transform': 'scale(1,1)'
      });
      // 悬浮框不做了
    });

    //名称展示斜线长度基数
    let solid = 2.4; //需要大于2<-->2π
    //名称展示水平线长度
    let standard = 10;
    //名称与水平线间距
    let spart = 5;

    //name值展示
    let arcsText = arcs.select('.arcs-value').attr({
      'transform': d => {
        let x;
        let y = this.arc.centroid(d)[1] * solid;
        if (parseFloat(d.endAngle.toFixed(2)) <= parseFloat(Math.PI.toFixed(2))) {
          x = this.arc.centroid(d)[0] * solid + standard + spart;
        } else {
          x = this.arc.centroid(d)[0] * solid - standard - spart;
        }
        return 'translate(' + x + ',' + y + ')';
      },
      'text-anchor': d => {
        if (parseFloat((d.startAngle + (d.endAngle - d.startAngle) / 2).toFixed(2)) <= parseFloat(Math.PI.toFixed(2))) {
          //判断扇形中线所在的弧度是否超过半圆
          return 'start';
        } else {
          return 'end';
        }
      },
      'dy': '.5em',
      'fill': '#235894'
    }).text(d => {
      return d.data.name;
    });
    //画名称展示线
    let arcsLine = arcs.select('.arcs-line').attr({
      'd': d => {
        let p1x = this.arc.centroid(d)[0] * 2;
        let p1y = this.arc.centroid(d)[1] * 2;

        let p2x = this.arc.centroid(d)[0] * solid;
        let p2y = this.arc.centroid(d)[1] * solid;

        let p3x;
        // let p3y = p2y
        if (parseFloat((d.startAngle + (d.endAngle - d.startAngle) / 2).toFixed(2)) <= parseFloat(Math.PI.toFixed(2))) {
          //判断扇形中线所在的弧度是否超过半圆
          p3x = p2x + standard;
        } else {
          p3x = p2x - standard;
        }
        return 'M ' + p1x + ' ' + p1y + 'L ' + p2x + ' ' + p2y + 'L ' + p3x + ' ' + p2y;
      },
      'stroke': '#235894',
      'fill': 'none',
      'stroke-width': 2
    });

    //添加蒙版动画
    setTimeout(function () {
      arcWrap.attr('mask', `url(#${self.chartName}-mask)`).style('visibility', 'visible');
      self.svg.classed('ready', true);
    }, 1000);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pie;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fill.png";

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__ = __webpack_require__(7);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-27 13:48:55 
 * @Last Modified time:   2017-11-27 13:48:55 
 * @Description: 水球图 
 */







class WaterBall {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      radius: 66,
      itemStyle: {
        outline: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'rgb(6, 124, 255)',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'rgb(160, 60, 218)',
            opacity: 0.8
          }]
        },
        water: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'red',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'blue',
            opacity: 0.8
          }]
        }
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-waterBall-chart';
    const {
      width,
      height,
      radius,
      itemStyle: {
        outline,
        water
      }
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    // 创建外圈圆和内部水波浪的线性渐变
    const outlineGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(outline);
    const waterGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(water);

    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');
    defs.html(`${defs.html()}${outlineGradient.dom}${waterGradient.dom}`);

    this.outlineGradientId = outlineGradient.id;
    this.waterGradientId = waterGradient.id;
    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'waterBall|3': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破'],
        'value': '@natural(1,100)'
      }]
    });
    this.dataset = data.waterBall;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      radius
    } = this.config;
    const [width, height] = this.size;
    let dataset = [];
    data.map(item => {
      dataset.push([[item.value, 100 - item.value], [item.name]]);
    });
    //设置布局
    const clockwisePie = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.layout.pie(); //顺时针，针对数据类型:[small,bigger]
    const anticlockwisePie = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.layout.pie() //逆时针,针对数据类型：[bigger,small]
    .startAngle(0).endAngle(-2 * Math.PI);

    //设置弧生成器
    const arc = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.arc().innerRadius(radius - 4).outerRadius(radius);

    const xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(dataset.length)).rangeRoundBands([0, width], 0.2);

    //处理好结构
    let ballUpdate = this.svg.selectAll('g.ball').data(dataset);

    let ballEnter = ballUpdate.enter().append('g').attr('class', 'ball');
    ballUpdate.exit().remove();

    let ballGroup = this.svg.selectAll('.ball').data(dataset).attr({
      'transform': (d, i) => {
        let x = xScale(i) + 100;
        return 'translate(' + x + ',' + height / 2 + ')';
      }
    });

    //绘制外圈灰色圆
    ballEnter.append('circle').attr('class', 'outLine');
    let outLine = ballGroup.select('.outLine').attr({
      'r': radius,
      'fill': 'none',
      'stroke': '#9f9fb3',
      'stroke-width': 1,
      'stroke-opacity': .5
    });

    //绘制外圈渐变圆
    ballEnter.append('path').attr('class', 'outCircle');
    let outCircle = ballGroup.select('.outCircle').attr({
      'fill': `url(#${this.outlineGradientId})`,
      'd': (d, i) => {
        if (d[0][0] >= d[0][1]) {
          return arc(clockwisePie(d[0])[0]);
        } else {
          return arc(anticlockwisePie(d[0])[0]);
        }
      }
    });

    //绘制内部实心圆
    ballEnter.append('circle').attr('class', 'innerCircle');
    let innerCircle = ballGroup.select('.innerCircle').attr({
      'r': radius - 8,
      'fill': 'rgba(79,35,129,0.6)'
    });

    //绘制底部名称
    ballEnter.append('text').attr('class', 'footText');
    let footText = ballGroup.select('.footText').attr({
      y: radius + 30,
      'fill': '#52b8ff',
      'text-anchor': 'middle',
      'font-size': 18
    }).text((d, i) => {
      return d[1][0];
    });

    //绘制100%的实心圆
    ballEnter.append('circle').attr('class', 'fillCircle');
    let fillCircle = ballGroup.select('.fillCircle').attr({
      'r': radius - 8,
      'fill': `url(#${this.waterGradientId})`,
      'clip-path': (d, i) => {
        return 'url(#areaWava' + i + ')';
      }
    });

    //制作波浪纹 - clipPath
    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');

    let clipPathUpdate = defs.selectAll('clipPath').data(data);
    clipPathUpdate.enter().append('clipPath').append('path');
    clipPathUpdate.exit().remove();

    let waveClipCount = 2;
    let waveClipWidth = radius * 4;
    let waveHeight = 10.26;
    let waveOffset = 0;
    let waveCount = 1;

    let wavaData = [];
    for (let i = 0; i <= 40 * waveClipCount; i++) {
      wavaData.push({
        x: i / (40 * waveClipCount),
        y: i / 40
      });
    }

    let waveScaleX = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().range([0, waveClipWidth]).domain([0, 1]);
    let waveScaleY = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().range([0, waveHeight]).domain([0, 1]);

    // translateY为radius 对应 0%
    // translateY为-radius 对应 100%
    let wavePercentScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, 100]).range([radius, -radius]);

    let clipArea = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.area().x(function (d) {
      return waveScaleX(d.x);
    }).y0(function (d) {
      return waveScaleY(Math.sin(Math.PI * 2 * waveOffset * -1 + Math.PI * 2 * (1 - waveCount) + d.y * 2 * Math.PI));
    }).y1(function (d) {
      return 2 * radius;
    });

    let clipPath = defs.selectAll('clipPath').attr({
      'id': (d, i) => {
        return 'areaWava' + i;
      }
    }).select('path').datum(wavaData).attr({
      'd': clipArea,
      'fill': 'yellow',
      'T': 0
    });

    clipPath.transition().duration(2000).attr({
      'transform': (d, i) => {
        return 'translate(' + -3 * radius + ',' + wavePercentScale(data[i].value) + ')';
      }
    }).each('start', function () {
      clipPath.attr({
        'transform': (d, i) => {
          return 'translate(' + -3 * radius + ',' + radius + ')';
        }
      });
    });
    //绘制百分占比数值 -- 严格的绘制顺序决定层级
    ballEnter.append('text').attr('class', 'valueText');
    let valueText = ballGroup.select('.valueText').attr({
      'fill': '#fff',
      'text-anchor': 'middle',
      'font-size': 38
    }).text(0);

    //value值加载动画
    let inittx = valueText.text();
    let valueTextTran = valueText.transition().duration(2000).tween('text', function (d, i) {
      return function (t) {
        __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).text(Math.floor(Number(inittx) + t * d[0][0]));
      };
    });
    //绘制value值百分比符号
    ballEnter.append('text').attr('class', 'percentText');
    let percentText = ballGroup.select('.percentText').attr({
      y: -14,
      x: 34,
      'fill': '#fff',
      'text-anchor': 'middle',
      'font-size': 20
    }).text('%');

    //用定时器做波浪动画
    setTimeout(function () {
      let distance = -3 * radius;
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.timer(waveTimer);

      function waveTimer() {
        distance++;
        if (distance > -radius) {
          distance = -3 * radius;
        }
        clipPath.attr({
          'transform': (d, i) => {
            return 'translate(' + distance + ',' + wavePercentScale(data[i].value) + ')';
          }
        });
      }
    }, 2000);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WaterBall;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-11-28 11:01:50 
 * @Last Modified time:   2017-11-28 11:01:50 
 * @Description: 雷达图 
 */





class Radar {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: 960,
      height: 500
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-radar-chart';
    const {
      width,
      height
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'radar': {
        'data1|5': [{
          'value|10-100': 10
        }],
        'data2|5': [{
          'value|10-100': 10
        }]
      }
    });
    this.dataset = data.radar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const self = this;
    const [width, height] = this.size;

    let dataset1 = data.data1;
    let dataset2 = data.data2;

    let radius = width / 6;
    let outerCircleR = radius + 28;
    let splitNum = 5; //绘制5个同心分隔圆
    let radiusScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, splitNum]).range([0, radius]);

    //雷达图 = 分隔区域（坐标轴） + 数据雷达

    //绘制分隔区域(坐标轴)
    let isSplit = this.svg.select('.split').empty();
    let split;
    if (isSplit) {
      split = this.svg.append('g').attr({
        'class': 'split',
        'transform': 'translate(' + width / 2 + ',' + height / 2 + ')'
      });
      //绘制同心圆
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(splitNum).map(d => {
        split.append('circle').attr({
          'r': radiusScale(d + 1),
          'fill': 'none',
          'stroke': '#00a0e9',
          'stroke-width': 2
        });
      });
    } else {
      split = this.svg.select('.split');
    }

    //取得绘制雷达区域的坐标点
    let splitPie = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.layout.pie().value(d => {
      return 1;
    }) //写个固定值，平分
    .sort(null);

    let splitPieData1 = splitPie(dataset1); //利用数据的个数确定分割的份数
    let splitPieData2 = splitPie(dataset2);

    let splitArc = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.arc().innerRadius(0).outerRadius(radius);

    //绘制分隔线：饼图镂空 + 蒙版裁剪
    //添加一个裁剪
    let isClipPath = this.svg.select('#clipCircle').empty();
    if (isClipPath) {
      this.svg.append('defs').append('clipPath').attr({
        'id': 'clipCircle'
      }).append('circle').attr({
        'r': outerCircleR - 4,
        'fill': 'white'
      });
    }

    let isSplitLine = this.svg.select('.split-line').empty();
    let splitLine;
    if (isSplitLine) {
      splitLine = this.svg.append('g').attr({
        'class': 'split-line',
        'transform': 'translate(' + width / 2 + ',' + height / 2 + ')',
        'clip-path': 'url(#clipCircle)'
      });
    } else {
      splitLine = this.svg.select('.split-line');
    }

    let splitLineUpdate = splitLine.selectAll('path').data(splitPieData1);
    splitLineUpdate.enter().append('path');
    splitLineUpdate.exit().remove();

    let splitLineArc = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.arc().innerRadius(0).outerRadius(outerCircleR);

    //镂空饼图
    splitLine.selectAll('path').data(splitPieData1).attr({
      'd': d => {
        return splitLineArc(d);
      },
      'fill': 'none',
      'stroke': '#00a0e9',
      'stroke-dasharray': '6',
      'stroke-width': 2
    });
    //绘制文本
    //考虑到文本需要旋转，就不放在splitLine里面了
    let isSplitText = this.svg.select('.split-text').empty();
    let splitText;
    if (isSplitText) {
      splitText = this.svg.append('g').attr({
        'class': 'split-text',
        'transform': 'translate(' + width / 2 + ',' + height / 2 + ')' + ' rotate(' + 360 / (data.data1.length * 2) + ')'
      });
    } else {
      splitText = this.svg.select('.split-text');
    }

    let splitTextUpdate = splitText.selectAll('text').data(splitPieData1);
    splitTextUpdate.enter().append('text');
    splitTextUpdate.exit().remove();

    //添加文本
    let textArr = ['龙卷风', '简单爱', '双节棍', '东风破', '七里香'];
    splitText.selectAll('text').data(splitPieData1).attr({
      'transform': d => {
        let x = splitLineArc.centroid(d)[0] * 2.1;
        let y = splitLineArc.centroid(d)[1] * 2.1;
        return 'translate(' + x + ',' + y + ')' + ' rotate(' + -360 / (data.data1.length * 2) + ')';
      },
      'font-size': 12,
      'fill': '#5e98cd',
      'text-anchor': 'middle'
    }).text((d, i) => {
      return textArr[i];
    });

    //获取的坐标点，绘制雷达区域
    let maxValue1 = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(dataset1, d => {
      return d.value;
    });
    let maxValue2 = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(dataset2, d => {
      return d.value;
    });
    let maxValue = maxValue1 - maxValue2 > 0 ? maxValue1 : maxValue2;

    let radarAreaPath1 = '';
    let radarAreaPath2 = '';

    let radarScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue * 1.2]) //适当放大，不让任何坐标点抵达圆周边缘
    .range([0, 2]);

    splitPieData1.map((coord, i) => {
      let scale = radarScale(dataset1[i].value);
      if (i == 0) {
        radarAreaPath1 += 'M' + splitArc.centroid(coord)[0] * scale + ',' + splitArc.centroid(coord)[1] * scale;
      } else {
        radarAreaPath1 += 'L' + splitArc.centroid(coord)[0] * scale + ',' + splitArc.centroid(coord)[1] * scale;
      }
    });

    splitPieData2.map((coord, i) => {
      let scale = radarScale(dataset2[i].value);
      if (i == 0) {
        radarAreaPath2 += 'M' + splitArc.centroid(coord)[0] * scale + ',' + splitArc.centroid(coord)[1] * scale;
      } else {
        radarAreaPath2 += 'L' + splitArc.centroid(coord)[0] * scale + ',' + splitArc.centroid(coord)[1] * scale;
      }
    });

    let isRadarArea = this.svg.select('.radar-area').empty();
    let radarArea;

    if (isRadarArea) {
      radarArea = this.svg.append('g').attr({
        'class': 'radar-area',
        'transform': 'translate(' + width / 2 + ',' + height / 2 + ')' + ' rotate(' + 360 / (data.data1.length * 2) + ')'
      });
      radarArea.append('path').attr({
        'class': 'radar-area1'
      });
      radarArea.append('path').attr({
        'class': 'radar-area2'
      });
    } else {
      radarArea = this.svg.select('.radar-area');
    }

    radarArea.select('.radar-area1').attr({
      'd': radarAreaPath1 + 'Z', //闭合路径
      'stroke-width': 2,
      'fill': 'rgba(0,160,233,0.3)',
      'stroke': '#00ffff'
    });
    radarArea.select('.radar-area2').attr({
      'd': radarAreaPath2 + 'Z', //闭合路径
      'stroke-width': 2,
      'fill': 'rgba(211,25,228,0.3)',
      'stroke': '#d319e4'
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Radar;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__ = __webpack_require__(7);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-02 11:23:09 
 * @Last Modified time:   2017-12-02 11:23:09 
 * @Description: 三角面积图
 */







class Triangle {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      itemStyle: {
        normal: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'red',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'blue',
            opacity: 0.8
          }]
        },
        emphasize: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 100,
          colorStops: [{
            offset: 0,
            color: 'blue',
            opacity: 0.8
          }, {
            offset: 100,
            color: 'red',
            opacity: 0.8
          }]
        }
      },
      label: {
        color: '#62a4f6',
        fontSize: 14
      },
      xAxis: {
        color: '#62a4f6',
        fontSize: 14,
        anchor: 'middle',
        mtop: 20 //顶部偏移量
      },
      yAxis: {
        color: '#c3e2ff',
        fontSize: 16,
        mleft: 80 //右侧偏移量
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-bar-triangle-chart';
    const {
      width,
      height,
      itemStyle: {
        normal,
        emphasize
      }
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    const normalGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(normal);
    const emphasizeGradient = Object(__WEBPACK_IMPORTED_MODULE_6__tool_getLinearGradient__["a" /* default */])(emphasize);
    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');
    defs.html(`${defs.html()}${normalGradient.dom}${emphasizeGradient.dom}`);
    this.normalGradientId = normalGradient.id;
    this.emphasizeGradientId = emphasizeGradient.id;

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'bar|5': [{
        'name|+1': ['龙卷风', '简单爱', '双节棍', '东风破', '七里香'],
        'value': '@natural(100,1000)'
      }]
    });
    this.dataset = data.bar;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const {
      margin: {
        top,
        right,
        bottom,
        left
      }
    } = this.config;
    const [width, height] = this.size;

    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    }) * 1.2;

    this.xScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.ordinal().domain(__WEBPACK_IMPORTED_MODULE_0_d3___default.a.range(data.length)).rangeRoundBands([20, width - right - left], 0.9);

    this.yScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([0, height - bottom - top]);

    this.yAxisScale = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([0, maxValue]).range([height - bottom - top, 0]);

    //利用区域生成器绘制异形图形的path
    this.area = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.area().x(d => {
      return d.x;
    }).y0(height - bottom).y1(d => {
      return height - d.y1 - bottom;
    });

    // 绘制柱子
    this.drawBar(data);
    // 绘制Y轴
    // this.drawYaxis()
    // 绘制X轴
    this.drawXaxis(data);
  }
  /**
   *  绘制柱子
   */
  drawBar(data) {
    const self = this;
    const {
      margin: {
        bottom,
        left,
        right
      },
      itemStyle: {
        barWidth
      },
      label: {
        color,
        fontSize
      }
    } = this.config;
    const [width, height] = this.size;
    const container = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'bar-container', 'g');
    const update = container.selectAll('.bar').data(data);
    const enter = update.enter().append('g').attr('class', 'bar');
    enter.append('path');
    enter.append('text');
    update.exit().remove();

    const item = container.selectAll('.bar');
    item.select('path').attr({
      'transform': (d, i) => {
        // return `translate(${this.xScale(i) - barWidth},-20)`//设置translateY让图形不超过X轴轴线
      },
      'fill': `url(#${this.normalGradientId})`,
      'd': (d, i) => {
        const data = [{
          x: 0,
          y1: 40
        }, {
          x: 38,
          y1: 40
        }, {
          x: 76,
          y1: 40
        }];
        return this.area(data);
      }
    }).style({
      'pointer-events': 'all'
    }).transition().duration(2000).attr({
      'd': (d, i) => {
        const pathY = this.yScale(d.value);
        const data = [{
          x: this.xScale(0),
          y1: 0
        }, {
          x: this.xScale(i),
          y1: pathY
        }, {
          x: this.xScale(4),
          y1: 0
        }];
        return this.area(data);
      }
    });

    item.select('text').attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': d => {
        return height - this.yScale(d.value) - 30; //图案有个尖，字体过不去，所以加30px
      },
      'dy': '1em',
      'opacity': 0,
      'text-anchor': 'middle',
      'fill': color,
      'font-size': fontSize
    }).text(d => {
      return d.value;
    });

    item.on('mouseover', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('text').transition().duration(1000).attr({
        'dy': '-2em',
        'opacity': 1
      });
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('path').attr({
        'fill': `url(#${self.emphasizeGradientId})`
      });
    }).on('mouseout', function () {
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('text').transition().duration(1000).attr({
        'dy': '1em',
        'opacity': 0
      });
      __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(this).select('path').attr({
        'fill': `url(#${self.normalGradientId})`
      });
    });
  }
  /**
   *  绘制柱图的Y轴
   */
  drawYaxis() {
    const {
      margin: {
        bottom,
        top,
        left
      },
      yAxis: {
        fontSize,
        color,
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const yAxis = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.svg.axis().scale(this.yAxisScale).orient('left').ticks(5);

    const yAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis', 'g');
    yAxisDom.attr('transform', `translate(${mleft},${top})`).call(yAxis);
    __WEBPACK_IMPORTED_MODULE_0_d3___default.a.select(`.${this.chartName}`).select('.y-axis').selectAll('text').style({
      'font-size': fontSize,
      'fill': color
    });
    // 添加一根竖直线
    let yAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'y-axis-line', 'line');
    yAxisLine.attr({
      'x1': left + 40,
      'x2': left + 40,
      'y1': height - bottom,
      'y2': top,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }
  /**
   *  绘制X轴
   */
  drawXaxis(data) {
    const {
      margin: {
        right,
        bottom,
        left
      },
      xAxis: {
        color,
        fontSize,
        anchor,
        mtop
      },
      yAxis: {
        mleft
      }
    } = this.config;
    const [width, height] = this.size;
    const xAxisDom = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis', 'g');
    const update = xAxisDom.selectAll('text').data(data);
    update.enter().append('text');
    update.exit().remove();
    xAxisDom.selectAll('text').data(data).attr({
      'x': (d, i) => {
        return this.xScale(i);
      },
      'y': height - bottom + mtop,
      'text-anchor': anchor,
      'font-size': fontSize,
      'fill': color
    }).text((d, i) => {
      return d.name;
    });
    // 添加一根水平线
    let xAxisLine = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'x-axis-line', 'line');
    xAxisLine.attr({
      'x1': left + 40,
      'x2': width - left - right - 40,
      'y1': height - bottom,
      'y2': height - bottom,
      'stroke': '#637dff',
      'fill': 'none'
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Triangle;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tool_getContainer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_getSize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_tooltip__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_chinageo_json__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_chinageo_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__lib_chinageo_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tool_southChinaSea__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tool_getLinearGradient__ = __webpack_require__(7);
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-04 10:03:04 
 * @Last Modified time:   2017-12-04 10:03:04 
 * @Description: 绘制地图
 */









class Map {
  /**
   *  默认配置项
   */
  defaultSet() {
    return {
      width: '100%',
      height: '100%',
      itemStyle: {
        x1: 0,
        y1: 0,
        x2: 100,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: 'red',
          opacity: 0.8
        }, {
          offset: 100,
          color: 'blue',
          opacity: 0.8
        }]
      }
    };
  }
  /**
   *  初始化，创建容器
   */
  constructor(selector, option) {
    const self = this;
    const defaultSet = this.defaultSet();
    this.config = Object.assign(defaultSet, option);
    this.chartName = 'l-map-chart';
    const {
      width,
      height,
      itemStyle
    } = this.config;
    this.size = Object(__WEBPACK_IMPORTED_MODULE_4__tool_getSize__["a" /* default */])(selector, width, height);
    const [w, h] = this.size;

    this.svg = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(selector, this.chartName, 'svg').attr({
      'width': w,
      'height': h
    });

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(`.${this.chartName}`).show().siblings().hide();

    // 创建线性渐变
    const gradient = Object(__WEBPACK_IMPORTED_MODULE_8__tool_getLinearGradient__["a" /* default */])(itemStyle);
    const defs = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, `${this.chartName}-defs`, 'defs');
    defs.html(`${defs.html()}${gradient.dom}`);
    this.gradientId = gradient.id;

    Object(__WEBPACK_IMPORTED_MODULE_7__tool_southChinaSea__["a" /* default */])(this.svg);

    const data = __WEBPACK_IMPORTED_MODULE_2_mockjs___default.a.mock({
      'map|34': [{
        'name|+1': ['甘肃', '青海', '广西', '贵州', '重庆', '北京', '福建', '安徽', '广东', '西藏', '新疆', '海南', '宁夏', '陕西', '山西', '湖北', '湖南', '四川', '云南', '河北', '河南', '辽宁', '山东', '天津', '江西', '江苏', '上海', '浙江', '吉林', '内蒙古', '黑龙江', '香港', '澳门', '台湾'],
        'value': '@natural(1,1000)'
      }]
    });
    this.dataset = data.map;
  }
  /**
   *  绘制
   */
  render(data = this.dataset) {
    const self = this;
    const {
      itemStyle: {
        colorStops
      }
    } = this.config;
    const values = [];
    data.map((d, i) => {
      let name = d.name;
      let value = d.value;
      values[name] = value;
    });
    const [w, h] = this.size;

    const minValue = 0;
    const maxValue = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.max(data, d => {
      return d.value;
    });
    const linear = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.scale.linear().domain([minValue, maxValue]).range([0, 1]);
    // 绘制图例
    const colorLegend = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'color-legend', 'g');
    const colorRect = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])('.color-legend', 'color-rect', 'rect');
    colorRect.attr({
      'x': 40,
      'y': h - 70,
      'width': 200,
      'height': 40,
      'fill': `url(#${this.gradientId})`,
      'stroke': 'none'
    });

    const colorMinText = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])('.color-legend', 'color-text-min', 'text');
    colorMinText.attr({
      'x': 40,
      'y': h - 70,
      'fill': '#fff',
      'dy': '-0.3em',
      'text-anchor': 'middle',
      'stroke': 'none'
    }).text(minValue);

    const colorMaxText = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])('.color-legend', 'color-text-max', 'text');
    colorMaxText.attr({
      'x': 240,
      'y': h - 70,
      'fill': '#fff',
      'dy': '-0.3em',
      'text-anchor': 'middle',
      'stroke': 'none'
    }).text(maxValue);

    const computerColor = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.interpolate(colorStops[0].color, colorStops[1].color);

    const projection = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.geo.mercator().center([107, 31]).scale(650).translate([w / 2, h / 2 + 100]);

    const path = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.geo.path().projection(projection);

    const groups = Object(__WEBPACK_IMPORTED_MODULE_3__tool_getContainer__["a" /* default */])(`.${this.chartName}`, 'province-container', 'g');
    const update = groups.selectAll("path").data(__WEBPACK_IMPORTED_MODULE_6__lib_chinageo_json___default.a.features);

    update.enter().append('path');
    update.exit().remove();

    const province = groups.selectAll("path").attr({
      'class': 'province',
      'fill': (d, i) => {
        return computerColor(linear(values[d.properties.name]));
      },
      'd': path
    });

    province.on('mouseover', function (d) {
      const event = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event;
      const top = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageY;
      const left = __WEBPACK_IMPORTED_MODULE_0_d3___default.a.event.pageX + 20;
      const option = {
        location: {
          x: left,
          y: top
        },
        data: [{
          name: d.properties.name,
          value: values[d.properties.name]
        }]
      };
      self.tooltip = Object(__WEBPACK_IMPORTED_MODULE_5__tool_tooltip__["a" /* default */])(option);
      self.tooltip.show();
    }).on('mouseout', function () {
      self.tooltip.hide();
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Map;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":1,"name":"甘肃"},"geometry":{"type":"Polygon","coordinates":[[[104.35851932200904,37.40123159456249],[104.46450768428224,37.440247301072134],[104.68950687084538,37.41192861571304],[104.76474775590418,37.25049144112714],[104.8553882179919,37.218193671200964],[104.92241255059872,37.096754055055584],[105.18017459508144,36.97213633912071],[105.32166466729058,36.78072683457572],[105.22048221188453,36.69295441301577],[105.26874799962047,36.550224107356684],[105.39277143815133,36.38439443615431],[105.44594648644119,36.254583237926056],[105.43741987472742,36.10668528929466],[105.35148196761867,36.0576443552028],[105.31809899297417,35.9332075064213],[105.43183881970583,35.756422430750604],[105.68696536675827,35.66045929605963],[105.8293856140549,35.49364777292638],[105.93614912268384,35.52480866129068],[106.06508182176867,35.48765330675465],[106.11241743441701,35.42465973645773],[106.21065433133236,35.39515249269334],[106.31338707855087,35.27360952376057],[106.37777591372742,35.2606645779079],[106.46485070239805,35.33236562797137],[106.49508141477554,35.5531273457504],[106.4292973174172,35.69944916414764],[106.46960493422034,35.72743195182309],[106.76710615382592,35.7065546743587],[106.91340213380147,35.788823554363546],[106.84322553892741,35.882202867568225],[106.91484907372575,35.907059231398364],[106.9447697286401,36.07694550243298],[106.81366662011845,36.21164012279348],[106.7449369651689,36.206575833507856],[106.6038603050091,36.27783763310026],[106.49658003064394,36.26835500697797],[106.495391473138,36.4367426621441],[106.43999433766857,36.51477407516347],[106.49399621005699,36.55981008626645],[106.50236779213986,36.70651947739199],[106.60215498266638,36.7258206237228],[106.64902550732126,36.8341861028064],[106.57481815013756,36.93133779590261],[106.63393598775559,36.997897040515966],[106.64406456902458,37.18165843428932],[106.7906706082619,37.18966828116629],[106.93293582592759,37.107192694687114],[107.18780398966243,37.11706289353771],[107.28547244669602,37.068461209017585],[107.29963178937561,36.90720490248421],[107.5009114927712,36.890771795781774],[107.54886722214462,36.8400255402465],[107.69547326138195,36.82509105121099],[107.88652103072098,36.75537954433051],[108.04170535671688,36.59774058715834],[108.35636315343675,36.54603831631525],[108.44126753087181,36.46128896671243],[108.60652876219262,36.43198843032184],[108.70368045528875,36.35896963154323],[108.64993696531866,36.22649709746304],[108.69975304576644,36.1255471869531],[108.67711876821659,36.00524445236957],[108.49309899292422,35.88119517721566],[108.50999718582142,35.700870266549515],[108.60373823423208,35.547856349990525],[108.6172257833432,35.39282705272626],[108.49263390493076,35.272498481519676],[108.2767814468063,35.26283498824415],[108.1549800963544,35.29055939440059],[107.97866010867705,35.22345754742793],[107.92284956295703,35.26689158807628],[107.74167199066977,35.318361314023434],[107.67046186702152,35.22797923435422],[107.83034874889563,34.976728420879965],[107.71004601431213,34.951406969056364],[107.5696411477208,34.96541128210495],[107.49688073136076,34.92577545797096],[107.32076745015769,34.94220856377419],[107.21085167836225,34.89177236570208],[107.05153323816836,35.038145860043386],[106.91484907372575,35.08904714610895],[106.56458621608095,35.07961619683002],[106.4912056820965,35.03011017474469],[106.549703403889,34.862575182098965],[106.4915157413584,34.740954697900946],[106.3177278992232,34.583341580049876],[106.36837080287029,34.52021881854367],[106.49833702983,34.52021881854367],[106.61409223816622,34.45872386321574],[106.67362348783365,34.384671536562195],[106.65600182542386,34.2542143822879],[106.55404422366195,34.28082774530418],[106.58742719920588,34.137451484498456],[106.51373660685891,34.10660065449662],[106.43022749160542,33.94211457043107],[106.47983686737751,33.86819143318809],[106.48174889529531,33.700888984539034],[106.55947024905277,33.59862132441461],[106.49554650276883,33.543585924151046],[106.39265872591949,33.61882680920988],[106.17060509604835,33.56224111623459],[106.07345340385154,33.61750906049474],[105.83243452443372,33.49754222269539],[105.74716840999412,33.29398875617616],[105.91273969877801,33.233682359253436],[105.9105692893412,33.031730862289436],[105.88648807186706,32.978013210741096],[105.6393196957473,32.88548655915733],[105.4985530948494,32.90739736629541],[105.43090864461823,32.911479804549344],[105.38636355993032,32.82337148710451],[105.43524946529055,32.77355540575738],[105.2699882339698,32.641702989301535],[105.14679162043694,32.60834585217927],[105.03181155755732,32.63867991824361],[104.89833133312447,32.611834011230656],[104.8409704937933,32.63981679890611],[104.64542687415093,32.657877712686286],[104.55840376232374,32.68834096906048],[104.40569990412729,32.809367174055836],[104.28885949107269,32.8478919541503],[104.32126061378625,32.9527175973393],[104.40585493375818,33.06327932428141],[104.32823693188885,33.14035472289217],[104.28059126177726,33.272052109717094],[104.2928902533825,33.363571071847446],[104.17465457634756,33.49015249344279],[104.15630944172733,33.62402029150326],[104.0930058130678,33.668539536870156],[103.74512007043484,33.67603261980952],[103.52275638220124,33.714118150332354],[103.55861982644387,33.80687734591277],[103.35067386330815,33.75569183990646],[103.18417239763806,33.822096055788364],[103.1421077816488,33.96154490797116],[103.15239139164942,34.108512682414386],[103.12009362172324,34.16861237196338],[103.00056603439498,34.21398427985062],[102.93059614509599,34.295581367186315],[102.78181969642179,34.27418732398584],[102.59779992112948,34.16546010969634],[102.61764367071879,34.08350128805395],[102.44060021442834,34.059730129841626],[102.31936730295871,33.98735728620983],[102.17121097190886,33.9417528352252],[102.34313846207033,33.72517690668886],[102.35600589355715,33.60939585993103],[102.4818380072183,33.540149441043894],[102.4818380072183,33.46503774719426],[102.27874962779305,33.37775625294876],[102.13095503104978,33.28466116058408],[102.09938073063614,33.2222360301686],[102.00424441914458,33.21879954706148],[101.86368452382175,33.12262970589623],[101.83216190025149,33.26920990671178],[101.9232157743885,33.40638499577091],[101.88399336140452,33.54632477526815],[101.77753991113792,33.53004669909589],[101.6133638863343,33.51185659410652],[101.57688032356805,33.63050568319076],[101.49559329639345,33.70463552510944],[101.39963016170259,33.64507843702029],[101.16026492688496,33.66414704025368],[101.12946577372645,33.85064728424476],[100.94797814307685,33.92976390198248],[100.79170861236253,34.15486644133318],[100.81547977057494,34.29459951435609],[100.93526574122092,34.38632518206148],[101.0358280781033,34.33893789346902],[101.25602135600082,34.30049062774032],[101.32366580623199,34.259511217368754],[101.6116585630923,34.19124665041258],[101.64716027212887,34.136004544574035],[101.78038211504253,34.06750743272184],[101.86254764225981,34.141378893121384],[102.01199588360316,34.17760407256986],[102.07653974841065,34.26697846098722],[102.2123454119112,34.351546943436716],[102.15028201670174,34.49507823297404],[101.93194909077789,34.59111888293009],[101.91391401631881,34.661398831490885],[101.7933528993168,34.631891587726585],[101.75506066321901,34.70367015215584],[101.9232157743885,34.78728262019672],[101.912828810701,34.844798489158904],[102.00936038617283,34.94213104940843],[102.26712242975628,35.0558708770393],[102.37559126162739,35.20369131130502],[102.31771365835863,35.27497895021838],[102.28929162021205,35.4069347194617],[102.42644087084955,35.43530508076486],[102.53496137866472,35.5356348745498],[102.70218631384728,35.52403351493476],[102.72130659392417,35.619066474538215],[102.67986209465988,35.756835841900624],[102.70032596187366,35.839466458010634],[102.83752689025374,35.860757148423716],[102.97601972892738,35.833291123786296],[102.99953250472129,35.990749212905826],[102.93328331936976,36.08606639334937],[103.0403568872606,36.2164977083026],[102.89447431843502,36.30941193351396],[102.81856163890848,36.32605174399279],[102.76972741129094,36.49756582300432],[102.69815555243673,36.60887685788063],[102.61082238224708,36.657194322460015],[102.67474612763164,36.80162995136112],[102.46013390475588,36.9556515573735],[102.49584232026689,37.08910594338457],[102.55061933811197,37.1638300645059],[102.42664757732382,37.27806081855195],[102.24552168188006,37.38087108013622],[102.14201378830563,37.406657619953165],[102.03266645729116,37.47890127237579],[102.06723799034091,37.548302720893844],[101.93706505690687,37.73069468820927],[101.76560265473876,37.524970812253144],[101.64654015540378,37.61186473197179],[101.29291832901771,37.79893341674372],[101.04978071520782,37.9637295600711],[100.63574913911145,38.10540049943347],[100.55430708230602,38.25208405213729],[100.35783328667685,38.30704193803501],[100.14079227104645,38.48584239441095],[100.08306969560994,38.39450429943386],[100.15552005360757,38.302778631728444],[100.07903893419939,38.27843903273518],[99.79988284741546,38.365720526980795],[99.55715864475559,38.515375474798304],[99.49633548389545,38.60110667633211],[99.0992537784391,38.889642035551475],[99.09475792813595,38.95777741129845],[98.96210452690241,38.98175527598519],[98.78190880744546,39.06769318309395],[98.60222985192615,38.9475971540854],[98.44456505723156,38.957312324204366],[98.32431399859217,39.023251451193545],[98.26256066264443,38.93168081311896],[98.06861901165803,38.80184377736839],[97.36256391819029,39.150427151092174],[97.13746137883953,39.20316294981029],[97.02646040232571,39.196212470129325],[96.96253665604178,39.10324656807467],[96.99111372291998,38.99679311780818],[96.98119184812532,38.74430206998457],[96.94238284719063,38.63911469248907],[96.97121829558796,38.567258612794774],[96.94548343261437,38.35822744404132],[96.84507612536294,38.35641876891103],[96.51036787257925,38.470106919698566],[96.50261640812067,38.54901683186122],[96.31549604740468,38.62694489209312],[96.05478844622985,38.67882803008956],[96.00760786321234,38.75169179923708],[95.89185265487612,38.783653673278366],[95.72163048705727,38.8747333849378],[95.5657743665937,39.01524160431657],[95.46092288588244,39.04660919915523],[95.3053251487367,39.182776597861675],[95.05717492068607,39.1474557559784],[94.72463707913784,39.23683014619428],[94.63105106035817,39.29537954393078],[94.47932905499187,39.31783295342805],[94.11697391221622,39.321941230103704],[93.90892459539378,39.28563853628947],[93.72206261619681,39.3067483595492],[93.50202436703091,39.27191844318162],[93.27562991738677,39.18871938718996],[93.14034101782369,39.19874461477218],[92.93596072810516,39.152855942947355],[92.94794966044856,39.45247589784444],[92.7724048200264,39.810541896791136],[92.77741743426725,39.905523180450416],[92.91952762230193,40.11806834577749],[92.9258838236795,40.42290762049029],[93.03683312424931,40.48985443783204],[93.28632693943672,40.46926138030838],[93.57747195766478,40.58796214533666],[93.75994144114458,40.82332245536699],[94.01103722498789,41.10402883576222],[94.58092492064856,41.58521393477531],[95.05826012630376,41.78856069571958],[95.49198042235855,41.856024277898115],[95.77191165639778,41.82972097414367],[95.86394738156645,41.85501658844473],[96.03582319488447,41.99529226292756],[96.01783979726889,42.138720201476076],[96.04378136581732,42.499886785846485],[96.09091027199156,42.58690989857294],[96.36633990098284,42.722922619141826],[97.19067973399132,42.78706149219707],[97.84687544104878,41.61926870388754],[97.6476111192577,41.45553192775628],[97.70848595606202,41.34941437427395],[97.95053836515336,41.11981598641867],[98.32653608577169,40.855671902136606],[98.23481041896565,40.541685898985065],[98.51520674009896,40.533546860898895],[98.64584476062714,40.56754995406706],[98.82567874577745,40.72655833589849],[99.1574414409697,40.83631907806301],[99.49602542463361,40.84288198501565],[99.66454227100894,40.901276354020496],[100.01118777929253,40.896289578201475],[100.17603559766468,40.735084946712874],[100.20378584224284,40.61695262336491],[100.14001712379127,40.518095607926],[100.01418501192876,40.40249542922069],[99.89935997868008,40.204781399242165],[99.62702518126707,40.06918244131654],[99.43086144400041,39.87880646374728],[99.68614301978448,39.876015936686144],[100.0434855492187,39.72765290006129],[100.18885135320733,39.694890042141765],[100.28662316302854,39.62734894469807],[100.3068286478238,39.54983429651557],[100.45498497887365,39.495574041708636],[100.54345503062518,39.408860989143335],[100.78953820202634,39.407879137212376],[100.83315311072744,39.380077215790806],[100.85196333244181,39.16748037451967],[100.88855024619687,39.105158595992435],[101.04854048085855,39.00082388011796],[101.17995364774265,39.02064179128564],[101.24780480264951,38.87003082905949],[101.41399620995713,38.749211331437834],[101.58018761636538,38.68823314094669],[101.83107669463374,38.689835110501946],[102.02036746568609,38.85693085447528],[102.022847935284,38.89271678345284],[101.82549563961209,39.06443756803935],[102.393109572149,39.23719188140018],[102.59345909955778,39.177919013251824],[102.96537438372081,39.11936961551535],[103.28395958906378,39.292976590497204],[103.46379357331472,39.35718455672196],[103.74925418463295,39.4248806828972],[104.02396609885636,39.44110708312536],[104.05998457183051,39.307833564267554],[104.22478071515786,39.090689194950386],[104.17155399002456,38.95950857206296],[104.04256961499567,38.8740615913693],[103.97952436695596,38.7589781757022],[103.79431603415765,38.59077138948797],[103.47123497941078,38.43589712185471],[103.52167117658354,38.13984284127409],[103.38808760026257,38.101989853848664],[103.38746748263816,37.99910207789861],[103.43816206312869,37.84239329671328],[103.67871585455305,37.7750330673222],[103.86366580583223,37.62643748580132],[104.10850874198485,37.4618480489483],[104.2624528336313,37.3903278669375],[104.35851932200904,37.40123159456249]]]}},{"type":"Feature","properties":{"id":2,"name":"青海"},"geometry":{"type":"Polygon","coordinates":[[[101.77753991113792,33.53004669909589],[101.69108524009175,33.42028595603202],[101.66514367064383,33.32039541271811],[101.72694868433427,33.26778880520919],[101.64364627465585,33.1277715113462],[101.44515709832143,33.235852768690336],[101.22000288302667,33.17061127369129],[101.16414065956377,33.128081569708655],[101.13142947758837,32.93835154908473],[101.23194013942583,32.857710476157564],[101.17080691930397,32.68834096906048],[100.90219282403956,32.63046336489239],[100.69708906480844,32.68573131005192],[100.60303795803532,32.451223659844004],[100.53120771676265,32.40339712257915],[100.47302005423205,32.48527842895632],[100.56092166520273,32.5633356803973],[100.4984965347872,32.669091497774446],[100.3994328146726,32.75838837272522],[100.25499718577157,32.72580638285831],[100.22316450383875,32.63689708153504],[100.11903649264002,32.67087433538231],[100.15862063993058,32.78226288552375],[100.04689619300484,32.93548350675843],[99.84096561057441,32.9570067411681],[99.7692903989327,32.92176341454987],[99.69854536327784,32.744616604572684],[99.50940962095723,32.83543793381361],[99.28937137179133,32.88714020375744],[99.22529259587657,32.99891632752647],[99.10064904241938,33.072451891141895],[98.8520854023194,33.17487457909857],[98.7729171077383,33.30272207346488],[98.7357100772582,33.4897649198152],[98.63328738840227,33.60771637600993],[98.64584476062714,33.676161811018716],[98.45794925265585,33.84010529182575],[98.30167972194164,33.84584137647835],[98.21181440620984,33.939453232780465],[98.03492597865096,33.95978790878502],[97.81907352142582,33.86418651019929],[97.74507286981708,33.86485830286841],[97.69567020141864,34.00523733193728],[97.61024905824746,33.93087494602193],[97.3835445502408,33.86987091710907],[97.3905208683434,33.61138540311384],[97.47738895143897,33.56224111623459],[97.53929731611834,33.45372060841933],[97.7242989442409,33.406126614251804],[97.61567508273885,33.32837942207263],[97.50053999202703,33.19435659438136],[97.504260695075,33.04560598412883],[97.36096194863501,32.89703624102975],[97.43067345641487,32.70032990230317],[97.7157206556837,32.544189560999484],[97.63086795509201,32.44409231211051],[97.56229332887398,32.48434825296948],[97.36085859584756,32.50018707957008],[97.32628706279775,32.423576768952785],[97.39315636577362,32.38497447449237],[97.35977339112912,32.260485947968135],[97.25440514468164,32.20395193093691],[97.25487023267505,32.075794379107236],[97.12407718341524,32.009338487281354],[97.01808882024284,32.022903550758315],[96.75412560401344,31.97383677824473],[96.75288536966406,31.83867706989085],[96.79541507364672,31.715454617036983],[96.48323774562544,31.753462633193948],[96.27818566323776,31.909060370339773],[96.18263593969681,31.871155706970285],[96.14775434828454,31.77992096657931],[96.21291832891774,31.735117499473034],[96.21462365126052,31.6067532411692],[96.0942175638894,31.70054596642322],[95.84885786290005,31.714266059530956],[95.5926977879725,31.761575832858398],[95.49709638938685,31.741654568003867],[95.40676598476233,31.810668442894325],[95.35431440598506,31.954406439805382],[95.42526614811419,32.094759630452614],[95.38211632740655,32.1700521923548],[95.259074741706,32.24407868148589],[95.06182579972085,32.261209418379906],[94.9513415871445,32.33722544979463],[94.93893924365113,32.428150132722436],[94.75522952672128,32.535456243710655],[94.7218465511774,32.592868760784654],[94.582216830942,32.67219208409742],[94.31685835163165,32.54075307879154],[94.17826216017056,32.52225291633897],[94.11077273957022,32.47822459648796],[93.87740197092415,32.495381170904295],[93.7341549013276,32.57245657041443],[93.59716067942185,32.56457591384728],[93.51039594911373,32.51610342143573],[93.34534142516662,32.57770172775258],[93.21852745957455,32.659789741503346],[93.03125206922755,32.663510444551406],[93.00593061740403,32.73461721451278],[92.8500228209964,32.728881129860184],[92.72729129365831,32.760558783061384],[92.64998335195008,32.74043081353125],[92.46580854702677,32.769421292458674],[92.22137902202428,32.74497833887918],[92.19610924704409,32.86864004220416],[92.08609012156182,32.885641587888955],[91.97684614513349,32.84861542456224],[91.81313520742384,32.9682722030997],[91.72032433500016,32.98250906014505],[91.54266076018592,33.08033254680956],[91.37646935377774,33.27125112583877],[91.36158654158561,33.336957708831164],[91.18919396432995,33.336957708831164],[91.12790571457708,33.25432709451982],[90.94993208229971,33.23939260548434],[90.80404951437367,33.14053559004543],[90.66033735588434,33.155857651809214],[90.43626834530784,33.28218069098608],[90.32320031124539,33.28871776041629],[90.2056881037231,33.40150157273936],[90.2032076350244,33.500074368237534],[90.14057579993317,33.57820913314501],[89.97510786303741,33.630557359134826],[89.87723270132818,33.82274201093509],[89.74189212402234,33.909506741243064],[89.63673058494862,34.093371486904545],[89.78659223834114,34.1985330268777],[89.84028405056841,34.38332794942528],[89.79573896677988,34.40841685635283],[89.7910880877451,34.55411855712569],[89.72390872640653,34.73963694918584],[89.82524620964489,34.84609040035167],[89.78767744305958,34.926395574696045],[89.58360721170345,34.9409166534808],[89.57166995620355,35.07331167229586],[89.45482954314889,35.21283803974367],[89.4843367860139,35.34220998840027],[89.73010989815322,35.44365082532536],[89.69026736934364,35.50858226196186],[89.71507205633037,35.642346707234736],[89.78876264777801,35.82685740804294],[89.58143680226658,35.839776516373064],[89.48464684437636,35.88018748596369],[89.43514082229115,35.98780365711312],[89.51467085207815,36.053251857687144],[89.67781334810746,36.081958115774455],[89.8667940607973,36.06560252523636],[89.97200727671441,36.10492829010852],[90.01376183524053,36.25277456279585],[90.16569054618179,36.12924205247873],[90.62266523561209,36.1111294618552],[90.82937096619708,36.010412096241225],[90.91499881404411,36.01333181451159],[91.11131758004228,36.07392243137514],[91.13576053272249,36.14063670472012],[91.0610364116011,36.31354604771195],[91.00672448085015,36.50348277391089],[90.80528974782356,36.55851817507366],[90.68813927640645,36.69848379209333],[90.71237552261232,36.82149953937221],[90.80777021742165,36.910563870326314],[91.05499026858604,36.94513540337613],[91.28758589087619,37.01350332311986],[91.31631798738522,37.118974921455475],[91.23497928336718,37.19540436491951],[91.07374881435624,37.48794464802705],[90.95721845876483,37.519415594753895],[90.83448693232606,37.60778229371786],[90.4364750508829,37.77857290321691],[90.41006839434095,37.84699249890471],[90.43926557794407,37.99607900594131],[90.19349246580464,38.32567129169675],[90.15091108587785,38.43279653643103],[90.31245161325131,38.46579193834722],[90.47822960761027,38.53250621169232],[90.63599775599164,38.6243093937635],[90.65351606561393,38.674073798267216],[91.01246056460332,38.69867178057822],[91.29440718024716,38.7451288931839],[91.49160444538887,38.81726919191968],[91.62865034413801,38.825666612424214],[92.1227287130597,38.94064667440455],[92.3331034689499,39.049864814209826],[92.93596072810516,39.152855942947355],[93.14034101782369,39.19874461477218],[93.27562991738677,39.18871938718996],[93.50202436703091,39.27191844318162],[93.72206261619681,39.3067483595492],[93.90892459539378,39.28563853628947],[94.11697391221622,39.321941230103704],[94.47932905499187,39.31783295342805],[94.63105106035817,39.29537954393078],[94.72463707913784,39.23683014619428],[95.05717492068607,39.1474557559784],[95.3053251487367,39.182776597861675],[95.46092288588244,39.04660919915523],[95.5657743665937,39.01524160431657],[95.72163048705727,38.8747333849378],[95.89185265487612,38.783653673278366],[96.00760786321234,38.75169179923708],[96.05478844622985,38.67882803008956],[96.31549604740468,38.62694489209312],[96.50261640812067,38.54901683186122],[96.51036787257925,38.470106919698566],[96.84507612536294,38.35641876891103],[96.94548343261437,38.35822744404132],[96.97121829558796,38.567258612794774],[96.94238284719063,38.63911469248907],[96.98119184812532,38.74430206998457],[96.99111372291998,38.99679311780818],[96.96253665604178,39.10324656807467],[97.02646040232571,39.196212470129325],[97.13746137883953,39.20316294981029],[97.36256391819029,39.150427151092174],[98.06861901165803,38.80184377736839],[98.26256066264443,38.93168081311896],[98.32431399859217,39.023251451193545],[98.44456505723156,38.957312324204366],[98.60222985192615,38.9475971540854],[98.78190880744546,39.06769318309395],[98.96210452690241,38.98175527598519],[99.09475792813595,38.95777741129845],[99.0992537784391,38.889642035551475],[99.49633548389545,38.60110667633211],[99.55715864475559,38.515375474798304],[99.79988284741546,38.365720526980795],[100.07903893419939,38.27843903273518],[100.15552005360757,38.302778631728444],[100.08306969560994,38.39450429943386],[100.14079227104645,38.48584239441095],[100.35783328667685,38.30704193803501],[100.55430708230602,38.25208405213729],[100.63574913911145,38.10540049943347],[101.04978071520782,37.9637295600711],[101.29291832901771,37.79893341674372],[101.64654015540378,37.61186473197179],[101.76560265473876,37.524970812253144],[101.93706505690687,37.73069468820927],[102.06723799034091,37.548302720893844],[102.03266645729116,37.47890127237579],[102.14201378830563,37.406657619953165],[102.24552168188006,37.38087108013622],[102.42664757732382,37.27806081855195],[102.55061933811197,37.1638300645059],[102.49584232026689,37.08910594338457],[102.46013390475588,36.9556515573735],[102.67474612763164,36.80162995136112],[102.61082238224708,36.657194322460015],[102.69815555243673,36.60887685788063],[102.76972741129094,36.49756582300432],[102.81856163890848,36.32605174399279],[102.89447431843502,36.30941193351396],[103.0403568872606,36.2164977083026],[102.93328331936976,36.08606639334937],[102.99953250472129,35.990749212905826],[102.97601972892738,35.833291123786296],[102.83752689025374,35.860757148423716],[102.70032596187366,35.839466458010634],[102.67986209465988,35.756835841900624],[102.72130659392417,35.619066474538215],[102.70218631384728,35.52403351493476],[102.53496137866472,35.5356348745498],[102.42644087084955,35.43530508076486],[102.28929162021205,35.4069347194617],[102.31771365835863,35.27497895021838],[102.37559126162739,35.20369131130502],[102.26712242975628,35.0558708770393],[102.00936038617283,34.94213104940843],[101.912828810701,34.844798489158904],[101.9232157743885,34.78728262019672],[101.75506066321901,34.70367015215584],[101.7933528993168,34.631891587726585],[101.91391401631881,34.661398831490885],[101.93194909077789,34.59111888293009],[102.15028201670174,34.49507823297404],[102.2123454119112,34.351546943436716],[102.07653974841065,34.26697846098722],[102.01199588360316,34.17760407256986],[101.86254764225981,34.141378893121384],[101.78038211504253,34.06750743272184],[101.64716027212887,34.136004544574035],[101.6116585630923,34.19124665041258],[101.32366580623199,34.259511217368754],[101.25602135600082,34.30049062774032],[101.0358280781033,34.33893789346902],[100.93526574122092,34.38632518206148],[100.81547977057494,34.29459951435609],[100.79170861236253,34.15486644133318],[100.94797814307685,33.92976390198248],[101.12946577372645,33.85064728424476],[101.16026492688496,33.66414704025368],[101.39963016170259,33.64507843702029],[101.49559329639345,33.70463552510944],[101.57688032356805,33.63050568319076],[101.6133638863343,33.51185659410652],[101.77753991113792,33.53004669909589]]]}},{"type":"Feature","properties":{"id":3,"name":"广西"},"geometry":{"type":"Polygon","coordinates":[[[111.99655439706783,24.735673935703687],[111.93247562115312,24.698286038070194],[111.93325076660972,24.60136688897086],[112.00554609587584,24.553075262813195],[111.99092166520262,24.46587128293345],[112.04730065260321,24.381457831014075],[111.97593550022327,24.27676137903447],[111.86932702032573,24.231828722517605],[111.8991443215532,23.990861518144612],[111.80788374184118,23.909238593286545],[111.79331098801185,23.849190578782242],[111.65750532361176,23.841697495842766],[111.60117801305483,23.658013617334632],[111.47100507962091,23.613235989549253],[111.46929975817739,23.55791636844566],[111.39121666921386,23.431257433383934],[111.36284630701164,23.27302419700922],[111.36997765474496,23.139104723004607],[111.41095706601595,23.052598375114997],[111.35121910987402,22.908214423057245],[111.18146203004869,22.748534246758197],[111.06601688007493,22.740576076724665],[111.02379723535421,22.638670151806025],[110.75456302336488,22.580172430912967],[110.64237348844574,22.183452459763316],[110.46672529523619,22.150999661105516],[110.33355512916603,22.1904546171869],[110.35546593630391,22.100770169507825],[110.3558793483532,21.888974311215577],[110.21614627533052,21.87453074769587],[110.14235233019582,21.8974492460859],[109.96722090092396,21.866727607293342],[109.91724978994603,21.687152004561483],[109.74805748798155,21.57493724193023],[109.64966881600026,21.520453192000048],[109.57276451900009,21.58173248900016],[109.5307723320002,21.491644598000107],[109.43824303500008,21.455064195000176],[109.31552168100029,21.45905182500016],[109.21461022200015,21.417425848000164],[109.05014082100013,21.43716054900011],[109.1425887380002,21.510199286000102],[109.1357528000002,21.60297272300005],[109.06674238400007,21.636542059000078],[108.9702254570002,21.606350002000056],[108.90170332100024,21.665187893000052],[108.7515568370003,21.650132554000038],[108.57138105600029,21.8128115910001],[108.5537215500002,21.90375397300005],[108.4487410820002,21.86579010600022],[108.50513756600014,21.691717841000184],[108.44369550900024,21.64394765800006],[108.32154381600014,21.709662177000155],[108.25253339900019,21.59528229400013],[108.13526451900003,21.581854559000135],[107.99122155000009,21.48566315300019],[107.85546268800022,21.600336406000054],[107.74482344600017,21.657542217000184],[107.61320357300019,21.60560740200009],[107.34815515200012,21.599354553000182],[107.27265588400019,21.718313701000113],[107.17235192900023,21.715058085000123],[107.06584680200007,21.795828349000175],[107.02114668800016,21.892256571000075],[106.86477380400015,21.968065898000077],[106.72235355700025,22.006978251000135],[106.6721757410001,22.092502747000083],[106.66292565900022,22.223295797000105],[106.6172953700003,22.322772929000052],[106.5553353270002,22.331971334000144],[106.52691329000015,22.427779440000165],[106.56877120000013,22.574592183000163],[106.6801855880002,22.579449768000075],[106.73553104700022,22.6954116820001],[106.73103519700021,22.80010813400014],[106.66747318500012,22.867520040000073],[106.48779423100024,22.92542348300009],[106.31566003400013,22.853799947000226],[106.23401127200009,22.863851013000158],[106.20238529400007,22.946998393000058],[105.99924524000028,22.975368754000158],[105.85387943500018,22.904649556000038],[105.69032352700015,23.043969218000086],[105.55157230700024,23.05967885400017],[105.52132535803946,23.16314776222967],[105.84804080613827,23.519391588351198],[105.983019647339,23.46903290554411],[106.12812706890912,23.54065644034256],[106.1521566104393,23.750411077709117],[106.19375613843516,23.86939606447686],[106.15742760619901,23.973730781250595],[105.9707723325771,24.087728990400592],[105.87222537640008,24.024709580782485],[105.78799279163411,24.020652980950274],[105.5320910991249,24.126305447338495],[105.44718672079063,24.037602850691115],[105.32026940331025,24.118140570830803],[105.25303836512865,24.08550690412045],[105.16994266192427,24.1673623720759],[105.17624718555913,24.309911811481044],[105.06080203738412,24.430679633158547],[104.96106652190258,24.416416937691565],[104.7526554707735,24.46832591410964],[104.72872928293015,24.36419790291086],[104.66702762202715,24.339754950230855],[104.59917646712029,24.40251597743037],[104.50186974529248,24.57819000906173],[104.49463504387222,24.69820852280523],[104.53985192302781,24.74177175556207],[104.72934939965512,24.63139089577328],[104.85187422141837,24.705830796953705],[104.87673058524842,24.755026759777195],[105.01248457190547,24.797478949393962],[105.1000761254129,24.954316920889312],[105.20590945805509,25.003900458239514],[105.28941857330858,24.93318126100644],[105.38073082896466,24.95710744884977],[105.44439619283003,24.923621121417767],[105.50862999927506,24.817451891091935],[105.67533816872151,24.789675808092056],[105.78773441011504,24.715726834226103],[105.91646040182627,24.728723456022635],[106.00115807458559,24.648469956723147],[106.17618615107011,24.782234401996135],[106.19871707583235,24.876802272706755],[106.15572228385639,24.960363063904367],[106.3065657900791,24.981472887164102],[106.5871171408433,25.104359443233818],[106.666802199362,25.173502509333474],[106.88596194938441,25.196963609183257],[106.99551598507475,25.255383815710616],[107.01458458920752,25.353414007950107],[106.97458702986762,25.4404371197773],[107.0219226416167,25.497952988739485],[107.24423465390623,25.558595282446475],[107.39786868719034,25.387287909009785],[107.49889611206595,25.214120185398343],[107.64162641772515,25.267527778584224],[107.77603681814469,25.152986965276284],[107.86187137336537,25.14595897122956],[107.96656782444552,25.209030055892356],[108.0677502789523,25.21313833346727],[108.1291935574369,25.26881968797818],[108.13182905486707,25.386435248288223],[108.29336958224042,25.538699856013665],[108.40478396990443,25.514877020957726],[108.56787478998962,25.415864975887985],[108.6946370787382,25.602003486471688],[108.77411543168176,25.521930854325433],[108.9411853372336,25.54882843728265],[109.02438439322515,25.594949653104067],[109.08536258281691,25.805427760882537],[109.14861453733101,25.75065074303737],[109.3004398945854,25.743054308209878],[109.39914188039353,25.998542589568984],[109.45670942619904,26.038850206371933],[109.60316043490621,26.052673652267373],[109.67225182506161,25.98531342197691],[109.67659264483484,25.889066067345198],[109.77203901558823,25.90816050900031],[109.78134077365786,26.023760687705533],[109.83844323057065,26.045025539696894],[109.91166873582358,26.181218776825062],[110.06204715405289,26.149928697251653],[110.03362511590632,26.03649892798316],[110.13821821509862,26.051665961015317],[110.2469971053323,25.978207913564432],[110.34166832883028,26.11274750429385],[110.48455366412043,26.17155528444883],[110.53654015490423,26.22485952394797],[110.57705447818182,26.350794990396594],[110.68862389457706,26.332320665466483],[110.72402225082618,26.27431387008903],[110.87894819530305,26.275218206754857],[110.9354822123342,26.382472642698303],[111.12327436661872,26.305991523290288],[111.25189700734109,26.279714057058186],[111.25670291510744,26.210131741386903],[111.20208092689336,25.930278021713434],[111.25623782801335,25.868989772859862],[111.40832156768636,25.907850449738504],[111.41126712437824,25.802611396298857],[111.32372724771426,25.729825141517097],[111.31582075362496,25.503198146977013],[111.2537573593147,25.399121811722296],[111.16420210194548,25.36493785230016],[111.11376590387334,25.238640652444133],[110.99320478687156,25.15076487899597],[110.95460249241114,25.025346178283485],[111.0062789248326,24.93545502413008],[111.0790393411927,24.944240017363057],[111.12575483621669,25.04446645836049],[111.27437625526,25.147664293572376],[111.42692508292618,25.106193955886454],[111.46185835208138,25.019480903321153],[111.42971561088672,24.94341319416364],[111.47364057795028,24.7928539087809],[111.42816531817493,24.681026109067716],[111.51694542918824,24.642656357704766],[111.66711714094339,24.779676418931558],[111.79703169195909,24.76042694854482],[111.92596439014449,24.77487051026594],[111.99655439706783,24.735673935703687]]]}},{"type":"Feature","properties":{"id":4,"name":"贵州"},"geometry":{"type":"Polygon","coordinates":[[[109.25837527859625,28.505908922458815],[109.26385298083034,28.322225043051304],[109.35428673734299,28.265174262082496],[109.29873457224272,28.09471955026703],[109.36265831942592,28.029633083999613],[109.30989668228608,27.970308539007874],[109.32824181510762,27.807656969393605],[109.41340457586057,27.738953151966427],[109.44725263939773,27.65001801222155],[109.41836551325781,27.559506741343057],[109.20638878781239,27.444759223359426],[109.0149276064239,27.26218638799145],[108.90010257407448,27.188805854006944],[108.79132368384091,27.08312755009638],[108.87421268057074,27.018118598194718],[108.95017703694072,27.026903591427583],[109.0954911640859,27.13444224731188],[109.15564253137774,27.079716905410862],[109.23057335807403,27.151986396255182],[109.43820926284718,27.131031601727074],[109.49918745333832,27.062482814830076],[109.50714562427123,26.97636404146735],[109.44384199381295,26.900993964299943],[109.50528527229744,26.824797064832666],[109.39707482284473,26.754672145902788],[109.29403201726376,26.727309474952335],[109.37723107325536,26.646151638087645],[109.40255252507893,26.537295234387585],[109.31501264931433,26.42572581619342],[109.29656416190653,26.312528590921687],[109.39929691002442,26.269947210994985],[109.45670942619904,26.038850206371933],[109.39914188039353,25.998542589568984],[109.3004398945854,25.743054308209878],[109.14861453733101,25.75065074303737],[109.08536258281691,25.805427760882537],[109.02438439322515,25.594949653104067],[108.9411853372336,25.54882843728265],[108.77411543168176,25.521930854325433],[108.6946370787382,25.602003486471688],[108.56787478998962,25.415864975887985],[108.40478396990443,25.514877020957726],[108.29336958224042,25.538699856013665],[108.13182905486707,25.386435248288223],[108.1291935574369,25.26881968797818],[108.0677502789523,25.21313833346727],[107.96656782444552,25.209030055892356],[107.86187137336537,25.14595897122956],[107.77603681814469,25.152986965276284],[107.64162641772515,25.267527778584224],[107.49889611206595,25.214120185398343],[107.39786868719034,25.387287909009785],[107.24423465390623,25.558595282446475],[107.0219226416167,25.497952988739485],[106.97458702986762,25.4404371197773],[107.01458458920752,25.353414007950107],[106.99551598507475,25.255383815710616],[106.88596194938441,25.196963609183257],[106.666802199362,25.173502509333474],[106.5871171408433,25.104359443233818],[106.3065657900791,24.981472887164102],[106.15572228385639,24.960363063904367],[106.19871707583235,24.876802272706755],[106.17618615107011,24.782234401996135],[106.00115807458559,24.648469956723147],[105.91646040182627,24.728723456022635],[105.78773441011504,24.715726834226103],[105.67533816872151,24.789675808092056],[105.50862999927506,24.817451891091935],[105.44439619283003,24.923621121417767],[105.38073082896466,24.95710744884977],[105.28941857330858,24.93318126100644],[105.20590945805509,25.003900458239514],[105.1000761254129,24.954316920889312],[105.01248457190547,24.797478949393962],[104.87673058524842,24.755026759777195],[104.85187422141837,24.705830796953705],[104.72934939965512,24.63139089577328],[104.53985192302781,24.74177175556207],[104.54563968272521,24.81342112878204],[104.70702518136704,25.017310492085528],[104.68904178285203,25.10125885691076],[104.71973758322287,25.210942083810124],[104.66888797400088,25.296828314974732],[104.56584516841974,25.38119009005061],[104.55354617681462,25.48454295489347],[104.43267500234941,25.506815497237426],[104.42244306829298,25.579265855235008],[104.30622277196329,25.664764512772024],[104.42058271721862,25.856923326150564],[104.39293582632729,25.94787384750009],[104.49897586544387,26.030788683550924],[104.54517459473169,26.270412298988447],[104.67550255689741,26.379268704487117],[104.55943729019873,26.584708360502418],[104.35851932200904,26.647831122008654],[104.21806277857439,26.626617946860705],[104.15336388593465,26.65124176669417],[104.02040042543922,26.51419586794495],[103.82924930241342,26.547113756394765],[103.75783247319004,26.629434312343676],[103.77509240129325,26.731701972468073],[103.71731814991267,26.798958849071568],[103.77829634040387,26.88001333314878],[103.77829634040387,26.955874334932616],[103.7008850441095,27.052431748826137],[103.69540734277467,27.151702175415068],[103.9113114768432,27.390369778242643],[103.98112633741056,27.399516505782117],[104.17434451708573,27.271513984482795],[104.34441165617295,27.441193549043078],[104.44368208186262,27.347219957535003],[104.59421552882361,27.31378530514769],[104.78340294798767,27.332207953234473],[104.87089114780821,27.30975454373717],[105.08255781489117,27.412513129377402],[105.19738284724059,27.39863800753801],[105.29696333219198,27.721744899807277],[105.36078372568835,27.76001129838272],[105.52449466429726,27.774635728156312],[105.64691613237358,27.678129991106204],[105.87594608034726,27.745206000556436],[106.03919192916413,27.756807359272273],[106.10358076434073,27.788071601323338],[106.24760298119259,27.77523000735897],[106.34537479011442,27.83494212507904],[106.29896935435215,28.00043589949715],[106.21525353442308,28.056091417385005],[106.19933719255738,28.124252631553674],[106.10942020088152,28.17471466714815],[106.00896121588738,28.140246486885815],[105.90622846866887,28.150581772830577],[105.846800571789,28.26915334754895],[105.66722496995635,28.31829763442829],[105.62056115087643,28.482421983287963],[105.68319298686686,28.58344940816366],[105.89191409725777,28.60931346324574],[105.98441491131905,28.753542384773226],[106.18879520103764,28.584612128147143],[106.26868696513134,28.556629340471687],[106.38242679186294,28.572494005493894],[106.48872521429723,28.540971381024434],[106.56241580574482,28.76713328757114],[106.62649458165964,28.637399603708786],[106.56241580574482,28.51074066774757],[106.75000125535365,28.50216238008977],[106.76199018769694,28.590890815158957],[106.82896284435981,28.608693346520653],[106.83506066331893,28.730520535394362],[106.88937259317072,28.80139476225844],[106.97334679641756,28.80452118610384],[107.03070763574874,28.88761688930802],[107.16108727385864,28.881338202296206],[107.29699629104607,28.808371080361013],[107.43683271685637,28.877255764042275],[107.49967125932113,28.993062649221912],[107.42396528536972,29.077011013147768],[107.43047651637806,29.182870185110943],[107.49610558500478,29.246096300304032],[107.55723880422738,29.186823432155705],[107.78347822513996,29.13736908601453],[107.78983442561827,29.040191555396007],[107.87535892067763,28.984070950414065],[108.05457278910296,29.064505316866928],[108.28623823360755,29.077166042778657],[108.36731855700577,28.77702932394419],[108.33031823120137,28.689153551395208],[108.58244754381911,28.601096909894437],[108.58275760308095,28.374159857891186],[108.73003543498731,28.475445665185276],[108.78372724811396,28.426094671831606],[108.72848514227553,28.242229926170126],[108.94294233641966,28.199855251818406],[109.09497440014843,28.20520376194412],[109.15533247301516,28.435525621110543],[109.25837527859625,28.505908922458815]]]}},{"type":"Feature","properties":{"id":5,"name":"重庆"},"geometry":{"type":"Polygon","coordinates":[[[109.59396202962392,31.737597968171656],[109.72449669826409,31.636079616880778],[109.73260989792846,31.56112295176277],[109.92949710470765,31.51872243898933],[110.10824588424015,31.398032130778205],[110.17485680479768,31.18866506613989],[110.1076257666158,31.12233836552312],[110.12767622267955,30.906408393032876],[110.06623294509433,30.828480332801178],[109.99672814288942,30.826232408099145],[109.8706893245527,30.888580024148837],[109.74857791483885,30.835353298116274],[109.63979902640398,30.717944444280675],[109.39418094299617,30.583740750335323],[109.24824669822652,30.59743500412219],[109.17925866085852,30.566790879695304],[108.96464643798276,30.607486070126043],[108.8684249208734,30.5513654651441],[108.71019168539794,30.522840074210052],[108.66998742138236,30.57384471306301],[108.57314578664875,30.497854519170716],[108.43320600805077,30.48728668922928],[108.38059939964268,30.39969513572194],[108.53201134574698,30.315488390276982],[108.53821251839304,29.88546295794913],[108.40044315013125,29.831073512832347],[108.44684858589352,29.73578217170987],[108.51263268415107,29.72185537392633],[108.61303999230176,29.858022773532156],[108.69603234271847,29.698161729180413],[108.87204227113386,29.63896637629722],[108.87204227113386,29.501610419185482],[108.9205664412882,29.34898407625417],[109.01415246006798,29.307487901045818],[109.07730105999593,29.214134426262746],[109.20659549428666,29.104244492889023],[109.27480838439936,29.049260769468873],[109.24550784710942,28.931257636430814],[109.24674808235807,28.785530097236233],[109.28121626172111,28.729125271414176],[109.21321007718325,28.62879547852853],[109.28462690640663,28.573475857424853],[109.25837527859625,28.505908922458815],[109.15533247301516,28.435525621110543],[109.09497440014843,28.20520376194412],[108.94294233641966,28.199855251818406],[108.72848514227553,28.242229926170126],[108.78372724811396,28.426094671831606],[108.73003543498731,28.475445665185276],[108.58275760308095,28.374159857891186],[108.58244754381911,28.601096909894437],[108.33031823120137,28.689153551395208],[108.36731855700577,28.77702932394419],[108.28623823360755,29.077166042778657],[108.05457278910296,29.064505316866928],[107.87535892067763,28.984070950414065],[107.78983442561827,29.040191555396007],[107.78347822513996,29.13736908601453],[107.55723880422738,29.186823432155705],[107.49610558500478,29.246096300304032],[107.43047651637806,29.182870185110943],[107.42396528536972,29.077011013147768],[107.49967125932113,28.993062649221912],[107.43683271685637,28.877255764042275],[107.29699629104607,28.808371080361013],[107.16108727385864,28.881338202296206],[107.03070763574874,28.88761688930802],[106.97334679641756,28.80452118610384],[106.88937259317072,28.80139476225844],[106.83506066331893,28.730520535394362],[106.82896284435981,28.608693346520653],[106.76199018769694,28.590890815158957],[106.75000125535365,28.50216238008977],[106.56241580574482,28.51074066774757],[106.62649458165964,28.637399603708786],[106.56241580574482,28.76713328757114],[106.48872521429723,28.540971381024434],[106.38242679186294,28.572494005493894],[106.29803917836534,28.672436224751948],[106.26031538304858,28.869323432430434],[106.00844445194986,28.973399766785775],[105.87796146015324,28.920043850443392],[105.74530805891976,28.994767971564613],[105.70060794460096,29.223694565851503],[105.64459069240661,29.269660752941377],[105.42238203290447,29.33355866080359],[105.40517378074532,29.429961045965513],[105.31484337791954,29.46959686920013],[105.29107221880793,29.584783636755418],[105.41168501175383,29.703174343421267],[105.55146976072086,29.747616075321673],[105.55751590373592,29.80391754835614],[105.70996137861476,29.86750539785581],[105.73890018069875,30.032637437068047],[105.55720584537346,30.147591661525922],[105.70866946832126,30.274095566956845],[105.79171349468203,30.423362942046168],[106.12471642512287,30.342334296390675],[106.23902469263544,30.22024872509857],[106.38490726056165,30.263579412959558],[106.53234012299822,30.33765757893417],[106.61781294211352,30.268695379987776],[106.71729007427746,30.05927663850605],[106.77036176977981,30.03656484569106],[107.032929722029,30.057855536104142],[107.22873172408981,30.238154609247744],[107.37213382421663,30.49986989987596],[107.47760542165287,30.60950145083129],[107.45667646734512,30.760861720991613],[107.5075777534106,30.821994941113672],[107.73629764212251,30.883179837179767],[107.84988244012249,30.809618435142653],[107.92951582179768,30.872663683182395],[107.93168623303325,30.948783067384596],[108.00677208936037,31.038622544694675],[108.03312706905905,31.222228908837053],[108.19404747880816,31.330930283805543],[108.22308963367965,31.46789866818898],[108.4067993506095,31.566032213216033],[108.5161983575681,31.708271593359342],[108.50069542865106,31.790824693304927],[108.28696170491878,31.922160345823244],[108.26778974799845,31.972906603157213],[108.34473595629936,32.0735464544054],[108.41920169500219,32.10000478779068],[108.38897098172544,32.18428904940015],[108.51836876790429,32.19756989203688],[108.78930830313567,32.04533112183378],[109.05590701679535,31.940634670753468],[109.18887047729072,31.84030487696853],[109.25258751799959,31.744005846392668],[109.3359932795662,31.705248521402126],[109.59396202962392,31.737597968171656]]]}},{"type":"Feature","properties":{"id":6,"name":"北京"},"geometry":{"type":"Polygon","coordinates":[[[117.35679568867022,40.25702627244448],[117.31059695758358,40.11047191005065],[117.23907677557281,40.0926177027448],[116.98767093336699,40.03435252494904],[116.82938602104804,40.03667796491612],[116.74422326119463,39.95900828710273],[116.78143029167472,39.88965851542821],[116.92219689257263,39.77359324783018],[116.87563642807868,39.686466783215565],[116.79341922401795,39.60231171281541],[116.60438683538416,39.611174221313405],[116.42827355418126,39.52141225836911],[116.38662234934213,39.44214061100047],[116.24978315616778,39.50580597576527],[116.21040571535138,39.57190013328457],[115.94540897034784,39.575388292335845],[115.75591149282116,39.50895823803222],[115.61845218292183,39.603732815217285],[115.46342288565768,39.643213608821014],[115.43732628837745,39.74930532478098],[115.51091352703781,39.83849884694433],[115.4964441259956,39.92363576927548],[115.42709435432107,39.96257396141925],[115.57762780218127,40.09631256827052],[115.81983524000441,40.151890570893215],[115.9452022638734,40.29371653898704],[115.72816124914243,40.539593003914035],[115.87445722911787,40.610234686781354],[115.99470828685799,40.59597199221372],[116.13035892072776,40.657983710579884],[116.20730512902855,40.75038117095434],[116.29143436100696,40.739890855378746],[116.45886600086527,40.791567287800234],[116.43819542897586,40.8997260613088],[116.65265262312016,41.0310100369837],[116.67580366370811,40.94013703089922],[116.91041466670356,40.74921845097086],[117.0580025569725,40.67720734344428],[117.19918256991969,40.690023098087465],[117.42852257715526,40.66904246693639],[117.41177941298974,40.597367255294614],[117.24310753788268,40.570159613974965],[117.1841447289961,40.49727000640564],[117.2379398949102,40.4501927761757],[117.25054894397863,40.33782237410338],[117.35679568867022,40.25702627244448]]]}},{"type":"Feature","properties":{"id":7,"name":"福建"},"geometry":{"type":"MultiPolygon","coordinates":[[[[119.7802840500002,25.617417710000097],[119.81861412900014,25.54580312700017],[119.79460696700028,25.463039455000143],[119.69605553500008,25.509344794000214],[119.7802840500002,25.617417710000097]]],[[[120.41920496712629,27.2063322962116],[120.27613366000014,27.316717841000155],[120.22567793100029,27.26862213700008],[120.42172285200024,27.153143622000186],[120.3579207690002,27.098374742000175],[120.28272545700031,27.112290757000153],[120.23739668100029,26.92723216400009],[120.12574303500014,26.92731354400007],[120.02450605600018,26.837876695000148],[120.12818444100026,26.79694245000013],[120.0796818370003,26.646063544000157],[119.98414147200003,26.653509833000044],[120.0776473320002,26.78558991100016],[119.94629967500009,26.79694245000013],[119.85694420700008,26.653509833000044],[119.81576582100001,26.79759349200009],[119.73267662900014,26.763413804000095],[119.58456464900019,26.79462311400016],[119.55209394600013,26.749090887000193],[119.55420983200031,26.6151797550001],[119.67505944100014,26.618801174000055],[119.78492272200015,26.577826239000046],[119.81885826900009,26.453192450000103],[119.65430748800014,26.429022528000075],[119.68189537900025,26.317124742000175],[119.74708092500009,26.327622789000145],[119.82577558700018,26.426947333000157],[119.88013756600009,26.363104559000135],[119.78492272200015,26.296616929000038],[119.67359459700026,26.28050364800015],[119.45850670700008,25.982489325000216],[119.19516035200013,26.087591864000103],[119.24683678500014,25.967230536000045],[119.34669030000032,25.94037506700016],[119.44092858200031,25.963812567000048],[119.5664168630002,26.05023834800005],[119.69898522200003,25.972560940000108],[119.61646569100003,25.892645575000188],[119.59302819100014,25.693182684000078],[119.53541100400025,25.70587799700013],[119.45972741000026,25.63287995000013],[119.55844160200013,25.563788153000218],[119.64600670700008,25.392564195000233],[119.48324629000024,25.371161200000188],[119.50489342500032,25.4749209660001],[119.36597741000026,25.520697333000186],[119.30518639400032,25.60455963700008],[119.23780358200031,25.48175690300019],[119.10962975400003,25.406805731000134],[119.22315514400032,25.316595770000134],[119.28866621200018,25.325425523000177],[119.3442488940002,25.242377020000106],[119.28882897200015,25.18911367400011],[119.17562910200013,25.176499742000146],[119.14197462600009,25.22097841700017],[118.9873153000002,25.22223541900007],[118.8779403000002,25.04071686400016],[118.9799910820002,25.011786200000074],[118.99732506600009,24.95343659100007],[118.71607506600026,24.843573309000107],[118.74683678500026,24.720689195000205],[118.57113691500012,24.568996486000145],[118.42188561300009,24.62449778900009],[118.3516544930003,24.582342841000155],[118.13095136800018,24.620062567000105],[118.04476972700013,24.575995184000192],[117.9961043630002,24.44696686400016],[118.12647545700031,24.26203034100007],[117.98926842500009,24.193101304000038],[117.94361412900014,24.212591864000103],[117.89364668100029,24.02802155200004],[117.69507897200026,23.95355866100016],[117.58236738400024,23.889308986000117],[117.53736412900025,23.919378973000164],[117.46347744400009,23.788287134000115],[117.29232832100007,23.76215241100016],[117.26364898600008,23.655424769000092],[117.17462224764046,23.61634769773326],[117.03650516188372,23.738267117533525],[116.92483239090234,24.077600409131605],[116.96767215414661,24.18511322749356],[116.88240604060638,24.393989365716806],[116.74856408096753,24.551499132578954],[116.74530846591301,24.670923367119713],[116.60376671775975,24.65583384935269],[116.529559360576,24.615371202019446],[116.37210127235585,24.841300564569394],[116.11470096217988,24.84605479639174],[116.03568769722938,24.89357127529425],[115.88753136617959,24.916773992725638],[115.8884615421664,24.99994721119495],[115.84283125186084,25.19474152290303],[115.90799523339342,25.23827891723826],[115.97874026904822,25.35083018646401],[116.02757449756507,25.63636831304717],[116.12369266188682,25.764241644936106],[116.13516483029264,25.866328437007724],[116.32321536699573,25.955108547121768],[116.39726769364916,26.061458645500153],[116.41928185357472,26.152874253943736],[116.39897301599194,26.287543035882436],[116.50165408726639,26.40704478568844],[116.59446495969019,26.39508169176665],[116.6194763531513,26.49207835523191],[116.54232344017453,26.562797553364447],[116.50496137916434,26.68930145879537],[116.54526899596749,26.867869371174635],[116.66970584474893,26.986906032987093],[116.92343712782116,27.02101247804353],[117.04012251214431,27.109534207537763],[117.15381066293185,27.27639740751445],[117.10110070173607,27.346651515854802],[117.12466515527262,27.429928087111676],[117.11226281088017,27.567619941007592],[117.22512413936761,27.723450222150092],[117.2871358577338,27.772620348350415],[117.28424197788496,27.857033800269818],[117.54443281512238,27.966665351224947],[117.6052559750832,27.86615469028675],[117.74555748888702,27.81328970035935],[117.82343387317462,27.9372614611475],[118.06130049032527,27.979016017875068],[118.13070193884346,28.040536810725314],[118.36779340963824,28.099706326086164],[118.34887983603556,28.219802354195366],[118.44644494028171,28.288687038775805],[118.49889651905926,28.262435410965566],[118.73521284439732,28.325971585420376],[118.7970178571884,28.21292938888027],[118.76565026324903,28.178176987777903],[118.74813195182816,27.973202419755893],[118.81980716436931,27.909950466141083],[118.88946699440646,27.722158310957298],[118.92269494031927,27.549998276799045],[119.00527387868658,27.48005422592189],[119.18583133334937,27.4199286970518],[119.26561974465551,27.42411448809321],[119.39036665269896,27.51261037916572],[119.46731286010049,27.5252969434992],[119.51170291605695,27.636711331162985],[119.61583092725562,27.665572617981923],[119.68657596201103,27.511292630450612],[119.69339725138207,27.41104035103143],[119.77008507726453,27.31587820111818],[120.06443403460298,27.343628444796963],[120.14773644428158,27.400214137772338],[120.34400353433568,27.379646917771083],[120.40580854712687,27.296861273828824],[120.41920496712629,27.2063322962116]]]]}},{"type":"Feature","properties":{"id":8,"name":"安徽"},"geometry":{"type":"Polygon","coordinates":[[[119.62978356256133,31.13288035704295],[119.57495486877224,30.847058010518765],[119.5005408060133,30.769388332705375],[119.44312828983868,30.639215400170542],[119.35062747577729,30.675363064353974],[119.24153852808075,30.550848700307313],[119.3208101754492,30.518163356753632],[119.36287479143857,30.404475205966094],[119.21068769717942,30.313731391090926],[119.05751875188889,30.31187103911722],[118.93468387266262,30.352126979976134],[118.88109541232336,30.324350897875718],[118.9094657736265,30.222212428960404],[118.85272505102029,30.15927053550689],[118.89396284381036,29.982588813522966],[118.82011722183222,29.880036933457802],[118.74131066335633,29.82836050103643],[118.7237406759914,29.730201116688193],[118.55692915285806,29.625220444767848],[118.37321943592826,29.4528278675121],[118.17473025869447,29.407869370774904],[118.11344201074019,29.518663641713715],[117.98590457563569,29.572019558056184],[117.89857140544603,29.54897186935625],[117.70767866393919,29.555638129096366],[117.64918094304613,29.60586762069417],[117.52737959169485,29.622352403340727],[117.40216759655743,29.773066718354357],[117.40630171075543,29.8311768665192],[117.27426842714618,29.829471544176386],[117.22553755141678,29.906676133996342],[117.1251819192102,29.910551865775943],[117.06709761036643,29.84058197737633],[117.0790865418104,29.710202338367168],[116.95506310417892,29.6539008653327],[116.88834882993456,29.560521552127938],[116.74856408096753,29.544863593579947],[116.64846683207861,29.62741669442491],[116.67497684140807,29.70800609050866],[116.79791507432122,29.755935981460368],[116.88679853722283,29.920422065525912],[116.79140384331271,30.02201793118263],[116.65048221188454,30.0506725124265],[116.49250735882765,29.88471365001493],[116.38951622919058,29.876057847991262],[116.23619225516842,29.78133494675035],[116.14725711542354,29.788776352846384],[116.07806237158115,29.9687136907842],[116.04049360589516,30.221437283503775],[115.91202599480386,30.315591742165196],[115.87678266818557,30.38979909934892],[115.946649204697,30.48829437958196],[115.76784874922032,30.68815298147493],[115.77529015531644,30.75481557887585],[115.86220991435607,30.784839586577647],[115.85864424003955,30.860958970779876],[116.0359977555919,30.988883979512053],[115.94644249912204,31.03404918092494],[115.87693769691714,31.129366360469135],[115.76836551315785,31.143551541570446],[115.6687333522624,31.21721629549566],[115.54998091039067,31.18269643838991],[115.37402265791923,31.417539985382007],[115.38973229420992,31.511746120886755],[115.53153242388225,31.736383572244108],[115.6629455907663,31.78395172798983],[115.90132897275384,31.794493720408838],[115.92814904224451,32.02458303557859],[115.8884615421664,32.39386282051271],[115.79006961472095,32.470705675126794],[115.69384809761158,32.49181549748724],[115.64661583865,32.40244110817062],[115.56476036979518,32.40244110817062],[115.36673628055485,32.55951162456185],[115.1993046406966,32.59147349680447],[115.18473188686698,32.859054063294394],[114.92521284409753,32.95824697551757],[114.88655887279367,33.08340729381155],[114.96918948800442,33.12374074993568],[115.1428222996094,33.0842599554326],[115.25098107311806,33.12064016451197],[115.3453422382538,33.25060639147176],[115.3156799657578,33.373983873057256],[115.34642744387145,33.45304881395157],[115.44259728413732,33.548081773555],[115.63473025909423,33.5918258734653],[115.57354536302813,33.750188300149915],[115.62992435132782,33.83876170468892],[115.56134972510972,33.898137926524015],[115.65364383269673,34.04841299106664],[115.73296715690867,34.06556956638235],[115.84112593041732,34.006916815858375],[115.96137698815744,34.000147203330755],[115.97067874622718,33.90480418626424],[116.07961266519226,33.778351955878094],[116.18203535404831,33.71832977979548],[116.42067711755487,33.79083181373721],[116.44532677581003,33.845014553279015],[116.64118045471412,33.95322500273164],[116.54294355689962,34.12091502500846],[116.57508629809416,34.19212514955598],[116.55209028533835,34.28684804899822],[116.40098839669713,34.2750141462858],[116.15671390222474,34.447303372552625],[116.15128787593477,34.566727607093384],[116.26688805464005,34.57670115783219],[116.37721723758551,34.63953970029695],[116.428118523651,34.63969472902858],[116.62485070169856,34.48500132944778],[116.76954471211889,34.45182506037821],[116.80225589409417,34.40007111269176],[116.94948205005653,34.38929657627608],[116.96953250522097,34.275401719913475],[117.03392134039751,34.15553823490163],[117.15944339389756,34.09117523904604],[117.32129397963342,34.07885040901925],[117.39172895692593,34.031256414851725],[117.50345340385161,34.04975657820364],[117.65088626538886,33.98247386317826],[117.74555748888702,33.882273261501894],[117.7522237486271,33.7243500843889],[118.1236739438973,33.76600128832888],[118.17674564029915,33.69262075524375],[117.93185102730308,33.235129299177856],[118.08073082876479,33.14955312817443],[118.21803510993243,33.17991303176103],[118.23901574108368,32.923701279990155],[118.29968387321219,32.77740530001455],[118.39910932763337,32.73089651146492],[118.72017500167516,32.73213674581419],[118.74823530461572,32.83853852013658],[118.85737593005524,32.97230296540948],[118.99297488798061,32.962045192931384],[119.19037885959676,32.71123362902887],[119.19937055930387,32.59372142240571],[119.08051476374533,32.446081855293414],[118.89132734637997,32.595685126267625],[118.75185265487613,32.61250580479907],[118.55181318582993,32.574446112697956],[118.66787845342787,32.45321320212753],[118.68405317591339,32.33924083139925],[118.650360142007,32.23787750884003],[118.51439944887557,32.1997661398955],[118.49905154779071,32.13767690716358],[118.38314131072286,32.053961087234484],[118.35198042235857,31.946680812869317],[118.48106815017502,31.858701687532886],[118.47688235913358,31.790230414102467],[118.68436323517517,31.70085602478585],[118.68074588401538,31.64675080050918],[118.86047651637807,31.627372138013868],[118.88094038269253,31.52244314203739],[118.82724856956588,31.397541205262513],[118.75102583167688,31.35795705797193],[118.81608646042179,31.22633718551279],[119.0747270040481,31.23884288179363],[119.16288699833638,31.287444566313752],[119.31683108908351,31.266722317580985],[119.36277143775169,31.192359930766145],[119.62978356256133,31.13288035704295]]]}},{"type":"Feature","properties":{"id":9,"name":"广东"},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.38982181100027,21.09589264500019],[110.52637780000009,21.082098700000103],[110.52076256600026,20.97235748900019],[110.24586022200026,21.027573960000097],[110.38982181100027,21.09589264500019]]],[[[112.86255944100014,21.769435940000108],[112.7343856130002,21.628729559000078],[112.71168053500014,21.7025414080002],[112.77751712300028,21.772650458000157],[112.86255944100014,21.769435940000108]]],[[[113.64183151700024,22.601623679000056],[113.49136813500002,22.705773852000107],[113.52550121900015,22.744872770000143],[113.63568652400022,22.65647495100015],[113.64183151700024,22.601623679000056]]],[[[113.9275476417103,25.44811106987001],[114.01209028483879,25.435114448073392],[114.02604292194326,25.267656968893988],[114.11497806168825,25.30842967369057],[114.27884402902868,25.291815700734077],[114.42922244725821,25.385970160294676],[114.56931725458765,25.406873277080166],[114.58047936373163,25.360054430167793],[114.7069315941178,25.28956777603213],[114.68305708221862,25.163451443329535],[114.72930748924932,25.118880520219818],[114.54823326974963,25.054465847520817],[114.4135128109674,24.97969005045553],[114.38359215695255,24.88468292927388],[114.30163333531016,24.75864411093704],[114.19233768113918,24.695262966112978],[114.28938602144785,24.595630805217553],[114.42488162568645,24.499590156160878],[114.4981071309395,24.555839952351903],[114.74046959839342,24.62524140087004],[114.8626843608946,24.587827663915647],[114.94464318163762,24.669967352711183],[115.0469625177061,24.706657620153123],[115.13910159656155,24.684152532913117],[115.23966393434307,24.746112576234395],[115.42058312421193,24.784559841063924],[115.59917687411337,24.609066677485202],[115.70578535401091,24.545711371082916],[115.7992163431598,24.572738145249247],[115.74909020434939,24.747740383312077],[115.78727908676052,24.86091177016209],[115.88753136617959,24.916773992725638],[116.03568769722938,24.89357127529425],[116.11470096217988,24.84605479639174],[116.37210127235585,24.841300564569394],[116.529559360576,24.615371202019446],[116.60376671775975,24.65583384935269],[116.74530846591301,24.670923367119713],[116.74856408096753,24.551499132578954],[116.88240604060638,24.393989365716806],[116.96767215414661,24.18511322749356],[116.92483239090234,24.077600409131605],[117.03650516188372,23.738267117533525],[117.17462224764046,23.61634769773326],[117.0234481130002,23.658677476000094],[116.9175724620003,23.63792552300012],[116.8549910820002,23.524888414000173],[116.86662820400034,23.45023293100016],[116.74863483000013,23.326288333000093],[116.73129316500012,23.257717190000193],[116.53364811400013,23.109134538000205],[116.56325009500017,23.01877372100006],[116.494687913,22.939352413000165],[116.37960727900008,22.928984413000194],[116.2984870700003,22.96324673700019],[116.17098930300017,22.864465269000164],[116.07617780700025,22.86787148000019],[115.95801360200028,22.804743209000037],[115.80990644600024,22.808335679000095],[115.65333092500009,22.893744208000044],[115.58399498800031,22.88031647300005],[115.5239363940002,22.741766669000185],[115.37350802300011,22.6941772670001],[115.33057039700032,22.788540419000213],[115.24561608200031,22.835353908000144],[115.06547548000003,22.79598479800012],[114.86581619100025,22.601744611000214],[114.74377585100012,22.60940429200008],[114.75254524100023,22.7496618670001],[114.71673233300021,22.79080340000013],[114.56332441500012,22.732733466000184],[114.52378006100025,22.68721393200019],[114.5371199880002,22.567206122000186],[114.61768639400032,22.51414622600018],[114.5158162140001,22.452642803000174],[114.47958418100029,22.54621002800016],[114.39559980600006,22.613511460000183],[114.22982832100013,22.555812893000137],[114.08236738400024,22.52936432500016],[113.95193877700024,22.52384115100014],[113.89034489800031,22.452712399000063],[113.77293351100008,22.672447513000208],[113.74439537900014,22.761175848000107],[113.66260826900009,22.79808177300015],[113.58383222700013,22.978461005000128],[113.50384399300003,22.989832793000176],[113.36793053500026,22.880682684000135],[113.49423261800013,22.77484772300005],[113.43954511800018,22.739447333000044],[113.59916999500012,22.575179846000196],[113.5463548370002,22.43758548800008],[113.58765470100002,22.237882255000045],[113.48374549000027,22.1551421690001],[113.30274498800014,22.183294989000046],[113.23056074300007,22.043158270000163],[113.15746661600019,22.024699645000112],[113.11060631600014,22.099188544000185],[113.0266139480002,22.143212451000068],[113.0286183420003,21.96114836100014],[112.95708123400004,21.875653459000148],[112.87940514400032,21.87518952000005],[112.82601972700007,21.96613190300019],[112.64511152400007,21.849351304000038],[112.6080021490003,21.775091864000103],[112.44320722700024,21.82843659100007],[112.36329186300009,21.73334381700016],[112.24488366000026,21.70652903900009],[112.17269941500007,21.81443919500012],[111.99195397200003,21.763820705000114],[111.69044030000009,21.603827216000155],[111.63046308700018,21.529852606000077],[111.4379988940002,21.53408437700017],[111.30128014400003,21.499335028000132],[111.20630944100014,21.532049872000158],[110.86939537900008,21.384711005000156],[110.79053795700003,21.40375397300005],[110.67628014400009,21.30963776200022],[110.63648522200026,21.23016998900013],[110.48145592500009,21.21718984600011],[110.4195255870003,21.377427476000037],[110.36280358200003,21.28766510600019],[110.3940535820002,21.16254303600016],[110.26929772200026,21.089178778000132],[110.1567488940002,20.98602936400013],[110.1567488940002,20.84886302300015],[110.3862410820002,20.825995184000163],[110.33749433700018,20.725816148000035],[110.40853925900024,20.585923570000205],[110.47885175900007,20.567694403000132],[110.53419030000009,20.478257554000038],[110.3999943370003,20.30076732000012],[110.2802840500002,20.252997137000165],[110.12753339900019,20.247992255000128],[110.02711022200003,20.30076732000012],[110.01547285200013,20.418402411000187],[109.82211347700024,20.51654694200016],[109.80201256600003,20.61627838700008],[109.74586022200003,20.629787502000056],[109.77320397200026,20.821519273000092],[109.68946373800009,20.835394598000164],[109.66122480600018,20.927557684000135],[109.70980879000024,21.057196356000134],[109.67017662900014,21.123236395000163],[109.77320397200026,21.215399481000134],[109.80738366000026,21.355943101000122],[109.9047957690002,21.390692450000074],[109.91797936300009,21.489406643000137],[109.80274498800003,21.47333405200004],[109.74805748798155,21.57493724193023],[109.91724978994603,21.687152004561483],[109.96722090092396,21.866727607293342],[110.14235233019582,21.8974492460859],[110.21614627533052,21.87453074769587],[110.3558793483532,21.888974311215577],[110.35546593630391,22.100770169507825],[110.33355512916603,22.1904546171869],[110.46672529523619,22.150999661105516],[110.64237348844574,22.183452459763316],[110.75456302336488,22.580172430912967],[111.02379723535421,22.638670151806025],[111.06601688007493,22.740576076724665],[111.18146203004869,22.748534246758197],[111.35121910987402,22.908214423057245],[111.41095706601595,23.052598375114997],[111.36997765474496,23.139104723004607],[111.36284630701164,23.27302419700922],[111.39121666921386,23.431257433383934],[111.46929975817739,23.55791636844566],[111.47100507962091,23.613235989549253],[111.60117801305483,23.658013617334632],[111.65750532361176,23.841697495842766],[111.79331098801185,23.849190578782242],[111.80788374184118,23.909238593286545],[111.8991443215532,23.990861518144612],[111.86932702032573,24.231828722517605],[111.97593550022327,24.27676137903447],[112.04730065260321,24.381457831014075],[111.99092166520262,24.46587128293345],[112.00554609587584,24.553075262813195],[111.93325076660972,24.60136688897086],[111.93247562115312,24.698286038070194],[111.99655439706783,24.735673935703687],[112.06636925673592,24.796574611828873],[112.1447624040618,24.793551540771034],[112.16476118418154,24.91199392338092],[112.12099124584938,24.949278469126057],[112.21395714700475,25.200374253868773],[112.45838667200735,25.164252428107147],[112.66333540160758,25.113144436466598],[112.71408165894161,24.999507962522586],[112.8078227073521,24.942844754281964],[112.98889692595242,24.963928738220716],[112.95876956636232,25.056145331441996],[112.9690531763631,25.18058218022344],[112.88910973542608,25.241457017927075],[112.91737674394165,25.3248627794938],[113.08976932209657,25.41415965444446],[113.21746178593276,25.505575262888158],[113.42163537007639,25.383799749958598],[113.52343794220735,25.38558258756646],[113.58245242703799,25.325947984212064],[113.7138655948213,25.360907090889555],[113.82807051044563,25.356747138269867],[113.9275476417103,25.44811106987001]]]]}},{"type":"Feature","properties":{"id":10,"name":"西藏"},"geometry":{"type":"Polygon","coordinates":[[[89.67781334810746,36.081958115774455],[89.51467085207815,36.053251857687144],[89.43514082229115,35.98780365711312],[89.48464684437636,35.88018748596369],[89.58143680226658,35.839776516373064],[89.78876264777801,35.82685740804294],[89.71507205633037,35.642346707234736],[89.69026736934364,35.50858226196186],[89.73010989815322,35.44365082532536],[89.4843367860139,35.34220998840027],[89.45482954314889,35.21283803974367],[89.57166995620355,35.07331167229586],[89.58360721170345,34.9409166534808],[89.78767744305958,34.926395574696045],[89.82524620964489,34.84609040035167],[89.72390872640653,34.73963694918584],[89.7910880877451,34.55411855712569],[89.79573896677988,34.40841685635283],[89.84028405056841,34.38332794942528],[89.78659223834114,34.1985330268777],[89.63673058494862,34.093371486904545],[89.74189212402234,33.909506741243064],[89.87723270132818,33.82274201093509],[89.97510786303741,33.630557359134826],[90.14057579993317,33.57820913314501],[90.2032076350244,33.500074368237534],[90.2056881037231,33.40150157273936],[90.32320031124539,33.28871776041629],[90.43626834530784,33.28218069098608],[90.66033735588434,33.155857651809214],[90.80404951437367,33.14053559004543],[90.94993208229971,33.23939260548434],[91.12790571457708,33.25432709451982],[91.18919396432995,33.336957708831164],[91.36158654158561,33.336957708831164],[91.37646935377774,33.27125112583877],[91.54266076018592,33.08033254680956],[91.72032433500016,32.98250906014505],[91.81313520742384,32.9682722030997],[91.97684614513349,32.84861542456224],[92.08609012156182,32.885641587888955],[92.19610924704409,32.86864004220416],[92.22137902202428,32.74497833887918],[92.46580854702677,32.769421292458674],[92.64998335195008,32.74043081353125],[92.72729129365831,32.760558783061384],[92.8500228209964,32.728881129860184],[93.00593061740403,32.73461721451278],[93.03125206922755,32.663510444551406],[93.21852745957455,32.659789741503346],[93.34534142516662,32.57770172775258],[93.51039594911373,32.51610342143573],[93.59716067942185,32.56457591384728],[93.7341549013276,32.57245657041443],[93.87740197092415,32.495381170904295],[94.11077273957022,32.47822459648796],[94.17826216017056,32.52225291633897],[94.31685835163165,32.54075307879154],[94.582216830942,32.67219208409742],[94.7218465511774,32.592868760784654],[94.75522952672128,32.535456243710655],[94.93893924365113,32.428150132722436],[94.9513415871445,32.33722544979463],[95.06182579972085,32.261209418379906],[95.259074741706,32.24407868148589],[95.38211632740655,32.1700521923548],[95.42526614811419,32.094759630452614],[95.35431440598506,31.954406439805382],[95.40676598476233,31.810668442894325],[95.49709638938685,31.741654568003867],[95.5926977879725,31.761575832858398],[95.84885786290005,31.714266059530956],[96.0942175638894,31.70054596642322],[96.21462365126052,31.6067532411692],[96.21291832891774,31.735117499473034],[96.14775434828454,31.77992096657931],[96.18263593969681,31.871155706970285],[96.27818566323776,31.909060370339773],[96.48323774562544,31.753462633193948],[96.79541507364672,31.715454617036983],[96.75288536966406,31.83867706989085],[96.75412560401344,31.97383677824473],[97.01808882024284,32.022903550758315],[97.12407718341524,32.009338487281354],[97.25487023267505,32.075794379107236],[97.25440514468164,32.20395193093691],[97.35977339112912,32.260485947968135],[97.39315636577362,32.38497447449237],[97.32628706279775,32.423576768952785],[97.36085859584756,32.50018707957008],[97.56229332887398,32.48434825296948],[97.63086795509201,32.44409231211051],[97.7157206556837,32.544189560999484],[98.01415205307472,32.46450450338011],[98.2057682640941,32.355648097881414],[98.22018598829271,32.252191881150424],[98.30958621603105,32.12871104587808],[98.45298831615781,31.984094549823624],[98.42084557496327,31.8781837019163],[98.44549523321848,31.803614610425967],[98.55871829601256,31.677110704095668],[98.59215294839987,31.59882090955739],[98.88495161302654,31.354081326192244],[98.76780114071005,31.230367946923195],[98.68269005680071,31.315918281303652],[98.61137658126415,31.256180325161864],[98.62026492728461,31.187941595728063],[98.80304446822765,30.990976874583083],[98.77508751807454,30.90222260199147],[98.95430138470113,30.747865099194996],[98.90536380429614,30.663813381582287],[98.96070926292208,30.459975694222862],[98.98675418515751,30.144361883993753],[99.03408979690664,30.05532339146137],[99.05631066330642,29.91533193602001],[99.005461053185,29.8200922708416],[98.98675418515751,29.650903631797206],[99.04199629099605,29.562459418467398],[99.0625118350531,29.30828888582343],[99.10881391802786,29.223772081116635],[98.99016482984302,29.201990465187862],[99.00628787638436,29.07316111889051],[98.87347944462061,28.811807563468335],[98.7850093928692,29.000245672899467],[98.6648100119724,28.97417491314178],[98.63871341289365,28.878651028022517],[98.67814253055332,28.757056383145596],[98.58920739080844,28.670291652837506],[98.64041873613576,28.42413096796986],[98.5758231953842,28.317548326494006],[98.48988528827545,28.248069362710936],[98.40999352418174,28.250601508253055],[98.29976769402384,28.354807033817593],[98.23015953993087,28.20287832287633],[98.11500227621707,28.14388835708101],[97.9910518800001,28.21401540100004],[97.9929122320001,28.268921611000053],[97.8975175380001,28.355324605000135],[97.74000777200007,28.382609762000044],[97.69959680200009,28.488029683000093],[97.61360721800003,28.481983541000147],[97.52772098800011,28.529525859000074],[97.44534875500011,28.382971497000142],[97.43666711400004,28.286414083000096],[97.32349572800013,28.217477723000087],[97.11554976400004,28.36656423000008],[96.96579146400012,28.33046824200008],[96.88491343033621,28.4280400801797],[96.69867768434011,28.589108833473546],[96.6131099091528,28.609242427635365],[96.52754213396537,28.533741449528804],[96.4268741631567,28.518641253907532],[96.43517785700004,28.611226298000076],[96.59800971353144,28.709910398444038],[96.57666792800012,28.80852691700008],[96.45760542900013,28.994587911000025],[96.36656829155606,29.03653656346893],[96.35137318505014,29.09748208605737],[96.19533783029675,29.027014506491355],[96.17462528500005,29.108844503000086],[96.31642541500008,29.171863912000106],[96.36686161300008,29.244210917000146],[96.20542443800014,29.25694915800011],[96.14196578000008,29.36846689900011],[95.95373470035588,29.359218810159945],[95.86313352662813,29.323985020376853],[95.7447807210001,29.340432435000082],[95.71716496895556,29.218283651027747],[95.59233524600006,29.24968861900004],[95.51533736200014,29.209432679000088],[95.51130660000013,29.13178883900011],[95.30681276189614,29.13619233330698],[95.19153283800006,29.096829733000106],[94.98906457600003,29.153983867000136],[94.77657108500011,29.166696269000084],[94.70422408000013,29.284699402000058],[94.6304301350001,29.319451803000106],[94.52862756400003,29.231240133000114],[94.39643925000013,29.207081400000078],[94.27078578096348,29.097929973215656],[94.34731050114596,29.0243485115017],[94.2501829716835,28.93310749897637],[94.02684940600011,28.86418243500009],[93.62553023300006,28.672359518000064],[93.44621301300003,28.671894430000066],[93.15537805200012,28.49485097300004],[93.09315962700009,28.366641744000106],[92.85028039600013,28.191949565000044],[92.77917362500011,28.195902812000014],[92.65484012900009,28.10583079000014],[92.70134891800006,28.037824606000072],[92.62848514800004,27.915764873000114],[92.43903934800016,27.82328989700008],[92.30385380100006,27.786160380000098],[92.23491744000012,27.821171164000106],[92.06965621000012,27.794041037000028],[91.97508833800003,27.726577454000108],[91.77375695800004,27.763810323000115],[91.63288700400005,27.75944366500005],[91.62172489400012,27.950723979000088],[91.41884322100009,27.994726461000056],[91.26970503800004,28.07286122700009],[91.17586063600015,28.057487488000106],[91.09255822800003,27.971678772000104],[90.97514937400013,27.98209157300002],[90.90952030400018,28.03265696300008],[90.6839010010001,28.08707224500006],[90.47523156719149,28.07234446286344],[90.58772553344886,28.23329780452852],[90.2618041781983,28.33535398647564],[90.07086035391018,28.345230391180195],[89.86291752100004,28.295793356000075],[89.75584395400011,28.1843789670001],[89.56148889100012,28.13464040100007],[89.44454512600004,28.031184184000068],[89.33602461800007,27.869075216000113],[89.22492028800008,27.807812806000072],[89.1273589238333,27.62728988843898],[89.05095371551772,27.608281690950264],[88.97295541963888,27.51765939342627],[88.95105955131027,27.433144260415162],[88.99701872918376,27.330869457273195],[88.89233077000011,27.315543111000125],[88.77357832900003,27.40850901300007],[88.7410221770001,27.54570994100007],[88.80566939300007,27.655108948000077],[88.85388350400007,27.84367624900011],[88.81771000200013,27.994726461000056],[88.61048750800012,28.10583079000014],[88.50207035300008,28.028884583000035],[88.3787703860001,27.98263417600006],[88.12669274900009,27.95043975900012],[88.09573856600008,27.865328675000086],[87.82588423700014,27.90656646700009],[87.75637943500016,27.820370179000093],[87.53158695500008,27.83680328400004],[87.38678959100014,27.80440216100004],[87.15579593900009,27.825796204000056],[87.03053226700013,27.93808909100008],[86.89307295800012,27.95418630000006],[86.76997969600006,28.012089743000075],[86.66197595200009,28.106838481000125],[86.54415368700012,28.093015036000054],[86.49692142700007,27.93788238500011],[86.4388371170001,27.910855611000073],[86.20303755700013,28.002581279000083],[86.1559603280001,28.156525371000015],[86.06873050900003,28.076762797000043],[86.11286218300012,27.926797791000098],[85.98026045800009,27.885172424000103],[85.84827885000004,28.158928325000062],[85.7566048590001,28.203240866000016],[85.67505944900006,28.30638702400003],[85.61180749500005,28.251144918000136],[85.43156010000018,28.297059428000097],[85.25958093300005,28.266932068000102],[85.08021203600003,28.318789368000097],[85.07757653800013,28.435681457000072],[85.16801029400011,28.583191833000058],[85.05494226100006,28.638692322000026],[84.91872318600014,28.53567535400012],[84.79914392100005,28.546630758000106],[84.67775598100008,28.604405009000118],[84.6072176510001,28.698197734000104],[84.45084476800014,28.733880310000103],[84.3540031330001,28.86128855400011],[84.23514733900004,28.90002004000013],[84.2314266360001,29.02598134300007],[84.13225956200006,29.14380360900006],[84.09913496900009,29.24700144500011],[83.94555261300013,29.291830750000088],[83.71972660300008,29.233591411000077],[83.65600956200007,29.160779318000095],[83.51705163600013,29.191707662000084],[83.32796757000006,29.48502309200009],[83.16208622200014,29.625169576000076],[83.03289514200009,29.62046702100008],[82.89972497600007,29.68842152900004],[82.83657637600004,29.659792786000082],[82.61850183100006,29.83983347600008],[82.54181400500005,29.923239238000065],[82.39443282100007,30.003131002000146],[82.14452559400007,30.06943186500007],[82.15568770300013,30.18136301700008],[82.09589807100008,30.213454082000112],[82.08876672400004,30.33008778900009],[81.77901818800007,30.358044739000093],[81.59158776800007,30.414268697000068],[81.48306726100009,30.331896464000096],[81.38751753800011,30.373909403000084],[81.35728682500007,30.17355987600007],[81.27770511900007,30.131856995000135],[81.19450606300006,30.00447458900004],[81.09776778200006,30.016928609000104],[80.97601810700007,30.255208638000056],[80.78166304500007,30.32099273700004],[80.72306197200015,30.392047832000117],[80.57526737500012,30.466255188000076],[80.52514123600008,30.458607076000106],[80.2528064380001,30.56500885100013],[80.16692020700015,30.661902161000057],[80.23141239400007,30.724947408000077],[80.16929732200009,30.785253804000064],[80.06253381400012,30.78478871700014],[79.83350386600006,30.961522115000065],[79.73903934800012,30.97924713100008],[79.5296464440001,30.9535639450001],[79.29565555900012,31.12414784700013],[79.19840051300008,31.32491078700008],[79.06331831900019,31.433638001000133],[78.97619185400004,31.320001526000055],[78.86198693800009,31.29147613500001],[78.73848026600012,31.334987691000038],[78.76256148300007,31.445110169000145],[78.69951623500015,31.510015768000073],[78.81888879400009,31.607374166000056],[78.7313489180001,31.668042298000017],[78.67088749200008,31.77051666300008],[78.74457808500011,31.96419993100008],[78.64928674300012,32.03644358300002],[78.51306766800008,32.207570089000114],[78.45798059100014,32.22966176400013],[78.44878218600013,32.42678151500007],[78.38098270679342,32.528041484263525],[78.44754195200011,32.56625620500009],[78.6301664630002,32.57801259400006],[78.7132621670001,32.63751800600005],[78.77144982900012,32.46166310600006],[78.94342899600014,32.34637298600012],[79.0917403570001,32.39055633500004],[79.11292769400006,32.472385967000065],[79.27601851500009,32.490188497000105],[79.47641971900003,32.645424500000075],[79.49998417100005,32.74683949800004],[79.41275435400013,32.8865467330001],[79.33420617700011,32.95682668100008],[79.38185184700006,33.127333069000116],[78.97329797400005,33.30957000800004],[78.82426314300005,33.461059469000105],[78.7813717040001,33.552785136000125],[78.79408410700006,33.743910421000066],[78.7211169840001,33.9943860890001],[78.73010868400007,34.07926462900008],[78.90322473100008,34.15812286400009],[78.97619185400004,34.21716318800014],[78.95693951587305,34.33996090528569],[79.20449913922386,34.43944855440728],[79.33839277480666,34.430818589905954],[79.51264570493532,34.4716946483893],[79.71733605301642,34.412783515446876],[79.79397220205544,34.43102529638031],[79.95628787578482,34.68475657855328],[79.88383751778724,34.91960012554537],[80.04692833877186,35.01770783125144],[80.01416547995296,35.08592072226355],[80.1761710962191,35.253249010233674],[80.31921146024064,35.50925405553028],[80.48602298427335,35.40424754518804],[80.85845503057521,35.34714508737588],[80.97886111794622,35.29340159830508],[81.06092329327538,35.38856374821836],[81.21021650588705,35.316914374099014],[81.3573393090619,35.33239146639309],[81.54507978740224,35.25177623098827],[81.71142622344144,35.24565257450672],[82.00220950736292,35.319446520540424],[82.0860286800795,35.44799164509831],[82.28916873634807,35.54496247014188],[82.3189343607321,35.63374258115513],[82.42817833895919,35.689759833349655],[82.71043501206611,35.650175686059015],[82.78459069240648,35.68454051443322],[82.9358992857234,35.67407603637997],[82.97842898970606,35.600773016761366],[82.97176272996603,35.49044383381582],[83.0986800483455,35.41277415600251],[83.24611290898355,35.421249090872834],[83.56480146711402,35.36071015085281],[83.87067426970174,35.37453359584879],[83.98441409733272,35.41602977105711],[84.13319054600686,35.377530829384284],[84.21468427875641,35.38895132094666],[84.56344852143212,35.559483548027345],[84.77764733315786,35.600488796820514],[84.92363325387157,35.68932058377791],[85.14976932199664,35.7498078478539],[85.26025353367362,35.73040334693687],[85.3893412623894,35.75670665069134],[85.61976647344403,35.67539378509511],[85.71686648969671,35.75926463555447],[85.92992841986063,35.76169342740974],[86.0874381858236,35.87558828377226],[86.2123401216993,36.1159353705209],[86.39951216015817,36.17004059479757],[86.45940514503138,36.219443264095304],[86.71385989761615,36.23145803486045],[86.78698205008152,36.260267645735325],[87.19383060070169,36.3039600688021],[87.34560428291132,36.37405915020963],[87.57091352693772,36.333803209350634],[87.92453535422317,36.382559923501674],[88.00008629764454,36.428371080061254],[88.45923139831035,36.44888662411836],[88.71172244703325,36.36840057992279],[88.82809777209445,36.373671576581955],[88.95827070462929,36.28729441990154],[89.22362918483907,36.2635749367339],[89.67781334810746,36.081958115774455]]]}},{"type":"Feature","properties":{"id":11,"name":"新疆"},"geometry":{"type":"Polygon","coordinates":[[[96.36633990098284,42.722922619141826],[96.09091027199156,42.58690989857294],[96.04378136581732,42.499886785846485],[96.01783979726889,42.138720201476076],[96.03582319488447,41.99529226292756],[95.86394738156645,41.85501658844473],[95.77191165639778,41.82972097414367],[95.49198042235855,41.856024277898115],[95.05826012630376,41.78856069571958],[94.58092492064856,41.58521393477531],[94.01103722498789,41.10402883576222],[93.75994144114458,40.82332245536699],[93.57747195766478,40.58796214533666],[93.28632693943672,40.46926138030838],[93.03683312424931,40.48985443783204],[92.9258838236795,40.42290762049029],[92.91952762230193,40.11806834577749],[92.77741743426725,39.905523180450416],[92.7724048200264,39.810541896791136],[92.94794966044856,39.45247589784444],[92.93596072810516,39.152855942947355],[92.3331034689499,39.049864814209826],[92.1227287130597,38.94064667440455],[91.62865034413801,38.825666612424214],[91.49160444538887,38.81726919191968],[91.29440718024716,38.7451288931839],[91.01246056460332,38.69867178057822],[90.65351606561393,38.674073798267216],[90.63599775599164,38.6243093937635],[90.47822960761027,38.53250621169232],[90.31245161325131,38.46579193834722],[90.15091108587785,38.43279653643103],[90.19349246580464,38.32567129169675],[90.43926557794407,37.99607900594131],[90.41006839434095,37.84699249890471],[90.4364750508829,37.77857290321691],[90.83448693232606,37.60778229371786],[90.95721845876483,37.519415594753895],[91.07374881435624,37.48794464802705],[91.23497928336718,37.19540436491951],[91.31631798738522,37.118974921455475],[91.28758589087619,37.01350332311986],[91.05499026858604,36.94513540337613],[90.80777021742165,36.910563870326314],[90.71237552261232,36.82149953937221],[90.68813927640645,36.69848379209333],[90.80528974782356,36.55851817507366],[91.00672448085015,36.50348277391089],[91.0610364116011,36.31354604771195],[91.13576053272249,36.14063670472012],[91.11131758004228,36.07392243137514],[90.91499881404411,36.01333181451159],[90.82937096619708,36.010412096241225],[90.62266523561209,36.1111294618552],[90.16569054618179,36.12924205247873],[90.01376183524053,36.25277456279585],[89.97200727671441,36.10492829010852],[89.8667940607973,36.06560252523636],[89.67781334810746,36.081958115774455],[89.22362918483907,36.2635749367339],[88.95827070462929,36.28729441990154],[88.82809777209445,36.373671576581955],[88.71172244703325,36.36840057992279],[88.45923139831035,36.44888662411836],[88.00008629764454,36.428371080061254],[87.92453535422317,36.382559923501674],[87.57091352693772,36.333803209350634],[87.34560428291132,36.37405915020963],[87.19383060070169,36.3039600688021],[86.78698205008152,36.260267645735325],[86.71385989761615,36.23145803486045],[86.45940514503138,36.219443264095304],[86.39951216015817,36.17004059479757],[86.2123401216993,36.1159353705209],[86.0874381858236,35.87558828377226],[85.92992841986063,35.76169342740974],[85.71686648969671,35.75926463555447],[85.61976647344403,35.67539378509511],[85.3893412623894,35.75670665069134],[85.26025353367362,35.73040334693687],[85.14976932199664,35.7498078478539],[84.92363325387157,35.68932058377791],[84.77764733315786,35.600488796820514],[84.56344852143212,35.559483548027345],[84.21468427875641,35.38895132094666],[84.13319054600686,35.377530829384284],[83.98441409733272,35.41602977105711],[83.87067426970174,35.37453359584879],[83.56480146711402,35.36071015085281],[83.24611290898355,35.421249090872834],[83.0986800483455,35.41277415600251],[82.97176272996603,35.49044383381582],[82.97842898970606,35.600773016761366],[82.9358992857234,35.67407603637997],[82.78459069240648,35.68454051443322],[82.71043501206611,35.650175686059015],[82.42817833895919,35.689759833349655],[82.3189343607321,35.63374258115513],[82.28916873634807,35.54496247014188],[82.0860286800795,35.44799164509831],[82.00220950736292,35.319446520540424],[81.71142622344144,35.24565257450672],[81.54507978740224,35.25177623098827],[81.3573393090619,35.33239146639309],[81.21021650588705,35.316914374099014],[81.06092329327538,35.38856374821836],[80.97886111794622,35.29340159830508],[80.85845503057521,35.34714508737588],[80.48602298427335,35.40424754518804],[80.31921146024064,35.50925405553028],[80.1761710962191,35.253249010233674],[80.01416547995296,35.08592072226355],[80.04692833877186,35.01770783125144],[79.88383751778724,34.91960012554537],[79.95628787578482,34.68475657855328],[79.79397220205544,34.43102529638031],[79.71733605301642,34.412783515446876],[79.51264570493532,34.4716946483893],[79.33839277480666,34.430818589905954],[79.20449913922386,34.43944855440728],[78.95693951587305,34.33996090528569],[78.80173221800004,34.415006409000085],[78.6073254800001,34.54647125300011],[78.37943241400006,34.57866567000005],[78.2731856690001,34.65886749300006],[78.21138065600013,34.848261617000105],[78.14812870300005,34.9431395470001],[78.13004195100012,35.055432434000096],[78.0011609290001,35.268907776000106],[78.0556278900001,35.452875875000075],[77.98586470600014,35.494165344000095],[77.88313195800004,35.43106842000006],[77.80034631400014,35.495405579000135],[77.66061324100008,35.45809519500011],[77.41277307100012,35.46941233300009],[77.25081913300005,35.53070058200012],[77.10529829900008,35.53798695900011],[77.03904911300009,35.58501251200008],[76.89642216000004,35.589611715000046],[76.57075728400014,35.751255595000146],[76.56527958200007,35.865460511000094],[76.43205773900007,35.86049957300014],[76.31196171000005,35.80964996300011],[76.16602746600017,35.8062393190001],[76.11466109200012,35.94178660100005],[76.06143436700006,35.991602682000064],[75.9223214110001,36.03165191700006],[75.89431278500007,36.097384339000115],[76.01440881400009,36.23039947500004],[75.96883020000013,36.301971334000086],[75.9765816650002,36.46263336200013],[75.87477909400013,36.61947133400005],[75.79054650900008,36.68783925400004],[75.5705082610001,36.76674916600007],[75.49258020000019,36.720705465000066],[75.41051802600003,36.7473188270001],[75.35129683500014,36.91578399700006],[75.10014937300008,36.99412546800005],[74.91049686700006,36.96255116800009],[74.66244999200006,37.05448354100005],[74.54235396300004,37.02166900600014],[74.36613732900014,37.14775950100011],[74.48726688600004,37.225945943000056],[74.6232792560001,37.23080352800005],[74.7214644770001,37.297776185000146],[74.78326949100017,37.21966725700014],[75.06842004400005,37.31214223300006],[75.16412479700006,37.40063812300011],[74.89189335200018,37.599204814000075],[74.88610559100005,37.65346506800009],[74.9651705330001,37.767463278000065],[74.88321171100006,37.84386688300012],[74.89282352800006,37.99401275700012],[74.79071089700011,38.0814492800001],[74.77107385300008,38.29153981600007],[74.83825321400013,38.37941558800014],[74.77634484900011,38.51067372700001],[74.33420129400008,38.66699493400009],[74.14041467300012,38.669217021000094],[73.93288212100003,38.529664815000075],[73.79738651500008,38.602838644000144],[73.68369836500011,38.85494211900004],[73.81599003200006,38.993770854000076],[73.69816776600004,39.07841685000008],[73.60225630700012,39.235771587000045],[73.64132369000009,39.335274557000076],[73.63264204900014,39.448342590000095],[73.82074426200006,39.46818634100006],[73.92678430200016,39.59288157200007],[73.89350468000004,39.71039377900007],[73.82301802600006,39.80568512000008],[74.00398889100006,40.06081166600009],[74.16759647600009,40.10639027900007],[74.36985803300007,40.10582183900004],[74.70575484200003,40.33128611300009],[74.83091516100012,40.31991729800009],[74.78740360500012,40.420738017000076],[74.83535933500013,40.511636861000085],[75.03906783100007,40.44109853100011],[75.19389042200004,40.44125356100005],[75.48183150200009,40.61411122700014],[75.55986291500011,40.63286977200002],[75.66693648300009,40.450245260000116],[75.64016809100019,40.367304586000074],[75.68181929600013,40.29170196600012],[75.92149458900013,40.30911692400005],[76.07611047400007,40.39195424400006],[76.1513513590001,40.368131409000085],[76.24416223100013,40.441201884000066],[76.33015181500008,40.348080953000135],[76.44911096200019,40.41551869700007],[76.62419071400006,40.62754709900008],[76.6308052980001,40.72888458300011],[76.77084843000011,40.86711903900007],[76.76681766800004,40.944685364000065],[76.86097212800013,41.013208313000064],[77.00773319500007,41.044214173000086],[77.11883752500006,41.011658021000045],[77.33298466000014,41.02064971900009],[77.4748881430001,40.982047425000104],[77.66557417800004,41.00127105800004],[77.86669885300006,41.064057922000075],[78.07495487500006,41.0395116170001],[78.17603397600004,41.10550242200014],[78.35969201700004,41.28745513900009],[78.35989872300007,41.377527161000046],[78.61921106000005,41.47808949900008],[78.67212772700003,41.53844757100009],[78.97619185400004,41.64180043500005],[79.30413049300012,41.78755381300007],[79.41099735600005,41.77858795200012],[79.61098514800011,41.86762644500001],[79.7475142830001,41.879744568],[79.84290897700004,42.00183013900008],[79.93086226400004,42.02327585900011],[80.18190637200013,42.020976258000076],[80.2565271410001,42.084357401],[80.21032841000005,42.189518941000074],[80.26841272000013,42.23796559700014],[80.14004846200004,42.62295501800014],[80.22748498600004,42.790980937000086],[80.47615197800008,42.86389638300011],[80.36814823400005,43.02845998200013],[80.57588749200016,43.11941050200005],[80.77339481600012,43.11292511000008],[80.73546431500012,43.28888336200009],[80.64286014800007,43.32621958500005],[80.71272668500006,43.458872986000074],[80.47615197800008,43.91024078400011],[80.3451005450001,44.1030972290001],[80.37300581900007,44.27021881200011],[80.33290490700006,44.41739329100011],[80.37631311000007,44.6712796030001],[80.47615197800008,44.73541005400011],[80.21828658100003,44.81809234600007],[79.99173710100007,44.793649394000056],[79.86864384000012,44.84935658800006],[79.8582052000001,44.90372019500006],[80.06170699100005,45.01895863900006],[80.36504764900008,45.04319488600004],[80.42509566300009,45.092132467000056],[80.69712040200011,45.14365387000004],[80.85385502200012,45.126497295000064],[81.1441732180001,45.20468373600002],[81.73927901200017,45.33806060800006],[81.80728519700006,45.18871571900007],[81.95011885600007,45.14448069300008],[82.19175785300013,45.22220204700008],[82.29459395300006,45.228196513000114],[82.47582320100008,45.11569692000003],[82.58522220800012,45.17683014000005],[82.63384973100005,45.3393525190001],[82.61571130400011,45.43541900700012],[82.36265181500005,45.48120432600007],[82.29149336800003,45.533190817000076],[82.37221195500007,45.73416046200009],[82.48894901500006,45.901695455000095],[82.56827233900003,46.196509501],[82.67436405500013,46.33112660700007],[82.83895349200009,46.73244578100011],[82.98550785300017,46.94251047800009],[83.01351648000008,47.1945881150001],[83.1503556720001,47.21153798500009],[83.52449304200013,47.06710235700007],[83.90534834800013,46.973955587000034],[84.06962772600014,46.96442128500004],[84.15907963100005,46.993256735000074],[84.6635449630001,46.983851624000124],[84.73165450100004,46.947755636000124],[84.73961267100009,46.814766337000094],[84.91603601100013,46.85055226600011],[85.2051139730001,47.03371938100008],[85.49863610900013,47.0518319710001],[85.55682377100004,47.17874928800009],[85.65965987200008,47.20652537000012],[85.67035689300008,47.384343974000046],[85.57997481300004,47.52376698900014],[85.59542606600013,47.624070944000096],[85.51537927200008,47.92028025300007],[85.58638269000005,48.14124867700011],[85.71867435700011,48.35883229600012],[85.78368330900008,48.407589010000066],[86.00599532100006,48.42955149400004],[86.19203047700012,48.41823435500007],[86.33383060700004,48.49040049300007],[86.5650826420001,48.52732330300009],[86.74450321400013,48.70353993700007],[86.78946171100006,48.83913889600012],[86.71804488100014,48.91251943000006],[86.7275016690001,48.99034413700011],[86.88733687400003,49.10682281600006],[87.11631514500004,49.129767151000095],[87.40043217000004,49.071011048000116],[87.52528243000006,49.119793600000094],[87.81632409700006,49.165837301000096],[87.82190515100007,49.02873972600014],[87.87259973200014,48.96801991800004],[87.7568961990001,48.9203742470001],[87.80588545800003,48.80058827800005],[88.03377852400013,48.72911977200005],[88.06385420800012,48.682610982000085],[87.94282800400003,48.59948944100012],[88.16596683800014,48.493733622000065],[88.23562666800007,48.49319102000004],[88.4167008880001,48.394101461000105],[88.56511560100012,48.342993470000124],[88.58077356000007,48.21199371400013],[88.8054110110001,48.10595367500011],[88.9323283280001,48.096961975000085],[89.04555139200005,47.992988994000115],[89.24398889200006,47.980224915000065],[89.33426761900017,48.032366435000114],[89.54180017100009,48.03102284800005],[89.75129642700011,47.824317119000085],[89.88906579600012,47.824317119000085],[90.04461185800011,47.879765931000065],[90.08285241700008,47.756104228000055],[90.32743697200004,47.62303741500011],[90.44122847500006,47.493045350000074],[90.46872033700004,47.308922221000046],[90.71211633400009,47.014702454000115],[90.82818160000011,46.982301331000116],[90.9327746990001,46.8747885140001],[91.00481164500007,46.74042979000009],[90.99592329900008,46.59462473600007],[91.04749637900011,46.5664094040001],[90.89618778500005,46.30203277600009],[90.99592329900008,46.11372385700011],[91.00243452900003,46.02184316000006],[90.71077274600009,45.75219553700009],[90.65113814300008,45.49314158100009],[90.73795454900016,45.44172353100004],[90.79655562400012,45.29284373000007],[90.9054895430001,45.185976868000125],[90.97514937400013,45.2148639940001],[91.13503625500016,45.19786244700006],[91.24913781800007,45.12970123300005],[91.45605025300011,45.13745269800006],[91.52178267400006,45.077456361000145],[91.66296268700012,45.059524638000084],[92.00940149000013,45.076216126000105],[92.19367964700012,45.01451446500005],[92.47510949800017,44.99746124300012],[92.75271529200012,45.037975566000114],[92.94505497300014,45.005832825000084],[93.1657133380001,45.00764150000009],[93.52527795500004,44.951262513000074],[93.71400028500011,44.87457468700012],[93.87450728300013,44.714222718000144],[93.97506962100005,44.65996246400002],[94.19500451700009,44.65432973300008],[94.33845829300009,44.51211619100013],[94.58805546100007,44.43610015900009],[94.69822961400013,44.343495992000044],[95.03681359900003,44.25497426400008],[95.37942834500012,44.28711700500011],[95.32144738800014,44.14841746000013],[95.32754520700013,44.00666900700011],[95.51027307200013,43.97912546800012],[95.5892346600001,43.869493918000046],[95.69248417200015,43.630542094000106],[95.83283736200008,43.4089018760001],[95.85495487500009,43.28454254200011],[95.90849165900005,43.21454681400007],[96.29430790200007,42.93327199400005],[96.36633990098284,42.722922619141826]]]}},{"type":"Feature","properties":{"id":12,"name":"海南"},"geometry":{"type":"Polygon","coordinates":[[[110.68506920700003,20.15330638200004],[110.71094811300014,20.07518138200001],[110.78834069100003,20.010402736000117],[110.93458092500003,19.995062567000048],[111.00001061300009,19.72166575700004],[110.96583092500009,19.635972398000064],[110.87647545700014,19.539780992000118],[110.82178795700003,19.554103908000116],[110.75757897200009,19.430894273000035],[110.69825280000009,19.416937567000048],[110.58904056100005,19.176703192000048],[110.56324303500003,19.055650132000068],[110.46558678500003,18.88190338700008],[110.46900475400014,18.777167059000107],[110.42676842500003,18.680894273000092],[110.2272241550001,18.642157294000043],[110.10328209700009,18.53937409100004],[110.05258222700013,18.39020416900007],[109.91537519600007,18.4168154970001],[109.83545983200008,18.382269598000107],[109.74610436300003,18.39590078300006],[109.67725670700008,18.245062567000048],[109.56804446700005,18.19318268400005],[109.43995201900009,18.28896719000008],[109.21810957100013,18.30565013200004],[109.16260826900009,18.287827867000146],[109.09164472700019,18.36859772300005],[109.00074303500003,18.36717357000009],[108.79558353000004,18.48655833500007],[108.6949975920001,18.504828192000048],[108.69361412900003,18.71987539300008],[108.62745201900003,18.835882880000014],[108.65381920700003,18.92104726800011],[108.61524498800014,19.101629950000103],[108.66309655000009,19.15623607000009],[108.63168379000007,19.28628164300008],[108.69434655000003,19.380316473000022],[108.7706811860001,19.394354559000078],[108.94076582100013,19.514105536000073],[109.01587975400003,19.601263739000103],[109.15650475400003,19.649644273],[109.16684004000018,19.80548737200013],[109.30372155000003,19.921698309000135],[109.46501712300011,19.834051825000103],[109.52702884200005,19.86196523600006],[109.52702884200005,19.951361395000077],[109.59571373800003,19.99315013200001],[109.71900475400003,20.010646877000056],[109.80762780000003,19.951361395000077],[109.88331139400009,19.984849351000037],[110.01368248800003,19.957505601000065],[110.08961022200003,19.97809479400007],[110.15699303500014,20.06736888200004],[110.26099694100009,20.033148505000042],[110.38298587300005,20.081040757000068],[110.58033287900008,19.979722398],[110.56934655000003,20.079779364000046],[110.68506920700003,20.15330638200004]]]}},{"type":"Feature","properties":{"id":13,"name":"宁夏"},"geometry":{"type":"Polygon","coordinates":[[[107.65764611237813,37.85293528913229],[107.60674482631265,37.765731310151835],[107.50943810358558,37.764284369328124],[107.43605756960119,37.66346365002741],[107.31720177584123,37.590186468830495],[107.32216271413796,37.52763214810511],[107.2380334821595,37.3013668887709],[107.32495324119913,37.16357168208742],[107.28547244669602,37.068461209017585],[107.18780398966243,37.11706289353771],[106.93293582592759,37.107192694687114],[106.7906706082619,37.18966828116629],[106.64406456902458,37.18165843428932],[106.63393598775559,36.997897040515966],[106.57481815013756,36.93133779590261],[106.64902550732126,36.8341861028064],[106.60215498266638,36.7258206237228],[106.50236779213986,36.70651947739199],[106.49399621005699,36.55981008626645],[106.43999433766857,36.51477407516347],[106.495391473138,36.4367426621441],[106.49658003064394,36.26835500697797],[106.6038603050091,36.27783763310026],[106.7449369651689,36.206575833507856],[106.81366662011845,36.21164012279348],[106.9447697286401,36.07694550243298],[106.91484907372575,35.907059231398364],[106.84322553892741,35.882202867568225],[106.91340213380147,35.788823554363546],[106.76710615382592,35.7065546743587],[106.46960493422034,35.72743195182309],[106.4292973174172,35.69944916414764],[106.49508141477554,35.5531273457504],[106.46485070239805,35.33236562797137],[106.37777591372742,35.2606645779079],[106.31338707855087,35.27360952376057],[106.21065433133236,35.39515249269334],[106.11241743441701,35.42465973645773],[106.06508182176867,35.48765330675465],[105.93614912268384,35.52480866129068],[105.8293856140549,35.49364777292638],[105.68696536675827,35.66045929605963],[105.43183881970583,35.756422430750604],[105.31809899297417,35.9332075064213],[105.35148196761867,36.0576443552028],[105.43741987472742,36.10668528929466],[105.44594648644119,36.254583237926056],[105.39277143815133,36.38439443615431],[105.26874799962047,36.550224107356684],[105.22048221188453,36.69295441301577],[105.32166466729058,36.78072683457572],[105.18017459508144,36.97213633912071],[104.92241255059872,37.096754055055584],[104.8553882179919,37.218193671200964],[104.76474775590418,37.25049144112714],[104.68950687084538,37.41192861571304],[104.46450768428224,37.440247301072134],[104.35851932200904,37.40123159456249],[104.4252335962534,37.498589993233566],[104.52238528934959,37.5299575871729],[104.64697716686271,37.50659984011051],[104.94432335773678,37.54571889940763],[105.08488325395899,37.660673122966244],[105.3544275252101,37.75263133376896],[105.53410647983014,37.72498444287777],[105.65869835824259,37.73981557912569],[105.78809614532082,37.805057075023996],[105.82473473501994,38.005484116798556],[105.75564334486444,38.135502021501026],[105.82809370286213,38.22681427715713],[105.84121951676724,38.57128937420518],[105.89661665223667,38.73618887032012],[106.06027591400226,38.97906810171153],[106.11319257987361,39.12081655543966],[106.2834147476924,39.156524970051265],[106.27566328323394,39.269153754542174],[106.49694176584978,39.28579356502101],[106.61409223816622,39.358321438283724],[106.78912031465075,39.36095693571397],[106.80824059472775,39.199054674034016],[106.91185184108957,39.06919179896235],[106.97784264492208,39.03560211784347],[106.93174726842165,38.92113882070004],[106.70442264189137,38.63722850209365],[106.64499474501156,38.45920319297298],[106.47012169815781,38.290686347497],[106.82916954993476,38.150384832793804],[107.06083499623804,38.114934801499885],[107.16263756657042,38.138602606924735],[107.3241780948432,38.06594554335217],[107.40468997566182,37.9216649440819],[107.65764611237813,37.85293528913229]]]}},{"type":"Feature","properties":{"id":14,"name":"陕西"},"geometry":{"type":"Polygon","coordinates":[[[111.11004520082531,39.38519318281914],[111.22487023317473,39.31054657606359],[111.11800337085884,39.06743480157485],[110.99501346200162,39.0038469511758],[110.98033735628394,38.816649075194675],[110.87181684756939,38.62136383707144],[110.89941206341592,38.545451158444166],[110.85977623928198,38.468039863049256],[110.77425174422257,38.426233629478475],[110.67120893774222,38.31698965125136],[110.57968997561187,38.28732737875555],[110.51121870308066,38.20219045732378],[110.5150427589162,37.95499624278236],[110.58930179204407,37.919132799439126],[110.65338056795883,37.813196113110166],[110.75306440569778,37.74575836845386],[110.78877282120874,37.56142853389966],[110.74634647001358,37.480296536356065],[110.63028120331484,37.39663239237095],[110.66500776599554,37.2822724471157],[110.46005903459678,37.051278795280155],[110.38946902857282,37.02195242046784],[110.39753055229312,36.78137278882315],[110.4831584010393,36.593012192858424],[110.49612918531363,36.48407827389326],[110.45897382987835,36.34940949195445],[110.4472432799534,36.141876939069476],[110.51096032066226,35.88685374570383],[110.56041466680341,35.84918162723031],[110.61984256368339,35.597259020187636],[110.42481570797861,35.2942284215045],[110.33541548113948,35.19800690439513],[110.25965783124394,34.94476654683868],[110.23743696484405,34.80139028603287],[110.25226810109194,34.66325918256521],[110.33603559786457,34.615846056450295],[110.32766401578164,34.47980784805375],[110.47866255073609,34.32638052034474],[110.43380740768566,34.2613974068648],[110.60666507383405,34.17049856235883],[110.5936426127164,34.06533702238568],[110.64237348844574,33.980303452842094],[110.5937976423474,33.87974111595966],[110.7492403498623,33.80279490855821],[110.79213178905076,33.70512645152451],[110.96824507025383,33.59882802998959],[111.01061974460555,33.50015188170403],[111.01558068200296,33.37444896105072],[110.97460127163134,33.266471056494055],[110.82344770704606,33.19892995905036],[110.71125817302624,33.108108628910145],[110.60449466439724,33.153893947947296],[110.5473922056857,33.2453353948126],[110.43225711497382,33.17306590396828],[110.23443973220782,33.15632273980259],[110.09429324803494,33.21332184482728],[109.65969445193741,33.26409394058294],[109.51567223508562,33.23706716641661],[109.49102257683046,33.145005601926954],[109.75725955618356,33.08007416439116],[109.73958621603106,32.93000580542352],[109.89911136269916,32.91442536124143],[110.09584353984746,32.84125153283199],[110.15496137926425,32.72957876185032],[110.16829389874442,32.62235016522794],[110.0738293799219,32.61656240553057],[110.0008622579868,32.55194102635724],[109.87952599462898,32.591628526435386],[109.63483808810736,32.59064667450443],[109.57944095263781,32.54121816678497],[109.56130252539117,32.40502492875743],[109.48740522657005,32.33593353950121],[109.54765994664916,32.23361420343275],[109.61902509992842,32.18891408911395],[109.66630903483411,32.043005682765994],[109.61018842985209,31.927302151273295],[109.59396202962392,31.737597968171656],[109.3359932795662,31.705248521402126],[109.25258751799959,31.744005846392668],[109.18887047729072,31.84030487696853],[109.05590701679535,31.940634670753468],[108.78930830313567,32.04533112183378],[108.51836876790429,32.19756989203688],[108.47940473823809,32.25027985323257],[108.2367322124216,32.2626563583043],[108.05178226114242,32.22661204690846],[107.96005659433638,32.15834747995228],[107.84352623874497,32.22816234051962],[107.65919640508997,32.388617662275294],[107.45962202403717,32.4086422799173],[107.44830488526219,32.522227077917364],[107.37053185376203,32.51982412448379],[107.28412885865998,32.452928982186705],[107.20217003791686,32.452773953455164],[107.06998172377752,32.52292470990747],[107.09623335158784,32.669246528304626],[107.06533084474273,32.708313909859044],[106.71258751839923,32.73782115272397],[106.60396365779667,32.67552521441709],[106.3639783062539,32.63867991824361],[106.22894778910916,32.591964423219565],[106.05650353411079,32.71355906809657],[106.08234174987189,32.873523464336444],[105.87548099235397,32.84471385346157],[105.81341759624502,32.76210907577317],[105.63327355273225,32.70746124913737],[105.56826460173005,32.73045726189309],[105.4985530948494,32.90739736629541],[105.6393196957473,32.88548655915733],[105.88648807186706,32.978013210741096],[105.9105692893412,33.031730862289436],[105.91273969877801,33.233682359253436],[105.74716840999412,33.29398875617616],[105.83243452443372,33.49754222269539],[106.07345340385154,33.61750906049474],[106.17060509604835,33.56224111623459],[106.39265872591949,33.61882680920988],[106.49554650276883,33.543585924151046],[106.55947024905277,33.59862132441461],[106.48174889529531,33.700888984539034],[106.47983686737751,33.86819143318809],[106.43022749160542,33.94211457043107],[106.51373660685891,34.10660065449662],[106.58742719920588,34.137451484498456],[106.55404422366195,34.28082774530418],[106.65600182542386,34.2542143822879],[106.67362348783365,34.384671536562195],[106.61409223816622,34.45872386321574],[106.49833702983,34.52021881854367],[106.36837080287029,34.52021881854367],[106.3177278992232,34.583341580049876],[106.4915157413584,34.740954697900946],[106.549703403889,34.862575182098965],[106.4912056820965,35.03011017474469],[106.56458621608095,35.07961619683002],[106.91484907372575,35.08904714610895],[107.05153323816836,35.038145860043386],[107.21085167836225,34.89177236570208],[107.32076745015769,34.94220856377419],[107.49688073136076,34.92577545797096],[107.5696411477208,34.96541128210495],[107.71004601431213,34.951406969056364],[107.83034874889563,34.976728420879965],[107.67046186702152,35.22797923435422],[107.74167199066977,35.318361314023434],[107.92284956295703,35.26689158807628],[107.97866010867705,35.22345754742793],[108.1549800963544,35.29055939440059],[108.2767814468063,35.26283498824415],[108.49263390493076,35.272498481519676],[108.6172257833432,35.39282705272626],[108.60373823423208,35.547856349990525],[108.50999718582142,35.700870266549515],[108.49309899292422,35.88119517721566],[108.67711876821659,36.00524445236957],[108.69975304576644,36.1255471869531],[108.64993696531866,36.22649709746304],[108.70368045528875,36.35896963154323],[108.60652876219262,36.43198843032184],[108.44126753087181,36.46128896671243],[108.35636315343675,36.54603831631525],[108.04170535671688,36.59774058715834],[107.88652103072098,36.75537954433051],[107.69547326138195,36.82509105121099],[107.54886722214462,36.8400255402465],[107.5009114927712,36.890771795781774],[107.29963178937561,36.90720490248421],[107.28547244669602,37.068461209017585],[107.32495324119913,37.16357168208742],[107.2380334821595,37.3013668887709],[107.32216271413796,37.52763214810511],[107.31720177584123,37.590186468830495],[107.43605756960119,37.66346365002741],[107.50943810358558,37.764284369328124],[107.60674482631265,37.765731310151835],[107.65764611237813,37.85293528913229],[107.88497073800909,37.80164643033848],[107.99111412991311,37.7257079132896],[108.03870812408064,37.632509467238066],[108.33295372863165,37.6335946719565],[108.49635460797873,37.66860545547735],[108.76434858561868,37.68188629811419],[108.79070356711594,37.94176707608969],[108.86330895384515,37.98760407197037],[108.95425947519459,37.9255406758615],[109.02795006664223,38.11095571513414],[108.9534843279394,38.19906403347835],[108.98635053864638,38.335205592863815],[109.15998335205006,38.5421438674455],[109.3131522973406,38.62048533792796],[109.42394656827958,38.76905508102715],[109.5379964542729,38.78520396599026],[109.63530317610065,38.905816758936226],[109.67426720576702,39.01121084200679],[109.8205631857424,39.0544640164012],[109.96334516824493,39.18127798109393],[110.1768721864023,39.28519928581835],[110.10917606022707,39.42839468037019],[110.22524132692564,39.424053859697864],[110.33810265541325,39.31814301179051],[110.49416548055251,39.37431529451524],[110.60340945788016,39.267215888202685],[110.68485151558491,39.26437368429811],[110.84566857344595,39.46518829970023],[111.01310021420346,39.56487213833856],[111.13707197499161,39.564949652704314],[111.04100548661387,39.42296865497943],[111.11004520082531,39.38519318281914]]]}},{"type":"Feature","properties":{"id":15,"name":"山西"},"geometry":{"type":"Polygon","coordinates":[[[113.72104861939818,36.35586904611952],[113.67288618355053,36.22145864480055],[113.68714887901751,36.05573232728503],[113.62756595340602,35.95323212316393],[113.58472619016158,35.68686595350093],[113.60994428919759,35.64606741028271],[113.49129520101269,35.52548045485909],[113.32841108560314,35.46300364849958],[113.12956017496208,35.35228689192655],[113.01979943189832,35.32859324807998],[112.90275231326859,35.240588284321916],[112.80761600087772,35.2419835483021],[112.68245568168436,35.31117829034588],[112.52597944539508,35.22027944583971],[112.05846276264634,35.23449046536271],[112.06109826097594,35.108477485447594],[111.8294328146726,35.08256175442145],[111.62221032104952,34.94727285395902],[111.55766645714124,34.8634020052983],[111.39426557779416,34.823275254749234],[111.33127200659777,34.84092275648001],[111.02570926327195,34.747491767331184],[110.88380577991279,34.66610138646979],[110.5305456887325,34.583677476834055],[110.33603559786457,34.615846056450295],[110.25226810109194,34.66325918256521],[110.23743696484405,34.80139028603287],[110.25965783124394,34.94476654683868],[110.33541548113948,35.19800690439513],[110.42481570797861,35.2942284215045],[110.61984256368339,35.597259020187636],[110.56041466680341,35.84918162723031],[110.51096032066226,35.88685374570383],[110.4472432799534,36.141876939069476],[110.45897382987835,36.34940949195445],[110.49612918531363,36.48407827389326],[110.4831584010393,36.593012192858424],[110.39753055229312,36.78137278882315],[110.38946902857282,37.02195242046784],[110.46005903459678,37.051278795280155],[110.66500776599554,37.2822724471157],[110.63028120331484,37.39663239237095],[110.74634647001358,37.480296536356065],[110.78877282120874,37.56142853389966],[110.75306440569778,37.74575836845386],[110.65338056795883,37.813196113110166],[110.58930179204407,37.919132799439126],[110.5150427589162,37.95499624278236],[110.51121870308066,38.20219045732378],[110.57968997561187,38.28732737875555],[110.67120893774222,38.31698965125136],[110.77425174422257,38.426233629478475],[110.85977623928198,38.468039863049256],[110.89941206341592,38.545451158444166],[110.87181684756939,38.62136383707144],[110.98033735628394,38.816649075194675],[110.99501346200162,39.0038469511758],[111.11800337085884,39.06743480157485],[111.22487023317473,39.31054657606359],[111.11004520082531,39.38519318281914],[111.34269249905952,39.44441437412402],[111.42118899917295,39.52213572878085],[111.42537479021439,39.62538523993686],[111.48991865412256,39.65215363258406],[111.67486860630117,39.63592723235587],[111.7611682477164,39.59804840830739],[111.92146853984127,39.688843899126624],[112.09897708502444,40.00543956218607],[112.16507124164451,40.05931224246595],[112.27927615816822,40.22896596950389],[112.39921715664639,40.28834219043969],[112.59584598190656,40.237776801158475],[112.7342354677927,40.17284536452195],[112.84378950438224,40.225658678505226],[112.96140506379265,40.35585744946175],[113.0864620301985,40.40443329556018],[113.22986413032532,40.41665477100091],[113.33414717025562,40.3187279324481],[113.51832197517899,40.343739325909155],[113.6766068865985,40.428540351456036],[113.80848514237545,40.43422475836593],[114.04376793803988,40.48799408585833],[114.07554894402847,40.55018667317648],[114.02697309793007,40.63516856497725],[114.15409712098545,40.7425780305517],[114.15172000507414,40.67358999318361],[114.25755333861571,40.54997996670224],[114.28576867118727,40.37856924137745],[114.43366661981861,40.360534166018965],[114.45030643119696,40.293768214931276],[114.08536746603579,40.18501516401872],[113.99596723829745,40.13181427730706],[113.93591922379323,40.01572317218668],[114.08598758276082,39.91691783269192],[114.38281701059674,39.86105561012829],[114.40214399624841,39.65845815711822],[114.54094689328451,39.53123078127564],[114.42033410033844,39.29997874612232],[114.3939791197406,39.169340724694734],[114.21631554582575,39.069036770230895],[114.08908816908377,39.074359442834094],[114.01271040156382,39.11882701315622],[113.85334028542593,39.07229238528532],[113.76021935374018,38.909201565200135],[113.82512495285437,38.81026703539547],[113.66901045087172,38.66027619079358],[113.60896243726677,38.644463201715524],[113.53449669766451,38.537286281936474],[113.51801191591721,38.37760610653663],[113.55790612157023,38.24342825011371],[113.790656772592,38.15286530239189],[113.89147749189294,37.94946686550355],[114.02635298120526,37.75077098179543],[114.1004053078587,37.69819021270823],[114.053121372953,37.50057953551726],[113.88672326096969,37.29612173143286],[113.8576811060982,37.20894358997484],[113.7543282412554,37.11494415914558],[113.77603234281844,36.89061676705023],[113.67924238492822,36.871599839760904],[113.60777387886151,36.769073798117375],[113.45393314000256,36.73662099945966],[113.45873904776897,36.635800279259456],[113.5473641300506,36.54851878501387],[113.53511681528892,36.48338064190321],[113.72104861939818,36.35586904611952]]]}},{"type":"Feature","properties":{"id":16,"name":"湖北"},"geometry":{"type":"Polygon","coordinates":[[[115.37402265791923,31.417539985382007],[115.54998091039067,31.18269643838991],[115.6687333522624,31.21721629549566],[115.76836551315785,31.143551541570446],[115.87693769691714,31.129366360469135],[115.94644249912204,31.03404918092494],[116.0359977555919,30.988883979512053],[115.85864424003955,30.860958970779876],[115.86220991435607,30.784839586577647],[115.77529015531644,30.75481557887585],[115.76784874922032,30.68815298147493],[115.946649204697,30.48829437958196],[115.87678266818557,30.38979909934892],[115.91202599480386,30.315591742165196],[116.04049360589516,30.221437283503775],[116.07806237158115,29.9687136907842],[116.14725711542354,29.788776352846384],[115.99899742978761,29.744127916270287],[115.85590538892262,29.73859853809202],[115.70516523638656,29.86081329969403],[115.48621219283837,29.864275621222987],[115.41686242116378,29.711700955135],[115.35433393796086,29.64762217922018],[115.14018680217919,29.58752248787252],[114.97275516232082,29.559953111347],[114.895188837295,29.520188096903155],[114.81824262899408,29.39386505772623],[114.70868859330392,29.389524237953253],[114.46953006406119,29.31792654157661],[114.30814456631873,29.354539292854042],[114.2465462591025,29.248912664887513],[114.06345665889773,29.203153185171345],[113.902381220417,29.066339830418826],[113.77282840370788,29.125302639305346],[113.65490278503557,29.12403656743365],[113.64136355998028,29.22175670041139],[113.5877234227977,29.293793647259037],[113.72936852373834,29.437092393699004],[113.63469730024025,29.68482920970024],[113.53615034406323,29.685733547265443],[113.51951053268493,29.841667182094795],[113.41584761037882,29.764565945062316],[113.18624922072496,29.531737778775465],[113.14568322060416,29.47207733789884],[113.0081205588167,29.518095200932777],[112.92781538267377,29.49522838028554],[112.90848839702198,29.600803331408628],[112.94559207561377,29.70929800080208],[112.8861641787338,29.791773587281256],[112.64814253105294,29.626899928688744],[112.4439172709653,29.641369329730793],[112.36309533088479,29.5721745876871],[112.17003217994113,29.64904328072288],[112.12631391755326,29.707153428887608],[111.92363895107673,29.85639496555521],[111.76860965381246,29.91959524232658],[111.58489993688261,29.90435069402926],[111.4149878283256,29.92579641407326],[111.24616092268843,30.03173310040222],[110.74185062060963,30.096173611522943],[110.7155989927993,30.029640204431928],[110.5433614442752,30.055013333098856],[110.46315962091973,30.013982244984675],[110.50057335787415,29.862570298880172],[110.59116214401769,29.77136139601157],[110.44672651601587,29.726687120114462],[110.3616671080506,29.65010264701951],[110.10390506356777,29.78541738500431],[109.7832011247321,29.73492951098811],[109.70000206874045,29.65573537888463],[109.47221235601535,29.568169663798926],[109.43231815036233,29.533908189111656],[109.33816368990239,29.289685370583385],[109.26922733027715,29.24234975793496],[109.20659549428666,29.104244492889023],[109.07730105999593,29.214134426262746],[109.01415246006798,29.307487901045818],[108.9205664412882,29.34898407625417],[108.87204227113386,29.501610419185482],[108.87204227113386,29.63896637629722],[108.69603234271847,29.698161729180413],[108.61303999230176,29.858022773532156],[108.51263268415107,29.72185537392633],[108.44684858589352,29.73578217170987],[108.40044315013125,29.831073512832347],[108.53821251839304,29.88546295794913],[108.53201134574698,30.315488390276982],[108.38059939964268,30.39969513572194],[108.43320600805077,30.48728668922928],[108.57314578664875,30.497854519170716],[108.66998742138236,30.57384471306301],[108.71019168539794,30.522840074210052],[108.8684249208734,30.5513654651441],[108.96464643798276,30.607486070126043],[109.17925866085852,30.566790879695304],[109.24824669822652,30.59743500412219],[109.39418094299617,30.583740750335323],[109.63979902640398,30.717944444280675],[109.74857791483885,30.835353298116274],[109.8706893245527,30.888580024148837],[109.99672814288942,30.826232408099145],[110.06623294509433,30.828480332801178],[110.12767622267955,30.906408393032876],[110.1076257666158,31.12233836552312],[110.17485680479768,31.18866506613989],[110.10824588424015,31.398032130778205],[109.92949710470765,31.51872243898933],[109.73260989792846,31.56112295176277],[109.72449669826409,31.636079616880778],[109.59396202962392,31.737597968171656],[109.61018842985209,31.927302151273295],[109.66630903483411,32.043005682765994],[109.61902509992842,32.18891408911395],[109.54765994664916,32.23361420343275],[109.48740522657005,32.33593353950121],[109.56130252539117,32.40502492875743],[109.57944095263781,32.54121816678497],[109.63483808810736,32.59064667450443],[109.87952599462898,32.591628526435386],[110.0008622579868,32.55194102635724],[110.0738293799219,32.61656240553057],[110.16829389874442,32.62235016522794],[110.15496137926425,32.72957876185032],[110.09584353984746,32.84125153283199],[109.89911136269916,32.91442536124143],[109.73958621603106,32.93000580542352],[109.75725955618356,33.08007416439116],[109.49102257683046,33.145005601926954],[109.51567223508562,33.23706716641661],[109.65969445193741,33.26409394058294],[110.09429324803494,33.21332184482728],[110.23443973220782,33.15632273980259],[110.43225711497382,33.17306590396828],[110.5473922056857,33.2453353948126],[110.60449466439724,33.153893947947296],[110.71125817302624,33.108108628910145],[110.82344770704606,33.19892995905036],[110.97460127163134,33.266471056494055],[111.00266157367264,33.20753408512991],[111.10880496557667,33.14802867298479],[111.21634362236023,32.97648875645089],[111.21014244971428,32.93021251099859],[111.36331139500481,32.824766751084695],[111.50743696464417,32.68206228294801],[111.53162153490598,32.61108470329637],[111.71119713763773,32.600232652514904],[111.77925499901903,32.52036672594363],[112.0533467956181,32.45484101010456],[112.14460737533022,32.39463796596934],[112.28578738827736,32.350635484539936],[112.53393761632799,32.37675792114115],[112.75087527917071,32.349782822918996],[113.06568810372312,32.41737559720602],[113.18299360567028,32.41331899737389],[113.4359497423867,32.28875295738308],[113.52767540919274,32.296685288994894],[113.61640384336266,32.38567210558321],[113.72921349500677,32.4192617858028],[113.78275027940191,32.359368800929474],[113.7816650737841,32.19371999777971],[113.75236453739342,32.13759939189842],[113.79437747563998,31.97251902952962],[113.86171186660931,31.862706611420947],[113.95958703011729,31.831829942098096],[113.97198937361065,31.74656382945713],[114.08547081882318,31.78379669925829],[114.14396854061556,31.847539578388876],[114.26737186062286,31.808730577454213],[114.36183637944538,31.73426483785198],[114.55567467674484,31.737675483436874],[114.54787153544294,31.572879340109523],[114.63820193916808,31.56802175549967],[114.76656619657263,31.49048126889548],[114.99885175960094,31.477613837408654],[115.12855960504169,31.5945317648291],[115.21346398337607,31.545594184424004],[115.21852827356088,31.44748647691938],[115.28622439973623,31.395138250929477],[115.37402265791923,31.417539985382007]]]}},{"type":"Feature","properties":{"id":17,"name":"湖南"},"geometry":{"type":"Polygon","coordinates":[[[113.902381220417,29.066339830418826],[113.9051717465789,28.955984809051756],[114.01209028483873,28.912912502709815],[114.14272830626629,28.788501492350008],[114.11280765225126,28.615514634992422],[114.05694542878854,28.564277452142676],[114.17704145689771,28.50730418553971],[114.22685753824476,28.40896393493759],[114.18448286299372,28.29307953539228],[114.09187869704431,28.257707018464117],[114.0137956080809,28.106475937714322],[113.91648888625309,28.021183987551012],[113.7368099298343,27.981574001838737],[113.70099816333448,27.81894826884752],[113.56209191261172,27.590564276919878],[113.60012576719032,27.368226427107885],[113.66746015815977,27.329546617382505],[113.78275027940191,27.370784410172377],[113.85096316861535,27.345902207920517],[113.82357466014247,27.22867422123835],[113.7540181819935,27.141857814986196],[113.89240766787964,26.945332343412872],[113.83163618386277,26.827484239106354],[113.86470910014492,26.65586680820661],[114.08505740767316,26.577499498403085],[114.06841759629515,26.45370860386899],[114.01488081279922,26.38508230170686],[113.99860273572773,26.283098863321896],[113.93948489810958,26.209434109396682],[114.06283654217259,26.17778229371794],[114.16215864470564,26.221371364896584],[114.21352501786521,26.169772446840966],[114.04144249897212,26.068848374752747],[114.01829145658542,25.934618842385674],[113.90718712818341,25.749772243893972],[113.91793582617748,25.660191148103024],[113.98242801324216,25.58166881046722],[113.9275476417103,25.44811106987001],[113.82807051044563,25.356747138269867],[113.7138655948213,25.360907090889555],[113.58245242703799,25.325947984212064],[113.52343794220735,25.38558258756646],[113.42163537007639,25.383799749958598],[113.21746178593276,25.505575262888158],[113.08976932209657,25.41415965444446],[112.91737674394165,25.3248627794938],[112.88910973542608,25.241457017927075],[112.9690531763631,25.18058218022344],[112.95876956636232,25.056145331441996],[112.98889692595242,24.963928738220716],[112.8078227073521,24.942844754281964],[112.71408165894161,24.999507962522586],[112.66333540160758,25.113144436466598],[112.45838667200735,25.164252428107147],[112.21395714700475,25.200374253868773],[112.12099124584938,24.949278469126057],[112.16476118418154,24.91199392338092],[112.1447624040618,24.793551540771034],[112.06636925673592,24.796574611828873],[111.99655439706783,24.735673935703687],[111.92596439014449,24.77487051026594],[111.79703169195909,24.76042694854482],[111.66711714094339,24.779676418931558],[111.51694542918824,24.642656357704766],[111.42816531817493,24.681026109067716],[111.47364057795028,24.7928539087809],[111.42971561088672,24.94341319416364],[111.46185835208138,25.019480903321153],[111.42692508292618,25.106193955886454],[111.27437625526,25.147664293572376],[111.12575483621669,25.04446645836049],[111.0790393411927,24.944240017363057],[111.0062789248326,24.93545502413008],[110.95460249241114,25.025346178283485],[110.99320478687156,25.15076487899597],[111.11376590387334,25.238640652444133],[111.16420210194548,25.36493785230016],[111.2537573593147,25.399121811722296],[111.31582075362496,25.503198146977013],[111.32372724771426,25.729825141517097],[111.41126712437824,25.802611396298857],[111.40832156768636,25.907850449738504],[111.25623782801335,25.868989772859862],[111.20208092689336,25.930278021713434],[111.25670291510744,26.210131741386903],[111.25189700734109,26.279714057058186],[111.12327436661872,26.305991523290288],[110.9354822123342,26.382472642698303],[110.87894819530305,26.275218206754857],[110.72402225082618,26.27431387008903],[110.68862389457706,26.332320665466483],[110.57705447818182,26.350794990396594],[110.53654015490423,26.22485952394797],[110.48455366412043,26.17155528444883],[110.34166832883028,26.11274750429385],[110.2469971053323,25.978207913564432],[110.13821821509862,26.051665961015317],[110.03362511590632,26.03649892798316],[110.06204715405289,26.149928697251653],[109.91166873582358,26.181218776825062],[109.83844323057065,26.045025539696894],[109.78134077365786,26.023760687705533],[109.77203901558823,25.90816050900031],[109.67659264483484,25.889066067345198],[109.67225182506161,25.98531342197691],[109.60316043490621,26.052673652267373],[109.45670942619904,26.038850206371933],[109.39929691002442,26.269947210994985],[109.29656416190653,26.312528590921687],[109.31501264931433,26.42572581619342],[109.40255252507893,26.537295234387585],[109.37723107325536,26.646151638087645],[109.29403201726376,26.727309474952335],[109.39707482284473,26.754672145902788],[109.50528527229744,26.824797064832666],[109.44384199381295,26.900993964299943],[109.50714562427123,26.97636404146735],[109.49918745333832,27.062482814830076],[109.43820926284718,27.131031601727074],[109.23057335807403,27.151986396255182],[109.15564253137774,27.079716905410862],[109.0954911640859,27.13444224731188],[108.95017703694072,27.026903591427583],[108.87421268057074,27.018118598194718],[108.79132368384091,27.08312755009638],[108.90010257407448,27.188805854006944],[109.0149276064239,27.26218638799145],[109.20638878781239,27.444759223359426],[109.41836551325781,27.559506741343057],[109.44725263939773,27.65001801222155],[109.41340457586057,27.738953151966427],[109.32824181510762,27.807656969393605],[109.30989668228608,27.970308539007874],[109.36265831942592,28.029633083999613],[109.29873457224272,28.09471955026703],[109.35428673734299,28.265174262082496],[109.26385298083034,28.322225043051304],[109.25837527859625,28.505908922458815],[109.28462690640663,28.573475857424853],[109.21321007718325,28.62879547852853],[109.28121626172111,28.729125271414176],[109.24674808235807,28.785530097236233],[109.24550784710942,28.931257636430814],[109.27480838439936,29.049260769468873],[109.20659549428666,29.104244492889023],[109.26922733027715,29.24234975793496],[109.33816368990239,29.289685370583385],[109.43231815036233,29.533908189111656],[109.47221235601535,29.568169663798926],[109.70000206874045,29.65573537888463],[109.7832011247321,29.73492951098811],[110.10390506356777,29.78541738500431],[110.3616671080506,29.65010264701951],[110.44672651601587,29.726687120114462],[110.59116214401769,29.77136139601157],[110.50057335787415,29.862570298880172],[110.46315962091973,30.013982244984675],[110.5433614442752,30.055013333098856],[110.7155989927993,30.029640204431928],[110.74185062060963,30.096173611522943],[111.24616092268843,30.03173310040222],[111.4149878283256,29.92579641407326],[111.58489993688261,29.90435069402926],[111.76860965381246,29.91959524232658],[111.92363895107673,29.85639496555521],[112.12631391755326,29.707153428887608],[112.17003217994113,29.64904328072288],[112.36309533088479,29.5721745876871],[112.4439172709653,29.641369329730793],[112.64814253105294,29.626899928688744],[112.8861641787338,29.791773587281256],[112.94559207561377,29.70929800080208],[112.90848839702198,29.600803331408628],[112.92781538267377,29.49522838028554],[113.0081205588167,29.518095200932777],[113.14568322060416,29.47207733789884],[113.18624922072496,29.531737778775465],[113.41584761037882,29.764565945062316],[113.51951053268493,29.841667182094795],[113.53615034406323,29.685733547265443],[113.63469730024025,29.68482920970024],[113.72936852373834,29.437092393699004],[113.5877234227977,29.293793647259037],[113.64136355998028,29.22175670041139],[113.65490278503557,29.12403656743365],[113.77282840370788,29.125302639305346],[113.902381220417,29.066339830418826]]]}},{"type":"Feature","properties":{"id":18,"name":"四川"},"geometry":{"type":"Polygon","coordinates":[[[105.4985530948494,32.90739736629541],[105.56826460173005,32.73045726189309],[105.63327355273225,32.70746124913737],[105.81341759624502,32.76210907577317],[105.87548099235397,32.84471385346157],[106.08234174987189,32.873523464336444],[106.05650353411079,32.71355906809657],[106.22894778910916,32.591964423219565],[106.3639783062539,32.63867991824361],[106.60396365779667,32.67552521441709],[106.71258751839923,32.73782115272397],[107.06533084474273,32.708313909859044],[107.09623335158784,32.669246528304626],[107.06998172377752,32.52292470990747],[107.20217003791686,32.452773953455164],[107.28412885865998,32.452928982186705],[107.37053185376203,32.51982412448379],[107.44830488526219,32.522227077917364],[107.45962202403717,32.4086422799173],[107.65919640508997,32.388617662275294],[107.84352623874497,32.22816234051962],[107.96005659433638,32.15834747995228],[108.05178226114242,32.22661204690846],[108.2367322124216,32.2626563583043],[108.47940473823809,32.25027985323257],[108.51836876790429,32.19756989203688],[108.38897098172544,32.18428904940015],[108.41920169500219,32.10000478779068],[108.34473595629936,32.0735464544054],[108.26778974799845,31.972906603157213],[108.28696170491878,31.922160345823244],[108.50069542865106,31.790824693304927],[108.5161983575681,31.708271593359342],[108.4067993506095,31.566032213216033],[108.22308963367965,31.46789866818898],[108.19404747880816,31.330930283805543],[108.03312706905905,31.222228908837053],[108.00677208936037,31.038622544694675],[107.93168623303325,30.948783067384596],[107.92951582179768,30.872663683182395],[107.84988244012249,30.809618435142653],[107.73629764212251,30.883179837179767],[107.5075777534106,30.821994941113672],[107.45667646734512,30.760861720991613],[107.47760542165287,30.60950145083129],[107.37213382421663,30.49986989987596],[107.22873172408981,30.238154609247744],[107.032929722029,30.057855536104142],[106.77036176977981,30.03656484569106],[106.71729007427746,30.05927663850605],[106.61781294211352,30.268695379987776],[106.53234012299822,30.33765757893417],[106.38490726056165,30.263579412959558],[106.23902469263544,30.22024872509857],[106.12471642512287,30.342334296390675],[105.79171349468203,30.423362942046168],[105.70866946832126,30.274095566956845],[105.55720584537346,30.147591661525922],[105.73890018069875,30.032637437068047],[105.70996137861476,29.86750539785581],[105.55751590373592,29.80391754835614],[105.55146976072086,29.747616075321673],[105.41168501175383,29.703174343421267],[105.29107221880793,29.584783636755418],[105.31484337791954,29.46959686920013],[105.40517378074532,29.429961045965513],[105.42238203290447,29.33355866080359],[105.64459069240661,29.269660752941377],[105.70060794460096,29.223694565851503],[105.74530805891976,28.994767971564613],[105.87796146015324,28.920043850443392],[106.00844445194986,28.973399766785775],[106.26031538304858,28.869323432430434],[106.29803917836534,28.672436224751948],[106.38242679186294,28.572494005493894],[106.26868696513134,28.556629340471687],[106.18879520103764,28.584612128147143],[105.98441491131905,28.753542384773226],[105.89191409725777,28.60931346324574],[105.68319298686686,28.58344940816366],[105.62056115087643,28.482421983287963],[105.66722496995635,28.31829763442829],[105.846800571789,28.26915334754895],[105.90622846866887,28.150581772830577],[106.00896121588738,28.140246486885815],[106.10942020088152,28.17471466714815],[106.19933719255738,28.124252631553674],[106.21525353442308,28.056091417385005],[106.29896935435215,28.00043589949715],[106.34537479011442,27.83494212507904],[106.24760298119259,27.77523000735897],[106.10358076434073,27.788071601323338],[106.03919192916413,27.756807359272273],[105.87594608034726,27.745206000556436],[105.64691613237358,27.678129991106204],[105.52449466429726,27.774635728156312],[105.36078372568835,27.76001129838272],[105.29696333219198,27.721744899807277],[105.2281303235556,27.855793565021003],[105.28239057836248,28.000745957859692],[105.17190636578619,28.061672472406684],[105.05573774629994,28.088130804892785],[104.96618248893071,28.047797350567294],[104.9582759948413,27.95653676995596],[104.89740115803704,27.901113796064806],[104.70237430233226,27.88294953129588],[104.604757522142,27.845845851804626],[104.3753658389623,27.961678575405898],[104.3338179869105,28.0467379833712],[104.44461225784943,28.09988719323934],[104.3765027196248,28.282304998976485],[104.26849897664641,28.333800564244626],[104.25005049013811,28.530791123811298],[104.43996137881453,28.605360216201007],[104.41422651584111,28.640112616404167],[104.05678063361933,28.63047496244954],[103.83669070761016,28.604920965729974],[103.79524621014446,28.53117869743889],[103.88030561721052,28.32573904142359],[103.7089465678298,28.215874946471615],[103.66626183511562,28.263288071687157],[103.57179731719248,28.243185940578655],[103.45903934059311,28.13476878555099],[103.43464806475635,28.06815786409419],[103.5142297713868,27.971445421469014],[103.50854536267832,27.86452688230972],[103.41475263922297,27.742906399011076],[103.21812381396279,27.56687063217393],[103.12076541529166,27.412254746959007],[102.97741499200828,27.388896999896616],[102.88946170509365,27.29148692528139],[102.9138529809303,27.112298896177123],[102.87819624226279,27.031967882511765],[102.90134728375011,26.92473928499001],[102.97529625941479,26.831127427788545],[103.05792687372627,26.55724233676446],[102.99581180167326,26.485412096391144],[103.00325320776926,26.400352688425784],[102.87819624226279,26.3650576849642],[102.7202730651498,26.237623603546467],[102.60994388220433,26.26020620425288],[102.62648034079507,26.345136420109668],[102.56813764863352,26.378648586862766],[102.2520845888327,26.228864447835946],[102.1125582213848,26.08442881893484],[101.92156212798983,26.09887238245446],[101.84952518114216,26.034845282483758],[101.7756795591643,26.106520494125533],[101.76374230276502,26.17633535379352],[101.6766158390497,26.227701727852462],[101.59491539892662,26.208684801462397],[101.57998090989105,26.306921699277012],[101.64364627465585,26.34947723988273],[101.54416914339123,26.49497223597993],[101.41244591724524,26.569670517780168],[101.50287967285857,26.766428534249457],[101.37069135871923,26.774645086701383],[101.34242435110292,26.871047471863392],[101.1414547060698,27.04486115242028],[101.17282230000916,27.191053778708977],[101.00384036743901,27.197513332874053],[100.99174808140884,27.330812690153493],[100.94084679624262,27.434733994878002],[100.86694949742133,27.494652818173023],[100.87211714129302,27.561987210041764],[100.6609155622034,27.875094713150446],[100.53260298074292,27.816261095473237],[100.29592492109816,27.852615465231537],[100.20208051990011,27.898788356997102],[100.05883344940412,28.066142483388944],[100.04689619300484,28.18709117311917],[100.16203128461609,28.236261298420203],[100.14306603417009,28.341577867124812],[100.00095584523609,28.45619619389916],[99.93387983578583,28.569367580749287],[99.84561648960926,28.603809923489194],[99.82840823834948,28.672565415961145],[99.73234174997174,28.745015773958755],[99.70474653502453,28.844647934854265],[99.62867882676653,28.814623928051844],[99.53436933757484,28.680807806834792],[99.50289839084809,28.5793669699097],[99.39313764868348,28.54278005615464],[99.38864179927964,28.334317328182124],[99.41644371890254,28.25476146087277],[99.38151045064677,28.184533189155303],[99.27474694201783,28.277318224056813],[99.16255740799795,28.438161119440167],[99.16948205015649,28.602492173874708],[99.11770226404832,28.70871308014449],[99.0992537784391,28.85604258889441],[99.1210612327896,28.96466644949706],[99.10881391802786,29.223772081116635],[99.0625118350531,29.30828888582343],[99.04199629099605,29.562459418467398],[98.98675418515751,29.650903631797206],[99.005461053185,29.8200922708416],[99.05631066330642,29.91533193602001],[99.03408979690664,30.05532339146137],[98.98675418515751,30.144361883993753],[98.96070926292208,30.459975694222862],[98.90536380429614,30.663813381582287],[98.95430138470113,30.747865099194996],[98.77508751807454,30.90222260199147],[98.80304446822765,30.990976874583083],[98.62026492728461,31.187941595728063],[98.61137658126415,31.256180325161864],[98.68269005680071,31.315918281303652],[98.76780114071005,31.230367946923195],[98.88495161302654,31.354081326192244],[98.59215294839987,31.59882090955739],[98.55871829601256,31.677110704095668],[98.44549523321848,31.803614610425967],[98.42084557496327,31.8781837019163],[98.45298831615781,31.984094549823624],[98.30958621603105,32.12871104587808],[98.22018598829271,32.252191881150424],[98.2057682640941,32.355648097881414],[98.01415205307472,32.46450450338011],[97.7157206556837,32.544189560999484],[97.43067345641487,32.70032990230317],[97.36096194863501,32.89703624102975],[97.504260695075,33.04560598412883],[97.50053999202703,33.19435659438136],[97.61567508273885,33.32837942207263],[97.7242989442409,33.406126614251804],[97.53929731611834,33.45372060841933],[97.47738895143897,33.56224111623459],[97.3905208683434,33.61138540311384],[97.3835445502408,33.86987091710907],[97.61024905824746,33.93087494602193],[97.69567020141864,34.00523733193728],[97.74507286981708,33.86485830286841],[97.81907352142582,33.86418651019929],[98.03492597865096,33.95978790878502],[98.21181440620984,33.939453232780465],[98.30167972194164,33.84584137647835],[98.45794925265585,33.84010529182575],[98.64584476062714,33.676161811018716],[98.63328738840227,33.60771637600993],[98.7357100772582,33.4897649198152],[98.7729171077383,33.30272207346488],[98.8520854023194,33.17487457909857],[99.10064904241938,33.072451891141895],[99.22529259587657,32.99891632752647],[99.28937137179133,32.88714020375744],[99.50940962095723,32.83543793381361],[99.69854536327784,32.744616604572684],[99.7692903989327,32.92176341454987],[99.84096561057441,32.9570067411681],[100.04689619300484,32.93548350675843],[100.15862063993058,32.78226288552375],[100.11903649264002,32.67087433538231],[100.22316450383875,32.63689708153504],[100.25499718577157,32.72580638285831],[100.3994328146726,32.75838837272522],[100.4984965347872,32.669091497774446],[100.56092166520273,32.5633356803973],[100.47302005423205,32.48527842895632],[100.53120771676265,32.40339712257915],[100.60303795803532,32.451223659844004],[100.69708906480844,32.68573131005192],[100.90219282403956,32.63046336489239],[101.17080691930397,32.68834096906048],[101.23194013942583,32.857710476157564],[101.13142947758837,32.93835154908473],[101.16414065956377,33.128081569708655],[101.22000288302667,33.17061127369129],[101.44515709832143,33.235852768690336],[101.64364627465585,33.1277715113462],[101.72694868433427,33.26778880520919],[101.66514367064383,33.32039541271811],[101.69108524009175,33.42028595603202],[101.77753991113792,33.53004669909589],[101.88399336140452,33.54632477526815],[101.9232157743885,33.40638499577091],[101.83216190025149,33.26920990671178],[101.86368452382175,33.12262970589623],[102.00424441914458,33.21879954706148],[102.09938073063614,33.2222360301686],[102.13095503104978,33.28466116058408],[102.27874962779305,33.37775625294876],[102.4818380072183,33.46503774719426],[102.4818380072183,33.540149441043894],[102.35600589355715,33.60939585993103],[102.34313846207033,33.72517690668886],[102.17121097190886,33.9417528352252],[102.31936730295871,33.98735728620983],[102.44060021442834,34.059730129841626],[102.61764367071879,34.08350128805395],[102.59779992112948,34.16546010969634],[102.78181969642179,34.27418732398584],[102.93059614509599,34.295581367186315],[103.00056603439498,34.21398427985062],[103.12009362172324,34.16861237196338],[103.15239139164942,34.108512682414386],[103.1421077816488,33.96154490797116],[103.18417239763806,33.822096055788364],[103.35067386330815,33.75569183990646],[103.55861982644387,33.80687734591277],[103.52275638220124,33.714118150332354],[103.74512007043484,33.67603261980952],[104.0930058130678,33.668539536870156],[104.15630944172733,33.62402029150326],[104.17465457634756,33.49015249344279],[104.2928902533825,33.363571071847446],[104.28059126177726,33.272052109717094],[104.32823693188885,33.14035472289217],[104.40585493375818,33.06327932428141],[104.32126061378625,32.9527175973393],[104.28885949107269,32.8478919541503],[104.40569990412729,32.809367174055836],[104.55840376232374,32.68834096906048],[104.64542687415093,32.657877712686286],[104.8409704937933,32.63981679890611],[104.89833133312447,32.611834011230656],[105.03181155755732,32.63867991824361],[105.14679162043694,32.60834585217927],[105.2699882339698,32.641702989301535],[105.43524946529055,32.77355540575738],[105.38636355993032,32.82337148710451],[105.43090864461823,32.911479804549344],[105.4985530948494,32.90739736629541]]]}},{"type":"Feature","properties":{"id":19,"name":"云南"},"geometry":{"type":"Polygon","coordinates":[[[105.29696333219198,27.721744899807277],[105.19738284724059,27.39863800753801],[105.08255781489117,27.412513129377402],[104.87089114780821,27.30975454373717],[104.78340294798767,27.332207953234473],[104.59421552882361,27.31378530514769],[104.44368208186262,27.347219957535003],[104.34441165617295,27.441193549043078],[104.17434451708573,27.271513984482795],[103.98112633741056,27.399516505782117],[103.9113114768432,27.390369778242643],[103.69540734277467,27.151702175415068],[103.7008850441095,27.052431748826137],[103.77829634040387,26.955874334932616],[103.77829634040387,26.88001333314878],[103.71731814991267,26.798958849071568],[103.77509240129325,26.731701972468073],[103.75783247319004,26.629434312343676],[103.82924930241342,26.547113756394765],[104.02040042543922,26.51419586794495],[104.15336388593465,26.65124176669417],[104.21806277857439,26.626617946860705],[104.35851932200904,26.647831122008654],[104.55943729019873,26.584708360502418],[104.67550255689741,26.379268704487117],[104.54517459473169,26.270412298988447],[104.49897586544387,26.030788683550924],[104.39293582632729,25.94787384750009],[104.42058271721862,25.856923326150564],[104.30622277196329,25.664764512772024],[104.42244306829298,25.579265855235008],[104.43267500234941,25.506815497237426],[104.55354617681462,25.48454295489347],[104.56584516841974,25.38119009005061],[104.66888797400088,25.296828314974732],[104.71973758322287,25.210942083810124],[104.68904178285203,25.10125885691076],[104.70702518136704,25.017310492085528],[104.54563968272521,24.81342112878204],[104.53985192302781,24.74177175556207],[104.49463504387222,24.69820852280523],[104.50186974529248,24.57819000906173],[104.59917646712029,24.40251597743037],[104.66702762202715,24.339754950230855],[104.72872928293015,24.36419790291086],[104.7526554707735,24.46832591410964],[104.96106652190258,24.416416937691565],[105.06080203738412,24.430679633158547],[105.17624718555913,24.309911811481044],[105.16994266192427,24.1673623720759],[105.25303836512865,24.08550690412045],[105.32026940331025,24.118140570830803],[105.44718672079063,24.037602850691115],[105.5320910991249,24.126305447338495],[105.78799279163411,24.020652980950274],[105.87222537640008,24.024709580782485],[105.9707723325771,24.087728990400592],[106.15742760619901,23.973730781250595],[106.19375613843516,23.86939606447686],[106.1521566104393,23.750411077709117],[106.12812706890912,23.54065644034256],[105.983019647339,23.46903290554411],[105.84804080613827,23.519391588351198],[105.52132535803946,23.16314776222967],[105.43085616100012,23.267805685000013],[105.33225752800013,23.31795766200014],[105.21753584900017,23.265351055000053],[105.06105961100008,23.232459005000123],[104.9452010500001,23.159827779000068],[104.87006351800005,23.163548482000095],[104.79792321800005,23.085568746],[104.82701704900006,22.95428477000013],[104.72821171100003,22.839098002000128],[104.66273767200005,22.810934346000096],[104.55354537000005,22.836049093000014],[104.34017338100011,22.686368306000134],[104.24948124200006,22.72832957000014],[104.21325606300013,22.825016175000115],[104.07331628500009,22.782667339000113],[104.02381026300003,22.71918284100005],[103.9853629970001,22.52715321900007],[103.86681726100011,22.57541900700008],[103.64693404200005,22.799048768000148],[103.59003829000017,22.76801707000004],[103.55091923000003,22.640789694000148],[103.47314620000003,22.59164540600011],[103.4017293710001,22.737838033000116],[103.30964196800011,22.787938334000046],[103.25248783400008,22.678565165000123],[103.14174524000009,22.607044983000094],[103.14200362100013,22.53779856400007],[102.9890930580001,22.43759796200004],[102.8936983640001,22.48736236600007],[102.8451741940001,22.585237529000068],[102.69272871900006,22.670503642000114],[102.53578739400012,22.695825094000014],[102.44271814000012,22.765174866000052],[102.37688236500009,22.61557159500009],[102.25254886900007,22.495475566000067],[102.2180290120001,22.41067454000003],[102.01457889800014,22.446072896000146],[101.81779504400004,22.40633372000005],[101.7131502680001,22.491548157000096],[101.65454919500007,22.446124573000077],[101.60612837700012,22.284842427000058],[101.51822676600005,22.228205058000043],[101.60680017100003,21.967600810000135],[101.67366947500011,21.931375631],[101.75154585800004,21.806370341000047],[101.72854984500009,21.7175385540001],[101.79355879700006,21.58824412100006],[101.73475101700006,21.554396057000076],[101.72250370300009,21.304230448000112],[101.82373783400016,21.23446726500015],[101.75599003200006,21.14325836200007],[101.68829390500014,21.14584218300007],[101.58395918800011,21.224390360000115],[101.4951274010001,21.242838847000115],[101.27529585800005,21.17410919200006],[101.20899499500013,21.245526021000046],[101.23478153500014,21.363658345000147],[101.17142622900013,21.403397522000148],[101.17385502100007,21.61191192600009],[101.06869348200013,21.762031962000094],[100.79703047700008,21.626122946000066],[100.70396122300014,21.516413879000055],[100.62174401800007,21.46907826800009],[100.45668949400005,21.455022278000087],[100.32651656100006,21.5242686980001],[100.18714522300007,21.427892151],[100.08999353000007,21.528919577000067],[100.11572839400009,21.62948191400008],[100.08234541900003,21.68446563800012],[99.95026045800012,21.721155904000085],[99.92018477400006,21.85200063100004],[99.96566003400011,21.9630016080001],[99.94240564000012,22.045528869000123],[99.82101770100013,22.01777862600008],[99.73916223200007,22.066767884000086],[99.43861210200009,22.124232076000112],[99.36492150900011,22.098858948000014],[99.16638065600006,22.132086894000054],[99.16638065600006,22.204640605000066],[99.28275598100015,22.41191477500007],[99.35779016200013,22.495475566000067],[99.35499963400008,22.608543600000104],[99.30787072800007,22.71959625200006],[99.41442753200005,22.856900533000072],[99.42993046000004,22.93674062200006],[99.53462691200008,22.94932383200009],[99.47819624900006,23.065750834000113],[99.35096887200018,23.119261780000073],[99.21661014900008,23.057379252000146],[99.0749133710001,23.101665955000072],[99.02644087800013,23.16044789700004],[98.85900923700012,23.179387309000106],[98.91068566900009,23.297597148000108],[98.87554569500003,23.446425273000045],[98.78087447100012,23.53285410600003],[98.8573555910001,23.60434845000006],[98.77787723800009,23.769299621000073],[98.66367232300013,23.79694651300008],[98.66325891200012,23.96954579700008],[98.85621871000006,24.083802388000038],[98.86696740800011,24.14325612400009],[98.7161755780001,24.121345317000134],[98.58522749900004,24.07571502700003],[98.50326867700005,24.12126780200012],[98.33066939300005,24.099486186000092],[98.18153120900013,24.1186581420001],[97.88997277800013,24.022617493000013],[97.63706831900004,23.863557435000075],[97.51645552600013,23.942829081000127],[97.70765832500018,24.125298564000104],[97.71840702300011,24.27766652400001],[97.6398588460001,24.4392845670001],[97.51955611200009,24.430783794],[97.53609257000011,24.745028178000098],[97.66394006400003,24.829777527000118],[97.74848270700011,24.826470235000016],[97.70331750500003,24.9604155480001],[97.73752730300009,25.090510967000057],[97.82362023900009,25.261611633000143],[97.88893925000013,25.205646057000138],[98.04489872300013,25.31194447900012],[98.10835738100008,25.38889068600014],[98.09946903500008,25.49332875600001],[98.15021529100005,25.61306305000005],[98.2766158450001,25.55244659400006],[98.3326330970001,25.566967672000118],[98.46130741400009,25.794654033000086],[98.50946984900008,25.83806223600007],[98.61003218700006,25.800596822000102],[98.69240441900007,25.878989971000095],[98.5824369720001,25.982291159000056],[98.54553999900008,26.10564280300008],[98.7055302330001,26.174940898000102],[98.65778120900006,26.311625061000143],[98.7172091060001,26.408725077000042],[98.72113651600006,26.5388980110001],[98.7555530190001,26.6250426230001],[98.74924849500019,26.771441956000075],[98.71452193200008,26.862030741000098],[98.67256066900006,27.175603332000094],[98.70418664600004,27.304174296000042],[98.67442102100006,27.386598206000116],[98.67927860500009,27.577335918000045],[98.40001916500012,27.67572784400008],[98.38327600100007,27.555786845000085],[98.29470259600009,27.536614889000077],[98.20437219300004,27.727300924000104],[98.17667362500003,27.898117371000097],[98.10711714700011,27.97307403600007],[98.11500227621707,28.14388835708101],[98.23015953993087,28.20287832287633],[98.29976769402384,28.354807033817593],[98.40999352418174,28.250601508253055],[98.48988528827545,28.248069362710936],[98.5758231953842,28.317548326494006],[98.64041873613576,28.42413096796986],[98.58920739080844,28.670291652837506],[98.67814253055332,28.757056383145596],[98.63871341289365,28.878651028022517],[98.6648100119724,28.97417491314178],[98.7850093928692,29.000245672899467],[98.87347944462061,28.811807563468335],[99.00628787638436,29.07316111889051],[98.99016482984302,29.201990465187862],[99.10881391802786,29.223772081116635],[99.1210612327896,28.96466644949706],[99.0992537784391,28.85604258889441],[99.11770226404832,28.70871308014449],[99.16948205015649,28.602492173874708],[99.16255740799795,28.438161119440167],[99.27474694201783,28.277318224056813],[99.38151045064677,28.184533189155303],[99.41644371890254,28.25476146087277],[99.38864179927964,28.334317328182124],[99.39313764868348,28.54278005615464],[99.50289839084809,28.5793669699097],[99.53436933757484,28.680807806834792],[99.62867882676653,28.814623928051844],[99.70474653502453,28.844647934854265],[99.73234174997174,28.745015773958755],[99.82840823834948,28.672565415961145],[99.84561648960926,28.603809923489194],[99.93387983578583,28.569367580749287],[100.00095584523609,28.45619619389916],[100.14306603417009,28.341577867124812],[100.16203128461609,28.236261298420203],[100.04689619300484,28.18709117311917],[100.05883344940412,28.066142483388944],[100.20208051990011,27.898788356997102],[100.29592492109816,27.852615465231537],[100.53260298074292,27.816261095473237],[100.6609155622034,27.875094713150446],[100.87211714129302,27.561987210041764],[100.86694949742133,27.494652818173023],[100.94084679624262,27.434733994878002],[100.99174808140884,27.330812690153493],[101.00384036743901,27.197513332874053],[101.17282230000916,27.191053778708977],[101.1414547060698,27.04486115242028],[101.34242435110292,26.871047471863392],[101.37069135871923,26.774645086701383],[101.50287967285857,26.766428534249457],[101.41244591724524,26.569670517780168],[101.54416914339123,26.49497223597993],[101.64364627465585,26.34947723988273],[101.57998090989105,26.306921699277012],[101.59491539892662,26.208684801462397],[101.6766158390497,26.227701727852462],[101.76374230276502,26.17633535379352],[101.7756795591643,26.106520494125533],[101.84952518114216,26.034845282483758],[101.92156212798983,26.09887238245446],[102.1125582213848,26.08442881893484],[102.2520845888327,26.228864447835946],[102.56813764863352,26.378648586862766],[102.62648034079507,26.345136420109668],[102.60994388220433,26.26020620425288],[102.7202730651498,26.237623603546467],[102.87819624226279,26.3650576849642],[103.00325320776926,26.400352688425784],[102.99581180167326,26.485412096391144],[103.05792687372627,26.55724233676446],[102.97529625941479,26.831127427788545],[102.90134728375011,26.92473928499001],[102.87819624226279,27.031967882511765],[102.9138529809303,27.112298896177123],[102.88946170509365,27.29148692528139],[102.97741499200828,27.388896999896616],[103.12076541529166,27.412254746959007],[103.21812381396279,27.56687063217393],[103.41475263922297,27.742906399011076],[103.50854536267832,27.86452688230972],[103.5142297713868,27.971445421469014],[103.43464806475635,28.06815786409419],[103.45903934059311,28.13476878555099],[103.57179731719248,28.243185940578655],[103.66626183511562,28.263288071687157],[103.7089465678298,28.215874946471615],[103.88030561721052,28.32573904142359],[103.79524621014446,28.53117869743889],[103.83669070761016,28.604920965729974],[104.05678063361933,28.63047496244954],[104.41422651584111,28.640112616404167],[104.43996137881453,28.605360216201007],[104.25005049013811,28.530791123811298],[104.26849897664641,28.333800564244626],[104.3765027196248,28.282304998976485],[104.44461225784943,28.09988719323934],[104.3338179869105,28.0467379833712],[104.3753658389623,27.961678575405898],[104.604757522142,27.845845851804626],[104.70237430233226,27.88294953129588],[104.89740115803704,27.901113796064806],[104.9582759948413,27.95653676995596],[104.96618248893071,28.047797350567294],[105.05573774629994,28.088130804892785],[105.17190636578619,28.061672472406684],[105.28239057836248,28.000745957859692],[105.2281303235556,27.855793565021003],[105.29696333219198,27.721744899807277]]]}},{"type":"Feature","properties":{"id":20,"name":"河北"},"geometry":{"type":"MultiPolygon","coordinates":[[[[118.64873628100008,39.04465116700004],[118.51430835400004,38.919445031000066],[118.4706979660001,38.970550754000044],[118.64873628100008,39.04465116700004]]],[[[116.87563642807868,39.686466783215565],[116.92219689257263,39.77359324783018],[116.78143029167472,39.88965851542821],[116.74422326119463,39.95900828710273],[116.82938602104804,40.03667796491612],[116.98767093336699,40.03435252494904],[117.23907677557281,40.0926177027448],[117.14750613839749,39.94800120669046],[117.20290327386704,39.76160431638621],[117.15277713415753,39.61840892183437],[116.87563642807868,39.686466783215565]]],[[[119.23099653476226,41.27339834195993],[119.1635071150613,41.17640167939405],[118.96475955630865,41.074702460050446],[118.85468875488232,40.82060944357107],[119.06790571467707,40.651343289261376],[119.18975874197258,40.620104884732655],[119.29362837075269,40.53070465789378],[119.56368940594132,40.5400580919075],[119.58012251174455,40.37340159840505],[119.63474450085812,40.20907054307125],[119.74259321510476,40.20519481129165],[119.73804568885737,40.09951650738088],[119.85020852377716,39.986320477390166],[119.53559238800017,39.89082558800004],[119.33961022200026,39.715562242000146],[119.26198127500027,39.535084241000106],[119.30507538100028,39.432977787000226],[119.18480422500033,39.354814110000206],[119.01563561300014,39.18976471600013],[118.94198652400019,39.15912506700013],[118.8589787120003,39.20750560100004],[118.7959905920003,39.151777127000116],[118.61935987000015,39.16104245200006],[118.344269586,39.030708618000176],[118.23528462200011,39.053097566000105],[118.14052807300016,39.172835107000225],[118.00956331411487,39.21855181203543],[118.00791873556125,39.342663478836585],[117.89712446462227,39.3986807319302],[117.89278364484949,39.56461375592016],[117.63088748616872,39.57587921785165],[117.62251590408562,39.66641632715175],[117.53311567634745,39.75041636792113],[117.50128299441474,39.98872223644207],[117.76555626810728,39.96407257728771],[117.74974327992857,40.06347219508575],[117.4510535010183,40.22669220638022],[117.35679568867022,40.25702627244448],[117.25054894397863,40.33782237410338],[117.2379398949102,40.4501927761757],[117.1841447289961,40.49727000640564],[117.24310753788268,40.570159613974965],[117.41177941298974,40.597367255294614],[117.42852257715526,40.66904246693639],[117.19918256991969,40.690023098087465],[117.0580025569725,40.67720734344428],[116.91041466670356,40.74921845097086],[116.67580366370811,40.94013703089922],[116.65265262312016,41.0310100369837],[116.43819542897586,40.8997260613088],[116.45886600086527,40.791567287800234],[116.29143436100696,40.739890855378746],[116.20730512902855,40.75038117095434],[116.13035892072776,40.657983710579884],[115.99470828685799,40.59597199221372],[115.87445722911787,40.610234686781354],[115.72816124914243,40.539593003914035],[115.9452022638734,40.29371653898704],[115.81983524000441,40.151890570893215],[115.57762780218127,40.09631256827052],[115.42709435432107,39.96257396141925],[115.4964441259956,39.92363576927548],[115.51091352703781,39.83849884694433],[115.43732628837745,39.74930532478098],[115.46342288565768,39.643213608821014],[115.61845218292183,39.603732815217285],[115.75591149282116,39.50895823803222],[115.94540897034784,39.575388292335845],[116.21040571535138,39.57190013328457],[116.24978315616778,39.50580597576527],[116.38662234934213,39.44214061100047],[116.42827355418126,39.52141225836911],[116.60438683538416,39.611174221313405],[116.79341922401795,39.60231171281541],[116.79124881368182,39.49293854427839],[116.85346723762302,39.34142324538661],[116.82613040599335,39.21654714613396],[116.89181115056431,39.10252309856227],[116.71218387278759,39.01183096053052],[116.6806095723739,38.91594534020541],[116.71084028475138,38.82052480697428],[116.88075239510715,38.69939525009079],[117.02105390801142,38.708231920167094],[117.09489952998928,38.61175202153868],[117.27132286955475,38.559248765917886],[117.54354902418424,38.62132396011637],[117.71608248500002,38.378510932000154],[117.83715902947193,38.27090758202854],[117.77981896357426,38.16444082268592],[117.68731815041247,38.07266347903635],[117.56866906132825,38.04891815924566],[117.42061608306585,37.846682441441544],[116.83951460231702,37.83365998032383],[116.74391320193274,37.79929515194979],[116.60872765515717,37.63940827097497],[116.4106002140287,37.4846373561291],[116.35008711063165,37.620908108522514],[116.21991417899619,37.46236481378517],[116.25557091676444,37.38733063430129],[115.97501956600024,37.32170156477537],[115.85182295066886,37.057221585507904],[115.62641035385491,36.793568426741615],[115.47784061075572,36.753570868300955],[115.34162153520583,36.5997559678637],[115.27573408416072,36.47420807504275],[115.34332685844777,36.352148342172285],[115.44885013182812,36.249157213434756],[115.46032230023388,36.15787079530108],[115.34968305892608,36.08219065977113],[115.24524498936495,36.16135895435235],[115.10608035712289,36.18456167358241],[115.0338367047001,36.10094920554144],[114.93069054633168,36.05655915048436],[114.89317345569054,36.11957855920329],[114.70724165158106,36.152780666694554],[114.54838830027995,36.13903473606436],[114.34307783367512,36.24471303997484],[114.15626753132153,36.24667674383676],[114.06314659963584,36.277062485845164],[113.98930097855737,36.35902130838673],[113.80827843590112,36.33938426437231],[113.72104861939818,36.35586904611952],[113.53511681528892,36.48338064190321],[113.5473641300506,36.54851878501387],[113.45873904776897,36.635800279259456],[113.45393314000256,36.73662099945966],[113.60777387886151,36.769073798117375],[113.67924238492822,36.871599839760904],[113.77603234281844,36.89061676705023],[113.7543282412554,37.11494415914558],[113.8576811060982,37.20894358997484],[113.88672326096969,37.29612173143286],[114.053121372953,37.50057953551726],[114.1004053078587,37.69819021270823],[114.02635298120526,37.75077098179543],[113.89147749189294,37.94946686550355],[113.790656772592,38.15286530239189],[113.55790612157023,38.24342825011371],[113.51801191591721,38.37760610653663],[113.53449669766451,38.537286281936474],[113.60896243726677,38.644463201715524],[113.66901045087172,38.66027619079358],[113.82512495285437,38.81026703539547],[113.76021935374018,38.909201565200135],[113.85334028542593,39.07229238528532],[114.01271040156382,39.11882701315622],[114.08908816908377,39.074359442834094],[114.21631554582575,39.069036770230895],[114.3939791197406,39.169340724694734],[114.42033410033844,39.29997874612232],[114.54094689328451,39.53123078127564],[114.40214399624841,39.65845815711822],[114.38281701059674,39.86105561012829],[114.08598758276082,39.91691783269192],[113.93591922379323,40.01572317218668],[113.99596723829745,40.13181427730706],[114.08536746603579,40.18501516401872],[114.45030643119696,40.293768214931276],[114.43366661981861,40.360534166018965],[114.28576867118727,40.37856924137745],[114.25755333861571,40.54997996670224],[114.15172000507414,40.67358999318361],[114.15409712098545,40.7425780305517],[114.06014936699978,40.81365896299084],[114.01860151584731,40.9236005723086],[113.90796227364024,41.028141995556666],[113.88067711795463,41.09930044236148],[113.96382449800228,41.15335398979491],[113.98490848194086,41.240893867358096],[113.90889244962705,41.2940172388046],[113.92796105375965,41.41835073479854],[114.0272831562927,41.53128957855125],[114.19709191296135,41.593585516858155],[114.21352501786532,41.76690827099998],[114.25569298664209,41.860080877730354],[114.41971398271414,41.956302394839724],[114.48131229082958,42.0752615422864],[114.59634402875395,42.14127818544],[114.75194176589969,42.13985708303804],[114.80485843267058,42.178407701554136],[114.9203035826443,41.93687205729964],[114.87581017479982,41.81166006126284],[114.88898766464905,41.61004446108302],[115.09739871577824,41.61616811846392],[115.22586632686955,41.58583405239966],[115.347357618959,41.624074612553414],[115.33976118413125,41.720838731122626],[115.5275016615725,41.77233429639068],[115.85879926967067,41.92746694644251],[115.93734744662743,41.92746694644251],[116.03785810756563,41.80062714332806],[116.20715010029687,41.88400706647306],[116.37752729684735,42.009684150503205],[116.46610070228564,41.94762075529371],[116.59973595634938,41.92372040497281],[116.8581181166578,42.01950267251044],[116.87889204313319,42.220213935125],[116.82659549398682,42.30816722293903],[116.88710859558512,42.39537120191949],[117.05593550032319,42.46283478499731],[117.24388268423849,42.48226512343669],[117.41239952971455,42.45808055317505],[117.45043338429332,42.54928945604368],[117.5936287779457,42.55158905668958],[117.7426119321949,42.591095688715086],[117.80048953726225,42.56882314727051],[118.02424848767754,42.38263296254115],[118.04021650638663,42.288762722022],[117.98931522032115,42.22160919910527],[118.08600182542386,42.18166331570947],[118.13390587795413,42.02190562594393],[118.26785119038016,42.073866279205504],[118.3221631211311,41.8635431992592],[118.27823815316833,41.75269725237635],[118.15938235940837,41.719133408779925],[118.244390089631,41.59234528340809],[118.31363650941739,41.569555976227434],[118.37027387923615,41.313964342080766],[118.47843265184542,41.35509878208313],[119.15265506427988,41.31220734289451],[119.23099653476226,41.27339834195993]]]]}},{"type":"Feature","properties":{"id":21,"name":"河南"},"geometry":{"type":"Polygon","coordinates":[[[115.46032230023388,36.15787079530108],[115.42399376799801,35.99459910716308],[115.33387006984788,35.93114044887261],[115.3176436714183,35.79151072773803],[115.4163973331705,35.82375682171994],[115.46822879432352,35.91292450636098],[115.73870324066206,35.96860586177115],[115.8287235860247,36.031030992186516],[115.92690880699593,36.02198761743455],[116.07728722522529,36.10311961497834],[116.03367231742357,35.965815334710015],[115.96571780793067,35.985917466717694],[115.76133751821192,35.849181627230394],[115.65498742073294,35.74634552722432],[115.50424726819688,35.7228327505311],[115.39505496591403,35.61575918174091],[115.34503217989129,35.49625743283437],[115.22653812133734,35.416236477531555],[115.06835656090664,35.38011465087055],[114.941749301789,35.21883250591537],[114.86428632955045,35.18870514632556],[114.83421064680397,35.01618337696124],[114.99776655488267,35.007785956456786],[115.1744999528106,34.9441722685354],[115.21604780486234,34.83572927508601],[115.3176436714183,34.84283478439778],[115.42926476375794,34.77971202199228],[115.43577599476646,34.67571320200281],[115.54171268109542,34.57752798103161],[115.7067672059419,34.60026561136891],[115.81642459531884,34.57143016207232],[116.04374922094985,34.60021393542485],[116.15128787593477,34.566727607093384],[116.15671390222474,34.447303372552625],[116.40098839669713,34.2750141462858],[116.55209028533835,34.28684804899822],[116.57508629809416,34.19212514955598],[116.54294355689962,34.12091502500846],[116.64118045471412,33.95322500273164],[116.44532677581003,33.845014553279015],[116.42067711755487,33.79083181373721],[116.18203535404831,33.71832977979548],[116.07961266519226,33.778351955878094],[115.97067874622718,33.90480418626424],[115.96137698815744,34.000147203330755],[115.84112593041732,34.006916815858375],[115.73296715690867,34.06556956638235],[115.65364383269673,34.04841299106664],[115.56134972510972,33.898137926524015],[115.62992435132782,33.83876170468892],[115.57354536302813,33.750188300149915],[115.63473025909423,33.5918258734653],[115.44259728413732,33.548081773555],[115.34642744387145,33.45304881395157],[115.3156799657578,33.373983873057256],[115.3453422382538,33.25060639147176],[115.25098107311806,33.12064016451197],[115.1428222996094,33.0842599554326],[114.96918948800442,33.12374074993568],[114.88655887279367,33.08340729381155],[114.92521284409753,32.95824697551757],[115.18473188686698,32.859054063294394],[115.1993046406966,32.59147349680447],[115.36673628055485,32.55951162456185],[115.56476036979518,32.40244110817062],[115.64661583865,32.40244110817062],[115.69384809761158,32.49181549748724],[115.79006961472095,32.470705675126794],[115.8884615421664,32.39386282051271],[115.92814904224451,32.02458303557859],[115.90132897275384,31.794493720408838],[115.6629455907663,31.78395172798983],[115.53153242388225,31.736383572244108],[115.38973229420992,31.511746120886755],[115.37402265791923,31.417539985382007],[115.28622439973623,31.395138250929477],[115.21852827356088,31.44748647691938],[115.21346398337607,31.545594184424004],[115.12855960504169,31.5945317648291],[114.99885175960094,31.477613837408654],[114.76656619657263,31.49048126889548],[114.63820193916808,31.56802175549967],[114.54787153544294,31.572879340109523],[114.55567467674484,31.737675483436874],[114.36183637944538,31.73426483785198],[114.26737186062286,31.808730577454213],[114.14396854061556,31.847539578388876],[114.08547081882318,31.78379669925829],[113.97198937361065,31.74656382945713],[113.95958703011729,31.831829942098096],[113.86171186660931,31.862706611420947],[113.79437747563998,31.97251902952962],[113.75236453739342,32.13759939189842],[113.7816650737841,32.19371999777971],[113.78275027940191,32.359368800929474],[113.72921349500677,32.4192617858028],[113.61640384336266,32.38567210558321],[113.52767540919274,32.296685288994894],[113.4359497423867,32.28875295738308],[113.18299360567028,32.41331899737389],[113.06568810372312,32.41737559720602],[112.75087527917071,32.349782822918996],[112.53393761632799,32.37675792114115],[112.28578738827736,32.350635484539936],[112.14460737533022,32.39463796596934],[112.0533467956181,32.45484101010456],[111.77925499901903,32.52036672594363],[111.71119713763773,32.600232652514904],[111.53162153490598,32.61108470329637],[111.50743696464417,32.68206228294801],[111.36331139500481,32.824766751084695],[111.21014244971428,32.93021251099859],[111.21634362236023,32.97648875645089],[111.10880496557667,33.14802867298479],[111.00266157367264,33.20753408512991],[110.97460127163134,33.266471056494055],[111.01558068200296,33.37444896105072],[111.01061974460555,33.50015188170403],[110.96824507025383,33.59882802998959],[110.79213178905076,33.70512645152451],[110.7492403498623,33.80279490855821],[110.5937976423474,33.87974111595966],[110.64237348844574,33.980303452842094],[110.5936426127164,34.06533702238568],[110.60666507383405,34.17049856235883],[110.43380740768566,34.2613974068648],[110.47866255073609,34.32638052034474],[110.32766401578164,34.47980784805375],[110.33603559786457,34.615846056450295],[110.5305456887325,34.583677476834055],[110.88380577991279,34.66610138646979],[111.02570926327195,34.747491767331184],[111.33127200659777,34.84092275648001],[111.39426557779416,34.823275254749234],[111.55766645714124,34.8634020052983],[111.62221032104952,34.94727285395902],[111.8294328146726,35.08256175442145],[112.06109826097594,35.108477485447594],[112.05846276264634,35.23449046536271],[112.52597944539508,35.22027944583971],[112.68245568168436,35.31117829034588],[112.80761600087772,35.2419835483021],[112.90275231326859,35.240588284321916],[113.01979943189832,35.32859324807998],[113.12956017496208,35.35228689192655],[113.32841108560314,35.46300364849958],[113.49129520101269,35.52548045485909],[113.60994428919759,35.64606741028271],[113.58472619016158,35.68686595350093],[113.62756595340602,35.95323212316393],[113.68714887901751,36.05573232728503],[113.67288618355053,36.22145864480055],[113.72104861939818,36.35586904611952],[113.80827843590112,36.33938426437231],[113.98930097855737,36.35902130838673],[114.06314659963584,36.277062485845164],[114.15626753132153,36.24667674383676],[114.34307783367512,36.24471303997484],[114.54838830027995,36.13903473606436],[114.70724165158106,36.152780666694554],[114.89317345569054,36.11957855920329],[114.93069054633168,36.05655915048436],[115.0338367047001,36.10094920554144],[115.10608035712289,36.18456167358241],[115.24524498936495,36.16135895435235],[115.34968305892608,36.08219065977113],[115.46032230023388,36.15787079530108]]]}},{"type":"Feature","properties":{"id":22,"name":"辽宁"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.35254967500032,39.48240794500012],[121.44239342500032,39.462876695000034],[121.40349368600016,39.37059153900009],[121.29615319100009,39.39142487200007],[121.35254967500032,39.48240794500012]]],[[[125.70408969199298,40.859194624916114],[125.56006677300007,40.77833892900014],[125.53309167500026,40.72180491200018],[125.36359297700028,40.646719055000176],[125.02511234500014,40.534374492000154],[125.02630090400015,40.45737660700013],[124.89550785400013,40.48362823500017],[124.71246993000011,40.31030548100017],[124.6426033940001,40.294285787000035],[124.35824629000024,40.08905670800013],[124.35230553500014,39.99896881700016],[124.20215905000009,39.87860748900013],[123.98568769600024,39.810248114000046],[123.6225692070002,39.87173086100012],[123.5914005870003,39.78432851800005],[123.41041100400003,39.796616929000095],[123.26351972700002,39.76764557500019],[123.26587975400025,39.70107656500011],[123.17432701900032,39.66575755400018],[123.00912519600024,39.68048737200007],[122.63656660200002,39.508449611000174],[122.58790123800031,39.46698639500019],[122.39633222700002,39.41103750200014],[122.11500084700026,39.200751044000185],[122.1274520190002,39.1419945330002],[121.8115340500002,38.97284577000005],[121.77247155000015,39.02195872600018],[121.64926191500007,38.99445221600013],[121.6547957690002,38.85785553600007],[121.48495527400019,38.80988190300016],[121.34473717500032,38.81464264500005],[121.15308678500003,38.72760651200019],[121.09042402400019,38.89907461100012],[121.67408287900014,39.08803945500017],[121.60165449300018,39.22125885600016],[121.73609459700026,39.31175364800012],[121.7177840500002,39.37148672100017],[121.54892011800018,39.36188385600019],[121.49195397200026,39.38898346600013],[121.4360457690002,39.50861237200016],[121.30616295700008,39.501776434000135],[121.30616295700008,39.59796784100007],[121.44980538500022,39.615098025000094],[121.50684655000032,39.69432200700018],[121.45728600400003,39.748480536000045],[121.53589928500003,39.86176178600013],[121.70712324300018,39.926947333000044],[121.7744246750002,39.92084381700005],[121.99566779300005,40.123895275000194],[121.99146569100026,40.186997789000145],[122.09164569300026,40.227207388000096],[122.10611612000002,40.31012281700015],[122.21102949300018,40.38060130400015],[122.30184980600006,40.50234609600017],[122.13758565700005,40.62402028600022],[122.04908287900014,40.746079820000176],[121.85108483200008,40.83226146000004],[121.57504316500024,40.84149811400019],[121.3613387380002,40.93964264500016],[121.29932701900015,40.899603583000044],[121.17579186300031,40.92230866100019],[120.99097741000003,40.83128489800015],[120.94019490100015,40.69124623900012],[120.82532081500017,40.67403348000013],[120.79843183700018,40.59967682500016],[120.62094160200024,40.474432684000135],[120.50175764500011,40.32690995200011],[120.5048934250002,40.24909088700008],[120.43604576900032,40.19448476800014],[119.95027692000019,40.05650213300004],[119.85020852377716,39.986320477390166],[119.73804568885737,40.09951650738088],[119.74259321510476,40.20519481129165],[119.63474450085812,40.20907054307125],[119.58012251174455,40.37340159840505],[119.56368940594132,40.5400580919075],[119.29362837075269,40.53070465789378],[119.18975874197258,40.620104884732655],[119.06790571467707,40.651343289261376],[118.85468875488232,40.82060944357107],[118.96475955630865,41.074702460050446],[119.1635071150613,41.17640167939405],[119.23099653476226,41.27339834195993],[119.36163455618976,41.37499420851594],[119.38974653507455,41.472559311862796],[119.31559085473418,41.657819322403896],[119.29864098499354,41.777346909732245],[119.32174034963742,41.965397447334425],[119.36587202407475,42.10047964132244],[119.24525923112867,42.19194692571017],[119.33574466358539,42.28940867806807],[119.56275923085389,42.371832586804544],[119.62942182825486,42.25054800118926],[119.82145145132336,42.20861257640928],[119.80822228373131,42.12022003812433],[119.89188642771649,41.99945221644663],[119.96015099467274,41.97175364781273],[120.03032759044606,41.860597643466605],[120.02640018092359,41.73383535381865],[120.14076012617909,41.789284166131324],[120.34017947760083,41.96581085938362],[120.46880211832308,42.03800283496301],[120.50916141196956,42.14869375311423],[120.62786217699795,42.16037262619574],[120.91259931880359,42.29656586422328],[121.03424563962454,42.26010814077813],[121.36885053872129,42.49999013953342],[121.54444705598678,42.53523346615157],[121.64609459758765,42.45358470287181],[121.72366092261348,42.45766714112574],[121.87776004389093,42.539574285924516],[121.91827436716835,42.6465961778714],[122.04503665591699,42.720855210999275],[122.2993880557143,42.63646759750168],[122.4256852555701,42.72204376940448],[122.36687747631458,42.79909332869414],[122.47637983606069,42.84963288045313],[122.72794070879667,42.74100901985048],[122.8927885280682,42.74493642847341],[123.13127526284313,42.826378486178214],[123.1818664896469,42.94409739837627],[123.35441409743271,43.01231028938838],[123.61196943634047,43.08135000270045],[123.69625369705051,43.353478095437765],[123.80653120315253,43.45422130037281],[124.00641564256796,43.31012156825588],[124.28185102810255,43.22599233717659],[124.29580366430775,43.15656505023685],[124.41889692595248,43.081866767537406],[124.37590213397641,42.9855677351629],[124.51956261562225,42.87167287880038],[124.76569746296764,43.105586248906405],[124.88842899030573,43.08672435214717],[124.86031701142088,42.88769257345359],[124.94212080343254,42.80369253178506],[125.0189119812029,42.646854560289796],[125.09575483581716,42.576677965415854],[125.10195600756373,42.4938664821525],[125.20871951709205,42.40583567997271],[125.28396040305017,42.23445079217038],[125.48053755056753,42.15143260423133],[125.29543256965752,41.957232570826534],[125.30628462133825,41.68037608468859],[125.44953169183412,41.67993683511685],[125.4698922062604,41.574568590468175],[125.65075971928559,41.28626577434602],[125.73767947832539,41.24523468713113],[125.7664115739351,41.13947886795543],[125.69173912965732,41.004060777183156],[125.57644900931427,40.91261933031785],[125.70408969199298,40.859194624916114]]]]}},{"type":"Feature","properties":{"id":23,"name":"山东"},"geometry":{"type":"Polygon","coordinates":[[[119.28029535679576,35.076608741968954],[119.17559940019237,35.105919501483925],[119.07627729675994,35.04982473402427],[118.86678104091231,35.036311347390836],[118.75944909060308,34.748628647993854],[118.68074588401538,34.683852240988244],[118.47719241659695,34.68920075111379],[118.39104780481233,34.44373769823619],[118.16542850062501,34.39924429039172],[118.05044844044335,34.65147695579685],[117.91469445198754,34.676953437251456],[117.7900508967316,34.65116689743439],[117.77330773256574,34.52654918149963],[117.65321170535594,34.5261099310286],[117.59068322215307,34.47159129470256],[117.4690369004328,34.47533783617223],[117.33695193908073,34.58861257580975],[117.2739066919404,34.56367869671456],[117.18181928902902,34.450145575557855],[117.06058637935814,34.70945791275258],[116.9414205263364,34.879628403727935],[116.8276290218621,34.95830577189389],[116.63187869664466,34.937945258366994],[116.47002811090874,34.89825775828896],[116.42021202956153,34.83425649673998],[116.37721723758551,34.63953970029695],[116.26688805464005,34.57670115783219],[116.15128787593477,34.566727607093384],[116.04374922094985,34.60021393542485],[115.81642459531884,34.57143016207232],[115.7067672059419,34.60026561136891],[115.54171268109542,34.57752798103161],[115.43577599476646,34.67571320200281],[115.42926476375794,34.77971202199228],[115.3176436714183,34.84283478439778],[115.21604780486234,34.83572927508601],[115.1744999528106,34.9441722685354],[114.99776655488267,35.007785956456786],[114.83421064680397,35.01618337696124],[114.86428632955045,35.18870514632556],[114.941749301789,35.21883250591537],[115.06835656090664,35.38011465087055],[115.22653812133734,35.416236477531555],[115.34503217989129,35.49625743283437],[115.39505496591403,35.61575918174091],[115.50424726819688,35.7228327505311],[115.65498742073294,35.74634552722432],[115.76133751821192,35.849181627230394],[115.96571780793067,35.985917466717694],[116.03367231742357,35.965815334710015],[116.07728722522529,36.10311961497834],[115.92690880699593,36.02198761743455],[115.8287235860247,36.031030992186516],[115.73870324066206,35.96860586177115],[115.46822879432352,35.91292450636098],[115.4163973331705,35.82375682171994],[115.3176436714183,35.79151072773803],[115.33387006984788,35.93114044887261],[115.42399376799801,35.99459910716308],[115.46032230023388,36.15787079530108],[115.44885013182812,36.249157213434756],[115.34332685844777,36.352148342172285],[115.27573408416072,36.47420807504275],[115.34162153520583,36.5997559678637],[115.47784061075572,36.753570868300955],[115.62641035385491,36.793568426741615],[115.85182295066886,37.057221585507904],[115.97501956600024,37.32170156477537],[116.25557091676444,37.38733063430129],[116.21991417899619,37.46236481378517],[116.35008711063165,37.620908108522514],[116.4106002140287,37.4846373561291],[116.60872765515717,37.63940827097497],[116.74391320193274,37.79929515194979],[116.83951460231702,37.83365998032383],[117.42061608306585,37.846682441441544],[117.56866906132825,38.04891815924566],[117.68731815041247,38.07266347903635],[117.77981896357426,38.16444082268592],[117.83715902947193,38.27090758202854],[117.94169775100022,38.23394647100022],[118.08480879000007,38.138739325000074],[118.21583092500032,38.144964911000045],[118.44892844400022,38.10778712200005],[118.54297936300031,38.06834544500015],[118.65487094300033,38.14569459600011],[118.84009850400025,38.152573960000154],[118.99659264400009,37.963120835000126],[119.243083071,37.76948233600007],[119.03712772600011,37.7220888260002],[118.97665449300018,37.61090729400013],[118.94459069100003,37.3781192080001],[118.97242272200015,37.28066640800006],[119.1455184250002,37.17885976800011],[119.44117272200026,37.12055084800011],[119.77059980600006,37.15184153900017],[119.89730879000012,37.24941640800017],[119.8588973320002,37.36017487200016],[120.05982506600003,37.44041575700018],[120.29761803500026,37.59788646000004],[120.31185957100001,37.68626536700009],[120.73804772200015,37.83397044500012],[120.9257918630002,37.819281317000105],[121.03256269600001,37.71039459800011],[121.13795006600003,37.70115794500006],[121.1914982430003,37.575181382000096],[121.38168379000001,37.56610748900019],[121.47689863400024,37.46800364800009],[121.59164472700013,37.424465236000174],[121.65943444100003,37.47272370000019],[122.12989342500032,37.48346588700022],[122.29647871200018,37.418158270000134],[122.45704186300031,37.418158270000134],[122.65609785200024,37.38458893400019],[122.54908287900014,37.31085846600007],[122.60287519600001,37.20990631700013],[122.44760175900012,37.14744700700018],[122.46119225400025,37.03082916900007],[122.5254012380002,36.94448476800005],[122.3198348320002,36.82294342700018],[122.20028730600006,36.842759507000096],[122.21119225400014,36.91844310100018],[122.0396427740003,36.984605210000154],[121.78598066500012,36.891180731000105],[121.73715254000012,36.83917877800022],[121.5600692070002,36.767645575000074],[121.15772545700031,36.6686058610002],[121.02352949300018,36.5839297550001],[120.92025800900001,36.55329010600008],[120.94996178500003,36.45917389500016],[120.75058027400007,36.45917389500016],[120.64771569100014,36.33087799700016],[120.6967879570002,36.14398834800011],[120.55160566500001,36.1137149110001],[120.35352623800031,36.04083893400008],[120.29200280000009,36.06810130400015],[120.36158287900025,36.19163646000018],[120.32276451900015,36.226385809000135],[120.10531660200007,36.200873114000046],[120.10018964900007,36.096096096000196],[120.24276777400019,35.97357819200005],[120.03882897200026,35.84284088700019],[120.00294030000009,35.727769273000035],[119.90015709700015,35.736273505000156],[119.90455162900014,35.624579169000214],[119.81161543100006,35.64789459800011],[119.64795983200031,35.58392975500013],[119.55152428500014,35.38003164300011],[119.42392011800018,35.313462632000125],[119.3580021490003,35.097113348000164],[119.28029535679576,35.076608741968954]]]}},{"type":"Feature","properties":{"id":24,"name":"天津"},"geometry":{"type":"Polygon","coordinates":[[[118.00956331411487,39.21855181203543],[117.88559004000001,39.20111725500013],[117.7182723320002,39.093003648000035],[117.70875084700003,38.981024481000134],[117.58399498800009,38.811590887000165],[117.54354902418424,38.62132396011637],[117.27132286955475,38.559248765917886],[117.09489952998928,38.61175202153868],[117.02105390801142,38.708231920167094],[116.88075239510715,38.69939525009079],[116.71084028475138,38.82052480697428],[116.6806095723739,38.91594534020541],[116.71218387278759,39.01183096053052],[116.89181115056431,39.10252309856227],[116.82613040599335,39.21654714613396],[116.85346723762302,39.34142324538661],[116.79124881368182,39.49293854427839],[116.79341922401795,39.60231171281541],[116.87563642807868,39.686466783215565],[117.15277713415753,39.61840892183437],[117.20290327386704,39.76160431638621],[117.14750613839749,39.94800120669046],[117.23907677557281,40.0926177027448],[117.31059695758358,40.11047191005065],[117.35679568867022,40.25702627244448],[117.4510535010183,40.22669220638022],[117.74974327992857,40.06347219508575],[117.76555626810728,39.96407257728771],[117.50128299441474,39.98872223644207],[117.53311567634745,39.75041636792113],[117.62251590408562,39.66641632715175],[117.63088748616872,39.57587921785165],[117.89278364484949,39.56461375592016],[117.89712446462227,39.3986807319302],[118.00791873556125,39.342663478836585],[118.00956331411487,39.21855181203543]]]}},{"type":"Feature","properties":{"id":25,"name":"江西"},"geometry":{"type":"Polygon","coordinates":[[[118.17473025869447,29.407869370774904],[118.13235558524207,29.297927761457117],[118.05199873315507,29.275319322328926],[118.00078738782759,29.14393199296717],[118.06393598775571,29.05055267976246],[118.22904219034479,28.95453786912745],[118.30288781142337,28.83578542725573],[118.37166914321642,28.798604234298097],[118.42551598507487,28.69519969351117],[118.41585249179911,28.604042467485954],[118.45791710778832,28.51738108996537],[118.47626224240861,28.332250271532814],[118.44644494028171,28.288687038775805],[118.34887983603556,28.219802354195366],[118.36779340963824,28.099706326086164],[118.13070193884346,28.040536810725314],[118.06130049032527,27.979016017875068],[117.82343387317462,27.9372614611475],[117.74555748888702,27.81328970035935],[117.6052559750832,27.86615469028675],[117.54443281512238,27.966665351224947],[117.28424197788496,27.857033800269818],[117.2871358577338,27.772620348350415],[117.22512413936761,27.723450222150092],[117.11226281088017,27.567619941007592],[117.12466515527262,27.429928087111676],[117.10110070173607,27.346651515854802],[117.15381066293185,27.27639740751445],[117.04012251214431,27.109534207537763],[116.92343712782116,27.02101247804353],[116.66970584474893,26.986906032987093],[116.54526899596749,26.867869371174635],[116.50496137916434,26.68930145879537],[116.54232344017453,26.562797553364447],[116.6194763531513,26.49207835523191],[116.59446495969019,26.39508169176665],[116.50165408726639,26.40704478568844],[116.39897301599194,26.287543035882436],[116.41928185357472,26.152874253943736],[116.39726769364916,26.061458645500153],[116.32321536699573,25.955108547121768],[116.13516483029264,25.866328437007724],[116.12369266188682,25.764241644936106],[116.02757449756507,25.63636831304717],[115.97874026904822,25.35083018646401],[115.90799523339342,25.23827891723826],[115.84283125186084,25.19474152290303],[115.8884615421664,24.99994721119495],[115.88753136617959,24.916773992725638],[115.78727908676052,24.86091177016209],[115.74909020434939,24.747740383312077],[115.7992163431598,24.572738145249247],[115.70578535401091,24.545711371082916],[115.59917687411337,24.609066677485202],[115.42058312421193,24.784559841063924],[115.23966393434307,24.746112576234395],[115.13910159656155,24.684152532913117],[115.0469625177061,24.706657620153123],[114.94464318163762,24.669967352711183],[114.8626843608946,24.587827663915647],[114.74046959839342,24.62524140087004],[114.4981071309395,24.555839952351903],[114.42488162568645,24.499590156160878],[114.28938602144785,24.595630805217553],[114.19233768113918,24.695262966112978],[114.30163333531016,24.75864411093704],[114.38359215695255,24.88468292927388],[114.4135128109674,24.97969005045553],[114.54823326974963,25.054465847520817],[114.72930748924932,25.118880520219818],[114.68305708221862,25.163451443329535],[114.7069315941178,25.28956777603213],[114.58047936373163,25.360054430167793],[114.56931725458765,25.406873277080166],[114.42922244725821,25.385970160294676],[114.27884402902868,25.291815700734077],[114.11497806168825,25.30842967369057],[114.02604292194326,25.267656968893988],[114.01209028483879,25.435114448073392],[113.9275476417103,25.44811106987001],[113.98242801324216,25.58166881046722],[113.91793582617748,25.660191148103024],[113.90718712818341,25.749772243893972],[114.01829145658542,25.934618842385674],[114.04144249897212,26.068848374752747],[114.21352501786521,26.169772446840966],[114.16215864470564,26.221371364896584],[114.06283654217259,26.17778229371794],[113.93948489810958,26.209434109396682],[113.99860273572773,26.283098863321896],[114.01488081279922,26.38508230170686],[114.06841759629515,26.45370860386899],[114.08505740767316,26.577499498403085],[113.86470910014492,26.65586680820661],[113.83163618386277,26.827484239106354],[113.89240766787964,26.945332343412872],[113.7540181819935,27.141857814986196],[113.82357466014247,27.22867422123835],[113.85096316861535,27.345902207920517],[113.78275027940191,27.370784410172377],[113.66746015815977,27.329546617382505],[113.60012576719032,27.368226427107885],[113.56209191261172,27.590564276919878],[113.70099816333448,27.81894826884752],[113.7368099298343,27.981574001838737],[113.91648888625309,28.021183987551012],[114.0137956080809,28.106475937714322],[114.09187869704431,28.257707018464117],[114.18448286299372,28.29307953539228],[114.22685753824476,28.40896393493759],[114.17704145689771,28.50730418553971],[114.05694542878854,28.564277452142676],[114.11280765225126,28.615514634992422],[114.14272830626629,28.788501492350008],[114.01209028483873,28.912912502709815],[113.9051717465789,28.955984809051756],[113.902381220417,29.066339830418826],[114.06345665889773,29.203153185171345],[114.2465462591025,29.248912664887513],[114.30814456631873,29.354539292854042],[114.46953006406119,29.31792654157661],[114.70868859330392,29.389524237953253],[114.81824262899408,29.39386505772623],[114.895188837295,29.520188096903155],[114.97275516232082,29.559953111347],[115.14018680217919,29.58752248787252],[115.35433393796086,29.64762217922018],[115.41686242116378,29.711700955135],[115.48621219283837,29.864275621222987],[115.70516523638656,29.86081329969403],[115.85590538892262,29.73859853809202],[115.99899742978761,29.744127916270287],[116.14725711542354,29.788776352846384],[116.23619225516842,29.78133494675035],[116.38951622919058,29.876057847991262],[116.49250735882765,29.88471365001493],[116.65048221188454,30.0506725124265],[116.79140384331271,30.02201793118263],[116.88679853722283,29.920422065525912],[116.79791507432122,29.755935981460368],[116.67497684140807,29.70800609050866],[116.64846683207861,29.62741669442491],[116.74856408096753,29.544863593579947],[116.88834882993456,29.560521552127938],[116.95506310417892,29.6539008653327],[117.0790865418104,29.710202338367168],[117.06709761036643,29.84058197737633],[117.1251819192102,29.910551865775943],[117.22553755141678,29.906676133996342],[117.27426842714618,29.829471544176386],[117.40630171075543,29.8311768665192],[117.40216759655743,29.773066718354357],[117.52737959169485,29.622352403340727],[117.64918094304613,29.60586762069417],[117.70767866393919,29.555638129096366],[117.89857140544603,29.54897186935625],[117.98590457563569,29.572019558056184],[118.11344201074019,29.518663641713715],[118.17473025869447,29.407869370774904]]]}},{"type":"Feature","properties":{"id":26,"name":"江苏"},"geometry":{"type":"Polygon","coordinates":[[[121.34094130672383,31.49093327643905],[121.1867944681901,31.457511705400975],[121.12628136569242,31.276954250738072],[121.0586369163608,31.248403022281764],[121.03471072761818,31.143758246246023],[120.88298872315124,31.140037543198048],[120.9093437028497,31.01172496173757],[120.69209598164423,30.97655915038456],[120.70945926343427,30.89108633126918],[120.57789106691928,30.845791937747805],[120.49097130698044,30.763703924896305],[120.44694298712932,30.889691067288993],[120.3616768735888,30.938757838903285],[120.21341718975145,30.920541897290832],[120.12861616420457,30.943176173941396],[119.9430977721446,31.086578274068188],[119.93193566300044,31.15003693325795],[119.74011274640623,31.176495265743938],[119.62978356256133,31.13288035704295],[119.36277143775169,31.192359930766145],[119.31683108908351,31.266722317580985],[119.16288699833638,31.287444566313752],[119.0747270040481,31.23884288179363],[118.81608646042179,31.22633718551279],[118.75102583167688,31.35795705797193],[118.82724856956588,31.397541205262513],[118.88094038269253,31.52244314203739],[118.86047651637807,31.627372138013868],[118.68074588401538,31.64675080050918],[118.68436323517517,31.70085602478585],[118.47688235913358,31.790230414102467],[118.48106815017502,31.858701687532886],[118.35198042235857,31.946680812869317],[118.38314131072286,32.053961087234484],[118.49905154779071,32.13767690716358],[118.51439944887557,32.1997661398955],[118.650360142007,32.23787750884003],[118.68405317591339,32.33924083139925],[118.66787845342787,32.45321320212753],[118.55181318582993,32.574446112697956],[118.75185265487613,32.61250580479907],[118.89132734637997,32.595685126267625],[119.08051476374533,32.446081855293414],[119.19937055930387,32.59372142240571],[119.19037885959676,32.71123362902887],[118.99297488798061,32.962045192931384],[118.85737593005524,32.97230296540948],[118.74823530461572,32.83853852013658],[118.72017500167516,32.73213674581419],[118.39910932763337,32.73089651146492],[118.29968387321219,32.77740530001455],[118.23901574108368,32.923701279990155],[118.21803510993243,33.17991303176103],[118.08073082876479,33.14955312817443],[117.93185102730308,33.235129299177856],[118.17674564029915,33.69262075524375],[118.1236739438973,33.76600128832888],[117.7522237486271,33.7243500843889],[117.74555748888702,33.882273261501894],[117.65088626538886,33.98247386317826],[117.50345340385161,34.04975657820364],[117.39172895692593,34.031256414851725],[117.32129397963342,34.07885040901925],[117.15944339389756,34.09117523904604],[117.03392134039751,34.15553823490163],[116.96953250522097,34.275401719913475],[116.94948205005653,34.38929657627608],[116.80225589409417,34.40007111269176],[116.76954471211889,34.45182506037821],[116.62485070169856,34.48500132944778],[116.428118523651,34.63969472902858],[116.37721723758551,34.63953970029695],[116.42021202956153,34.83425649673998],[116.47002811090874,34.89825775828896],[116.63187869664466,34.937945258366994],[116.8276290218621,34.95830577189389],[116.9414205263364,34.879628403727935],[117.06058637935814,34.70945791275258],[117.18181928902902,34.450145575557855],[117.2739066919404,34.56367869671456],[117.33695193908073,34.58861257580975],[117.4690369004328,34.47533783617223],[117.59068322215307,34.47159129470256],[117.65321170535594,34.5261099310286],[117.77330773256574,34.52654918149963],[117.7900508967316,34.65116689743439],[117.91469445198754,34.676953437251456],[118.05044844044335,34.65147695579685],[118.16542850062501,34.39924429039172],[118.39104780481233,34.44373769823619],[118.47719241659695,34.68920075111379],[118.68074588401538,34.683852240988244],[118.75944909060308,34.748628647993854],[118.86678104091231,35.036311347390836],[119.07627729675994,35.04982473402427],[119.17559940019237,35.105919501483925],[119.28029535679576,35.076608741968954],[119.19288170700031,35.00043366100007],[119.20191491000014,34.78497955900019],[119.34669030000032,34.78082916900007],[119.64096113400024,34.55052317900018],[119.82618248800009,34.4704043640001],[119.93995201900032,34.4579125020002],[120.1181746750002,34.359605210000154],[120.25709069100014,34.31183502800019],[120.37134850400003,34.03603750200014],[120.40707441500024,33.85976797100014],[120.49830162900014,33.75332265800006],[120.51172936300031,33.65672435100012],[120.62777754000007,33.47801341400017],[120.66195722700024,33.33803945500017],[120.73788496200018,33.279282945000176],[120.73023522200015,33.20490143400008],[120.80697675900012,33.13776276200022],[120.83375084700003,33.025620835000154],[120.89576256600014,33.01357656500008],[120.90780683700018,32.843898830000114],[120.86142011800018,32.71967194200016],[120.91119932700019,32.63012129600017],[121.12020918100029,32.507391669000185],[121.35413965600026,32.41482275900012],[121.41928144600001,32.250311591000184],[121.44336998800031,32.114325262000165],[121.65536543100018,32.06293366100016],[121.82194511600028,31.952486444000186],[121.92205718300033,31.75437812900023],[121.81730624900024,31.690949425000184],[121.67555427200011,31.723572594000075],[121.28641836400004,31.890589166000098],[121.11508706100005,31.796333603000193],[120.97781679200011,31.814365316000078],[120.9448348320002,31.884588934000135],[120.81080162900003,32.022609768000194],[120.63437647600028,32.07700959800013],[120.49075762900014,32.08245338200015],[120.36158287900025,32.025580145000106],[120.26710045700031,31.948675848000107],[120.13135826900032,31.943182684000078],[119.99203535200002,32.015855210000154],[119.90845787900014,32.13886139500019],[119.92115319100003,32.19647858300016],[119.8183699880002,32.313706773000035],[119.69239342500032,32.319769598000136],[119.6904403000002,32.23533763200015],[119.78858483200008,32.19863515800006],[119.78492272200015,32.114325262000165],[119.85556074300018,32.08698151200019],[120.00639553200017,31.950304999000167],[120.22999108200031,31.908880927000126],[120.51783287900003,32.018744208000186],[120.75035387400033,31.978336276000192],[120.82479860100023,31.828702466000095],[120.8953628510003,31.763320274000165],[121.14440229000007,31.68465829100012],[121.34094130672383,31.49093327643905]]]}},{"type":"Feature","properties":{"id":27,"name":"上海"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.34094130672383,31.49093327643905],[121.54623457100013,31.366115627000113],[121.72516399500012,31.2815671500002],[121.87702454800024,31.099135878000084],[121.97738292300016,30.914923436000038],[121.90739924100006,30.85708552400021],[121.63113225500024,30.83655553300011],[121.41059758600022,30.767388095000143],[121.2748085699094,30.69124055395892],[121.25614423986497,30.74406688088189],[121.10437055855436,30.83434560776368],[120.98101891539056,30.83204600711761],[120.96918501177902,31.009451199513393],[120.9093437028497,31.01172496173757],[120.88298872315124,31.140037543198048],[121.03471072761818,31.143758246246023],[121.0586369163608,31.248403022281764],[121.12628136569242,31.276954250738072],[121.1867944681901,31.457511705400975],[121.34094130672383,31.49093327643905]]],[[[121.91288969500033,31.45633220700006],[121.85137350400032,31.439178905000205],[121.31446373800014,31.655585028000132],[121.17628760400021,31.78432289200012],[121.26406453300001,31.84107679400006],[121.47530402100028,31.770769919000145],[121.6632225950002,31.6523516700002],[121.844075352,31.607946968000192],[121.98008567500005,31.540295811000107],[121.91288969500033,31.45633220700006]]]]}},{"type":"Feature","properties":{"id":28,"name":"浙江"},"geometry":{"type":"MultiPolygon","coordinates":[[[[121.28535242000021,28.10194563100012],[121.18640047700012,28.043700183000112],[121.13062584700009,28.103461005000185],[121.23058760400033,28.219732518000114],[121.28535242000021,28.10194563100012]]],[[[122.17359459700015,30.102240302000126],[122.2895613940002,30.06732819200019],[122.29363040500016,29.93378327000019],[122.18474368600016,29.994452216000155],[122.01221764400009,30.031927802000183],[121.97461998800009,30.148016669000214],[122.08741295700008,30.14752838700022],[122.17359459700015,30.102240302000126]]],[[[120.9093437028497,31.01172496173757],[120.96918501177902,31.009451199513393],[120.98101891539056,30.83204600711761],[121.10437055855436,30.83434560776368],[121.25614423986497,30.74406688088189],[121.2748085699094,30.69124055395892],[121.13086998800031,30.59975820500017],[120.97775867700011,30.5433175940002],[120.9395451180003,30.421942450000216],[120.78743319500018,30.293625282000136],[120.6849411410002,30.27178091900018],[120.89281215100027,30.169796399000063],[120.99439537900014,30.211086330000114],[121.14969672600012,30.325753330000197],[121.25410242800024,30.34839323400007],[121.37738414700016,30.32506357900013],[121.50684671500017,30.220026009000122],[121.67775592200019,30.000640952000083],[121.91487649700014,29.91869584300011],[121.98303901000008,29.823175763000194],[121.70411217500009,29.572007554000123],[121.45834394600024,29.525213934000135],[121.46507415900021,29.42088645200016],[121.91578209700009,29.640855210000183],[121.9663192070002,29.60248444200016],[121.90585371200018,29.284613348000136],[121.93970787900025,29.210109768000166],[121.84058678500003,29.161118882000125],[121.74569746200007,29.201605536000045],[121.61475670700008,29.206000067000133],[121.58871504000001,29.291489976000037],[121.47120201900009,29.191351630000128],[121.49683678500014,29.104437567000133],[121.62142988400012,29.11326732000009],[121.68173261800007,29.0267601580002],[121.6699324880002,28.82534414300011],[121.60556074300018,28.724676825000216],[121.51012813400013,28.657059309000232],[121.60774270100023,28.477202856000105],[121.65634199300013,28.339300848000192],[121.40894616000008,28.304917710000154],[121.28785241000003,28.18089427300015],[121.2368270190002,28.306097723000164],[121.14429772200015,28.343573309000192],[121.11946677900016,28.21893617000015],[121.00937821800028,28.10313263500018],[120.96522777500024,27.98714491700008],[120.83529707100024,27.955959377000113],[120.80748625600017,27.834826693000196],[120.66648375600005,27.625357910000048],[120.59657442500009,27.57028277800009],[120.67684980600029,27.49461497600018],[120.62256920700008,27.380357164000202],[120.5459090500002,27.403265692000133],[120.51783287900003,27.201605536000187],[120.41920496712629,27.2063322962116],[120.40580854712687,27.296861273828824],[120.34400353433568,27.379646917771083],[120.14773644428158,27.400214137772338],[120.06443403460298,27.343628444796963],[119.77008507726453,27.31587820111818],[119.69339725138207,27.41104035103143],[119.68657596201103,27.511292630450612],[119.61583092725562,27.665572617981923],[119.51170291605695,27.636711331162985],[119.46731286010049,27.5252969434992],[119.39036665269896,27.51261037916572],[119.26561974465551,27.42411448809321],[119.18583133334937,27.4199286970518],[119.00527387868658,27.48005422592189],[118.92269494031927,27.549998276799045],[118.88946699440646,27.722158310957298],[118.81980716436931,27.909950466141083],[118.74813195182816,27.973202419755893],[118.76565026324903,28.178176987777903],[118.7970178571884,28.21292938888027],[118.73521284439732,28.325971585420376],[118.49889651905926,28.262435410965566],[118.44644494028171,28.288687038775805],[118.47626224240861,28.332250271532814],[118.45791710778832,28.51738108996537],[118.41585249179911,28.604042467485954],[118.42551598507487,28.69519969351117],[118.37166914321642,28.798604234298097],[118.30288781142337,28.83578542725573],[118.22904219034479,28.95453786912745],[118.06393598775571,29.05055267976246],[118.00078738782759,29.14393199296717],[118.05199873315507,29.275319322328926],[118.13235558524207,29.297927761457117],[118.17473025869447,29.407869370774904],[118.37321943592826,29.4528278675121],[118.55692915285806,29.625220444767848],[118.7237406759914,29.730201116688193],[118.74131066335633,29.82836050103643],[118.82011722183222,29.880036933457802],[118.89396284381036,29.982588813522966],[118.85272505102029,30.15927053550689],[118.9094657736265,30.222212428960404],[118.88109541232336,30.324350897875718],[118.93468387266262,30.352126979976134],[119.05751875188889,30.31187103911722],[119.21068769717942,30.313731391090926],[119.36287479143857,30.404475205966094],[119.3208101754492,30.518163356753632],[119.24153852808075,30.550848700307313],[119.35062747577729,30.675363064353974],[119.44312828983868,30.639215400170542],[119.5005408060133,30.769388332705375],[119.57495486877224,30.847058010518765],[119.62978356256133,31.13288035704295],[119.74011274640623,31.176495265743938],[119.93193566300044,31.15003693325795],[119.9430977721446,31.086578274068188],[120.12861616420457,30.943176173941396],[120.21341718975145,30.920541897290832],[120.3616768735888,30.938757838903285],[120.44694298712932,30.889691067288993],[120.49097130698044,30.763703924896305],[120.57789106691928,30.845791937747805],[120.70945926343427,30.89108633126918],[120.69209598164423,30.97655915038456],[120.9093437028497,31.01172496173757]]]]}},{"type":"Feature","properties":{"id":29,"name":"吉林"},"geometry":{"type":"Polygon","coordinates":[[[131.25284846284336,43.46916859112878],[131.28090621000007,43.380221456000186],[131.16721805900016,43.18155141200003],[131.18985233600011,43.139150899000185],[131.08546594300014,43.04210256000013],[131.10303592900016,42.91043101000014],[130.9924483650002,42.848729350000184],[130.76951623600024,42.86580841100013],[130.5864783130002,42.81725840300004],[130.4071610920002,42.73537709600009],[130.57190555900024,42.621818136000144],[130.43124231000002,42.56151173900014],[130.24303674300006,42.743361105000076],[130.2390059820001,42.90224029600003],[130.1404073490001,42.907123719000055],[130.12149377400016,42.98184784000006],[129.9813472900001,42.96673248400006],[129.879751425,42.99603302000011],[129.76130904200016,42.74604827900009],[129.70332808500012,42.44237172400008],[129.51708622300015,42.390953674000116],[129.3630904540001,42.44500722300009],[129.2430977790001,42.37870636100007],[129.2111617430001,42.21995636000014],[129.119797812,42.14936635300006],[128.96383833800013,42.088517355000135],[128.94006718000009,42.0353681440001],[128.72095910700006,42.047589621000014],[128.50236779900013,41.99609405500013],[128.2619690350001,42.03286183700001],[128.03459273300012,41.9937427780001],[128.0399670820001,41.87958953900008],[128.15913293500006,41.71182200100009],[128.30300012200007,41.583406067000084],[128.1856946210001,41.40445058200007],[128.06415165200013,41.3884308880001],[127.94421065300008,41.47085479800012],[127.84886763600008,41.43132232700006],[127.63833785000014,41.42987538700007],[127.47411014900007,41.498811747000104],[127.26905806500014,41.50496124300008],[127.04545414300009,41.66800038700009],[127.03315515200012,41.73158823700007],[126.88711755400004,41.78491831500014],[126.78862227400009,41.69590566100007],[126.61788334200008,41.665933330000115],[126.50130131100002,41.43437123600009],[126.26069584200008,41.14312286400008],[126.14742110200007,41.092273255000066],[126.00784305900004,40.89931345700012],[125.70408969199298,40.859194624916114],[125.57644900931427,40.91261933031785],[125.69173912965732,41.004060777183156],[125.7664115739351,41.13947886795543],[125.73767947832539,41.24523468713113],[125.65075971928559,41.28626577434602],[125.4698922062604,41.574568590468175],[125.44953169183412,41.67993683511685],[125.30628462133825,41.68037608468859],[125.29543256965752,41.957232570826534],[125.48053755056753,42.15143260423133],[125.28396040305017,42.23445079217038],[125.20871951709205,42.40583567997271],[125.10195600756373,42.4938664821525],[125.09575483581716,42.576677965415854],[125.0189119812029,42.646854560289796],[124.94212080343254,42.80369253178506],[124.86031701142088,42.88769257345359],[124.88842899030573,43.08672435214717],[124.76569746296764,43.105586248906405],[124.51956261562225,42.87167287880038],[124.37590213397641,42.9855677351629],[124.41889692595248,43.081866767537406],[124.29580366430775,43.15656505023685],[124.28185102810255,43.22599233717659],[124.00641564256796,43.31012156825588],[123.80653120315253,43.45422130037281],[123.69625369705051,43.353478095437765],[123.60592329332536,43.365053615731796],[123.378133579701,43.453161933176716],[123.36139041643457,43.53977163295443],[123.48996137941418,43.59144806627526],[123.52215579565342,43.6969713414542],[123.32227135623816,44.041859850551646],[123.35906497556812,44.15133637097668],[123.25757246269899,44.20407217149355],[123.12378217990363,44.49439036742149],[123.04451053343439,44.51325226507993],[122.95531701127095,44.44684804919811],[122.71538333477304,44.33556285274341],[122.3766443223775,44.2199626740381],[122.25406782377104,44.245930081008396],[122.28186974519264,44.428657945108085],[122.08818647662451,44.61967987692478],[122.04596683190368,44.69494660130459],[122.03806033691501,44.934363512066454],[122.01077518122969,45.118331611414675],[122.19184939982983,45.20103974099126],[122.2340173686066,45.287055162465805],[122.13645226436057,45.449086616254334],[122.02705325740186,45.484510810025824],[121.96390465657464,45.56750316044253],[121.93439741370963,45.689950466041125],[121.7849491723664,45.675971992313634],[121.66640343606969,45.715762844279794],[121.81476647269449,45.913709418254996],[121.77368371043485,46.01034434741368],[121.99599572182501,45.98029450129016],[122.23980512920332,45.81348297815691],[122.3985551286163,45.94918528887001],[122.49787723204872,45.82542023455619],[122.64696373908532,45.72506460234953],[122.77341596857218,45.788471584695856],[122.79873742129496,46.089331773042915],[123.06890180927098,46.1086587586947],[123.16166100485151,46.220073147257864],[123.25834760995417,46.26508331993932],[123.35611941887606,46.235162665025],[123.91939253074065,46.272343857982634],[124.0340625352577,46.01848338549985],[123.97944054614425,45.978124090954],[124.06196780766811,45.87167064068751],[124.0178361350296,45.78172780969069],[124.14103275036115,45.63220205308227],[124.22356001188501,45.635509344980306],[124.39559085483415,45.45148956968791],[124.56307417243511,45.41526439113872],[124.61185672410858,45.447923896270765],[124.87246097159652,45.44859568893989],[125.0277486512793,45.49836009434287],[125.10350630117483,45.39531728786247],[125.30742150290001,45.41696971348151],[125.43247846930592,45.477250271083136],[125.6987154477597,45.51091746746715],[125.70491662040575,45.35971222603834],[125.84072228390625,45.23481028926338],[126.15047081917294,45.14117259453957],[126.42104861919836,45.22845408788589],[126.55933475139761,45.246747544763366],[126.78898481699571,45.14933747014817],[126.95269575380598,45.13419627553762],[127.07661583865001,44.93400177686047],[126.97827558804795,44.8261013857703],[127.03227746043643,44.73055166312872],[127.04498986229225,44.598234157780155],[127.14725752241668,44.654690660445624],[127.23309207583867,44.6159591738768],[127.37520226477261,44.64882538548309],[127.5592737160091,44.57379120510004],[127.49281782418313,44.41090709148901],[127.71471642532276,44.161490789768095],[127.74437869691934,44.085629787984374],[127.84959191283644,44.05591583954438],[128.05206017463735,44.12578237605578],[128.042965123042,44.340704658193374],[128.15525800984926,44.35300364799994],[128.20693444227066,44.44049184782051],[128.35870812358104,44.501676743886605],[128.4187561380852,44.450103665152085],[128.45069217280547,44.3155382351014],[128.4459379418825,44.15394603088458],[128.52877526266826,44.08010040980602],[128.63150800988677,43.91217784353262],[128.74741824785383,43.80218455737142],[128.76447147038203,43.70906362568576],[128.8828621770478,43.55615306281359],[129.014895460657,43.5396682810663],[129.22893924365115,43.60839793601593],[129.24924808213325,43.78616486271821],[129.53491539902643,43.870319933118395],[129.75242150265012,43.87416982737565],[129.80213423120978,43.96548208303176],[129.9129285021486,44.02160268801359],[130.0001066427074,43.98356883433419],[130.03317955898956,43.85561798807967],[130.1036145371811,43.84543772996727],[130.28019290637747,43.96444855425736],[130.33279951388636,43.927809964558236],[130.41408654196027,43.669169420032716],[130.58870120729478,43.62772492076843],[130.9165881689088,43.45047475800365],[130.99461958192813,43.50773224544673],[131.14949384956157,43.43610870974911],[131.25284846284336,43.46916859112878]]]}},{"type":"Feature","properties":{"id":30,"name":"内蒙古"},"geometry":{"type":"Polygon","coordinates":[[[121.41327478505161,53.317334824121446],[121.60718224476477,53.240729885275954],[121.80019371976425,53.02358551685808],[121.69151818231819,52.908347073358726],[121.50274417520347,52.77468598087333],[121.17392703670339,52.594981187831564],[121.49091027159176,52.444680283967955],[121.69234500461823,52.388533841463584],[121.83125125534116,52.26936798844193],[122.01790652896307,52.28311391907212],[122.17365929573992,52.47963939154465],[122.3386104677989,52.453697822096785],[122.49177941308938,52.29484446899707],[122.73073123585783,52.248904120328916],[122.77512129091474,52.20001821586797],[122.63766198101558,52.09496002958167],[122.75419233570778,51.84748159420025],[122.71445315968549,51.70167654153914],[122.83553104062503,51.567757065735975],[122.83894168531054,51.510551256035626],[122.95624718635855,51.38606273130995],[123.08812544213538,51.31247549085123],[123.27168012943434,51.26669017181396],[123.43833662293673,51.273098050034974],[123.56964643793282,51.203903307091906],[123.78875451111173,51.232816270754284],[123.86626915929423,51.31343150525976],[124.16206505655703,51.328365994295154],[124.35078738772768,51.27862742821324],[124.50188927636901,51.36058624895625],[124.66622033080353,51.33526479803194],[124.82062951134287,51.36585724471604],[125.06061486198621,51.53437409109145],[125.12753584180564,51.615738634430386],[125.33331139460518,51.58274323251419],[125.48663537042592,51.507398993768504],[125.7194893742352,51.25371938753969],[125.84340945907928,51.206228746159724],[125.98438276555214,51.104219469352955],[126.05626468276887,50.98027354608723],[126.00102257693044,50.90175120755217],[125.82403079568462,50.766798203873975],[125.80940636591112,50.56223704700207],[125.5307670430646,50.39304840795762],[125.41842247941389,50.1946109084667],[125.26442671092394,50.10572744376651],[125.29522586498172,50.01446686495382],[125.22577273962025,49.91827118626625],[125.23569461531417,49.55439158830117],[125.267372267616,49.43848135033406],[125.22287885977153,49.22004507072347],[125.15812829028835,49.1511087101988],[124.86393436078208,49.175396633248],[124.82155968643036,49.060881660160504],[124.62183027574656,48.74198639645499],[124.53806277897405,48.571686713371065],[124.52069949808339,48.36903758441693],[124.56224734923569,48.236177476709145],[124.42556318569245,48.17437246391805],[124.32717125914627,48.33219228824356],[124.30076460170494,48.49187246454258],[124.2340503283599,48.53083649420881],[124.07793582637726,48.44830923088628],[123.72694949832072,48.191063951240324],[123.57755293202223,48.05432811085356],[123.29328087820994,47.94565257430685],[123.20682620716366,47.81382599537338],[122.79734215731469,47.64355215071117],[122.56536665264889,47.53115591111643],[122.4052213892557,47.33168488195176],[122.57404829309428,47.13112864806865],[122.79734215731469,47.03371857435272],[122.99624474479924,46.84029368820319],[123.18682742704402,46.76164215845881],[123.33048790869003,46.83264557653209],[123.37999393077524,46.89806793958377],[123.60871382038653,46.77463878025546],[123.39725385977772,46.59782786706242],[123.29152387902388,46.58635569955587],[123.01970584464902,46.6123489449478],[122.98890669239006,46.40657339124897],[123.16166100485151,46.220073147257864],[123.06890180927098,46.1086587586947],[122.79873742129496,46.089331773042915],[122.77341596857218,45.788471584695856],[122.64696373908532,45.72506460234953],[122.49787723204872,45.82542023455619],[122.3985551286163,45.94918528887001],[122.23980512920332,45.81348297815691],[121.99599572182501,45.98029450129016],[121.77368371043485,46.01034434741368],[121.81476647269449,45.913709418254996],[121.66640343606969,45.715762844279794],[121.7849491723664,45.675971992313634],[121.93439741370963,45.689950466041125],[121.96390465657464,45.56750316044253],[122.02705325740186,45.484510810025824],[122.13645226436057,45.449086616254334],[122.2340173686066,45.287055162465805],[122.19184939982983,45.20103974099126],[122.01077518122969,45.118331611414675],[122.03806033691501,44.934363512066454],[122.04596683190368,44.69494660130459],[122.08818647662451,44.61967987692478],[122.28186974519264,44.428657945108085],[122.25406782377104,44.245930081008396],[122.3766443223775,44.2199626740381],[122.71538333477304,44.33556285274341],[122.95531701127095,44.44684804919811],[123.04451053343439,44.51325226507993],[123.12378217990363,44.49439036742149],[123.25757246269899,44.20407217149355],[123.35906497556812,44.15133637097668],[123.32227135623816,44.041859850551646],[123.52215579565342,43.6969713414542],[123.48996137941418,43.59144806627526],[123.36139041643457,43.53977163295443],[123.378133579701,43.453161933176716],[123.60592329332536,43.365053615731796],[123.69625369705051,43.353478095437765],[123.61196943634047,43.08135000270045],[123.35441409743271,43.01231028938838],[123.1818664896469,42.94409739837627],[123.13127526284313,42.826378486178214],[122.8927885280682,42.74493642847341],[122.72794070879667,42.74100901985048],[122.47637983606069,42.84963288045313],[122.36687747631458,42.79909332869414],[122.4256852555701,42.72204376940448],[122.2993880557143,42.63646759750168],[122.04503665591699,42.720855210999275],[121.91827436716835,42.6465961778714],[121.87776004389093,42.539574285924516],[121.72366092261348,42.45766714112574],[121.64609459758765,42.45358470287181],[121.54444705598678,42.53523346615157],[121.36885053872129,42.49999013953342],[121.03424563962454,42.26010814077813],[120.91259931880359,42.29656586422328],[120.62786217699795,42.16037262619574],[120.50916141196956,42.14869375311423],[120.46880211832308,42.03800283496301],[120.34017947760083,41.96581085938362],[120.14076012617909,41.789284166131324],[120.02640018092359,41.73383535381865],[120.03032759044606,41.860597643466605],[119.96015099467274,41.97175364781273],[119.89188642771649,41.99945221644663],[119.80822228373131,42.12022003812433],[119.82145145132336,42.20861257640928],[119.62942182825486,42.25054800118926],[119.56275923085389,42.371832586804544],[119.33574466358539,42.28940867806807],[119.24525923112867,42.19194692571017],[119.36587202407475,42.10047964132244],[119.32174034963742,41.965397447334425],[119.29864098499354,41.777346909732245],[119.31559085473418,41.657819322403896],[119.38974653507455,41.472559311862796],[119.36163455618976,41.37499420851594],[119.23099653476226,41.27339834195993],[119.15265506427988,41.31220734289451],[118.47843265184542,41.35509878208313],[118.37027387923615,41.313964342080766],[118.31363650941739,41.569555976227434],[118.244390089631,41.59234528340809],[118.15938235940837,41.719133408779925],[118.27823815316833,41.75269725237635],[118.3221631211311,41.8635431992592],[118.26785119038016,42.073866279205504],[118.13390587795413,42.02190562594393],[118.08600182542386,42.18166331570947],[117.98931522032115,42.22160919910527],[118.04021650638663,42.288762722022],[118.02424848767754,42.38263296254115],[117.80048953726225,42.56882314727051],[117.7426119321949,42.591095688715086],[117.5936287779457,42.55158905668958],[117.45043338429332,42.54928945604368],[117.41239952971455,42.45808055317505],[117.24388268423849,42.48226512343669],[117.05593550032319,42.46283478499731],[116.88710859558512,42.39537120191949],[116.82659549398682,42.30816722293903],[116.87889204313319,42.220213935125],[116.8581181166578,42.01950267251044],[116.59973595634938,41.92372040497281],[116.46610070228564,41.94762075529371],[116.37752729684735,42.009684150503205],[116.20715010029687,41.88400706647306],[116.03785810756563,41.80062714332806],[115.93734744662743,41.92746694644251],[115.85879926967067,41.92746694644251],[115.5275016615725,41.77233429639068],[115.33976118413125,41.720838731122626],[115.347357618959,41.624074612553414],[115.22586632686955,41.58583405239966],[115.09739871577824,41.61616811846392],[114.88898766464905,41.61004446108302],[114.87581017479982,41.81166006126284],[114.9203035826443,41.93687205729964],[114.80485843267058,42.178407701554136],[114.75194176589969,42.13985708303804],[114.59634402875395,42.14127818544],[114.48131229082958,42.0752615422864],[114.41971398271414,41.956302394839724],[114.25569298664209,41.860080877730354],[114.21352501786532,41.76690827099998],[114.19709191296135,41.593585516858155],[114.0272831562927,41.53128957855125],[113.92796105375965,41.41835073479854],[113.90889244962705,41.2940172388046],[113.98490848194086,41.240893867358096],[113.96382449800228,41.15335398979491],[113.88067711795463,41.09930044236148],[113.90796227364024,41.028141995556666],[114.01860151584731,40.9236005723086],[114.06014936699978,40.81365896299084],[114.15409712098545,40.7425780305517],[114.02697309793007,40.63516856497725],[114.07554894402847,40.55018667317648],[114.04376793803988,40.48799408585833],[113.80848514237545,40.43422475836593],[113.6766068865985,40.428540351456036],[113.51832197517899,40.343739325909155],[113.33414717025562,40.3187279324481],[113.22986413032532,40.41665477100091],[113.0864620301985,40.40443329556018],[112.96140506379265,40.35585744946175],[112.84378950438224,40.225658678505226],[112.7342354677927,40.17284536452195],[112.59584598190656,40.237776801158475],[112.39921715664639,40.28834219043969],[112.27927615816822,40.22896596950389],[112.16507124164451,40.05931224246595],[112.09897708502444,40.00543956218607],[111.92146853984127,39.688843899126624],[111.7611682477164,39.59804840830739],[111.67486860630117,39.63592723235587],[111.48991865412256,39.65215363258406],[111.42537479021439,39.62538523993686],[111.42118899917295,39.52213572878085],[111.34269249905952,39.44441437412402],[111.11004520082531,39.38519318281914],[111.04100548661387,39.42296865497943],[111.13707197499161,39.564949652704314],[111.01310021420346,39.56487213833856],[110.84566857344595,39.46518829970023],[110.68485151558491,39.26437368429811],[110.60340945788016,39.267215888202685],[110.49416548055251,39.37431529451524],[110.33810265541325,39.31814301179051],[110.22524132692564,39.424053859697864],[110.10917606022707,39.42839468037019],[110.1768721864023,39.28519928581835],[109.96334516824493,39.18127798109393],[109.8205631857424,39.0544640164012],[109.67426720576702,39.01121084200679],[109.63530317610065,38.905816758936226],[109.5379964542729,38.78520396599026],[109.42394656827958,38.76905508102715],[109.3131522973406,38.62048533792796],[109.15998335205006,38.5421438674455],[108.98635053864638,38.335205592863815],[108.9534843279394,38.19906403347835],[109.02795006664223,38.11095571513414],[108.95425947519459,37.9255406758615],[108.86330895384515,37.98760407197037],[108.79070356711594,37.94176707608969],[108.76434858561868,37.68188629811419],[108.49635460797873,37.66860545547735],[108.33295372863165,37.6335946719565],[108.03870812408064,37.632509467238066],[107.99111412991311,37.7257079132896],[107.88497073800909,37.80164643033848],[107.65764611237813,37.85293528913229],[107.40468997566182,37.9216649440819],[107.3241780948432,38.06594554335217],[107.16263756657042,38.138602606924735],[107.06083499623804,38.114934801499885],[106.82916954993476,38.150384832793804],[106.47012169815781,38.290686347497],[106.64499474501156,38.45920319297298],[106.70442264189137,38.63722850209365],[106.93174726842165,38.92113882070004],[106.97784264492208,39.03560211784347],[106.91185184108957,39.06919179896235],[106.80824059472775,39.199054674034016],[106.78912031465075,39.36095693571397],[106.61409223816622,39.358321438283724],[106.49694176584978,39.28579356502101],[106.27566328323394,39.269153754542174],[106.2834147476924,39.156524970051265],[106.11319257987361,39.12081655543966],[106.06027591400226,38.97906810171153],[105.89661665223667,38.73618887032012],[105.84121951676724,38.57128937420518],[105.82809370286213,38.22681427715713],[105.75564334486444,38.135502021501026],[105.82473473501994,38.005484116798556],[105.78809614532082,37.805057075023996],[105.65869835824259,37.73981557912569],[105.53410647983014,37.72498444287777],[105.3544275252101,37.75263133376896],[105.08488325395899,37.660673122966244],[104.94432335773678,37.54571889940763],[104.64697716686271,37.50659984011051],[104.52238528934959,37.5299575871729],[104.4252335962534,37.498589993233566],[104.35851932200904,37.40123159456249],[104.2624528336313,37.3903278669375],[104.10850874198485,37.4618480489483],[103.86366580583223,37.62643748580132],[103.67871585455305,37.7750330673222],[103.43816206312869,37.84239329671328],[103.38746748263816,37.99910207789861],[103.38808760026257,38.101989853848664],[103.52167117658354,38.13984284127409],[103.47123497941078,38.43589712185471],[103.79431603415765,38.59077138948797],[103.97952436695596,38.7589781757022],[104.04256961499567,38.8740615913693],[104.17155399002456,38.95950857206296],[104.22478071515786,39.090689194950386],[104.05998457183051,39.307833564267554],[104.02396609885636,39.44110708312536],[103.74925418463295,39.4248806828972],[103.46379357331472,39.35718455672196],[103.28395958906378,39.292976590497204],[102.96537438372081,39.11936961551535],[102.59345909955778,39.177919013251824],[102.393109572149,39.23719188140018],[101.82549563961209,39.06443756803935],[102.022847935284,38.89271678345284],[102.02036746568609,38.85693085447528],[101.83107669463374,38.689835110501946],[101.58018761636538,38.68823314094669],[101.41399620995713,38.749211331437834],[101.24780480264951,38.87003082905949],[101.17995364774265,39.02064179128564],[101.04854048085855,39.00082388011796],[100.88855024619687,39.105158595992435],[100.85196333244181,39.16748037451967],[100.83315311072744,39.380077215790806],[100.78953820202634,39.407879137212376],[100.54345503062518,39.408860989143335],[100.45498497887365,39.495574041708636],[100.3068286478238,39.54983429651557],[100.28662316302854,39.62734894469807],[100.18885135320733,39.694890042141765],[100.0434855492187,39.72765290006129],[99.68614301978448,39.876015936686144],[99.43086144400041,39.87880646374728],[99.62702518126707,40.06918244131654],[99.89935997868008,40.204781399242165],[100.01418501192876,40.40249542922069],[100.14001712379127,40.518095607926],[100.20378584224284,40.61695262336491],[100.17603559766468,40.735084946712874],[100.01118777929253,40.896289578201475],[99.66454227100894,40.901276354020496],[99.49602542463361,40.84288198501565],[99.1574414409697,40.83631907806301],[98.82567874577745,40.72655833589849],[98.64584476062714,40.56754995406706],[98.51520674009896,40.533546860898895],[98.23481041896565,40.541685898985065],[98.32653608577169,40.855671902136606],[97.95053836515336,41.11981598641867],[97.70848595606202,41.34941437427395],[97.6476111192577,41.45553192775628],[97.84687544104878,41.61926870388754],[97.19067973399132,42.78706149219707],[97.84999217484966,42.723044566226775],[98.66223386000013,42.6436217400001],[99.47447554500013,42.56419891400009],[100.01697473100006,42.67651763900011],[101.21871016400007,42.52983408700004],[101.41073978700013,42.544871929000124],[101.63759932500011,42.51544220000005],[101.73537113500004,42.4611561080001],[101.88647302300012,42.278014832000025],[102.03416426600012,42.18460968100004],[103.07348067300012,42.00451731400011],[103.6914274500001,41.75923512800006],[103.72098636900006,41.755566101000085],[104.50078373200012,41.87059783900011],[104.49799320500006,41.665778300000085],[104.60124271700005,41.64544362400005],[104.8923360600001,41.64477183000008],[105.01480920400019,41.59614430800005],[105.20089603700006,41.74347381600009],[105.27448327700006,41.75546274900006],[105.86860721900007,41.99348439500011],[106.76782881800011,42.286618958000076],[108.17735518400008,42.454308981000025],[108.3197754310001,42.43255320200012],[108.53645471300007,42.435111186000114],[108.7968522540001,42.39836924300002],[108.99446293200009,42.44952891100013],[109.25341353400006,42.425938620000125],[109.48513065600014,42.44929636700007],[109.66734175700003,42.548980204000145],[109.91270145700008,42.62882029300005],[110.07486210100006,42.64352223800003],[110.4067281500001,42.768605041000114],[110.44941288300004,42.837334696000084],[110.60816288300003,42.94466664700005],[110.68009647600007,43.05765716600007],[110.93372440600012,43.287772319000084],[111.09609175600013,43.36665639300011],[111.59724979700007,43.523391012000104],[111.75382938700005,43.66320160000009],[111.93335331300011,43.696636251000086],[111.94430871600008,43.786372376000145],[111.83878544100003,43.93879201300007],[111.63445682800011,44.06594187500011],[111.51942508900004,44.188570048000116],[111.4063570560001,44.416463115000056],[111.5438163660001,44.601258036000075],[111.55136112500003,44.69319041000006],[111.73853316300017,44.966300354000055],[111.84333296700004,45.03952585900004],[112.01148807900006,45.08748158800009],[112.10760624200014,45.06737945600011],[112.44133264200002,45.052393290000055],[112.6142419840001,44.908836161000124],[112.74849735600009,44.86527293000009],[113.10485803200004,44.79437286400014],[113.47320764200009,44.770705058],[113.6350582280001,44.746262105000056],[113.88930627500014,44.90826772100007],[114.05529097500005,44.94056549100014],[114.1636047770001,45.040145976000105],[114.41888635300006,45.20147979700005],[114.53371138500006,45.38549957300006],[114.73731652900005,45.42503204400009],[114.93885461400015,45.37376902300005],[115.33727990800008,45.39469797800004],[115.63783003800006,45.444359030000044],[116.0119674070001,45.67855662000008],[116.16989058400009,45.709097392000075],[116.25164270100004,45.803251852000045],[116.21319543500016,45.90815500900007],[116.3571659750001,46.10555898100009],[116.60355920500007,46.30931915300005],[116.80458052600017,46.38290639300004],[117.30170780500015,46.35014353500014],[117.3530741780001,46.379495748000124],[117.39379520700004,46.57137034100006],[117.582000773,46.59198923800005],[117.69620568900012,46.5122525030001],[117.79759484900006,46.52026235000008],[117.8783134360001,46.59638173500005],[118.2382914640001,46.715392558000076],[118.43517867100002,46.6911563110001],[118.60937992400005,46.70578074200009],[118.7200708420001,46.676738587000074],[118.81624068200006,46.758180644000106],[118.9672392170001,46.74045562800009],[119.06237552900012,46.66095143700011],[119.31693363500011,46.611677958000115],[119.45294600400013,46.6274909470001],[119.68011560100007,46.59162750300007],[119.90418461200017,46.70893300400013],[119.9028927010001,46.84241322800011],[119.7701359460001,46.992998352000114],[119.69995935100013,47.15952565500007],[119.32065433800011,47.407029928000014],[119.31011234600015,47.47609548000008],[119.15756351700009,47.51766917000006],[119.08345951400014,47.66156219500007],[118.76740645400008,47.75615590400008],[118.5422522390001,47.96624644000005],[118.18248091600003,48.02820648200009],[117.97277795400015,47.99789825500005],[117.81516483600006,48.004822896000036],[117.685163036419,47.95467936496519],[117.360825643,47.650865174000074],[117.31710738200002,47.65406911200003],[117.06968062300007,47.81015777600004],[116.8532597250001,47.87211781800008],[116.49968957600004,47.83635772800005],[116.24389123600014,47.86289357500007],[116.08431441300007,47.80692799900007],[115.97290002500017,47.70905283700009],[115.8527006430001,47.705564678000115],[115.56186568200019,47.93319936200007],[115.51453007100014,48.12210256000009],[115.77084517400016,48.224085999000096],[115.80929244000004,48.273953756000054],[115.8004040940001,48.530372213000135],[116.0281938080002,48.76746368500005],[116.0378056240001,48.87014475500004],[116.68427779200016,49.82326487300011],[117.05758833800013,49.672886454000064],[117.25292525200007,49.622450256000064],[117.47286014900016,49.61428538100003],[117.75883752500016,49.51274119100006],[117.89381636600001,49.54664093100007],[118.16863163300007,49.67149119100009],[118.52127160700002,49.894061585000145],[118.64436486800003,49.954574687000104],[119.09167606600016,49.986562398000075],[119.20851648000013,50.01513946600005],[119.31621016500009,50.09265411400011],[119.35290043100014,50.34550689700012],[119.14123376500004,50.37661611000007],[119.24365645400007,50.44550079300009],[119.29357588700015,50.599238179000054],[119.49666426700003,50.73705922500011],[119.5179549560001,50.904800924000085],[119.74827681500011,51.083394674],[119.75814701300015,51.19902069200003],[119.91565677900007,51.33074391700012],[120.10820316600007,51.66519378700008],[120.15378178000009,51.663979390000065],[120.49314091000008,51.87572357200008],[120.64760176600015,51.91101857500007],[120.70563440000001,52.06103525800003],[120.77916996300007,52.117595114000096],[120.75808597900004,52.237406922000076],[120.626156047,52.346805929000084],[120.72397953300009,52.54216868100008],[120.4299406340001,52.63609059700008],[120.17595096800011,52.583742371000056],[120.05642338100012,52.60051137400012],[120.0329622800001,52.760656637000125],[120.2801823320001,52.86592153000004],[120.45030114700006,53.00834177700003],[120.65220096800016,53.12283091300014],[120.8742545980001,53.28015981100009],[121.20348514900007,53.27674916600006],[121.41327478505161,53.317334824121446]]]}},{"type":"Feature","properties":{"id":31,"name":"黑龙江"},"geometry":{"type":"Polygon","coordinates":[[[131.25284846284336,43.46916859112878],[131.14949384956157,43.43610870974911],[130.99461958192813,43.50773224544673],[130.9165881689088,43.45047475800365],[130.58870120729478,43.62772492076843],[130.41408654196027,43.669169420032716],[130.33279951388636,43.927809964558236],[130.28019290637747,43.96444855425736],[130.1036145371811,43.84543772996727],[130.03317955898956,43.85561798807967],[130.0001066427074,43.98356883433419],[129.9129285021486,44.02160268801359],[129.80213423120978,43.96548208303176],[129.75242150265012,43.87416982737565],[129.53491539902643,43.870319933118395],[129.24924808213325,43.78616486271821],[129.22893924365115,43.60839793601593],[129.014895460657,43.5396682810663],[128.8828621770478,43.55615306281359],[128.76447147038203,43.70906362568576],[128.74741824785383,43.80218455737142],[128.63150800988677,43.91217784353262],[128.52877526266826,44.08010040980602],[128.4459379418825,44.15394603088458],[128.45069217280547,44.3155382351014],[128.4187561380852,44.450103665152085],[128.35870812358104,44.501676743886605],[128.20693444227066,44.44049184782051],[128.15525800984926,44.35300364799994],[128.042965123042,44.340704658193374],[128.05206017463735,44.12578237605578],[127.84959191283644,44.05591583954438],[127.74437869691934,44.085629787984374],[127.71471642532276,44.161490789768095],[127.49281782418313,44.41090709148901],[127.5592737160091,44.57379120510004],[127.37520226477261,44.64882538548309],[127.23309207583867,44.6159591738768],[127.14725752241668,44.654690660445624],[127.04498986229225,44.598234157780155],[127.03227746043643,44.73055166312872],[126.97827558804795,44.8261013857703],[127.07661583865001,44.93400177686047],[126.95269575380598,45.13419627553762],[126.78898481699571,45.14933747014817],[126.55933475139761,45.246747544763366],[126.42104861919836,45.22845408788589],[126.15047081917294,45.14117259453957],[125.84072228390625,45.23481028926338],[125.70491662040575,45.35971222603834],[125.6987154477597,45.51091746746715],[125.43247846930592,45.477250271083136],[125.30742150290001,45.41696971348151],[125.10350630117483,45.39531728786247],[125.0277486512793,45.49836009434287],[124.87246097159652,45.44859568893989],[124.61185672410858,45.447923896270765],[124.56307417243511,45.41526439113872],[124.39559085483415,45.45148956968791],[124.22356001188501,45.635509344980306],[124.14103275036115,45.63220205308227],[124.0178361350296,45.78172780969069],[124.06196780766811,45.87167064068751],[123.97944054614425,45.978124090954],[124.0340625352577,46.01848338549985],[123.91939253074065,46.272343857982634],[123.35611941887606,46.235162665025],[123.25834760995417,46.26508331993932],[123.16166100485151,46.220073147257864],[122.98890669239006,46.40657339124897],[123.01970584464902,46.6123489449478],[123.29152387902388,46.58635569955587],[123.39725385977772,46.59782786706242],[123.60871382038653,46.77463878025546],[123.37999393077524,46.89806793958377],[123.33048790869003,46.83264557653209],[123.18682742704402,46.76164215845881],[122.99624474479924,46.84029368820319],[122.79734215731469,47.03371857435272],[122.57404829309428,47.13112864806865],[122.4052213892557,47.33168488195176],[122.56536665264889,47.53115591111643],[122.79734215731469,47.64355215071117],[123.20682620716366,47.81382599537338],[123.29328087820994,47.94565257430685],[123.57755293202223,48.05432811085356],[123.72694949832072,48.191063951240324],[124.07793582637726,48.44830923088628],[124.2340503283599,48.53083649420881],[124.30076460170494,48.49187246454258],[124.32717125914627,48.33219228824356],[124.42556318569245,48.17437246391805],[124.56224734923569,48.236177476709145],[124.52069949808339,48.36903758441693],[124.53806277897405,48.571686713371065],[124.62183027574656,48.74198639645499],[124.82155968643036,49.060881660160504],[124.86393436078208,49.175396633248],[125.15812829028835,49.1511087101988],[125.22287885977153,49.22004507072347],[125.267372267616,49.43848135033406],[125.23569461531417,49.55439158830117],[125.22577273962025,49.91827118626625],[125.29522586498172,50.01446686495382],[125.26442671092394,50.10572744376651],[125.41842247941389,50.1946109084667],[125.5307670430646,50.39304840795762],[125.80940636591112,50.56223704700207],[125.82403079568462,50.766798203873975],[126.00102257693044,50.90175120755217],[126.05626468276887,50.98027354608723],[125.98438276555214,51.104219469352955],[125.84340945907928,51.206228746159724],[125.7194893742352,51.25371938753969],[125.48663537042592,51.507398993768504],[125.33331139460518,51.58274323251419],[125.12753584180564,51.615738634430386],[125.06061486198621,51.53437409109145],[124.82062951134287,51.36585724471604],[124.66622033080353,51.33526479803194],[124.50188927636901,51.36058624895625],[124.35078738772768,51.27862742821324],[124.16206505655703,51.328365994295154],[123.86626915929423,51.31343150525976],[123.78875451111173,51.232816270754284],[123.56964643793282,51.203903307091906],[123.43833662293673,51.273098050034974],[123.27168012943434,51.26669017181396],[123.08812544213538,51.31247549085123],[122.95624718635855,51.38606273130995],[122.83894168531054,51.510551256035626],[122.83553104062503,51.567757065735975],[122.71445315968549,51.70167654153914],[122.75419233570778,51.84748159420025],[122.63766198101558,52.09496002958167],[122.77512129091474,52.20001821586797],[122.73073123585783,52.248904120328916],[122.49177941308938,52.29484446899707],[122.3386104677989,52.453697822096785],[122.17365929573992,52.47963939154465],[122.01790652896307,52.28311391907212],[121.83125125534116,52.26936798844193],[121.69234500461823,52.388533841463584],[121.49091027159176,52.444680283967955],[121.17392703670339,52.594981187831564],[121.50274417520347,52.77468598087333],[121.69151818231819,52.908347073358726],[121.80019371976425,53.02358551685808],[121.60718224476477,53.240729885275954],[121.41327478505161,53.317334824121446],[121.64102950100005,53.38490793900013],[121.88897302300012,53.43058990500006],[122.08162276200005,53.42950470000005],[122.33783451400006,53.49130971300005],[122.47121138500012,53.46474802700004],[122.85966312700015,53.47394643200005],[123.15359867400002,53.513117167000075],[123.25255904200003,53.56779083300003],[123.48551639800013,53.52598460000007],[123.63956384300008,53.55125437400005],[123.73216801000007,53.50376373300014],[123.97055139200012,53.455187887000136],[124.12180830900002,53.3526876840001],[124.23270593300003,53.381652323000054],[124.40819909700014,53.235692241000095],[124.6786735440001,53.19933787000011],[124.72016971900007,53.14882415800011],[125.01942793800009,53.210732524000036],[125.12743168100013,53.206546733000096],[125.52130944900006,53.042422384000076],[125.62135502200016,53.06213694300004],[125.83736250800013,52.906720073000116],[126.03512821500016,52.72711863300003],[125.97316817300015,52.631568909000066],[126.21232670100011,52.53304779100009],[126.34368819200012,52.39137685200009],[126.31573124200008,52.31621348100006],[126.42120284000015,52.28730051700012],[126.31671309500007,52.199760641000125],[126.53117028800006,52.15265757200012],[126.514427125,52.04253509600011],[126.44605920400011,51.9825387570001],[126.8074324960001,51.53421986900011],[126.80030114800007,51.418955587000085],[126.9546069750001,51.329581198000085],[126.90541101100013,51.16426829100007],[126.93176599200007,51.06378346800008],[127.14425948100012,50.90350901300013],[127.287351522,50.7510118620001],[127.36481449400014,50.55474477200008],[127.28895349200013,50.46601633700007],[127.35850997000006,50.41511505100004],[127.33065637200008,50.32819529200003],[127.57839318800006,50.22055328400006],[127.57017663600004,50.130222880000105],[127.48666752200006,50.025629782000095],[127.53400313300011,49.92248362200007],[127.5081132410001,49.82233469700006],[127.64428064000009,49.76714426700008],[127.7220019940001,49.64859853100006],[127.83088423700008,49.59387318900008],[127.99159794100007,49.5987307740001],[128.09247033800006,49.54157664000007],[128.3447546800001,49.547984518000106],[128.38351200400012,49.57935211300014],[128.66618208900013,49.60947947200003],[128.79692346200005,49.57247914600009],[128.879192342,49.47971995100008],[129.05055139200016,49.37667714500009],[129.19390181500012,49.38969960500003],[129.3620569260001,49.349805400000065],[129.50241011600014,49.41078359000005],[129.57175988900008,49.279835510000055],[129.71118290200008,49.27415110300012],[129.75562463400007,49.18428578700011],[129.91344445800013,49.03954010000007],[130.24934126800008,48.864512024000106],[130.38680057800013,48.896293030000066],[130.56487756400014,48.855882060000084],[130.67432824800005,48.87081654900004],[130.53325158700005,48.63579213500009],[130.71587609900013,48.499056295000116],[130.8194356690001,48.28188608800011],[130.6633728440001,48.11644399000008],[130.68238977100015,48.050349834000116],[130.90697554600007,47.88426178000009],[130.94180546100011,47.717967021000106],[131.0233508710001,47.68228444500011],[131.41836552000012,47.74261667900009],[131.57742557800015,47.66856435200006],[131.70299930900006,47.69615956700008],[131.89430546100004,47.670011292000055],[132.16167932100018,47.6900100710001],[132.33241825400006,47.73651886000005],[132.5246545820001,47.707528381000145],[132.65880660100015,47.86981821800006],[132.6746195890001,47.950614319000096],[132.82065718600012,47.94237192800006],[133.09195845600004,48.106780497000045],[133.18518273900008,48.124815573000035],[133.46371871000014,48.08952056900006],[133.55994022700008,48.113291728],[133.72127404800005,48.244756572000114],[133.9824467370001,48.285167542000096],[134.05717085800012,48.32718048200013],[134.38634973185174,48.381337382904746],[134.54261926300012,48.35730784100019],[134.70085249900012,48.261525574000075],[134.68297245300016,48.13551259400006],[134.56721724500017,48.04037628200018],[134.7725793870003,47.71073232100022],[134.68266239500014,47.58784576400012],[134.48463830600014,47.430180970000094],[134.29281539000033,47.40971710300005],[134.15411584500026,47.257891744000176],[134.2272896730002,47.117745260000106],[134.12424686700024,47.070513001000165],[134.02048059100014,46.83404164600012],[134.04466516200011,46.772004090000166],[133.98802779200014,46.62516550700008],[133.84932824800012,46.480290630000184],[133.92146854700025,46.41013987200006],[133.86338423700022,46.3392914840002],[133.9024516200002,46.258986308000175],[133.68737430900012,46.14183583600004],[133.71931034400018,46.079307353000075],[133.6581254480002,45.93450999000012],[133.51436161300023,45.8792678840002],[133.4877999270002,45.68666982000008],[133.41348921800022,45.57334340500017],[133.20213260900016,45.51128000900022],[133.14022424400014,45.435419007000206],[133.09753951000027,45.243544413000166],[133.11541955600023,45.12303497300013],[132.95336226400008,45.02438466400022],[132.83977746600033,45.05916290300007],[132.7987004157403,45.18971711881747],[132.72216574268617,45.25035612900652],[132.42014814824904,45.33719354651035],[132.19584268337468,45.33395554111195],[131.99194433639423,45.229353898096576],[131.81803104700032,45.33278961200011],[131.72315311800014,45.215329082000096],[131.62775842400015,45.19848256500012],[131.60905155500012,45.08970367400008],[131.41950240100016,44.95896230100007],[131.3294820560002,44.96764394200011],[131.15801965400016,44.901704814000084],[131.05156620300028,44.909042867000096],[130.93343387900018,44.84170847600018],[131.06582889900017,44.6820283010002],[131.26447310400022,44.05421132500004],[131.17031864400025,43.78110138000011],[131.19202274600013,43.58863250700011],[131.166908,43.52106557300016],[131.25284846284336,43.46916859112878]]]}},{"type":"Feature","properties":{"id":32,"name":"香港"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.0517684250002,22.32851797100014],[113.92839603000016,22.210760809000078],[113.89250735800033,22.292710679000038],[114.0517684250002,22.32851797100014]]],[[[114.22982832100013,22.555812893000137],[114.33806399800017,22.446356512000165],[114.27800540500016,22.390977281000175],[114.27833092500009,22.27045319200016],[114.18165123800014,22.294419664000202],[114.11101321700028,22.365952867000175],[113.91439863400012,22.37612539300011],[113.9986271490003,22.488552151000192],[114.08236738400024,22.52936432500016],[114.22982832100013,22.555812893000137]]]]}},{"type":"Feature","properties":{"id":33,"name":"澳门"},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.55860436300031,22.163031317000048],[113.56942793100006,22.16075267100007],[113.57406660200024,22.16075267100007],[113.57406660200024,22.156113999000127],[113.5717879570002,22.152899481000077],[113.5678817070002,22.150580145000106],[113.56324303500026,22.150580145000106],[113.56023196700016,22.141546942000105],[113.56763756600014,22.139064846000167],[113.57252037900014,22.137315171000182],[113.57797285200024,22.139634507000068],[113.57797285200024,22.1380882830002],[113.57488040500027,22.135036526000192],[113.57976321700016,22.131903387000136],[113.5859481130002,22.131944078000117],[113.58668053500014,22.129543361000174],[113.58749433700007,22.12722402600022],[113.58749433700007,22.12486399900007],[113.5859481130002,22.124090887000136],[113.58358808700018,22.12331777600022],[113.57748457100007,22.126654364000046],[113.57797285200024,22.120917059000078],[113.57406660200024,22.11937083500004],[113.57097415500027,22.120143947000145],[113.56674238400024,22.123358466000212],[113.56666100400025,22.117377020000106],[113.56519616000014,22.11261627800019],[113.56633548300033,22.107692776000135],[113.56324303500026,22.106919664000202],[113.55738366000014,22.111151434000135],[113.5522567070002,22.107692776000135],[113.55152428500026,22.106146552000098],[113.54916425900012,22.105373440000164],[113.54680423300016,22.105373440000164],[113.54371178500008,22.107692776000135],[113.54110761800018,22.113267320000148],[113.54525800900024,22.11424388200004],[113.54232832100013,22.14073314000018],[113.54224694100014,22.140814520000163],[113.53410892000022,22.14878978100012],[113.53223717500032,22.152533270000163],[113.53223717500032,22.152614651000135],[113.53443444100014,22.161200262000165],[113.54143313900022,22.162339585000097],[113.54297936300014,22.16380442900015],[113.55290774800017,22.165838934000078],[113.55860436300031,22.163031317000048]]],[[[113.55380293100006,22.21149323100022],[113.55559329500022,22.207546291000227],[113.55681399800017,22.203558661000073],[113.55152428500026,22.20441315300016],[113.5484318370003,22.202053127000198],[113.54916425900012,22.199733791000142],[113.55071048300033,22.198960679000123],[113.55713951900009,22.20246002800019],[113.55380293100006,22.196641343000067],[113.55380293100006,22.195868231000134],[113.5522567070002,22.19741445500017],[113.55071048300033,22.195868231000134],[113.55152428500026,22.19419993700012],[113.55152428500026,22.19188060100015],[113.55152428500026,22.191107489000046],[113.55152428500026,22.18956126500018],[113.5484318370003,22.188055731000134],[113.54297936300014,22.184190171000125],[113.53988691500007,22.182643947000088],[113.53598066500001,22.182643947000088],[113.53288821700028,22.178697007000096],[113.5289005870003,22.178697007000096],[113.52483157600005,22.173814195000233],[113.52475019600007,22.17373281500005],[113.51986738400012,22.18370189000015],[113.51986738400012,22.183742580000143],[113.52019290500004,22.184881903000075],[113.52214603000027,22.19049713700008],[113.52483157600005,22.19306061400019],[113.52540123800031,22.193630276000135],[113.53036543100018,22.20152415600012],[113.53524824300007,22.207546291000227],[113.5337020190002,22.210760809000078],[113.53207441500001,22.210760809000078],[113.53288821700028,22.20917389500005],[113.52735436300009,22.207546291000227],[113.52434329500034,22.21255117400017],[113.5289005870003,22.213853257000153],[113.5289005870003,22.214626369000086],[113.53524824300007,22.214626369000086],[113.53646894600024,22.21706777600022],[113.53891035200002,22.220770575000074],[113.5445255870003,22.21767812700017],[113.5445255870003,22.216131903000132],[113.55071048300033,22.213853257000153],[113.55380293100006,22.21149323100022]]]]}},{"type":"Feature","properties":{"id":34,"name":"台湾"},"geometry":{"type":"Polygon","coordinates":[[[121.63599694100014,25.222805080000114],[121.71851647200015,25.15200429900011],[121.89283287900003,25.113674221000167],[121.9057723320002,24.95010000200014],[121.82349694100014,24.854925848000164],[121.81495201900032,24.644354559000192],[121.85596764400032,24.550523179000123],[121.78003991000003,24.43268463700008],[121.77271569100003,24.30923086100006],[121.66285241000014,24.193101304000038],[121.60743248800014,24.07684967700004],[121.62891686300009,24.026190497000158],[121.52149498800031,23.658677476000094],[121.46216881600026,23.34300364800015],[121.4088647800001,23.254584052000126],[121.40007571700005,23.145493882000153],[121.29957116000003,22.95917389500019],[121.19027754000001,22.843166408000144],[121.14144941500001,22.741766669000185],[121.02100670700008,22.647894598000136],[120.9482528000002,22.52680084800005],[120.87501061300014,22.289252020000134],[120.87924238400001,22.055812893000052],[120.84156334700009,21.925482489000103],[120.70435631600014,21.98139069200016],[120.69695071700016,22.113226630000156],[120.62126712300017,22.29507070500017],[120.51197350400025,22.42475006700016],[120.33122806100027,22.51972077000019],[120.17554772200015,22.88410065300016],[120.17025800900024,23.013373114000046],[120.05941816500012,23.151027736000174],[120.1301491600002,23.360960244000154],[120.12426153300032,23.520020550000083],[120.18921959700026,23.774807033000116],[120.29224694100003,23.911932684000192],[120.34009850400014,24.02179596600007],[120.4931746750002,24.23065827000005],[120.57081139400032,24.404933986000202],[120.64893639400009,24.48387278900023],[120.70215905000032,24.60700104400013],[120.84750410200013,24.710842190000108],[120.90235436300031,24.836818752000056],[121.05933678500003,25.050238348000164],[121.37875410200007,25.157945054000038],[121.43628991000026,25.24144114800012],[121.53972415500004,25.28742096600007],[121.63599694100014,25.222805080000114]]]}}]}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-04 15:01:30 
 * @Last Modified time:   2017-12-04 15:01:30 
 * @Description: 绘制中国南海地图
 */
/* harmony default export */ __webpack_exports__["a"] = ((svg, trX = 680, trY = 410, scale = 0.5) => {
  const southchinasea = `<g xmlns="http://www.w3.org/2000/svg" id="southchinasea" transform="translate(${trX},${trY})scale(${scale})"` + ` class="southchinasea" stroke-width="1" fill="skyblue" stroke="black">
  <title>South China Sea</title>
  <line id="svg_1" y2="7" x2="145" y1="7" x1="20"></line>
  <line id="svg_2" y2="24" x2="6" y1="7" x1="20"></line>
  <line id="svg_3" y2="195" x2="145" y1="7" x1="145"></line>
  <line id="svg_4" y2="195" x2="6" y1="24" x1="6"></line>
  <line id="svg_5" y2="195" x2="145" y1="195" x1="6"></line>
  <path id="svg_6" d="m6,31.5l9,7.5l15,9l15,4l18,0l17,-14l21,-31L20,7L6,24z"></path>
  <path id="svg_7" d="m113,7l10,25l11,-25z"></path>
  <path id="svg_9" d="m46.5,66.5l14.5,-6.5l-1,13l-7,7l-15,4l8.5,-17.5z"></path>
  <line id="svg_10" y2="46.5" x2="132.5" y1="31.5" x1="141.5"></line>
  <line id="svg_11" y2="76.5" x2="115.5" y1="61.5" x1="121.5"></line>
  <line id="svg_12" y2="111.5" x2="110.5" y1="92.5" x1="110.5"></line>
  <line id="svg_13" y2="147.5" x2="101.5" y1="127.5" x1="108.5"></line>
  <line id="svg_14" y2="177.5" x2="78.5" y1="163.5" x1="91.5"></line>
  <line id="svg_15" y2="188.5" x2="39.5" y1="184.5" x1="54.5"></line>
  <line id="svg_16" y2="158.5" x2="11.5" y1="172.5" x1="17.5"></line>
  <line id="svg_17" y2="132.5" x2="39.5" y1="142.5" x1="24.5"></line>
  <line id="svg_18" y2="98.5" x2="37.5" y1="113.5" x1="40.5"></line>
 </g>`;
  svg.html(function (d) {
    return d3.select(this).html() + southchinasea;
  });
});

/***/ })
],[17]);