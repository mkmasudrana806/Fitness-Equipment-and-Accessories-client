import { Layout } from "antd";
import "../../styles/publicLayout.css";
import HeaderCom from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import ProductDetailsPage from "../../pages/public/ProductDetailsPage";
const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout className="layout-container">
      <HeaderCom />
      <Content style={{ backgroundColor: "white" }}>
        {/* <Outlet /> */}
        <ProductDetailsPage />
      </Content>
      <Footer  />
    </Layout>
  );
};

export default PublicLayout;
