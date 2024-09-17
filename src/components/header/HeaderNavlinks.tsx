import { Avatar, Badge, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

type THeaderNavLinks = {
  showProfileDrawer: any;
};

const HeaderNavlinks = ({ showProfileDrawer }: THeaderNavLinks) => {
  // redux
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  // react
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <HeaderNavLinks
      style={{ alignItems: "center" }}
      className="nav-links"
      size={"middle"}
    >
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      {user?.role && (
        <NavLink to={`/${user?.role}/dashboard`}>Dashboard</NavLink>

        // <Badge offset={[5, 1]} color="#E15B40" count={5}>
        //   <NavLink to={`/${user?.role}/dashboard`}>Dashboard</NavLink>
        // </Badge>
      )}
      <NavLink to={"/about-us"}>About Us</NavLink>
      {user?.role ? (
        <>
          <LogoutOutlined onClick={handleLogout} className="logout-btn" />
          <Avatar
            onClick={showProfileDrawer}
            className="user-profile-btn"
            icon={<UserOutlined />}
          />
        </>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </HeaderNavLinks>
  );
};

export default HeaderNavlinks;

// header navlinks
const HeaderNavLinks = styled(Space)`
  a {
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: tomato;
      text-decoration: underline;
    }
  }
  .logout-btn {
    border: 3px solid gray;
    color: gray;
    height: 32px;
    width: 32px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    &:hover {
      color: tomato;
      border: 1px solid tomato;
    }
  }
  .user-profile-btn {
    cursor: pointer;
  }
`;
