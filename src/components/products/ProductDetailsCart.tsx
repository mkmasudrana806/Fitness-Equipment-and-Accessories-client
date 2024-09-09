import styled from "styled-components";
import productImg from "../../assets/images/benefit4.png";
import { Button, Input } from "antd";
import { useState } from "react";

const ProductDetailsCart = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <ProductContainer>
      <ProductDetails>
        <div>
          <img src={productImg} alt="" />
        </div>
        <ProductInfo className="product-info">
          <h1 className="product-title">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </h1>
          <p className="product-price">$500</p>
          <h3>Category</h3>
          {/* product quantity count  */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "16px",
              marginTop: "16px",
            }}
          >
            <ProductQuantityCount>
              <Button onClick={increment}>+</Button>
              <Input type="number" min={1} value={quantity} name="" id="" />
              <Button onClick={decrement}>-</Button>
            </ProductQuantityCount>
            <p style={{ color: "green" }}>In Stock</p>
          </div>

          {/* add to cart or buy  */}
          <Buttons>
            <Button type="primary" shape="round">
              Add to cart
            </Button>
            <Button type="primary" shape="round">
              Buy Now
            </Button>
          </Buttons>
        </ProductInfo>
      </ProductDetails>
      <div className="product-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, magni.
        Ducimus reprehenderit fugiat error eligendi tempore incidunt neque
        temporibus quidem.
      </div>
    </ProductContainer>
  );
};

export default ProductDetailsCart;

// product details
const ProductContainer = styled.div``;

// product details
const ProductDetails = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  gap: 16px;
  > div {
    width: 50%;
  }
  .product-info {
    width: 50%;
  }
  img {
    width: 100%;
  }
`;

// product info
const ProductInfo = styled.div`
  .product-title {
    font-size: 1.5rem;
  }
  .product-price {
    color: orange;
    font-size: 1.2rem;
    margin: 8px 0px;
    font-weight: bold;
  }
`;
// product quantity increment decrement
const ProductQuantityCount = styled.div`
  display: flex;
  align-items: center;
  button {
    min-width: 32px;
    max-width: 32px;
    border-radius: 0px;
  }
  input {
    min-width: 50px;
    max-width: 60px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
`;

// add to cart to buy now buttons
const Buttons = styled.div`
  margin-top: 16px;
  span {
    color: white;
  }
  button:nth-child(1) {
    margin-right: 8px;
  }
`;
