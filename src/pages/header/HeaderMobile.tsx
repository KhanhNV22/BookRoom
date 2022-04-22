import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userIdName } from "../../services/userService";

interface IMenuProps {
  isMenuOpen: boolean;
}

const HeaderMobile = ({ isMenuOpen }: IMenuProps) => {
  let navigate = useNavigate();

  const userNameGG = localStorage.getItem('userNameGG')

  function logout() {
    localStorage.clear();
    navigate("/")
    window.location.reload();
  }
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      {userIdName ?
        <div>
          <h2>{userIdName}</h2>
          <ul>
            <li>
              <Link to="/host">Host</Link>
            </li>
            <li>
              <Link to="/settingUser">Danh Sách Đặt Phòng</Link>
            </li>
            <li>
              <span className="menu_link-span" onClick={logout}>Đăng xuất</span>
            </li>
          </ul>
        </div> :
        <div>
          <h2>App Menu Mobile</h2>
          <ul>
            <li>
              <Link to="/host">Host</Link>
            </li>
            <li>
              <Link to="/login">Đăng Nhập</Link>
            </li>
            <li>
              <Link to="/registration">Đăng Ký</Link>
            </li>
          </ul>
        </div>
      }

    </div>
  );
};

export default HeaderMobile;