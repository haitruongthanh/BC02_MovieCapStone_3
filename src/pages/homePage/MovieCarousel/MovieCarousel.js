import { Carousel } from "antd";
import React from "react";
import MovieItem from "./../MovieItem/MovieItem";

const MovieCarousel = ({ chunkedList }) => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} dots={true}>
      {chunkedList.map((movies, index) => {
        return (
          <div className="h-max w-full mx-auto" key={index}>
            <div
              id="carousel_movieItem"
              className="grid grid-cols-4 gap-10 py-10 mx-auto"
            >
              {movies.map((movie, index) => {
                return <MovieItem movie={movie} key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
