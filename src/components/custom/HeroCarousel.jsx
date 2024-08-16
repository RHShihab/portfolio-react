import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../../assets/projects/incubator-circuit.jpg";
import pic2 from "../../assets/projects/IubBongomarine.png";
import pic3 from "../../assets/projects/Shuchimita-circuit.jpg";
import pic4 from "../../assets/projects/Shuchimita.png";
import overlayPic from "../../assets/transparentOverlay.png";

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
          <img
            className="absolute p-1 bottom-0 left-0 w-full object-contain rounded-3xl"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">Incubator Circuit</h3>
            <p className="text-sm">Prototype of a circuit using breadboard</p>
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full p-1 object-cover object-center rounded-3xl"
            src={pic2}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">IUB Bongomarine</h3>
            <p className="text-sm">An Underwate Automated Vehicle</p>
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full p-1 object-cover object-center rounded-3xl"
            src={pic3}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">Shuchimita Circuit</h3>
            <p className="text-sm">Prototype of a circuit using breadboard</p>
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full p-1 object-cover object-center rounded-3xl"
            src={pic4}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">Shuchimita</h3>
            <p className="text-sm">IoT Based Sanitary Napkin Dispenser</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

const ImageWithOverlay = ({ title, description }) => {
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <img
        className="absolute p-1 bottom-0 left-0 w-full object-contain rounded-3xl"
        src={overlayPic}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HeroCarousel;
