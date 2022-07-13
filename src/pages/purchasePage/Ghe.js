import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeatToCart } from "../../redux/actions/choseSeatItemAction";

export default function Ghe({ ghe }) {
  //   console.log(ghe);
  const [tinhTrangGhe, setTinhTrangGhe] = useState("");
  const [index, setIndex] = useState();
  console.log(index);
  let dispatch = useDispatch();
  let seatCart = useSelector((state) => state.seatReducer.seatCart);

  useEffect(() => {
    if (ghe.daDat) {
      setTinhTrangGhe("unavailable");
    } else if (ghe.loaiGhe === "Vip") {
      setTinhTrangGhe("vip");
    } else {
      setTinhTrangGhe("available");
    }
  }, []);

  let renderSeatSelected = (maGhe) => {
    let a = seatCart.findIndex((item) => {
      return item.maGhe === maGhe;
    });

    setIndex(a);

    /* if (index !== -1) {
      setTinhTrangGhe("selected");
    } */
  };

  return (
    <div className={`seatCharts-seat seatCharts-cell ` + tinhTrangGhe}>
      <label htmlFor={`btn-${ghe.stt}`}>{ghe.tenGhe}</label>
      <button
        type="button"
        id={`btn-${ghe.stt}`}
        onClick={() => {
          dispatch(addSeatToCart(ghe, ghe.maGhe));
          renderSeatSelected(ghe.maGhe);
        }}
      ></button>
    </div>
  );
}

/* 
daDat: true
giaVe: 75000
loaiGhe: "Thuong"
maGhe: 74280
maRap: 618
stt: "160"
taiKhoanNguoiDat: "letuyetngoc"
tenGhe: "160"


daDat: false
giaVe: 100000
loaiGhe: "Thuong"
maGhe: 52360
maRap: 481
stt: "160"
taiKhoanNguoiDat: null
tenGhe: "160"
*/
