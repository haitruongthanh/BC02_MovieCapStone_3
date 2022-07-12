import React from "react";
import "./movieApp.css";

export default function MovieApp() {
  return (
    <div
      id="movie_app"
      style={{ background: "url(./img/backapp.b46ef3a1.jpg)" }}
    >
      <div className="w-1/2 mx-auto">
        <div className="container grid grid-cols-2 text-white">
          <div className="content">
            <p className="text-3xl py-5 font-semibold">
              Ứng dụng tiện lợi dành cho
            </p>
            <p className="text-3xl py-5 font-semibold">người yêu điện ảnh</p>
            <p className="text-xl py-5">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <a href="https://kenh14.vn/cine/phim-chieu-rap.chn">
              <span>App miễn phí - Tải về ngay!</span>
            </a>
            <p className="text-xl py-5">TIX có hai phiên bản IOS và Android</p>
          </div>
          <div className="img mx-auto h-96">
            <img src="./img/download.png" alt="" />
            <div className="carouselApp"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
