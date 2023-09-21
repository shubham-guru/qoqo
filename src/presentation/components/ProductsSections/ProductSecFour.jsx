import React from "react";
import { Col, Typography, Image, Button } from "antd";

import prodFour from "../../../assets/prodFour.png";
import HeadingText from "../HeadingText";

import "../ProductsSections/styles/prodSecFour.css";

const ProductSecFour = () => {
  const { Text, Title } = Typography;

  return (
    <div className="prod-four-main-div">
      <Col span={12} className="prod-three-col-2">
        <Image src={prodFour} width={340} alt="prod-three" preview={false} />
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
    </div>
  );
};

export default ProductSecFour;
