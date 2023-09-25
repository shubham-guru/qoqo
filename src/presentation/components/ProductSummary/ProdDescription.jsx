import React from 'react'
import { Row, Col, Typography } from 'antd'
import { CheckOutlined } from "@ant-design/icons"

import "./prodSummaryStyle/prodDescription.css"

const { Text } = Typography

const keyFeatures = [
    "1.96  Inch Large AMOLED Display 410*502 Pixels:  The bright screen ensures clarity and vividness, enhancing your interactions and visuals",
    "Full Touch Screen: Navigate with precision using the intuitive full touch screen, providing seamless control over your smartwatch's features and functions.",
    "Direct Call Functionality: Stay connected without reaching for your phone - make and receive calls directly from your smartwatch via Bluetooth connectivity.",
    "Scroll Crown for Dial Switching: Effortlessly switch watch dials using the scroll crown, adding a tactile and intuitive element to your smartwatch interaction.",
    "Bluetooth Calling: Connect seamlessly multiple devices at a time via advance tech.",
    "Social Media and Message Alerts: Stay informed and connected with real-time notifications from social media updates and messages, ensuring you're always in the loop.",
]

const healthData = [
    { title: "Blood-Oxygen Monitoring (SPO2) : ", description: " Gain insights into your oxygen levels, providing valuable information about your overall well-being." },
    { title: "Heart Rate Monitoring : ", description: " Keep track of your heart rate in real-time, promoting a healthier lifestyle and ensuring effective workouts." },
    { title: "Sedentary Alert : ", description: " Receive reminders to stay active and maintain a balanced routine" },
    { title: "IP rated water and dust resistance : ", description: " Embrace your daily activities without worry, as this smartwatch boasts IP67 certification, making it resistant to water splashes and dust." },
    { title: "Diverse Sports Modes : ", description: " With 47+ sport modes, this smartwatch caters to your diverse fitness needs, enhancing your workouts and optimizing your performance." },
    { title: "Step Pedometer : ", description: " Accurately track your steps, motivating you to maintain an active lifestyle and reach your daily goals." },
    { title: "Sleep and Calorie Monitoring : ", description: "Monitor your sleep patterns and track calorie expenditure, allowing you to make informed decisions about your well-being." },
    { title: "Stopwatch : ", description: "  Time your activities with precision using the built-in stopwatch feature, perfect for workouts and timing tasks." },
    { title: "Multiple Watch Faces : ", description: "Express your style and mood by choosing from a variety of watch face options, personalizing your smartwatch to suit any occasion." },
    { title: "Alarm & Notifications : ", description: "Set alarms and receive notifications directly on your wrist, ensuring you're always on top of your schedule and commitments." },
    { title: "Smart Calculator : ", description: "Perform quick calculations on your smartwatch, eliminating the need to reach for your phone for simple math tasks." },
    { title: "Music Control : ", description: "Manage your music playback on the go, offering convenience and entertainment at your fingertips." },
    { title: "Find My Phone : ", description: "Easily locate your phone by triggering an alert from your smartwatch." },
    { title: "Wireless Charging Support : ", description: " Charge your smartwatch wirelessly for added convenience and ease." },
    { title: "Impressive Battery Life : ", description: "" },
    { title: "Standby up to 5 Days : ", description: "Even during periods of inactivity, your smartwatch remains ready to perform." },
    { title: "Wide Compatibility : ", description: "Compatible with Android 4.4 and above, as well as iOS 8.4 and above, ensuring seamless integration with your devices." }
]



const ProdDescription = () => {
    return (
        <Row>
            <Col span={24}>
                <Text className='prod-desc-title'>Product Description</Text>
            </Col>
            <Col xs={24} lg={16} className='prod-desc-title-disc-container'>
                <Text>Bringing for you the 1.96-inch Large AMOLED Display QOQO Watch AmoLite to redefine your smartwatch experience. With its comprehensive features and elegant design, this smartwatch is designed to elevate your daily activities and keep you connected in style.</Text>
            </Col>
            <Col span={24}>
                <Text className='prod-desc-sub-title'>Key Features:</Text>
            </Col>
            {
                keyFeatures.map((item) => {
                    return (
                        <Col className='key-feature-container'>
                            <CheckOutlined className='check-icon' />
                            <Text className='key-features'>{item}</Text>
                        </Col>
                    )
                })
            }
            <Col className='health-container'>
                <Text className='prod-desc-sub-title'>Health and Wellness Monitoring:</Text>
            </Col>
            {
                healthData.map((item) => {
                    return (
                        <Col span={24} className='key-features'>
                            <Text><b>{item.title}</b>{item.description}</Text>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ProdDescription