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
import moment from "moment";
import { userId } from '../../services/userService';
import NumberFormat from "react-number-format";
import Header from '../header';

const Rooms = () => {
  const minValue: Date = new Date(new Date());
  const maxValue: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 90);

  const [noteRoom, setNoteRoom] = useState<any>({});
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();

  function convertDate(inputFormat: any) {
    function pad(s: any) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join("-");
  }

  const onChangeDate = (e: any) => {
    let startDate = convertDate(e.target.startDate);
    let endDate = convertDate(e.target.endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const guest_nums = Number(adult) + Number(children);
  // tính ngày chênh lệch
  const sDay = moment(startDate);
  const eDay = moment(endDate);
  const totalDate = eDay.diff(sDay, 'days');

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/rooms/${id}`);
        setNoteRoom(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const host_id = userId;
  const user_id = userId;
  const startDay = moment(startDate).format('DD/MM/YYYY');
  const endDay = moment(endDate).format('DD/MM/YYYY');
  const room_id = noteRoom.id;
  const imgBook = noteRoom.img_rooms;
  const nameBook = noteRoom.name;
  const infoBook = noteRoom.info;
  const addressBook = noteRoom.address;
  const addressDetailBook = noteRoom.addressDetail;
  const typeBook = noteRoom.type;
  const priceBook = noteRoom.price;
  const squareBook = noteRoom.square;
  const bedRoomBook = noteRoom.bedRoom;

  // tính tổng tiền
  const totalPrice = Number(priceBook) * totalDate;

  const addBookRoom = (e: any) => {
    e.preventDefault();
    try {
      if (userId) {
        const data = { host_id, user_id, room_id, imgBook, nameBook, infoBook, addressDetailBook, addressBook, typeBook, priceBook, squareBook, bedRoomBook, startDay, endDay, totalDate, totalPrice, adult, children, guest_nums, status: 0, isCheck: true };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        };
        fetch(`${API_URL}/bookings`, requestOptions)
          .then(response => response.json())
        // navigate(`/checkoutUserBooking/${room_id}`)
        navigate("/listBookingsUser")
        window.location.reload();
      } else {
        alert("Bạn Cần Đăng Nhập Trước Khi Đặt Phòng")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <Header />
      <div className='mt--91'></div>
      <img alt="" src={imgBook} className="img_rooms" />
      <div className='mb--30'></div>
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className='h1-title mb--12'>{nameBook} - {infoBook}</h1>

            <div className='detail__location mt--18'>
              <BsFillGeoAltFill />
              <span className='bold'>{addressDetailBook}</span>
              <Link to="#map">Xem bản đồ</Link>
            </div>
            <div className='detail__location mt--12'>
              <RiBuilding4Line />
              <span className='bold'>{typeBook}</span>
              <span>* {squareBook} m<sup>2</sup></span>
            </div>
            <div className='detail__location mt--12'>
              <span className='bold'>Phòng riêng</span>
              <span>· {bedRoomBook} Phòng</span>
            </div>
            <div className='detail__location mt--12'>
              <span className='bold'>Số Người Tối Đa</span>
              <span>· {noteRoom.people} Người</span>
            </div>
            <div className='mt--42'></div>
            <div className='detail__intro'>
              <ReadMore>
                <p>
                  <strong>Tóm tắt về {noteRoom.name}</strong>
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

            {/* <div className='room-price mt--18'>
              <div className='room-price__wrap'>
                <span>Thứ hai - Thứ năm</span>
                <span className='bold'>
                  <NumberFormat
                    value={noteRoom.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"₫"}
                  />
                </span>
              </div>
              <div className='room-price__wrap'>
                <span>Thứ sáu - Chủ nhật</span>
                <span className='bold'>
                  <NumberFormat
                    value={Number(noteRoom.price) + Number(100000)}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"₫"}
                  />
                </span>
              </div>    
              <div className='room-price__wrap'>
                <span>Số đêm tối thiểu</span>
                <span className='bold'>1 đêm</span>
              </div>
              <div className='room-price__wrap'>
                <span>Số đêm tối đa</span>
                <span className='bold'>90 đêm</span>
              </div>
            </div> */}

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
                          value={noteRoom.price}
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
                    min={minValue}
                    max={maxValue}
                    format="dd/MM/yyyy"
                    cssClass='date_picker'
                    onChange={onChangeDate}
                  />
                  <div className='mb--30'></div>

                  <div>
                    <label htmlFor="" className='select_peopel-label' >Người Lớn</label>
                    <input className='select_peopel-input' type="number" min={0} max={noteRoom.people} onChange={(e) => setAdult(e.target.value)} />

                    <label htmlFor="" className='select_peopel-label'>Trẻ Em</label>
                    <input className='select_peopel-input' type="number" min={0} onChange={(e) => setChildren(e.target.value)} />
                  </div>

                  {guest_nums && totalDate && totalPrice ?
                    <div>
                      <div className="room_total mb--12">
                        <span>Tổng số người:</span>
                        <span>{guest_nums}</span>
                      </div>

                      <div className="room_total mb--12">
                        <span>Tổng số ngày:</span>
                        <span>{totalDate}</span>
                      </div>
                      <hr />
                      <div className="room_total mb--12">
                        <span>Tổng số tiền:</span>
                        <span>
                          <NumberFormat
                            value={totalPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"₫"}
                          />
                        </span>
                      </div>
                    </div> : null
                  }

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