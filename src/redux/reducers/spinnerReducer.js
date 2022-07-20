import { SET_SPINNER_LOADING } from "../constants/spinnerConstant";

const initialState = {
  isLoading: false,
};

export const spinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SPINNER_LOADING:
      state.isLoading = payload;
      return { ...state };

    default:
      return state;
  }
};
