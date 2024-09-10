import { Layout } from "antd";
import "../../styles/publicLayout.css";
import HeaderCom from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import CartsPage from "../../pages/user/CartsPage";
const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout className="layout-container">
      <HeaderCom />
      <Content style={{ backgroundColor: "white" }}>
        {/* <Outlet /> */}
        <CartsPage />
      </Content>
      <Footer />
    </Layout>
  );
};

export default PublicLayout;
