import React from "react";

export default function ThongTinPhim({ thongTinPhim }) {
  return (
    <div className="thongTinPhim bg-blue-100">
      <h4 className="font-semibold my-3 text-black text-center uppercase ">
        Thông tin phim
      </h4>
      <div>
        <table className="table-auto">
          <tbody>
            <tr>
              <th>Tên phim</th>
              <td>{thongTinPhim.tenPhim}</td>
            </tr>
            <tr>
              <th>Tên rạp</th>
              <td>
                {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
              </td>
            </tr>
            <tr>
              <th>Giờ chiếu</th>
              <td>{thongTinPhim.gioChieu}</td>
            </tr>
            <tr>
              <th>Ngày chiếu</th>
              <td>{thongTinPhim.ngayChieu}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
