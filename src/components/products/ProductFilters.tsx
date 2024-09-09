import { Checkbox, Slider } from "antd";
import styled from "styled-components";

const ProductFilters = () => {
  return (
    <FiltersSide>
      <div className="price-filter">
        <h1 style={{ fontSize: "1.5rem" }}>Price</h1>
        <hr />
        <Slider range defaultValue={[20, 50]} />
      </div>
      <h1 style={{ fontSize: "1.5rem", marginTop: "32px" }}>Category</h1>
      <hr />
      <div className="category-filter">
        <Checkbox>Dumble</Checkbox>
        <Checkbox>Cargo</Checkbox>
        <Checkbox>Raddddddddddd</Checkbox>
      </div>
    </FiltersSide>
  );
};

export default ProductFilters;

const FiltersSide = styled.div`
  .category-filter {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  hr {
    margin: 8px 0px;
    height: 1px;
    background-color: #dbdbdbb3;
    border: none;
  }
`;
