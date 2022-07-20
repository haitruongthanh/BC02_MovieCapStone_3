import React, { useEffect, useState } from "react";
import "./purchasePage.css";
import { useParams } from "react-router-dom";
import banner from "../../assets/banner2.jpg";
import { movieService } from "./../../services/movieService";
import DanhSachGhe from "./DanhSachGhe";
import BookingDetails from "./BookingDetails";
import _ from "lodash";
import { setSpinnerLoading } from "./../../redux/actions/spinnerAction";
import { useDispatch } from "react-redux";
import SpinnerComponent from "./../../components/Spinner/SpinnerComponent";

export default function PurchasePage() {
  let param = useParams();
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  const [thongTinPhim, setThongTinPhim] = useState({});
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSpinnerLoading(true));
    movieService
      .getSeatByMovie(param.id)
      .then((res) => {
        // console.log("res", res);
        let result = _.chunk(res.data.content.danhSachGhe, 16);
        setDanhSachGhe(result);
        setThongTinPhim(res.data.content.thongTinPhim);
        dispatch(setSpinnerLoading(false));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <SpinnerComponent />
      <div
        className="purchase_content"
        style={{
          background: `url(${banner}) no-repeat center`,
        }}
      >
        <h3>{thongTinPhim.tenPhim}</h3>
        <p className="text-center">
          <span>{thongTinPhim.tenRap}</span> -{" "}
          <span>Giờ chiếu {thongTinPhim.gioChieu}</span>
        </p>
        <div className="main">
          <h2>Multiplex Theatre Showing Screen 1</h2>
          <div className="demo">
            <DanhSachGhe danhSachGhe={danhSachGhe} />
            <BookingDetails thongTinPhim={thongTinPhim} />
          </div>
        </div>
      </div>
    </div>
  );
}
