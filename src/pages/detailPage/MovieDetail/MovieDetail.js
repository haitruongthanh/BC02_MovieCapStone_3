import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Progress } from "antd";
import "../detail.css";

export default function MovieDetail({ movieDetail }) {
  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            src={movieDetail.hinhAnh}
            alt={movieDetail.tenPhim}
            className="locandina"
          />
          <h1>{movieDetail.tenPhim}</h1>
          <h4 className="my-2 ">2017, David Ayer</h4>
          <span>
            <Progress
              type="circle"
              width={70}
              strokeWidth={12}
              percent={movieDetail.danhGia * 10}
              format={(percent) => `${percent / 10}`}
              strokeColor={{
                "0%": "#ffd000",
                "50%": "#ffc300",
                "100%": "#ff9500",
              }}
              trailColor="#618985"
            />
          </span>
          <span className="minutes ml-3 ">117 min</span>
          <p className="type">Action, Crime, Fantasy</p>
        </div>
        <div className="movie_desc">
          <p className="text ">{movieDetail.moTa}</p>
        </div>
        <div className="movie_social">
          <ul>
            <li>
              <FontAwesomeIcon icon={faShareNodes} />
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="blur_back bright_back"
        style={{
          background: `url('${movieDetail.hinhAnh}')`,
          //   backgroundSize: "700px 700px",
        }}
      />
    </div>
  );
}
