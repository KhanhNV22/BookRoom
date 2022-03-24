import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.css";
import "./styles-media.css";

interface LoginProps {
  children: any
}

const LoginComponent: React.FC<LoginProps> = ({ children }: LoginProps) => {
  return (
    <div>
      <div className="welcome">
        <Container>
          <Row>
            <Col lg={7}>
              <h1 className="welcome__title">
                Đăng ký thành viên Luxstay - Tích điểm thưởng và nhận ưu đãi
              </h1>
              <p className="welcome__desc">
                Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay
                quyền lợi.
              </p>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Row>
            <Col lg={8} xs={12} className="order--1">
              <Row>
                <Col md={6}>
                  <div className="media">
                    <img alt=""
                      src="https://www.luxstay.com/account/coins@2x.png"
                      className="icons_login"
                    />
                    <h3 className="media__title">Tích điểm nhanh chóng</h3>{" "}
                    <p className="media__content m--0">
                      Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi
                      thành Lux Credit để du lịch nhiều hơn nữa.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="media">
                    <img alt=""
                      src="https://www.luxstay.com/account/top-sales@2x.png"
                      className="icons_login"
                    />{" "}
                    <h3 className="media__title">Tiện ích thông minh</h3>{" "}
                    <p className="media__content m--0">
                      Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có
                      kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="media">
                    <img alt=""
                      src="https://www.luxstay.com/account/wallet@2x.png"
                      className="icons_login"
                    />{" "}
                    <h3 className="media__title">Thanh toán đơn giản</h3>{" "}
                    <p className="media__content m--0">
                      Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức
                      năng lưu thẻ để đặt phòng lần sau.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="media">
                    <img alt=""
                      src="https://www.luxstay.com/account/backpack@2x.png"
                      className="icons_login"
                    />{" "}
                    <h3 className="media__title">Ưu đãi mỗi ngày</h3>{" "}
                    <p className="media__content m--0">
                      Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch
                      để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện
                      nghi với giá tốt nhất.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} xs={12} className="order--0">
              <div className="account">{children}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginComponent;
