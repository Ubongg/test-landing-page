import React from "react";

const Shortlets = () => {
  return (
    <div className="shortlets">
      <div className="text-bx">
        <li>Victoria Garden Enugu</li>
        <h2>Rent Shortlets, Book Spa Sessions</h2>
        <p>
          Put your money to work by investing in our real estates, you can also
          purchase properties.
        </p>
        <button>Rent Shortlets</button>
      </div>
      <div className="shortlets-boxes">
        <div className="shortlets-box">
          <div className="img-bx">
            <img src="/images/invest1.png" alt="" />
          </div>
          <div className="box-text-bx">
            <p>AKWA IBOM NIGERIA</p>
            <h4>Dakkada Estates</h4>
          </div>
        </div>
        <div className="shortlets-box">
          <div className="img-bx">
            <img src="/images/invest2.png" alt="" />
          </div>
          <div className="box-text-bx">
            <p>AKWA IBOM NIGERIA</p>
            <h4>Dakkada Estates</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortlets;
