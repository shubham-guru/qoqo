import React from "react";
import { Carousel } from 'antd';

import FirstSection from "../components/HomeSections/FirstSection";
import SecondSection from "../components/HomeSections/SecondSection";
import ThirdSection from "../components/HomeSections/ThirdSection";
import FourthSection from "../components/HomeSections/FourthSection";
import Footer from "../components/Footer/Footer";
import BannerOne from "../components/HomeSections/BannerOne";
import BannerTwo from "../components/HomeSections/BannerTwo";
import "../css/home.css";

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Home = () => {

  return (
    <>
      <Carousel autoplay>
        <div>
          <FirstSection />
        </div>
        <div>
          <BannerOne />
        </div>
        <div>
          <BannerTwo />
        </div>
      </Carousel>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
};

export default Home;
