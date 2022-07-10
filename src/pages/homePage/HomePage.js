import React, { useEffect, useState } from "react";
import _ from "lodash";
import { movieService } from "./../../services/movieService";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieTabs from "./MovieTabs/MovieTabs";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
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
    let fetchMovieList = async () => {
      let result = await movieService.getMovieList();
      let chunkedList = _.chunk(result.data.content, 8);
      // console.log(chunkedList);
      setMovieList(chunkedList);
    };
    fetchMovieList();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <MovieCarousel chunkedList={movieList} />
      </div>
      <div className="container mx-auto">
        <MovieTabs />
      </div>
    </div>
  );
}
