import React from "react";
import {
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import "./header.css";
import { NavLink /* , useHistory */ } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { localStorageService } from "./../../services/localStorageService";
import { setUserInfoAction } from "./../../redux/actions/userInfoAction";

export default function UserNav() {
  // let history = useHistory();
  let dispatch = useDispatch();

  let userInfo = useSelector((state) => state.userReducer.userInfo);

  // console.log(userInfo);

  let handleLogout = () => {
    dispatch(setUserInfoAction(null));
    localStorageService.removeUserinfo();
    message.success("Tạm biệt " + userInfo.hoTen + ". Hẹn gặp lại!!!");
    window.location.href = "/login";
    /* setTimeout(() => {
      history.push("/login");
    }, 1200); */
  };

  return (
    <div>
      {userInfo ? (
        <div className="buttonNav space-x-3 flex items-center">
          <div className="w-10 rounded-full object-cover overflow-hidden">
            <img
              src={`https://i.pravatar.cc/150?u=${userInfo.taiKhoan}`}
              alt=""
            />
          </div>
          <span>{userInfo?.hoTen}</span>
          <Button
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            type="text"
            className="rounded-md hover:bg-red-200"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="buttonNav">
          <NavLink to="/login">
            <Button
              icon={
                <UserOutlined
                  style={{
                    color: "#003f88",
                  }}
                />
              }
              type="text"
              className="rounded-md hover:bg-blue-200 mr-3"
            >
              Login
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              icon={
                <UserAddOutlined
                  style={{
                    color: "#780000",
                  }}
                />
              }
              type="text"
              className="rounded-md hover:bg-red-200 mr-3"
            >
              Register
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
