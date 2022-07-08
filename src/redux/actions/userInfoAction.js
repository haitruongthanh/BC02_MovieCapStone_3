import { SET_USER_INFO } from "../constants/userConstant";

export const setUserInfoAction = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user,
  };
};
