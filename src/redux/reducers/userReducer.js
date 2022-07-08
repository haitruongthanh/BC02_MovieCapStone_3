import { SET_USER_INFO } from "../constants/userConstant";
import { localStorageService } from "./../../services/localStorageService";

const initialState = {
  userInfo: localStorageService.getUserInfo(),
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      state.userInfo = payload;
      return { ...state };

    default:
      return state;
  }
};
