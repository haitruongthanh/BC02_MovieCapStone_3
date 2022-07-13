import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSeatToCart } from "../../redux/actions/choseSeatItemAction";

export default function Ghe({ ghe }) {
  //   console.log(ghe);
  const [tinhTrangGhe, setTinhTrangGhe] = useState("available");
  let dispatch = useDispatch();

  useEffect(() => {
    if (ghe.daDat) {
      setTinhTrangGhe("unavailable");
    } else if (ghe.loaiGhe === "Vip") {
      setTinhTrangGhe("vip");
    }
  }, []);

  return (
    <div className={`seatCharts-seat seatCharts-cell ` + tinhTrangGhe}>
      <label htmlFor={`btn-${ghe.stt}`}>{ghe.tenGhe}</label>
      <button
        type="button"
        id={`btn-${ghe.stt}`}
        onClick={() => {
          dispatch(addSeatToCart(ghe, ghe.maGhe));
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
