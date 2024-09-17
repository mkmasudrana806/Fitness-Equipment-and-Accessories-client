import { Button, Result } from "antd";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const PurchaseSuccessMessage = () => {
  // redux
  const userOrders = useAppSelector((state) => state.orders.userOrders);

  // react
  const { id } = useParams<{ id: string }>();
  const [orderId, setOrderId] = useState<boolean>(false);

  useEffect(() => {
    const isOrderFound = userOrders?.find((order) => order?._id === id);
    if (isOrderFound) {
      setOrderId(true);
    }
  }, [id, userOrders, orderId]);

  return (
    <Result
      status={orderId ? "success" : "warning"}
      title={
        orderId
          ? "Successfully Purchased Your Products"
          : "You have not purchased any product now!"
      }
      subTitle={
        orderId
          ? `Your order id: ${id}. it will takes some days to deliver to your locaion, please wait.`
          : ""
      }
      extra={
        orderId
          ? [
              <NavLink key={"my-orders"} to={"/user/my-orders"}>
                <Button type="primary">My Orders</Button>
              </NavLink>,
              <NavLink key={"buy-again"} to={"/products"}>
                <Button>Buy Again</Button>
              </NavLink>,
            ]
          : [
              <NavLink key={"buy-again"} to={"/products"}>
                <Button>Buy now</Button>
              </NavLink>,
            ]
      }
    />
  );
};

export default PurchaseSuccessMessage;
