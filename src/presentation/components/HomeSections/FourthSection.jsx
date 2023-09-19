import React from 'react'
import { Col, Typography, Image, Button } from "antd";
import HeadingText from '../HeadingText.jsx';
import groupImg from "../../../assets/watchGroupFeatures.png";
import "../HomeSections/styles/fourthSection.css"

const FourthSection = () => {
    const { Text } = Typography

  return (
    <Col span={24} className='fourth-section-main-col'>
        <HeadingText text='QOQO Watch' span='One' size={50} /> <br />
        <Col span={24}>
          <Text className='fourth-decp-text'>
            Introducing the 1.85-inch HD IPS Touch Screen Curved Display QOQO WatchOne – the perfect blend of style, functionality, and convenience all wrapped around your wrist. This cutting-edge smartwatch offers an array of features to elevate your daily routine and keep you connected in a seamless and stylish manner.
          </Text>
        </Col>

        <Col span={24}>
          <Image src={groupImg} className='group-img' alt='group-img' preview={false} />
        </Col>

      <Col span={24} className='buy-now-btn-col'>
        <Button className="buy-now-pri-btn"  type="primary" href="https://amzn.eu/d/5Ngoo5z">
              Buy Now
        </Button>
        </Col>
    </Col>
  )
}

export default FourthSection