import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ICounterProps } from "../interfaces/ICounter";
import { counterIncrementAsync } from "../thunks";

const incrementAsyncBuilder = (
  builder: ActionReducerMapBuilder<ICounterProps>,
) => {
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
};

export default incrementAsyncBuilder;
