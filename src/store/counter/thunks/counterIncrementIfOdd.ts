import { AppThunk } from "../../types";
import { counterSlice } from "../slice";

const counterIncrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = getState().counter;
    if (currentValue.counter % 2 === 1) {
      dispatch(counterSlice.actions.counterIncrementByAmount(amount));
    }
  };

export default counterIncrementIfOdd;
