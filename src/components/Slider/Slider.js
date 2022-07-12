import React, { useEffect, useState } from "react";
import "./slider.css";
import { Carousel } from "antd";
import { movieService } from "./../../services/movieService";
import { UpOutlined, PlayCircleOutlined } from "@ant-design/icons";

export default function Slider() {
  const [listImg, setListImg] = useState([]);
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
      <Carousel>
        {listImg.map((item, i) => {
          return (
            <div className="w-full slider" key={i}>
              <div className="img">
                <img src={item.hinhAnh} alt="" className="hinhAnh " />
                <div className="overlay">
                  <button className="p-5 bg-transparent rounded-full">
                    <PlayCircleOutlined className="text-6xl text-white " />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
