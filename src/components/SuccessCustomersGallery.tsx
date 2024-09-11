import styled from "styled-components";
import gymImg1 from "../assets/images/gymPerson1.png";
import gymImg2 from "../assets/images/gymPerson3.png";
import gymImg3 from "../assets/images/gymPerson5.png";
import gymImg4 from "../assets/images/gymPerson7.png";
import gymImg5 from "../assets/images/gymPerson9.png";
import gymImg6 from "../assets/images/gymPerson11.png";
import gymImg7 from "../assets/images/gymPerson2.png";
import gymImg8 from "../assets/images/gymPerson4.png";
import gymImg9 from "../assets/images/gymPerson6.png";
import gymImg10 from "../assets/images/gymPerson8.png";
import gymImg11 from "../assets/images/gymPerson10.png";
import gymImg12 from "../assets/images/gymPerson12.png";

const SuccessCustomersGallery = () => {
  return (
    <CustomersGallery>
      <h1>Transformations with Our Fitness Products</h1>
      <Galleries>
        <div className="gallery-item">
          <img src={gymImg1} alt="Image 1" />
        </div>
        <div className="gallery-item">
          <img src={gymImg2} alt="Image 2" />
        </div>
        <div className="gallery-item">
          <img src={gymImg3} alt="Image 3" />
        </div>
        <div className="gallery-item">
          <img src={gymImg4} alt="Image 4" />
        </div>
        <div className="gallery-item">
          <img src={gymImg5} alt="Image 5" />
        </div>
        <div className="gallery-item">
          <img src={gymImg6} alt="Image 6" />
        </div>
        <div className="gallery-item">
          <img src={gymImg7} alt="Image 7" />
        </div>
        <div className="gallery-item">
          <img src={gymImg8} alt="Image 8" />
        </div>
        <div className="gallery-item">
          <img src={gymImg9} alt="Image 9" />
        </div>
        <div className="gallery-item">
          <img src={gymImg10} alt="Image 10" />
        </div>
        <div className="gallery-item">
          <img src={gymImg11} alt="Image 11" />
        </div>
        <div className="gallery-item">
          <img src={gymImg12} alt="Image 12" />
        </div>
      </Galleries>
    </CustomersGallery>
  );
};

export default SuccessCustomersGallery;

const CustomersGallery = styled.div`
  margin-top: 50px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;
const Galleries = styled.div`
  column-count: 4;
  column-gap: 16px;
  width: 100%;

  .gallery-item {
    break-inside: avoid;
    margin-bottom: 16px;
  }

  .gallery-item img {
    width: 100%;
    display: block;
  }

  @media screen and (max-width: 768px) {
    column-count: 2;
    column-gap: 8px;
    .gallery-item {
      margin-bottom: 8px;
    }
  }
`;
