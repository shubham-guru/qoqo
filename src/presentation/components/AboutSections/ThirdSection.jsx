import React from "react";
import "../AboutSections/styles/ThirdSection.css";
import { Col, Row, Typography, Image } from "antd";
import sThreeWatch from "../../../assets/sthreewatch.png";
import sThree from "../../../assets/sthree.png";

const AboutSecThird = () => {
  const { Text } = Typography;
  return (
    <>
      <Row
        style={{
          marginTop: "-300px",
          displa: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col span={7}>
          <div className="img-content">
            <Text className="title">Mission</Text>
            <Text className="sub-title">
              Improving lives with intuitive technology and seamless designs
            </Text>
          </div>
        </Col>
        <Col span={7}>
          <div className="about-third-right">
            <div className="right">
              <Image width={600} height={600} src={sThree} preview={false} />
              <Image
                width={350}
                height={350}
                src={sThreeWatch}
                preview={false}
                className="inner-img"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutSecThird;
