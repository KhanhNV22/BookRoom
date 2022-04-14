import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { API_URL } from '../../constants';
import { userId } from '../../services/userService';
import { Booking } from '../../types/booking';
import Header from '../header';
import NumberFormat from "react-number-format";

function ListBookingsUser() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/bookings?user_id=${userId}`);
        setBookings(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const onUpdateStatus = (hostBook: Booking, index: number, isCheck: boolean, status: number) => {
    const { id } = hostBook;
    const newBookRoom = { ...hostBook, isCheck, status };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookRoom)
    };
    fetch(`${API_URL}/bookings/${id}`, requestOptions)
      .then(response => response.json())
      .then(res => {
        const newBookRooms = [...bookings];
        newBookRooms[index] = res;
        setBookings(newBookRooms);
        alert("Bạn Đã Hủy Đặt Phòng")
      });
  }

  return (
    <div>
      <Header />
      <div className='container--md margin--body mt--150'>
        <h3>Tổng: {bookings.length}</h3>
        <Table className='table_ad' striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Hình Ảnh</th>
              <th>Ngày Bắt Đầu</th>
              <th>Ngày Kết Thúc</th>
              <th>Số Người</th>
              <th>Giá Phòng</th>
              <th>Yêu Cầu</th>
              <th>Hành Động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings
              .map((booking: Booking, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
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
                    <NumberFormat
                      value={booking.priceBook}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"₫"}
                    />
                  </td>
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
                    <button className='btn_act mb--12' onClick={() => onUpdateStatus(booking, index, true, 3)}>Hủy Đặt Phòng</button>
                  </td>
                  <td>
                    <Link to={`CheckoutBookingDetail/${booking.id}`}>Xem chi tiết</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  )
}

export default ListBookingsUser;