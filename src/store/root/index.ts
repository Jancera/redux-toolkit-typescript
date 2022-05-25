import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootInitialState } from "./initialState";
import { IRootProps } from "./interfaces/IRoot";
import { rootIncrementAsync } from "./thunks";

export const Root = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    rootIncrement(state: IRootProps) {
      state.counter += 1;
    },
    rootDecrement(state: IRootProps) {
      state.counter -= 1;
    },
    rootReset(state: IRootProps) {
      state.counter = 0;
    },
    rootIncreaseByAmount(state: IRootProps, action: PayloadAction<number>) {
      state.counter + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(rootIncrementAsync.fulfilled, (state, action) => {
        state.counter += 1;
      })
      .addCase(rootIncrementAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(rootIncrementAsync.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});
