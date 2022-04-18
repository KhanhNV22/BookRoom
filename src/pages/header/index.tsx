import React, { useEffect, useState } from "react";

import "./styles.css";
import { ReactDimmer } from "react-dimmer";
import { Link, useNavigate } from "react-router-dom";
import HeaderWeb from "./HeaderWeb";
import HeaderMobile from "./HeaderMobile";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from "react-bootstrap";
import { API_URL } from "../../constants";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState<any>({});
  const [isMenuOpen, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

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

  return (

    <div className="header-container">
      <div className="header-web">
        <HeaderWeb />
      </div>
      <div className="header-mobile">
        <div className="menu-mb">
          <div className="menu-svg">
            <GiHamburgerMenu className="menu-btn" onClick={handleMenu} />
          </div>
          <div className="nav">
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
          </div>
          <div>
            <div className="header_logo">
              <Link to="/">
                <img
                  className="logo"
                  alt=""
                  src="http://static.ybox.vn/2019/6/6/1561179296437-Black%20Logo%20Mark.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HeaderMobile isMenuOpen={isMenuOpen} />
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </div >
  );
};

export default Header;
