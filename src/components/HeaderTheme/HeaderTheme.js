import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderTheme() {
  return (
    <div className="h-20 w-full flex items-center justify-between shadow-lg px-20">
      <NavLink to="/">
        <span className="text-black-500 text-2xl font-semibold ">LOGO</span>
      </NavLink>
      <div className="nav flex ">
        <div className="mx-2">
          <a href="/">HOME</a>
        </div>
        <div className="mx-2">
          <a href="#phimDangChieu">PHIM ĐANG CHIẾU</a>
        </div>
        <div className="mx-2">
          <a href="#tinTuc">TIN TỨC</a>
        </div>
      </div>
      <UserNav />
    </div>
  );
}
