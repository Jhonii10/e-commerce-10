import {configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { productSlice } from "./slice/productSlice";
import { filterSlice } from "./slice/filterSlice";


const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        product:productSlice.reducer,
        filter:filterSlice.reducer
    }, 

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
