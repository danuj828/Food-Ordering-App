import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, clearItems, removeItems } = CartSlice.actions;

export default CartSlice.reducer;
