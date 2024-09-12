import { Button, Layout } from "antd";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import HeaderNavlinks from "./HeaderNavlinks";
import HeaderNavlinkDrawer from "./HeaderNavlinkDrawer";
import UserProfileDrawer from "./UserProfileDrawer";
const { Header } = Layout;

const HeaderCom = () => {
  // redux
  // react
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  // show navlinks drawer
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  // close navlinks drawer
  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  // show user profile drawer
  const showProfileDrawer = () => {
    setOpenProfile(true);
  };

  // close user profile drawer
  const closeProfileDrawer = () => {
    setOpenProfile(false);
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
      <HeaderNavlinks showProfileDrawer={showProfileDrawer} />

      {/* show drawer when screen is small  */}
      <Button
        className="menu-button"
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />

      {/* navlink drawer on small screen  */}
      <HeaderNavlinkDrawer
        closeDrawer={closeDrawer}
        isDrawerVisible={isDrawerVisible}
        showProfileDrawer={showProfileDrawer}
      />
      {/* show user profile drawer  */}
      <UserProfileDrawer
        closeProfileDrawer={closeProfileDrawer}
        openProfile={openProfile}
      />
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
