import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem } from "../../../types/cartsType";

type TCarts = {
  items: TCartItem[];
};

const initialState: TCarts = {
  items: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    // add to cart list
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        if (existingItem.quantity < existingItem.availableQuantity) {
          existingItem.quantity = action.payload.quantity;
        }
      } else {
        state.items.push(action.payload);
      }
    },
    // increment cart quantity by 1
    incrementCartQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (cartItem) => cartItem._id === action.payload
      );
      if (item && item.quantity < item.availableQuantity) {
        item.quantity += 1;
      }
    },
    // decrement cart quantity by 1
    decrementCartQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (cartItem) => cartItem._id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    // remove a cart
    removeCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (cartItem) => cartItem._id !== action.payload
      );
    },

    // remove all crat items from store
    removeAllCarts: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeCart,
  removeAllCarts,
} = cartSlice.actions;

export default cartSlice.reducer;
