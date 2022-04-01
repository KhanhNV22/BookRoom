import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import LoginSocial from "../../components/LoginGoogle";
import "./styles.css";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

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
              <ul className="ul-wrap">
                <li className="li_menu">
                  <Link to="/host" className="menu_link">Host</Link>
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
                        <Link to="/" className="user-menu__link">
                          <AiOutlineSetting /> {""}
                          Cài đặt tài khoản
                        </Link>
                      </li>

                      {localStorage.getItem('user-info') ?
                        <li className="user-menu__link user_logut">
                          <AiOutlineLogout /> {""}
                          <span className="menu_link-span" onClick={logout}>Đăng xuất</span>
                        </li> :
                        <li>
                          <span className="user-menu__link user_logut">
                            <AiOutlineLogout /> {""}
                            <LoginSocial children />
                          </span>
                        </li>
                      }
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

export default Header;
