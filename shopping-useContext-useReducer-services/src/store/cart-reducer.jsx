import { CartService } from '../services/cart-service.jsx';

export function CartReducer(state, action) {
    const cartService = new CartService();
    const {type, payload} = action;
    const items = [...state.items];

    if (type === 'ADD_ITEM') {
        return {
            ...state, 
            items: cartService.addItemToCart(items, payload)
        };
    }

    if (type === 'UPDATE_ITEM') {
        const {productId, amount} = payload;
        return {
            ...state, 
            items: cartService.updateCartItemQuantity(productId, amount, items)
        };
    }
    
    return state;
}