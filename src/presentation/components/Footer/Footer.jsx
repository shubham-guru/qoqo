import React from 'react'
import { Col, Typography, Image, Button, Row, Divider } from "antd";
import footerImg from "../../../assets/Logo.png"
import { footerIcon } from '../../../domain/footerIcons';
import footerImg2 from "../../../assets/footerImg.png";
 
import "../Footer/footer.css"

const Footer = () => {
    const { Text, Title, Link } = Typography

  return (
    <Row className='footer-main-row'>
        <Col span={24} style={{display: 'flex', padding: '5%'}}>
            <Col xs={0} lg={8}>
                <Image src={footerImg} style={{marginBottom: "30px"}} width={100} alt='logo' preview={false} /> <br />
                <Text className='footer-text'>Lorem Ipsum is simply <br /> dummy text of the printing.</Text> <br />
                <Col style={{display: 'flex'}}>
                {
                    footerIcon.map((item, index) => {
                        return(
                            <div className='icon-col'>
                                <Image key={index} src={item} className='social-icons' alt='social-icon' preview={false} />
                            </div>
                        )
                    })
                }
                </Col>

            </Col>

            <Col xs={24} lg={8} style={{display:"flex"}}>
                <Col className='quick-links-col' xs={12} lg={20}>
                    <Title level={4} className='quick-link-head'>Quick Links</Title>
                    <Col className='quick-link-links-col'>
                        <Link className='quick-links'>Home</Link>
                        <Link className='quick-links'>Products</Link>
                        <Link className='quick-links'>QoCommunity</Link>
                        <Link className='quick-links'>Contuct Us</Link>
                    </Col>
                </Col>

                <Col className='quick-links-col' xs={12} lg={20}>
                    <Title level={4} className='quick-link-head'>Contact Us</Title>
                    <Col className='quick-link-links-col'>
                        <Link className='quick-links'>info@qoqo.com </Link>
                        <Link className='quick-links'>B38, Old DLF Colony,  <br />Sec 14, Gurgaon, Haryana, 122001</Link>
                        <Link className='quick-links'>www.qoqotech.in</Link>
                    </Col>
                </Col>
            </Col>

            <Col span={8} className='footer-img-2-col'>
                <Image width={200} src={footerImg2} alt='footer-img' preview={false} />
            </Col>
        </Col>

        <Divider orientation='center' className='divider' />
        <Text className='copyright-text'>Copyright 2023, QOQO Smart Watch</Text>
    </Row>
  )
}

export default Footer