export const cats = [
    {   
        name: "spring",
        img: "http://placekitten.com/150/150?image=1 ",
        price: 0.99
    },
    {
        name: "summer",
        img: "http://placekitten.com/150/150?image=2",
        price: 3.14
    },
    {
        name: "autumn",
        img: "http://placekitten.com/150/150?image=3",
        price: 2.73 
    }
];

export const PAGES = {
    PRODUCTS: 'products',
    CART: 'cart'
}

export const state = {
    cart: {},
    page: PAGES.PRODUCTS,
    totalQuantity: 0,
    totalPrice: 0,
}

