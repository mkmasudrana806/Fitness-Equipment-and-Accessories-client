import { Layout } from "antd";
import "../../styles/publicLayout.css";
import HeaderCom from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
const { Content } = Layout;

const PublicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Layout className="layout-container">
        <HeaderCom />
        <Content style={{ backgroundColor: "white" }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default PublicLayout;
