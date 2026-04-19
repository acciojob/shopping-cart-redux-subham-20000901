import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id);
    },
    increaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    addToWishlist: (state, action) => {
      const exist = state.wishlist.find((i) => i.id === action.payload.id);
      if (!exist) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((i) => i.id !== action.payload.id);
    },
    applyCoupon: (state, action) => {
      const code = action.payload;

      if (code === "SAVE10") state.discount = 10;
      else if (code === "SAVE20") state.discount = 20;
      else state.discount = 0;
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  applyCoupon,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;
export default cartSlice.reducer;
