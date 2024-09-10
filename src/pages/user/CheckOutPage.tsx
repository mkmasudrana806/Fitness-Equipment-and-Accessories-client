import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";

import BillingAddress from "../../components/checkout/BillingAddress";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import PaymentMethods from "../../components/checkout/PaymentMethods";

// checkout page components
const CheckOutPage = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [processCompleted, setProcessCompleted] = useState(false);
  const [shippingAddressCompleted, setShippingAddressCompleted] =
    useState(true);

  // handle next
  const next = () => {
    setCurrent(current + 1);
    setShippingAddressCompleted(false);
  };

  // handle previous
  const prev = () => {
    setCurrent(current - 1);
    if (current !== 2) {
      setShippingAddressCompleted(true);
    }
  };

  // handle done
  const handleDone = () => {
    message.success("Processing complete!");
    setProcessCompleted(true);
  };

  // handle shipping address submit
  const handleShippingSubmit = () => {
    setCurrent(current + 1);
  };

  // steps
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
      content: <PaymentMethods />,
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
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      {/* steps switch button  */}
      {processCompleted ? (
        <Button type="primary">Place Order</Button>
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
    </>
  );
};

export default CheckOutPage;
