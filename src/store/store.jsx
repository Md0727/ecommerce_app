import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/CartSlice';
import productReducer from '../redux/ProductSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    }
})

export default store;