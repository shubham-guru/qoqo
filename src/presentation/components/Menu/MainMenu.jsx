import React from "react";
import { Row, Col, Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import bagIcon from "../../../assets/Bag.svg";
import userIcon from "../../../assets/Profile.svg";
import searchIcon from "../../../assets/Search.svg";
import logo from "../../../assets/Logo.png";
import "./menu.css";

const { Link } = Typography;

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <Row className="header">
      <Col span={8} className="navbar-logo-container">
        <Image preview={false} className="logo" width={100} src={logo}></Image>
      </Col>
      <Col span={8} className="navbar-items-container">
        <Link className="navbar-item" onClick={() => navigate("/home")}>
          Home
        </Link>
        <Link className="navbar-item" onClick={() => navigate("/product")}>
          Product
        </Link>
        <Link className="navbar-item">Qocommunity</Link>
        <Link className="navbar-item">Contact</Link>
      </Col>
      <Col span={8} className="navbar-icons-container">
        <Image
          preview={false}
          src={searchIcon}
          width={18}
          className="navbar-icons"
        ></Image>
        <Image
          preview={false}
          src={userIcon}
          width={16}
          className="navbar-icons"
        ></Image>
        <Image
          preview={false}
          src={bagIcon}
          width={18}
          className="navbar-icons"
        ></Image>
      </Col>
    </Row>
  );
};

export default MainMenu;
