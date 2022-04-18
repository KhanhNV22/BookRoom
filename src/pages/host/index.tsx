import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import './styles.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants';
import HostBooking from './hostBooking';
import { Room } from '../../types/room';
import { userHostId } from '../../services/userService';
import Footer from '../../components/footer';
import HeaderHost from './headerHost';
import { BsFillPlusCircleFill } from "react-icons/bs";
import HostStatistical from './hostStatistical';

function Host() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Room[]>([]);
  const navigate = useNavigate();

  const userEmailHost = localStorage.getItem('userEmailHost');

  useEffect(() => {
    const token = userEmailHost;
    if (!token) {
      navigate('/loginHost');
    } else {
      navigate('/host')
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${API_URL}/rooms?host_id=${userHostId}`);
        setPosts(response);
        getData();
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [])

  // cập nhật api
  const getData = () => {
    axios.get(`${API_URL}/rooms?host_id=${userHostId}`)
      .then((getData) => {
        setPosts(getData.data);
      })
  }

  const deleteItem = async (id: any) => {
    try {
      const res = await axios.delete(`${API_URL}/rooms/${id}`);
      alert('Item successfully deleted.');
      getData();
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <HeaderHost />
      <div className='container--md margin--body mt--150'>
        <button className='btn_addRoom'>
          <Link to="/host/hostAddRooms">
            <BsFillPlusCircleFill />
            Tạo Phòng Mới
          </Link>
        </button>
        <Tabs defaultActiveKey="rooms" id="uncontrolled-tab-example" className="mb-3 mt--18">
          <Tab eventKey="rooms" title="Chỗ Nghỉ">
            <div className='mt--18'></div>
            <h3>Chỗ nghỉ của bạn</h3>
            {!loading ? (
              <div className='tabs_table mt--18'>
                {posts.map(item => (
                  <div className='tabs_content' key={item.id}>
                    <Row>
                      <Col md={6}>
                        <img src={item.img_rooms} alt='' className='tabs_img' />
                      </Col>
                      <Col md={6}>
                        <div className='tabs_wrap mt--12'>
                          <h3>{item.name}</h3>
                          <p>{item.info}</p>
                        </div>
                        <button className='tabs_btn' onClick={() => deleteItem(item.id)}>Xóa</button>
                        <Link to={`/hostRoomdetail/${item.id}`}>
                          <button className='tabs_btn'>Xem Thêm</button>
                        </Link>
                        <span
                          style={{
                            color: `${item.status === 0
                              ? "orange"
                              : item.status === 1
                                ? "green"
                                : "red"
                              }`,
                          }}
                        > {item.status === 0
                          ? "Đang chờ"
                          : item.status === 1
                            ? "Đã duyệt"
                            : "Từ chối"}</span>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>Loading ...</p>
              </div>
            )
            }
          </Tab>
          <Tab eventKey="news" title="Đơn Đặt Phòng">
            <HostBooking />
          </Tab>
          {/* <Tab eventKey="statistical" title="Thống Kê">
            <HostStatistical />
          </Tab> */}
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

export default Host;