import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import axios from 'axios';
import { API_URL } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import _ from "lodash";
import { userHostId } from '../../services/userService';
import Footer from '../../components/footer';
import HeaderHost from './headerHost';
import HostMap from './hostMap';

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
  { value: 'Đà Nẵng', label: 'Đà Nẵng' },
  { value: 'Đà Lạt', label: 'Đà Lạt' },
  { value: 'Đà Nẵng', label: 'Đà Nẵng' },
  { value: 'Nha Trang', label: 'Nha Trang' },
]

function HostRoomDetail() {
  const [disable, setDisable] = useState(true);
  const [roomdetail, setRoomDetail] = useState<any>({});

  const host_id = userHostId;
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
  const [status, setStatus] = useState(roomdetail.status);
  const [lat, setLat] = useState(roomdetail.lat);
  const [lng, setLng] = useState(roomdetail.lng);

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const triggerDisable = () => {
    setDisable(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/rooms/${id}`);
        setRoomDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const handeClickCenter = (data: any) => {
    setLat(data.lat);
    setLng(data.lng);
  }

  const data = { host_id, type, name, cate, address, addressDetail, square, bedRoom, price, people, info, img_rooms, lat, lng, status: roomdetail.status };

  useEffect(() => {
    if (
      !_.isEmpty(roomdetail) &&
      _.isEmpty(roomdetail.id) &&
      _.isEmpty(type) &&
      _.isEmpty(name) &&
      _.isEmpty(cate) &&
      _.isEmpty(address) &&
      _.isEmpty(addressDetail) &&
      _.isEmpty(square) &&
      _.isEmpty(bedRoom) &&
      _.isEmpty(price) &&
      _.isEmpty(people) &&
      _.isEmpty(info) &&
      _.isEmpty(img_rooms) &&
      _.isEmpty(lat) &&
      _.isEmpty(lng)
    ) {
      setType(roomdetail.type);
      setName(roomdetail.name);
      setCate(roomdetail.cate);
      setAddress(roomdetail.address);
      setAddressDetail(roomdetail.addressDetail);
      setSquare(roomdetail.square);
      setBedRoom(roomdetail.bedRoom);
      setPrice(roomdetail.price);
      setPeople(roomdetail.people);
      setInfo(roomdetail.info);
      setImg(roomdetail.img_rooms);
      setLat(roomdetail.lat);
      setLng(roomdetail.lng);
      setStatus(roomdetail.status)
    }
  }, [roomdetail, type, name, cate, address, addressDetail, square, bedRoom, price, people, info, img_rooms, lat, lng, status]);

  // cập nhật api
  const getData = () => {
    axios.get(`${API_URL}/rooms`)
      .then((getData) => {
        setRoomDetail(getData.data);
      })
  }

  const updateItem = (e: any) => {
    e.preventDefault()
    axios.put(`${API_URL}/rooms/${id}`, { ...data, host_id, type, name, cate, address, addressDetail, square, bedRoom, price, people, info, img_rooms, lat, lng })
      .then(res => console.log(res))
      .catch(err => console.log('Login: ', err));
    alert("Cập nhật thành công")
    navigate("/host")
    getData();
  }

  return (
    <div>
      <HeaderHost />
      <div className='container--md margin--body mt--18 mb--18 mt--150'>
        <h3>Thông Tin Chỗ Nghỉ</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>CHỖ NGHỈ CỦA BẠN LÀ (*)</Form.Label>
            <Select
              options={options}
              isClearable
              isDisabled={disable}
              defaultValue={{ value: roomdetail.type, label: roomdetail.type }}
              onChange={(e: any) => setType(e.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Tên Chỗ Nghỉ (*)</Form.Label>
            <Form.Control
              type="name"
              placeholder="Name"
              disabled={disable}
              defaultValue={roomdetail.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCate">
            <Form.Label>Loại Đặt Phòng (*)</Form.Label>
            <Select
              options={options_cate}
              isClearable
              isDisabled={disable}
              defaultValue={{ value: roomdetail.cate, label: roomdetail.cate }}
              onChange={(e: any) => setCate(e.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTP">
            <Form.Label>Thành Phố (*)</Form.Label>
            <Select
              options={options_city}
              isClearable
              isDisabled={disable}
              defaultValue={{ value: roomdetail.address, label: roomdetail.address }}
              onChange={(e: any) => setAddress(e.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTP">
            <Form.Label>Địa chỉ cụ thể (*)</Form.Label>
            <Form.Control
              type="name"
              disabled={disable}
              defaultValue={roomdetail.addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Diện tích m<sup>2</sup> (*)</Form.Label>
            <Form.Control type="number"
              disabled={disable}
              defaultValue={roomdetail.square}
              onChange={(e: any) => setSquare(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Số Phòng (*)</Form.Label>
            <Form.Control type="number"
              disabled={disable}
              defaultValue={roomdetail.bedRoom}
              onChange={(e: any) => setBedRoom(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Gía Phòng (*)</Form.Label>
            <Form.Control type="number"
              disabled={disable}
              defaultValue={roomdetail.price}
              onChange={(e: any) => setPrice(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Số Người (*)</Form.Label>
            <Form.Control type="number"
              disabled={disable}
              defaultValue={roomdetail.people}
              onChange={(e: any) => setPeople(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Thông tin (*)</Form.Label>
            <Form.Control type="text"
              disabled={disable}
              defaultValue={roomdetail.info}
              onChange={(e: any) => setInfo(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Hình ảnh (*)</Form.Label>
            <Form.Control type="text"
              disabled={disable}
              defaultValue={roomdetail.img_rooms}
              onChange={(e: any) => setImg(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Kinh độ (*)</Form.Label>
            <Form.Control type="text"
              disabled={disable}
              defaultValue={ lat}
              onChange={(e: any) => setLat(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNameRooms">
            <Form.Label>Vĩ độ (*)</Form.Label>
            <Form.Control type="text"
              disabled={disable}
              defaultValue={ lng}
              onChange={(e: any) => setLng(e.target.value)} />
          </Form.Group>

          <HostMap handeClickCenter={handeClickCenter} lat={lat} lng={lng} />

          <div className='mt--18'></div>
          {disable ? (
            <Button variant="primary" onClick={triggerDisable}>
              Chỉnh sửa
            </Button>
          ) : (
            <div>
              <Button variant="primary" onClick={updateItem}>
                Cập Nhật
              </Button>
            </div>
          )}
        </Form>
      </div>
      <Footer />
    </div>
  )
}

export default HostRoomDetail;