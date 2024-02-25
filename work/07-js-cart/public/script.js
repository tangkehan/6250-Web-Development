/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/catInfo.js":
/*!************************!*\
  !*** ./src/catInfo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGES: () => (/* binding */ PAGES),
/* harmony export */   cats: () => (/* binding */ cats),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
var cats = [{
  name: "spring",
  img: "http://placekitten.com/150/150?image=1 ",
  price: 0.99
}, {
  name: "summer",
  img: "http://placekitten.com/150/150?image=2",
  price: 3.14
}, {
  name: "autumn",
  img: "http://placekitten.com/150/150?image=3",
  price: 2.73
}];
var PAGES = {
  PRODUCTS: 'products',
  CART: 'cart'
};
var state = {
  cart: [],
  page: PAGES.PRODUCTS,
  quantity: 0,
  totalPrice: 0,
  showCart: true
};

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _catInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catInfo */ "./src/catInfo.js");

function render(state, rootEl) {
  if (state.page == _catInfo__WEBPACK_IMPORTED_MODULE_0__.PAGES.PRODUCTS) {
    renderProduct();
  }
  if (state.page == _catInfo__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART) {
    renderCart();
  }
}
function renderProduct(state, cats, rootEl) {
  var html = cats.map(function (cat, index) {
    return "\n            <div class = \"cat\">\n                <img src = \"".concat(cat.img, "\" alt = \"").concat(cat.name, "\">\n                <span class = \"cat-name\">Cat Name: ").concat(cat.name, "</span> \n                <span class = \"cat-price\">Cat Price: ").concat(cat.price, "</span>\n                <button class = \"add-to-cart\" data-index = \"").concat(index, "\">Add To Cart</button>\n            </div>\n        ");
  }).join('');
  rootEl.innerHTML = "\n        <ul class = 'products'>".concat(html, "</ul>\n        <button class = 'view-cart'>View Cart").concat(state.quantity > 0 ? "(" + state.quantity + ")" : "", "</button>\n    ");
}

// function renderCart(){

// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProduct);

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
/* harmony import */ var _catInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catInfo */ "./src/catInfo.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");




var rootEl = document.querySelector('#root');
(0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_catInfo__WEBPACK_IMPORTED_MODULE_0__.state, _catInfo__WEBPACK_IMPORTED_MODULE_0__.cats, rootEl);
})();

/******/ })()
;
//# sourceMappingURL=script.js.map