import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import NumberFormat from "react-number-format";
import Footer from '../../components/footer';
import HeaderHost from './headerHost';

const HostCheckBookingDetail = () => {
  const [check, setCheck] = useState<any>({});
  const param = useParams()
  const { id } = param;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${API_URL}/bookings/${id}`);
        setCheck(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <HeaderHost />
      <div className='mt--150'></div>
      <Container>
        <div className='checkout mt--42 mb--42'>
          <div className="title">
            <h3>Chi tiết đặt phòng</h3>
          </div>
          <div className='checkup'>
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div className='check-wrap'>
                  <img src={check.imgBook} alt="" />
                  <div className='mb--18'></div>
                  <h3 className='bold'>{check.nameBook}</h3>
                  <h3>{check.infoBook}</h3>
                  <p>
                    <BsFillGeoAltFill />
                    {check.addressDetailBook} - {check.addressBook}</p>
                  <hr />
                  <div className='check_people'>
                    <p>
                      <FaCalendarAlt />
                      {check.totalDays} đêm - {check.startDay} - {check.endDay}
                    </p>
                    <p>
                      <FaUserAlt />
                      {check.guest_nums} người - {check.adult} người lớn {check.children ? (<> - {check.children} trẻ em</>) : null}
                    </p>
                  </div>
                  <hr />
                  <div className='check_price mb--12'>
                    <span>Giá thuê 1 đêm</span>
                    <span>
                      <NumberFormat
                        value={check.priceBook}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"₫"}
                      />
                    </span>
                  </div>
                  <hr />

                  <div className='check_price bold'>
                    <span>Tổng tiền {check.totalDays} đêm</span>
                    <span>
                      <NumberFormat
                        value={check.totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"₫"}
                      />
                    </span>
                  </div>
                  <hr />
                  <p><strong>Chính sách hủy phòng</strong></p>
                  <p>
                    <strong>Linh hoạt :</strong>
                    Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời gian check-in. Sau đó, hủy phòng trước 1 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).
                  </p>
                </div>

                <button className='btn_goHome mb--42 mt--42' onClick={() => navigate(-1)}>Trở về</button>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default HostCheckBookingDetail;