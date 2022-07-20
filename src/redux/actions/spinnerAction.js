import { SET_SPINNER_LOADING } from "../constants/spinnerConstant";

export const setSpinnerLoading = (isLoading) => {
  return {
    type: SET_SPINNER_LOADING,
    payload: isLoading,
  };
};
