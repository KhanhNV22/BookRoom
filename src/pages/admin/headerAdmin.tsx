import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import LoginSocial from "../../components/LoginGoogle";
import { AiOutlineLogout } from "react-icons/ai"; import { API_URL } from "../../constants";
import axios from "axios";

const HeaderAdmin = () => {
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState<any>({});
  let navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/loginAdmin")
  }

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

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? [""]
    : rooms.filter((room: any) =>
      room.name.toLowerCase().includes(search.toLowerCase())
    );

  const userNameAdmin = localStorage.getItem('userNameAdmin');

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
                        <Link to={`checkRoomDetail/${room.id}`} key={room.id}>
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
                    <span className="px--6">{userNameAdmin}</span>
                  </span>
                  <div className=" popover--user-menu">
                    <ul className="user-menu is-relative">
                      {localStorage.getItem('userName') ?
                        <li>
                          <span className="user-menu__link user_logut">
                            <AiOutlineLogout /> {""}
                            <LoginSocial children />
                          </span>
                        </li> :
                        <li className="user-menu__link user_logut">
                          <AiOutlineLogout /> {""}
                          <span className="menu_link-span" onClick={logout}>Đăng xuất</span>
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

export default HeaderAdmin;
