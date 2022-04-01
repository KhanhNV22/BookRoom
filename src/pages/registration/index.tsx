import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginComponent from "../../components/LoginComponent";
import { BsLock } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import "./registration.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginSocial from "../../components/LoginGoogle";
import { API_URL } from "../../constants";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const addAccount = (e: any) => {
    e.preventDefault();
    try {
      const data = { name, email, password };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch(`${API_URL}/users`, requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
      alert("Thêm Thành công");
      navigate("/login")

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <LoginComponent>
        <h3 className="account__title">Đăng ký thành viên</h3>

        <form className="account__body">
          <label className="input-group__label bold is-block">
            Địa chỉ email
          </label>
          <div className="input-group__icon is-relative">
            <input
              type="email"
              name="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="is-absolute input-icon">
              <AiOutlineMail />
            </span>

          </div>

          <label className="input-group__label bold is-block">Tên</label>
          <div className="input-group__icon is-relative">
            <input
              name="name"
              className="input"
              type="text"

              onChange={(e) => setName(e.target.value)}
            />

          </div>
          <label className="input-group__label bold is-block">
            Mật Khẩu (tối thiểu 8 ký tự)
          </label>
          <div className="input-group__icon is-relative">
            <input
              name="password"
              type="password"
              className="input"

              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="is-absolute input-icon">
              <BsLock />
            </span>

          </div>
          <label className="input-group__label bold is-block">
            Xác nhận mật khẩu mới
          </label>
          <div className="input-group__icon is-relative">
            <input
              name="confirm_password"
              type="password"
              className="input"

            />
            <span className="is-absolute input-icon">
              <BsLock />
            </span>

          </div>
          <button
            type="submit" onClick={addAccount}
            className="account__btn btn btn-grad--primary btn--shadow btn--md btn--radius btn--full bold"
          >
            Đăng Ký
          </button>
          <div className="center-xs">
            <div className="mt--30">
              Bạn đã có tài khoản Luxstay?
              <Link to="/" className="text_decoration">
                <span
                  className="text-orange bold"
                  style={{ cursor: "pointer" }}
                >
                  Đăng Nhập
                </span>
              </Link>
            </div>
          </div>
        </form>

        <div className="account__body">
          <div className="center-xs">
            <span>
              Tôi đồng ý với <b>Bảo mật</b> và <b>Điều khoản hoạt động</b> của Luxstay.
            </span>
          </div>
          <div className="account__3rd">
            <div>
              <div className="btn btn-outline--secondary btn--md btn--radius btn--full is-relative">
                <span>Đăng nhập với Facebook</span>
                <AiFillFacebook className="is-absolute icon-square" />
              </div>
            </div>
            <div className="mt-2">
              <LoginSocial>
                <div className="btn btn-outline--secondary btn--md btn--radius btn--full is-relative">
                  <span>Đăng nhập với Google</span>
                  <AiFillGooglePlusCircle className="is-absolute icon-square" />
                </div>
              </LoginSocial>
            </div>
          </div>
        </div>
      </LoginComponent>
      <Footer />
    </div>
  );
};

export default Registration;
