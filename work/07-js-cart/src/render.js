import { PAGES } from './catInfo';

function render (state, rootEl){
    if (state.page == PAGES.PRODUCTS){
        renderProduct();
    }

    if (state.page == PAGES.CART){
        renderCart();
    }
}

function renderProduct(state, cats, rootEl){
    const html = cats.map((cat, index) => {
        return `
            <div class = "cat">
                <img src = "${cat.img}" alt = "${cat.name}">
                <span class = "cat-name">Cat Name: ${cat.name}</span> 
                <span class = "cat-price">Cat Price: ${cat.price}</span>
                <button class = "add-to-cart" data-index = "${index}">Add To Cart</button>
            </div>
        `
    }).join('');
    rootEl.innerHTML = `
        <ul class = 'products'>${html}</ul>
        <button class = 'view-cart'>View Cart${(state.quantity > 0) ? "(" + state.quantity +")" : ""}</button>
    `
}

// function renderCart(){
    
// }

export default renderProduct;