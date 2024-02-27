import { PAGES } from './catInfo';

function render(state, cats, rootEl){
    if (state.page == PAGES.PRODUCTS){
        renderProduct(state, cats, rootEl);
    }

    if (state.page == PAGES.CART){
        renderCart(state, cats, rootEl);
    }
}

function renderProduct(state, cats, rootEl){
    const html = cats.map((cat, index) => {
        return `
            <div class = "cat">
                <img src = "${cat.img}" alt = "${cat.name}">
                <div class = "cat-info">
                    <span class = "cat-name">Cat Name: ${cat.name}</span> 
                    <span class = "cat-price">Cat Price: ${cat.price}</span>
                    <button class = "add-to-cart" data-index = "${index}">Add To Cart</button>
                </div>
            </div>
        `
    }).join('');
    rootEl.innerHTML = `
        <ul class = 'products'>${html}</ul>
        <button class = 'view-cart'>View Cart${(state.quantity > 0) ? "(" + state.quantity +")" : ""}</button>
    `
}

function renderCart(state, cats, rootEl){
    const message = '';
    if (state.cart == []){
        message = "Nothing in the cart";
    }

    const productsHtml = cats.map((cat, index) => {
        return `
            <div class = "cat">
                <img src = "${cat.img}" alt = "${cat.name}">
                <div class = "cat-info">
                    <span class = "cat-name">Cat Name: ${cat.name}</span> 
                    <span class = "cat-price">Cat Price: ${cat.price}</span>
                    <button class = "add-to-cart" data-index = "${index}">Add To Cart</button>
                </div>
            </div>
        `
    }).join('');

    const cartHtml = Object.keys(state.cart).map((itemName, index) => {
        const item = state.cart[itemName];
        return `
            <div class = "cart">
                <img src = "${item.img}" alt = "${itemName}">
                <div class = "item-info">
                    <span class = "item-name">Cat Name: ${itemName}</span> 
                    <span class = "item-quantity">Quantity: ${item.quantity}</span>
                    <button class = "delete" data-index = "${index}">-</button>
                    <button class = "add" data-index = "${index}">+</button>
                </div>
            </div>
        `
    }).join('');

    rootEl.innerHTML = `
        <ul class = 'products'>${productsHtml}</ul>
        <h2>View the Cart</h2>
        <span>${message}</span>
        <ul class = 'cart'>${cartHtml}</ul>
        <span class = 'cart-quantity'>Total quantity: ${state.totalQuantity}</span>
        <span class = 'cart-price'>Total Price: ${state.totalPrice}</span>
        <button class = "hide-cart">Hide Cart</button>
        <button class = "Checkout"">Checkout</button>
    `
}

export default render;