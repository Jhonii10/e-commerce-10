import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderHistory:[],
    totalOrderAmount:null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    STORE_ORDERS:(state , {payload})=>{
        state.orderHistory = payload;
    },
    CALC_TOTAL_ORDER_AMOUNT:(state, {payload})=>{
        const array = [];
        
        state.orderHistory.map((item)=>{
            const {orderAmount}= item;    
            return array.push(orderAmount)
        })

        let totalAmount = array.reduce((a, b) => a + b, 0);

        state.totalOrderAmount = totalAmount;
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { STORE_ORDERS , CALC_TOTAL_ORDER_AMOUNT } = ordersSlice.actions