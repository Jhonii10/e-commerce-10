import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[],

}

export const productSlice = createSlice({
  name: 'product',
  initialState,
   reducers: {
   STORE_PRODUCTS: (state, {payload}) => {
    state.products = payload.products;
   }
  }
})

export const { STORE_PRODUCTS } = productSlice.actions