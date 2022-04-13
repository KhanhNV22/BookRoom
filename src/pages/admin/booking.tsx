import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import { Booking } from '../../types/booking';

function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/booking`);
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='mt--60'>
      <h3>Tổng: {bookings.length}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Hình Ảnh</th>
            <th>Ngày Bắt Đầu</th>
            <th>Ngày Kết Thúc</th>
            <th>Số Người</th>
            <th>Yêu Cầu</th>
            <th>Tình Trạng</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking: Booking, index: number) => (
            <tr key={index}>
              <td>{booking.id}</td>
              <td>{booking.nameBook}</td>
              <td>
                <img src={booking.imgBook} alt="" width={250} height={150} />
              </td>
              <td>
                {booking.startDay}
              </td>
              <td>{booking.endDay}</td>
              <td>{booking.guest_nums}</td>
              <td>
                <span
                  style={{
                    color: `${booking.status === 0
                      ? "orange"
                      : booking.status === 1
                        ? "green"
                        : "red"
                      }`
                  }}
                > {booking.status === 0
                  ? "Đang chờ"
                  : booking.status === 1
                    ? "Đã duyệt"
                    : booking.status === 3
                      ? "Hủy Phòng"
                    : "Từ chối"}
                </span>
              </td>
              <td>
                <span
                  style={{
                    color: `${booking.isCheck === true
                      ? "orange"
                      : "green"
                      }`
                  }}
                > {booking.isCheck === true
                  ? "Chưa cho thuê"
                  : "Đang cho thuê"
                  }
                </span>
              </td>
              <td>
                <Link to={`CheckoutBookingDetail/${booking.id}`}>Xem chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Bookings;