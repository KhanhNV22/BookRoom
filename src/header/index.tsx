import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import LoginSocial from "../components/LoginSocial";
import "./styles.css";
import { BsBagPlus } from "react-icons/bs";
import { AiOutlineMail, AiOutlineCalendar, AiOutlineSetting, AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";


const Header = () => {
  let navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <div className="header">
      <div className="container--md margin--body">
        <Row>
          <Col lg="6">
            <div className="header_left">
              <div className="header_logo">
                <img
                  className="logo"
                  alt=""
                  src="http://static.ybox.vn/2019/6/6/1561179296437-Black%20Logo%20Mark.png"
                />
              </div>
              <form className="form">
                <input className="input_header" placeholder="Tim Kiem" />
                <div className="icons_search">
                  <BsSearch />
                </div>
              </form>
            </div>
          </Col>
          <Col lg="6" className="col_right">
            <div className="header_right">
              <ul>
                <li className="li_menu">
                  <Link to="/" className="menu_link">Guide</Link>
                </li>
                <li className="li_menu">
                  <Link to="/" className="menu_link">Host</Link>
                </li>
                <li className="is-relative menu-item li_menu">
                  <span className="menu__link menu__link--user btn--dropdown">
                    <div className="user-avatar">
                      <img src="https://lh3.googleusercontent.com/a/AATXAJzT56VA7fRZyrIx9kgl4po9tOKI7USqcjZRTCnp=s96-c" alt="" />
                    </div>
                    <span className="px--6">khanh</span>
                  </span>

                  <div className=" popover--user-menu">
                    <ul className="user-menu is-relative">
                      <li>
                        <Link to="/" className="user-menu__link" >
                          <AiOutlineCalendar /> {""}
                          Đặt chỗ của tôi
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="user-menu__link">
                          <AiOutlineMail /> {""}
                          Tin Nhắn
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="user-menu__link">
                          <AiOutlineSetting /> {""}
                          Cài đặt tài khoản
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="user-menu__link">
                          <AiOutlineHeart /> {""}
                          Yêu thích
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="user-menu__link">
                          <BsBagPlus /> {""}
                          Luxstay for Business
                        </Link>
                      </li>

                      <li>
                        <span className="user-menu__link user_logut">
                          <AiOutlineLogout /> {""}
                          <LoginSocial children />
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="li_menu">
                  <span className="menu_link" onClick={logout}>Đăng xuất</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
