import React from "react";
import { Link } from "react-router-dom";

interface IMenuProps {
  isMenuOpen: boolean;
}

const HeaderMobile = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
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
  );
};

export default HeaderMobile;