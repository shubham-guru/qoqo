import React from "react";
import AboutSecOne from "../components/AboutSections/FirstSection";
import Footer from "../components/Footer/Footer";
import AboutSecTwo from "../components/AboutSections/SecondSections";
import AboutSecThird from "../components/AboutSections/ThirdSection";
import AboutSecForth from "../components/AboutSections/ForthSection";

const Home = () => {
  return (
    <>
      <AboutSecOne />
      <AboutSecTwo />
      <AboutSecThird />
      <AboutSecForth />
      <Footer />
    </>
  );
};

export default Home;
