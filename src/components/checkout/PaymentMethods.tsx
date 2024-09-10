import { Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";

// PaymentMethods
const PaymentMethods = () => {
  const [value, setValue] = useState("stripe");

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio defaultChecked={true} value={"cod"}>
          Cash On Delivery
        </Radio>
        <Radio value={"stripe"}>Stripe</Radio>
      </Space>
    </Radio.Group>
  );
};

export default PaymentMethods;
