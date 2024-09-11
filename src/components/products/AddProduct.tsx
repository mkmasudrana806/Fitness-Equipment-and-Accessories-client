import { Form, Input, InputNumber, Select, Switch, Button } from "antd";
const { Option } = Select;

const AddProduct = () => {
  const onFinish = (values: any) => {
    console.log("Form values: ", values);
  };

  return (
    <Form
      name="productForm"
      onFinish={onFinish}
      layout="vertical"
      style={{
        maxWidth: 600,
        marginTop: "32px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        padding: "16px",
        margin: "0 auto",
      }}
    >
      {/* Name */}
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input the product name!" }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      {/* Price */}
      <Form.Item
        label="Price"
        name="price"
        rules={[
          { required: true, message: "Please input the product price!" },
          { type: "number", min: 0, message: "Price cannot be negative" },
        ]}
      >
        <InputNumber
          placeholder="Enter product price"
          style={{ width: "100%" }}
        />
      </Form.Item>

      {/* Category */}
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please select a category!" }]}
      >
        <Select placeholder="Select a category">
          <Option value="cardio">Cardio</Option>
          <Option value="strength">Strength</Option>
          <Option value="Yoga">Yoga</Option>
          <Option value="accessories">Accessories</Option>
          <Option value="wearables">Wearables</Option>
          <Option value="recovery">Recovery</Option>
        </Select>
      </Form.Item>

      {/* Quantity */}
      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          { required: true, message: "Please input the product quantity!" },
          { type: "number", min: 0, message: "Quantity cannot be negative" },
        ]}
      >
        <InputNumber
          placeholder="Enter product quantity"
          style={{ width: "100%" }}
        />
      </Form.Item>

      {/* Featured */}
      <Form.Item
        label="Featured"
        name="featured"
        valuePropName="checked"
        rules={[{ required: true, message: "Please indicate if featured!" }]}
      >
        <Switch />
      </Form.Item>

      {/* Description */}
      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input the product description!" },
        ]}
      >
        <Input.TextArea placeholder="Enter product description" rows={4} />
      </Form.Item>

      {/* Product Image URL */}
      <Form.Item
        label="Product Image URL"
        name="productImgUrl"
        rules={[
          { required: true, message: "Please input the product image URL!" },
        ]}
      >
        <Input placeholder="Enter product image URL" />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
