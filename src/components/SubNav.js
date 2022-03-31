import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import DropDown from "./DropDown";

const SubNav = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="sub-nav">
      <ul className="sub-links">
        <li>experiences</li>
        <li>vacation</li>
        <li>short lists</li>
        <li>spa</li>
        <li>real estate investments</li>
        <li onClick={() => setDropDown(!dropDown)}>
          financial services{" "}
          <span>{dropDown ? <FaAngleUp /> : <FaAngleDown />}</span>
        </li>
        {dropDown && <DropDown />}
      </ul>
    </div>
  );
};

export default SubNav;
