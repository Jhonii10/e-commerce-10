import {configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { productSlice } from "./slice/productSlice";
import { filterSlice } from "./slice/filterSlice";
import { cartSlice } from "./slice/cartSlice";


const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        product:productSlice.reducer,
        filter:filterSlice.reducer,
        cart: cartSlice.reducer
    }, 

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
