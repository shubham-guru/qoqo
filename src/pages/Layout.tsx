import React from "react";
import { Row, Col } from "antd";
import MainMenu from "../presentation/components/Menu/MainMenu";

type ILayout = {
  Component: any;
};

const Layout: React.FC<ILayout> = ({Component}) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <MainMenu />
        </Col>
        <Col span={24}>
          <Component />
        </Col>
      </Row>
    </>
  );
};

export default Layout;
