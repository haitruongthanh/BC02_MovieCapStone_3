import React from "react";
import Ghe from "./Ghe";

export default function HangGhe({ hangGhe }) {
  //   console.log(hangGhe);
  return (
    <div className="seatCharts-row d-flex justify-content-center mx-auto">
      {hangGhe.map((ghe, i) => {
        return <Ghe key={i} ghe={ghe} />;
      })}
    </div>
  );
}
