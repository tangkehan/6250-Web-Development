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
                console.log("add");
            }
            else{
                // Initialize as an object
                state.cart[cat.name] = { 
                    img: cat.img,
                    quantity: 1,
                    price: cat.price
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


render(state, cats, rootEl);
addToCart(rootEl);
showCart(rootEl);