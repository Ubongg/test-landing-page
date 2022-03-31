import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="head">
        <h3>Experiences</h3>
      </div>

      <div className="experiences-boxes">
        <div className="experiences-left">
          <FaAngleLeft />
        </div>
        <div className="experiences-right">
          <FaAngleRight />
        </div>
        <div className="experience-box">
          <div className="img-bx">
            <img src="/images/xp1.png" alt="" />
          </div>
          <div className="text-bx">
            <h5>Ibom Golf Resort</h5>
            <p>
              Uyo, Nigeria <span>.</span> 6k Experiences
            </p>
          </div>
        </div>
        <div className="experience-box">
          <div className="img-bx">
            <img src="/images/xp2.png" alt="" />
          </div>
          <div className="text-bx">
            <h5>Obudu Cattle Ranch</h5>
            <p>
              Calabar, Nigeria <span>.</span> 66k Experiences
            </p>
          </div>
        </div>
        <div className="experience-box">
          <div className="img-bx">
            <img src="/images/xp3.png" alt="" />
          </div>
          <div className="text-bx">
            <h5>Bonny Island</h5>
            <p>
              Rivers State <span>.</span> 3.6k Experiences
            </p>
          </div>
        </div>
        <div className="experience-box">
          <div className="img-bx">
            <img src="/images/xp4.png" alt="" />
          </div>
          <div className="text-bx">
            <h5>Nike Lake</h5>
            <p>
              Enugu, Nigeria <span>.</span> 9m Experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
