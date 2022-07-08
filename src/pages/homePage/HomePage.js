import React, { useEffect, useState } from "react";
import _ from "lodash";
import { movieService } from "./../../services/movieService";

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
      let chunkedList = _.chunk(result.data.content, 2);
      console.log(chunkedList);
      setMovieList(result.data.content);
    };
    fetchMovieList();
  }, []);

  return <div>HomePage</div>;
}
