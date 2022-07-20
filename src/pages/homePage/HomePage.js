import React, { useEffect, useState } from "react";
import _ from "lodash";
import { movieService } from "./../../services/movieService";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieTabs from "./MovieTabs/MovieTabs";
import MovieNews from "./MovieNews/MovieNews";
import MovieApp from "../../components/MovieApp/MovieApp";
import Slider from "../../components/Slider/Slider";
import { useDispatch } from "react-redux";
import { setSpinnerLoading } from "./../../redux/actions/spinnerAction";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  let dispatch = useDispatch();
  // console.log("movieList", movieList);
  /* useEffect(() => {
    movieService
      .getMovieList()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }); */

  useEffect(() => {
    dispatch(setSpinnerLoading(true));
    let fetchMovieList = async () => {
      let result = await movieService.getMovieList();
      let chunkedList = _.chunk(result.data.content, 8);
      dispatch(setSpinnerLoading(false));
      setMovieList(chunkedList);
    };
    fetchMovieList();
  }, []);

  return (
    <div className="">
      <div className="w-full h-max">
        <Slider />
      </div>
      <div className="container mx-auto py-8" id="phimDangChieu">
        <MovieCarousel chunkedList={movieList} />
      </div>
      <div className="container mx-auto py-8 border ">
        <MovieTabs />
      </div>
      <div className="container mx-auto py-8" id="tinTuc">
        <MovieNews />
      </div>
      <MovieApp />
    </div>
  );
}
