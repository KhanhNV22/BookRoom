import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tab, Table, Tabs } from 'react-bootstrap'
import { API_URL } from '../../constants';
import { Room } from '../../types/room';
import Bookings from './booking';
import './styles.css'
import Users from './users';
import { BsFillXCircleFill, BsCheckLg, BsPencilSquare } from "react-icons/bs";
import Footer from '../../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import HeaderAdmin from './headerAdmin';
import UsersHost from './userHost';

export default function Admin() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const navigate = useNavigate();

  const userEmailAdmin = localStorage.getItem('userEmailAdmin');

  useEffect(() => {
    const token = userEmailAdmin;
    if(!token) {
      navigate('/loginAdmin');
    } else {
      navigate('/admin')
    }
  },[])

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
    <div>
      <HeaderAdmin />
      <div className='container--md margin--body mt--150'>
        <div className='mt--60'></div>
        <Tabs defaultActiveKey="Rooms" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Rooms" title="Các Phòng">
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
                    <td>{index + 1}</td>
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
                      <button className='btn_act mb--12' onClick={() => onUpdateStatus(room, index, 1)}>
                        <BsCheckLg />
                      </button>
                      <br />
                      <button className='btn_act' onClick={() => onUpdateStatus(room, index, 2)}>
                        <BsFillXCircleFill />
                      </button>
                      <Link to={`checkRoomDetail/${room.id}`}>
                        <button className='btn_act'>
                          <BsPencilSquare />
                        </button>
                      </Link>

                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="Booking" title="Đơn Đặt Phòng">
            <Bookings />
          </Tab>
          <Tab eventKey="Hosts" title="Người Quản Lý Phòng">
            <UsersHost />
          </Tab>
          <Tab eventKey="Uers" title="Người Dùng">
            <Users />
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}