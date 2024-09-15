import {
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Button,
  message,
} from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TProduct } from "../../types/productType";
import {
  useCreateProductMutation,
  useLoadAllProductsQuery,
  useUpdateProductMutation,
} from "../../redux/features/products/productApi";
import { useEffect } from "react";
import {
  clearEditProductData,
  updateSingleProduct,
} from "../../redux/features/products/productSlice";
const { Option } = Select;

const AddProduct = () => {
  // -------- redux
  const dispatch = useAppDispatch();
  const editProductData = useAppSelector(
    (state) => state.products.editProductData
  );
  const { data: products } = useLoadAllProductsQuery({});
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();

  // -------- react
  const [form] = Form.useForm();

  // --------- watch changes for update product
  useEffect(() => {
    if (editProductData) {
      form.setFieldsValue(editProductData);
    }
  }, [editProductData, form]);

  // make categories array for select options
  const uniqueCategories = [
    ...new Set(products?.data?.map((product: TProduct) => product.category)),
  ] as string[];

  // ----------- add product or update product handler
  const onFinish = async (values: TProduct) => {
    // add product
    if (!editProductData) {
      const result = await createProduct(values).unwrap();
      if (result?.success) {
        form.resetFields();
        message.success(result?.message);
      }
    }

    // update product
    else {
      const result = await updateProduct({
        product: values,
        productId: editProductData._id,
      }).unwrap();
      dispatch(
        updateSingleProduct({
          product: result?.data,
          productId: result?.data?._id,
        })
      );
      if (result?.success) {
        dispatch(clearEditProductData());
        form.resetFields();
        message.success(result.message);
      }
    }
  };

  return (
    <Form
      form={form}
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
          {uniqueCategories?.map((category, index) => (
            <Option key={index} value={category}>
              {category}
            </Option>
          ))}
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
      <Form.Item label="Featured" name="featured" valuePropName="checked">
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
          {editProductData ? "Update Product" : "Add Product"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
