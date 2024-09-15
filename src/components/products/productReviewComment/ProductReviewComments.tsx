import { Tabs, TabsProps } from "antd";
import Comments from "./Comments";
import ProductFAQ from "./ProductFAQ";
import { useGetAllReviewsQuery } from "../../../redux/features/reviews/reviewsApi";
import ReviewsContainer from "./ReviewsContainer";

const onChange = (key: string) => {
  console.log(key);
};

const ProductReviewComments = ({ productId }: { productId: string }) => {
  const {data: reviews, isLoading, isError} = useGetAllReviewsQuery({ productId });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Reviews(${reviews?.data?.length})`,
      children: <ReviewsContainer productId={productId} isLoading={isLoading} isError={isError} reviews={reviews?.data} />,
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
