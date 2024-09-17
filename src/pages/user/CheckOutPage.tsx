import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";

import BillingAddress from "../../components/checkout/BillingAddress";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import PaymentMethods from "../../components/checkout/PaymentMethods";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeCurrentOrder,
  setCurrentOrder,
} from "../../redux/features/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { removeAllCarts } from "../../redux/features/carts/cartsSlice";
import { useMakeAnOrderMutation } from "../../redux/features/orders/orderApi";
import { PoweroffOutlined } from "@ant-design/icons";

// checkout page components
const CheckOutPage = () => {
  // redux
  const dispatch = useAppDispatch();
  const currentOrder = useAppSelector((state) => state.orders.currentOrder);
  const user = useAppSelector((state) => state.auth.user);
  const carts = useAppSelector((state) => state.carts.items);
  const [makeAnOrder] = useMakeAnOrderMutation();

  // react
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [processCompleted, setProcessCompleted] = useState(false);
  const [shippingAddressCompleted, setShippingAddressCompleted] =
    useState(true);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  // place order button loading
  const [btnLoading, setBtnLoading] = useState(false);

  // -------- handle next button
  const next = () => {
    setCurrent(current + 1);
    setShippingAddressCompleted(false);
  };

  // -------- handle previous button
  const prev = () => {
    setCurrent(current - 1);
    if (current !== 2) {
      setShippingAddressCompleted(true);
    }
  };

  // ---------- handle done button
  const handleDone = () => {
    message.success("Processing complete!");
    setProcessCompleted(true);
    // set payment method to store
    dispatch(setCurrentOrder({ paymentMethod }));
  };

  // ------- handle shipping address submit
  const handleShippingSubmit = () => {
    setCurrent(current + 1);
  };

  // ---------- handle palce order
  const handlePlaceOrder = async () => {
    setBtnLoading(true);
    // make new order data
    const order = {
      email: user?.email,
      ...currentOrder,
      items: carts.map((cart) => ({
        productId: cart?._id,
        quantity: cart?.quantity,
        price: cart.price,
      })),
    };

    dispatch(removeCurrentOrder());
    dispatch(removeAllCarts());

    // pass order data to server
    await makeAnOrder(order);
    setBtnLoading(false);
    navigate("/user/purchase-success");
  };
  // --------- steps
  const steps = [
    {
      title: "Billing Address",
      content: <BillingAddress />,
    },
    {
      title: "Shipping Address",
      content: <ShippingAddress handleShippingSubmit={handleShippingSubmit} />,
    },
    {
      title: "Payment Methods",
      content: (
        <PaymentMethods
          value={paymentMethod}
          onChange={(value: string) => setPaymentMethod(value)}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  // steps content styles
  const contentStyle: React.CSSProperties = {
    padding: 16,
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    marginBottom: 16,
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      {/* steps switch button  */}
      {processCompleted ? (
        <Button
          icon={<PoweroffOutlined />}
          loading={btnLoading}
          onClick={handlePlaceOrder}
          type="primary"
        >
          Place Order
        </Button>
      ) : (
        <div>
          {current < steps.length - 1 && shippingAddressCompleted && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleDone}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
