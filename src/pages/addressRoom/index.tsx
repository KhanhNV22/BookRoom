import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import "./styles.css";
import Footer from "../../components/footer";
import { API_URL } from "../../constants";

interface IPost {
  id: any,
  img_rooms: string,
  cate: string,
  info: string,
  price: string,
  address: string
}
const defaultProps:IPost[] = [];

const AddressRoom = () => {
  const [rooms, setRooms] = useState<any>([]);
  const [error, setError]: [string, (error: string) => void] = useState("");

  const params = useParams();
  const { id } = params;
  
  const fetchData = () => {
    fetch(`${API_URL}/rooms`)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((error) => {
        setError(error.massge);
      });
  };

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
            <h2 className="title-h2">Homestay tại {id}</h2>
          </Col>
          <Col md={3}>
            
          </Col>
        </Row>

        <div className="mt--30"></div>
        <Row>
          {rooms
          .filter((post:any) => post.address === id)
          .map((post: any) => (
            <Col xs={6} md={3} className="col-lg-20" key={post.id}>
              <div className="div-room">
                <Link to={`/rooms/${post.id}`} className="text_decoration">
                  <img alt=""
                    src={post.img_rooms}
                    className="img-room"
                  />
                  <div>
                    <span className="title__room">
                      {post.cate}
                    </span>
                  </div>
                  <span className="promo__title">
                    {post.info}
                  </span>
                </Link>
                <div className="promo__price">
                  <span>{post.price} ₫</span>
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
