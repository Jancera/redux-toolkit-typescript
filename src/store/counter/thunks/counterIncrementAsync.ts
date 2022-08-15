import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ICounterProps } from "../interfaces/ICounter";

export const counterIncrementAsync = createAsyncThunk(
  "increment/counter",
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 2000),
    );

    return response.data;
  },
);

export const incrementAsyncBuilder = (
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
