import React from "react";

import "../css/home.css";
import FirstSection from "../components/HomeSections/FirstSection";
import SecondSection from "../components/HomeSections/SecondSection";
import ThirdSection from "../components/HomeSections/ThirdSection";
import FourthSection from "../components/HomeSections/FourthSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
