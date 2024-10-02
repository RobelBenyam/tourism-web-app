import React from "react";
import Slider from "react-slick";
import styles from "./DestinationSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bale from "../assets/bale.jpg";
import Holqa from "../assets/Holqa.jpg";
import Mount from "../assets/Mount.JPG";
import Harenna from "../assets/Harenna.jpg";
import Fincha from "../assets/Fincha.jpg";
const destinations = [
  {
    id: 1,
    name: "Bale",
    image: Bale,
  },
  {
    id: 2,
    name: "Holqa",
    image: Holqa,
  },
  {
    id: 3,
    name: "Mount",
    image: Mount,
  },
  {
    id: 4,
    name: "Harenna",
    image: Harenna,
  },
  {
    id: 5,
    name: "Fincha",
    image: Fincha,
  },
];

const DestinationSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Popular Destinations</h2>
      <Slider {...settings}>
        {destinations.map((destination) => (
          <div key={destination.id} className={styles.slide}>
            <img src={destination.image} alt={destination.name} />
            <div className={styles.caption}>{destination.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSlider;
