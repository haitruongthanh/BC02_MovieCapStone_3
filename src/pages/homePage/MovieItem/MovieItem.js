import { Card } from "antd";
import { HeartTwoTone, PlayCircleTwoTone } from "@ant-design/icons";
import React from "react";
import "./movieItem.css";
import { NavLink } from "react-router-dom";

const MovieItem = ({ movie }) => (
  <Card
    hoverable
    style={{
      width: "100%",
    }}
    cover={<img alt={movie.biDanh} src={movie.hinhAnh} className="movieImg" />}
    actions={[
      <HeartTwoTone
        twoToneColor="#eb2f96"
        style={{
          color: "red",
          fontSize: "22px",
        }}
      />,
      <PlayCircleTwoTone
        style={{
          fontSize: "22px",
        }}
        src={movie.trailer}
      />,
    ]}
  >
    <div className="movieTitle">
      <span>{movie.danhGia}</span>
      {movie.tenPhim}
    </div>
    <div className="movieDesc">
      <h4>{movie.moTa}</h4>
    </div>
    <div className="movieDetail">
      <NavLink to={`/detail/${movie.maPhim}`}>Xem Chi Tiết</NavLink>
    </div>
  </Card>
);

export default MovieItem;

/* 

biDanh: "doctor-strange-in-the-multiverse-of-madness-321"
dangChieu: true
danhGia: 10
hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/doctor-strange-in-the-multiverse-of-madness_gp01.jpg"
hot: false
maNhom: "GP01"
maPhim: 8902
moTa: "Trailer mới Doctor Strange In The Multiverse Of Madness hé lộ một nhân vật bí ẩn dường như là giáo sư X phiên bản già Patrick Stewart. Cả giáo sư X phiên bản trẻ (James McAvoy) và Jean Grey (Sophie Turner) đều có tin xuất hiện ở phim trường Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn. Đặc biệt nhất là lời đồn không tưởng về việc Tom Cruise sẽ trở thành Iron Man mới đang lan truyền rộng rãi."
ngayKhoiChieu: "2022-07-06T00:09:52.727"
sapChieu: false
tenPhim: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS 321"
trailer: "https://www.youtube.com/embed/Rf8LAYJSOL8"

*/
