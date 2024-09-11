import React from "react";
import styled from "styled-components";

import priceImg from "../assets/icons/price.png";
import portableImg from "../assets/icons/portable.png";
import qualityImg from "../assets/icons/quality.png";
import wideProductImg from "../assets/icons/wide product.png";
import benefitGallery1 from "../assets/images/benefit1.png";
import benefitGallery2 from "../assets/images/benefit2.png";
import benefitGallery3 from "../assets/images/benefit3.png";
import benefitGallery4 from "../assets/images/benefit4.png";

const Benefits = () => {
  return (
    <BenefitsContainer>
      {/* benefit gallery  */}
      <BenefitsGallery className="benefits-gallery">
        <div className="image image-1">
          <img src={benefitGallery1} alt="" />
        </div>
        <div className="image image-2">
          <img src={benefitGallery2} alt="" />
        </div>
        <div className="image image-3">
          <img src={benefitGallery3} alt="" />
        </div>
        <div className="image image-4">
          <img src={benefitGallery4} alt="" />
        </div>
      </BenefitsGallery>

      {/* benefits  */}
      <div className="benefits">
        <h1 style={{ fontSize: "2.5rem", margin: "0px" }}>Benfits </h1>
        <p style={{ fontSize: "1rem", margin: "16px 0px 32px 0px" }}>
          Regular fitness improves cardiovascular health, boosts energy,
          enhances mood, strengthens muscles, aids weight management, and
          promotes overall well-being.
        </p>
        <BenefitLists>
          {/* benefit item  */}
          <div className="list-item">
            <img src={qualityImg} alt="" />
            <div>
              <h3>High-Quality Materials</h3>
              <p>Durable and reliable for long-term use</p>
            </div>
          </div>
          {/* benefit item  */}
          <div className="list-item">
            <img src={wideProductImg} alt="" />
            <div>
              <h3>Wide Product Range</h3>
              <p>Equipment for all fitness levels and goals</p>
            </div>
          </div>
          {/* benefit item  */}
          <div className="list-item">
            <img src={priceImg} alt="" />
            <div>
              <h3>Affordable Prices</h3>
              <p>Competitive pricing for premium gear</p>
            </div>
          </div>
          {/* benefit item  */}
          <div className="list-item">
            <img src={portableImg} alt="" />
            <div>
              <h3>Compact and Portable</h3>
              <p>Ideal for home gyms or travel</p>
            </div>
          </div>
        </BenefitLists>
      </div>
    </BenefitsContainer>
  );
};

export default Benefits;

// benefits container
const BenefitsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 32px;
  align-items: center;
  .benefits {
    width: 50%;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    .benefits, .benefits-gallery {
      width: 100%;
    }
  }
`;

// image gallery
const BenefitsGallery = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  .image-1 {
    grid-column: span 3;
  }

  .image-2,
  .image-3,
  .image-4 {
    grid-column: span 1;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// benefits lists
const BenefitLists = styled.div`
  .list-item {
    display: flex;
    column-gap: 8px;
    margin-top: 16px;
    img {
      width: 2.5rem !important;
      height: 2.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;
