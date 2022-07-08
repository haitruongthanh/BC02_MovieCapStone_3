import React from "react";
import {
  LogoutOutlined,
  PauseOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, message, Space } from "antd";
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
          <span>{userInfo?.hoTen}</span>
          <div className="w-10 rounded-full object-cover overflow-hidden">
            <img
              src={`https://i.pravatar.cc/150?u=${userInfo.taiKhoan}`}
              alt=""
            />
          </div>
          <Space>
            <PauseOutlined
              style={{
                fontSize: "22px",
              }}
            />
          </Space>
          <Button icon={<LogoutOutlined />} onClick={handleLogout}>
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
              className="mr-3"
            >
              Login
            </Button>
          </NavLink>
          <Space>
            <PauseOutlined
              style={{
                fontSize: "22px",
                marginRight: "10px",
              }}
            />
          </Space>
          <NavLink to="/register">
            <Button
              icon={
                <UserAddOutlined
                  style={{
                    color: "#780000",
                  }}
                />
              }
            >
              Register
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
