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
        } else {
            const tempProducts = {...payload, cartQuantity:1}
            state.cartItems.push(tempProducts);
            toast.success(`${payload.name} Producto agregado a el carrito`)
        }

        //Agregar al Local Storage
        localStorage.setItem("cart-items",JSON.stringify(state.cartItems))
   },
   DECREASE_CART:(state, {payload})=>{
    const productIndex = state.cartItems.findIndex(
        (item)=> item.id === payload.id)
    
        if (state.cartItems[productIndex].cartQuantity > 1) {
            state.cartItems[productIndex].cartQuantity -= 1;
        } else if (state.cartItems[productIndex].cartQuantity === 1 ){
            const newCartItem = state.cartItems.filter((item)=>item.id !== payload.id)
            state.cartItems = newCartItem
        }

        localStorage.setItem("cart-items", JSON.stringify(state.cartItems));

   },
   REMOVE_FROM_CART: (state, {payload}) => {
     
     const newCartItem = state.cartItems.filter((item)=>item.id !== payload.id)
     
     state.cartItems = newCartItem

     localStorage.setItem("cart-items", JSON.stringify(state.cartItems));

   },
   CLEAR_CART:(state)=>{

        state.cartItems = [];
        state.cartTotalQuantity = 0;
        state.cartTotalAmount = 0;

        localStorage.removeItem('cart-items')
   },
   CALCULATE_SUBTOTAL:(state , {payload})=>{
        const array = [];
        
        state.cartItems.map((item)=>{
            const {price , cartQuantity}= item;
            const cartItemsAmount = price * cartQuantity;
            
            return array.push(cartItemsAmount)
        })

        let totalAmount = array.reduce((a, b) => a + b, 0);

        state.cartTotalAmount = totalAmount;

   },
   CALCULATE_TOTAL_QUANTITY:(state , {payload})=>{
        const array = [];

        state.cartItems.map((item)=>{
            const {cartQuantity} = item;
            return array.push(cartQuantity)
        })

        let totalQuantity = array.reduce((a,b)=> a + b , 0)

        state.cartTotalQuantity = totalQuantity

   }
  }
})

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, DECREASE_CART, REMOVE_FROM_CART , CLEAR_CART, CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTITY} = cartSlice.actions