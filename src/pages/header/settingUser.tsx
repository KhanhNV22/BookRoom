import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constants';
import { userId } from '../../services/userService';

const SettingUser = () => {
  const id = userId;

  const [userIdSet, setUserIdSet] = useState<any>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const user = { name, email, password }

  useEffect(() => {
    if (
      !_.isEmpty(userIdSet) &&
      _.isEmpty(userIdSet.id) &&
      _.isEmpty(name) &&
      _.isEmpty(email) &&
      _.isEmpty(password)
    ) {
      setName(userIdSet.name);
      setEmail(userIdSet.email);
      setPassword(userIdSet.password);
    }
  }, [userIdSet,id, name, email, password]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, { ...user, name, email, password });
      setUserIdSet(response.data);
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
                  <input type="name" className="form-control" defaultValue={userIdSet.name} onChange={(e: any) => setName(e.target.value)} />
                  <label>Tên</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" defaultValue={userIdSet.email} onChange={(e: any) => setEmail(e.target.value)} />
                  <label>Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" defaultValue={userIdSet.password} onChange={(e: any) => setPassword(e.target.value)} />
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