import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";
import { movieService } from "../../services/movieService";
import "./detail.css";
import MovieDetail from "./MovieDetail/MovieDetail";
import MovieDetailTab from "./MovieDetailTab/MovieDetailTab";
import { useDispatch } from "react-redux";
import { setSpinnerLoading } from "./../../redux/actions/spinnerAction";

export default function DetailPage() {
  let param = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSpinnerLoading(true));
    setTimeout(() => {
      movieService
        .getDetailMovie(param.id)
        .then((res) => {
          // console.log("res", res);
          dispatch(setSpinnerLoading(false));
          setMovieDetail(res.data.content);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }, 500);
  }, []);

  return (
    <div>
      <SpinnerComponent />
      <div id="movieDetail" className="w-screen h-max bg-slate-300">
        <div className="container mx-auto space-y-6">
          <MovieDetail movieDetail={movieDetail} />
          <div className="text-slate-600 w-full py-4  text-xl px-3">
            Thông tin đặt vé
          </div>
          <MovieDetailTab maPhim={param.id} />
        </div>
      </div>
    </div>
  );
}
