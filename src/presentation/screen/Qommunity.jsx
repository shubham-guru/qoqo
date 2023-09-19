import React from 'react'
import { Col, Image } from "antd";
import community from "../../assets/community.png"
import Footer from "../components/Footer/Footer.jsx"


const Qommunity = () => {
  return (
    <Col span={24}>
        <Image src={community} alt='commuity' preview={false} />
        <Footer />
    </Col>
  )
}

export default Qommunity