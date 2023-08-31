import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: 2000,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  }
});

export const { increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;
