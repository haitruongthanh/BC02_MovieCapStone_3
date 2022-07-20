import React from "react";
import { dataLogo } from "./dataLogo";
import logo from "../../assets/logo.jpg";
import daThongBao from "../../assets/daThongBao-logo.png";
import zalo from "../../assets/zalo.png";
import iphone from "../../assets/iphone.png";
import "./footer.css";

export default function FooterTheme() {
  return (
    <div className="w-full bg-gray-900 min-h-max " id="footer">
      <div className="container mx-auto py-8 px-36">
        <div className="info grid grid-cols-3 pb-10 border-b">
          <div className="about_tix">
            <h6 className="text-white font-medium pb-3">TIX</h6>
            <div className="grid grid-cols-2">
              <p className="text-gray-500 cursor-pointer hover:text-white ">
                FAQ
              </p>
              <p className="text-gray-500 cursor-pointer hover:text-white ">
                Brand Guidelines
              </p>
              <p className="text-gray-500 cursor-pointer hover:text-white ">
                Thỏa thuận sử dụng
              </p>
              <p className="text-gray-500 cursor-pointer hover:text-white ">
                Chính sách bảo mật
              </p>
            </div>
          </div>
          <div className="doiTac">
            <h6 className="text-white font-medium pb-3">ĐỐI TÁC</h6>
            <div className="grid grid-cols-4">
              {dataLogo.map((item, i) => {
                return (
                  <div className="w-16 p-3" key={i}>
                    <a href={item.link} target="blank">
                      <img
                        src={item.linkHinh}
                        alt={item.tenHinh}
                        className="rounded-full"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="social">
            <div className="grid grid-cols-2">
              <div>
                <h6 className="text-white font-medium pb-3">MOBILE APP</h6>
                <img
                  src={iphone}
                  alt=""
                  style={{
                    width: 40,
                    marginRight: "10px",
                    display: "inline-block",
                  }}
                  className="hover:cursor-pointer"
                />
                <img
                  className="hover:cursor-pointer"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABXCAMAAAB7hEg4AAAAe1BMVEUAAACVlZWXl5eWlpaUlJSUlJSUlJSWlpaVlZWVlZWVlZWWlpaUlJSjo6OVlZWVlZWfn5+WlpaVlZWXl5eVlZWVlZWVlZWUlJSXl5eenp6VlZWtra2VlZWVlZWVlZWVlZWZmZmbm5uVlZWVlZWVlZWVlZWWlpaVlZWUlJTu8U1AAAAAKHRSTlMA51MY6UO6WiTD+JatBYDcDDvJNfHToJEuE4gI4ox4ayAQtqZ9ckhgkElVywAAAgxJREFUWMPt2NmSojAYhuHfaVAIKqtsCojrd/9XOB0DZtol8ls9B13NcySWvpVoQmnoR1m0ZNAuOK1UOPRUjJLTCuE+H/NKOMSRoaEnDjgQS7BJtvRQLlYL4jlhp6Lx7FB6XlnP4uAywwgxcaU4U1hF0ERU5nRERWyFlfi4sxL+mp1a1wkeshr2x7XBU6uQtexLmIiasSCmeGE+dJ5thJd262ETdDHAfFDLw0VS1o/WxLES6tFyQOoPlFAuMdzw1/oF9oCN2C0jeTHHDU9+BlBeb8slOtvPd91N0pWbG53m1XK/Tiuy4z3uePnJv06YzM5gOJlbUzDszVMUYLCMrRgsgak1A8uHqXUEi2Nq1d/YOk9YtvRfbSs3SkN6k52587rt7wwCUiYf8r9HD9JEDcURUBp+S3/zVqF+H/SXC35Lb5Tq600q57f0RnG/bmeb39IbZfKNLWtsja2xNbbG1u9p7dAL+S0bvZX6m94RLb9VoJfKlq2v+C3a60lJaTfI9p1W4UO6njM0n9dJFrz3OyfINhDRia4K+exbLalY0D1+q/OTWuz/HSY+GFwyCgUGS3Iyi10MtHPopcCRIvQy52KP3tSRAhqsG54+PPBujybG1tgaWyY79I7qiRK9lNtaohfe3nIbbusjgRKpa32wZgW8kj4d2Gypk1uQkpD48r0l/Kr4Z6jZRkxSw1nJX+vMF/qKdZ1sAAAAAElFTkSuQmCC"
                  alt=""
                  style={{
                    width: 40,
                    marginRight: "10px",
                    display: "inline-block",
                  }}
                />
              </div>
              <div>
                <h6 className="text-white font-medium pb-3">SOCIAL</h6>
                <img
                  className="hover:cursor-pointer"
                  src={zalo}
                  alt=""
                  style={{
                    width: 40,
                    marginRight: "10px",
                    display: "inline-block",
                  }}
                />
                <img
                  className="hover:cursor-pointer"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAflBMVEUAAACVlZWWlpaUlJSUlJSampqVlZWVlZWXl5eWlpaXl5ewsLCVlZWXl5eVlZWVlZWioqKUlJSVlZWVlZWVlZWXl5eenp6YmJiVlZWVlZWVlZWVlZWVlZWVlZWWlpaXl5eVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWWlpaUlJRq2G1aAAAAKXRSTlMAwXf4zxX8Y0OiIwTyHNy7Ce6mlHBQDynVheCd6o1qMl85ta99Vz7LSFONebAAAAKSSURBVFjD3dnX0towEIbhz2AJ415woxn4aXv/NxggM4EEw0qydZLn2Lyj0SJAAxSlIvL92vcjUQUYS7qf5G5IL5aHthQYKlokU+rVbPYwV80S+iZua8MFF1NiOVdoq+eSlLgnvbFWhSRlF41ND2Zr0iFXQnWTHdKVlVBRZmSgSPnNKMiM63NH70Cm1t+nKS5kLiy/DTCmIeTu85obGkZ+Wnfl0lBTD30Ch4YLO/TY0BjiCm9KGsfPW9kPaSQT/MNRmlJSTLbb7eIu//hQjb/MiBfvUqVXOHglMmJtAtXFzPBipbGFfDqrXmYoiZNDPU1HnUWHQiedVRqLXqEvzS+7IJanl85SPKQhsVK9NO3wsCNWjKdJs7zL6I55byfEujzLHqmQEW6EJJbzsmhSssDNiWykE9zMraSn98HHVtJ0BgTZSU+AM/NI5t68HMaZ+1vMf+hsmUfm6MNPvwFaw/SCmyMwN0xv+M+Gg2E6J4bAxTDtECNCY5bmj4OP2DA9tZauiE2zG5J4N92zGXkPO4W0a+mgUwTHVlrgx1a6QmErHWBiKb0GSkvpBKgtpTdAENpJnwAkdtIR86x5usFNbSW9wV1sI33GXWshvcRDbSHdMt9F5mnpM3doPs3fpt2x0x1z9TdPH/DUjJvu8OQZp/nraz5iOhPM/d88PWOugeZph/l5aJ5eR2/ptBkn7eFdHX45uNM/JH11RB9vSoOt0K+UNNBPgA9mNEwS4KOdHLTmFF9cQzJWMP+idGsyI4/giIRMrK9QMJEGAxRQ0rmkJ1xAVbDNdHZ5LqBBFMpH09lDk2hD4snDHgaqBbfn66KGqbqNP88uvwYYxN/my/ds0p4DjKHqyu1xs5rn81XRLk7nCP+vXxyyUrzi8kSkAAAAAElFTkSuQmCC"
                  alt=""
                  style={{
                    width: 40,
                    marginRight: "10px",
                    display: "inline-block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="companyInfo flex justify-between mt-10">
          <div style={{ width: 200, height: 150 }}>
            <img src={logo} alt="" />
          </div>
          <div className="nameAddress text-white mx-5 ">
            <h6 className="text-white font-medium pb-3">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </h6>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam. <br />
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp. <br />
              Số Điện Thoại (Hotline): 1900 545 436
            </p>
          </div>
          <div style={{ width: 150, height: 100 }}>
            <img src={daThongBao} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
