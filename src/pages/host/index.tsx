import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import './styles.css'
import axios from 'axios';
import AddRooms from './addRooms';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../constants';

interface IPost {
  id: number,
  img_rooms: string,
  name: string,
  info: string
}
const defaultProps: IPost[] = [];

function Host() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultProps);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${API_URL}/rooms`);
        setPosts(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [])

  // cập nhật api
  const getData = () => {
    axios.get(`${API_URL}/rooms`)
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
      <div className='container--md margin--body'>
        <Link to="/">
          Home
        </Link>
        <div className='mt--42'></div>
        <Tabs defaultActiveKey="rooms" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="news" title="Bảng Tin">
            <h1>Chỗ Nghỉ</h1>

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
                        <Link to="/roomdetail">
                          <button className='tabs_btn'>Xem Thêm</button>
                        </Link>
                        <span className='btn_status'>Đang duyệt</span>
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
    </div>
  )
}

export default Host;