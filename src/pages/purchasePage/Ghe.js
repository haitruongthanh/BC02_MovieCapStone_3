import React, { useEffect, useState } from "react";

export default function Ghe({ ghe }) {
  console.log(ghe);
  const [tinhTrangGhe, setTinhTrangGhe] = useState("");

  useEffect(() => {
    if (ghe.daDat) {
      setTinhTrangGhe("seatCharts-seat seatCharts-cell unavailable");
    } else if (ghe.loaiGhe === "Vip") {
      setTinhTrangGhe("seatCharts-seat seatCharts-cell vip");
    } else {
      setTinhTrangGhe("seatCharts-seat seatCharts-cell available");
    }
  }, []);

  return (
    <div className={tinhTrangGhe}>
      <label htmlFor={`btn-${ghe.stt}`}>{ghe.tenGhe}</label>
      <button type="button" id={`btn-${ghe.stt}`}></button>
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

*/
