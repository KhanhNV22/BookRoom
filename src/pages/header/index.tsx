import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginSocial from "../../components/LoginGoogle";
import "./styles.css";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { BsCardList, BsSearch } from "react-icons/bs";
import { userIdName } from "../../services/userService";
import { API_URL } from "../../constants";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState<any>({});
  let navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login")
    window.location.reload();
  }

  const userNameGG = localStorage.getItem('userNameGG')
  const userImgGG = localStorage.getItem('userImgGG')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/rooms`);
        setRooms(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleClickSeacrch = () => {
    console.log("search");
  }

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? [""]
    : rooms.filter((room: any) =>
      room.name.toLowerCase().includes(search.toLowerCase())
    );

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
              <form className="form" onChange={handleSearchChange}>
                <input className="input_header" placeholder="Tim Kiem" />
                <div className="icons_search">
                  <BsSearch />
                </div>
                <div className="search_res" style={{
                  display: search
                    ? "block"
                    : "none"
                }}>
                  {filtered
                    .slice(0, 7)
                    .map((room: any) => {
                      return (
                        <Link to={`/rooms/${room.id}`} key={room.id}>
                          <div className="search_content" >
                            <img src={room.img_rooms} alt="" />
                            <div className="search_content-p">
                              <p>
                                {room.name}
                              </p>
                              <p>
                                {room.addressDetail} - {room.address}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </form>
              <div className="btn_search">
                <button onClick={handleClickSeacrch}>
                  <BsSearch />
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" className="col_right">
            <div className="header_right">
              <ul className="ul-wrap">
                <li className="li_menu">
                  <Link to="/host" className="menu_link">Host</Link>
                </li>
                {userIdName ?
                  <li className="is-relative menu-item li_menu">
                    <span className="menu__link menu__link--user btn--dropdown">
                      <div className="user-avatar">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                      </div>
                      <span className="px--6">{userIdName}</span>
                    </span>
                    <div className=" popover--user-menu">
                      <ul className="user-menu is-relative">
                        <li>
                          <Link to="/listBookingsUser" className="user-menu__link">
                            <BsCardList /> {""}
                            Danh Sách Đặt Phòng
                          </Link>
                        </li>
                        <li>
                          <Link to="/settingUser" className="user-menu__link">
                            <AiOutlineSetting /> {""}
                            Cài đặt tài khoản
                          </Link>
                        </li>
                        <li className="user-menu__link user_logut">
                          <AiOutlineLogout /> {""}
                          <span className="menu_link-span" onClick={logout}>Đăng xuất</span>
                        </li>
                      </ul>
                    </div>
                  </li> :
                  userNameGG ?
                    <li className="is-relative menu-item li_menu">
                      <span className="menu__link menu__link--user btn--dropdown">
                        <div className="user-avatar">
                          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        </div>
                        <span className="px--6">{userNameGG}</span>
                      </span>
                      <div className=" popover--user-menu">
                        <ul className="user-menu is-relative">
                          <li>
                            <Link to="/listBookingsUser" className="user-menu__link">
                              <BsCardList /> {""}
                              Danh Sách Đặt Phòng
                            </Link>
                          </li>
                          <li>
                            <Link to="/settingUser" className="user-menu__link">
                              <AiOutlineSetting /> {""}
                              Cài đặt tài khoản
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
                    : <>
                      <li className="li_menu">
                        <Link to="/login" className="menu_link">Đăng Nhập</Link>
                      </li>
                      <li className="li_menu">
                        <Link to="/registration" className="menu_link">Đăng Ký</Link>
                      </li>
                    </>
                }
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
};

export default Header;
