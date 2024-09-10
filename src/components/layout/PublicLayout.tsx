import { Layout } from "antd";
import "../../styles/publicLayout.css";
import HeaderCom from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import ProductsManagementPage from "../../pages/admin/ProductsManagementPage";

const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout className="layout-container">
      <HeaderCom />
      <Content style={{ backgroundColor: "white" }}>
        {/* <Outlet /> */}
        <ProductsManagementPage />
      </Content>
      <Footer />
    </Layout>
  );
};

export default PublicLayout;
