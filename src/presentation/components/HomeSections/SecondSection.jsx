import React from "react";
import { Col, Typography, Image, Button } from "antd";
import secondWatch from "../../../assets/secondWatch.png";
import { watchFeatures } from "../../../domain/watchFeatures";
import arrowRight from "../../../assets/Arrow - Right.svg";
import "../HomeSections/styles/secondSection.css";
import HeadingText from "../HeadingText.jsx";

const SecondSection = () => {
  const { Text } = Typography;
  return (
    <Col span={24} className="second-section-main-col">
      <Col xs={24} lg={12}>
        <Image
          src={secondWatch}
          width={350}
          alt="second-watch"
          preview={false}
        />
      </Col>
      <Col xs={24} lg={12} style={{ textAlign: "left" }}>
        <HeadingText text="QOQO Watch" span="AmoLite" /> <br />
        <Text className="descp-text">
          Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite
          to redefine your smartwatch experience.
        </Text>
        <br />
        {watchFeatures.map((item, index) => {
          return (
            <Col className="features-col" key={index}>
              <Image
                src={arrowRight}
                alt="arrow-right"
                preview={false}
                width={12}
              />
              <Text className="watch-feature-text" key={index}>
                {item} <br />
              </Text>
            </Col>
          );
        })}
        <Button className="buy-now-pri-btn buy-now-pri-sec-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
          Buy Now
        </Button>

        <Text className="side-text-smart">
          SMART
        </Text>
      </Col>
    </Col>
  );
};

export default SecondSection;
