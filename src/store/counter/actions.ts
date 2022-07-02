import { counterSlice } from "./slice";

export const {
  counterIncrement,
  counterDecrement,
  counterReset,
  counterIncrementByAmount,
} = counterSlice.actions;
