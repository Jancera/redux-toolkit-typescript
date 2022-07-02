import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { counterInitialState } from "./initialState";
import { ICounterProps } from "./interfaces/ICounter";
import { counterIncrementAsync } from "./thunks";

export const counterSlice = createSlice<
  ICounterProps,
  SliceCaseReducers<ICounterProps>
>({
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
    builder
      .addCase(counterIncrementAsync.fulfilled, (state, action) => {
        state.counter += action.payload;
        state.loading = false;
      })
      .addCase(counterIncrementAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(counterIncrementAsync.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});
