import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginComponent from "../../components/LoginComponent";
import "./login.css";
import { BsLock } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import LoginSocial from "../../components/LoginGoogle";
import { API_URL } from "../../constants";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const user = useRef();
  const userId = useRef();
  const userIdName = useRef();
  const navigate = useNavigate();

  const checkUser = async (email: string, password: string) => {
    const settings = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    try {
      const response = await fetch(
        `${API_URL}/users?email=${email}&password=${password}`,
        settings
      );

      const data = await response.json();
      if (data.length > 0) {
        user.current = data[0];
        userId.current = data[0].id;
        userIdName.current = data[0].name;
        return user.current;
      } else {
        return;
      }
    } catch (error) {
      throw(error);
    }
  }

  const handleClickLogin = async () => {
    try {
      const loginUser = await checkUser(email, password);

      if (loginUser) {
        localStorage.setItem("user", JSON.stringify(user.current));
        localStorage.setItem("userId", JSON.stringify(userId.current));
        localStorage.setItem("userIdName", JSON.stringify(userIdName.current));
        navigate("/");
        window.location.reload();
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LoginComponent>
        <h3 className="account__title">Đăng nhập</h3>
        <div className="input-group">
          <label className="input-group__label bold is-block">
            Đăng nhập Luxstay để trải nghiệm
          </label>
        </div>

        <div className="account__body">
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
            />
            <span className="is-absolute input-icon">
              <BsLock />
            </span>
          </div>
          <button
            onClick={handleClickLogin}
            className="account__btn btn btn-grad--primary btn--shadow btn--md btn--radius btn--full bold"
          >
            Đăng nhập
          </button>
        </div>

        <div className="center-xs mt--18">
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
}


export default Login;
