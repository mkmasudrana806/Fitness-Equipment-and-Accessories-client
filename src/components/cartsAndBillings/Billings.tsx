import { Button } from "antd";
import styled from "styled-components";

const Billings = () => {
  const subTotal = 0;
  // const subTotal = carts.reduce(
  //   (amount, cart) => amount + cart.price * cart.quantity,
  //   0
  // );

  const discount = subTotal * 0.1;
  const vat = subTotal * 0.05;
  const totalAmount = subTotal - discount + vat + 10;

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
          <p>BDT {subTotal}</p>
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
            BDT <span>{discount}</span>
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
          <p>BDT {vat}</p>
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
          <p style={{ fontWeight: "bold" }}>BDT {totalAmount}</p>
        </div>
        <PlaceOrderBtn
          type="primary"
          block
          disabled={totalAmount === 0 ? true : false}
          className="placeOrderbtn"
        >
          {totalAmount > 0 ? "Proceed to checkout" : "no cart selected"}
        </PlaceOrderBtn>
      </div>
    </BillingCart>
  );
};

export default Billings;

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
  span {
    color: white;
  }
`;
