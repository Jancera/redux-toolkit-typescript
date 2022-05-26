import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../types";

import { rootIncrementByAmount } from "./actions";

export const rootIncrementAsync = createAsyncThunk(
  "increment/counter",
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 2000),
    );

    return response.data;
  },
);

export const rootIncrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    // await new Promise((res) => setTimeout(() => res(""), 3000));
    const currentValue = getState().root;
    if (currentValue.counter % 2 === 1) {
      dispatch(rootIncrementByAmount(amount));
    }
  };
