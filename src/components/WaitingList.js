import React from "react";

const WaitingList = () => {
  return (
    <div className="waiting-list">
      <h1>We Are Currently In Beta</h1>
      <p>
        We are currently in beta-testing phase, get to know when we leave beta,
        join our waiting list
      </p>
      <input type="text" placeholder="Enter your email address" />
      <button>Join Waiting List</button>
    </div>
  );
};

export default WaitingList;
