import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  rating?: string;
  comment?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ReviewForm = () => (
  <Form
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Rating"
      name="rating"
      rules={[{ required: true, message: "Please input your rating!" }]}
    >
      <Input style={{ width: "300px" }} type="number" />
    </Form.Item>

    <Form.Item<FieldType> label="Comment" name="comment">
      <Input style={{ width: "300px" }} />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" ghost>
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default ReviewForm;
