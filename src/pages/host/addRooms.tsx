import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import { API_URL } from '../../constants';

const options = [
  { value: 'Homestay', label: 'Homestay' },
  { value: 'Nhà riêng', label: 'Nhà riêng' },
  { value: 'Biệt thự', label: 'Biệt thự' },
  { value: 'Chung cư', label: 'Chung cư' },
  { value: 'Studio', label: 'Studio' },
  { value: 'Căn hộ dịch vụ', label: 'Căn hộ dịch vụ' }
]

const options_cate = [
  { value: 'Đặt phòng nhanh', label: 'Đặt phòng nhanh' },
  { value: 'Yêu cầu xác nhận', label: 'Yêu cầu xác nhận' },
]

const options_city = [
  { value: 'Hà Nội', label: 'Hà Nội' },
  { value: 'TP. Hồ Chí Minh', label: 'TP. Hồ Chí Minh' },
  { value: 'Vũng Tàu', label: 'Vũng Tàu' },
  { value: 'Đà Lạt', label: 'Đà Lạt' },
  { value: 'Đà Nẵng', label: 'Đà Nẵng' },
  { value: 'Nha Trang', label: 'Nha Trang' },
]

function AddRooms() {
  const [hostId, setHostId] = useState();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [cate, setCate] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [square, setSquare] = useState("");
  const [price, setPrice] = useState("");
  const [people, setPeople] = useState("");
  const [info, setInfo] = useState("");
  const [bedRoom, setBedRoom] = useState("");
  const [img_rooms, setImg] = useState("");

  const onchangeType = (e: any) => {
    setType(e.value);
  }

  const onchangeCate = (e: any) => {
    setCate(e.value);
  }

  const onchangeAddress = (e: any) => {
    setAddress(e.value);
  }

  const addProduct = (e: any) => {
    e.preventDefault();
    try {
      const data = { hostId, type, name, cate, address, addressDetail, square, bedRoom, price, people, info, img_rooms };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch(`${API_URL}/rooms`, requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
      alert("Thêm Thành công");
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='mb--18'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>CHỖ NGHỈ CỦA BẠN LÀ (*)</Form.Label>
          <Select options={options} isClearable onChange={onchangeType} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Tên Chỗ Nghỉ (*)</Form.Label>
          <Form.Control type="name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCate">
          <Form.Label>Loại Đặt Phòng (*)</Form.Label>
          <Select options={options_cate} isClearable onChange={onchangeCate} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTP">
          <Form.Label>Thành Phố (*)</Form.Label>
          <Select options={options_city} isClearable onChange={onchangeAddress} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTP">
          <Form.Label>Địa chỉ cụ thể (*)</Form.Label>
          <Form.Control type="name" onChange={(e) => setAddressDetail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Diện tích (*)</Form.Label>
          <Form.Control type="number" onChange={(e) => setSquare(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Số Phòng (*)</Form.Label>
          <Form.Control type="number" onChange={(e) => setBedRoom(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Gía Phòng (*)</Form.Label>
          <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Số Người (*)</Form.Label>
          <Form.Control type="number" onChange={(e) => setPeople(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Thông tin</Form.Label>
          <Form.Control type="text" onChange={(e) => setInfo(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Hình ảnh</Form.Label>
          <Form.Control type="text" onChange={(e) => setImg(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={addProduct}>
          Thêm
        </Button>
      </Form>
    </div>
  )
}
export default AddRooms;