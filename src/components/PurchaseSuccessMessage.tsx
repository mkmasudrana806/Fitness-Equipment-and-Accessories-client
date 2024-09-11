import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

const PurchaseSuccessMessage = () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased Your Products"
      subTitle="Order number: 2017182818828182881, it will takes some days to deliver to your locaion, please wait."
      extra={[
        <NavLink to={"/"}>
          <Button type="primary" key="console">
            Go to Home
          </Button>
        </NavLink>,
        <NavLink to={"/products"}>
          <Button key="buy">Buy Again</Button>
        </NavLink>,
      ]}
    />
  );
};

export default PurchaseSuccessMessage;
