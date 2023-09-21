import React from 'react'
import { Col, Typography, Image } from "antd";
import HeadingText from '../HeadingText';
import prodOne from "../../../assets/prodOne.png"
import "../ProductsSections/styles/productSecOne.css"

const ProductSecOne = () => {
    const { Text } = Typography;

  return (
    <Col span={24} style={{display: 'flex'}}>
        <Col xs={24} lg={16}className='prod-sec-one-col'>
            <HeadingText text="Get Ready to" size='8vmin' br={true} span="Rock Your Wrist" /> <br />
            <Text className='decp-text'>Slim, Light, and Stylish AMOLED Watches!</Text>
        </Col>

        <Col xs={0} lg={8}>
            <Image src={prodOne} alt='prod-one' preview={false} />
        </Col>
    </Col>
  )
}

export default ProductSecOne