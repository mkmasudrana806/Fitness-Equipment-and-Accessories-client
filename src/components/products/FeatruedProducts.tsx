import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const FeatruedProducts = () => {
  return (
    <FeaturedProduct>
      <div className="container-title">
        <h1>Featured products</h1>
        <Button icon={<ArrowRightOutlined />} iconPosition={"end"}>
          More
        </Button>
      </div>
      <Swiper
        style={{ padding: "4px" }}
        spaceBetween={16}
        slidesPerView={1}
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
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide
          key={2}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "fit-content",
          }}
        >
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide
          key={3}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide
          key={4}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide
          key={5}
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
          }}
        >
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </FeaturedProduct>
  );
};

export default FeatruedProducts;

const FeaturedProduct = styled.div`
  margin-top: 48px;
  .container-title {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2.5rem;
    }
  }
  .products-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`;
