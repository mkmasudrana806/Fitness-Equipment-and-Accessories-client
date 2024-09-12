import { Row, Col, Typography } from "antd";
import styled from "styled-components";
import companyImg from "../../assets/images/company.png";

const { Title, Paragraph } = Typography;

const CompanyOverview = () => {
  return (
    <HeroSection>
      <Row gutter={32} align="middle">
        {/* Image on the left, About Us on the right */}
        <Col xs={24} md={12}>
          <img
            src={companyImg}
            alt="Hero Image"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Col>

        <Col xs={24} md={12} className="about-text">
          {/* About Us Section */}
          <Title level={1}>About Us</Title>
          <p style={{ fontSize: "1.1rem" }}>
            We are GymBolt, your fitness partner. Our mission is to bring the
            best fitness solutions to your doorstep. we are 15+ team members in
            our company to support you our best. we care for our customers to
            give our best.
          </p>

          {/* Stats Section */}
          <div className="stats-boxes">
            {/* Box 1 */}
            <div style={{ textAlign: "center" }}>
              <Title level={2}>400+</Title>
              <Paragraph>Customers</Paragraph>
            </div>

            {/* Box 2 */}
            <div style={{ textAlign: "center" }}>
              <Title level={2}>300+</Title>
              <Paragraph>Products</Paragraph>
            </div>

            {/* Box 3 */}
            <div style={{ textAlign: "center" }}>
              <Title level={2}>150+</Title>
              <Paragraph>Locations</Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </HeroSection>
  );
};

export default CompanyOverview;

// Styled component for custom responsiveness
const HeroSection = styled.div`
  padding: 50px 20px;

  .about-text {
    padding: 20px;
  }

  .stats-boxes {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
`;
