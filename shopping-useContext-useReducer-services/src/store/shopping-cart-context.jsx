import { createContext, useReducer } from 'react';
import { AuthService } from '../services/auth-service.jsx';
import { CartReducer } from './cart-reducer.jsx';

const services = {
  authService: new AuthService()
};

const CartContext = createContext({
  services: {},
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {}
});

const { Provider } = CartContext;

const CartProvider = ({children}) => {
  const iniCarState = {
    items: []
  }
  const [cartState, cartDispach] = useReducer(CartReducer, iniCarState);

  function handleAddItemToCart(id) {
    cartDispach({
      type: 'ADD_ITEM',
      payload: id
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispach({
      type: 'UPDATE_ITEM',
      payload: {
        productId: productId, 
        amount: amount
      }
    });
  }

  const ctxValue = {
    services: services,
    items: cartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity
  }

  return <Provider value={ctxValue}>{children}</Provider>;
};

export { CartContext, CartProvider };

