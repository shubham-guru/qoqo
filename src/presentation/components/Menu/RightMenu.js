import React from "react";
import { Menu, Avatar, Image } from "antd";
import searchIcon from "../../../assets/Search.svg"
import userIcon from "../../../assets/Profile.svg"
import cartIcon from "../../../assets/Bag.svg"


const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item className="menu-item" key="search">
        <Image src={searchIcon} alt="search-icon" preview={false} />
      </Menu.Item>
      <Menu.Item className="menu-item" key="user">
        <Image src={userIcon} alt="user-icon" preview={false} />
      </Menu.Item>
      <Menu.Item className="menu-item" key="cart">
        <Image src={cartIcon} alt="cart-icon" preview={false} />  
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;