import React from "react";
import { Menu, Typography } from "antd";

const { Link } = Typography

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item className="menu-item" key="home">
        <Link href="/home">Home</Link>
      </Menu.Item>
      <Menu.Item className="menu-item" key="about">
        <Link href="/about-us">About us</Link>
      </Menu.Item>
      <Menu.Item className="menu-item" key="product">
        <Link href="/product">Products</Link>
      </Menu.Item>
      <Menu.Item className="menu-item" key="qommunity">
        <Link href="/qo-ommunity">Qommunity</Link>
      </Menu.Item>
      <Menu.Item className="menu-item" key="contact">
        <Link>Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;