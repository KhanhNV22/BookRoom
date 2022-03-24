import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

interface IntervalProps {
  interval: number
}
const SliderBanner: React.FC<IntervalProps> = ({interval}: IntervalProps) => {
  return (
    <Container>
      <Carousel interval={interval}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://beta-api.luxstay.net/api/upload/file?storage=admins/12/qF7ukmI--Rwr2H5LwzVZwcXa.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-banner"
            src="https://beta-api.luxstay.net/api/upload/file?storage=admins/22/y6Sc_lVCy8r5RBV-fj8nFHLP.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default SliderBanner;
