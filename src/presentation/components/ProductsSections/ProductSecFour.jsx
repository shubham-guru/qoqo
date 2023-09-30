import React from "react";
import { Col, Typography, Image, Button, Row } from "antd";

import Vector2Img from "../../../assets/Vector2Img.svg"
import prodFour from "../../../assets/prodFour.png";
import HeadingText from "../HeadingText";

import "../ProductsSections/styles/prodSecFour.css";

const ProductSecFour = () => {
  const { Text, Title } = Typography;

  return (
    <Row className="prod-four-main-Row">
      <Col xs={24} lg={12} className="prod-four-col-2">
        <Image className="vectorimg" src={Vector2Img} preview={false} />
        <Image className="watch-image" src={prodFour} alt="prod-four" preview={false} />
      </Col>

      <Col xs={24} lg={12} className="prod-four-col">
        <HeadingText text="QOQO Watch" span="Fit" size="7vmin" /> <br />
        <Text className="prod-four-decp">
          Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite
          to redefine your smartwatch experience.
        </Text>
        <Title className="price-four-text">₹2199</Title>
        <Button className="buy-now-pri-btn prod-two-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
          Buy Now
        </Button>
      </Col>
    </Row>
  );
};

export default ProductSecFour;
