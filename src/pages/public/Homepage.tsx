import Categories from "../../components/categories/Categories";
import FeatruedProducts from "../../components/products/FeatruedProducts";
import Hero from "../../components/Hero";
import Benefits from "../../components/Benefits";
import SuccessCustomersGallery from "../../components/SuccessCustomersGallery";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeatruedProducts />
      <Benefits />
      <SuccessCustomersGallery />
    </>
  );
};

export default Homepage;
