import { createSlice } from "@reduxjs/toolkit";
import { TCurrentOrder, TOrder } from "../../../types/ordersType";

// type
type TOrders = {
  userOrders: TOrder[];
  allOrders: TOrder[];
  currentOrder: TCurrentOrder | null;
};

// initialState
const initialState: TOrders = {
  userOrders: [],
  allOrders: [],
  currentOrder: null,
};

// orders slice
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // set curretn order data
    setCurrentOrder: (state, action) => {
      state.currentOrder = { ...state.currentOrder, ...action.payload };
    },

    // remove current order
    removeCurrentOrder: (state) => {
      state.currentOrder = null;
    },

    // set order to store
    setOrderToStore: (state, action) => {
      console.log("action payload: " + action.payload);

      state.userOrders?.push(action.payload);
    },
  },
});

export const { setCurrentOrder, removeCurrentOrder, setOrderToStore } =
  orderSlice.actions;
export default orderSlice.reducer;
