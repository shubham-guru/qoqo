import React from 'react'
import { Col, Typography, Image, Button } from "antd";
import prodThree from "../../../assets/prodThree.png"

import "../ProductsSections/styles/productSecThree.css"
import HeadingText from '../HeadingText';

const ProductSecThree = () => {
    const { Text, Title } = Typography;
  return (
    <div className='prod-three-main-div'>
        <Col span={12} className='prod-three-col'>
          <HeadingText text="QOQO Watch" span="Fit" size='7vmin' /> <br />
          <Text className="prod-three-decp">
            Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite to redefine your smartwatch experience.
          </Text>
          <Title className='price-three-text'>
            ₹2999
          </Title>

          <Button className="buy-now-pri-btn prod-two-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
              Buy Now
          </Button>
        </Col>

        <Col lg={12} className='prod-three-col-2'>
            <Image src={prodThree} className='prod-three-image' alt='prod-three' preview={false} />
        </Col>
    </div>
  )
}

export default ProductSecThree