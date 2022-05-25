import { createAsyncThunk } from "@reduxjs/toolkit";

export const rootIncrementAsync = createAsyncThunk(
  "increment/counter",
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 2000),
    );

    return response.data;
  },
);
