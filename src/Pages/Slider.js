import React from "react";
import "../Styles/Slider.css";

const Slider = ({ start }) => {
  return (
    <div>
      {start.map((item) => (
        <div className="Slider">
          <img className="Slider_img" src={item} alt="First slide" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
