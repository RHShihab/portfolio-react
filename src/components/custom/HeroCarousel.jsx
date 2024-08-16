import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../../assets/projects/incubator-circuit.jpg";
import pic2 from "../../assets/projects/IubBongomarine.png";
import pic3 from "../../assets/projects/Shuchimita-circuit.jpg";
import pic4 from "../../assets/projects/Shuchimita.png";

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-container w-72 lg:w-96">
      <Slider {...settings}>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full p-1 object-cover object-center  rounded-3xl"
            src={pic1}
            alt=""
          />
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full p-1 object-cover object-center rounded-3xl"
            src={pic2}
            alt=""
          />
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl">
          <img
            className="w-full h-full p-1 object-cover object-center"
            src={pic3}
            alt=""
          />
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full p-1 object-cover object-center rounded-3xl"
            src={pic4}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroCarousel;
