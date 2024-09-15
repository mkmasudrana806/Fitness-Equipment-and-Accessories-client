import styled from "styled-components";
import { Button, Input } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TProduct } from "../../types/productType";

const ProductDetailsCart = ({ product }: { product: TProduct }) => {
  const { category, description, name, price, productImgUrl, quantity } =
    product;
  const [cartQuantity, setQuantity] = useState<number>(1);

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
        <div className="product-img-container">
          <img src={productImgUrl} alt="" />
        </div>
        {/* product information  */}
        <ProductInfo className="product-info">
          <h1 className="product-title">{name}</h1>
          <p className="product-price">${price}</p>
          <NavLink
            to={`/products?category=${category}`}
            className="product-category"
            style={{ fontSize: "1.2rem" }}
          >
            {category}
          </NavLink>
          {/* product quantity count  */}
          {quantity > 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "16px",
                marginTop: "16px",
              }}
            >
              <ProductQuantityCount>
                <Button onClick={decrement}>-</Button>
                <Input
                  type="number"
                  min={1}
                  value={cartQuantity}
                  onChange={handleInputChange}
                  style={{ width: "60px", textAlign: "center" }}
                />

                <Button onClick={increment}>+</Button>
              </ProductQuantityCount>
              <p style={{ color: "green" }}>In Stock</p>
            </div>
          ) : (
            <p style={{ color: "tomato" }}>Out of Stock</p>
          )}

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
      <div className="product-description">{description}</div>
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
  .product-img-container {
 
    max-height: 400px;
    object-fit: cover;
    overflow: hidden;
  }
  .product-img-container,
  .product-info {
    width: 50%;
  }
  img {
    width: 100%;
  }
  // media query 768px
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .product-img-container,
    .product-info {
      width: 100%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 869px) {
    .product-info {
      .product-title {
        font-size: 1.5rem;
      }
      .product-price {
        font-size: 1.2rem;
      }
    }
  }
`;

// product info
const ProductInfo = styled.div`
  .product-title {
    font-size: 2rem;
  }
  .product-category {
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }
  .product-price {
    color: orange;
    font-size: 1.3rem;
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
