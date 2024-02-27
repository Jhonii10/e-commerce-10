import {configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";
import { productSlice } from "./slice/productSlice";
import { filterSlice } from "./slice/filterSlice";
import { cartSlice } from "./slice/cartSlice";
import { checkoutSlice } from "./slice/checkoutSlice";
import { ordersSlice } from "./slice/orderSlice";



const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        product:productSlice.reducer,
        filter:filterSlice.reducer,
        cart: cartSlice.reducer,
        checkout: checkoutSlice.reducer,
        orders:ordersSlice.reducer,
    }, 

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
