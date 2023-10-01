import React from 'react'
import { Col, Typography, Image, Button, Row } from "antd";
import prodThree from "../../../assets/prodThree.png"

import cockImg from "../../../assets/Group13031Img.svg"
import "../ProductsSections/styles/productSecThree.css"
import HeadingText from '../HeadingText';

const ProductSecThree = () => {
  const { Text, Title } = Typography;
  return (
    <Row className='prod-three-main-Row'>
      <Col xs={24} lg={12} className='prod-three-col'>
        <HeadingText text="QOQO Watch" span="Fit" size='7vmin' /> <br />
        <Text className="prod-three-decp">
          Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite to redefine your smartwatch experience.
        </Text>
        <Title className='price-three-text'>
          ₹2999
        </Title>

        <Col span={24} className='prod-three-btn-container'>
          <Button className="buy-now-pri-btn prod-two-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
            Buy Now
          </Button>
        </Col>
      </Col>

      <Col lg={12} className='prod-three-col-2'>
        <Image src={prodThree} className='prod-three-image' alt='prod-three' preview={false} />
      </Col>
    </Row>
  )
}

export default ProductSecThree