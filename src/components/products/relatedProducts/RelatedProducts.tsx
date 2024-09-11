import ProductCard from "../ProductCard";
import styled from "styled-components";

const RelatedProducts = () => {
  return (
    <div style={{ marginTop: "32px" }}>
      <h1 style={{ fontSize: "2.5rem" }}>You may alos like</h1>
      <RelatedProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </RelatedProductsContainer>
    </div>
  );
};

export default RelatedProducts;

// related products containers
const RelatedProductsContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  .product {
    min-width: 180px;
    max-width: 250px;
    height: 270px;
    .img-container {
      height: 120px;
    }
    .info {
      .category {
        font-size: 0.8rem;
      }
      .title {
        font-size: 1.1rem;
      }
    }
  }

  // responsive
  @media screen and (min-width: 868px) and (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  // responsive
  @media screen and (min-width: 768px) and (max-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // responsive
  @media screen and (min-width: 576px) and (max-width: 768px) {
    .product {
      max-width: fit-content;
      height: 300px;
      .img-container {
        height: 150px;
      }
    }
    grid-template-columns: repeat(2, 1fr);
  }

  // responsive
  @media screen and (min-width: 324px) and (max-width: 576px) {
    display: block;
    .product {
      min-width: 100%;
      max-width: 100%;
      height: fit-content;
      display: flex;
      margin-bottom: 16px;
      .product-cart-footer {
        div:nth-child(1) {
          display: flex;
          column-gap: 32px;
        }
        .details {
          display: none;
        }
      }
    }
  }
`;
