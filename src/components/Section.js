import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Section = () => {
  return (
    <div className="section">
      <div className="swipe-left">
        <FaAngleLeft />
      </div>
      <div className="swipe-right">
        <FaAngleRight />
      </div>
      <div className="section-text">
        <p>VACATION CHOICES</p>
        <h4>Maldives</h4>
        <p>33k Campers</p>
      </div>
    </div>
  );
};

export default Section;
