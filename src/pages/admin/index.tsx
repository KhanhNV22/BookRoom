import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tab, Table, Tabs } from 'react-bootstrap'
import { API_URL } from '../../constants';
import { Room } from '../../types/room';
import Bookings from './booking';
import './styles.css'
import Users from './users';

export default function Admin() {
  const [rooms, setRooms] = useState<Room[]>([]);

  const onUpdateStatus = (room: Room, index: number, status: number) => {
    const { id } = room;
    const newRoom = { ...room, status };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRoom)
    };
    fetch(`${API_URL}/rooms/${id}`, requestOptions)
      .then(response => response.json())
      .then(res => {
        const newRooms = [...rooms];
        newRooms[index] = res;
        setRooms(newRooms);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/rooms`);
        setRooms(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='container--md margin--body'>
      <div className='mt--60'></div>
      <Tabs defaultActiveKey="Rooms" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Rooms" title="Rooms">
          <div className='mt--42'></div>
          <Table striped bordered hover className='table_ad'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Address</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room: Room, index: number) => (
                <tr key={index}>
                  <td>{room.id}</td>
                  <td>{room.name}</td>
                  <td>
                    <img src={room.img_rooms} alt="" className='img_tb' />
                  </td>
                  <td>{room.cate}</td>
                  <td>{room.address}</td>
                  <td>
                    <span
                      style={{
                        color: `${room.status === 0
                          ? "orange"
                          : room.status === 1
                            ? "green"
                            : "red"
                          }`,
                      }}
                    > {room.status === 0
                      ? "Đang chờ"
                      : room.status === 1
                        ? "Đã duyệt"
                        : "Từ chối"}
                    </span>
                  </td>
                  <td>
                    <button className='btn_act mb--12' onClick={() => onUpdateStatus(room, index, 1)}>Duyệt</button>
                    <br />
                    <button className='btn_act' onClick={() => onUpdateStatus(room, index, 2)}>Từ Chối</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="Booking" title="Booking">
          <Bookings />
        </Tab>
        <Tab eventKey="Uers" title="Uers">
          <Users />
        </Tab>
      </Tabs>
    </div>
  )
}