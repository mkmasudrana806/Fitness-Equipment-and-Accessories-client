import { Button, Drawer, Layout, Menu, Space, Typography } from "antd";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderCom = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <Header style={headerStyles}>
      <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
        <img src={logo} style={{ height: "32px", width: "32px" }} alt="" />
        <h2> GymBolt</h2>
      </div>

      {/* header nav links  */}
      <Space
        className="nav-links"
        size={"middle"}
        style={{ marginLeft: "16px" }}
      >
        <Typography>Home</Typography>
        <Typography>Products</Typography>
        <Typography>Testimonials</Typography>
        <Typography>About Us</Typography>
        <Typography>Contact Us</Typography>
        <Typography>Login</Typography>
      </Space>

      {/* show drawer when screen is small  */}
      <Button
        className="menu-button"
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="GymBolt"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
      >
        <Menu mode="vertical" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="products">Products</Menu.Item>
          <Menu.Item key="products">Testimonials</Menu.Item>
          <Menu.Item key="products">About Us</Menu.Item>
          <Menu.Item key="products">Contact Us</Menu.Item>
          <Menu.Item key="login">Login</Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default HeaderCom;

// header styles
const headerStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px",
  backgroundColor: "white",
};
