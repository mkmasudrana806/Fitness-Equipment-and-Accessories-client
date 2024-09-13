import { Button, Input, Select, Tooltip } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { TOnClick, TSelectOnChange } from "../../types/reactTypes";

type TProps = {
  showDrawer: TOnClick;
  handleChange: TSelectOnChange;
};

const ProductFiltersHeader = ({ showDrawer, handleChange }: TProps) => {
  return (
    <div className="product-fitlers">
      {/* filter button  */}
      <Tooltip title="Filter Products">
        <FilterButton onClick={showDrawer} icon={<FilterOutlined />} />
      </Tooltip>
      <Input placeholder="Search..." />
      <Select
        defaultValue="Show"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "10", label: "10" },
          { value: "20", label: "20" },
          { value: "50", label: "50" },
        ]}
      />
      <div style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
        <p>Sort: </p>
        <Select
          defaultValue="Default"
          style={{ width: "auto" }}
          onChange={handleChange}
          popupMatchSelectWidth={false}
          options={[
            { value: "Ascending", label: "Ascending(Price)" },
            { value: "Descending", label: "Descending(Price)" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductFiltersHeader;

// filter button show when mobile devices
const FilterButton = styled(Button)`
  min-width: 32px;
  display: none;
  @media screen and (max-width: 1000px) {
    display: inline-block;
  }
`;
