import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-text">
        <h3>Great offers just for you</h3>
        <p>
          You dont have to break the bank to buy what you need, we have made
          available several offers to make sure you save on purchases.
        </p>
      </div>
      <div className="offers-nav">
        <ul>
          <li>Discounted Offers</li>
          <li>Newest Offers</li>
          <li>Trending Offers</li>
          <li>Featured Merchants</li>
        </ul>
        <div className="buttons">
          <div className="offers-left">
            <FaAngleLeft />
          </div>
          <div className="offers-right">
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="offers-boxes">
        <div className="offers-box a">
          <div className="text-bx">
            <h4>Studio Apartment</h4>
            <p>Abuja,Nigeria</p>
          </div>
        </div>
        <div className="offers-box b">
          <div className="text-bx">
            <h4>Summer in Seychelles</h4>
            <p>Abuja,Nigeria</p>
          </div>
        </div>
        <div className="offers-box c">
          <div className="text-bx">
            <h4>Fenty Spa</h4>
            <p>Abuja,Nigeria</p>
          </div>
        </div>
        <div className="offers-box d">
          <div className="text-bx">
            <h4>Venice</h4>
            <p>Abuja,Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
