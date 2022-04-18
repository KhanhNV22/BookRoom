import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SliderBanner from "./silde";
import SliderCarousel from "../../components/sliderCarousel";
import Header from "../header";
import axios from "axios";

import {
  AiFillWechat,
  AiFillPhone,
} from "react-icons/ai";
import Footer from "../../components/footer";
import BtnToTop from "../../components/BtnToTop";
import { API_URL } from "../../constants";
import { userIdName } from "../../services/userService";
interface IPost {
  id: number,
  nameAddress: string,
  img: string
}
const defaultProps: IPost[] = [];

const Home: React.FC = () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultProps);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/address`);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  const user = localStorage.getItem('userName')

  return (
    <div className="home">
      <Header />
      <div className="mt--150"></div>
      <SliderBanner interval={5000} />
      <div className="mt--42"></div>

      <Container>
        <div className="title">
          <h3>Chào mừng đến với Luxstay! {""}
            {user ? {user}
              : userIdName === userIdName
                ? userIdName : null
            }
          </h3>
          <p>
            Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên
            Luxstay
          </p>

          {user ? null :
            userIdName === userIdName
              ? null :
              <p>
                <Link to="/">Đăng nhập</Link>
                <span className="text-lowercase">Hoặc</span>{" "}
                <Link to="/registration">Đăng ký</Link>
                để trải nghiệm !
              </p>
          }
        </div>

        {/* Địa điểm nổi bật */}
        <div className="section">
          <h2>Địa điểm nổi bật</h2>
          <p>
            Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
          </p>

          <div>
            <SliderCarousel dots={false} slidesToShow={5} styles={{ display: 'block' }}>
              {posts
              .map((post) => (
                <div className="product__cover" key={post.id}>
                  <Link to={`/addressRoom/${post.nameAddress}`}>
                    <img alt=""
                      className="product__image"
                      src={post.img}
                    />
                    <div className="product__content">
                      <div className="product__title">{post.nameAddress}</div>
                    </div>
                  </Link>
                </div>
              ))}
              {error && <p className="error">{error}</p>}
            </SliderCarousel>
          </div>
        </div>

        {/* uu dai doc quyen */}
        <div className="section">
          <div className="section-uudai">
            <div>
              <h2>Ưu đãi độc quyền</h2>
              <p>Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!</p>
            </div>
            <Link to="/" className="xemthem">
              Xem Thêm
            </Link>
          </div>

          <SliderCarousel
            dots={false}
            slidesToShow={3}
            styles={{ display: "none" }}
          >
            <div>
              <Link to="/">
                <img alt=""
                  className="img-uudai"
                  src="https://cdn.luxstay.com/home/event/event_2_1633051906.jpg"
                />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img alt=""
                  className="img-uudai"
                  src="https://cdn.luxstay.com/home/event/event_2_1614658966.jpg"
                />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img alt=""
                  className="img-uudai"
                  src="https://cdn.luxstay.com/home/event/event_2_1596604498.jpg"
                />
              </Link>
            </div>
          </SliderCarousel>
        </div>

        {/* goi y */}
        <div className="section">
          <h2>Gợi ý từ Luxstay</h2>
          <p>Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn</p>
          <div>
            <SliderCarousel dots={false} slidesToShow={4} styles={{ display: 'block' }}>
              <div className="suggest">
                <Link to="/suggestAddress" className="text_decoration">
                  <img alt=""
                    className="suggest__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="suggest__content">
                    <div className="suggest__title">
                      Vi vu ngoại thành Hà Nội
                    </div>
                    <span className="suggest__excerpt">
                      <p>
                        Trải nghiệm không gian thoáng đãng cho chuyến đi ngay
                        gần Hà Nội
                      </p>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="suggest">
                <Link to="/" className="text_decoration">
                  <img alt=""
                    className="suggest__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="suggest__content">
                    <div className="suggest__title">
                      Vi vu ngoại thành Hà Nội
                    </div>
                    <span className="suggest__excerpt">
                      <p>
                        Trải nghiệm không gian thoáng đãng cho chuyến đi ngay
                        gần Hà Nội
                      </p>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="suggest">
                <Link to="/" className="text_decoration">
                  <img alt=""
                    className="suggest__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="suggest__content">
                    <div className="suggest__title">
                      Vi vu ngoại thành Hà Nội
                    </div>
                    <span className="suggest__excerpt">
                      <p>
                        Trải nghiệm không gian thoáng đãng cho chuyến đi ngay
                        gần Hà Nội
                      </p>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="suggest">
                <Link to="/" className="text_decoration">
                  <img alt=""
                    className="suggest__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="suggest__content">
                    <div className="suggest__title">
                      Vi vu ngoại thành Hà Nội
                    </div>
                    <span className="suggest__excerpt">
                      <p>
                        Trải nghiệm không gian thoáng đãng cho chuyến đi ngay
                        gần Hà Nội
                      </p>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="suggest">
                <Link to="/" className="text_decoration">
                  <img alt=""
                    className="suggest__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="suggest__content">
                    <div className="suggest__title">
                      Vi vu ngoại thành Hà Nội
                    </div>
                    <span className="suggest__excerpt">
                      <p>
                        Trải nghiệm không gian thoáng đãng cho chuyến đi ngay
                        gần Hà Nội
                      </p>
                    </span>
                  </div>
                </Link>
              </div>
            </SliderCarousel>
          </div>
        </div>

        {/* Gợi ý khám phá */}
        <div className="section">
          <h2>Gợi ý khám phá</h2>
          <p>
            Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là
            một khoảng trời an yên
          </p>

          <div>
            <SliderCarousel dots={false} slidesToShow={3} styles={{ display: 'block' }}>
              <div className="discover">
                <Link to="/">
                  <img alt=""
                    className="discover__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="discover__content">
                    <div className="post__header">
                      <Link to="/" className="post__category">
                        Thông tin homestay
                      </Link>
                    </div>
                    <div className="discover__title">
                      <Link to="/" className="text_decoration">
                        Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm
                        nhất
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="discover">
                <Link to="/">
                  <img alt=""
                    className="discover__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="discover__content">
                    <div className="post__header">
                      <Link to="/" className="post__category">
                        Thông tin homestay
                      </Link>
                    </div>
                    <div className="discover__title">
                      <Link to="/" className="text_decoration">
                        Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm
                        nhất
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="discover">
                <Link to="/">
                  <img alt=""
                    className="discover__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="discover__content">
                    <div className="post__header">
                      <Link to="/" className="post__category">
                        Thông tin homestay
                      </Link>
                    </div>
                    <div className="discover__title">
                      <Link to="/" className="text_decoration">
                        Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm
                        nhất
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="discover">
                <Link to="/">
                  <img alt=""
                    className="discover__image"
                    src="https://cdn.luxstay.com/home/location/location_1_1559734709.png"
                  />

                  <div className="discover__content">
                    <div className="post__header">
                      <Link to="/" className="post__category">
                        Thông tin homestay
                      </Link>
                    </div>
                    <div className="discover__title">
                      <Link to="/" className="text_decoration">
                        Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm
                        nhất
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </SliderCarousel>
          </div>
        </div>

        {/* Hướng dẫn sử dụng */}
        <div className="section">
          <h2>Hướng dẫn sử dụng</h2>
          <p>Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng</p>

          <div>
            <SliderCarousel
              dots={false}
              slidesToShow={5}
              styles={{ display: "none" }}
            >
              <div>
                <Link to="/">
                  <img alt=""
                    className="card__image"
                    src="https://cdn.luxstay.com/home/theme/theme_3_1583838065.jpg"
                  />
                </Link>
              </div>

              <div>
                <Link to="/">
                  <img alt=""
                    className="card__image"
                    src="https://cdn.luxstay.com/home/theme/theme_4_1583838088.jpg"
                  />
                </Link>
              </div>

              <div>
                <Link to="/">
                  <img alt=""
                    className="card__image"
                    src="https://cdn.luxstay.com/home/theme/theme_10_1583894021.jpg"
                  />
                </Link>
              </div>

              <div>
                <Link to="/">
                  <img alt=""
                    className="card__image"
                    src="https://cdn.luxstay.com/home/theme/theme_2_1583837926.jpg"
                  />
                </Link>
              </div>

              <div>
                <Link to="/">
                  <img alt=""
                    className="card__image"
                    src="https://cdn.luxstay.com/home/theme/theme_1_1584074526.jpg"
                  />
                </Link>
              </div>
            </SliderCarousel>
          </div>
        </div>

        <div className="section">
          <Row>
            <Col md={6}>
              <img alt=""
                src="https://ximgo.com/upload/2020/06/29/luxstray-6.png"
                style={{ width: "343px", height: "auto" }}
              />
              <h2 className="app-introduce__heading">
                TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT
              </h2>
              Luxstay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng
              hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm.
              Với Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà
              riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.
              <p></p>
              <div className="app-introduce__action">
                <Row>
                  <Col md={4}>
                    <div className="qr-code">
                      <img alt="" src="https://www.luxstay.com/qr-code.png" />
                    </div>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <Col md={6}>
                        <Link to="/">
                          <img alt=""
                            className="logo_app"
                            src="https://www.luxstay.com/icons/apple-store.svg"
                          />
                        </Link>
                      </Col>
                      <Col md={6}>
                        <Link to="/">
                          <img alt=""
                            className="logo_app"
                            src="https://www.luxstay.com/icons/huawei.svg"
                          />
                        </Link>
                      </Col>
                      <Col md={6}>
                        <Link to="/">
                          <img alt=""
                            className="logo_app"
                            src="https://www.luxstay.com/icons/google-play.svg"
                          />
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <img alt=""
                src={"https://www.luxstay.com/home/home-02.png"}
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </div>

        {/* footer */}
        <div className="section">
          <Row>
            <Col className="col-lg-20" xs={6} sm={6} md={4}>
              <img alt=""
                src="https://ximgo.com/upload/2020/06/29/luxstray-6.png"
                style={{ width: "auto", height: "70px", marginBottom: "18px" }}
              />

              <div className="about-item">
                <AiFillWechat className="icon_chat" />
                <div className="about-item__content">
                  <p className="extra-bold">Messenger</p>
                  <Link to="/" target="_blank" className="link_href">
                    http://m.me/luxstay
                  </Link>
                </div>
              </div>

              <div className="about-item">
                <AiFillPhone className="icon_chat" />
                <div className="about-item__content">
                  <p className="extra-bold">Call center</p>
                  <Link to="/" target="_blank" className="link_href">
                    18006586 (Việt Nam)
                  </Link>
                  <br />
                  <Link to="/" target="_blank" className="link_href">
                    0889866666
                  </Link>
                </div>
              </div>
            </Col>
            <Col className="col-lg-20" xs={6} sm={6} md={4}>
              <div className="widget">
                <h3 className="widget__title">TOP homestay được yêu thích</h3>
                <ul className="widget__menu widget__text">
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Đà Lạt</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Hà Nội</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Hồ Chí Minh</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Sapa</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Vũng Tàu</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Tam Đảo</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Hội An</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Đà Nẵng</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Hạ Long</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Homestay Phan Thiết</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-20" xs={6} sm={6} md={4}>
              <div className="widget">
                <h3 className="widget__title">KHÔNG GIAN ƯA THÍCH</h3>
                <ul className="widget__menu widget__text">
                  <li className="widget__menu-item">
                    <Link to="/">Căn hộ dịch vụ</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Biệt thự</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Nhà riêng</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Studio</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Travel Guide</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-20" xs={6} sm={6} md={4}>
              <div className="widget">
                <h3 className="widget__title">Về chúng tôi</h3>{" "}
                <ul className="widget__menu widget__text">
                  <li className="widget__menu-item">
                    <Link to="/">Blog</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Điều khoản hoạt động</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="tel:18006586">1800 6586</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">+84 8898 66666</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">info@luxstay.com</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Trang thông tin dành cho chủ nhà</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Cơ hội nghề nghiệp</Link>
                  </li>
                  <li className="widget__menu-item">
                    <Link to="/">Tạp chí du lịch</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-20" xs={6} sm={6} md={4}>
              <div className="widget">
                <h3 className="widget__title">Về chúng tôi</h3>{" "}
                <Row>
                  <Col md={6}>
                    <div className="qr-code">
                      <img alt="" src="https://www.luxstay.com/qr-code.png" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <Link to="/">
                          <img alt=""
                            className="logo_app-wrap"
                            src="https://www.luxstay.com/icons/apple-store.svg"
                          />
                        </Link>
                      </Col>
                      <Col md={12}>
                        <Link to="/">
                          <img alt=""
                            className="logo_app-wrap"
                            src="https://www.luxstay.com/icons/huawei.svg"
                          />
                        </Link>
                      </Col>
                      <Col md={12}>
                        <Link to="/">
                          <img alt=""
                            className="logo_app-wrap"
                            src="https://www.luxstay.com/icons/google-play.svg"
                          />
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
      <BtnToTop />
    </div>
  );
}

export default Home;
