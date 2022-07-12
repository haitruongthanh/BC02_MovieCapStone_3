import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieService } from "./../../../services/movieService";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
const onChange = (key) => {
  // console.log(key);
};

export default function MovieDetailTab({ maPhim }) {
  const [dataRaw, setDataRaw] = useState([]);
  useEffect(() => {
    movieService
      .getDetailTabMovie(maPhim)
      .then((res) => {
        // console.log("res", res);
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let renderContent = () => {
    // console.log(dataRaw.heThongRapChieu);
    return dataRaw.heThongRapChieu?.map((cumRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={cumRap.logo}
              alt={cumRap.tenHeThongRap}
              className="w-10 h-10 border-b"
            />
          }
          key={index}
        >
          <Tabs
            style={{ height: 320 }}
            defaultActiveKey="1"
            onChange={onChange}
            tabPosition={"left"}
            className="w-50 "
          >
            {cumRap.cumRapChieu.map((cumRapChieu, index) => {
              return (
                <TabPane
                  tab={
                    <div className="text-left w-50 whitespace-nowrap overflow-hidden text-ellipsis tenRapPhim ">
                      <h4 className="hover:text-white hover:underline">
                        {cumRapChieu.tenCumRap}
                      </h4>
                      <h6>{cumRapChieu.diaChi}</h6>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 320, overflowY: "scroll" }}>
                    {cumRapChieu.lichChieuPhim.map((lichChieu, index) => {
                      if (index < 4) {
                        return (
                          <NavLink
                            to={`/purchase/${lichChieu.maLichChieu}`}
                            key={index}
                          >
                            {
                              <div className="flex items-center rounded bg-slate-200 border-stone-600 m-4 p-4 space-x-2 w-80">
                                <p className="text-green-600 text-xl font-medium">
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "DD/MM/yyyy"
                                  )}
                                </p>
                                <p> ⁓ </p>
                                <h3 className="text-red-500 text-xl font-medium">
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "HH"
                                  )}
                                  h:
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "mm"
                                  )}
                                  p
                                </h3>
                              </div>
                            }
                          </NavLink>
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
    <div id="MovieDetailTab">
      <Tabs
        style={{ height: 320 }}
        defaultActiveKey="1"
        onChange={onChange}
        tabPosition={"left"}
      >
        {renderContent()}
      </Tabs>
    </div>
  );
}
