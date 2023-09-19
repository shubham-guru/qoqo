import React from "react";
import "../AboutSections/styles/SecondSection.css";
import { Col, Row, Typography, Image } from "antd";
import sWatch from "../../../assets/swatch.png";

const AboutSecTwo = () => {
  const { Text } = Typography;
  return (
    <>
      <Row style={{ marginTop: "200px" }}>
        <Col span={12}>
          <div className="about-second-right">
            <div className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="752"
                height="617"
                viewBox="0 0 752 617"
                fill="none"
              >
                <path
                  d="M751.843 0.547664C724.167 13.8131 686.237 26.8165 656.975 29.312L695.44 46.54L482.101 202.721L127.618 218.654L-365 542.826L-55.8157 616.76L162.229 401.807L522.695 290.056L707.763 58.4463L726.315 96.2755C727.817 66.9601 739.526 28.6477 751.843 0.547664Z"
                  fill="#DC4437"
                />
              </svg>
            </div>
            <div className="left">
              <Image width={350} height={350} src={sWatch} preview={false} />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="img-content">
            <Text className="title">Vision</Text>
            <Text className="sub-title">
              To be the global leaders in the AI-iot segment
            </Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutSecTwo;
