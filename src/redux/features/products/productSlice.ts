import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/productType";

// type
export type TProducts = {
  items: TProduct[];
  loading: false;
  error: null;
  editProductData: TProduct | null;
  showProductData: TProduct | null;
};

// initialState
const initialState: TProducts = {
  items: [],
  loading: false,
  error: null,
  editProductData: null,
  showProductData: null,
};

// products slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // --------- set all products to store
    loadAllProducts: (state, action) => {
      state.items = action.payload;
    },

    // ------------ delete a product
    deleteProductFromStore: (state, action) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload
      );
    },

    // update product into store
    updateSingleProduct: (state, action) => {
      state.items = state?.items?.map((product) => {
        if (product._id === action?.payload?.productId) {
          return { ...product, ...action?.payload?.product };
        } else {
          return product;
        }
      });
    },

    // edit a product
    setEditProductData: (state, action) => {
      state.editProductData = action.payload;
    },
    // clear edit product
    clearEditProductData: (state) => {
      state.editProductData = null;
    },

    // show a product data
    setShowProductData: (state, action) => {
      state.showProductData = action.payload;
    },
    // clear show product
    clearShowProductData: (state) => {
      state.showProductData = null;
    },
  },
});

export const {
  loadAllProducts,
  deleteProductFromStore,
  updateSingleProduct,
  setEditProductData,
  clearEditProductData,
  setShowProductData,
  clearShowProductData,
} = productsSlice.actions;
export default productsSlice.reducer;
