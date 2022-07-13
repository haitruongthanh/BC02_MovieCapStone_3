import { ADD_SEAT_ITEM, DEL_SEAT_ITEM } from "../constants/seatConstant";

export const addSeatToCart = (seatItem, maGhe) => {
  return {
    type: ADD_SEAT_ITEM,
    payload: seatItem,
    maGhe: maGhe,
  };
};

export const delSeatFromCart = (maGhe) => {
  return {
    type: DEL_SEAT_ITEM,
    maGhe: maGhe,
  };
};
