import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiBuilding4Line } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import ReadMore from '../../components/readMore';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import Footer from '../../components/footer';
import axios from 'axios';
import { API_URL } from '../../constants';
import BtnToTop from '../../components/BtnToTop';
import NumberFormat from "react-number-format";
import HeaderAdmin from './headerAdmin';

const CheckRoomDetail = () => {
  const [checkRoom, setCheckRoom] = useState<any>({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/rooms/${id}`);
        setCheckRoom(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className='mt--91'></div>
      <img alt="" src={checkRoom.img_rooms} className="img_rooms" />
      <div className='mb--30'></div>
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className='h1-title mb--12'>{checkRoom.name} - {checkRoom.info}</h1>

            <div className='detail__location mt--18'>
              <BsFillGeoAltFill />
              <span className='bold'>{checkRoom.addressDetail}</span>
              <Link to="#map">Xem bản đồ</Link>
            </div>
            <div className='detail__location mt--12'>
              <RiBuilding4Line />
              <span className='bold'>{checkRoom.type}</span>
              <span>* {checkRoom.square} m<sup>2</sup></span>
            </div>
            <div className='detail__location mt--12'>
              <span className='bold'>Phòng riêng</span>
              <span>· {checkRoom.bedRoom} Phòng</span>
            </div>
            <div className='detail__location mt--12'>
              <span className='bold'>Số Người Tối Đa</span>
              <span>· {checkRoom.people} Người</span>
            </div>
            <div className='mt--42'></div>
            <div className='detail__intro'>
              <ReadMore>
                <p>
                  <strong>Tóm tắt về {checkRoom.name}</strong>
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
              <h3>Lưu ý đặc biệt</h3>
              <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
            </div>
          </Col>
          <Col lg={4}>
            <div className='room-sidebar'>
              <div className='room-sidebar__content mb--18'>
                <div className='room-sidebar__wrap'>
                  <div className="room-sidebar__pricing">
                    <p className="fadeIn mb--18">
                      <span className="extra-bold">
                        <NumberFormat
                          value={checkRoom.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"₫"}
                        />
                      </span>
                      <span className="p--small">/đêm</span>
                    </p>
                  </div>

                  <DateRangePickerComponent
                    placeholder='Chọn ngày đặt phòng'
                    format="dd/MM/yyyy"
                    cssClass='date_picker'
                    disabled={true}
                  />
                  <div className='mb--30'></div>

                  <div>
                    <label htmlFor="" className='select_peopel-label' >Người Lớn</label>
                    <input className='select_peopel-input' type="number" min={0} disabled={true}/>

                    <label htmlFor="" className='select_peopel-label'>Trẻ Em</label>
                    <input className='select_peopel-input' type="number" min={0} defaultValue={checkRoom.children} disabled={true} />
                  </div>
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

export default CheckRoomDetail;