import React, { useEffect, useState } from "react";
import './suggest.css';
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiBuilding4Line, RiWaterFlashFill, RiPercentLine, RiPriceTag3Fill, RiSendPlaneFill } from "react-icons/ri";
import { MdBedroomParent } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import axios from "axios";
import { API_URL } from "../../constants";
import NumberFormat from "react-number-format";

const SuggestAddress = () => {
  const [suggests, setSuggests] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/rooms`);
        setSuggests(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
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
        <Row>
          {suggests.map((suggest: any, index: any) => (
            <Col xs={6} md={6} lg={3} className="col-lg-20" key={suggest.id}>
              <div className="div-room">
                <Link to={`/rooms/${suggest.id}`} className="text_decoration">
                  <img alt=""
                    src={suggest.img_rooms}
                    className="img-room"
                  />
                </Link>
                <div>
                  <span className="title__room">
                    {suggest.type}
                  </span>
                </div>
                <Link to="/" className="text_decoration promo__title">
                  {suggest.name}
                </Link>
                <div className="promo__description">
                  {suggest.bedRoom} Phòng
                </div>
                <div className="promo__price">
                  <span>
                  <NumberFormat
                      value={suggest.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"₫"}
                    />
                     /đêm </span>
                </div>
                <div className="promo__description">
                  {suggest.addressDetail}
                </div>
                <div className="mb--30"></div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default SuggestAddress;