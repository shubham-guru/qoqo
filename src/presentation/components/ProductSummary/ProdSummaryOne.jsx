import React from 'react'
import { Row, Col, Typography, Rate, Button } from "antd"
import { CarOutlined, ShoppingCartOutlined } from "@ant-design/icons"

import "./prodSummaryStyle/prodSummaryOne.css"

const { Text } = Typography

const ProdSummaryOne = () => {
    return (
        <Row>
            <Col xs={24} lg={10} className='prod-sum-one-container'>
                <Text className='prod-sum-one-title'>Watchfit</Text>
                <Col className='prod-sum-one-price-main-container'>
                    <Col className='prod-sum-one-price-container'>
                        <Text className='prod-sum-one-original-price'>$ 6999</Text>
                        <Text className='prod-sum-one-discounted-price'>$ 2999</Text>
                    </Col>
                    <Col className='prod-sum-one-ratings-container'>
                        <Rate className='prod-sum-ratings'></Rate>
                        <Text className='prod-sum-one-ratings-text'>4.6/5.0</Text>
                    </Col>
                </Col>
                <Col className='prod-sum-one-text-container'>
                    <Text className='prod-sum-text'>Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite to redefine your smartwatch experience.</Text>
                    <br />
                    <Text className='prod-sum-text'>With its comprehensive features and elegant design, this smartwatch is designed to elevate your daily activities and keep you connected in style.</Text>
                </Col>
                <Col className='prod-sum-one-btn-container'>
                    <Button className="buy-now-pri-btn prod-sum-one-outlined-btn" type="primary"> Add To Cart </Button>
                    <Button className="buy-now-pri-btn prod-sum-one-btn" type="primary"> Buy Now </Button>
                </Col>
                <Col className='delivery-content' xs={24} lg={18}>
                    <Col className='free-delivery-text-container'>
                        <CarOutlined className='prod-sum-one-icon' />
                        <Text className='free-delivery-text'>Free Delivery</Text>
                    </Col>
                    <hr />
                    <Col>
                        <Col span={24} className='free-delivery-text-container'>
                            <Col>
                                <ShoppingCartOutlined className='prod-sum-one-icon' />
                                <Text className='free-delivery-text' >Return Delivery</Text>
                            </Col>
                            <Col>
                                <Text className='delivery-sub-text'>Free 30 days Delivery Returns. <u>Details</u></Text>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Row>
    )
}

export default ProdSummaryOne