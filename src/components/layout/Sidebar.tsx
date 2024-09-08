import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import sidebarGenerator from "../utils/sidebarGenerator";
import { adminPaths } from "../routes/admin.routes";
import { userPaths } from "../routes/user.routes";

const userRole = {
  admin: "admin",
  user: "user",
};

const Sidebar = () => {
  // const user = useAppSelector((state) => state.auth.user);
  // console.log("user: ", user);
  const user = { role: "user" };
  let sidebarItems;
  switch (user!.role) {
    case userRole.admin:
      sidebarItems = sidebarGenerator(adminPaths, userRole.admin);
      break;
    case userRole.user:
      sidebarItems = sidebarGenerator(userPaths, userRole.user);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <h3
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        GymBolt
      </h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
