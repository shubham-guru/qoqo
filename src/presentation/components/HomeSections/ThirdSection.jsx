import React from 'react'
import { Col, Typography, Image, Button, Row } from "antd";
import handWatchImg from "../../../assets/Rectangle 39890.png"
import HeadingText from '../HeadingText.jsx';
import { watchUsage } from '../../../domain/watchUsage.js';
import watchUsageImg from "../../../assets/Layer 1 4.png"
import "../HomeSections/styles/thirdSection.css"

const ThirdSection = () => {
  const { Text } = Typography
  return (
    <Row className='third-section-main-col'>
      <Col xs={24} lg={13} className='third-left-container'>
        <Col className='third-head-container'>
          <HeadingText text='QOQO Watch' span='Fit' color='#fff' />
        </Col>
        <Row gutter={[0, 20]} style={{ marginTop: "3%" }} className='key-features-container'>
          {
            watchUsage.map((item, index) => {
              return (
                <Col xs={24} lg={12} key={index} className='watch-usage-inner-col'>
                  <div className='icon-image'>
                    <Image className='key-fetures-icon' src={item.icon} alt='icon' preview={false} />
                  </div>
                  <Text className='watch-usage-text'>{item.text}</Text>
                </Col>
              )
            })
          }
        </Row>
        <Image src={watchUsageImg} width={200} className='usage-image-one' alt='watch-img' preview={false} />
        <Button className="buy-now-pri-btn btn-watch-usage" type="primary" href="https://amzn.eu/d/5Ngoo5z">
          Buy Now
        </Button>
      </Col>
      <Col className='usage-image-two-col' xs={24} lg={11}>
        <Image src={handWatchImg} preview={false} />
      </Col>
      <Text className="side-text-watch">
        WATCH
      </Text>
    </Row>

  )
}

export default ThirdSection