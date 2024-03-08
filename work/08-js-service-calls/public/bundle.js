/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function render(state, rootEl) {
  if (!state.username && !state.storedWord) {
    rootEl.innerHTML = loginPage();
  } else {
    rootEl.innerHTML = wordPage(state.username, state.storedWord);
  }
}
function loginPage() {
  return "\n        <div class = \"container\">\n            <h1>Login</h1>\n            <label for=\"username\">Username:</label>\n            <input type=\"text\" class = \"username\" placeholder=\"Please enter your username\">\n            <button class=\"login-button\">Login</button>\n        </div>\n    ";
}
function wordPage(username, storedWord) {
  return "\n        <div class = \"container\">\n            <h1>Word Page</h1>\n            <p>Username: ".concat(username, "</p>\n            <p>Stored word: ").concat(storedWord, "</p>\n            <div class = 'new-word'>\n                <label for=\"newWord\">New Word:</label>\n                <input type=\"text\" class =\"newWord\" placeholder=\"Set your word\">\n                <button class =\"change-word\">Change Word</button>\n            </div>\n            <button class = \"logout-button\">Logout</button>     \n        </div>\n    ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchSetWord: () => (/* binding */ fetchSetWord),
/* harmony export */   fetchStoredWord: () => (/* binding */ fetchStoredWord)
/* harmony export */ });
// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions

function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // set this header when sending JSON in the body of request
    },
    body: JSON.stringify({
      username: username
    })
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  // so our caller can handle all "errors" in a similar way
  ["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      // This service returns JSON on errors,
      // so we use that as the error object and reject
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
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
function fetchStoredWord() {
  return fetch('/api/word')["catch"](function (err) {
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
function fetchSetWord(word) {
  return fetch('/api/word/', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
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
/* harmony export */   errorMessages: () => (/* binding */ errorMessages),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
var state = {
  username: '',
  storedWord: ''
};
var errorMessages = {
  'network-error': "Please check you network connection",
  'auth-missing': "Invalid Session Id",
  'auth-insufficient': "Username Dog is not Allowed",
  'required-username': "Invalid Username",
  'required-word': "Word is required",
  'invalid-word': "Invalid Word"
};

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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");





var rootEl = document.querySelector('#root');
var errorEl = document.querySelector('.error');
function handleWordPage() {
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchStoredWord)().then(function (response) {
    _state__WEBPACK_IMPORTED_MODULE_2__.state.username = response.username;
    _state__WEBPACK_IMPORTED_MODULE_2__.state.storedWord = response.storedWord;
    (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__.state, rootEl);
    errorEl.innerHTML = '';
  })["catch"](function (err) {
    var errorMessage = _state__WEBPACK_IMPORTED_MODULE_2__.errorMessages[err.error];
    errorEl.innerHTML = "<p>".concat(errorMessage, "</p>");
    _state__WEBPACK_IMPORTED_MODULE_2__.state.username = '';
    _state__WEBPACK_IMPORTED_MODULE_2__.state.storedWord = '';
    (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__.state, rootEl);
  });
}
function handleSession() {
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchSession)().then(function (response) {
    handleWordPage();
    errorEl.innerHTML = '';
  })["catch"](function (err) {
    (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__.state, rootEl);
  });
}
function handleLogin() {
  var username = document.querySelector('.username').value;
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchLogin)(username).then(function () {
    handleWordPage();
  })["catch"](function (err) {
    var errorMessage = _state__WEBPACK_IMPORTED_MODULE_2__.errorMessages[err.error];
    errorEl.innerHTML = "<p>".concat(errorMessage, "</p>");
  });
}
function changeWord() {
  var word = document.querySelector('.newWord').value;
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchSetWord)(word).then(function (response) {
    _state__WEBPACK_IMPORTED_MODULE_2__.state.storedWord = response.storedWord;
    (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__.state, rootEl);
    errorEl.innerHTML = '';
  })["catch"](function (err) {
    // if is invalid seesion id we need to render to the login page
    if (err.error === 'auth-missing') {
      _state__WEBPACK_IMPORTED_MODULE_2__.state.username = '';
      _state__WEBPACK_IMPORTED_MODULE_2__.state.storedWord = '';
      (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__.state, rootEl);
    }
    var errorMessage = _state__WEBPACK_IMPORTED_MODULE_2__.errorMessages[err.error];
    errorEl.innerHTML = "<p>".concat(errorMessage, "</p>");
  });
}
function handleLogout() {
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchLogout)().then(function () {
    _state__WEBPACK_IMPORTED_MODULE_2__.state.username = '';
    _state__WEBPACK_IMPORTED_MODULE_2__.state.storedWord = '';
    (0,_render__WEBPACK_IMPORTED_MODULE_0__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__.state, rootEl);
    errorEl.innerHTML = '';
  })["catch"](function (err) {
    var errorMessage = _state__WEBPACK_IMPORTED_MODULE_2__.errorMessages[err.error];
    errorEl.innerHTML = "<p>".concat(errorMessage, "</p>");
  });
}
handleSession();
rootEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('login-button')) {
    handleLogin();
  } else if (e.target.classList.contains('change-word')) {
    changeWord();
  } else if (e.target.classList.contains('logout-button')) {
    handleLogout();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map