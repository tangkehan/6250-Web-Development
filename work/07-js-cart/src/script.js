"use strict";
import {cats, state, PAGES} from './catInfo';
import render from './render';

const rootEl = document.querySelector('#root');

function addToCart(rootEl){
    rootEl.addEventListener('click', (e) => {
        if ( e.target.classList.contains('add-to-cart') ) {
            const index = e.target.dataset.index;
            const cat = cats[index];
            if (cat.name in state.cart){
                let item = state.cart[cat.name];
                item.quantity += 1;
                item.totalCost += cat.price;
            }
            else{
                // Initialize as an object
                state.cart[cat.name] = { 
                    img: cat.img,
                    quantity: 1,
                    price: cat.price,
                    totalCost: cat.price,
                };
            }
            state.totalQuantity += 1;
            state.totalPrice += cat.price;
        }
        render(state, cats, rootEl);
      });
}

function showCart(rootEl){
    rootEl.addEventListener('click', (e) =>{
        if ( e.target.classList.contains('view-cart') ) {
            state.page = PAGES.CART;
            render(state, cats, rootEl);
        }
    })
}

function hideCart(rootEl){
    rootEl.addEventListener('click', (e) =>{
        if ( e.target.classList.contains('hide-cart') ) {
            state.page = PAGES.PRODUCTS;
            render(state, cats, rootEl);
        }
    })
}

function addOneItem(rootEl){
    rootEl.addEventListener('click', (e) =>{
        if ( e.target.classList.contains('add') ){
            const index = e.target.dataset.index;
            const itemName = Object.keys(state.cart)[index];
            const item = state.cart[itemName];
            item.quantity += 1;
            item.totalCost += item.price;
            state.totalQuantity += 1;
            state.totalPrice += item.price;
            render(state, cats, rootEl);
        }
    })
}

function deleteOneItem(rootEl){
    rootEl.addEventListener('click', (e) =>{
        if ( e.target.classList.contains('delete') ){
            const index = e.target.dataset.index;
            const itemName = Object.keys(state.cart)[index];
            const item = state.cart[itemName];
            item.quantity -= 1;
            item.totalCost -= item.price;
            state.totalQuantity -= 1;
            state.totalPrice -= item.price;
         
            if (item.quantity === 0){
                delete state.cart[itemName];
            }
            render(state, cats, rootEl);
        }

    })
}

function resetCart(rootEl){
    rootEl.addEventListener('click', (e) =>{
        if ( e.target.classList.contains('checkout') ){
            state.cart = {};
            state.page = PAGES.PRODUCTS;
            state.totalQuantity = 0;
            state.totalPrice = 0;
            render(state, cats, rootEl);
        }
    })
}




render(state, cats, rootEl);
addToCart(rootEl);
showCart(rootEl);
hideCart(rootEl);
addOneItem(rootEl);
deleteOneItem(rootEl);
resetCart(rootEl);