import { createSlice } from "@reduxjs/toolkit";
import { TCurrentOrder, TOrder } from "../../../types/ordersType";

// type
type TOrders = {
  userOrders: TOrder[] | null;
  allOrders: TOrder[] | null;
  currentOrder: TCurrentOrder | null;
};

// initialState
const initialState: TOrders = {
  userOrders: null,
  allOrders: null,
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
  },
});

export const { setCurrentOrder, removeCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
