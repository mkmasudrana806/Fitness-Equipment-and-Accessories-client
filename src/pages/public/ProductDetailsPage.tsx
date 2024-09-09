import styled from "styled-components";
import ProductDetailsCart from "../../components/products/ProductDetailsCart";
import RelatedProducts from "../../components/products/relatedAndReviewProducts/RelatedProducts";
import { Tabs, TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const ProductDetailsPage = () => {
  return (
    <ProductDetailPage>
      <ProductDetailsCart />
      <RelatedProducts />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ProductDetailPage>
  );
};

export default ProductDetailsPage;

// product details page
const ProductDetailPage = styled.div``;
