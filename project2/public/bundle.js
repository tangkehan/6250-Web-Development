/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_MESSAGE: 'required-message'
};
var CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network.  Please try again'), SERVER.AUTH_MISSING, 'Invalid session id, please login again.'), SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any records, please try again.'), SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username'), SERVER.REQUIRED_MESSAGE, 'Please enter the message'), "default", 'Something went wrong.  Please try again');

/***/ }),

/***/ "./src/listener.js":
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleLogin: () => (/* binding */ handleLogin),
/* harmony export */   handleLogout: () => (/* binding */ handleLogout),
/* harmony export */   handleRefresh: () => (/* binding */ handleRefresh),
/* harmony export */   handleSendMsg: () => (/* binding */ handleSendMsg)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function handleLogin(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.addEventListener('submit', function (e) {
    if (!e.target.classList.contains('login-form')) {
      return;
    }
    e.preventDefault();
    var username = appEl.querySelector('.username-input').value;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnLogin)();
    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
      state: state,
      appEl: appEl
    });
    setTimeout(function () {
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function () {
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.login)(username);
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnUsers)();
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnMessages)();
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
          state: state,
          appEl: appEl
        });
        return Promise.all([(0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)(), (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)()]);
      }).then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          users = _ref3[0],
          messages = _ref3[1];
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.setUsers)(users);
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
          state: state,
          appEl: appEl
        });
      })["catch"](function (err) {
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.logout)();
        (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
          state: state,
          appEl: appEl
        });
      });
    }, 1000);
  });
}
function handleLogout(_ref4) {
  var state = _ref4.state,
    appEl = _ref4.appEl;
  appEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('logout-btn')) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.logout)();
    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)()["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
        state: state,
        appEl: appEl
      });
    });
  });
}
function handleSendMsg(_ref5) {
  var state = _ref5.state,
    appEl = _ref5.appEl;
  appEl.addEventListener("submit", function (e) {
    if (!e.target.classList.contains('send-message-form')) {
      return;
    }
    e.preventDefault();
    var message = appEl.querySelector('.message-text').value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchAddMessage)(message).then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
        state: state,
        appEl: appEl
      });
    });
  });
}
function handleRefresh(_ref6) {
  var state = _ref6.state,
    appEl = _ref6.appEl;
  if (!state.isLoggedIn) {
    return;
  }
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)().then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.setUsers)(users);
    return (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)();
  }).then(function (messages) {
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderUpdates)({
      state: state,
      appEl: appEl
    });
  })["catch"](function (err) {
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)({
      state: state,
      appEl: appEl
    });
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderChat: () => (/* binding */ renderChat),
/* harmony export */   renderUpdates: () => (/* binding */ renderUpdates)
/* harmony export */ });
function render(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  var html = "\n       ".concat(renderLogin(state), "\n       ").concat(renderChat(state), "\n       ").concat(renderError(state), "\n    ");
  appEl.innerHTML = html;
}
function renderLogin(state) {
  if (state.isLoggedIn) {
    return "";
  }
  if (state.isLoginPending) {
    return "\n        <div class=\"pending\">\n            <p>Loading Login</p>\n        </div>";
  }
  var loginHtml = "\n        <div class = \"container\">\n            <h1>Login</h1>\n            <form class=\"login-form\">\n                <input type=\"text\" class=\"username-input\" placeholder=\"Enter your username\" id=\"username\">\n                <button type=\"submit\" class = 'login-button'>Login</button>\n            </form>\n        </div>\n    ";
  return loginHtml;
}
function renderChat(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  return "\n        <div id=\"chat-app\">\n            <h1>Chat Room</h1>\n            <div class=\"message-input\">\n                <div>\n                    <span>Username: ".concat(state.username, "</span>\n                </div>\n                <div class=\"information\">\n                    <div class=\"user-list-container\">\n                        <h2>Online User List</h2>\n                        <div class=\"user-list\">").concat(getUserList(state), "</div>\n                    </div>\n                    <div class=\"chat-messages-container\">\n                        <h2>Chat Messages</h2>\n                        <div class=\"chat-messages\">").concat(getMessages(state), "</div>\n                    </div>\n                </div>\n                <div class = \"send-message\">\n                    <form class = \"send-message-form\">\n                        <input type=\"text\" class=\"message-text\" placeholder=\"Type your message...\">\n                        <button type=\"submit\" id=\"send-message-btn\">Send</button>\n                    </form>\n                <div>\n                <button class=\"logout-btn\">Logout</button>\n            </div>\n        </div>\n\n    ");
}
function getUserList(state) {
  if (state.isUsersPending) {
    return "\n        <div class=\"pending\">\n            <p>Loading Users</p>\n        </div>";
  }
  return "\n        <ul class=\"users\">" + Object.values(state.users).map(function (user) {
    return "\n        <li>\n            <div class=\"user\">\n            <span class=\"username\">".concat(user, "</span>\n            </div>\n        </li>\n    ");
  }).join('') + "</ul>";
}
function getMessages(state) {
  if (state.isMessagePending) {
    return "\n        <div class=\"pending\">\n            <p>Loading Messages</p>\n        </div>";
  }
  return "<ol class=\"messages\">" + state.messages.map(function (message) {
    return "\n    <li>\n      <div class = \"message\">\n        <p class=\"send-message\">".concat(message.sender, " : ").concat(message.text, "</p>\n      </div>\n    </li>\n    ");
  }).join('') + "</ol>";
}
function renderError(state) {
  return "\n        <div class=\"error\"><p class=\"error-message\">".concat(state.errorMessage, "</p></div>\n    ");
}
function renderUpdates(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  var usersEl = appEl.querySelector('.user-list');
  var messagesEl = appEl.querySelector('.chat-messages');
  usersEl.innerHTML = getUserList(state);
  messagesEl.innerHTML = getMessages(state);
}

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAddMessage: () => (/* binding */ fetchAddMessage),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchMessages: () => (/* binding */ fetchMessages),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
//check for existing session
function fetchSession() {
  return fetch('/api/session')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchLogout() {
  return fetch('/api/session', {
    method: 'DELETE'
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchUsers() {
  return fetch('/api/users')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchMessages() {
  return fetch('/api/messages')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchAddMessage(message) {
  return fetch('/api/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setMessages: () => (/* binding */ setMessages),
/* harmony export */   setUsers: () => (/* binding */ setUsers),
/* harmony export */   waitOnLogin: () => (/* binding */ waitOnLogin),
/* harmony export */   waitOnMessages: () => (/* binding */ waitOnMessages),
/* harmony export */   waitOnUsers: () => (/* binding */ waitOnUsers)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var state = {
  isLoggedIn: false,
  isLoginPending: false,
  isMessagePending: false,
  isUsersPending: false,
  username: '',
  users: {},
  messages: [],
  errorMessage: ""
};
function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.users = {};
  state.messages = [];
  state.errorMessage = '';
}
function login(username) {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.isMessagePending = false, state.isUsersPending = false, state.username = username;
  state.errorMessage = '';
}
function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.username = '';
  state.users = {};
  state.messages = [];
  state.errorMessage = '';
}
function waitOnUsers() {
  state.users = {};
  state.isUsersPending = true;
  state.errorMessage = '';
}
function waitOnMessages() {
  state.messages = [];
  state.isMessagePending = true;
  state.errorMessage = '';
}
function setUsers(users) {
  state.users = users;
  state.isUsersPending = false;
  state.errorMessage = '';
}
function setMessages(messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.errorMessage = '';
}
function setError(error) {
  if (!error) {
    state.errorMessage = '';
    return;
  }
  state.errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listener */ "./src/listener.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var appEl = document.querySelector("#app");
(0,_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({
  state: _state__WEBPACK_IMPORTED_MODULE_3__["default"],
  appEl: appEl
});
checkForSession({
  state: _state__WEBPACK_IMPORTED_MODULE_3__["default"],
  appEl: appEl
});
(0,_listener__WEBPACK_IMPORTED_MODULE_0__.handleLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_3__["default"],
  appEl: appEl
});
(0,_listener__WEBPACK_IMPORTED_MODULE_0__.handleLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_3__["default"],
  appEl: appEl
});
(0,_listener__WEBPACK_IMPORTED_MODULE_0__.handleSendMsg)({
  state: _state__WEBPACK_IMPORTED_MODULE_3__["default"],
  appEl: appEl
});
setInterval(function () {
  return (0,_listener__WEBPACK_IMPORTED_MODULE_0__.handleRefresh)({
    state: _state__WEBPACK_IMPORTED_MODULE_3__["default"],
    appEl: appEl
  });
}, 5000);
function checkForSession(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function (session) {
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.login)(session.username);
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.waitOnUsers)();
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.waitOnMessages)();
    (0,_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({
      state: state,
      appEl: appEl
    });
    return Promise.all([(0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)(), (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchMessages)()]);
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_1__.SERVER.AUTH_MISSING) {
      return Promise.reject({
        error: _constants__WEBPACK_IMPORTED_MODULE_1__.CLIENT.NO_SESSION
      });
    }
    return Promise.reject(err);
  }).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      users = _ref3[0],
      messages = _ref3[1];
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.setUsers)(users);
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.setMessages)(messages);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({
      state: state,
      appEl: appEl
    });
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) == _constants__WEBPACK_IMPORTED_MODULE_1__.CLIENT.NO_SESSION) {
      (0,_state__WEBPACK_IMPORTED_MODULE_3__.logout)();
      (0,_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({
        state: state,
        appEl: appEl
      });
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_3__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_render_js__WEBPACK_IMPORTED_MODULE_4__.render)({
      state: state,
      appEl: appEl
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map