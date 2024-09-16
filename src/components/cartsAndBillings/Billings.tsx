import { Button } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";

const Billings = () => {
  // redux
  const carts = useAppSelector((state) => state.carts.items);

  const subTotal = carts.reduce(
    (amount, cart) => amount + cart.price * cart.quantity,
    0
  );

  const discount = subTotal * 0;
  const vat = subTotal * 0.05;
  const totalAmount = subTotal - discount + vat;

  return (
    <BillingCart>
      <h1>Bill Details</h1>
      <div>
        {/* <!-- sub total --> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>Sub Total</p>
          <p>BDT {subTotal.toFixed(2)}</p>
        </div>
        {/* <!-- Discount --> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          <p>Discount</p>
          <p>
            BDT <span>{discount.toFixed(2)}</span>
          </p>
        </div>
        {/* <!-- VAT --> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          <p>VAT</p>
          <p>BDT {vat.toFixed(2)}</p>
        </div>
        {/* <!-- Total --> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "8px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>TOTAL</p>
          <p style={{ fontWeight: "bold" }}>BDT {totalAmount.toFixed(2)}</p>
        </div>
        <PlaceOrderBtn
          type="primary"
          block
          disabled={totalAmount === 0 ? true : false}
          className="placeOrderbtn"
        >
          <NavLink to={"/checkout"}>
            {totalAmount > 0 ? "Proceed to checkout" : "no cart selected"}
          </NavLink>
        </PlaceOrderBtn>
      </div>
    </BillingCart>
  );
};

export default Billings;

// billing container
const BillingCart = styled.div`
  min-width: 300px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 16px;
  height: fit-content;
  h1 {
    margin: 8px 0px 32px 0px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`;

// place order button
const PlaceOrderBtn = styled(Button)`
  margin-top: 16px;
  background-color: #ff8b77;
  &:hover {
    background-color: tomato !important;
  }
  span {
    color: white;
  }
`;
