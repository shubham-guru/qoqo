import React from 'react'
import { Col, Typography, Image, Button, Row } from "antd";

import watchImg from "../../../assets/Group16Img.svg"
import HeadingText from '../HeadingText.jsx';
import groupImg from "../../../assets/watchGroupFeatures.png";
import group23Img from "../../../assets/Group23Img.svg"
import group24Img from "../../../assets/Group24Img.svg"
import "../HomeSections/styles/fourthSection.css"

const FourthSection = () => {
  const { Text } = Typography

  return (
    <Row className='fourth-section-main-col'>
      <Col span={24}>
        <HeadingText text='QOQO Watch' span='One' size={40} /> <br />
      </Col>
      <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
        <Col xs={20} lg={14} className='fourth-decp-text-container'>
          <Text className='fourth-decp-text'>
            Introducing the 1.85-inch HD IPS Touch Screen Curved Display QOQO WatchOne – the perfect blend of style, functionality, and convenience all wrapped around your wrist. This cutting-edge smartwatch offers an array of features to elevate your daily routine and keep you connected in a seamless and stylish manner.
          </Text>
        </Col>
      </Col>

      <Col xs={24} lg={0} className='fourth-sec-img-container'>
        <Image preview={false} src={watchImg}/>
        <Image preview={false} className='group24Img' src={group24Img}/>
        <Image preview={false} className='group23Img' src={group23Img} />
      </Col>

      <Col xs={0} lg={24}>
        <Image src={groupImg} className='group-img' alt='group-img' preview={false} />
      </Col>

      <Col span={24} className='buy-now-btn-col'>
        <Button className="buy-now-pri-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
          Buy Now
        </Button>
      </Col>
    </Row>
  )
}

export default FourthSection