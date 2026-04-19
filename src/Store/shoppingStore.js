import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../State/cartSlice";


const shoppingStore = configureStore({
    reducer:{
      cart: cartReducer
    }
})

export default shoppingStore;