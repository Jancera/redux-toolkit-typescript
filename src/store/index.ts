import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});
