import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Image } from "antd";
import LeftMenu from "./LeftMenu.js";
import RightMenu from "./RightMenu.js";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/Logo.png"
import "./styles/menu.css"

const MainMenu = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <Image src={logo} className="brand-font" alt="logo"  preview={false}/>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu" style={{width:"50%"}}>
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={<Image src={logo} className="brand-font" width={100} alt="logo"  preview={false}/>}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default MainMenu;