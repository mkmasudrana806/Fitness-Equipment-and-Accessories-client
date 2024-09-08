import styled from "styled-components";
import FeatruedProductCard from "./FeaturedProductCard";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const FeatruedProducts = () => {
  return (
    <FeaturedProduct>
      <div className="container-title">
        <h1>Our featured products</h1>
        <Button icon={<ArrowRightOutlined />} iconPosition={"end"}>
          More
        </Button>
      </div>
      <div className="products-container">
        <FeatruedProductCard />
        <FeatruedProductCard />
        <FeatruedProductCard />
        <FeatruedProductCard />
      </div>
    </FeaturedProduct>
  );
};

export default FeatruedProducts;

const FeaturedProduct = styled.div`
  .container-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 30px;
    }
  }
  .products-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`;
