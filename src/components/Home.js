import React from "react";
import Experiences from "./Experiences";
import Investments from "./Investments";
import Merchant from "./Merchant";
import Navbar from "./Navbar";
import Offers from "./Offers";
import Partners from "./Partners";
import SearchBar from "./SearchBar";
import Section from "./Section";
import SubNav from "./SubNav";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
      <SearchBar />
      <Section />
      <Partners />
      <Experiences />
      <Offers />
      <Merchant />
      <Investments />
    </div>
  );
};

export default Home;
