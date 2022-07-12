import React from "react";
import { Carousel } from "antd";
import NewsItems from "./NewsItems";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function MovieTab1({ list }) {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <div className="">
      <Carousel afterChange={onChange}>
        {list.map((movies, index) => {
          if (index < 5) {
            return (
              <div className="h-max w-full mx-auto" key={index}>
                <div
                  id="news_item"
                  className="grid grid-cols-5 gap-10 py-10 mx-auto"
                >
                  {movies.map((movie, index) => {
                    return <NewsItems key={index} movie={movie} />;
                  })}
                </div>
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
}
