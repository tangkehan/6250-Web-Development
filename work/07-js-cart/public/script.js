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
  cart: {},
  page: PAGES.PRODUCTS,
  totalQuantity: 0,
  totalPrice: 0
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
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function render(state, cats, rootEl) {
  if (state.page == _catInfo__WEBPACK_IMPORTED_MODULE_0__.PAGES.PRODUCTS) {
    renderProduct(state, cats, rootEl);
  }
  if (state.page == _catInfo__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART) {
    renderCart(state, cats, rootEl);
  }
}
function renderProduct(state, cats, rootEl) {
  var html = cats.map(function (cat, index) {
    return "\n            <div class = \"cat\">\n                <img src = \"".concat(cat.img, "\" alt = \"").concat(cat.name, "\">\n                <div class = \"cat-info\">\n                    <span class = \"cat-name\">Cat Name: ").concat(cat.name, "</span> \n                    <span class = \"cat-price\">Cat Price: ").concat(cat.price, "</span>\n                    <button class = \"add-to-cart\" data-index = \"").concat(index, "\">Add To Cart</button>\n                </div>\n            </div>\n        ");
  }).join('');
  rootEl.innerHTML = "\n        <ul class = 'products'>".concat(html, "</ul>\n        <button class = 'view-cart'>View Cart").concat(state.quantity > 0 ? "(" + state.quantity + ")" : "", "</button>\n    ");
}
function renderCart(state, cats, rootEl) {
  var message = '';
  if (state.cart == []) {
    "Nothing in the cart", _readOnlyError("message");
  }
  var productsHtml = cats.map(function (cat, index) {
    return "\n            <div class = \"cat\">\n                <img src = \"".concat(cat.img, "\" alt = \"").concat(cat.name, "\">\n                <div class = \"cat-info\">\n                    <span class = \"cat-name\">Cat Name: ").concat(cat.name, "</span> \n                    <span class = \"cat-price\">Cat Price: ").concat(cat.price, "</span>\n                    <button class = \"add-to-cart\" data-index = \"").concat(index, "\">Add To Cart</button>\n                </div>\n            </div>\n        ");
  }).join('');
  var cartHtml = Object.keys(state.cart).map(function (itemName, index) {
    var item = state.cart[itemName];
    return "\n            <div class = \"cart\">\n                <img src = \"".concat(item.img, "\" alt = \"").concat(itemName, "\">\n                <div class = \"item-info\">\n                    <span class = \"item-name\">Cat Name: ").concat(itemName, "</span> \n                    <span class = \"item-quantity\">Quantity: ").concat(item.quantity, "</span>\n                    <button class = \"delete\" data-index = \"").concat(index, "\">-</button>\n                    <button class = \"add\" data-index = \"").concat(index, "\">+</button>\n                </div>\n            </div>\n        ");
  }).join('');
  rootEl.innerHTML = "\n        <ul class = 'products'>".concat(productsHtml, "</ul>\n        <h2>View the Cart</h2>\n        <span>").concat(message, "</span>\n        <ul class = 'cart'>").concat(cartHtml, "</ul>\n        <span class = 'cart-quantity'>Total quantity: ").concat(state.totalQuantity, "</span>\n        <span class = 'cart-price'>Total Price: ").concat(state.totalPrice, "</span>\n        <button class = \"hide-cart\">Hide Cart</button>\n        <button class = \"Checkout\"\">Checkout</button>\n    ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

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
function addToCart(rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
      var index = e.target.dataset.index;
      var cat = _catInfo__WEBPACK_IMPORTED_MODULE_0__.cats[index];
      if (cat.name in _catInfo__WEBPACK_IMPORTED_MODULE_0__.state.cart) {
        var item = _catInfo__WEBPACK_IMPORTED_MODULE_0__.state.cart[cat.name];
        item.quantity += 1;
        console.log("add");
      } else {
        // Initialize as an object
        _catInfo__WEBPACK_IMPORTED_MODULE_0__.state.cart[cat.name] = {
          img: cat.img,
          quantity: 1,
          price: cat.price
        };
      }
      _catInfo__WEBPACK_IMPORTED_MODULE_0__.state.totalQuantity += 1;
      _catInfo__WEBPACK_IMPORTED_MODULE_0__.state.totalPrice += cat.price;
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_catInfo__WEBPACK_IMPORTED_MODULE_0__.state, _catInfo__WEBPACK_IMPORTED_MODULE_0__.cats, rootEl);
  });
}
function showCart(rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('view-cart')) {
      _catInfo__WEBPACK_IMPORTED_MODULE_0__.state.page = _catInfo__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART;
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_catInfo__WEBPACK_IMPORTED_MODULE_0__.state, _catInfo__WEBPACK_IMPORTED_MODULE_0__.cats, rootEl);
    }
  });
}
(0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_catInfo__WEBPACK_IMPORTED_MODULE_0__.state, _catInfo__WEBPACK_IMPORTED_MODULE_0__.cats, rootEl);
addToCart(rootEl);
showCart(rootEl);
})();

/******/ })()
;
//# sourceMappingURL=script.js.map