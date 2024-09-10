import { Form, Input } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const BillingAddress = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
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
      <Form.Item name="name" label="Name" >
        <Input />
      </Form.Item>
      {/* email field  */}
      <Form.Item name="email" label="Email" >
        <Input />
      </Form.Item>
      {/* contact no field  */}
      <Form.Item
        name="contactNo"
        label="Contact No"
        
      >
        <Input />
      </Form.Item>
      {/* delivery address field  */}
      <Form.Item
        name="address"
        label="Billing address"
        
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default BillingAddress;
