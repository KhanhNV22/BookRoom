import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './rooms.css';
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiBuilding4Line } from "react-icons/ri";
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReadMore from '../../components/readMore';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import Footer from '../../components/footer';
import axios from 'axios';
import { API_URL } from '../../constants';
import BtnToTop from '../../components/BtnToTop';

const Rooms = () => {
  const startDate: Date = new Date(new Date());
  const endDate: Date = new Date(new Date());
  const minValue: Date = new Date(new Date());
  const maxValue: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 90);

  const [notes, setNotes] = useState<any>({});
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const guest_nums = Number(adult)  + Number(children);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${API_URL}/rooms/${id}`);
        setNotes(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const addBookRoom = (e: any) => {
    e.preventDefault();
    try {
      const data = { startDate, endDate, adult, children,guest_nums, status: true};
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch(`${API_URL}/booking`, requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
      // alert(JSON.stringify(data, null, 2));
      navigate(`/checkoutRooms/${id}`)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <img alt="" src={notes.img_rooms} className="img_rooms" />
      <div className='mb--30'></div>
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className='h1-title mb--12'>{notes.name} - {notes.info}</h1>

            <div className='detail__location mt--18'>
              <BsFillGeoAltFill />
              <span className='bold'>{notes.addressDetail}</span>
              <Link to="#map">Xem bản đồ</Link>
            </div>
            <div className='detail__location mt--12'>
              <RiBuilding4Line />
              <span className='bold'>{notes.type}</span>
              <span>* {notes.square} m<sup>2</sup></span>
            </div>
            <div className='detail__location mt--12'>
              <span className='bold'>Phòng riêng</span>
              <span>· {notes.bedRoom} Phòng</span>
            </div>
            <div className='mt--42'></div>
            <div className='detail__intro'>
              <ReadMore>
                <p>
                  <strong>Tóm tắt về {notes.name}</strong>
                </p>
                <p>·Vị trí rất đẹp và thuận tiện ở quận Cầu Giấy</p>
                <p>·Gần công viên Cầu Giấy, Lotteria, trung tâm mua sắm với môi trường ngoài trời yên tĩnh</p>
                <p>·Bạn hoàn toàn có thể trải nghiệm những dịch vụ cao cấp tại đây</p>

                <p>
                  <strong>Về không gian</strong>
                </p>
                <p>·Căn hộ được thiết kế với nhiều lựa chọn bố trí hợp lý và được trang bị theo tiêu chuẩn cao cấp 4 sao với ban công riêng và cảnh quan đẹp</p>
                <p>·Có nhiều dịch vụ tại chỗ khác nhau như giặt ủi, dịch vụ vệ sinh, Wi-Fi miễn phí tốc độ cao, an ninh 24/7</p>
                <p>·Dịch vụ khách hàng đặc biệt được cung cấp</p>
                <p>
                  <strong>Căn hộ Deluxe 60m2 - Có ban công - Hướng nhìn thành phố</strong>
                </p>
                <p>·Thang máy ra vào căn hộ với hệ thống thẻ khóa an ninh</p>
                <p>·Phòng khách được thiết kế theo phong cách hiện đại với ghế sofa và khu vực ăn uống riêng</p>
                <p>·Nhà bếp được trang bị đầy đủ với bếp điện và máy hút mùi điện, lò vi sóng, tủ lạnh, ấm điện, đồ thủy tinh, đồ sành sứ, dao kéo</p>
                <p>·Phòng tắm được trang bị bồn tắm dài / tắm đứng và kính riêng</p>
                <p>·Phòng ngủ có sẵn ga trải giường và két an toàn cá nhân trong phòng</p>
                <p>·Hệ thống giải trí với TV LCD và các kênh truyền hình cáp</p>
                <p>·Điều hòa hai chiều với bộ điều khiển nhiệt riêng</p>
                <p>·Điện thoại</p>
                <p>·Wi-fi</p>
                <p>·Cơ sở vật chất phòng tắm và nhà bếp tiện nghi đến từ các nhãn hàng nổi tiếng như: Koller, Samsung, Electrolux...</p>
                <p>·Căn hộ đều có tiện nghi sang trọng, điện thoại, kênh truyền hình cáp, TV màn hình phẳng, máy lạnh, khu vực phòng khách, máy giặt, tủ quần áo, giá treo quần áo, máy sấy tóc, phòng tắm, dép, vòi hoa sen, ghế sofa, sàn gỗ, tủ lạnh, lò vi sóng, đồ dùng nhà bếp, bàn ăn, khăn tắm, ga trải giường.</p>
              </ReadMore>
            </div>

            <div className='title mt--60'>
              <h3>Tiện nghi chỗ ở </h3>
              <span>Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</span>
            </div>

            <div className='title mt--18'>
              <h4>Tiện ích</h4>

              <ul className='list list--3 is-flex'>
                <li className='mt--12'>
                  <span>Wifi</span>
                </li>
                <li className='mt--12'>
                  <span>TV</span>
                </li>
                <li className='mt--12'>
                  <span>Điều hoà</span>
                </li>
                <li className='mt--12'>
                  <span>Máy giặt</span>
                </li>
                <li className='mt--12'>
                  <span>Dầu gội, dầu xả</span>
                </li>
                <li className='mt--12'>
                  <span>Giấy vệ sinh</span>
                </li>
                <li className='mt--12'>
                  <span>Khăn tắm</span>
                </li>
                <li className='mt--12'>
                  <span>Kem đánh răng</span>
                </li>
                <li className='mt--12'>
                  <span>Xà phòng tắm</span>
                </li>
                <li className='mt--12'>
                  <span>Máy sấy</span>
                </li>
                <li className='mt--12'>
                  <span>Internet</span>
                </li>
              </ul>
              <div className='mt--18'>
                <button className='btn__xt'>
                  Xem Thêm
                </button>
              </div>
            </div>

            <div className='title mt--60'>
              <h3>Giá phòng</h3>
              <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
            </div>

            <div className='room-price mt--18'>
              <div className='room-price__wrap'>
                <span>Thứ hai - Thứ năm</span>
                <span className='bold'>{notes.price}₫</span>
              </div>
              <div className='room-price__wrap'>
                <span>Thứ sáu - Chủ nhật</span>
                <span className='bold'>{notes.price}₫</span>
              </div>
              <div className='room-price__wrap'>
                <span>Phí trẻ em tăng thêm</span>
                <span className='bold'>125,000₫ (sau 2 khách)</span>
              </div>
              <div className='room-price__wrap'>
                <span>Thuê theo tháng</span>
                <span className='bold'>-7.88 %</span>
              </div>
              <div className='room-price__wrap'>
                <span>Số đêm tối thiểu</span>
                <span className='bold'>1 đêm</span>
              </div>
              <div className='room-price__wrap'>
                <span>Số đêm tối đa</span>
                <span className='bold'>90 đêm</span>
              </div>
            </div>

            <div className='title mt--60'>
              <h3>Lưu ý đặc biệt</h3>
              <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
            </div>

            <div className='title mt--60' id="map">
              <h3>Bản đồ</h3>
            </div>
          </Col>
          <Col lg={4}>
            <div className='room-sidebar'>
              <div className='room-sidebar__content mb--18'>
                <div className='room-sidebar__wrap'>
                  <div className="room-sidebar__pricing">
                    <p className="fadeIn mb--18">
                      <span className="extra-bold">{notes.price} ₫</span>
                      <span className="p--small">/đêm</span>
                    </p>
                  </div>

                  <DateRangePickerComponent
                    placeholder='Chọn ngày đặt phòng'
                    startDate={startDate}
                    endDate={endDate}
                    min={minValue}
                    max={maxValue}
                    format="dd/MM/yyyy"
                    cssClass='date_picker'
                  />
                  <div className='mb--30'></div>

                  <div>
                    {guest_nums ? <h3 className='select_peopel'>Tổng số người: {guest_nums} </h3> : null}
                    <label htmlFor="" className='select_peopel-label'>Người Lớn</label>
                    <input className='select_peopel-input' type="number" onChange={(e) => setAdult(e.target.value)} />

                    <label htmlFor="" className='select_peopel-label'>Trẻ Em</label>
                    <input className='select_peopel-input' type="number" onChange={(e) => setChildren(e.target.value)} />
                  </div>

                  <div className='mb--30'></div>
                  <button className='btn_order' type='submit' onClick={addBookRoom}>
                    Đặt ngay
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
      <BtnToTop />
    </div>
  )
}

export default Rooms;