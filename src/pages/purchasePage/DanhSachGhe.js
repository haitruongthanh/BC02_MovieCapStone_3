import React from "react";
import HangGhe from "./HangGhe";

export default function DanhSachGhe({ danhSachGhe }) {
  //   console.log(danhSachGhe);
  return (
    <div className="seatCharts-container mx-auto">
      <div className="front">SCREEN</div>
      <div className="mx-auto px-24">
        {danhSachGhe.map((hangGhe, i) => {
          return <HangGhe hangGhe={hangGhe} key={i} />;
        })}
      </div>
    </div>
  );
}
