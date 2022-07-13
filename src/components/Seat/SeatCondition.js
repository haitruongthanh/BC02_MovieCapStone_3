import React from "react";

export default function SeatCondition() {
  return (
    <div id="legend" className="seatCharts-legend">
      <div className="grid grid-cols-2 seatCharts-legendList text-left pb-2 text-white">
        <div className="seatCharts-legendItem">
          <div className="seatCharts-seat seatCharts-cell available" />
          <span className="seatCharts-legendDescription">Available</span>
        </div>
        <div className="seatCharts-legendItem">
          <div className="seatCharts-seat seatCharts-cell vip" />
          <span className="seatCharts-legendDescription">VIP</span>
        </div>
        <div className="seatCharts-legendItem">
          <div className="seatCharts-seat seatCharts-cell unavailable" />
          <span className="seatCharts-legendDescription">Sold</span>
        </div>

        <div className="seatCharts-legendItem">
          <div className="seatCharts-seat seatCharts-cell selected" />
          <span className="seatCharts-legendDescription">Selected</span>
        </div>
      </div>
    </div>
  );
}
