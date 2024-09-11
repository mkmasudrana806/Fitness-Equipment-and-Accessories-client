import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnType } from "antd";
import { Avatar, Button, Input, Space, Table, Tooltip } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

// data type for the table
interface DataType {
  key: React.Key;
  name: string;
  price: number;
  category: string;
}
type DataIndex = keyof DataType;

// product component page
const ProductsManagementPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const isMobileView = useMediaQuery({ query: "(max-width: 600px)" });

  // handle search
  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  // handle reset search
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  // handle get column search props
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

  // data sources
  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown amar sonar bangla ami tomay valobashi New York No. 1 Lake Park, New York No. 1 Lake Park New York No. 1 Lake Park, New York No. 1 Lake Park",
      price: 32,
      category: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      price: 42,
      category: "London No. 2 Lake Park, London No. 2 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      price: 32,
      category: "Sydney No. 1 Lake Park, Sydney No. 1 Lake Park",
    },
  ];

  // handle update product
  const handleUpdate = (_id: string) => {
    console.log("Update product with id:", _id);
  };

  // handle delete product
  const handleDelete = (_id: string) => {
    console.log("Delete product with id:", _id);
  };

  // handle view product
  const handleView = (_id: string) => {
    console.log("View product with id:", _id);
  };

  return (
    <Table
      style={{ transition: "0.3s" }}
      dataSource={data}
      pagination={false}
      size={isMobileView ? "small" : "large"}
      scroll={{ x: 576, y: 500 }}
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
        render={(_, record) => (
          <ActionButtons>
            <Tooltip title="Update this product">
              <Avatar
                icon={<EditFilled />}
                style={{ cursor: "pointer" }}
                onClick={() => handleUpdate(record._id)}
              />
            </Tooltip>
            <Tooltip title="Delete this product">
              <Avatar
                icon={<DeleteFilled />}
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(record._id)}
              />
            </Tooltip>
            <Tooltip title="View this product">
              <Avatar
                icon={<EyeFilled />}
                style={{ cursor: "pointer" }}
                onClick={() => handleView(record._id)}
              />
            </Tooltip>
          </ActionButtons>
        )}
      />
    </Table>
  );
};

export default ProductsManagementPage;

// all actions buttons
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
