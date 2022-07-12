import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import "./detail.css";
import MovieDetail from "./MovieDetail/MovieDetail";
import MovieDetailTab from "./MovieDetailTab/MovieDetailTab";

export default function DetailPage() {
  let param = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  // console.log(movieDetail);
  useEffect(() => {
    movieService
      .getDetailMovie(param.id)
      .then((res) => {
        // console.log("res", res);
        setMovieDetail(res.data.content);
        // console.log(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div id="movieDetail" className="w-screen h-max bg-slate-300">
      <div className="container mx-auto space-y-6">
        <MovieDetail movieDetail={movieDetail} />
        <div className="text-slate-600 w-full py-4  text-xl px-3">
          Thông tin đặt vé
        </div>
        <MovieDetailTab maPhim={param.id} />
      </div>
    </div>
  );
}
