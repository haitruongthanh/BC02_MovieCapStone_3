import React from "react";
import FooterTheme from "../components/FooterTheme/FooterTheme";
import HeaderTheme from "./../components/HeaderTheme/HeaderTheme";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
import SpinnerComponent from "../components/Spinner/SpinnerComponent";

const style = {
  height: 40,
  width: 40,
  lineHeight: "33px",
  borderRadius: 100,
  backgroundColor: "rgba(64, 64, 64, 0.6)",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

export default function LayoutTheme({ Component }) {
  return (
    <div>
      <SpinnerComponent />
      <HeaderTheme />
      <Component />
      <FooterTheme />
      <BackTop>
        <div style={style}>
          <UpOutlined />
        </div>
      </BackTop>
    </div>
  );
}
