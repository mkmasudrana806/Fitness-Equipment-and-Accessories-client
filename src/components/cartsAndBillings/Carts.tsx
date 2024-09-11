import { Pagination } from "antd";
import Cart from "./Cart";
import type { PaginationProps } from "antd";

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

const Carts = () => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Pagination align="center" total={500} itemRender={itemRender} />
    </div>
  );
};

export default Carts;
