import { DUMMY_PRODUCTS } from '../dummy-products.js';

export class CartService {
    constructor() {}
    
    addItemToCart  = (items, id) => {
        const updatedItems = items;

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === id);
            updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1,
            });
        }

        return updatedItems;
    }
    
    updateCartItemQuantity = (productId, amount, items) => {
        const updatedItems = items;

        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return updatedItems;
    }
}