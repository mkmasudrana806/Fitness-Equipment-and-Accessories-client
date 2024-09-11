import { useState } from "react";
import cartImg from "../../assets/images/gymPerson11.png";
import { Avatar, Button } from "antd";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Cart = () => {
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
    <Product>
      {/* product image part with some details  */}
      <ProductImg className="cart-img">
        <div className="img-container">
          <img src={cartImg} alt="" />
        </div>
        <div>
          <NavLink
            style={{ fontSize: "1.1rem", fontWeight: "bold" }}
            to={"/product/1"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            deleniti!
          </NavLink>
          <p style={{ marginTop: "8px" }}>$500</p>
        </div>
      </ProductImg>
      {/* product quantity count  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "16px",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        <ProductQuantityCount>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>{quantity}</Button>
          <Button onClick={decrement}>-</Button>
        </ProductQuantityCount>
        <p>$500</p>
        <Avatar className="delete-cart" icon={<DeleteOutlined />} />
      </div>
    </Product>
  );
};

export default Cart;

const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding-right: 18px;
  .delete-cart {
    cursor: pointer;
    background-color: #f79f9f;
    min-width: 32px;
    &:hover {
      background-color: #fc9191;
    }
  }
`;
// product image section
const ProductImg = styled.div`
  display: flex;
  column-gap: 8px;
  width: 60%;
  .img-container {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    background-color: green;
    overflow: hidden;
    object-fit: cover;
    // 768px to 992px hide image
  }
  h1 {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 676px) {
    .img-container {
      display: none;
    }
    h1 {
      -webkit-line-clamp: 1; /* Number of lines */
      line-clamp: 1;
      font-size: 1rem;
    }
    padding: 8px;
  }
`;
// product quantity increment decrement
const ProductQuantityCount = styled.div`
  display: flex;
  align-items: center;
  button {
    min-width: 32px;
    max-width: 32px;
    border: none;
    border-radius: 0px;
    font-size: 1rem;
  }
`;
