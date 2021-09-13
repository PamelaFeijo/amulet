import React from "react";
import { Carousel } from "react-bootstrap";
import image from "../img/car4.jpg";
import image1 from "../img/car2.jpeg";

function Slider() {
  return (
    <Carousel variant="dark" className="carousel"  >
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
