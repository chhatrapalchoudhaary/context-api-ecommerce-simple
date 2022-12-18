import React, { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sliderItems } from "../../constant/customData";
import "./slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <div className="arrow-left" onClick={() => handleClick("left")}>
        <FiArrowLeftCircle />
      </div>
      <div className="slider-wrapper">
        <div className="slider" key={sliderItems[slideIndex].id}>
          <div className="image-container">
            <img
              className="image"
              src={sliderItems[slideIndex].img}
              alt={sliderItems[slideIndex].title}
            />
          </div>
          <div className="info-container">
            <h1 className="slider-title">{sliderItems[slideIndex].title}</h1>
            <p className="slider-description">{sliderItems[slideIndex].desc}</p>
            <Link to="/products" className="link-decoration">
              <button className="slider-button">SHOW NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="arrow-right" onClick={() => handleClick("right")}>
        <FiArrowRightCircle />
      </div>
    </div>
  );
};

export default Slider;
