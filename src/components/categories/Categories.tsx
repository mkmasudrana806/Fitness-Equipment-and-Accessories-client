import logo from "../../assets/images/hero.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCart from "./CategoryCart";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Categories = () => {
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
        <SwiperSlide
          key={1}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <CategoryCart categoryName="Dumble" key={1} imageUrl={logo} />
        </SwiperSlide>
        <SwiperSlide
          key={2}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <CategoryCart categoryName="Dumble" key={1} imageUrl={logo} />
        </SwiperSlide>
        <SwiperSlide
          key={3}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <CategoryCart categoryName="Dumble" key={1} imageUrl={logo} />
        </SwiperSlide>
        <SwiperSlide
          key={4}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <CategoryCart categoryName="Dumble" key={1} imageUrl={logo} />
        </SwiperSlide>
        <SwiperSlide
          key={5}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <CategoryCart categoryName="Dumble" key={1} imageUrl={logo} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
