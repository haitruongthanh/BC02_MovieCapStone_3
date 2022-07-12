import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MovieTabItem({ phimTheoRap }) {
  return (
    <div className="p-5 flex border-b">
      <img
        src={phimTheoRap.hinhAnh}
        alt={phimTheoRap.tenPhim}
        className="movieTabItemImg "
      />
      <div className="movieTabItemContent ">
        <h2>
          <span>C18</span>
          {phimTheoRap.tenPhim}
        </h2>
        <div className="lichChieu grid grid-cols-2 ">
          {phimTheoRap.lstLichChieuTheoPhim.map((item, index) => {
            if (index < 4) {
              return (
                <NavLink to={`/purchase/${item.maLichChieu}`} key={index}>
                  <div className="flex items-center rounded bg-slate-200 border-stone-600 m-4 p-4 space-x-2 w-60">
                    <p className="text-green-600 text-xl font-medium">
                      {moment(item.ngayChieuGioChieu).format("DD/MM/yyyy")}
                    </p>
                    <p> ⁓ </p>
                    <h3 className="text-red-500 text-xl font-medium">
                      {moment(item.ngayChieuGioChieu).format("HH")}h:
                      {moment(item.ngayChieuGioChieu).format("mm")}'
                    </h3>
                  </div>
                </NavLink>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

/* dangChieu: false
hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/bang-cuop-the-ky-dang-cap-quy-co_gp01.jpg"
hot: true
lstLichChieuTheoPhim: (3) [{…}, {…}, {…}]
maPhim: 8395
sapChieu: true
tenPhim: "Băng cướp thế kỷ: Đẳng cấp quý cô" 


lstLichChieuTheoPhim: Array(3)
0: {maLichChieu: 44436, maRap: '550', tenRap: 'Rạp 10', ngayChieuGioChieu: '2021-10-16T07:23:28', giaVe: 75000}
1: {maLichChieu: 44437, maRap: '547', tenRap: 'Rạp 7', ngayChieuGioChieu: '2021-10-16T09:23:51', giaVe: 75000}
2: {maLichChieu: 44438, maRap: '547', tenRap: 'Rạp 7', ngayChieuGioChieu: '2021-10-17T02:23:57', giaVe: 90000}
*/
