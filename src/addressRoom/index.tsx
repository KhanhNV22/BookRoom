import React from "react";
import { Link } from "react-router-dom";
import {  Row, Col, Form } from "react-bootstrap";
import "./styles.css";
import Footer from "../components/footer";

const AddressRoom = () => {
  return (
    <div>
      <div className="container--md margin--body">
        <div className="mt--30"></div>
        <div className="title mb--30">
          <p>
            <b>
              Trước khi đặt phòng, hãy kiểm tra những địa điểm bị hạn chế du
              lịch trong thời gian này.
            </b>{" "}
            Sức khỏe và sự an toàn của cộng đồng luôn được đặt hàng đầu. Vì vậy,
            vui lòng làm theo chỉ thị của chính phủ bởi điều đó thực sự cần
            thiết.
          </p>
        </div>

        <Row>
          <div className="mt--30"></div>
          <Col md={9}>
            <h2 className="title-h2">1698 homestay tại Hà Nội</h2>
          </Col>
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>Sắp xếp: Lựa chọn</option>
              <option value="1">Gía tăng dần</option>
              <option value="2">Gía giảm dần</option>
            </Form.Select>
          </Col>
        </Row>

        <div className="mt--30"></div>
        <Row>
          <Col xs={6} md={3} className="col-lg-20">
            <div className="div-room">
              <Link to="/" className="text_decoration">
                <img alt=""
                  src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                  className="img-room"
                />
              </Link>
              <div>
                <span className="title__room">
                  Căn hộ dịch vụ - 1 phòng ngủ
                </span>
              </div>
              <Link to="/" className="text_decoration promo__title">
                The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công -
                Dịch Vọng
              </Link>

              <div className="promo__price">
                <span>850,000 /đêm </span>
              </div>
              <div className="mb--30"></div>
            </div>
          </Col>

          <Col xs={6} md={3} className="col-lg-20">
            <div className="div-room">
              <Link to="/" className="text_decoration">
                <img alt=""
                  src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                  className="img-room"
                />
              </Link>
              <div>
                <span className="title__room">
                  Căn hộ dịch vụ - 1 phòng ngủ
                </span>
              </div>
              <Link to="/" className="text_decoration promo__title">
                The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công -
                Dịch Vọng
              </Link>

              <div className="promo__price">
                <span>850,000 /đêm </span>
              </div>
              <div className="mb--30"></div>
            </div>
          </Col>

          <Col xs={6} md={3} className="col-lg-20">
            <div className="div-room">
              <Link to="/" className="text_decoration">
                <img alt=""
                  src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                  className="img-room"
                />
              </Link>
              <div>
                <span className="title__room">
                  Căn hộ dịch vụ - 1 phòng ngủ
                </span>
              </div>
              <Link to="/" className="text_decoration promo__title">
                The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công -
                Dịch Vọng
              </Link>

              <div className="promo__price">
                <span>850,000 /đêm </span>
              </div>
              <div className="mb--30"></div>
            </div>
          </Col>

          <Col xs={6} md={3} className="col-lg-20">
            <div className="div-room">
              <Link to="/" className="text_decoration">
                <img alt=""
                  src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                  className="img-room"
                />
              </Link>
              <div>
                <span className="title__room">
                  Căn hộ dịch vụ - 1 phòng ngủ
                </span>
              </div>
              <Link to="/" className="text_decoration promo__title">
                The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công -
                Dịch Vọng
              </Link>

              <div className="promo__price">
                <span>850,000 /đêm </span>
              </div>
              <div className="mb--30"></div>
            </div>
          </Col>

          <Col xs={6} md={3} className="col-lg-20">
            <div className="div-room">
              <Link to="/" className="text_decoration">
                <img alt=""
                  src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                  className="img-room"
                />
              </Link>
              <div>
                <span className="title__room">
                  Căn hộ dịch vụ - 1 phòng ngủ
                </span>
              </div>
              <Link to="/" className="text_decoration promo__title">
                The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công -
                Dịch Vọng
              </Link>

              <div className="promo__price">
                <span>850,000 /đêm </span>
              </div>
              <div className="mb--30"></div>
            </div>
          </Col>

          <Col xs={6} md={3} className="col-lg-20">
            <div className="div-room">
              <Link to="/" className="text_decoration">
                <img alt=""
                  src="https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png"
                  className="img-room"
                />
              </Link>
              <div>
                <span className="title__room">
                  Căn hộ dịch vụ - 1 phòng ngủ
                </span>
              </div>
              <Link to="/" className="text_decoration promo__title">
                The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công -
                Dịch Vọng
              </Link>

              <div className="promo__price">
                <span>850,000 /đêm </span>
              </div>
              <div className="mb--30"></div>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default AddressRoom;
