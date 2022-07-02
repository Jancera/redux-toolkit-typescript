import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { counterInitialState } from "./initialState";
import { IRootProps } from "./interfaces/IRoot";
import { counterIncrementAsync } from "./thunks";

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    counterIncrement(state: IRootProps) {
      state.counter += 1;
    },
    counterDecrement(state: IRootProps) {
      state.counter -= 1;
    },
    counterReset(state: IRootProps) {
      state.counter = 0;
    },
    counterIncrementByAmount(state: IRootProps, action: PayloadAction<number>) {
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
