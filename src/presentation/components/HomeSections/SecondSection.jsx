import React from "react";
import { Col, Typography, Image, Button, Row } from "antd";
import secondWatch from "../../../assets/secondWatch.png";
import { watchFeatures } from "../../../domain/watchFeatures";
import arrowRight from "../../../assets/Arrow - Right.svg";
import "../HomeSections/styles/secondSection.css";
import HeadingText from "../HeadingText.jsx";

const SecondSection = () => {
  const { Text } = Typography;
  return (
    <Row className="second-section-main-col" >
      <Col xs={24} lg={12} className="left-img-container">
        <Image
          className="left-img"
          src={secondWatch}
          alt="second-watch"
          preview={false}
        />
      </Col>
      <Col xs={24} lg={12} style={{ textAlign: "left" }} className="right-content">
        <Col className="head-text-conatiner">
          <HeadingText text="QOQO Watch" span="AmoLite" /> <br />
        </Col>
        <Col xs={24} lg={20} className="descp-text-conatiner">
          <Text className="descp-text">
            Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite
            to redefine your smartwatch experience.
          </Text>
        </Col>
        <br />
        {watchFeatures.map((item, index) => {
          return (
            <Col className="features-col" key={index}>
              <Image
                src={arrowRight}
                alt="arrow-right"
                preview={false}
                width={15}
              />
              <Text className="watch-feature-text" key={index}>
                {item} <br />
              </Text>
            </Col>
          );
        })}
        <Col className="btn-container">
          <Button className="buy-now-pri-btn buy-now-pri-sec-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
            Buy Now
          </Button>
        </Col>

        <Text className="side-text-smart">
          SMART
        </Text>
      </Col>
    </Row>
  );
};

export default SecondSection;
