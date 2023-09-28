import React from 'react'
import { Col, Typography, Image, Button, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"
import watchImg from "../../../assets/watch.png";
import smartWatch from "../../../assets/smartWatch.png"
import "../HomeSections/styles/firstSection.css"

const FirstSection = () => {
  const { Text } = Typography;

  return (
    <Row className="inner-col">
      <Col xs={24} lg={10} className="main-col">
        <Text className="small-heading">QOQO WATCH AMOLITE</Text> <br />
        <Text className="main-heading"> Slimmest & Lightest
          <span id="span"> AMOLED </span> Watch
        </Text>
        <Row className="button-col">
          <Col xs={24} lg={12} className='btn-container'>
            <Button className="buy-now-pri-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
              Buy Now
            </Button>
          </Col>
          <Col xs={24} lg={12} className='btn-container'>
            <Button className="buy-now-link-btn" type="link">
              About the watch
              <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
      </Col>

      <Col className="main-col-two" xs={24} lg={14}>
        <Col className='smart-watch' xs={0} lg={6}>
          <Image id='banner-watch' src={smartWatch} width={170} alt='smart-watch' preview={false} />
        </Col>
        <div className="image-div">
          <Image
            className="product-img"
            src={watchImg}
            width={"60vmin"}
            alt="watch-img"
            preview={false}
          />
        </div>
      </Col>
    </Row>
  )
}

export default FirstSection