import FeatruedProductCard from "../FeaturedProductCard";
import styled from "styled-components";

const RelatedProducts = () => {
  return (
    <div style={{ marginTop: "32px" }}>
      <h1 style={{ fontSize: "2.5rem" }}>You may alos like</h1>
      <RelatedProductsContainer>
        <FeatruedProductCard />
        <FeatruedProductCard />
        <FeatruedProductCard />
        <FeatruedProductCard />
      </RelatedProductsContainer>
    </div>
  );
};

export default RelatedProducts;

const RelatedProductsContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
