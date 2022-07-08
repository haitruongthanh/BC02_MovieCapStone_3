import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";

export const movieService = {
  getMovieList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
