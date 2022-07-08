import React from "react";
import "./register.css";

export default function RegisterPage() {
  return (
    <div className="registerForm w-screen h-screen">
      <div className="main-w3layouts wrapper">
        <h1>SignUp</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="#" method="post">
              <input
                className="text"
                type="text"
                name="taiKhoan"
                placeholder="Username"
                required
              />
              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="text"
                type="number"
                name="soDt"
                placeholder="Phone Number"
                required
              />
              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                className="text w3lpass"
                type="password"
                name="password"
                placeholder="Confirm Password"
                required
              />
              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required />
                  <span>I Agree To The Terms &amp; Conditions</span>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit" defaultValue="SIGNUP" />
            </form>
            <p>
              Have an Account? <a href="/login"> Login Now!</a>
            </p>
          </div>
        </div>
        {/* copyright */}
        {/* <div className="colorlibcopy-agile">
          <p>
            © 2018 Colorlib Signup Form. All rights reserved | Design by{" "}
            <a href="https://colorlib.com/" target="_blank">
              Colorlib
            </a>
          </p>
        </div> */}
        {/* //copyright */}
        <ul className="colorlib-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
}
