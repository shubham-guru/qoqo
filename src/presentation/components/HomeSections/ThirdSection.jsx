import React from 'react'
import { Col, Typography, Image, Button } from "antd";
import HeadingText from '../HeadingText.jsx';
import { watchUsage } from '../../../domain/watchUsage.js';
import watchUsageImg from "../../../assets/Layer 1 4.png"
import "../HomeSections/styles/thirdSection.css"

const ThirdSection = () => {
    const { Text } = Typography
  return (
    <Col span={24} className='third-section-main-col'>
        <Col xs={24}  lg={13}>
            <HeadingText text='QOQO Watch' span='Fit' color='#fff' />
            <Col span={24} className='watch-usage-outter-col'>
            {
                watchUsage.map((item, index) => {
                    return(
                        <Col span={24} key={index} className='watch-usage-inner-col'>
                            <div className='icon-image'>
                            <Image src={item.icon} alt='icon' preview={false} />
                            </div>
                            <Text className='watch-usage-text'>{item.text}</Text>
                        </Col>
                    )
                })
            }
            </Col>
            <Image src={watchUsageImg} width={200} className='usage-image-one' alt='watch-img' preview={false} />
            <Button className="buy-now-pri-btn btn-watch-usage" type="primary" href="https://amzn.eu/d/5Ngoo5z">
              Buy Now
            </Button>
            
        </Col>


        <Col xs={24} lg={11} className='usage-image-two-col' />
        <Text className="side-text-watch">
          WATCH
        </Text>
    </Col>
  )
}

export default ThirdSection