import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderHistory:[],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    STORE_ORDERS:(state , {payload})=>{
        console.log(payload);
        state.orderHistory = payload;
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { STORE_ORDERS } = ordersSlice.actions