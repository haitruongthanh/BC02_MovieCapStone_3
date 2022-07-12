import _ from "lodash";
import React, { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import { Tabs } from "antd";
import MovieTab1 from "./MovieTab1";
import Movie24h from "./Movie24h";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function MovieNews() {
  const [dataNewsRaw, setDataNewsRaw] = useState([]);
  useEffect(() => {
    movieService
      .getMovieNews()
      .then((res) => {
        // console.log("res", res);
        let newsChunkedList = _.chunk(res.data.items, 10);
        setDataNewsRaw(newsChunkedList);
        // console.log(newsChunkedList);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="mx-auto " id="newsTabs">
      <Tabs defaultActiveKey="1" onChange={onChange} centered type="card">
        <TabPane tab="Top 250 phim" key="1">
          <MovieTab1 list={dataNewsRaw} />
        </TabPane>
        <TabPane tab="Điện ảnh 24h" key="2">
          <div className="w-2/3 mx-auto">
            <Movie24h />
          </div>
        </TabPane>
        <TabPane tab="Review" key="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          aliquam deserunt iure, sapiente repellat ut cum eligendi adipisci esse
          officiis vero provident molestiae voluptas perferendis ex id, tenetur
          cupiditate. In!
        </TabPane>
      </Tabs>
    </div>
  );
}
