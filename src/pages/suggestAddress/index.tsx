import React  from "react";
import './suggest.css';
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import {  Row, Col } from "react-bootstrap";
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiBuilding4Line, RiWaterFlashFill, RiPercentLine, RiPriceTag3Fill, RiSendPlaneFill } from "react-icons/ri";
import { MdBedroomParent } from "react-icons/md";
import { IoFlash, IoStar } from "react-icons/io5";

const SuggestAddress = () => {
    return(
        <div>
            <div className="homestay-page margin--body">
                <div className="mt--30"></div>
                <ul className="search-filter">
                    <li>
                        <button>
                            <BsFillGeoAltFill /> {""}
                            Khu vực
                        </button>
                    </li>
                    <li>
                        <button>
                            <RiBuilding4Line /> {""}
                            Loại Chỗ Ở
                        </button>
                    </li>
                    <li>
                        <button>
                            Ngày
                        </button>
                    </li>
                    <li>
                        <button>
                            <RiWaterFlashFill /> {""}
                            Đặt Phòng Nhanh
                        </button>
                    </li>
                    <li>
                        <button>
                            <RiPercentLine /> {""}
                            Gía Ưu Đãi
                        </button>
                    </li>
                    <li>
                        <button>
                            <RiPriceTag3Fill /> {""}
                            Gía Chỗ Ở
                        </button>
                    </li>
                    <li>
                        <button>
                            <RiSendPlaneFill />
                             {""}
                            Trải Nghiệm Chyến Đi
                        </button>
                    </li>
                    <li>
                        <button>
                            <MdBedroomParent /> {""}
                            Phòng Ngủ
                        </button>
                    </li>
                </ul>
                <div className="mt--30"></div>
                <div className="title mb--30">
                    <p>
                        <IoFlash />
                        Hiện có <b>52/214</b> chỗ ở cho phép đặt phòng nhanh
                    </p>
                </div>

                <div className="mt--30"></div>
                <Row>
                    <Col xs={6} md={6} lg={3} className="col-lg-20">
                        <div className="div-room">
                        <Link to="/" className="text_decoration">
                            <img alt=""
                            src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                            className="img-room"
                            />
                        </Link>
                        <div>
                            <span className="title__room">
                            Khác
                            </span>
                        </div>
                        <Link to="/" className="text_decoration promo__title">
                            BAVI Padme Home - Bungalow 2
                        </Link>
                        <div className="promo__description">
                            3 khách · 1 Phòng ngủ · 1 Phòng tắm
                        </div>
                        <div className="promo__price">
                            <span>850,000 /đêm </span>
                        </div>
                        <div className="promo__description">
                            Ba Vì, Hà Nội, Việt Nam
                        </div>
                        <div className="star_icons">
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            5
                        </div>
                        <div className="mb--30"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3} className="col-lg-20">
                        <div className="div-room">
                        <Link to="/" className="text_decoration">
                            <img alt=""
                            src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                            className="img-room"
                            />
                        </Link>
                        <div>
                            <span className="title__room">
                            Khác
                            </span>
                        </div>
                        <Link to="/" className="text_decoration promo__title">
                            BAVI Padme Home - Bungalow 2
                        </Link>
                        <div className="promo__description">
                            3 khách · 1 Phòng ngủ · 1 Phòng tắm
                        </div>
                        <div className="promo__price">
                            <span>850,000 /đêm </span>
                        </div>
                        <div className="promo__description">
                            Ba Vì, Hà Nội, Việt Nam
                        </div>
                        <div className="star_icons">
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            5
                        </div>
                        <div className="mb--30"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3} className="col-lg-20">
                        <div className="div-room">
                        <Link to="/" className="text_decoration">
                            <img alt=""
                            src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                            className="img-room"
                            />
                        </Link>
                        <div>
                            <span className="title__room">
                            Khác
                            </span>
                        </div>
                        <Link to="/" className="text_decoration promo__title">
                            BAVI Padme Home - Bungalow 2
                        </Link>
                        <div className="promo__description">
                            3 khách · 1 Phòng ngủ · 1 Phòng tắm
                        </div>
                        <div className="promo__price">
                            <span>850,000 /đêm </span>
                        </div>
                        <div className="promo__description">
                            Ba Vì, Hà Nội, Việt Nam
                        </div>
                        <div className="star_icons">
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            5
                        </div>
                        <div className="mb--30"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3} className="col-lg-20">
                        <div className="div-room">
                        <Link to="/" className="text_decoration">
                            <img alt=""
                            src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                            className="img-room"
                            />
                        </Link>
                        <div>
                            <span className="title__room">
                            Khác
                            </span>
                        </div>
                        <Link to="/" className="text_decoration promo__title">
                            BAVI Padme Home - Bungalow 2
                        </Link>
                        <div className="promo__description">
                            3 khách · 1 Phòng ngủ · 1 Phòng tắm
                        </div>
                        <div className="promo__price">
                            <span>850,000 /đêm </span>
                        </div>
                        <div className="promo__description">
                            Ba Vì, Hà Nội, Việt Nam
                        </div>
                        <div className="star_icons">
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            5
                        </div>
                        <div className="mb--30"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3} className="col-lg-20">
                        <div className="div-room">
                        <Link to="/" className="text_decoration">
                            <img alt=""
                            src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                            className="img-room"
                            />
                        </Link>
                        <div>
                            <span className="title__room">
                            Khác
                            </span>
                        </div>
                        <Link to="/" className="text_decoration promo__title">
                            BAVI Padme Home - Bungalow 2
                        </Link>
                        <div className="promo__description">
                            3 khách · 1 Phòng ngủ · 1 Phòng tắm
                        </div>
                        <div className="promo__price">
                            <span>850,000 /đêm </span>
                        </div>
                        <div className="promo__description">
                            Ba Vì, Hà Nội, Việt Nam
                        </div>
                        <div className="star_icons">
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            5
                        </div>
                        <div className="mb--30"></div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={3} className="col-lg-20">
                        <div className="div-room">
                        <Link to="/" className="text_decoration">
                            <img alt=""
                            src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                            className="img-room"
                            />
                        </Link>
                        <div>
                            <span className="title__room">
                            Khác
                            </span>
                        </div>
                        <Link to="/" className="text_decoration promo__title">
                            BAVI Padme Home - Bungalow 2
                        </Link>
                        <div className="promo__description">
                            3 khách · 1 Phòng ngủ · 1 Phòng tắm
                        </div>
                        <div className="promo__price">
                            <span>850,000 /đêm </span>
                        </div>
                        <div className="promo__description">
                            Ba Vì, Hà Nội, Việt Nam
                        </div>
                        <div className="star_icons">
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            <IoStar />     
                            5
                        </div>
                        <div className="mb--30"></div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    )
}

export default SuggestAddress;