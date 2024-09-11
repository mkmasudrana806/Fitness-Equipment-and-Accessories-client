import styled from "styled-components";
import ProductDetailsCart from "../../components/products/ProductDetailsCart";
import RelatedProducts from "../../components/products/relatedProducts/RelatedProducts";
import ProductReviewComments from "../../components/products/productReviewComment/ProductReviewComments";


const ProductDetailsPage = () => {
  return (
    <ProductDetailPage>
      <ProductDetailsCart />
      <RelatedProducts />
      <ProductReviewComments />
    </ProductDetailPage>
  );
};

export default ProductDetailsPage;

// product details page
const ProductDetailPage = styled.div``;
