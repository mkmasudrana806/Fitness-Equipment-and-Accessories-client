import ProductDetailsCart from "../../components/products/ProductDetailsCart";
import RelatedProducts from "../../components/products/relatedProducts/RelatedProducts";
import ProductReviewComments from "../../components/products/productReviewComment/ProductReviewComments";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../components/messages/LoadingComponent";
import ErrorComponent from "../../components/messages/ErrorComponent";
import DataNotFound from "../../components/messages/DataNotFound";
import { useGetProductByIdQuery } from "../../redux/features/products/productApi";

const ProductDetailsPage = () => {
  const id = useParams<{ id: string }>();

  const {
    data: product,
    isError,
    isFetching,
    isLoading,
  } = useGetProductByIdQuery(id?.id);

  console.log(id.id, product);

  let content = null;
  // component to render
  if (isLoading || isFetching) {
    content = <LoadingComponent />;
  } else if (!isLoading && isError) {
    content = <ErrorComponent />;
  } else if (!isLoading && !isError && !product?.data) {
    content = <DataNotFound />;
  } else if (product?.data) {
    content = (
      <>
        <ProductDetailsCart />
        <RelatedProducts category={product?.data?.category} />
        <ProductReviewComments />
      </>
    );
  }
  return <div>{content}</div>;
};

export default ProductDetailsPage;
