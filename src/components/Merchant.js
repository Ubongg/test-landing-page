import React from "react";

const Merchant = () => {
  return (
    <div className="merchant">
      <div className="text-bx">
        <h3>Become A Merchant</h3>
        <p>
          Merchants on citisquare get to enjoy all benefits that comes with
          makrjeting on citisquare, we onboard various types of merchants and
          also provide offers.
        </p>
        <ul>
          <li>Shortlets</li>
          <li>Property Developers </li>
          <li>Vacation Service Providers</li>
          <li>Spa Service Providers</li>
          <li>Financial Services</li>
        </ul>
        <button>Get Started</button>
      </div>
      <div className="merchant-right">
        <div className="img-stack">
          <div className="img-bx one">
            <img src="/images/xp2.png" alt="" />
          </div>
          <div className="img-bx two">
            <img src="/images/xp3.png" alt="" />
          </div>
          <div className="img-bx three">
            <img src="/images/xp2.png" alt="" />
          </div>
          <div className="img-bx four">
            <img src="/images/xp3.png" alt="" />
          </div>
        </div>
        <div className="merchant-text">
          <h4>XenPeople Ltd</h4>
          <p>Property Developers</p>
          <p>250 Listed Properties</p>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
