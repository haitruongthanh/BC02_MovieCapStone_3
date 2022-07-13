import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SeatCondition from "../../components/Seat/SeatCondition";
import ThongTinPhim from "../../components/Seat/ThongTinPhim";
import { delSeatFromCart } from "../../redux/actions/choseSeatItemAction";

export default function BookingDetails({ thongTinPhim }) {
  //   console.log(thongTinPhim);
  let seatCart = useSelector((state) => state.seatReducer.seatCart);
  let dispatch = useDispatch();
  return (
    <div className="booking-details mx-auto">
      <SeatCondition />
      <div className="thongTin grid grid-cols-2 text-left">
        <ThongTinPhim thongTinPhim={thongTinPhim} />
        <div className="chonGhe bg-red-100 rounded">
          <h4 className="font-semibold my-3 text-black text-center uppercase ">
            Danh sách ghế chọn
          </h4>
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Số ghế</th>
                  <th>Giá tiền</th>
                  <th>Hủy</th>
                </tr>
              </thead>
              <tbody>
                {seatCart.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.tenGhe}</td>
                      <td>{item.giaVe}</td>
                      <td>
                        <button
                          type="button"
                          className="px-2 py-1 bg-yellow-100 text-red-600 font-semibold rounded-md hover:bg-red-500 hover:text-white transition-all"
                          onClick={() => {
                            dispatch(delSeatFromCart(item.maGhe));
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th scope="row">Tổng cộng</th>
                  <td>
                    {seatCart.length &&
                      seatCart
                        .map((item) => {
                          return item.giaVe;
                        })
                        .reduce((tong, gia) => {
                          return tong + gia;
                        })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="payment text-center py-4">
        <button className="bg-red-300 px-7 py-2 uppercase font-semibold text-lg text-red-800 rounded-md hover:bg-red-800 hover:text-white transition-all">
          Thanh toán
        </button>
      </div>
    </div>
  );
}
