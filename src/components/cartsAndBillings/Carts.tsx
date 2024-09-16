import { Pagination } from "antd";
import Cart from "./Cart";
import type { PaginationProps } from "antd";
import { useAppSelector } from "../../redux/hooks";
import DataNotFound from "../messages/DataNotFound";

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
  const carts = useAppSelector((state) => state.carts.items);

  let content = null;
  if (carts && carts.length === 0) {
    content = <DataNotFound />;
  } else if (carts && carts.length > 0) {
    content = carts.map((cart) => <Cart key={cart._id} cart={cart} />);
  }

  return (
    <div style={{ marginBottom: "16px", width: "100%" }}>
      {content}
      {carts?.length > 0 && (
        <Pagination
          align="center"
          total={carts?.length}
          itemRender={itemRender}
        />
      )}
    </div>
  );
};

export default Carts;
