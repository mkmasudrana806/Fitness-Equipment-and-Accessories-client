import { Button, Input, Select, Tooltip } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { TInputChangeEvent, TOnClick } from "../../types/reactTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  searchProducts,
  setLimit,
  setSort,
} from "../../redux/features/products/filtersSlice";

type TProps = {
  showDrawer: TOnClick;
};

const ProductFiltersHeader = ({ showDrawer }: TProps) => {
  // redux
  const dispatch = useAppDispatch();
  const { sort, limit } = useAppSelector((state: RootState) => state.filters);

  // -------- handle product show limits
  const handleShowProductsLimit = (value: number) => {
    dispatch(setLimit(value));
  };

  // --------- handle sort products
  const handleSortProducts = (event: string) => {
    dispatch(setSort(event));
  };

  // -------- handle search product
  let debounceTimeout: ReturnType<typeof setTimeout>;
  const handleSearchRroduct = (event: TInputChangeEvent) => {
    const query = event.target.value;
    // Clear previous timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    // Set new timeout
    debounceTimeout = setTimeout(() => {
      dispatch(searchProducts(query));
    }, 500); // Adjust the delay as needed
  };

  return (
    <div className="product-fitlers">
      {/* filter button  */}
      <Tooltip title="Filter Products">
        <FilterButton onClick={showDrawer} icon={<FilterOutlined />} />
      </Tooltip>
      <Input onChange={handleSearchRroduct} placeholder="Search..." />
      <Select
        defaultValue={Number(limit)}
        style={{ width: 120 }}
        onChange={handleShowProductsLimit}
        options={[
          { value: "10", label: "10" },
          { value: "20", label: "20" },
          { value: "50", label: "50" },
        ]}
      />
      <div style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
        <p>Sort: </p>
        <Select
          defaultValue={sort}
          value={sort}
          style={{ width: "auto" }}
          onChange={handleSortProducts}
          popupMatchSelectWidth={false}
          options={[
            { value: "name", label: "Ascending(Price)" },
            { value: "-name", label: "Descending(Price)" },
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
