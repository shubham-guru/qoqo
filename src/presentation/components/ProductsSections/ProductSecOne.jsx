import React from 'react'
import { Col, Typography, Image, Row } from "antd";
import HeadingText from '../HeadingText';
import watchOne from "../../../assets/Watchone1.svg"
import prodOne from "../../../assets/prodOne.png"
import "../ProductsSections/styles/productSecOne.css"

const ProductSecOne = () => {
  const { Text } = Typography;

  return (
    <Row>
      <Col xs={24} lg={16} className='prod-sec-one-col'>
        <Text className='get-ready-to'>Get Ready to</Text> <br />
        <Text className='rock-your-wrist'>Rock Your Wrist</Text> <br />
        <Text className='decp-text'>Slim, Light, and Stylish AMOLED Watches!</Text>
      </Col>

      <Col xs={0} lg={8}>
        <Image src={prodOne} alt='prod-one' preview={false} />
      </Col>
      <Col xs={24} lg={0}>
        <Image src={watchOne} preview={false}></Image>
      </Col>
    </Row>
  )
}

export default ProductSecOne