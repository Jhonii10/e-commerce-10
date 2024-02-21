import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shippingDate:{},
    shippingAddress:{},
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
   reducers: {
    SAVE_SHIPPING_ADDRESS:(state , {payload})=>{
        state.shippingAddress = payload;
    },
    SAVE_SHIPPING_DATE:(state, {payload})=>{
        state.shippingDate = payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const {SAVE_SHIPPING_ADDRESS , SAVE_SHIPPING_DATE} = checkoutSlice.actions