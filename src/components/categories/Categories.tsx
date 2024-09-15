// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCart from "./CategoryCart";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { TProduct } from "../../types/productType";

// categories component
const Categories = ({ products }: { products: TProduct[] }) => {
  const uniqueCategories = [
    ...new Set(
      products?.map((product: TProduct) => ({
        _id: product._id,
        category: product.category,
        img: product.productImgUrl,
      }))
    ),
  ];

  return (
    <div>
      <h1
        style={{ fontSize: "2.5rem", marginTop: "48px", marginBottom: "32px" }}
      >
        Made For Your Life
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {uniqueCategories.length > 0 &&
          uniqueCategories.map((product: any) => (
            <SwiperSlide
              key={product._id}
              style={{
                minWidth: "300px",
                maxWidth: "300px",
                height: "300px",
              }}
            >
              <CategoryCart
                categoryName={product.category}
                imageUrl={product?.img}
                category={product?.category}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Categories;
