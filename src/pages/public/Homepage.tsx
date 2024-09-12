import Categories from "../../components/categories/Categories";
import FeatruedProducts from "../../components/products/FeatruedProducts";
import Hero from "../../components/Hero";
import Benefits from "../../components/Benefits";
import SuccessCustomersGallery from "../../components/SuccessCustomersGallery";
import Testimonials from "../../components/aboutUs/Testimonials";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeatruedProducts />
      <Benefits />
      <SuccessCustomersGallery />
      <Testimonials />
    </>
  );
};

export default Homepage;
