import { Tabs, TabsProps } from "antd";
import Reviews from "./Reviews";
import Comments from "./Comments";
import ProductFAQ from "./ProductFAQ";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Reviews(10)",
    children: <Reviews />,
  },
  {
    key: "2",
    label: "Comments(15)",
    children: <Comments />,
  },
  {
    key: "3",
    label: "FAQs(5)",
    children: <ProductFAQ />,
  },
];

const ProductReviewComments = () => {
  return (
    <Tabs
      style={{ marginTop: "32px" }}
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default ProductReviewComments;
