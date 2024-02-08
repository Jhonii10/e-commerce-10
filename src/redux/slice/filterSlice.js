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
   },
   SORT_PRODUCTS:( state ,{payload})=>{
        const {products , sort} = payload;
        let tempProducts = [];
        switch (sort) {
            case 'Newest':
              tempProducts = products;
              break;
              case 'High-Low':
                tempProducts = [...products].sort((a, b) => b.price - a.price);
                break;
            case 'Low-High':
              tempProducts = [...products].sort((a, b) =>  a.price - b.price);
              break;
            case 'A-Z':
              tempProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
              break;
            case 'Z-A':
              tempProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
              break;
        
            default:
              tempProducts = products;
          }

        state.filteredProducts = tempProducts;
   }
  }
})

// Action creators are generated for each case reducer function
export const { FILTER_BY_SEARCH,SORT_PRODUCTS } = filterSlice.actions