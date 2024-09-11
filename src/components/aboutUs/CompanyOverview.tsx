import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const CompanyOverview = () => {
  return (
    <Card style={{ margin: "20px auto", maxWidth: "800px" }}>
      <h1
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "16px" }}
      >
        About Us
      </h1>
      <p style={{ fontSize: "1.1rem", marginTop: "16px" }}>
        Our company was founded with the mission to provide the highest quality
        products and services to our customers. Over the years, we have expanded
        our offerings and continually strive for innovation and excellence.
      </p>
      <p style={{ fontSize: "1.1rem", marginTop: "16px" }}>
        <strong>Mission:</strong> To revolutionize the industry by focusing on
        customer satisfaction, quality, and sustainability.
      </p>
      <p style={{ fontSize: "1.1rem", marginTop: "16px" }}>
        <strong>Vision:</strong> To be a global leader, known for our commitment
        to our customers and the communities we serve.
      </p>
    </Card>
  );
};

export default CompanyOverview;
