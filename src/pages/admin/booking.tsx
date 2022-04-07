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
            <th>Room</th>
            <th>Image</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Number</th>
            <th>Status</th>
            <th>Action</th>
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
                {booking.startDate}
              </td>
              <td>{booking.endDate}</td>
              <td>{booking.guest_nums}</td>
              <td>
                <span
                  style={{
                    color: `${booking.isCheck === 0
                      ? "orange"
                      : booking.isCheck === 1
                        ? "green"
                        : "red"
                      }`
                  }}
                > {booking.isCheck === 0
                  ? "Đang chờ"
                  : booking.isCheck === 1
                    ? "Đã duyệt"
                    : "Từ chối"}
                </span>
              </td>
              <td>
                <Link to={`CheckoutRoomDetail/${booking.id}`}>Xem chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Bookings;