import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import {  AiOutlineLogout } from "react-icons/ai";

const HeaderHost = () => {
  let navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/loginHost")
  }

  const userNameHost = localStorage.getItem('userNameHost')

  const handleSearch = () => {
    console.log("search");
  }

  return (
    <div className="header">
      <div className="container--md margin--body">
        <Row>
          <Col lg="6">
            <div className="header_left">
              <div className="header_logo">
                <Link to="/">
                  <img
                    className="logo"
                    alt=""
                    src="http://static.ybox.vn/2019/6/6/1561179296437-Black%20Logo%20Mark.png"
                  />
                </Link>
              </div>
              <form className="form" onSubmit={handleSearch}>
                <input className="input_header" placeholder="Tim Kiem" />
                <div className="icons_search">
                  <BsSearch />
                </div>
              </form>
            </div>
          </Col>
          <Col lg="6" className="col_right">
            <div className="header_right">
              <ul className="ul-wrap">
                <li className="is-relative menu-item li_menu">
                  <span className="menu__link menu__link--user btn--dropdown">
                  <div className="user-avatar">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                      </div>
                    <span className="px--6">{userNameHost}</span>
                  </span>
                  <div className=" popover--user-menu">
                    <ul className="user-menu is-relative">
                      <li className="user-menu__link user_logut">
                        <AiOutlineLogout /> {""}
                        <span className="menu_link-span" onClick={logout}>Đăng xuất</span>
                      </li>
                    </ul>
                  </div>
                </li>

              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
};

export default HeaderHost;
