import { Button, Drawer, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
      <NavLink
        to={"/"}
        style={{ display: "flex", alignItems: "center", columnGap: "16px" }}
      >
        <img
          src={logo}
          style={{ height: "48px", minWidth: "48px", maxWidth: "48px" }}
          alt=""
        />
        <h1 style={{ fontSize: "1.5rem" }}> GymBolt</h1>
      </NavLink>

      {/* header nav links  */}
      <HeaderNavlinks
        className="nav-links"
        size={"middle"}
        style={{ marginLeft: "16px" }}
      >
        <p>Home</p>
        <p>Products</p>
        <p>Testimonials</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Login</p>
      </HeaderNavlinks>

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

// header navlinks
const HeaderNavlinks = styled(Space)`
  p {
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: tomato;
      text-decoration: underline;
    }
  }
`;
