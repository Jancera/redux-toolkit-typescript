import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { Root } from "./root";
import { User } from "./user";

// const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: {
    root: Root.reducer,
    user: User.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
