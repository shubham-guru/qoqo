import React from 'react'
import { Col, Typography, Image, Button } from "antd";
import Rectangle39894Img from "../../../assets/Rectangle39894Img.svg"
import Img062 from "../../../assets/062Img.svg"
import prodTwo from "../../../assets/prodTwo.png"
import "../ProductsSections/styles/productSecTwo.css"
import HeadingText from '../HeadingText';

const ProductSecTwo = () => {
  const { Text, Title } = Typography;

  return (
    <Col span={24} className='prod-two-main-col'>
      <Col xs={0} lg={24} className='prod-bg' />
      <Col xs={0} lg={12}>
        <Image src={prodTwo} className='prod-two-img' width={230} alt='prod-two' preview={false} />
      </Col>
      <Col xs={24} lg={0}>
        <Image src={Img062} className='Img062'/>
        <Image preview={false} src={Rectangle39894Img} />
      </Col>

      <Col xs={24} lg={12} className='prod-tow-col'>
        <HeadingText text="QOQO Watch" span="AmoLite" size='7vmin' color='#fff' /> <br />
        <Text className="prod-two-decp">
          Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite to redefine your smartwatch experience.
        </Text>
        <Title className='price-text'>
          ₹3999
        </Title>

        <Col className='prod-sec-two-btn-container'>
          <Button className="buy-now-pri-btn prod-two-btn" type="primary" href="https://amzn.eu/d/5Ngoo5z">
            Buy Now
          </Button>
        </Col>
      </Col>
    </Col>
  )
}

export default ProductSecTwo