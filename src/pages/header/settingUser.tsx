import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constants';
import { userId } from '../../services/userService';

const SettingUser = () => {
  const id = userId;

  const [userIdSet, setUserIdSet] = useState<any>([]);

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
        setUserIdSet(res.data)
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
        id: userIdSet.id,
        name: userIdSet.name,
        password: userIdSet.password,
        email: userIdSet.email,
      });
    }
  }, [user, userId]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, { ...user });
      setUser(response.data)
      alert("Cập nhập Thành công")
    } catch (error) {
      console.log(error);
      alert("Cập nhập thất bại!")
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Thông Tin Người Dùng</h5>

              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="name" className="form-control" defaultValue={userIdSet.name} onChange={handleInput} />
                  <label>Tên</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" defaultValue={userIdSet.email} onChange={handleInput} />
                  <label>Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" defaultValue={userIdSet.password} onChange={handleInput} />
                  <label>Mật Khẩu</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-login text-uppercase fw-bold">Cập Nhật</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingUser;