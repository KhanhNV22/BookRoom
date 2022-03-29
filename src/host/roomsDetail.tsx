import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import axios from 'axios';

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

function editItem() {
    console.log('edit');
}


interface IPost {
    id: number,
    type: string,
    name: string,
    cate: string,
    address: string,
    square: string,
    price: number
    people: string,
    info: string,
    bedRoom: number,
    img: string
}
const defaultProps: IPost[] = [];

function RoomDetail() {
    const URL = 'http://localhost:4000/host';
    const [disable, setDisable] = useState(true);

    const triggerDisable = () => {
        setDisable(false)
    }

    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultProps);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(URL);
                setPosts(response);
            } catch (error: any) {
                console.error(error.message);
            }
        }
        fetchData();
    }, [])

    console.log("posts", posts[0]);
    return (
        <div className='container--md margin--body mt--18 mb--18'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>CHỖ NGHỈ CỦA BẠN LÀ (*)</Form.Label>
                    <Select options={options} isClearable isDisabled={disable} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNameRooms">
                    <Form.Label>Tên Chỗ Nghỉ (*)</Form.Label>
                    <Form.Control type="name" placeholder="Name" disabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCate">
                    <Form.Label>Loại Đặt Phòng</Form.Label>
                    <Select options={options_cate} isClearable isDisabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTP">
                    <Form.Label>Thành Phố</Form.Label>
                    <Select options={options_city} isClearable isDisabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNameRooms">
                    <Form.Label>Diện tích m<sup>2</sup> (*)</Form.Label>
                    <Form.Control type="number" disabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNameRooms">
                    <Form.Label>Số Phòng (*)</Form.Label>
                    <Form.Control type="number" disabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNameRooms">
                    <Form.Label>Gía Phòng (*)</Form.Label>
                    <Form.Control type="number" disabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNameRooms">
                    <Form.Label>Số Người (*)</Form.Label>
                    <Form.Control type="number" disabled={disable} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNameRooms">
                    <Form.Label>Thông tin</Form.Label>
                    <Form.Control type="text" disabled={disable} />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="text" disabled={disable} />
                </Form.Group>

                {disable ? (
                    <Button variant="primary" onClick={triggerDisable}>
                        Chỉnh sửa
                    </Button>
                ) : (
                    <div>
                        <Button variant="primary" onClick={editItem}>
                            Cập Nhật
                        </Button> {""}
                        <Button variant="primary">
                            Hủy bỏ
                        </Button>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default RoomDetail;