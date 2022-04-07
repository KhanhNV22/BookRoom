import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../constants';

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(`${API_URL}/users/${id}`, {...user});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container--md margin--body mt--60 mb--60'>
      <h3>Update</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="name" name="name" defaultValue={userId.name} onChange={handleInput} />
        <label>Email</label>
        <input type="email" name="email" defaultValue={userId.email} onChange={handleInput} />
        <label>Password</label>
        <input type="text" name="password" defaultValue={userId.password} onChange={handleInput} />
        <button type='submit'>Cập nhật</button>
        <button onClick={() => navigate(-1)}>Trở Về</button>
      </form>

    </div>
  )
}

export default UpdateUser;