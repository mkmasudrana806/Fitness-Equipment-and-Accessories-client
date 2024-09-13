import styled from "styled-components";
import { useState } from "react";
import { Slider, Checkbox, Input, Row, Col, Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

const ProductFilters = () => {
  const [range, setRange] = useState<[number, number]>([20, 50]);

  // Handle when slider changes
  const handleSliderChange = (newRange: number[]) => {
    setRange([newRange[0], newRange[1]]);
  };

  // Handle when input changes
  const handleInputChange = (type: "start" | "end", value: number) => {
    if (type === "start") {
      setRange([Math.min(value, range[1]), range[1]]); // Ensure start is less than end
    } else {
      setRange([range[0], Math.max(value, range[0])]); // Ensure end is greater than start
    }
  };

  // Handle input blur event (like pressing "Enter")
  const handleInputBlur = (type: "start" | "end", value: number) => {
    handleInputChange(type, value);
  };
  return (
    <FiltersSide>
      <Button
        style={{ width: "100%" }}
        icon={<ClearOutlined />}
        iconPosition="end"
      >
        Clear Filters
      </Button>
      {/* price filter  */}
      <div className="price-filter">
        <h1 style={{ fontSize: "1.5rem", marginTop: "16px" }}>Price</h1>
        <hr />
        <Slider
          range
          value={range}
          defaultValue={[20, 50]}
          min={0}
          max={100}
          onChange={handleSliderChange}
        />
        <Row gutter={16}>
          <Col span={12}>
            <Input
              type="number"
              min={0}
              value={range[0]}
              onChange={(e) =>
                handleInputChange("start", Number(e.target.value))
              }
              onBlur={(e) => handleInputBlur("start", Number(e.target.value))}
            />
          </Col>
          <Col span={12}>
            <Input
              type="number"
              min={0}
              value={range[1]}
              onChange={(e) => handleInputChange("end", Number(e.target.value))}
              onBlur={(e) => handleInputBlur("end", Number(e.target.value))}
            />
          </Col>
        </Row>
      </div>

      {/* category filters  */}
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
