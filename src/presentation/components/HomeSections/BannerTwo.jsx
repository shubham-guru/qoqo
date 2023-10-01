import React from 'react'
import { Col, Typography, Image, Button, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"

import smartWatch from "../../../assets/smartWatch.png"
import watchOneImg from "../../../assets/Watchone1.svg"
import "./styles/bannerTwo.css"

const { Text } = Typography

const BannerTwo = () => {
    return (
        <Row className="inner-col bg-inner-col">
            <Col xs={24} lg={12} className="main-col">
                <Text className="small-heading">QOQO WATCH AMOLITE</Text> <br />
                <Text className="main-heading banner-two-main-heading"> Entry Level |
                    <span id="span">Bestseller</span>
                </Text>
                <Row className="button-col">
                    <Col xs={24} lg={12} className='btn-container'>
                        <Button className="buy-now-pri-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
                            Buy Now
                        </Button>
                    </Col>
                    <Col xs={24} lg={12} className='btn-container'>
                        <Button className="buy-now-link-btn banner-two-btn" type="link">
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
                    src={watchOneImg}
                    width={"75vmin"}
                    alt="watch-img"
                    preview={false}
                />
            </Col>
        </Row>
    )
}

export default BannerTwo