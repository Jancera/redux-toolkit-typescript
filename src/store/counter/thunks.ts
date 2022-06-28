import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../types";

import { counterIncrementByAmount } from "./actions";

export const counterIncrementAsync = createAsyncThunk(
  "increment/counter",
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 2000),
    );

    return response.data;
  },
);

export const counterIncrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = getState().counter;
    if (currentValue.counter % 2 === 1) {
      dispatch(counterIncrementByAmount(amount));
    }
  };
