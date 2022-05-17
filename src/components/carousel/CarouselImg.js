import React from "react";
import { Carousel } from "react-responsive-carousel";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselImgStyles.css";

const CarouselImg = () => {
  return (
    <div name='carousel' className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="BoraBora" />
        </div>
        <div>
          <img src={BoraBora2} alt="BoraBora" />
        </div>
        <div>
          <img src={Maldives} alt="Maldives" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
