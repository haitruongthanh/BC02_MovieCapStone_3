import { Tabs } from "antd";
import "./MovieTab.css";
import React, { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import MovieTabItem from "./MovieTabItem";
const { TabPane } = Tabs;

const onChange = (key) => {
  // console.log(key);
};

export default function MovieTabs() {
  const [dataRaw, setDataRaw] = useState([]);

  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        // console.log("res", res);
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  }, []);

  let renderContent = () => {
    return dataRaw.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              alt={heThongRap.tenHeThong}
              className="w-10 h-10 border-b"
            />
          }
          key={index}
        >
          <Tabs
            style={{ height: 500 }}
            defaultActiveKey="1"
            onChange={onChange}
            tabPosition={"left"}
            className="w-50 "
          >
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="text-left w-60 whitespace-normal text-ellipsis tenRapPhim ">
                      <h4 className="hover:text-slate-700  whitespace-normal">
                        {cumRap.tenCumRap}
                      </h4>
                      <h6 className="whitespace-normal text-ellipsis w-56">
                        {cumRap.diaChi}
                      </h6>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 500, overflowY: "scroll" }}>
                    {cumRap.danhSachPhim.map((phimTheoRap, index) => {
                      if (index < 20) {
                        return (
                          <MovieTabItem key={index} phimTheoRap={phimTheoRap} />
                        );
                      }
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div id="movieTabs">
      <Tabs
        style={{ height: 500 }}
        defaultActiveKey="1"
        onChange={onChange}
        tabPosition={"left"}
      >
        {renderContent()}
      </Tabs>
    </div>
  );
}
