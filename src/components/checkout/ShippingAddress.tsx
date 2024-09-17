import { Button, Form, Input, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentOrder } from "../../redux/features/orders/orderSlice";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface Props {
  handleShippingSubmit: () => void;
}

// ---------- Shipping address component
const ShippingAddress: React.FC<Props> = ({ handleShippingSubmit }) => {
  // redux
  const dispatch = useAppDispatch();
  const shippingAddress = useAppSelector(
    (state) => state.orders.currentOrder?.shippingAddress
  );
  // react
  const [form] = Form.useForm();

  // --------- submit the form
  const onFinish = (values: any) => {
    handleShippingSubmit();
    dispatch(setCurrentOrder({ shippingAddress: values }));
  };

  // -------- reset the form
  const onReset = () => {
    form.resetFields();
  };

  // --------- auto fill up the form with the previous values
  const onFill = () => {
    form.setFieldsValue(shippingAddress);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      {/* name field  */}
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input type="text" />
      </Form.Item>
      {/* email field  */}
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input type="email" />
      </Form.Item>
      {/* contact no field  */}
      <Form.Item name="contact" label="Contact No" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      {/* delivery address field  */}
      <Form.Item
        name="address"
        label="Shipping address"
        rules={[{ required: true }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ShippingAddress;
