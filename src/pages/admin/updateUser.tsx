import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import './styles.css'

function UpdateUser() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [userId, setUserId] = useState<any>([]);

  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios
      .get(`${API_URL}/users/${id}`)
      .then((res) => {
        setUserId(res.data)
      })
      .catch((err) => console.log(err))
  }

  const handleInput = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value
    });
  };

  useEffect(() => {
    if (
      !_.isEmpty(userId) &&
      _.isEmpty(user.id) &&
      _.isEmpty(user.name) &&
      _.isEmpty(user.email) &&
      _.isEmpty(user.password)
    ) {
      setUser({
        ...user,
        id: userId.id,
        name: userId.name,
        password: userId.password,
        email: userId.email,
      });
    }
  }, [user, userId]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, { ...user });
      navigate(-1)
      alert("Cập nhập Thành công")
    } catch (error) {
      console.log(error);
      alert("Cập nhập thất bại!")
    }
  };

  return (
    <div className='container--md margin--body mt--60 mb--60'>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <h3 className='text-center'>Cập nhật thông tin người dùng</h3>
          <form onSubmit={handleSubmit} className="mt--42 form_update">
            <label>Name</label>
            <input type="name" name="name" defaultValue={userId.name} onChange={handleInput} />
            <label>Email</label>
            <input type="email" name="email" defaultValue={userId.email} onChange={handleInput} />
            <label>Password</label>
            <input type="text" name="password" defaultValue={userId.password} onChange={handleInput} />
            <div className='text-center mt--18'>
              <button type='submit'>Cập nhật</button>
              <button onClick={() => navigate(-1)}>Trở Về</button>
            </div>
          </form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default UpdateUser;