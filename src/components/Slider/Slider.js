import React, { useEffect, useState } from "react";
import "./slider.css";
import { Carousel } from "antd";
import { movieService } from "./../../services/movieService";
import {
  LeftOutlined,
  PlayCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Fancybox from "../Fancybox/Fancybox";

export default function Slider() {
  const [listImg, setListImg] = useState([]);
  console.log(listImg);

  useEffect(() => {
    movieService
      .getBannerMovie()
      .then((res) => {
        // console.log("res", res);
        setListImg(res.data.content);
        console.log(listImg);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <Carousel
        dots={true}
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        {listImg.map((item, i) => {
          return (
            <div className="w-full slider relative" key={i}>
              <div className="img">
                <img src={item.hinhAnh} alt="" className="hinhAnh " />
              </div>
              <div className="overlay ">
                <Fancybox>
                  <button
                    className="p-5 bg-transparent rounded-full"
                    data-fancybox="gallery"
                    data-src="https://youtu.be/uqJ9u7GSaYM"
                  >
                    <PlayCircleOutlined className="text-6xl text-white " />
                  </button>
                </Fancybox>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
