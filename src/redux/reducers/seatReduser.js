import { ADD_SEAT_ITEM, DEL_SEAT_ITEM } from "../constants/seatConstant";

const initialState = {
  seatCart: [],
};

export const seatReducer = (state = initialState, { type, payload, maGhe }) => {
  switch (type) {
    case ADD_SEAT_ITEM: {
      //   console.log(payload, maGhe);
      let cloneSeatCart = [...state.seatCart];
      let index = cloneSeatCart.findIndex((item) => {
        return item.maGhe === maGhe;
      });
      if (index !== -1) {
        cloneSeatCart.splice(index, 1);
      } else {
        !payload.daDat && cloneSeatCart.push(payload);
      }

      state.seatCart = cloneSeatCart;
      return { ...state };
    }

    case DEL_SEAT_ITEM: {
      let cloneSeatCart = [...state.seatCart];
      let index = cloneSeatCart.findIndex((item) => {
        return item.maGhe === maGhe;
      });

      cloneSeatCart.splice(index, 1);

      state.seatCart = cloneSeatCart;
      return { ...state };
    }

    default:
      return state;
  }
};
