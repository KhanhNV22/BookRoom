import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import './styles.css'
import axios from 'axios';
import AddRooms from './hostAddRooms';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import HostBooking from './hostBooking';
import { Room } from '../../types/room';
import { userId } from '../../services/userService';
import Header from '../header';
import Footer from '../../components/footer';

function Host() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Room[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${API_URL}/rooms?host_id=${userId}`);
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
    axios.get(`${API_URL}/rooms?host_id=${userId}`)
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
      <Header />
      <div className='container--md margin--body mt--150'>
        <Tabs defaultActiveKey="news" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="news" title="Đơn Đặt Phòng">
            <HostBooking />
          </Tab>

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
                        <Link to={`/roomdetail/${item.id}`}>
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

          <Tab eventKey="add_room" title="Tạo Chỗ Nghỉ Mới">
            <AddRooms />
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

export default Host;