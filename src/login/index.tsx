import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import LoginComponent from "../components/LoginComponent";
import "./login.css";
import { BsLock } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginSocial from "../components/LoginSocial";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      navigate("/")
    }
  },[])

  async function login() {
    let result = await fetch("http://localhost:4000/users", {
      method: 'GET'
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/")
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Cần nhập đúng định dạng email!")
        .required("Email không được để trống!"),
      password: Yup.string()
        .min(8, "Mật khẩu cần ít nhất 8 ký tự!")
        .required("Mật khẩu không được để trống."),
    }),
    onSubmit: (values) => {
      // localStorage.setItem(JSON.stringify(values, null, 2));
      navigate("/home");
    },
  });
  
  return (
    <div>
      <LoginComponent>
        <h3 className="account__title">Đăng nhập</h3>
        <div className="input-group">
          <label className="input-group__label bold is-block">
            Đăng nhập Luxstay để trải nghiệm
          </label>
        </div>

        <form className="account__body" onSubmit={formik.handleSubmit}>
          <div className="input-group__icon is-relative">
            <input
              type="email"
              name="email"
              placeholder="Địa chỉ email"
              className="input"
             
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="is-absolute input-icon">
              <AiOutlineMail />
            </span>
          </div>
          <div className="input-group__icon is-relative">
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <span className="is-absolute input-icon">
              <BsLock />
            </span>{" "}
          </div>{" "}
          <button
            type="submit"
            onClick={login}
            className="account__btn btn btn-grad--primary btn--shadow btn--md btn--radius btn--full bold"
          >
            Đăng nhập
          </button>{" "}
          <div className="center-xs">
            <div>
              Quên mật khẩu?
              {""}
              <Link to="/" className="color-i bold">
                Nhấn vào đây
              </Link>
            </div>{" "}
            <div className="mt--30">
              Bạn chưa có tài khoản Luxstay?{" "}
              <Link to="../registration" className="text_decoration">
                <span
                  className="text-orange bold"
                  style={{ cursor: "pointer" }}
                >
                  Đăng ký
                </span>
              </Link>
            </div>
          </div>
        </form>

        <div className="account__body">
          <div className="center-xs">Hoặc</div>{" "}
          <div className="account__3rd">
            <div>
              <div className="btn btn-outline--secondary btn--md btn--radius btn--full is-relative">
                <span>Đăng nhập với Facebook</span>{" "}
                <AiFillFacebook className="is-absolute icon-square" />
              </div>
            </div>{" "}
            <div className="mt-2">
            <LoginSocial>
                <div className="btn btn-outline--secondary btn--md btn--radius btn--full is-relative">
                  <span>Đăng nhập với Google</span>{" "}
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

export default Login;
