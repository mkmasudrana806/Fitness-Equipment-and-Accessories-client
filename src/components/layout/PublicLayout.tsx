import { Layout } from "antd";
import "../../styles/publicLayout.css";
import HeaderCom from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import CheckOutPage from "../../pages/user/CheckOutPage";
const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout className="layout-container">
      <HeaderCom />
      <Content style={{ backgroundColor: "white" }}>
        {/* <Outlet /> */}
        <CheckOutPage />
      </Content>
      <Footer />
    </Layout>
  );
};

export default PublicLayout;
