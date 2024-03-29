import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[],
    minPrice: null,
    maxPrice: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
   reducers: {
   STORE_PRODUCTS: (state, {payload}) => {
    state.products = payload.products;
   },
   GET_PRICE_RANGE: (state, {payload}) => {
   
    const {products}= payload;
    
    const array = [];
    products.map((product)=> {
        const price = product.price;
        return array.push(price)
    })

    const max = Math.max(...array)
    const min = Math.min(...array)

    state.minPrice = min;
    state.maxPrice = max;
    
   }
  }
})

export const { STORE_PRODUCTS , GET_PRICE_RANGE } = productSlice.actions