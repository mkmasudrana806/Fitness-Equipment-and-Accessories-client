import { Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";

// Accept value and onChange as props
interface Props {
  value: string;
  onChange: (value: string) => void;
}

// PaymentMethods
const PaymentMethods: React.FC<Props> = ({ value, onChange }) => {
  const handleOnChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group onChange={handleOnChange} value={value}>
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
