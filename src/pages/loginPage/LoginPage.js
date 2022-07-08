import React from "react";
import "./login.css";
import { Button, Form, Input, message } from "antd";
import { userService } from "./../../services/userService";
import { localStorageService } from "./../../services/localStorageService";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserInfoAction } from "../../redux/actions/userInfoAction";

export default function LoginPage() {
  let dispatch = useDispatch();
  let history = useHistory();

  const onFinish = (values) => {
    // console.log("Success:", values);
    userService
      .postLogin(values)
      .then((res) => {
        // console.log("res", res);
        localStorageService.setUserInfo(res.data.content);
        dispatch(setUserInfoAction(res.data.content));
        message.success(res.data.message);
        setTimeout(() => {
          history.push("/");
        }, 1500);
      })
      .catch((err) => {
        // console.log("err", err);
        message.error(err.response.data.content);
      });
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <div className="bodyLogin">
      <div className="container">
        <div className="front_card">
          <Form
            className="login_form flex flex-col justify-start"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className="user_email"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              className="user_password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login_btn">
                LogIn
              </Button>
            </Form.Item>
          </Form>
          <form className="signup_form"></form>
        </div>
        <div className="back_card">
          <div className="login_msg"></div>
          <div className="signup_msg">
            <h2>Do not have account?</h2>
            <a href="/register">
              <button className="signup_msg_btn">SignUp</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
