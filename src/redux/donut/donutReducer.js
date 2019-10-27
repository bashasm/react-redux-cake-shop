import { BUY_DONUT } from "./donutTypes";

const initialState = {
  numOfDonuts: 30
};

const reducer = (state = initialState, action) => {
  console.log("in donut reducer");
  switch (action.type) {
    case BUY_DONUT:
      return {
        ...state,
        numOfDonuts: state.numOfDonuts - 1
      };

    default:
      return state;
  }
};

export default reducer;
