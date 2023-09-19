import React, { useEffect, useState } from "react";
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

  const [routes, setRoutes] = useState({
    home: false,
    product: false,
    community: false,
    contact: false,
  });

  const linkStyle = {
    color: "#000",
  };
  const activeLinkStyle = {
    color: "red",
  };

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("first");
      if (window.location.href.includes("home")) {
        setRoutes({
          ...routes,
          home: true,
          product: false,
          community: false,
          contact: false,
        });
      } else if (window.location.href.includes("product")) {
        setRoutes({
          ...routes,
          home: false,
          product: true,
          community: false,
          contact: false,
        });
      } else if (window.location.href.includes("qo-ommunity")) {
        setRoutes({
          ...routes,
          home: false,
          product: false,
          community: true,
          contact: false,
        });
      }
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [window.location.href]);

  return (
    <Row className="header">
      <Col span={8} className="navbar-logo-container">
        <Image preview={false} className="logo" width={100} src={logo}></Image>
      </Col>
      <Col span={8} className="navbar-items-container">
        <Link
          className="navbar-item"
          style={routes.home ? activeLinkStyle : linkStyle}
          onClick={() => navigate("/home")}
        >
          Home
        </Link>
        <Link
          className="navbar-item"
          style={routes.home ? activeLinkStyle : linkStyle}
          onClick={() => navigate("/about-us")}
        >
          About us
        </Link>
        <Link
          className="navbar-item"
          style={routes.product ? activeLinkStyle : linkStyle}
          onClick={() => navigate("/product")}
        >
          Product
        </Link>
        <Link
          className="navbar-item"
          style={routes.community ? activeLinkStyle : linkStyle}
          onClick={() => navigate("/qo-community")}
        >
          Qocommunity
        </Link>
        <Link
          className="navbar-item"
          style={routes.contact ? activeLinkStyle : linkStyle}
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Contact
        </Link>
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
