import React, { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import { API_URL } from '../../constants';
import { Table } from 'react-bootstrap';
import { Booking } from '../../types/booking';

function HostBooking() {
  const [hostBooks, setHostBooks] = useState<any[]>([])

  const onUpdateStatus = (hostBook: Booking, index: number, isCheck: number) => {
    const { id } = hostBook;
    const newBookRoom = { ...hostBook, isCheck };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookRoom)
    };
    fetch(`${API_URL}/booking/${id}`, requestOptions)
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
        const { data: response } = await axios.get(`${API_URL}/booking`);
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
            <th>Name</th>
            <th>Image</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Guest Nums</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hostBooks.map((hostBook: Booking, index: number) => (
                <tr key={index}>
                  <td>{hostBook.id}</td>
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
                        color: `${hostBook.isCheck === 0
                          ? "orange"
                          : hostBook.isCheck === 1
                            ? "green"
                            : "red"
                          }`
                      }}
                    > {hostBook.isCheck === 0
                      ? "Đang chờ"
                      : hostBook.isCheck === 1
                        ? "Đã duyệt"
                        : "Từ chối"}
                    </span>
                  </td>
                  <td>
                    <button className='btn_act mb--12' onClick={() => onUpdateStatus(hostBook, index, 1)}>Duyệt</button>
                    <br />
                    <button className='btn_act' onClick={() => onUpdateStatus(hostBook, index, 2)}>Từ Chối</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  )
}

export default HostBooking;