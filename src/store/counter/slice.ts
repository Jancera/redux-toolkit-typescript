import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import incrementAsyncBuilder from "./builder/incrementAsync";
import { counterInitialState } from "./initialState";

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    counterIncrement(state) {
      state.counter += 1;
    },
    counterDecrement(state) {
      state.counter -= 1;
    },
    counterReset(state) {
      state.counter = 0;
    },
    counterIncrementByAmount(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
  },
  extraReducers: (builder) => {
    incrementAsyncBuilder(builder);
  },
});
