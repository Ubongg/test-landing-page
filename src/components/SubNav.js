import React from "react";
import { FaAngleDown } from "react-icons/fa";

const SubNav = () => {
  return (
    <div className="sub-nav">
      <ul className="sub-links">
        <li>experiences</li>
        <li>vacation</li>
        <li>short lists</li>
        <li>spa</li>
        <li>real estate investments</li>
        <li>
          financial services{" "}
          <span>
            <FaAngleDown />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SubNav;
