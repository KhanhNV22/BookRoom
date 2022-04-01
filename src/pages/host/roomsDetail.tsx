import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import axios from 'axios';
import { API_URL } from '../../constants';
import { useParams } from 'react-router-dom';

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
]

function updateItem() {
  console.log('update');
}

function cancelItem() {
  console.log("cancel");
}

interface IPost {
  id: number,
  type: string,
  name: string,
  cate: string,
  address: string,
  addressDetail: string,
  square: string,
  price: number
  people: string,
  info: string,
  bedRoom: number,
  img_rooms: string
}

function RoomDetail() {
  const [disable, setDisable] = useState(true);
  const [notes, setNotes] = useState<any>({});

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

  const params = useParams();

  const { id } = params;

  const triggerDisable = () => {
    setDisable(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${API_URL}/rooms/${id}`);
        setNotes(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  console.log("notes ===", notes);

  return (
    <div className='container--md margin--body mt--18 mb--18'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>CHỖ NGHỈ CỦA BẠN LÀ (*)</Form.Label>
          <Select options={options} isClearable isDisabled={disable} value={notes.type} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Tên Chỗ Nghỉ (*)</Form.Label>
          <Form.Control type="name" placeholder="Name" disabled={disable} onChange={(e) => setName(e.target.value)} value={notes.name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCate">
          <Form.Label>Loại Đặt Phòng (*)</Form.Label>
          <Select options={options_cate} isClearable isDisabled={disable} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTP">
          <Form.Label>Thành Phố (*)</Form.Label>
          <Select options={options_city} isClearable isDisabled={disable} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTP">
          <Form.Label>Địa chỉ cụ thể (*)</Form.Label>
          <Form.Control type="name" disabled={disable} value={notes.addressDetail} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Diện tích m<sup>2</sup> (*)</Form.Label>
          <Form.Control type="number" disabled={disable} value={notes.square} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Số Phòng (*)</Form.Label>
          <Form.Control type="number" disabled={disable} value={notes.bedRoom}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Gía Phòng (*)</Form.Label>
          <Form.Control type="number" disabled={disable} value={notes.price} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Số Người (*)</Form.Label>
          <Form.Control type="number" disabled={disable} value={notes.people} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameRooms">
          <Form.Label>Thông tin (*)</Form.Label>
          <Form.Control type="text" disabled={disable} value={notes.info} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Hình ảnh (*)</Form.Label>
          <Form.Control type="text" disabled={disable} value={notes.img_rooms} />
        </Form.Group>

        {disable ? (
          <Button variant="primary" onClick={triggerDisable}>
            Chỉnh sửa
          </Button>
        ) : (
          <div>
            <Button variant="primary" onClick={updateItem}>
              Cập Nhật
            </Button> {""}
            <Button variant="primary" onClick={cancelItem}>
              Hủy bỏ
            </Button>
          </div>
        )}
      </Form>
    </div>
  )
}

export default RoomDetail;