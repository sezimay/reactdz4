import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },

    decrement(state, action) {
      if (state.count <= 0) {
        state.count += 0;
        return;
      }
      state.count -= action.payload;
    },

    incrementRnd(state,action) {
      state.count (Math.ceil(Math.random() * 100))
    },

    decrementRnd(state,action) {
      state.count (Math.ceil(Math.random() / 100))
    }
  },
});

export default countSlice.reducer;