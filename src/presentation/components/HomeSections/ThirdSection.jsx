import React from 'react'
import { Col, Typography, Image, Button } from "antd";
import HeadingText from '../HeadingText.tsx';
import { watchUsage } from '../../../domain/watchUsage.js';
import watchUsageImg from "../../../assets/Untitled-1 2.png"
import watchUsageImgTwo from "../../../assets/Rectangle 39890.png"
import "../HomeSections/styles/thirdSection.css"

const ThirdSection = () => {
    const { Text } = Typography
  return (
    <Col span={24} className='third-section-main-col'>
        <Col span={14}>
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
            <Button className="buy-now-pri-btn btn-watch-usage" type="primary">
              Buy Now
            </Button>
        </Col>


        <Col span={10} className='usage-image-two-col' />
    </Col>
  )
}

export default ThirdSection