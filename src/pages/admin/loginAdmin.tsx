import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsLock } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import LoginSocial from "../../components/LoginGoogle";
import { API_URL } from "../../constants";
import { Container, Row, Col } from "react-bootstrap";

function LoginAdmin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userAdmin = useRef();
  const userEmailAdmin = useRef();
  const userNameAdmin = useRef();
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
        `${API_URL}/admin?email=${email}&password=${password}`,
        settings
      );

      const data = await response.json();
      if (data.length > 0) {
        userAdmin.current = data[0];
        userEmailAdmin.current = data[0].email;
        userNameAdmin.current = data[0].name;
        return userAdmin.current;
      } else {
        return;
      }
    } catch (error) {
      throw (error);
    }
  }

  const handleClickLogin = async () => {
    try {
      const loginUser = await checkUser(email, password);
      if (loginUser) {
        localStorage.setItem("userAd", JSON.stringify(userAdmin.current));
        localStorage.setItem("userEmailAdmin", JSON.stringify(userEmailAdmin.current));
        localStorage.setItem("userNameAdmin", JSON.stringify(userNameAdmin.current));
        navigate("/admin");
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <div className="loginAdmin mt--60">
            <h3 className="account__title">Đăng nhập</h3>
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
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
export default LoginAdmin;
