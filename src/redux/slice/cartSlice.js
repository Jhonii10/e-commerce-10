import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cart-items')
    ? JSON.parse(localStorage.getItem('cart-items')) : [],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
   reducers: {
   ADD_TO_CART: (state, {payload}) => {
    const productIndex = state.cartItems.findIndex(
        (item)=> item.id === payload.id)

        if (productIndex >= 0) {
            state.cartItems[productIndex].cartQuantity += 1;
            toast.info(`${payload.name} incrementado una unidad `)
        } else {
            const tempProducts = {...payload, cartQuantity:1}
            state.cartItems.push(tempProducts);
            toast.success(`${payload.name} Producto agregado a el carrito`)
        }

        //Agregar al Local Storage
        localStorage.setItem("cart-items",JSON.stringify(state.cartItems))
   }
  }
})

// Action creators are generated for each case reducer function
export const { ADD_TO_CART } = cartSlice.actions