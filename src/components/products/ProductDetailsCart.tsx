import styled from "styled-components";
import productImg from "../../assets/images/benefit4.png";
import { Button, Input } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductDetailsCart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  // Handler to increment the quantity
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handler to decrement the quantity
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Handler to allow manual input in the input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1); // Ensures value doesn't go below 1
    }
  };

  return (
    <ProductContainer>
      <ProductDetails>
        {/* product image  */}
        <div>
          <img src={productImg} alt="" />
        </div>
        {/* product information  */}
        <ProductInfo className="product-info">
          <h1 className="product-title">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </h1>
          <p className="product-price">$500</p>
          <h3>Category</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "16px",
              marginTop: "16px",
            }}
          >
            {/* product quantity count  */}
            <ProductQuantityCount>
              <Button onClick={decrement}>-</Button>
              <Input
                type="number"
                min={1}
                value={quantity}
                onChange={handleInputChange}
                style={{ width: "60px", textAlign: "center" }}
              />

              <Button onClick={increment}>+</Button>
            </ProductQuantityCount>
            <p style={{ color: "green" }}>In Stock</p>
          </div>

          {/* add to cart or buy  */}
          <Buttons>
            <Button type="primary" shape="round">
              Add to cart
            </Button>
            <NavLink to={"/checkout"}>
              <Button type="primary" shape="round">
                Buy Now
              </Button>
            </NavLink>
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
const ProductContainer = styled.div`
  margin-top: 16px;
`;

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
  // media query 768px
  @media screen and (max-width: 768px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
    .product-info {
      width: 100%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 869px) {
    .product-info {
      .product-title {
        font-size: 1.2rem;
      }
    }
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
  button {
    background-color: #fc7f68;
    &:hover {
      background-color: #fd5334 !important;
    }
  }
`;
