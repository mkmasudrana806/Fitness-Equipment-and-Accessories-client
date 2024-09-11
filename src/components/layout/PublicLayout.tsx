import { Layout } from "antd";
import "../../styles/publicLayout.css";
import HeaderCom from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import AboutUs from "../../pages/AboutUs";

const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout className="layout-container">
      <HeaderCom />
      <Content style={{ backgroundColor: "white" }}>
        {/* <Outlet /> */}
        <AboutUs />
      </Content>
      <Footer />
    </Layout>
  );
};

export default PublicLayout;
