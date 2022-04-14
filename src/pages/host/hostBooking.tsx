import React, { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import { API_URL } from '../../constants';
import { Table } from 'react-bootstrap';
import { Booking } from '../../types/booking';
import { userId } from '../../services/userService';
import { BsFillXCircleFill, BsCheckLg, BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';

function HostBooking() {
  const [hostBooks, setHostBooks] = useState<any[]>([])

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
        const newBookRooms = [...hostBooks];
        newBookRooms[index] = res;
        setHostBooks(newBookRooms);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${API_URL}/bookings?host_id=${userId}`);
        setHostBooks(response);
      } catch (error: any) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h3 className='mb--18'>Các đơn đặt phòng</h3>
      <Table striped bordered hover className='table_ad'>
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
          {hostBooks
            .map((hostBook: Booking, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{hostBook.nameBook}</td>
                <td>
                  <img src={hostBook.imgBook} alt="" width={250} height={150} />
                </td>
                <td>{hostBook.startDay}</td>
                <td>{hostBook.endDay}</td>
                <td>{hostBook.guest_nums}</td>
                <td>
                  <span
                    style={{
                      color: `${hostBook.status === 0
                        ? "orange"
                        : hostBook.status === 1
                          ? "green"
                          : "red"
                        }`
                    }}
                  > {hostBook.status === 0
                    ? "Đang chờ"
                    : hostBook.status === 1
                      ? "Đã duyệt"
                      : hostBook.status === 3
                        ? "Hủy Phòng"
                        : "Từ chối"}
                  </span>
                </td>
                <td>
                  <span
                    style={{
                      color: `${hostBook.isCheck === true
                        ? "orange"
                        : "green"
                        }`
                    }}
                  > {hostBook.isCheck === true
                    ? "Chưa cho thuê"
                    : "Đang cho thuê"
                    }
                  </span>
                </td>
                <td>
                  <button className='btn_act mb--12' onClick={() => onUpdateStatus(hostBook, index, false, 1)}>
                    <BsCheckLg />
                  </button>
                  <br />
                  <button className='btn_act' onClick={() => onUpdateStatus(hostBook, index, true, 2)}>
                    <BsFillXCircleFill />
                  </button>
                  <button className='btn_act'>
                    <Link to={`CheckoutBookingDetail/${hostBook.id}`}>
                      <BsPencilSquare />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default HostBooking;