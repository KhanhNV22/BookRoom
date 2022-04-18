import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
import Footer from "../../components/footer";
import { API_URL } from "../../constants";
import NumberFormat from "react-number-format";
import Header from "../header";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AddressRoom = () => {
  const [rooms, setRooms] = useState<any>([]);
  const [error, setError]: [string, (error: string) => void] = useState("");

  const params = useParams();
  const { id } = params;

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastRoom = currentPage * postPerPage;
  const indexOfFirstRoom = indexOfLastRoom - postPerPage;
  const listAllRoomCurrent = rooms.slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );
  const pageNumbers = Math.ceil(rooms.length / postPerPage);

  const fetchData = () => {
    fetch(`${API_URL}/rooms?address=${id}&status=1`)
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
      <Header />
      <div className="container--md margin--body mt--150">
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

        <div className="mt--30 text-center"></div>
        <Row>
          {listAllRoomCurrent
            .map((post: any) => (
              <Col sm={6} md={4} lg={3} className="col-lg-20" key={post.id}>
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
                      {post.name}
                    </span>
                  </Link>
                  <div className="promo__price">
                    <span>
                      <NumberFormat
                        value={post.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"₫"}
                      /> /đêm
                    </span>
                  </div>
                  <div className="mb--30"></div>
                </div>
              </Col>
            ))
          }
          {error && <p className="error">{error}</p>}
        </Row>
        <Stack spacing={2}>
          <Pagination
            count={pageNumbers}
            color="secondary"
            onChange={(e: any, page: number) => setCurrentPage(page)}
          />
        </Stack>
      </div>
      <Footer />
    </div>
  );
};

export default AddressRoom;
