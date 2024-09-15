import Categories from "../../components/categories/Categories";
import FeatruedProducts from "../../components/products/FeatruedProducts";
import Hero from "../../components/Hero";
import Benefits from "../../components/Benefits";
import SuccessCustomersGallery from "../../components/SuccessCustomersGallery";
import Testimonials from "../../components/aboutUs/Testimonials";
import { useLoadAllProductsQuery } from "../../redux/features/products/productApi";

const Homepage = () => {
  // redux
  const { data: products, isLoading, isError } = useLoadAllProductsQuery({});

  return (
    <>
      <Hero />
      {!isLoading && !isError && products?.data && (
        <Categories products={products?.data} />
      )}
      {!isLoading && !isError && products?.data && (
        <FeatruedProducts products={products?.data} />
      )}

      <Benefits />
      <SuccessCustomersGallery />
      <Testimonials />
    </>
  );
};

export default Homepage;
