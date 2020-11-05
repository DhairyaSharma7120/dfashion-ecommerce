import cartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
    type: cartActionTypes.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type:cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})