import {
  Button,
  Drawer,
  Input,
  Pagination,
  PaginationProps,
  Select,
  Tooltip,
} from "antd";
import styled from "styled-components";
import ProductFilters from "../../components/products/ProductFilters";
import ProductCard from "../../components/products/ProductCard";
import { FilterOutlined } from "@ant-design/icons";
import { useState } from "react";

// paginations props
const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};

// product page
const ProductsPage = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <ProductPage>
      {/* filters sidebar  */}
      <div className="filters-sidebar">
        <ProductFilters />
      </div>

      <Drawer title="Filters Products" onClose={onClose} open={open}>
        <ProductFilters />
      </Drawer>
      <Container>
        {/* product filters  */}
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
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "8px" }}
          >
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

        {/* products containers */}
        <ProductsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsContainer>

        {/* paginations  */}
        <Pagination
          style={{ margin: "30px 0px" }}
          align="center"
          defaultCurrent={1}
          total={500}
          itemRender={itemRender}
        />
      </Container>
    </ProductPage>
  );
};

export default ProductsPage;

// this page
const ProductPage = styled.div`
  display: flex;
  column-gap: 16px;

  .filters-sidebar {
    padding: 8px;
    width: 300px;
  }

  // hide filters sidebar when
  @media screen and (max-width: 1000px) {
    .filters-sidebar {
      display: none;
    }
  }
`;

// filter button show when mobile devices
const FilterButton = styled(Button)`
  min-width: 32px;
  display: none;
  @media screen and (max-width: 1000px) {
    display: inline-block;
  }
`;
// products filter + products container
const Container = styled.div`
  width: 100%;
  margin-top: 8px;
  .product-fitlers {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
`;

// products container
const ProductsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    .product {
      max-width: 250px;
      min-width: 180px;
      height: 270px;
      .img-container {
        height: 120px;
      }
      .info {
        .category {
          font-size: 14px;
          font-weight: 100;
        }
        .title {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }
`;
