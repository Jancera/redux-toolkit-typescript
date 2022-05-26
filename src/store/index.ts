import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { Root } from "./root";
import { User } from "./user";

// const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: {
    root: Root.reducer,
    user: User.reducer,
  },
});
