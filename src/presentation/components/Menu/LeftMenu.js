import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item className="menu-item" key="home">Home</Menu.Item>
      <Menu.Item className="menu-item" key="about">About us</Menu.Item>
      <Menu.Item className="menu-item" key="product">Products</Menu.Item>
      <Menu.Item className="menu-item" key="qommunity">Qommunity</Menu.Item>
      <Menu.Item className="menu-item" key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;