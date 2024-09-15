import { Drawer, Pagination, PaginationProps } from "antd";
import styled from "styled-components";
import ProductFilters from "../../components/products/ProductFiltersSidebar";
import ProductCard from "../../components/products/ProductCard";
import { useEffect, useState } from "react";
import ProductFiltersHeader from "../../components/products/ProductFiltersHeader";
import { useLoadAllProductsQuery } from "../../redux/features/products/productApi";
import LoadingComponent from "../../components/messages/LoadingComponent";
import ErrorComponent from "../../components/messages/ErrorComponent";
import DataNotFound from "../../components/messages/DataNotFound";
import { TProduct } from "../../types/productType";
import { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {   useSearchParams } from "react-router-dom";
import { addCategoryFilters } from "../../redux/features/products/filtersSlice";

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
  // redux
  const dispatch = useAppDispatch();
  const { searchTerm, priceRange, selectedCategories, sort, limit, page } =
    useAppSelector((state: RootState) => state.filters);

  const {
    data: products,
    isLoading,
    isError,

  } = useLoadAllProductsQuery({
    searchTerm,
    priceRange,
    selectedCategories,
    sort,
    limit,
    page,
  });

  // react
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  console.log("com rendered");
  useEffect(() => {
    if (category) {
      console.log("if true");
      dispatch(addCategoryFilters(category));
    }
  }, [category, dispatch]);

  let content = null;
  // component to render
  if (isLoading) {
    content = <LoadingComponent />;
  } else if (!isLoading && isError) {
    content = <ErrorComponent />;
  } else if (!isLoading && !isError && products?.data?.length === 0) {
    content = <DataNotFound />;
  } else if (
    !isLoading &&
    !isError &&
    products?.data &&
    products?.data?.length > 0
  ) {
    content = products?.data?.map((product: TProduct) => (
      <ProductCard key={product?._id} product={product} />
    ));
  }

  return (
    <ProductPage>
      {/* product filters sidebar  */}
      <div className="filters-sidebar">
        <ProductFilters />
      </div>

      <Drawer title="Filters Products" onClose={onClose} open={open}>
        <ProductFilters />
      </Drawer>
      <Container>
        {/* product filters header */}
        <ProductFiltersHeader showDrawer={showDrawer} />

        {/* products containers */}
        <ProductsContainer>{content}</ProductsContainer>

        {/* paginations  */}
        {!isLoading && (
          <Pagination
            style={{ margin: "30px 0px" }}
            align="center"
            defaultCurrent={1}
            total={500}
            itemRender={itemRender}
          />
        )}
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
  column-gap: 16px;
  row-gap: 24px;

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
