import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnType } from "antd";
import { Avatar, Button, Drawer, Input, Space, Table, Tooltip } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { message, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import {
  useDeleteProductMutation,
  useLoadAllProductsQuery,
} from "../../redux/features/products/productApi";
import { TProduct } from "../../types/productType";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  clearShowProductData,
  deleteProductFromStore,
  loadAllProducts,
  setEditProductData,
  setShowProductData,
} from "../../redux/features/products/productSlice";
import LoadingComponent from "../../components/messages/LoadingComponent";
import ErrorComponent from "../../components/messages/ErrorComponent";
import ShowProductDetails from "./ShowProductDetails";

// data type for the table
interface DataType {
  key: React.Key;
  name: string;
  price: number;
  category: string;
}
type DataIndex = keyof DataType;

// ----------- product component page
const ProductsManagementPage = () => {
  // redux
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const { data, isLoading, isError } = useLoadAllProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();

  // react
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const navigate = useNavigate();

  // open and close show product details
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    dispatch(clearShowProductData());
  };

  // get the media query breakpoints
  const isMobileView = useMediaQuery({ query: "(max-width: 600px)" });

  // load all products
  useEffect(() => {
    if (data?.data && data?.data.length > 0)
      dispatch(loadAllProducts(data?.data));
  }, [dispatch, data?.data]);

  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    return <ErrorComponent />;
  }

  const dataSource = products
    ?.filter((product: TProduct) => !product.isDeleted)
    .map((product: TProduct) => ({
      key: product._id,
      ...product,
    }));

  // ---------- handle search
  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  // ----------- handle reset search
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  // ----------- handle get column search props
  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // ------------ handle update product
  const handleUpdateProduct = (product: TProduct) => {
    dispatch(setEditProductData(product));
    navigate("/admin/add-product");
  };

  // ------------- handle delete product
  const handleDeleteProduct = async (_id: string) => {
    const result = await deleteProduct(_id);
    if (result?.data?.success) {
      dispatch(deleteProductFromStore(_id));
      message.success("Product deleted successfully");
    }
  };

  // handle show product details
  const handleShowProduct = (product: TProduct) => {
    setOpen(true);
    dispatch(setShowProductData(product));
  };

  return (
    <>
      <Table
        style={{ transition: "0.3s", marginTop: "16px" }}
        dataSource={dataSource}
        size={isMobileView ? "small" : "large"}
        scroll={{ x: 576, y: 500 }}
        pagination={{ pageSize: 15 }}
      >
        <Table.Column
          title="Name"
          dataIndex="name"
          key="name"
          width={200}
          ellipsis={{
            showTitle: false,
          }}
          {...getColumnSearchProps("name")}
          render={(name) => (
            <Tooltip placement="topLeft" title={name}>
              {name}
            </Tooltip>
          )}
        />
        <Table.Column
          title="Price"
          dataIndex="price"
          key="price"
          width={80}
          sorter={(a, b) => a.price - b.price}
          sortDirections={["descend", "ascend"]}
        />
        <Table.Column
          title="Category"
          dataIndex="category"
          key="category"
          width={100}
          ellipsis={{
            showTitle: false,
          }}
          {...getColumnSearchProps("category")}
          sorter={(a, b) => a.category.length - b.category.length}
          sortDirections={["descend", "ascend"]}
          render={(category) => (
            <Tooltip placement="topLeft" title={category}>
              {category}
            </Tooltip>
          )}
        />
        <Table.Column
          title="Actions"
          key="actions"
          width={120}
          render={(_, record: TProduct) => (
            <ActionButtons>
              <Tooltip title="Update product">
                <Avatar
                  icon={<EditFilled />}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleUpdateProduct(record)}
                />
              </Tooltip>

              <Tooltip title="Delete product">
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => handleDeleteProduct(record._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Avatar
                    icon={<DeleteFilled />}
                    style={{ cursor: "pointer" }}
                  />
                </Popconfirm>
              </Tooltip>
              <Tooltip title="View product">
                <Avatar
                  icon={<EyeFilled />}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShowProduct(record)}
                />
              </Tooltip>
            </ActionButtons>
          )}
        />
      </Table>
      {/* show product details  */}
      <Drawer
        size="large"
        title="Product Details"
        onClose={onClose}
        open={open}
      >
        <ShowProductDetails />
      </Drawer>
    </>
  );
};

export default ProductsManagementPage;

// products actions buttons
const ActionButtons = styled(Space)`
  .ant-avatar {
    cursor: pointer;
    min-width: 32px;
    background-color: #ff917d;
    &:hover {
      background-color: #fa7760;
    }
  }
`;
