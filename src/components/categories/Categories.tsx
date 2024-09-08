import { Col, Row } from "antd";
import Category from "./CategoryCart";
import logo from "../../assets/images/hero.jpg";

const Categories = () => {
  return (
    <Row style={{ margin: "50px 0px" }}>
      <h1 style={{ fontSize: "2.5rem" }}>Made for your life</h1>
      <Col style={{ marginTop: "30px" }} span={24}>
        <Row gutter={16}>
          <Category categoryName="Hello" key={1} imageUrl={logo} />
          <Category categoryName="Hello" key={1} imageUrl={logo} />
          <Category categoryName="Hellsdfsdfdsfdsfo" key={1} imageUrl={logo} />
          <Category categoryName="Hello" key={1} imageUrl={logo} />
        </Row>
      </Col>
    </Row>
  );
};

export default Categories;
