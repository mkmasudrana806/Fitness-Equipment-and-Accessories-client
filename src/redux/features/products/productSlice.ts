import { createSlice } from "@reduxjs/toolkit";

// type
export type TProducts = {
  items: [];
  loading: false;
  error: null;
};

// initialState
const initialState: TProducts = {
  items: [],
  loading: false,
  error: null,
};

// products slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // set all products to store
    loadAllProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { loadAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
