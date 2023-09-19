import React from 'react'
import { Col, Typography, Image, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"
import watchImg from "../../../assets/watch.png";
import smartWatch from "../../../assets/smartWatch.png"
import "../HomeSections/styles/firstSection.css"

const FirstSection = () => {
  const { Text } = Typography;

  return (
    <Col className="inner-col" span={24}>
        <Col xs={24} lg={12} className="main-col">
          <Text className="small-heading">QOQO Watch AmoLite</Text> <br />
          <Text className="main-heading">
            Slimmest & <br /> Lightest <br /> <span id="span"> AMOLED </span>{" "}
            watch
          </Text>
          <Col className="button-col">
            <Button className="buy-now-pri-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
              Buy Now
            </Button>
            <Button className="buy-now-link-btn" type="link">
              About the watch
            <ArrowRightOutlined />
            </Button>
          </Col>
        </Col>
       
        <Col className="main-col-two" span={12}>
        <div className='smart-watch'>
          <Image id='banner-watch' src={smartWatch} width={170} alt='smart-watch' preview={false} />
        </div>
          <div className="image-div">
            <Image
              className="product-img"
              src={watchImg}
              width={"50vmin"}
              alt="watch-img"
              preview={false}
            />
          </div>
        </Col>
      </Col>
  )
}

export default FirstSection