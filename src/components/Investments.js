import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Investments = () => {
  return (
    <div className="investments">
      <div className="head">
        <div className="text-bx">
          <h3>Real Estate Investments</h3>
          <p>
            Put your money to work by investing in our real estates, you can
            also purchase properties.
          </p>
        </div>
        <ul>
          <li>
            Enter Location{" "}
            <span>
              <FaAngleDown />
            </span>
          </li>
        </ul>
      </div>
      <div className="investmentsboxes">
        <div className="investmentsbox">
          <div className="img-bx">
            <img src="/images/invest1.png" alt="" />
          </div>
          <div className="text-bx">
            <p>AKWA IBOM NIGERIA</p>
            <h4>Dakkada Estates</h4>
            <p>
              Located in akwa ibom dakkada estates has friendly environments
              that attracts investors, also has good ROI values.
            </p>
          </div>
        </div>
        <div className="investmentsbox">
          <div className="img-bx">
            <img src="/images/invest2.png" alt="" />
          </div>
          <div className="text-bx">
            <p>AKWA IBOM NIGERIA</p>
            <h4>Dakkada Estates</h4>
            <p>
              Located in akwa ibom dakkada estates has friendly environments
              that attracts investors, also has good ROI values.
            </p>
          </div>
        </div>
        <div className="investmentsbox">
          <div className="img-bx">
            <img src="/images/invest3.png" alt="" />
          </div>
          <div className="text-bx">
            <p>AKWA IBOM NIGERIA</p>
            <h4>Dakkada Estates</h4>
            <p>
              Located in akwa ibom dakkada estates has friendly environments
              that attracts investors, also has good ROI values.
            </p>
          </div>
        </div>
        <div className="investmentsbox">
          <div className="img-bx">
            <img src="/images/invest4.png" alt="" />
          </div>
          <div className="text-bx">
            <p>AKWA IBOM NIGERIA</p>
            <h4>Dakkada Estates</h4>
            <p>
              Located in akwa ibom dakkada estates has friendly environments
              that attracts investors, also has good ROI values.
            </p>
          </div>
        </div>
      </div>
      <div className="button">
        <button>View More Listings</button>
      </div>
    </div>
  );
};

export default Investments;
