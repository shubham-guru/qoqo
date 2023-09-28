import React from "react";
import { Row, Col } from "antd";
import MainMenu from "../presentation/components/Menu/MainMenu.jsx";

const Layout = ({Component}) => {
  return (
    <>
      <Row>
        <Col span={24} style={{zIndex: 100}}>
          {/* <MainMenu /> */}
        </Col>
        <Col span={24}>
          <Component />
        </Col>
      </Row>
    </>
  );
};

export default Layout;
