import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

const ShowProductDetails = () => {
  // -------- redux
  const showProductData = useAppSelector(
    (state) => state.products.showProductData
  );
  // -------- react
  const [form] = Form.useForm();

  // --------- watch the showProductData
  useEffect(() => {
    if (showProductData) {
      form.setFieldsValue(showProductData);
    }
  }, [showProductData, form]);

  return (
    <Form
      form={form}
      name="productForm"
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
        <Input readOnly placeholder="Enter product name" />
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
          readOnly
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
        <Select disabled placeholder="Select a category"></Select>
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
          readOnly
          placeholder="Enter product quantity"
          style={{ width: "100%" }}
        />
      </Form.Item>

      {/* Featured */}
      <Form.Item label="Featured" name="featured" valuePropName="checked">
        <Switch disabled />
      </Form.Item>

      {/* Description */}
      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input the product description!" },
        ]}
      >
        <Input.TextArea
          readOnly
          placeholder="Enter product description"
          rows={4}
        />
      </Form.Item>

      {/* Product Image URL */}
      <Form.Item
        label="Product Image URL"
        name="productImgUrl"
        rules={[
          { required: true, message: "Please input the product image URL!" },
        ]}
      >
        <Input readOnly placeholder="Enter product image URL" />
      </Form.Item>
    </Form>
  );
};

export default ShowProductDetails;
