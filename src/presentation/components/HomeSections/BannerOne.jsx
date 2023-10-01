import React from 'react'
import { Col, Typography, Image, Button, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"

import smartWatch from "../../../assets/smartWatch.png"
import watchImg from "../../../assets/Watchfit1Img.svg"
import "./styles/bannerOne.css"

const { Text } = Typography;

const BannerOne = () => {
    return (
        <Row className="inner-col banner-one-inner-col">
            <Col xs={24} lg={12} className="main-col">
                <Text className="small-heading">QOQO WATCH AMOLITE</Text> <br />
                <Text className="main-heading"> Large Display
                    <span id="span">| Wireless </span> Charging
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

            <Col className="main-col-two banner-col-two" xs={24} lg={12}>
                <Col className='smart-watch' xs={0} lg={6}>
                    <Image id='banner-watch' src={smartWatch} width={170} alt='smart-watch' preview={false} />
                </Col>
                <Image
                    className="product-img"
                    src={watchImg}
                    width={"60vmin"}
                    alt="watch-img"
                    preview={false}
                />
            </Col>
        </Row>
    )
}

export default BannerOne