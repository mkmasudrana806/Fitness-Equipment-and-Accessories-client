import React, { useState } from "react";
import { Col } from "antd";
import { NavLink } from "react-router-dom";

interface OverlayImageCardProps {
  imageUrl: string;
  categoryName: string;
}

const Category: React.FC<OverlayImageCardProps> = ({
  imageUrl,
  categoryName,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NavLink to={"/products"}>
      <Col
        style={categoryStyle}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div style={imageContainerStyle}>
          <img
            style={{
              ...imageStyle,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
            src={imageUrl}
            alt={categoryName}
          />
          <div style={imageOverlayStyle} />
          <div style={categoryTitleStyle}>{categoryName}</div>
        </div>
      </Col>
    </NavLink>
  );
};

export default Category;

const categoryStyle: React.CSSProperties = {
  position: "relative",
  width: " 300px",
  height: " 300px",
  overflow: " hidden",
  borderRadius: "8px",
};

const imageContainerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
};

const imageOverlayStyle: React.CSSProperties = {
  position: "absolute",
  bottom: " 0",
  left: " 0",
  right: " 0",
  height: "100%",
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
  zIndex: "1",
};

const categoryTitleStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "15%",
  left: "50%",
  transform: "translate(-50%, 50%)",
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
  zIndex: "2",
  textAlign: "center",
};
