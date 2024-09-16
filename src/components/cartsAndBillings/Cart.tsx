import { Avatar, Button, message, Popconfirm } from "antd";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { TCartItem } from "../../types/cartsType";
import { useDispatch } from "react-redux";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  removeCart,
} from "../../redux/features/carts/cartsSlice";

const Cart = ({ cart }: { cart: TCartItem }) => {
  // redux
  const dispatch = useDispatch();

  // ------ handle increment cart quantity
  const increment = (_id: string) => {
    dispatch(incrementCartQuantity(_id));
  };

  // ------ handle decrement cart quantity
  const decrement = (_id: string) => {
    dispatch(decrementCartQuantity(_id));
  };

  // remove a cart
  const removeACart = (_id: string) => {
    dispatch(removeCart(_id));
    message.success("Item removed successfull");
  };
  return (
    <Product>
      {/* product image part with some details  */}
      <ProductImg className="cart-img">
        <div className="img-container">
          <img src={cart.productImgUrl} alt="" />
        </div>
        <div className="cart-info">
          <NavLink to={`/product/${cart._id}`}>{cart?.name}</NavLink>
          <p style={{ marginTop: "8px" }}>${cart?.price}</p>
        </div>
      </ProductImg>
      {/* product quantity count  */}
      <div className="cart-counter-section">
        <ProductQuantityCount>
          <Button onClick={() => increment(cart?._id)}>+</Button>
          <Button>{cart?.quantity}</Button>
          <Button onClick={() => decrement(cart?._id)}>-</Button>
        </ProductQuantityCount>
        <p>${(cart?.quantity * cart?.price).toFixed(2)}</p>
        <Popconfirm
          title="Are you sure to delete?"
          description="deleted item will not appear in the cart"
          onConfirm={() => removeACart(cart?._id)}
          okText="Yes"
          cancelText="No"
        >
          <Avatar className="delete-cart" icon={<DeleteOutlined />} />
        </Popconfirm>
      </div>
    </Product>
  );
};

export default Cart;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding-right: 18px;
  .cart-info {
    padding: 4px;
    a {
      &:hover {
        text-decoration: underline;
        color: #ff8069;
      }
    }
  }
  .cart-counter-section {
    display: flex;
    align-items: center;
    column-gap: 16px;
    justify-content: space-between;
  }
  @media screen and (max-width: 400px) {
    padding-right: 8px;
    .cart-counter-section {
      column-gap: 8px;
    }
  }
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
  max-width: 60%;
  .img-container {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    background-color: green;
    overflow: hidden;
    object-fit: cover;
    // 768px to 992px hide image
    img {
      width: 100%;
      height: 100%;
    }
  }

  .cart-info {
    a {
      font-size: 1.1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Number of lines */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media screen and (max-width: 676px) {
    .img-container {
      display: none;
    }
    .cart-info {
      a {
        font-size: 16px !important;
        font-weight: 400 !important;
        -webkit-line-clamp: 1 !important;
        line-clamp: 1 !important;
      }
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
  @media screen and (max-width: 400px) {
    button {
      min-width: 16px;
      max-width: 16px;
    }
  }
`;
