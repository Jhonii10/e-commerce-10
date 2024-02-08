import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filteredProducts:[],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
   reducers: {
   FILTER_BY_SEARCH:(state , {payload})=>{
        const {products , search} = payload;
        const tempProducts = products.filter((product)=>product.name.toLowerCase()
        .includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()));
        state.filteredProducts = tempProducts;
   }
  }
})

// Action creators are generated for each case reducer function
export const { FILTER_BY_SEARCH } = filterSlice.actions