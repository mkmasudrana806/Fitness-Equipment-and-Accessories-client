import featuredImg from "../../assets/images/featured.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import styled from "styled-components";

const ProductCard = () => {
  return (
    <ProductCardContainer className="product">
      <div className="img-container">
        <img src={featuredImg} alt="" />
      </div>
      <div className="info">
        <h1 className="category">Dumble</h1>
        <h1 className="title">
          amar sonar bangla ami tomay valobashi, chirodin tomar akash tomar
          batash amar prane
        </h1>
        <div className="footer">
          <div>
            <h1 style={{ color: "tomato" }}>$500</h1>
            <Rate disabled defaultValue={4} />
          </div>
          <div className="details">
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
      <FeaturedButton className="featured-btn">Featured</FeaturedButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  position: relative;
  max-width: 300px;
  min-width: 250px;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  .img-container {
    width: 100%;
    overflow: hidden;
    height: 200px;
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  .info {
    padding: 10px;
    .category {
      font-weight: 600;
    }
    .title {
      font-size: 1.3rem;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Number of lines */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 5px;
      font-weight: 500;
    }
    .footer {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .details {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
          rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        cursor: pointer;
      }
    }
  }
`;

const FeaturedButton = styled.button`
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  border: none;
  padding: 3px 5px;
  font-size: 10px;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-position: left center; /* Initial position */

  /* Infinite animation for gradient movement */
  @keyframes gradientShift {
    0% {
      background-position: left center;
    }
    50% {
      background-position: right center;
    }
    100% {
      background-position: left center;
    }
  }

  /* Applying infinite animation */
  animation: gradientShift 1s ease infinite;
`;
