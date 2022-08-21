import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/slice";
import userApi from "./user/apiSlice";
import { userSlice } from "./user/slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
