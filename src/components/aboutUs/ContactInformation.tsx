import React from "react";
import { Card, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ContactInformation: React.FC = () => {
  return (
    <Card
      style={{
        margin: "32px auto",
        maxWidth: "800px",
        padding: "16px",
      }}
    >
      <Title level={1} style={{ textAlign: "center" }}>
        Contact Us
      </Title>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Paragraph>
          <EnvironmentOutlined /> Address: 123 Main Street, Suite 500,
          Cityville, Country
        </Paragraph>
        <Paragraph>
          <PhoneOutlined /> Phone: +123 456 7890
        </Paragraph>
        <Paragraph>
          <MailOutlined /> Email: contact@company.com
        </Paragraph>
        <Paragraph style={{ textAlign: "center", marginTop: "20px" }}>
          For any questions or feedback, feel free to reach out to us. We are
          here to help!
        </Paragraph>
      </Space>
    </Card>
  );
};

export default ContactInformation;





