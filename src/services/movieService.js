import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";

export const movieService = {
  getMovieList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getMovieByTheater: () => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getDetailMovie: (param) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${param}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getDetailTabMovie: (param) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${param}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getMovieNews: () => {
    return axios.get("https://imdb-api.com/en/API/Top250Movies/k_9uj44792");
  },
  getBannerMovie: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
