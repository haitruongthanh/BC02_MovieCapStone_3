import React from "react";
import { dataNews } from "./datanews";

export default function Movie24h() {
  //   console.log(dataNews);

  return (
    <div id="news24h" className="grid grid-rows-2 gap-2 ">
      <div className=" w-full h-96 grid grid-cols-2 gap-2 ">
        <div className=" w-full h-auto p-2 ">
          <img src={dataNews[0].src} alt="" />
          <h3>{dataNews[0].title}</h3>
          <p>{dataNews[0].content}</p>
        </div>
        <div className=" w-full h-auto p-2 ">
          <img src={dataNews[1].src} alt="" />
          <h3>{dataNews[1].title}</h3>
          <p>{dataNews[1].content}</p>
        </div>
      </div>
      <div className=" w-full h-96 grid grid-cols-3 gap-2">
        <div className=" w-full h-96 p-2">
          <img src={dataNews[2].src} alt="" />
          <h3>{dataNews[2].title}</h3>
          <p>{dataNews[2].content}</p>
        </div>
        <div className=" w-full h-96 p-2">
          <img src={dataNews[3].src} alt="" />
          <h3>{dataNews[3].title}</h3>
          <p>{dataNews[3].content}</p>
        </div>
        <div
          id="small-content"
          className=" w-full h-96 grid grid-rows-3 gap-2 "
        >
          <div className=" w-80 h-auto flex p-2">
            <img className="mr-2" src={dataNews[4].src} alt="" />
            <div className="w-44">
              <h3>{dataNews[4].title}</h3>
              <p>{dataNews[4].content}</p>
            </div>
          </div>
          <div className=" w-80 h-auto flex p-2">
            <img className="mr-2" src={dataNews[5].src} alt="" />
            <div className="w-44">
              <h3>{dataNews[5].title}</h3>
              <p>{dataNews[5].content}</p>
            </div>
          </div>
          <div className=" w-80 h-auto flex p-2">
            <img className="mr-2" src={dataNews[6].src} alt="" />
            <div className="w-44">
              <h3>{dataNews[6].title}</h3>
              <p>{dataNews[6].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
