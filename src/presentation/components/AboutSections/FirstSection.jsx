import React from "react";
import "../AboutSections/styles/FirstSection.css";
import { Col, Typography, Image } from "antd";
import aboutBanner from "../../../assets/about-banner.png";

const AboutSecOne = () => {
  const { Text } = Typography;
  return (
    <Col span={24}>
      <div className="about-first-sec">
        <Image
          className="aboutbanner-img"
          src={aboutBanner}
          width="100%"
          alt="watch-img"
          height="509px"
          preview={false}
        />
        <div className="inner-content">
          <Text className="main-heading">
            About{" "}
            <span>
              us
              <div className="round-point">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 166 166"
                  fill="none"
                >
                  <circle cx="83" cy="83" r="83" fill="#ED302C" />
                </svg>
              </div>
            </span>
          </Text>
          <Text className="sub-content">
            <p>
              Bridging the gap between the communities of display electronics,
              sound engineering and vision sciences
            </p>
          </Text>
        </div>
      </div>
    </Col>
  );
};

export default AboutSecOne;
