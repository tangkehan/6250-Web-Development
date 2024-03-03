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
        <button class = 'view-cart'>View Cart${(state.totalQuantity > 0) ? "(" + state.totalQuantity +")" : ""}</button>
    `
}

function renderCart(state, cats, rootEl){
    let message = '';
    if (Object.keys(state.cart).length === 0){
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
            <div class = "item">
                <img src = "${item.img}" alt = "${itemName}">
                <div class = "item-info">
                    <span class = "item-name">Cat Name: ${itemName}</span> 
                    <span class = "item-quantity">Quantity: ${item.quantity}</span>
                    <span class = "item-cost">Cost: ${item.totalCost.toFixed(2)}</span> 
                    <div class = "item-button">
                        <button class = "delete" data-index = "${index}">-</button>
                        <button class = "add" data-index = "${index}">+</button>
                    </div>
                </div>
            </div>
        `
    }).join('');

    rootEl.innerHTML = `
        <ul class = 'products'>${productsHtml}</ul>
        <div class = "cart-container">
            <h2>View the Cart</h2>
            <span>${message}</span>
            <ul class = 'cart'>${cartHtml}</ul>
            <span class = 'cart-quantity'>Total quantity: ${state.totalQuantity}</span>
            <span class='cart-price'>Total Price: ${(state.totalPrice >= 0 ? state.totalPrice.toFixed(2) : '0.00')}</span>
            <button class = "hide-cart">Hide Cart</button>
            <button class = "checkout"">Checkout</button>
        </div>
    `
}

export default render;