import { AnyAction } from 'redux';
import { setIsCartOpen, setCartItems } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
    readonly cartItems: CartItem[];
    readonly isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (
    state = CART_INITIAL_STATE,
    action = {} as AnyAction
): CartState => {
    if (setIsCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload,
        };
    }
    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    return state;
};

