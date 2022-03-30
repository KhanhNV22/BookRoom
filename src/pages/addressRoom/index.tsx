import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import "./styles.css";
import Footer from "../../components/footer";

interface IPost {
  room_id: number,
  room_img: string,
  room_category: string,
  room_title: string,
  room_price: string
}
const defaultProps:IPost[] = [];

const AddressRoom = () => {
  const [rooms, setRooms] = useState<undefined | any>();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  
  const URL = "http://localhost:4000/rooms";

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setRooms(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.massge);
      });
      
  };
  console.log("rooms", rooms);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container--md margin--body">
        <div className="mt--30"></div>
        <div className="title mb--30">
          <p>
            <b>
              Trước khi đặt phòng, hãy kiểm tra những địa điểm bị hạn chế du
              lịch trong thời gian này.
            </b>{" "}
            Sức khỏe và sự an toàn của cộng đồng luôn được đặt hàng đầu. Vì vậy,
            vui lòng làm theo chỉ thị của chính phủ bởi điều đó thực sự cần
            thiết.
          </p>
        </div>

        <Row>
          <div className="mt--30"></div>
          <Col md={9}>
            <h2 className="title-h2">Homestay tại Ha Noi</h2>
          </Col>
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>Sắp xếp: Lựa chọn</option>
              <option value="1">Gía tăng dần</option>
              <option value="2">Gía giảm dần</option>
            </Form.Select>
          </Col>
        </Row>

        <div className="mt--30"></div>
        <Row>
          {rooms?.map((post: any) => (
            <Col xs={6} md={3} className="col-lg-20" key={post.content[0].room_id}>
              <div className="div-room">
                <Link to={`/rooms/${post.content[0].room_id}`} className="text_decoration">
                  <img alt=""
                    src={post.content[0].room_img}
                    className="img-room"
                  />
                  <div>
                    <span className="title__room">
                      {post.content[0].room_category}
                    </span>
                  </div>
                  <span className="promo__title">
                    {post.content[0].room_title}
                  </span>
                </Link>
                <div className="promo__price">
                  <span>{post.content[0].room_price}</span>
                </div>
                <div className="mb--30"></div>
              </div>
            </Col>
          ))}
          {error && <p className="error">{error}</p>}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default AddressRoom;
