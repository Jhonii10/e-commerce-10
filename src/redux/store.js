import {configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { productSlice } from "./slice/productSlice";


const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        product:productSlice.reducer,
    }, 
})

export default store;
